const line = '-'

// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
console.log('Algo 1');
console.log(line.repeat(50));

function swap(a,b){
    console.log('myNumber is '+a+' and myName is '+b);
    [a, b] = [b, a];
    console.log('...SWAPPING...')
    console.log('myNumber is now '+a+' and myName is now '+b);
}

let myNumber = 42;
let myName = 'Al';

swap(myNumber, myName);


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
console.log('Algo 2');
console.log(line.repeat(50));

function printInt(c,d){
    for (let i = c; i <= d; i++){
        console.log(i);
    }
}

let lowNum = -52;
let highNum = 1066;

printInt(lowNum, highNum);

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
console.log('Algo 3');
console.log(line.repeat(50));



function beCheerful(e,f){
    for (let item = 1; item <=f; item++){
        console.log(item+' '+e)
    }
}

let string = 'Good Morning!';
let numTimes = 98;

beCheerful(string,numTimes);


// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
console.log('Algo 4');
console.log(line.repeat(50));

function multiples(g,h,i){
    if (g > h){
        console.log('ERROR: The first integer needs to be lower than the second')
    }
    else{
        let count = 0;
        for (var num = g; num <=h; num+=i){
            if (num != -3 && num != -6) {
                console.log(num);
                count += 1
            }
        }
        console.log('Number of loops '+count);
    }   
}

let startNum = -300;
let endNum = 0;
let multiplier = 3;

multiples(startNum, endNum, multiplier)


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
console.log('Algo 5');
console.log(line.repeat(50));

function whileInt(j,k){
    if (j > k){
        console.log('ERROR: The first integer needs to be lower than the second')
    }
    while (j <= k){
        console.log(j);
        j++
    }
}

let start = 2000;
let end = 5280;

whileInt(start,end);

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
console.log('Algo 6');
console.log(line.repeat(50));

function birthday(l, m){
    const thirty = [9,4,7,11];
    const thirtyOne = [1,3,5,6,8,10,12];
    if (m > 12 || m <1) {
        console.log('ERROR: The second variable represents a calendar month so needs to be more than 0 and less than or equal to 12');
    }
    
    if (thirty.includes(m) && l < 1 || l > 30) {
        console.log('ERROR: There are 30 days in these months (and it cant be 0!)');
        }   
    else if (thirtyOne.includes(m) && l < 1 || l > 31){
        console.log('ERROR: There are 31 days in these months (and it cant be 0!)');
    }
    else if (m == 2 && l < 1 || l > 29) {
        console.log('ERROR: There are a maximum of 29 days in February (and it cant be 0!)');
    }
    else{    
        if (l == 14 && m == 10){
            console.log('How did you know?');
        }
        else{
            console.log('Just another day....');
        }  
    }
}

let day = 14;
let month = 10;

birthday(day, month);

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
console.log('Algo 7');
console.log(line.repeat(50));

function leap(n){
    if ((n%4 == 0) && (n%100 != 0) || (n%400 == 0)){
        console.log("It's a Leap Year!");
    }
    else{
        console.log("It's NOT a Leap Year!")
    }
}

let year = 2020;
leap(year);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
console.log('Algo 8');
console.log(line.repeat(50));

let startNew = 512;
let endNew = 4096;
let multiplierNew = 5;

multiples(startNew, endNew, multiplierNew)

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
console.log('Algo 9');
console.log(line.repeat(50));

function multipleSix(o,p){
    while(o <= p){
        console.log(o);
        o+=6
    }
}

let objA = 0;
let objB = 60000;

multipleSix(objA, objB);


// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
console.log('Algo 10');
console.log(line.repeat(50));

function printDojo(q,r){
    for (let dojo = q; dojo <= r; dojo++){
        if(dojo%10==0){
            console.log('Dojo');
        }
        else if(dojo%5==0){
            console.log('Coding');        }
        else{
            console.log(dojo);
        }
    }
}

let mystart = 1;
let myend = 100;

printDojo(mystart, myend);

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
console.log('Algo 11');
console.log(line.repeat(50));

function param(incoming){
    console.log(incoming);
}

let parameter = 'Hello World';

param(parameter);

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
console.log('Algo 12');
console.log(line.repeat(50));


function oddInt(s,t){
    let count = 0;
    for (let myItem = s; myItem <= t; myItem++){
        if(myItem%2!==0){
            count += myItem       
        }
    }
    console.log(count)
}

let first = -300000;
let last = 300000;

oddInt(first, last);

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
console.log('Algo 13');
console.log(line.repeat(50));

function countdown(u,v,w){
    while(v > u){
    console.log(v);
    v-=w
    }
}

let smallNum = 0;
let bigNum = 2016;
let gapNum = 4;

countdown(smallNum, bigNum, gapNum);

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
console.log('Algo 14');
console.log(line.repeat(50));

function countdownFor(x,y,z){
    for (let myV = y; myV >= x; myV-=z){
        console.log(myV);
    }
}

let sNum = 2;
let bNum = 9;
let gNum = 3;

countdownFor(sNum, bNum, gNum)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4
// parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. 
// One exception: if a multiple is equal to param4, then skip (don’t print) it. 
// Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
console.log('Algo 15');
console.log(line.repeat(50));

function finalCount(multP, startP, endP, skipP){
    if(startP > endP){
        while(startP > endP){
            if(startP%multP==0 && startP != skipP){
                console.log(startP);
            }
            startP--
        }
    }
    else{
        while(startP < endP){
            if(startP%multP==0 && startP != skipP){
                console.log(startP);
            }
            startP++
        }
    }
}   

finalCount(3,5,17,9);




