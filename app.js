const { respObj } = require("./response-obj");
const fs = require("fs");

const fullData = [];
for (const student of respObj.students) {
  fullData.push({ ...student, data: [] });
}
for (let i = 0; i < fullData.length; i++) {
  for (const monthData of respObj.student_book_proficiency) {
    //push the month
    fullData[i].data.push({ month: monthData.month, readings: [] });
    const monthIndex = fullData[i].data.length - 1;

    //every month has many books
    for (const bookData of monthData.data) {
      //don't push the books first
      for (const studentData of bookData.student_data) {
        if (fullData[i].student_id == studentData.student_id) {
          //push it with student
          fullData[i].data[monthIndex].readings.push({
            book_id: bookData.book_id,
            book_name: bookData.book_name,
            proficiency: studentData.proficiency,
          });
        }
      }
    }
  }
}

const json = JSON.stringify(fullData);
fs.writeFileSync("output.json", json);
