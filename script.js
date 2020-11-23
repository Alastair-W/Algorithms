// Print 1 to x
// Please complete the codes below to have the function print all the integers from 1 to x. 
// If x is negative, have it print/log "negative number' and have the function return false.


function printUpTo(x){
    if(x<0){
        return false
    }
    else{
        for(let num = 0; num <= x; num++){
            console.log(num);
        }
    }
}
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  var y = printUpTo(-10); // should return false
  console.log(y); // should print false



// PrintSum
// Please complete the code below to have the function print integers from 0 to 255 
// and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
    var sum = 0;
    for(let sumNum = 0; sumNum <=x; sumNum++){
        sum += sumNum;
    }
    return sum
}
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640


// PrintSumArray
// Please complete the code below to have the function return the sum 
// of all the values in a given array

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i];
    }
    return sum;
}
  console.log( printSumArray([1,2,3]) ); // should log 6