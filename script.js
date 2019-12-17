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

const people = [{
    first_name: 'MJ',
    last_name: 'MJ',
}, {
    first_name: 'jane',
    last_name: 'John',
},{
    first_name: 'koil',
    last_name: 'Liddell',
}]
const getName = people.map(name => {
    return name.first_name + '  ' + name.last_name
})
console.log(getName)

const animals = [{
    name: 'cat',
    size: 'small'
}, {
    name: 'dog',
    size: 'regular'
},{
    name: 'cat',
    size: 'small'
}]

const animalName = animals.map(animal => animal.name)
console.log(animalName)