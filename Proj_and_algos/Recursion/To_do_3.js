// To Do 3
// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.
console.log('Algo 1');
function bsInit(a,b){
    let n = 0;
    function binarySearch(a,b){
        // console.log(n, a[n]);
        if(n < a.length){
            if(a[n] == b){
                return 'True'
            }
            else{
                n += 1;
                return binarySearch(a,b)
            }
        }
        return 'False'
    }
    return binarySearch(a,b)
}

let testA = [4,5,6,8,12];
let testB = 5;

console.log(bsInit(testA, testB));


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor 
// (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. 
// You should  be able to compute rGCF(123456,987654).
console.log('-'.repeat(50));
console.log('Algo 2');

function rGCF(c,d){
    console.log(`C is ${c}, D is ${d}`);
    if(c == d){
        return c
    }
    else if(c > d){
        if(c/d %1 === 0){
            return d
        }
        return rGCF(c-d,d)
    }
    else if(d > c){
        if(d/c %1 ===0){
            return c
        }
        return rGCF(c,d-c)
    }
}

let testC = 123456;
let testD = 987654;

console.log(rGCF(testC, testD));

console.log((123/3)%1);

// Bonus Challenges (Optional)
// Tarai
// The Tarai (Japanese: “to pass around”) function was created to profile recursive performance 
// in various systems and languages. Unlike other functions, numbers don't get particularly large, 
// but the amount of recursion is significant. The tarai function accepts three parameters and is defined as:

// tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
// tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).
// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).
console.log('-'.repeat(50));
console.log('Algo 3');

function tarai(x,y,z){
    if(x<=y){
        return y
    }
    else{
        return tarai(tarai(x-1,y,z), tarai(y-1,z,x), tarai(z-1,x,y))
    }
}

let testX = 10;
let testY = 2;
let testZ = 9;

console.log(tarai(testX, testY, testZ));


// String: In-Order Subsets
// Create strSubsets(str). Return an array with every possible in-order character subset of str. 
// The resultant array itself need not be in any specific order – it is the subset of letters in each string 
// that must be in the same order as they were in the original string. 
// Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
console.log('-'.repeat(50));
console.log('Algo 4');

let stringList = [];
let n = 0;
function subsets(g){
    let char = g[n];
    stringList.push(char);
    n += 1;
    if(n < g.length){
        for(let item = n; item < g.length; item++){
            char += g[item];
            stringList.push(char);
        }
        return subsets(g);
    }
    console.log(stringList);
}

let testG = 'abcde';
subsets(testG);
