const line = '-'

// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
console.log('Algo 1')
console.log(line.repeat(50))

function countdown(a){
    var newArr = [];
    for (let myA = a; myA >= 0; myA--){
        newArr.push(myA);
    }
    console.log(newArr.length);
}

countdown(5);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.
console.log('Algo 2')
console.log(line.repeat(50))

function printReturn(b,c){
    console.log(b);
    return(c);
}

let one = 2;
let two = 6;

printReturn(one, two)
// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
console.log('Algo 3')
console.log(line.repeat(50))

function plusLength(d){
    let val = d[0];
    if (typeof val == "number"){
        val+=d.length
        console.log(val);
    }
    else{
        console.log('ERROR: This only works with an integer')
    }
}

let arrOne = [1,2,3,4,5,6];
plusLength(arrOne);

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
console.log('Algo 4')
console.log(line.repeat(50))

function greatherSecond(e){
    let count = 0;
    for(item in e){
        if(e[item] > e[1]){
            count += 1;
        }
    }
    console.log(count);
}

let twoArr = [1,3,5,7,9,13];
greatherSecond(twoArr);


// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
// Print how many values this is. What will you do if the array is only one element long?
console.log('Algo 5')
console.log(line.repeat(50))

function greatherGeneral(e){
    let arrThree = [];
    for(item in e){
        if(e[item] > e[1]){
            arrThree.push(e[item]);
        }
    }
    console.log(arrThree);
}

greatherGeneral(twoArr); 

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
console.log('Algo 6')
console.log(line.repeat(50))

function lengthValue(f,g){
    if(f == g){
        console.log('JINX!');
    }
    let anotherArr = [];
    for (let len = 0; len < f; len++){
        anotherArr.push(g);
    }
    return(anotherArr);
}

let newNum = 5;
let secondNum = 5;

console.log(lengthValue(newNum, secondNum));

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
console.log('Algo 7')
console.log(line.repeat(50))

function firstVal(h){
    if(h[0] > h.length){
        console.log('Too Big!')
    }
    else if(h[0] < h.length){
        console.log('Too Small!')
    }
    else{
        console.log('Just Right!')
    }
}

let arrValue = [6,3,4,5,6,6];
firstVal(arrValue);

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
console.log('Algo 8')
console.log(line.repeat(50))

function farenCel(i){
    console.log((i-32)*5/9);
}

farenCel(23);

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
console.log('Algo 9')
console.log(line.repeat(50))

function celFaren(j){
    return((j*9/5)+32);
}

celFaren(-5);

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, 
// so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), 
// checking whether it is equal to the corresponding Fahrenheit value.
console.log('Algo 10')
console.log(line.repeat(50))

function cfCheck(k){
    while(celFaren(k) != k){
        k--
    }
    console.log('Celcius and Farenheit are the same at: '+k);
}

cfCheck(200)