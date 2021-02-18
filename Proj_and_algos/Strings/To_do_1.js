// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, 
// but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
console.log('Algo 1');

function blanks(a){
    let newS = a.split(" ");
    return(newS.join(''));
}

let aWord = " Pl ayTha tF u nkyM usi c ";

console.log(blanks(aWord));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the 
// string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
console.log('-'.repeat(50));
console.log('Alog 2');

function digits(b){
    let numberS = b.replace(/\D/g, '');
    return(numberS);
}

let testB = "0s1a3y5w7h9a2t4?6!8?0";
console.log(digits(testB));

// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
console.log('-'.repeat(50));
console.log('Alog 3');

function acronym(c){
    let test = c.split(' ');
    let another = [];
    for(item in test){
        another[item] = test[item][0];
    }
    let final = another.join('');
    return(final.toUpperCase());
}

let testSting = " there's no free lunch - gotta pay yer way. ";
console.log(acronym(testSting));


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
console.log('-'.repeat(50));
console.log('Alog 4');

function nonSpace(d){
    let woSpace = d.split(' ').join('');
    console.log(woSpace);
    return(woSpace.length);
}

let testSpace = 'Honey pie, you are driving me crazy'
console.log(nonSpace(testSpace));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the 
// length from the array.
console.log('-'.repeat(50));
console.log('Algo 5');

function shorter(e,f){
    for(item in e){
        if(e[item].length < f){
            console.log(e[item].length);
            delete e[item];
        }
    }
    return(e);
}

let testShort = ['Eggs', 'Bread', 'Sausage', 'Beer', 'Chicken', 'Flour', 'Orange'];
let maxLen = 5;
console.log(shorter(testShort, maxLen));