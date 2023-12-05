// data/swiftBasics.ts
import { LessonData } from '../components/LessonPage/LessonPage';

const swiftBasics: LessonData = {
    title: "Swift Basics",
              topics: [
                {
                  id: 1,
                  title: "Optionals in Swift",
                  content: `
                          Optionals are used in Swift to represent the absence of a value. <br/>
                          - 'nil' indicates that a variable has no value. <br/>
                          - Example: 'var optionalInt: Int? = nil' declares an optional integer with no value. <br/>
                        `,
                        videoId: ['9K89xEuSiYA', 'PDWNf4pBI64']
                },
                {
                  id: 2,
                  title: "Functions in Swift",
                  content: `
                          Functions in Swift are first-class citizens and can be nested or passed as arguments. <br/>
                          - Functions can have parameters and return values. <br/>
                          - Example: 'func greet(name: String) -> String { return "Hello, \\(name)!" }' <br/>
                        `,
                        videoId: ['fffG55Ei1Qc', 'kr3SSplrJlw']
                },
                {
                  id: 3,
                  title: "Optionals and Forced Unwrapping",
                  content: `
                          Swift's optional chaining allows safe access to optional values. <br/>
                          - '!' is used for forced unwrapping to access the value inside an optional. <br/>
                          - Example: 'var optionalStr: String? = "Optional"; print(optionalStr!)' <br/>
                        `,
                        videoId: ['CASXA4odOvE']
                },
                // Add more topics for Swift Basics
              ],
};

export default swiftBasics;