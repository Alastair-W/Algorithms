// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. 
// Display the final sum in the console.
// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. 
// Think of threesFives() as betterThreesFives(100,4000000).
console.log('Algo 1')

function threeFive(a,b){
    let sumTotal = 0;
    for(let aItem = a; aItem <= b; aItem++){
        if(aItem%3==0 && aItem%5==0){
        }
        else if(aItem%3==0){
            sumTotal += aItem;
        }
        else if(aItem%5==0){
            sumTotal += aItem;
        }
        console.log(aItem, sumTotal);
    }
    return(sumTotal);
}

let aVar = 1;
let bVar = 20;

console.log(threeFive(aVar, bVar));

// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. 
// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
// Example output, given (94):

// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4
// Second: can you simplify/shorten your code?
// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.
console.log('-'.repeat(50));
console.log('Algo 2');

function coinChange(c){
    let change = [0,0,0,0,0,c]
    let denom = [100,50,25,10,5]
    for(item=0;item<change.length-1;item++){
        change[item] = Math.floor(change[change.length-1]/denom[item]);
        change[change.length-1] -= change[item]*denom[item];
    }
return('Dollar: '+change[0]+', Half-Dollar: '+change[1]+', Quarters: '+change[2]+', Dimes: '+change[3]+', Nickels: '+change[4]+', Cents: '+change[5]);
}

let amount = 434;
console.log(coinChange(amount));


// Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, 
// except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
console.log('-'.repeat(50));
console.log('Algo 3');

function messy(d,e){
    let totalNum = 0;
    for(obj=d; obj<=e; obj++){
        if(e/obj==3){
            return(-1);
        }
        else if(obj%3==0){ 
        }
        else if(obj%7==0){
            totalNum += obj*2;
        }
        else{
            totalNum += obj;
        }
    }
    return(totalNum);
}

let lowNum = 0;
let highNum = 15;

console.log(messy(lowNum, highNum));


// Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", 
// then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.
console.log('-'.repeat(50));
console.log('Algo 4');

function twelve(f,g,h){
    for(let fItem = 1; fItem<=f; fItem++){
        console.log(fItem,g,h,g);
    }
}

let testF = 12;
let testG = 'boom';
let testH = 'chick';

twelve(testF, testG, testH);


// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, 
// each number is the sum of the previous two, starting with values 0 and 1. 
// Your function should accept one argument, an index into the sequence 
// (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 
// Examples: 
// fibonacci(0) = 0 (given), 
// fibonacci(1) = 1 (given), 
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), 
// fibonacci(4) = 3 (1+2), 
// fibonacci(5) = 5 (2+3), 
// fibonacci(6) = 8 (3+5), 
// fibonacci(7) = 13 (5+8), etc.
console.log('-'.repeat(50));
console.log('Algo 5');

function fib(i){
    let seq = [0,1];
    for(let iItem = 2; iItem<=i; iItem++){
        seq.push(seq[iItem-1]+seq[iItem-2]);
    }
    return(seq[seq.length-1]);
}

let testI = 10;
console.log(fib(testI));


// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. 
// Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. 
// Return that one-digit result. 
// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
console.log('-'.repeat(50));
console.log('Algo 6');

function sumOne(j){
    sum = j % 9 || 9;
    return(sum);
}

console.log(sumOne(9));

// Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands 
// on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, 
// minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, 
// prints angles (in degrees) of the hour, minute and second hands. As a review, 360 degrees form a full rotation. 
// For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." 
// For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. 
// Minute hand: 93 degs. Second hand: 180 degs." 
// Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, 
// because of the additional 30 seconds in that minute so far.
// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.
console.log('-'.repeat(50));
console.log('Algo 7');

function clock(k){
    let secRemain = k%3600;
    // Hour
    let hourDeg = Math.floor(((k/3600)%24)*30);
    let hour = Math.floor(hourDeg/30);
    // Minutes
    let minDeg = Math.floor((secRemain/60)*6);
    let min = Math.floor(minDeg/6);
    // Seconds
    let secsDeg = Math.floor(((secRemain%60)/60)*360);
    let secs = Math.floor(secRemain%60)
    console.log(hour+':'+min+':'+secs);
    console.log(`Hour: `+hourDeg+` degs , Min: `+minDeg+` degs , Secs: `+secsDeg+` degs`);
}

clock(119730.233);

// Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible 
// by themselves and 1. Many highly optimized solutions exist, but for now, 
// just create one that is easy to understand and debug.
console.log('-'.repeat(50));
console.log('Algo 8');

function prime(l){
    if(l<=2){
        return('Prime!')
    }
    else{
        for(let pObj = 2; pObj < l; pObj++){
            if(l%pObj==0){
                return('Not prime, '+l+' is evenly divisible by '+pObj);
            }
            else
                return('Prime!');
        }
    }
}

let primeL = 6;

console.log(prime(primeL));