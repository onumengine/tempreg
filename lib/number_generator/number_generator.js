const generateRandomNumber = require('../encryption/hasher');

const generateTempregNumber = () => generateRandomNumber();

export function generateMultipleTempregNumbers(number) {
    let numbers = [];
    for (let i = 1; i <= number; i++ ) {
        numbers.push(generateTempregNumber());
    }
    return numbers;
}