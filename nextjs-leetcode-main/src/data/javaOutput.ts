// data/javaOutput.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javaOutput: LessonData = {
    title: "Java Output",
    topics: [
        {
            id: 1,
            title: "Output in Java",
            content: `
                    Java provides several ways to output data: System.out.println(), System.out.print(), etc. <br/>
                    - 'System.out.println()' prints the argument passed and moves to the new line. <br/>
                    - 'System.out.print()' prints the argument passed without moving to the new line. <br/>
                  `,
                  videoId: ['KstJV8NNVAY']
          },
          {
            id: 2,
            title: "Variables and Data Types in Java",
            content: `
                    Java requires variables to be declared with a specific data type. <br/>
                    - 'int' stores integers, 'double' stores floating-point numbers, 'String' stores strings. <br/>
                    - Example: 'int x = 10;' declares an integer variable x with a value of 10. <br/>
                  `,
                  videoId: ['so1iUWaLmKA']
          },
        // Add more topics for Python Basics
      ],
};

export default javaOutput;