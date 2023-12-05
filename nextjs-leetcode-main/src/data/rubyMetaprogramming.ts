// data/rubyMetaProgramming.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const rubyMetaProgramming: LessonData = {
    title: "Ruby Metaprogramming",
              topics: [
                {
                  id: 28,
                  title: "Dynamic Programming and Reflection",
                  content: `
                          Exploring metaprogramming features in Ruby. <br/>
                          - Dynamic method definition and method_missing. <br/>
                          - Reflection and introspection capabilities in Ruby. <br/>
                        `,
                        videoId: ['bg2KvfwxDnM', 'LW7u4njsYNc']
                },
                {
                  id: 29,
                  title: "Ruby DSLs (Domain-Specific Languages)",
                  content: `
                          Creating and using DSLs in Ruby for specific domains. <br/>
                          - DSL syntax, instance_eval, and instance_exec usage. <br/>
                          - Implementing internal DSLs for cleaner and expressive code. <br/>
                        `,
                        videoId: ['W5kaiwm5mZE']
                },
                // Add more topics for Ruby Metaprogramming
              ],
};

export default rubyMetaProgramming;