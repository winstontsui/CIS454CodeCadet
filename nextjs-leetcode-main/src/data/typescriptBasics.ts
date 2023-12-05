// data/typescriptBasics.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const typescriptBasics: LessonData = {
    title: "TypeScript Basics",
              topics: [
                {
                  id: 1,
                  title: "Interfaces in TypeScript",
                  content: `
                          Interfaces define the structure of an object in TypeScript. <br/>
                          - Interfaces can describe properties, methods, and their types. <br/>
                          - Example: 'interface Person { name: string; age: number; }' <br/>
                        `,
                        videoId: ['VbW6vWTaHOY', 'XPGFqx8Vg-Y']
                },
                {
                  id: 2,
                  title: "Generics in TypeScript",
                  content: `
                          Generics enable writing reusable code components in TypeScript. <br/>
                          - Generics allow the creation of functions and classes that work with any data type. <br/>
                          - Example: 'function identity<T>(arg: T): T { return arg; }' <br/>
                        `,
                        videoId: ['IOzkOXSz9gE', 'RWG66gIo7PM']
                },
                {
                  id: 3,
                  title: "Modules and Namespaces in TypeScript",
                  content: `
                          TypeScript supports modules and namespaces to organize and encapsulate code. <br/>
                          - Modules group related code, and namespaces prevent naming conflicts. <br/>
                          - Example: 'namespace MathOperations { export function add(a, b) { return a + b; } }' <br/>
                        `,
                        videoId: ['EpOPR03z4Vw', 'XUinUO_KGtU']
                },
                // Add more topics for TypeScript Basics
              ],
};

export default typescriptBasics;