//Utilizar any apenas em último caso.

function showMessage(msg: any) {
    return msg;
}

console.log(showMessage("Hello, World!")); // Output: Hello, World!
console.log(showMessage(123)); // Output: 123
console.log(showMessage({ name: "Alice", age: 30 })); // Output: { name: 'Alice', age: 30 }
console.log(showMessage([1, 2, 3])); // Output: [1, 2, 3]
console.log(showMessage(true)); // Output: true
