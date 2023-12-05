// data/javascriptFunctionsAndScope.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javascriptFunctionsAndScope: LessonData = {
    title: "JavaScript Functions and Scope",
              topics: [
                {
                  id: 3,
                  title: "Functions in JavaScript",
                  content: `
                          Exploring functions as first-class citizens in JavaScript. <br/>
                          - Function declaration vs. function expression. <br/>
                          - Scope, closures, and lexical environment in JavaScript. <br/>
                        `,
                        videoId: ['j1laALb8OVM']
                },
                {
                  id: 21,
                  title: "Asynchronous JavaScript",
                  content: `
                          Understanding asynchronous programming in JavaScript. <br/>
                          - Callbacks, Promises, and async/await syntax. <br/>
                          - Handling asynchronous operations and avoiding callback hell. <br/>
                        `,
                        videoId: ['ZYb_ZU8LNxs']
                },
                // Add more topics for JavaScript Functions and Scope
              ],
};

export default javascriptFunctionsAndScope;