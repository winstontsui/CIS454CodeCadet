// data/cDataStructures.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const cDataStructures: LessonData = {
    title: "C Data Structures",
    topics: [
      {
        id: 8,
        title: "Linked Lists in C",
        content: `
                Implementation and manipulation of linked lists in C. <br/>
                - Singly linked lists, doubly linked lists, and circular linked lists. <br/>
                - Operations like insertion, deletion, and traversal. <br/>
              `,
        videoId: ['R9PTBwOzceo']
      },
      {
        id: 9,
        title: "Stacks and Queues",
        content: `
                Understanding stack and queue data structures in C. <br/>
                - Implementing stacks and queues using arrays and linked lists. <br/>
                - Applications and usage scenarios of stacks and queues. <br/>
              `,
        videoId: ['A3ZUpyrnCbM', 'Flk5yrlx5Qo', 'FcIubL92gaI']
      },
      // Add more topics for C Data Structures if needed
    ],
};

export default cDataStructures;