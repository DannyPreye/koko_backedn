function sayHI(name) {
    console.log("Hello " + name);
}

function calculateTwo(num1, num2) {
    return num1 + num2;
}

function divideTwo(num1, num2) {
    return num1 / num2;
}

exports.calculateTwo = calculateTwo;
exports.sayHI = sayHI;
module.exports = divideTwo;
