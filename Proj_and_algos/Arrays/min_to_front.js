// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change 
// the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

function minFront(a){
    var minValIdx = 0;
    var minVal = a[0];
        for(item in a){
            if(a[item] < minVal){
                minVal = a[item];
                minValIdx = item;
            }
        }
    for(let aItem = minValIdx; aItem > 0; aItem--){
        [a[aItem], a[aItem-1]] = [a[aItem-1], a[aItem]]
    }
    return(a);
}

let aArr = [4,2,1,3,5];

console.log(minFront(aArr));

