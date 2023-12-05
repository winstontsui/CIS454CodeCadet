// data/javascriptBasics.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javascriptBasics: LessonData = {
    title: "JavaScript Basics",
        topics: [
        {
            id: 1,
            title: "Variables in JavaScript",
            content: `
                    Variables in JavaScript are containers for storing data values. <br/>
                    - 'var', 'let', and 'const' are used to declare variables. <br/>
                    - Example: 'let message = "Hello";' declares a variable message with the string value "Hello". <br/>
                `,
                videoId: ['TOkU5HxES1o']
        },
        {
            id: 2,
            title: "Data Types in JavaScript",
            content: `
                    JavaScript supports various data types such as number, string, boolean, object, etc. <br/>
                    - 'number' stores numeric values, 'string' stores text, 'boolean' stores true/false. <br/>
                    - Example: 'let isTrue = true;' declares a variable isTrue with a boolean value true. <br/>
                `,
                videoId: ['nCwQY8inRvU']
        },
        // Add more topics for JavaScript Basics
        ],
};

export default javascriptBasics;