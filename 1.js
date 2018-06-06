'use strict'

const generateNumbers = () => {
    const possibleNumbers = new Array(60).fill('').map((item, index) => index + 1)
    const numbers = new Array(6).fill('').map(() => {
        let number = possibleNumbers[Math.floor(Math.random()*possibleNumbers.length)]
        possibleNumbers.splice(possibleNumbers.indexOf(number), 1)
        return number
    })
    const finalNumbers = new Array(6).fill('').map(() => {
        const minNumber = Math.min(...numbers)
        numbers.splice(numbers.indexOf(minNumber), 1)
        return minNumber
    })
    return finalNumbers
}

console.log(generateNumbers())