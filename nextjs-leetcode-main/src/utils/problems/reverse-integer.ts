import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeReverseInteger = `function reverse(x) {
  // Write your code here
};`;

const handlerReverseInteger = (fn: any) => {
  try {
    const inputs = [123, -123, 120];
    const outputs = [321, -321, 21];

    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assert.strictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseInteger handler function error");
    throw new Error(error);
  }
};

export const reverseInteger: Problem = {
  id: "reverse-integer",
  title: "11. Reverse Integer",
  problemStatement: `<p class='mt-3'>
  Given a signed 32-bit integer <code>x</code>, return
  <em>reversed digits</em> of <code>x</code>.
</p>`,
  examples: [
    {
      id: 1,
      inputText: "x = 123",
      outputText: "321",
      explanation: "The reversed number is 321.",
    },
    {
      id: 2,
      inputText: "x = -123",
      outputText: "-321",
      explanation: "The reversed number is -321.",
    },
    {
      id: 3,
      inputText: "x = 120",
      outputText: "21",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>-2<sup>31</sup> ≤ x ≤ 2<sup>31</sup> - 1</code>
</li>`,
  handlerFunction: handlerReverseInteger,
  starterCode: starterCodeReverseInteger,
  order: 2,
  starterFunctionName: "function reverse(",
};
