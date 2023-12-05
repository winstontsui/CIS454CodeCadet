// data/rubyBasics.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const rubyBasics: LessonData = {
    title: "Ruby Basics",
              topics: [
                {
                  id: 1,
                  title: "Control Structures in Ruby",
                  content: `
                          Ruby supports control structures like if statements, loops, and iterators. <br/>
                          - 'if', 'else', 'elsif', 'unless' are used for conditional branching. <br/>
                          - Example: 'if condition; puts "true"; else; puts "false"; end;' <br/>
                        `,
                        videoId: ['mX_51k7agEs']
                },
                {
                  id: 2,
                  title: "Arrays and Hashes in Ruby",
                  content: `
                          Arrays and hashes are used to store collections of data in Ruby. <br/>
                          - Arrays store an ordered collection, while hashes store key-value pairs. <br/>
                          - Example: 'arr = [1, 2, 3]' creates an array with elements 1, 2, and 3. <br/>
                        `,
                        videoId: ['BtHKhsDUPwQ', 'SP3Vf2KcYeU']
                },
                {
                  id: 3,
                  title: "Classes and Objects in Ruby",
                  content: `
                          Ruby is object-oriented, and classes are used to create objects. <br/>
                          - Classes encapsulate data and behavior and allow inheritance and polymorphism. <br/>
                          - Example: 'class Person; def initialize(name); @name = name; end; end;' <br/>
                        `,
                        videoId: ['sc5RhTIBf4c']
                },
                // Add more topics for Ruby Basics
              ],
};

export default rubyBasics;