// data/javaMultithreadingAndConcurrency.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const javaMultithreadingAndConcurrency: LessonData = {
    title: "Java Multithreading and Concurrency",
              topics: [
                {
                  id: 23,
                  title: "Introduction to Multithreading",
                  content: `
                          Understanding multithreading in Java for concurrent execution. <br/>
                          - Creating and managing threads using Thread class and Runnable interface. <br/>
                          - Thread lifecycle, synchronization, and inter-thread communication. <br/>
                        `,
                        videoId: ['r_MbozD32eo']
                },
                {
                  id: 24,
                  title: "Concurrency Utilities in Java",
                  content: `
                          Exploring Java's concurrent utilities in java.util.concurrent. <br/>
                          - Executors, thread pools, and concurrent data structures. <br/>
                          - Managing concurrent tasks using Executors framework. <br/>
                        `,
                        videoId: ['WldMTtUWqTg']
                },
                {
                  id: 25,
                  title: "Synchronization Techniques and Best Practices",
                  content: `
                          Applying synchronization techniques and best practices in Java. <br/>
                          - Synchronized blocks, volatile keyword, and atomic classes. <br/>
                          - Deadlocks, race conditions, and strategies to avoid them. <br/>
                        `,
                        videoId: ['WldMTtUWqTg']
                },
        // Add more topics for Python Basics
      ],
};

export default javaMultithreadingAndConcurrency;