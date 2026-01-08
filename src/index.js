import { add } from "./calculatorAdd.js"
import { divide } from "./calculatorDivide.js";

const result = add(2, 3);
console.log(`The result of adding 2 and 3 is: ${result}`);

const result2 = divide(15, 5);
console.log(`The result of dividing 15 by 5 is: ${result2}`);

console.log(typeof(result2));