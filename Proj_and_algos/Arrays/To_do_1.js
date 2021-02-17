// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.
console.log('Algo 1');

function pushFront(a,b){
    for(let aItem = a.length-1; aItem >= 0; aItem--){   
        a[aItem+1] = a[aItem]; 
    }
    a[0] = b;
    return(a);
}

let aItem = [1,2,3];
let bItem = 4;

console.log(pushFront(aItem, bItem));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().
console.log('-'.repeat(50));
console.log('Algo 2');

function popFront(c,d){
    let removeEle = c[0];
    [c[0], c[c.length-1]] = [c[c.length-1], c[0]];
    c.pop();
    [c[0], c[c.length-1]] = [c[c.length-1], c[0]];
    return(removeEle);
}

let cItem = [1,2,3];
let dItem = 0;

console.log(popFront(cItem, dItem));

// Insert At
// Given an array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods. You can think of pushFront(arr,val) as
// equivalent to insertAt(arr,0,val).
console.log('-'.repeat(50));
console.log('Algo 3');

function insertAt(e,f,g){
    for(let eItem = e.length-1; eItem >= f; eItem--){   
        e[eItem+1] = e[eItem]; 
    }
    e[f] = g;
    return(e);
}

let eArr = [2,3,4,5]
let fIdx = 2;
let gVal = 77;

console.log(insertAt(eArr, fIdx, gVal));


// Remove At
// Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
console.log('-'.repeat(50));
console.log('Algo 4');

function removeAt(h,i){
    let arrLen = h.length-1;
    for(let hIdx = i; hIdx < arrLen; hIdx++){
        [h[hIdx], h[hIdx+1]] = [h[hIdx+1], h[hIdx]];
    }
    let remVal = h[h.length-1];
    h.pop();
    console.log(remVal);
}

let hItem = [1,2,3,4,5,6,7];
let iItem = 3;

removeAt(hItem, iItem);


// Swap Pairs
// Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to
//  [true,"Brendan",42]. As with all array challenges, do this without using any 
// built-in array methods.
console.log('-'.repeat(50));
console.log('Algo 5');

function swap(j){
    if(j.length%2==0){
        let jLen = j.length;
        for(let jItem = 0; jItem < jLen; jItem+=2){
            [j[jItem], j[jItem+1]] = [j[jItem+1], j[jItem]];
        }
    }
    else{
        let jLen = j.length-1;
        for(let jItem = 0; jItem < jLen; jItem+=2){
            [j[jItem], j[jItem+1]] = [j[jItem+1], j[jItem]];
        }
    }

    return(j);
}

let newJ = [1,2,3,4,5];
console.log(swap(newJ));

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from 
// various sources. Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. Because array elements are already 
// in order, all duplicate values will be grouped together. As with all these array 
// challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.
console.log('-'.repeat(50));
console.log('Algo 6');

function duplicates(k){
    
}
