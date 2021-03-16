// Balance Point
// Write a function that returns whether the given array has a balance point between 
// indices, where one side’s sum is equal to the other’s. 
// Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.
console.log('Algo 1');

function balance(a){
    let right = 0;
    for(ele in a){
        right += a[ele]
    }

    let left = 0;
    for(item in a){
        console.log('Left: '+left+', Right: '+right);
        if(left == right){
            return true
        }
        right -= a[item];
        left += a[item];
    }
    return false
}

let testA = [1,2,3,4,10]
console.log(balance(testA))



// Balance Index
// Here, a balance point is on an index, not between indices. 
// Return the balance index where sums are equal on either side (exclude its own value). 
// Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

console.log('-'.repeat(50));
console.log('Algo 2');

function balIndex(b){
    let rightSum = 0;
    for(let blob = 1; blob<b.length; blob++){
        rightSum += b[blob]
    }
    let leftSum = b[0]
    for(let newItem = 1; newItem < b.length; newItem++){
        rightSum -= b[newItem]
        console.log('Left: '+leftSum)
        console.log('Right: '+rightSum)
        if(leftSum == rightSum){
            return true
        }
        leftSum += b[newItem]
    }
    return false
}

let testB = [3,5,6,1,2,3,4,5]
console.log(balIndex(testB));