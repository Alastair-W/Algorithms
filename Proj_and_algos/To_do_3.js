// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. 
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
console.log('Algo 1')

function positiveBig(a){
    for(item in a){
        if(a[item]>0){
            a[item] = 'big';
        }
    }
    return(a);
}

let newArr = [-1,3,5,-5];
console.log(positiveBig(newArr))


// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, 
// and return the highest value in the array.
console.log('-'.repeat(50))
console.log('Algo 2')

function printReturn(b){
    let maxNum = b[0];
    let minNum = b[0];
    for(obj in b){
        if(b[obj] > maxNum){
            maxNum = b[obj];
        }
        if(b[obj] < minNum){
            minNum = b[obj];
        }
    }
    return('Max: '+maxNum+', Min: '+minNum)
}

let thisArr = [1,2,3,4,3,2,1,0,9,6];
console.log(printReturn(thisArr));


// Print One, Return Another
// Build a function that takes an array of numbers. 
// The function should print the second-to-last value in the array, and return first odd value in the array.
console.log('-'.repeat(50))
console.log('Algo 3')

function printOne(c){
    console.log('Second to Last: '+c[c.length-2]);
    for(aa in c){
        if(c[aa]%2!=0){
            return('First Odd Value: '+c[aa]);
        }
    }
}

let pArr = [2,4,6,1,0,9,3];
console.log(printOne(pArr));

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. 
// Calling double([1,2,3]) should return [2,4,6] without changing original.
console.log('-'.repeat(50))
console.log('Algo 4')

function double(d){
    for(thing in d){
        d[thing] = d[thing]*2
    }
    return(d);
}

let dArr = [1,2,3];
console.log(double(dArr));

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. 
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
console.log('-'.repeat(50))
console.log('Algo 4')

function countPos(e){
    let count = 0;
    for(eItem in e){
        if(e[eItem]>0){
            count += e[eItem];
        }
    }
    e[e.length-1] = count;
    return(e);
}

let eArr = [-1,1,1,1];
console.log(countPos(eArr));


// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" 
// Every time the array has three evens in a row, print "Even more so!"
console.log('-'.repeat(50))
console.log('Algo 5')

function evensOdds(f){
    let oddCount = 0;
    let evenCount = 0;
    for(fObj in f){
        if(f[fObj]%2!=0){
            oddCount+=1;
            if(oddCount%3==0){
                console.log(`That's odd!`);
            }
        }
        if(f[fObj]%2==0){
            evenCount+=1;
            if(evenCount%3==0){
                console.log(`Even more so!`);
            }
        }
    }
}

let fArr = [1,1,1,1,1,1,1,1,1,1,2,2,2];
evensOdds(fArr);


// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
console.log('-'.repeat(50))
console.log('Algo 6')

function increment(g){
    for(gItem in g){
        if(g[gItem]%2!=0){
            g[gItem] = g[gItem]+1;
            console.log('New value: '+g[gItem]);
        }
    }
    return(g);
}

let gArr = [1,2,3,4,5,6];
console.log(increment(gArr));

// Previous Lengths
// You are passed an array containing strings. Working within that same array, 
// replace each string with a number – the length of the string at previous array index – and return the array.
console.log('-'.repeat(50))
console.log('Algo 7')

function previous(h){
    console.log('List length minus 1 is: '+(h.length-1));
    let tempArr = []
    for (let hObj = 0; hObj <= h.length-1; hObj++){
        tempArr.push(h[hObj].length);
        for (let tempObj = 1; tempObj<tempArr.length; tempObj++){
            h[tempObj]=tempArr[tempObj-1];
        }
    }
    return(h);
}

let hArr = ['a', 'bb', 'ccc', 'dddd', 'eeeee'];
console.log(previous(hArr));

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. 
// Do not alter the original array.
console.log('-'.repeat(50))
console.log('Algo 8')

function sevenMost(i){
    let newArr = [];
    for(let iObj = 1; iObj < i.length; iObj++){
        console.log(i[iObj]);
        newArr[iObj-1] = i[iObj]+7;
    }
    return(newArr);
}

let iArr = [0,7,14,21,28];
console.log(sevenMost(iArr));

// Reverse Array
// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
console.log('-'.repeat(50))
console.log('Algo 9')

function reverseArr(j){
    if(j.length<2){
        console.log('ERROR: Array must me at least 2 items long!');
    }
    else if(j.length%2==0){
        console.log('Even');
        let even = j.length;
        for(let jItem = 0; jItem<even/2; jItem++){
            console.log(jItem);
            [j[jItem], j[even-1-jItem]] = [j[even-1-jItem], j[jItem]];
        }
    }
    else if(j.length%2!=0){
        let odd = j.length-1
        for(let jItem = 0; jItem<odd/2; jItem++){
            [j[jItem], j[odd-jItem]] = [j[odd-jItem], j[jItem]];
        }
    }
    return(j);
}

let jArr = [3,1,6,4,2]
console.log(reverseArr(jArr));

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, 
// made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
console.log('-'.repeat(50))
console.log('Algo 10')

function negative(k){
    for(value in k){
        if(k[value]>0){
            k[value] *= -1;
        }
    }
    return(k);
}

let kArr = [1,-3,5];
console.log(negative(kArr))

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". 
// If no array elements are "food", then print "I'm hungry" once.
console.log('-'.repeat(50))
console.log('Algo 11')

function hungry(l){
    for(prod in l){
        if(l[prod] == 'food'){
            console.log('Yummy!');
        }
    }
    if(l.includes('food') == false){
        console.log(`I'm hungry!`);
    }
}

let lArr = ['a', 'b', 'c', 'd']
hungry(lArr)


// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. 
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
console.log('-'.repeat(50))
console.log('Algo 12')

function swapCentre(m){
    let fullLen = m.length;
    if(m.length%2==0){
        let evenSplit = m.length/2;
        for(let mItem = 0; mItem <= evenSplit; mItem+=2){
            console.log(mItem);
            [m[mItem], m[fullLen-1-mItem]] = [m[fullLen-1-mItem], m[mItem]]
        }
    }
    else{
        let oddSplit = m.length-1/2;
        for(let mItem = 0; mItem < oddSplit; mItem+=2){
            [m[mItem], m[fullLen-1-mItem]] = [m[fullLen-1-mItem], m[mItem]]
        }
    }
    return(m);
}

let mArr = [1,2,3,4,5,6];
console.log(swapCentre(mArr));

// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.
console.log('-'.repeat(50))
console.log('Algo 13')

function scale(n, o){
    for(thing in n){
        n[thing] = n[thing]*o;
    }
    return(n);
}

let nArr = [1,2,3,4,5];
let multiplier = 7;

console.log(scale(nArr, multiplier));