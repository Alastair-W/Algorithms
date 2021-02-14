// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
// Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
console.log('Algo 1')

function sigma(a){
    let total = 0;
    for(let item = 0; item<= a; item++){
        total += item;
    }
    return(total);
}

let aItem = 5;
console.log(sigma(aItem));

// Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, 
// returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
console.log('-'.repeat(50))
console.log('Algo 2')

function factorials(b){
    let factor = 1;
    for(let obj = 1; obj<= b; obj++){
        factor *= obj;
    }
    return(factor);
}

let bItem = 5;
console.log(factorials(bItem));

// Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), 
// sometimes called stars. You should print the given number of asterisks consecutively. 
// Depending on which function is called, those stars should be left-justified 
// (the first star would be very first char in the text field), or right-justified 
// (the last star would be very last char in the text field, with potentially some number of spaces at beginning of 
// text field before the block of stars start), or centered in the 75-character text field 
// (with the same number of spaces on either side of the block of stars, plus/minus one).
// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.   
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
// (Optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.
console.log('-'.repeat(50))
console.log('Algo 3')

function drawLeftStars(c){ // first argument is number of stars, second argument justifies the stars(left, right or center)
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(c > 75){
        return('ERROR: two many stars')
    }
    return('*'.repeat(c)+' '.repeat(75-c));
}

function drawRightStars(c){ // first argument is number of stars, second argument justifies the stars(left, right or center)
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(c > 75){
        return('ERROR: two many stars')
    }
    return(' '.repeat(75-c)+'*'.repeat(c));
}

function drawCenteredStars(c){ // first argument is number of stars, second argument justifies the stars(left, right or center)
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(c > 75){
        return('ERROR: two many stars')
    }
    let split = 75-c;
    if(split%2!=0){
        return(' '.repeat(split/2)+'*'.repeat(c)+' '.repeat(split/2)+' ');    
    }
    else{
        return(' '.repeat(split/2)+'*'.repeat(c)+' '.repeat(split/2));    
    }  
}

let starVar = 34;
console.log(drawCenteredStars(starVar));
console.log(drawRightStars(starVar));
console.log(drawLeftStars(starVar));





// Character Art
// From the above, derive the following that accepts and draws the given characters, not just asterisks:

// drawLeftChars(num,char)
// drawRightChars(num,char)
// drawCenteredChars(num,char)
// For all three of these, you can safely assume that 'char'is a string with the length of 1.
console.log('-'.repeat(50))
console.log('Algo 4')

function drawLeftChars(d,e){ // first argument is number of stars, second argument justifies the stars(left, right or center)
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(d > 75){
        return('ERROR: two many stars')
    }
    return('*'.repeat(d)+e.repeat(75-d));
}

function drawRightChars(d,e){ // first argument is number of stars, second argument justifies the stars(left, right or center)
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(d > 75){
        return('ERROR: two many stars')
    }
    return(' '.repeat(75-d)+e.repeat(d));
}

function drawCenteredChars(d,e){ 
    console.log('Next line is a test to show length of 75 characters');
    console.log('-'.repeat(75));
    if(d > 75){
        return('ERROR: two many stars')
    }
    let split = 75-d;
    if(split%2!=0){
        return(' '.repeat(split/2)+e.repeat(d)+' '.repeat(split/2)+' ');    
    }
    else{
        return(' '.repeat(split/2)+'*'.repeat(d)+' '.repeat(split/2));    
    }  
}

let newVar = 34;
let char = '+';
console.log(drawCenteredChars(newVar, char));
console.log(drawRightChars(newVar, char));
console.log(drawLeftChars(newVar, char));