// data/rubyAdvancedRubyProgramming.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const rubyAdvancedRubyProgramming: LessonData = {
    title: "Advanced Ruby Programming",
              topics: [
                {
                  id: 4,
                  title: "Modules and Mixins in Ruby",
                  content: `
                          Understanding modules and mixins for code reuse in Ruby. <br/>
                          - Creating and including modules, module functions, and constants. <br/>
                          - Implementing mixins and their benefits in Ruby programming. <br/>
                        `,
                        videoId: ['50wiKEf1d0I', 'EoNkiBixAmg']
                },
                {
                  id: 26,
                  title: "Exception Handling in Ruby",
                  content: `
                          Handling exceptions and errors in Ruby programs. <br/>
                          - Using begin-rescue-end blocks for exception handling. <br/>
                          - Custom exception classes and raising exceptions in Ruby. <br/>
                        `,
                        videoId: ['J7R94i2bhlI']
                },
                // Add more topics for Advanced Ruby Programming
              ],
};

export default rubyAdvancedRubyProgramming;