// Rising Squares
// Ever since her dad discovered universal truths about triangles, Sophia Pythagoras has loved 
// square numbers. Given a positive integer, successively print squares of integers up to that 
// integer, first ascending odds, then descending evens. Solve recursively with no loops. 

// Ex.: risingSquare(5) returns "1, 9, 25, 16, 4", risingSquare(8) 
// returns "1, 9, 25, 49, 64, 36, 16, 4".
console.log('Algo 1');

function risingInit(a){
    let oddList = [];
    let evenList = [];
    let startNum = 1;
    return risingSquare(a,oddList, evenList, startNum);
}

function risingSquare(a,oddList, evenList, startNum){
    if(startNum <= a){
        if(startNum%2!=0){
            oddList.push(startNum*startNum);
        }
        else{
            evenList.push(startNum*startNum);
        }
        return risingSquare(a, oddList, evenList, startNum+1)
    }
    return oddList.concat(evenList.reverse())
}

console.log(risingInit(5));

// Binary String Expansion
// You are given a string containing chars ‘0’, ‘1’, and ‘?’. For every ‘?’, 
// either ‘0’ or ‘1’ can be substituted. Write a recursive function to return an array of 
// all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. 
// binStrExpand("1?0?") => ["1000","1001","1100","1101"]. 
// If you use string functions such as slice(), use them sparingly, as they are expensive.






// String Anagrams
// Given a string, return array where each element is a string representing a different anagram 
// (a different sequence of the letters in that string). 
// Example: if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"]. 
// For this challenge, you can use built-in string functions such as split().
console.log('-'.repeat(50));
console.log('Algo 3');

function anagrams(f){
    console.log('Start f: '+f);
    // checks to see if there is any input/argument or, if one does exist, if it is a string
    if (!f || typeof f !== "string"){
        return "Please enter a string"
    }
    // checks to see if the input/argument has any characters/elements and that the length of these is at least 2
    if (!!f.length && f.length < 2 ){
        console.log('End');
        return f
    }

    let anaList = []
    for(let i = 0; i < f.length; i++){
        let char = f[i];
        // checks to see if the index that the current char is first found is different to the loop iteration
        // i.e. the string has the same character twice 
        // if so then it skips this iteration to avoid the same anagrams appearing twice
        // for example, abca (where the first a is index 1 from the initial string) and abca (where the last a is the index 1 from the initial string)
        if (f.indexOf(char) != i){
            continue
        }
        let remainChar = f.slice(0, i) + f.slice(i+1, f.length)
        console.log('Upper For Loop - f: '+f+', i: '+i+', char: '+char+', remainChar: '+remainChar);
        for(let element of anagrams(remainChar)){
            console.log('Lower For Loop - f: '+f+', i: '+i+', char: '+char+', remainChar: '+remainChar);
            anaList.push(char + element)
            console.log(anaList);
        }
    }
    console.log('Final List');
    return anaList
}

let testF = 'abc';
console.log(anagrams(testF));





// Climbing Stairs
// Speros walks the stairs at the Dojo multiple times every day. Often he takes 2 stairs at a time, 
// to work his quadriceps; he’s just that way. Other days he mixes it up: with every footstep, 
// he randomly chooses to take 1 stair or 2. You are given an integer representing the total 
// number of stairs. Determine all ways to walk the stairs. 
// Given 4, return [[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]]. 
// Solve recursively with no loops. And don’t forget to get yourself some exercise during 
// the bootcamp, as well.
// Second: assuming you always start with a left foot, return only those ways that end with 
// a right step. So, given 4, you should return [[1,1,1,1], [2,2]].
// Third: instead of only returning those that end with a right step, 
// only return those where the total number of steps climbed with left foot equal those 
// climbed with right. So, given 4, you should return [[1,1,1,1], [1,2,1], [2,2]].
console.log('-'.repeat(50));
console.log('Algo 4');


function climbSetUp(steps){
    let options = []
    stepping(steps, options)
    return options
}

function stepping(steps, options){
    console.log('Steps: '+steps)
    console.log('Options: '+options)
    let climb = []
    if(steps == 0){
        options.push(climb)
        return climb
    }
    for(let item = 1; item<3; item++){
        climb.push(item)
        steps-=item
        stepping(steps, options)
    }
}

let testx = 4
console.log(climbSetUp(testx))
