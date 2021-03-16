// Recursive List Length
// Given the first node of a singly linked list, create a recursive function that returns the 
// number of nodes in that list. Assume list contains no loops and is short enough that you will 
// not ‘blow your stack’.

// let currentNode = this.head;
// let counter = 0;
// function listLength(a){    
//     if(currentNode){
//         counter += 1;
//         currentNode = currentNode.next;
//     }
//     return listLength(a);
// }


// Got Any Grapes?!?
// Martin loves grapes. He sees a number of baggies containing grapes, all in a row. 
// Stephen tells him that he can take as many of the baggies as he wants, as long as he 
// doesn’t take two that are next to each other. Martin wants to maximize his number of grapes. 
// Grapes are pretty healthy, so let’s help him out. Create a function to accept an array of 
// non-negative integers representing the number of grapes in each adjacent baggy. 
// Your function should return the maximum number of grapes he can obtain.
console.log('Algo 1');
function grapes(b, n){
    let grapeSum = 0;
    if(n < 2){
        for(let item = n; item < b.length; item+=2){
            grapeSum += b[item]
        }
        if(n == 0){
            console.log(`Total grapes in the even numbered bags: ${grapeSum}`);
        }
        else{
            console.log(`Total grapes in the odd numbered bags: ${grapeSum}`);
        }
        return grapes(b,n+1)
    }
}

let grapeList = [4,6,7,8,1,2,6,4,8,9];
let testN = 0;

grapes(grapeList, testN)



// Collatz-apalooza
// Define a function that, given positive integer num, returns num/2 if num is even or 3*num + 1 
// if num is odd. Continuously feeding the result back into function results in numerical 
// series such as 5,16,8,4,2,1. According to Dr. Lothar Collatz, the series always 
// reaches 1 (and then repeats 4,2,1,4,2,1,…). What starting number requires the most iterations 
// before reaching 1 the first time?
console.log('-'.repeat(50));
console.log('Algo 2');


let counter = 0;
function collatz(d){
    if(d>=1){
        counter += 1;
        if(d===1){
            console.log(d);
            console.log(`Stop`);
        }
        else if(d%2==0){
            console.log(d);
            return collatz(d/2)
        }
        else if(d%2!=0){
            console.log(d);
            return collatz(3*d+1)
        }
    }
}

let posNum = 10;

console.log(collatz(posNum));

// Telephone Words
// Nikki has a new phone number (304-5083) and wants to create a clever way for everyone to 
// remember it. On older telephones, the keypad associates letters with each numeral. 
// Given a seven-digit telephone number, return an array of all possible strings that equate to 
// that phone number. 
// For reference, here is the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] 
// – for completeness, map 1 to I and zero to O. 

// For example, given a phone number 818-2612, return an array of 243 different strings, 
// including “vitamic” and “titania”.
console.log('-'.repeat(50));
console.log('Algo 3');


function get_words(testF, testG){
    let letters = [];
    let strG = String(testG);
    for(digit in strG){
        letters.push(testF[strG[digit]]);          
    }
    console.log(letters);

    let progress = 0;
    let current_word = '';
    let limit = strG.length;
    let found_words = [];

    let return_value = telWords(letters, progress, current_word, limit, found_words);
    console.log(return_value);
}

function telWords(letters, progress, current_word, limit, found_words){
    
    // complete word, add to collection (found_words) and return
    if(progress == limit){
        found_words.push(current_word);
    }
    else{
    // make recursive call for each letter in current digit
        for(i in letters[progress]){
            let next_word = current_word + letters[progress][i];
            console.log(progress, i);
            console.log(next_word);
            telWords(letters, progress+1, next_word, limit, found_words)
        }
    }

    return found_words
}
    

let testF = {
                0: ['O'],
                1: ['I'], 
                2: ['A','B','C'], 
                3: ['D','E','F'],
                4: ['G','H','I'],
                5: ['J','K','L'],
                6: ['M','N','O'],
                7: ['P','Q','R','S'],
                8: ['T','U','V'],
                9: ['W','X','Y','Z']
            }

let testG = 8182612;

console.log(get_words(testF, testG));