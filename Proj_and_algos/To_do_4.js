// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. 
// Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). 
// Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
console.log('Algo 1')

function keepLast(a, b){
    a.splice(0,a.length-b);
    return(a);
}

let aArr = [2,4,6,8,10];
let change = 3;
console.log(keepLast(aArr, change));

// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. 
// Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is 
// the value of X where Y equals zero; Cartman just snorts in his general direction).
console.log('-'.repeat(50))
console.log('Algo 2')

function mathHelp(c, d){
    let y = 0;
    let x = d/c;
    return('X: '+x+', Y: '+y);
}

let testM = 3;
let testB = 1;

console.log(mathHelp(testM, testB));

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 
// 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). 
// If these probabilities continue, write whatHappensToday() to print a day’s outcome.
console.log('-'.repeat(50))
console.log('Algo 3')

function whatHappensToday(e){
    let total = 0;
    for(let item = 0; item < weather.length; item++){
        total += e[item][1];
    }
    console.log('Total number of days in sample: '+total);
    const threshold = Math.random() * total;
    console.log('Random value selected from Total Number of Days '+threshold);
    let newTotal = 0;
    // In this scenario we know what weather occured and how frequently over a 100 day period
    // Now all we do is take the random number generated above, that is between 0 and 100 - the number of days in the data set
    // and then loop through the data set, adding up the second value in the list of lists, until the 'counter' reaches the random number ('threshold')
    // Once that number is found, the first value that the for loop is currently at is returned - that is our weighted random value
    for(let item = 0; item < weather.length; item++){
        newTotal += e[item][1];

        if (newTotal >= threshold) {
            return e[item][0];
        }
    }
}

const weather = [
    ['volcano', 10],
    ['tsunami',  15],
    ['earthquake', 20],
    ['blizzard', 25],
    ['meteor', 30]
];

console.log(whatHappensToday(weather));

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. 
// Change whatHappensToday() function to create whatReallyHappensToday(). 
// In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. 
// In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
console.log('-'.repeat(50))
console.log('Algo 4')



// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. 
// Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, 
// then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). 
// What is Bogdan’s final IQ?
console.log('-'.repeat(50))
console.log('Algo 5')

function exponential(f, g){
    let IQ = 0;
    for(let gObj = 1; gObj <=g; gObj++){
        IQ+=f*gObj;
        console.log(`Day `+gObj+`: IQ Gain = `+Math.round(IQ*100)/100);
    }
    return(`Total IQ gain at day 98: `+IQ);
}

let fIQ = 0.01;
let gDay = 98;

console.log(exponential(fIQ, gDay));


// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, 
// given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 
// 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. 
// Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
console.log('-'.repeat(50))
console.log('Algo 6')

function letterGrade(h){
    if(h>=90){
        return(`Score: `+h+`, Grade: A`);
    }
    if(h>=80){
        return(`Score: `+h+`, Grade: B`);
    }
    if(h>=70){
        return(`Score: `+h+`, Grade: C`);
    }
    if(h>=60){
        return(`Score: `+h+`, Grade: D`);
    }
    else{
        return(`Score: `+h+`, Grade: F`);
    }
}

let grade = 61;

console.log(letterGrade(grade));


// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, 
// and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). 
// Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
console.log('-'.repeat(50))
console.log('Algo 7')

function plusGrade(i){
    if(i>=90){
        return(`Score: `+i+`, Grade: A`);
    }
    if(i>=88){
        return(`Score: `+i+`, Grade: B+`);
    }
    if(i>=83){
        return(`Score: `+i+`, Grade: B`);
    }
    if(i>=80){
        return(`Score: `+i+`, Grade: B-`);
    }
    if(i>=78){
        return(`Score: `+i+`, Grade: C+`);
    }
    if(i>=73){
        return(`Score: `+i+`, Grade: C`);
    }
    if(i>=70){
        return(`Score: `+i+`, Grade: C-`);
    }
    if(i>=68){
        return(`Score: `+i+`, Grade: D+`);
    }
    if(i>=63){
        return(`Score: `+i+`, Grade: D`);
    }
    if(i>=60){
        return(`Score: `+i+`, Grade: D-`);
    }
    else{
        return(`Score: `+i+`, Grade: F`);
    }
}

let newGrade = 83;

console.log(plusGrade(newGrade));
