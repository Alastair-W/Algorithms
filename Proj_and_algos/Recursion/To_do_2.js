// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. 
// As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

// rFib(2) = 1 (0+1); 
// rFib(3) = 2 (1+1); 
// rFib(4) = 3 (1+2); 
// rFib(5) = 5 (2+3);
// rFib(3.65) = rFib(3) = 2
// rFib(-2) = rFib(0) = 0.

console.log('Algo 1');

function fibInit(a){
    let seq = [0,1];
    if(a < 0){
        return seq[0]
    }
    function rFib(a){
        let seqLength = seq.length;
        if(seqLength <= a){
            seq.push(seq[seqLength-2] + seq[seqLength-1]);
            return rFib(a)
        }
        else{
            return seq[Math.floor(a)];
        }
    }
    return rFib(a)
}

let testA = -2;
console.log(fibInit(testA));


// Recursive “Tribonacci”
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
// First three Tribonacci numbers are 0, 0, 1, so 
// rTrib(3) = 1 (0+0+1);
// rTrib(4) = 2 (0+1+1); 
// rTrib(5) = 4 (1+1+2);
// rTrib(6) = 7 (1+2+4). 
// Handle negatives and non-integers appropriately and inexpensively.
console.log('-'.repeat(50));
console.log('Algo 2');

function rTribInit(b){
    let tSeq = [0,0,1];
    if(b < 0){
        return tSeq[0];
    }
    else if(typeof b != 'number'){
        return(`This is not an integer`);
    }
    function rTrib(b){
        let tSeqLength = tSeq.length;
        if(tSeqLength <= b){
            tSeq.push(tSeq[tSeqLength-3] + tSeq[tSeqLength-2] + tSeq[tSeqLength-1]);
            return rTrib(b)
        }
        else{
            return tSeq[Math.floor(b)];
        }
    }
    return rTrib(b)
}

let testB = 10;
console.log(rTribInit(testB));


// Paging Dr. Ackermann
// The Ackermann function is among the earliest examples of a computable but not 
// primitive-recursive function. It grows rapidly and hence can overflow the JavaScript 
// stack frame even at very low values. 
// This function accepts two non-negative integer values, num1 and num2, and follows these rules:
// ackermann(0,num2) == num2+1;
// ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
// ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
// Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!   
console.log('-'.repeat(50));
console.log('Algo 3');

function ackerman(c,d){
    if(c == 0){
        return d+c
    }
    else if(c > 0 && d == 0){
        return ackerman(c-1,1)
    }
    else{
        return ackerman(c-1, ackerman(c,d-1))
    }
}

let testC = 3;
let testD = 3;

console.log(ackerman(testC, testD));



// Zibonacci
// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, 
// hence the name. A so-called ‘Zibonacci’ series would be defined by the following rules:

// Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
// Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?

// Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. 
// bestZibNum(3186) == 2467, bestZibNum(3183) == null.
console.log('-'.repeat(50));
console.log('Algo 4');

function rZib(e){
    if(e == 0){
        return 1
    }
    else if(e == 1){
        return 1;
    }
    else if(e == 2){
        return 2;
    }
    else if(e%2!=0 && e >=3){
        return rZib((e-1)/2) + rZib(((e-1)/2)-1) + 1;
    }
    else if(e%2==0 && e >=4){
        return rZib(e/2) + rZib((e/2)+1) + 1;
    }
}

let testE = 100;
console.log(rZib(testE));
