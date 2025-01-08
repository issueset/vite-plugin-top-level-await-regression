console.log("START_TOP_LEVEL_AWAIT");
let number1 = Math.random();
await new Promise((resolve) => setTimeout(resolve, 1000));
let number2 = Math.random();
console.log("END_TOP_LEVEL_AWAIT");
let number3 = number1 + number2;
export { number3 };
