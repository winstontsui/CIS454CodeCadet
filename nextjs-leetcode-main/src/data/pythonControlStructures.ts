// data/pythonControlStructures.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const pythonControlStructures: LessonData = {
    title: "Python Control Structures",
    topics: [
        {
            id: 3,
            title: "Conditional Statements",
            content: `
                    Using if, elif, and else for decision-making in Python. <br/>
                    - Handling multiple conditions using logical operators (and, or, not). <br/>
                    - Nested if statements and best practices for readability. <br/>
                  `,
            videoId: ['DZwmZ8Usvnk']
          },
        {
            id: 10,
            title: "Loops in Python",
            content: `
                    Working with for and while loops in Python. <br/>
                    - Iterating over sequences and performing operations. <br/>
                    - Loop control statements: break, continue, and else clauses. <br/>
                  `,
            videoId: ['M0RsvJnaGYg']
        },
        // Add more topics for Python Basics
      ],
};

export default pythonControlStructures;