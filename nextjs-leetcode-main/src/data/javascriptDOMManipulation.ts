// data/javascriptDOMManipulation.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javascriptDOMManipulation: LessonData = {
    title: "JavaScript DOM Manipulation",
              topics: [
                {
                  id: 23,
                  title: "DOM and Event Handling",
                  content: `
                          Manipulating the Document Object Model (DOM) in JavaScript. <br/>
                          - Accessing and modifying HTML/CSS elements. <br/>
                          - Adding event listeners and handling user interactions. <br/>
                        `, 
                        videoId: ['5fb2aPlgoys']
                },
                {
                  id: 24,
                  title: "AJAX and Fetch API",
                  content: `
                          Making asynchronous HTTP requests using AJAX and Fetch API. <br/>
                          - Fetching data from APIs and handling responses. <br/>
                          - Performing CRUD operations with server-side data. <br/>
                        `,
                        videoId: ['82hnvUYY6QA', 'cuEtnrL9-H0']
                },
                // Add more topics for JavaScript DOM Manipulation
              ],
};

export default javascriptDOMManipulation;