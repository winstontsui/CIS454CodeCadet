// data/cBasicsData.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const cBasicsData: LessonData = {
  title: "C Basics",
  topics: [
    {
      id: 1,
      title: "Variables",
      content: `
        In C, a variable is a named storage location that holds a value. <br/>
        - Variables must be declared with a specific data type before use. <br/>
        - Common data types in C include int, float, char, and double. <br/>
        - Example: 'int age = 25;' declares an integer variable 'age' with a value of 25. <br/>
        - Variables in C have a scope that defines their visibility within blocks. <br/>
      `,
      videoId: ['aIQk1O08zpg']
    },
    {
      id: 5,
      title: "C Booleans",
      content: `
      Very often, in programming, you will need a data type that can only have one of two values, like: <br/><br/>

            YES / NO <br/>
            ON / OFF <br/>
            RUE / FALSE <br/> <br/>

        For this, C has a bool data type, which is known as booleans.<br/>
        Booleans represent values that are either true or false. <br/>
        In C, boolean values are also represented using the standard int data type. <br/>
        - 0 represents false, and any non-zero value represents true. <br/>
        - Example: 'int isTrue = 1;' declares a boolean variable 'isTrue' with a value of true. <br/>
      `,
      videoId: ['TybmJxXRV80']
    },
    {
      id: 2,
      title: "Functions in C",
      content: `
        Functions in C allow code reuse by encapsulating a set of statements into a block. <br/>
        - Functions have a signature with a return type, name, and parameters. <br/>
        - Example: 'int add(int a, int b) { return a + b; }' <br/>
        - Functions can be called from other parts of the program to perform specific tasks. <br/>
      `,
      videoId: ['ou_G7_zodR4']
    },
    {
      id: 3,
      title: "Pointers in C",
      content: `
        Pointers in C store the memory address of another variable. <br/>
        - They are used for dynamic memory allocation and manipulation. <br/>
        - Example: 'int *ptr;' declares a pointer to an integer variable. <br/>
      `,
      videoId: ['DplxIq0mc_Y']
    },
    {
      id: 4,
      title: "Arrays in C",
      content: `
        Arrays in C store multiple elements of the same data type in contiguous memory locations. <br/>
        - They can be accessed using index notation. <br/>
        - Example: 'int numbers[5] = {1, 2, 3, 4, 5};' <br/>
      `,
      videoId: ['eE9MnoS0lc0']
    },
    // Add more topics for C Basics as needed
  ],
};

export default cBasicsData;