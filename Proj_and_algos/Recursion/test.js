let newList = 2;
console.log(newList.length);



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

let testG = 423;

let letters = [];
let strG = String(testG);
for(digit in strG){
    letters.push(testF[strG[digit]]);
}

console.log(letters);
console.log(letters[0]);



let testing = 'abc';

sliceTest = testing.slice(0,1)
console.log(sliceTest);





function findPermutations(string){
    if (!string || typeof string !== "string"){
        return "Please enter a string"
    }

    if (!!string.length && string.length < 2 ){
        return string
    }

    let permutationsArray = [] 

    for (let i = 0; i < string.length; i++){
        let char = string[i]

        // if (string.indexOf(char) != i)
        // continue

        let remainder = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of findPermutations(remainder)){
            permutationsArray.push(char + permutation) }
    }
    return permutationsArray
}

let testString = 'abc';
console.log(findPermutations(testString));


// function anagram(stringOne){
//     let resultsArray = []
    
//     for(let i = 0; i < stringOne.length; i++){
//         let char = stringOne[i]

//         let remainChars = stringOne.slice(0, i) + stringOne.slice(i + 1, stringOne.length)
//         console.log('Remain Chars: '+remainChars)

//         for(let permutation of anagram(remainChars)){
//             resultsArray.push(char + permutation)
//         }
//     return resultsArray
//     }
// }
// let testString = 'abc';
// console.log(anagram(testString));