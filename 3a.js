'use strict'

//ignorando casos em que desiredLength < 2
const fibonacci = (desiredLength, sequence = [1, 1]) => {

    if(desiredLength > sequence.length) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
        return fibonacci(desiredLength, sequence)
    }
    return sequence
}

console.log(fibonacci(15))