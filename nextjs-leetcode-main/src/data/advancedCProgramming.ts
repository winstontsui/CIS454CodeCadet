// data/advancedCProgramming.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const advancedCProgramming: LessonData = {
    title: "Advanced C Programming",
    topics: [
      {
        id: 5,
        title: "Memory Management in C",
        content: `
                Understanding heap and stack memory. <br/>
                - Dynamic memory allocation using malloc, calloc, realloc, and free. <br/>
                - Memory leaks and best practices for memory management. <br/>
              `,
        videoId: ['Xzm-8-Mdm2Q']
      },
      {
        id: 6,
        title: "File I/O Operations",
        content: `
                Reading from and writing to files in C. <br/>
                - File handling using fopen, fclose, fread, fwrite functions. <br/>
                - Working with file streams and error handling. <br/>
              `,
        videoId: ['e-srF6c3TJ8']
      },
      {
        id: 7,
        title: "Structures and Pointers",
        content: `
                Advanced usage of structures and pointers in C. <br/>
                - Pointer arithmetic and its applications in structures. <br/>
                - Implementing complex data structures using pointers. <br/>
              `,
        videoId: ['w5XM1N7hLgc']
      },
      {
        id: 11,
        title: "C Strings",
        content: `
          Strings in C are arrays of characters, terminated by a null character '\0'. <br/><br/>

          Strings are used for storing text/characters. <br/><br/>

          For example, "Hello World" is a string of characters. <br/><br/>

          Unlike many other programming languages, C does not have a String type to easily create string variables. <br/>
          Instead, you must use the char type and create an array of characters to make a string in C: <br/><br/>


          - Example: 'char myString[] = "Hello";' declares a string variable 'myString' with the value "Hello". <br/>
        `,
        videoId: ['5TzFNouc0PE']
      },
      {
        id: 12,
        title: "C String Functions",
        content: `
          C provides a set of standard library functions for manipulating strings. <br/>
          To use them, you must include the <string.h> header file in your program: <br/><br/>

          - Example: 'strlen', 'strcpy', 'strcat', etc. <br/>
        `,
        videoId: ['5p4YpQmZdwU']
      },
      // Feel free to add more topics for Advanced C Programming
    ],
};

export default advancedCProgramming;