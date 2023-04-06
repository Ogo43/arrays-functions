// A1

// Mutating array methods are methods that change the object after the method has been used. 
// Examples: prototype.pop(), prototype.push(), prototype.shift(), prototype.unshift(), prototype.splice()

// Non-mutating array methods are methods that do not change the object after the method has been used.
// Examples: prototype.slice(), prototype.concat(), prototype.map(), prototype.filter(), prototype.forEach()

// A2

const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

const kotlin = languages.push('Kotlin');
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]
const java = languages.splice(3, 0, 'Java');
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python' ]
const removeFirstItem = languages.shift('C#');
console.log(languages);
// [ 'JavaScript', 'Ruby', 'PHP', 'Python' ]
const addScalaSwift = languages.unshift('Scala', 'Swift');
console.log(languages);
// [ 'Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python' ]
const replacePHP = languages.splice(3, 1, 'Go', 'Rust');
console.log(languages);
// [ 'C#', 'JavaScript', 'Ruby', 'Go', 'Rust', 'Python' ]

// A3

let fruit = ['apple', 'mango', 'banana'];

function changeFruit (fruit) {
    fruit[2] = "orange";
    return fruit;
}

changeFruit(fruit); //The value of fruit is 4

// A4

function max (numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const rangeOfNumber = max([4,5,10,-2]);
console.log(rangeOfNumber); // the max is 10

// A5

const valTimesIndex = (numbers) => {
    let multi = [];
    for (let i = 0; i < numbers.length; i++) {
        multi.push((numbers[i] * i));
    }
    return multi;
}

const indexMultiples = valTimesIndex([1, 2, 3]);
console.log(indexMultiples);  //[ 0, 2, 6 ]
