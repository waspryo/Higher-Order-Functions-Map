// let numbers = [1,2,3]
// let doubledNumbers = [] // 1. initialize accumulate variable


// numbers.forEach((number) => {
//     doubledNumbers.push(number * 2)
// })
// console.log(doubledNumbers)

// let numbers = [1, 2, 3]

// let doubledNumbers = numbers.map((number, index, array) => {
//     console.log(number, 'is the', index, 'in the array:',array )
//     return number * 2
// })

// console.log(doubledNumbers)

const numbers = [13, 42, 1337]

const doubledNumbers = numbers.map(number => {
    return number * 2
})
console.log(doubledNumbers)



const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const getWeekdays = days.map(weeekday => {
    return weeekday.substring(0, 3)
})
console.log(getWeekdays)