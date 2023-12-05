// data/javaOOP.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javaOOP: LessonData = {
    title: "Java Object-Oriented Programming (OOP)",
              topics: [
                {
                  id: 3,
                  title: "Inheritance and Polymorphism",
                  content: `
                          Understanding inheritance and polymorphism in Java. <br/>
                          - Creating subclasses, superclasses, and method overriding. <br/>
                          - Polymorphic behavior and its applications. <br/>
                        `,
                        videoId: ['jhDUxynEQRI', 'Zs342ePFvRI']
                },
                {
                  id: 16,
                  title: "Java Collections Framework",
                  content: `
                          Exploring collections in Java: List, Set, Map interfaces. <br/>
                          - Understanding ArrayList, LinkedList, HashSet, HashMap, etc. <br/>
                          - Iterating and manipulating collections using Java APIs. <br/>
                        `,
                        videoId: ['viTHc_4XfCA']
                },
        // Add more topics for Python Basics
      ],
};

export default javaOOP;