// data/pythonBasics.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const pythonBasics: LessonData = {
    title: "Python Basics",
    topics: [
        {
          id: 1,
          title: "Variables in Python",
          content: `
                  In Python, variables are used to store data values. <br/>
                  - Variables do not need explicit declaration to reserve memory space. <br/>
                  - The assignment operator (=) is used to assign values to variables. <br/>
                  - Example: 'x = 5' assigns the value 5 to variable x. <br/>
                `,
        videoId: ['X6TcB0DNLE8&']
        },
        {
          id: 2,
          title: "Data Types in Python",
          content: `
                  Python has various data types including int, float, str, list, tuple, dict, etc. <br/>
                  - 'int' stores integers, 'float' stores floating-point numbers, 'str' stores strings. <br/>
                  - Example: 'my_list = [1, 2, 3]' creates a list containing integers. <br/>
                `,
        videoId: ['ppsCxnNm-JI']
        },
        // Add more topics for Python Basics
      ],
};

export default pythonBasics;