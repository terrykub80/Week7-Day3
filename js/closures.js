console.log("hello from closures.js")

console.log("=====JavaScript Closures========")



// /*
//     JavaScript Closures
// */

// let subject = 'JavaScript'; // block scoped variable - Window Scope

// function homework(student){
//     console.log(`${student}, did you finish your ${subject} homework?`);
// }

// homework('Terry');

// console.log(student); // ReferenceError: student is not defined

console.log("=====Scopes can be nested========")
// // Scopes can be nested

// let hometown = "Pensacola"

// {
//     var state = "Florida"; // var is Global Scope
//     let hometown = "Milton"; // let is Block Scoped
//     {
//         console.log(`I am from ${hometown}, ${state}`) // hometown and state both coming from this block
//     }
// }

// console.log(`I am from ${hometown}, ${state}`) // hometown from global scope, state coming from block but since it's var it can be accessed globally

console.log("======Function Scopes can also be nested=======")
// Function Scopes can also be nested

// function outer(){
//     let outerMessage = 'This is the outer message';

//     function inner(){
//         let innerMessage = ' and this is the inner message';
//         console.log(outerMessage + innerMessage);
//     };

//     inner();

//     // console.log(innerMessage + outerMessage) //ReferenceError: innerMessage is not defined at outer
// };

// outer();

console.log("======Return a function from a function=======")
// Return a function from a function

// function outer(){
//     let outerMessage = 'This is the outer message';
//     function inner(){
//         let innerMessage = ' and this is the inner message';
//         console.log(outerMessage + innerMessage)
//     }
//     return inner
// };

// console.log(outer)

// let outerReturn = outer()

// console.log(outerReturn)
// console.log(typeof outerReturn)

// outerReturn()

// // inner() function is a CLOSURE
// // A closure is a function that preserves the outer scope in its inner scope

// outerReturn()
// outerReturn()


// // console.log(outerMessage)  : ReferenceError: outerMessage is not defined at closures.js:81:13

console.log("======A more practical example=======")


// // A more practical example

// function makeMultiplier(x){
//     function times(y){
//         return x * y
//     }
//     return times
// }


// // Create multiplier function

// const double = makeMultiplier(2);
// console.log(double);

// console.log(double(5));
// console.log(double(3));
// console.log(double(4));
// console.log(double(10));
// console.log(double(7));


// const triple = makeMultiplier(3);
// console.log(triple);

// console.log(triple(5));
// console.log(triple(3));
// console.log(triple(4));
// console.log(triple(10));
// console.log(triple(7));



console.log("======Setting up a 'hidden' variable using closures=======")

// // Setting up a "hidden" variable using closures

// function create_counter(){
//     console.log('Setting counter...')
//     let count = 0; // Block level scope

//     function increaseCount(){
//         return count++
//     }
//     return increaseCount
// }

// const step = create_counter();

// console.log(step);

// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());

// console.log(count) //  ReferenceError: count is not defined at closures.js:147:13

console.log("======Another Practical Example - hiding variables=======")

// // Another Practical Example - hiding variables


// var cache = {}
// console.log(cache)
// function fib(num){
//     if (num < 2){
//         return num
//     } else if (num in cache){
//         return cache[num]
//     } else {
//         let fib_num = fib(num - 1) + fib(num - 2);
//         cache[num] = fib_num
//         return fib_num
//     }
// }


// console.log(fib(10));
// console.log(cache)
// console.log(fib(12));
// console.log(cache)
// console.log(fib(100));
// console.log(cache)


console.log("======Hide the Cache in a Closure=======")


// // Hide the Cache in a Closure

// function makeFibWithCache(){
//     var cache = {};
//     function innerFib(num){
//         if (num < 2){
//             return num
//         } else if (num in cache){
//             return cache[num]
//         } else {
//             let fib_num = innerFib(num - 1) + innerFib(num - 2);
//             cache[num] = fib_num
//             return fib_num
//         }
//     }
//     return innerFib
// }


// const fib = makeFibWithCache();

// console.log(fib(10));
// // console.log(cache) // ReferenceError: cache is not defined at closures.js:205:13
// console.log(fib(40));
// console.log(fib(100));


console.log("======Immediately Invoked Function Expression=======")

// // IIFE - Immediately Invoked Function Expression
// // Syntax: let myFunc = (function to define)(any args){ code }(values)


// let myFullName = (function formatName(first, last){
//     return [first, last].join(' ')
// })('Terry', 'Ryan')

// console.log(myFullName);


console.log("======Set up closures with IIFE=======")

// // Set up closures with IIFE

// let stepByFive = (function setCounter(step){
//     let count = 0;
//     function inner(){
//         return count += step
//     }
//     return inner
// })(5);


// console.log(stepByFive());
// console.log(stepByFive());
// console.log(stepByFive());
// console.log(stepByFive());
// console.log(stepByFive());


// In Class Exercise
// Create an IIFE that has a hidden array of names 
// (starts as an empty array) but will add users to 
// the list every time the function is called


const addNames = (() => {
    let names = [];
    return name => {
        names.push(name)
        return names
    }
})();

console.log(addNames('Terry'));
console.log(addNames('Taylor'));
console.log(addNames('Isaac'));




