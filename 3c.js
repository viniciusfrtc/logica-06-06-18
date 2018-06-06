'use strict'

//ignorando casos em que desiredLength < 2
const fibonacci = desiredLength => {
    const sequence = [1, 1]
    for(let i = 2; i < desiredLength; i++) sequence.push(sequence[i - 1] + sequence[i - 2])
    return sequence
}

console.log(fibonacci(15))

