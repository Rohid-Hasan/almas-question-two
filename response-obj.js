exports.respObj = {
  status: 1,
  books: [
    "Hey, Diddle, Diddle (Dd)",
    "Jack and Jill (Jj)",
    "Jack y Jill (Jj)",
    "Baa, baa, oveja negra",
    "Pat-a-cake (Bb)",
    "Twinkle, Twinkle, Little Star",
  ],
  students: [
    {
      student_id: 2,
      student_name: "jp student",
      img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
    },
    {
      student_id: 4,
      student_name: "Almas Hossain csv",
      img: "https://plabook-data.s3.amazonaws.com/avatar/Avatar_4.png",
    },
  ],
  student_book_proficiency: [
    {
      month: "Sep",
      data: [
        {
          book_id: 5,
          book_name: "Hey, Diddle, Diddle (Dd)",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 0.0,
            },
            {
              student_id: 4,
              student_name: "Almas Hossain csv",
              img: "https://plabook-data.s3.amazonaws.com/avatar/Avatar_4.png",
              proficiency: 0.0,
            },
          ],
        },
      ],
    },
    {
      month: "Oct",
      data: [
        {
          book_id: 7,
          book_name: "Jack and Jill (Jj)",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 0.0,
            },
          ],
        },
        {
          book_id: 8,
          book_name: "Jack y Jill (Jj)",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 0.0,
            },
          ],
        },
      ],
    },
    {
      month: "Nov",
      data: [
        {
          book_id: 2,
          book_name: "Baa, baa, oveja negra",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 50.0,
            },
          ],
        },
        {
          book_id: 3,
          book_name: "Pat-a-cake (Bb)",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 88.33333333333333,
            },
          ],
        },
        {
          book_id: 23,
          book_name: "Twinkle, Twinkle, Little Star",
          student_data: [
            {
              student_id: 2,
              student_name: "jp student",
              img: "https://plabook-data.s3.amazonaws.com/avatar/avatar2.png",
              proficiency: 60,
            },
          ],
        },
      ],
    },
  ],
};
