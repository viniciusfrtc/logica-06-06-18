'use strict'

const generateNumbers = ()=> {
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

const tables = ['table1', 'table2', 'table3']

const createTables = () => tables.forEach(table => document.getElementById(table).innerHTML = assembleTable(table))    

const assembleTable = table => 
    `<table>${assembleRows(table)}</table>`

const assembleRows = table => 
    `${new Array(6).fill('').map((_, index) => assembleRow(table, index)).join('')}`

const assembleRow = (table, index) =>
    `<tr> ${new Array(10).fill('').map((_, rowIndex) => singleNumber(table, (rowIndex + 1 + index*10))).join('')}</tr>`

const singleNumber = (table, number) => 
    `<td id="${number}${table}">${number}</td>`

const markNumbers = () => {
    createTables()
    let firstGame = generateNumbers()
    let secondGame = generateDifferentNumbers(firstGame)
    let thirdGame = generateDifferentNumbers(firstGame, secondGame)
    firstGame.forEach(number => document.getElementById(number+'table1').classList.add('markedNumber'))
    secondGame.forEach(number => document.getElementById(number+'table2').classList.add('markedNumber'))
    thirdGame.forEach(number => document.getElementById(number+'table3').classList.add('markedNumber'))
}

const generateDifferentNumbers = (...games) => {
    let uniqueGame = generateNumbers()
    for(let game of games) {
        if(uniqueGame.every(number => game.includes(number))) return generateDifferentNumbers(games)
    }
    return uniqueGame
}