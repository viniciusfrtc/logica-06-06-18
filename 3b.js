'use strict'

//ignorando casos em que desiredLength < 2
const fibonacci = (desiredLength, sequence = [1, 1]) => 
    desiredLength > sequence.length ? 
    fibonacci(desiredLength, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]])
    : 
    sequence


console.log(fibonacci(15))