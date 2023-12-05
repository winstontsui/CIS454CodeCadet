// data/pythonFunctionsAndModules.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const pythonFunctionsAndModules: LessonData = {
    title: "Python Functions and Modules",
    topics: [
        {
            id: 11,
            title: "Defining Functions",
            content: `
                    Creating and using functions in Python. <br/>
                    - Parameters, return statements, and function scope. <br/>
                    - Recursion and function abstraction. <br/>
                  `,
            videoId: ['NSbOtYzIQI0']
          },
          {
            id: 12,
            title: "Python Modules and Packages",
            content: `
                    Understanding modules, importing, and using external libraries. <br/>
                    - Creating and organizing modules for code reusability. <br/>
                    - Packaging and distributing Python modules as libraries. <br/>
                  `, 
            videoId: ['1oFneicTaII', 't3pQo0mFb-U']
          },
        // Add more topics for Python Basics
      ],
};

export default pythonFunctionsAndModules;