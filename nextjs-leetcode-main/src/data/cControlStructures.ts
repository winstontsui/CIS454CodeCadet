// data/cControlStructures.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const cControlStructures: LessonData = {
    title: "C Control Structures",
    topics: [
        {
            id: 6,
            title: "C If ... Else",
            content: `
            You have already learned that C supports the usual logical conditions from mathematics: <br/><br/>

            Less than: a < b <br/>
            Less than or equal to: a <= b <br/>
            Greater than: a > b <br/>
            Greater than or equal to: a >= b <br/>
            Equal to a == b <br/>
            Not Equal to: a != b <br/>
            You can use these conditions to perform different actions for different decisions. <br/><br/>

            C has the following conditional statements: <br/><br/>

            Use if to specify a block of code to be executed, if a specified condition is true <br/>
            Use else to specify a block of code to be executed, if the same condition is false <br/>
            Use else if to specify a new condition to test, if the first condition is false <br/>
            Use switch to specify many alternative blocks of code to be executed <br/><br/>

              The if...else statement in C allows conditional execution of code. <br/>
              - Syntax: 'if (condition) { /* code to be executed if condition is true */ } else { /* code to be executed if condition is false */ }' <br/>
            `,
            videoId: ['K8mntKyBJGc']
          },
          {
            id: 7,
            title: "C Switch",
            content: `
              The switch statement in C provides a way to handle multiple conditions in a more readable manner. <br/>
              This is how it works:  <br/><br/>

                The switch expression is evaluated once <br/> 
                The value of the expression is compared with the values of each case <br/>
                If there is a match, the associated block of code is executed <br/>
                The break statement breaks out of the switch block and stops the execution <br/>
                The default statement is optional, and specifies some code to run if there is no case match <br/><br/>

              - Syntax: 'switch (expression) { case constant1: /* code */ break; case constant2: /* code */ break; /* ... */ default: /* code if no match */ }' <br/>
            `,
            videoId: ['JMSaLRqsgo', 'fjUG_y5ZaL4']
          },
          {
            id: 8,
            title: "C For/While Loop",
            content: `
              The while loop in C executes a block of code repeatedly as long as the specified condition is true. <br/>
              - Syntax: 'while (condition) { /* code to be executed while condition is true */ }' <br/><br/>

              The for loop in C is used to iterate over a range of values. <br/>
              When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop: <br/>

              - Syntax: 'for (initialization; condition; update) { /* code to be executed in each iteration */ }' <br/><br/>

              initialization is executed (one time) before the execution of the code block. <br/><br/>

              condition defines the condition for executing the code block. <br/><br/>

              update is executed (every time) after the code block has been executed. <br/><br/>
            `,
            videoId: ['ufFAFx5Qn3w', 'qUPXsPtWGoY']
          },
          {
            id: 10,
            title: "C Break and Continue",
            content: `
              The break statement in C is used to exit a loop prematurely, and the continue statement is used to skip the rest of the loop's code and move to the next iteration. <br/>
              - Example: 'for (int i = 0; i < 10; i++) { if (i == 5) break; /* code */ }' <br/>
            `,
            videoId: ['obJcPlAtGVM']
          },
        // Add more topics for C Control Structures
      ],
};

export default cControlStructures;