// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to 
// other indices so that order of elements is reversed. Working ‘in-place’ means that 
// you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().
console.log('Algo 1');

function reverse(a){
    let aLen = a.length-1;
    let iter = Math.floor(a.length/2);
    for(let index = 0; index <iter; index++){
        [a[index], a[aLen-index]] = [a[aLen-index], a[index]];
    }
    return(a);
}

let testA = [1,2,3,4,5,6];
console.log(reverse(testA));


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off 
// array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
console.log('-'.repeat(50));
console.log('Algo 2');

function rotateArr(b,c){
    if(c>b.length){
        return('ERROR: can only offset up to the max length of the list');
    }
    var bLen = b.length;
    for(let bItem = b.length-1; bItem >= 0; bItem--){
        b[bItem+c] = b[bItem];
    }
    let count = c-1;
    for(let idx = b.length-1; idx >= bLen; idx--){
        b[count] = b[idx];
        count -= 1;
        b.length--;
    }

    return(b);
}

let bArr = [1,2,3,4,5,6,7,8,9,10];
let offset = 4;

console.log(rotateArr(bArr, offset));

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that 
// lie within a specific known range. Given arr and values min and max, retain only the 
// array values between min and max. Work in-place: return the array you are given, 
// with values in original order. No built-in array functions.
console.log('-'.repeat(50));
console.log('Algo 3');

function filter(newArr, min, max){
    for(item in newArr){
        if(newArr[item] > min && newArr[item] < max){
            console.log(newArr[item]);
            for(let obj = item; obj < newArr.length-1; obj++){
                console.log(obj);
                newArr[obj] = newArr[obj+1];
                console.log(newArr);
            }
            newArr.length = newArr.length-1;
        }
    }
    return(newArr);
}

let testArr = [1,2,3,4,5,6,7,8];
let testMin = 3;
let testMax = 6;

console.log(filter(testArr, testMin, testMax));


// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second 
// array’s elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].