import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeIsPalindrome = `function isPalindrome(x) {
  // Write your code here
};`;

const handlerIsPalindrome = (fn: any) => {
  try {
    const inputs = [121, -121, 10];
    const outputs = [true, false, false];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isPalindrome handler function error");
    throw new Error(error);
  }
};

export const isPalindrome: Problem = {
  id: "is-palindrome",
  title: "12. Palindrome Number",
  problemStatement: `<p class='mt-3'>
  Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome
  integer.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "x = 121",
      outputText: "true",
      explanation: "121 is a palindrome.",
    },
    {
      id: 2,
      inputText: "x = -121",
      outputText: "false",
      explanation: "-121 is not a palindrome.",
    },
    {
      id: 3,
      inputText: "x = 10",
      outputText: "false",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>-2<sup>31</sup> ≤ x ≤ 2<sup>31</sup> - 1</code>
</li>`,
  handlerFunction: handlerIsPalindrome,
  starterCode: starterCodeIsPalindrome,
  order: 3,
  starterFunctionName: "function isPalindrome(",
};
