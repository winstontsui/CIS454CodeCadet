// data/javaExceptionHandling.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javaExceptionHandling: LessonData = {
    title: "Java Exception Handling",
              topics: [
                {
                  id: 18,
                  title: "Try-Catch Blocks",
                  content: `
                          Handling exceptions in Java using try-catch blocks. <br/>
                          - Catching specific exceptions and multiple catch blocks. <br/>
                          - Using finally block for cleanup and resource management. <br/>
                        `, 
                        videoId: ['ceGnVDrMy1A', 'adTDlH0lhaA']
                },
                {
                  id: 19,
                  title: "Custom Exceptions",
                  content: `
                          Creating and using custom exception classes in Java. <br/>
                          - Extending Exception class to define custom exceptions. <br/>
                          - Throwing and handling custom exceptions in Java programs. <br/>
                        `,
                        videoId: ['OIozDnGYqIU']
                },
        // Add more topics for Python Basics
      ],
};

export default javaExceptionHandling;