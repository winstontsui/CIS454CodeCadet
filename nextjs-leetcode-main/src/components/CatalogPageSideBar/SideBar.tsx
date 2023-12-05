import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    handleLessonSelection: (content: string) => void;}

    const sidebarSections = [
        {
          id: "c",
          title: "C",
          lessons: [
            {
              id: 1,
              title: "C Basics",
              topics: [
                {
                  id: 1,
                  title: "Variables",
                  content: `
                        In C, a variable is a named storage location that holds a value.
                        - Variables must be declared with a specific data type before use.
                        - Common data types in C include int, float, char, and double.
                        - Example: 'int age = 25;' declares an integer variable 'age' with a value of 25.
                        - Variables in C have a scope that defines their visibility within blocks.
                      `,
                },
                {
                  id: 2,
                  title: "Functions in C",
                  content: `
                        Functions in C allow code reuse by encapsulating a set of statements into a block.
                        - Functions have a signature with a return type, name, and parameters.
                        - Example: 'int add(int a, int b) { return a + b; }'
                        - Functions can be called from other parts of the program to perform specific tasks.
                      `,
                },
                {
                  id: 3,
                  title: "Pointers in C",
                  content: `
                        Pointers in C store the memory address of another variable.
                        - They are used for dynamic memory allocation and manipulation.
                        - Example: 'int *ptr;' declares a pointer to an integer variable.
                      `,
                },
                {
                  id: 4,
                  title: "Arrays in C",
                  content: `
                        Arrays in C store multiple elements of the same data type in contiguous memory locations.
                        - They can be accessed using index notation.
                        - Example: 'int numbers[5] = {1, 2, 3, 4, 5};'
                      `,
                },
                // Add more lessons for C as needed
              ],
            },
            {
              id: 2,
              title: "Advanced C Programming",
              topics: [
                {
                  id: 5,
                  title: "Memory Management in C",
                  content: `
                          Understanding heap and stack memory.
                          - Dynamic memory allocation using malloc, calloc, realloc, and free.
                          - Memory leaks and best practices for memory management.
                        `,
                },
                {
                  id: 6,
                  title: "File I/O Operations",
                  content: `
                          Reading from and writing to files in C.
                          - File handling using fopen, fclose, fread, fwrite functions.
                          - Working with file streams and error handling.
                        `,
                },
                {
                  id: 7,
                  title: "Structures and Pointers",
                  content: `
                          Advanced usage of structures and pointers in C.
                          - Pointer arithmetic and its applications in structures.
                          - Implementing complex data structures using pointers.
                        `,
                },
                // Feel free to add more topics for Advanced C Programming
              ],
            },
            // Add more lessons for C as needed
            {
              id: 3,
              title: "C Data Structures",
              topics: [
                {
                  id: 8,
                  title: "Linked Lists in C",
                  content: `
                          Implementation and manipulation of linked lists in C.
                          - Singly linked lists, doubly linked lists, and circular linked lists.
                          - Operations like insertion, deletion, and traversal.
                        `,
                },
                {
                  id: 9,
                  title: "Stacks and Queues",
                  content: `
                          Understanding stack and queue data structures in C.
                          - Implementing stacks and queues using arrays and linked lists.
                          - Applications and usage scenarios of stacks and queues.
                        `,
                },
                // Add more topics for C Data Structures if needed
              ],
            },
          ],
        },
        {
          id: "python",
          title: "Python",
          lessons: [
            {
              id: 8,
              title: "Python Basics",
              topics: [
                {
                  id: 1,
                  title: "Variables in Python",
                  content: `
                          In Python, variables are used to store data values.
                          - Variables do not need explicit declaration to reserve memory space.
                          - The assignment operator (=) is used to assign values to variables.
                          - Example: 'x = 5' assigns the value 5 to variable x.
                        `,
                },
                {
                  id: 2,
                  title: "Data Types in Python",
                  content: `
                          Python has various data types including int, float, str, list, tuple, dict, etc.
                          - 'int' stores integers, 'float' stores floating-point numbers, 'str' stores strings.
                          - Example: 'my_list = [1, 2, 3]' creates a list containing integers.
                        `,
                },
                // Add more topics for Python Basics
              ],
            },
            {
              id: 9,
              title: "Python Control Structures",
              topics: [
                {
                  id: 3,
                  title: "Conditional Statements",
                  content: `
                          Using if, elif, and else for decision-making in Python.
                          - Handling multiple conditions using logical operators (and, or, not).
                          - Nested if statements and best practices for readability.
                        `,
                },
                {
                  id: 10,
                  title: "Loops in Python",
                  content: `
                          Working with for and while loops in Python.
                          - Iterating over sequences and performing operations.
                          - Loop control statements: break, continue, and else clauses.
                        `,
                },
                // Add more topics for Python Control Structures
              ],
            },
            {
              id: 10,
              title: "Python Functions and Modules",
              topics: [
                {
                  id: 11,
                  title: "Defining Functions",
                  content: `
                          Creating and using functions in Python.
                          - Parameters, return statements, and function scope.
                          - Recursion and function abstraction.
                        `,
                },
                {
                  id: 12,
                  title: "Python Modules and Packages",
                  content: `
                          Understanding modules, importing, and using external libraries.
                          - Creating and organizing modules for code reusability.
                          - Packaging and distributing Python modules as libraries.
                        `,
                },
                // Add more topics for Python Functions and Modules
              ],
            },
            // Add more lessons for Python
          ],
        },
        {
          id: "java",
          title: "Java",
          lessons: [
            {
              id: 14,
              title: "Java Output",
              topics: [
                {
                  id: 1,
                  title: "Output in Java",
                  content: `
                          Java provides several ways to output data: System.out.println(), System.out.print(), etc.
                          - 'System.out.println()' prints the argument passed and moves to the new line.
                          - 'System.out.print()' prints the argument passed without moving to the new line.
                        `,
                },
                {
                  id: 2,
                  title: "Variables and Data Types in Java",
                  content: `
                          Java requires variables to be declared with a specific data type.
                          - 'int' stores integers, 'double' stores floating-point numbers, 'String' stores strings.
                          - Example: 'int x = 10;' declares an integer variable x with a value of 10.
                        `,
                },
                // Add more topics for Java Output and Basics
              ],
            },
            {
              id: 15,
              title: "Java Object-Oriented Programming (OOP)",
              topics: [
                {
                  id: 3,
                  title: "Inheritance and Polymorphism",
                  content: `
                          Understanding inheritance and polymorphism in Java.
                          - Creating subclasses, superclasses, and method overriding.
                          - Polymorphic behavior and its applications.
                        `,
                },
                {
                  id: 16,
                  title: "Java Collections Framework",
                  content: `
                          Exploring collections in Java: List, Set, Map interfaces.
                          - Understanding ArrayList, LinkedList, HashSet, HashMap, etc.
                          - Iterating and manipulating collections using Java APIs.
                        `,
                },
                // Add more topics for Java Object-Oriented Programming
              ],
            },
            {
              id: 17,
              title: "Java Exception Handling",
              topics: [
                {
                  id: 18,
                  title: "Try-Catch Blocks",
                  content: `
                          Handling exceptions in Java using try-catch blocks.
                          - Catching specific exceptions and multiple catch blocks.
                          - Using finally block for cleanup and resource management.
                        `,
                },
                {
                  id: 19,
                  title: "Custom Exceptions",
                  content: `
                          Creating and using custom exception classes in Java.
                          - Extending Exception class to define custom exceptions.
                          - Throwing and handling custom exceptions in Java programs.
                        `,
                },
                // Add more topics for Java Exception Handling
              ],
            },
            {
              id: 19,
              title: "Java Multithreading and Concurrency",
              topics: [
                {
                  id: 23,
                  title: "Introduction to Multithreading",
                  content: `
                          Understanding multithreading in Java for concurrent execution.
                          - Creating and managing threads using Thread class and Runnable interface.
                          - Thread lifecycle, synchronization, and inter-thread communication.
                        `,
                },
                {
                  id: 24,
                  title: "Concurrency Utilities in Java",
                  content: `
                          Exploring Java's concurrent utilities in java.util.concurrent.
                          - Executors, thread pools, and concurrent data structures.
                          - Managing concurrent tasks using Executors framework.
                        `,
                },
                {
                  id: 25,
                  title: "Synchronization Techniques and Best Practices",
                  content: `
                          Applying synchronization techniques and best practices in Java.
                          - Synchronized blocks, volatile keyword, and atomic classes.
                          - Deadlocks, race conditions, and strategies to avoid them.
                        `,
                },
                // Add more topics for Java Multithreading and Concurrency
              ],
            },
    
            // Add more lessons for Java
          ],
        },
        {
          id: "javascript",
          title: "JavaScript",
          lessons: [
            {
              id: 19,
              title: "JavaScript Basics",
              topics: [
                {
                  id: 1,
                  title: "Variables in JavaScript",
                  content: `
                          Variables in JavaScript are containers for storing data values.
                          - 'var', 'let', and 'const' are used to declare variables.
                          - Example: 'let message = "Hello";' declares a variable message with the string value "Hello".
                        `,
                },
                {
                  id: 2,
                  title: "Data Types in JavaScript",
                  content: `
                          JavaScript supports various data types such as number, string, boolean, object, etc.
                          - 'number' stores numeric values, 'string' stores text, 'boolean' stores true/false.
                          - Example: 'let isTrue = true;' declares a variable isTrue with a boolean value true.
                        `,
                },
                // Add more topics for JavaScript Basics
              ],
            },
            {
              id: 20,
              title: "JavaScript Functions and Scope",
              topics: [
                {
                  id: 3,
                  title: "Functions in JavaScript",
                  content: `
                          Exploring functions as first-class citizens in JavaScript.
                          - Function declaration vs. function expression.
                          - Scope, closures, and lexical environment in JavaScript.
                        `,
                },
                {
                  id: 21,
                  title: "Asynchronous JavaScript",
                  content: `
                          Understanding asynchronous programming in JavaScript.
                          - Callbacks, Promises, and async/await syntax.
                          - Handling asynchronous operations and avoiding callback hell.
                        `,
                },
                // Add more topics for JavaScript Functions and Scope
              ],
            },
            {
              id: 22,
              title: "JavaScript DOM Manipulation",
              topics: [
                {
                  id: 23,
                  title: "DOM and Event Handling",
                  content: `
                          Manipulating the Document Object Model (DOM) in JavaScript.
                          - Accessing and modifying HTML/CSS elements.
                          - Adding event listeners and handling user interactions.
                        `,
                },
                {
                  id: 24,
                  title: "AJAX and Fetch API",
                  content: `
                          Making asynchronous HTTP requests using AJAX and Fetch API.
                          - Fetching data from APIs and handling responses.
                          - Performing CRUD operations with server-side data.
                        `,
                },
                // Add more topics for JavaScript DOM Manipulation
              ],
            },
    
            // Add more lessons for JavaScript
          ],
        },
        {
          id: "ruby",
          title: "Ruby",
          lessons: [
            {
              id: 24,
              title: "Ruby Basics",
              topics: [
                {
                  id: 1,
                  title: "Control Structures in Ruby",
                  content: `
                          Ruby supports control structures like if statements, loops, and iterators.
                          - 'if', 'else', 'elsif', 'unless' are used for conditional branching.
                          - Example: 'if condition; puts "true"; else; puts "false"; end;'
                        `,
                },
                {
                  id: 2,
                  title: "Arrays and Hashes in Ruby",
                  content: `
                          Arrays and hashes are used to store collections of data in Ruby.
                          - Arrays store an ordered collection, while hashes store key-value pairs.
                          - Example: 'arr = [1, 2, 3]' creates an array with elements 1, 2, and 3.
                        `,
                },
                {
                  id: 3,
                  title: "Classes and Objects in Ruby",
                  content: `
                          Ruby is object-oriented, and classes are used to create objects.
                          - Classes encapsulate data and behavior and allow inheritance and polymorphism.
                          - Example: 'class Person; def initialize(name); @name = name; end; end;'
                        `,
                },
                // Add more topics for Ruby Basics
              ],
            },
            {
              id: 25,
              title: "Advanced Ruby Programming",
              topics: [
                {
                  id: 4,
                  title: "Modules and Mixins in Ruby",
                  content: `
                          Understanding modules and mixins for code reuse in Ruby.
                          - Creating and including modules, module functions, and constants.
                          - Implementing mixins and their benefits in Ruby programming.
                        `,
                },
                {
                  id: 26,
                  title: "Exception Handling in Ruby",
                  content: `
                          Handling exceptions and errors in Ruby programs.
                          - Using begin-rescue-end blocks for exception handling.
                          - Custom exception classes and raising exceptions in Ruby.
                        `,
                },
                // Add more topics for Advanced Ruby Programming
              ],
            },
            {
              id: 27,
              title: "Ruby Metaprogramming",
              topics: [
                {
                  id: 28,
                  title: "Dynamic Programming and Reflection",
                  content: `
                          Exploring metaprogramming features in Ruby.
                          - Dynamic method definition and method_missing.
                          - Reflection and introspection capabilities in Ruby.
                        `,
                },
                {
                  id: 29,
                  title: "Ruby DSLs (Domain-Specific Languages)",
                  content: `
                          Creating and using DSLs in Ruby for specific domains.
                          - DSL syntax, instance_eval, and instance_exec usage.
                          - Implementing internal DSLs for cleaner and expressive code.
                        `,
                },
                // Add more topics for Ruby Metaprogramming
              ],
            },
    
            // Add more lessons for Ruby
          ],
        },
        {
          id: "swift",
          title: "Swift",
          lessons: [
            {
              id: 34,
              title: "Swift Basics",
              topics: [
                {
                  id: 1,
                  title: "Optionals in Swift",
                  content: `
                          Optionals are used in Swift to represent the absence of a value.
                          - 'nil' indicates that a variable has no value.
                          - Example: 'var optionalInt: Int? = nil' declares an optional integer with no value.
                        `,
                },
                {
                  id: 2,
                  title: "Functions in Swift",
                  content: `
                          Functions in Swift are first-class citizens and can be nested or passed as arguments.
                          - Functions can have parameters and return values.
                          - Example: 'func greet(name: String) -> String { return "Hello, \\(name)!" }'
                        `,
                },
                {
                  id: 3,
                  title: "Optionals and Forced Unwrapping",
                  content: `
                          Swift's optional chaining allows safe access to optional values.
                          - '!' is used for forced unwrapping to access the value inside an optional.
                          - Example: 'var optionalStr: String? = "Optional"; print(optionalStr!)'
                        `,
                },
                // Add more topics for Swift Basics
              ],
            },
            // Add more lessons for Swift
          ],
        },
        {
          id: "typescript",
          title: "TypeScript",
          lessons: [
            {
              id: 40,
              title: "TypeScript Basics",
              topics: [
                {
                  id: 1,
                  title: "Interfaces in TypeScript",
                  content: `
                          Interfaces define the structure of an object in TypeScript.
                          - Interfaces can describe properties, methods, and their types.
                          - Example: 'interface Person { name: string; age: number; }'
                        `,
                },
                {
                  id: 2,
                  title: "Generics in TypeScript",
                  content: `
                          Generics enable writing reusable code components in TypeScript.
                          - Generics allow the creation of functions and classes that work with any data type.
                          - Example: 'function identity<T>(arg: T): T { return arg; }'
                        `,
                },
                {
                  id: 3,
                  title: "Modules and Namespaces in TypeScript",
                  content: `
                          TypeScript supports modules and namespaces to organize and encapsulate code.
                          - Modules group related code, and namespaces prevent naming conflicts.
                          - Example: 'namespace MathOperations { export function add(a, b) { return a + b; } }'
                        `,
                },
                // Add more topics for TypeScript Basics
              ],
            },
            // Add more lessons for TypeScript
          ],
        },
        // Repeat the structure for other programming languages (Python, Java, JavaScript, Ruby, PHP)
      ];


  
  const SideBar: React.FC<SidebarProps> = () => {
    const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  
    const handleLessonClick = (lessonId: number) => {
      setSelectedLesson(lessonId);
    };
  
    return (
      <aside className="mt-12 w-1/6 h-screen overflow-y-auto fixed bg-gray-800 p-4">
        <div className="space-y-2">
          {sidebarSections.map((section) => (
            <div key={section.id}>
              <a href={`#${section.id}`} className="text-white font-semibold block">
                {section.title}
              </a>
              <ul className="ml-2 space-y-2">
                {section.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <a
                      href={`#/lesson/${lesson.id}`}
                      className="text-xs block py-1 pl-3 hover:bg-gray-400 rounded-md"
                      onClick={() => handleLessonClick(lesson.id)}
                    >
                      {lesson.title}
                    </a>
                    {selectedLesson === lesson.id && (
                      <p className="text-white pl-6">{lesson.topics[0].content}</p>
                      // This assumes that each lesson has at least one topic and is displaying the content of the first topic.
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    );
  };
  
  export default SideBar;