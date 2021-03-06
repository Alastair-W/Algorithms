// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 
// to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function sigma(a){
    if(a > 0){
        return sigma(a-1) + a;
    }
    return 0
}

console.log(sigma(5));

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
// If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
// Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(b){
    let c = Math.floor(b);
    if (c > 1){
        return(factorial(c-1) * c)
    }
    return 1
}

console.log(factorial(6.5))

// Bonus Challenge (Optional)
// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of 
// an image with a certain color. We change the image as if we painted a canvas: 
// a two-dimensional array of integers, where each integer represents a color for that pixel. 
// The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array 
// is a row in our image, with a length equal to our canvas’ X dimension. 
// You are given a canvas (2-dimensional array of integers), 
// starting coordinate (2-element array), and the color to flood (integer value). 
// Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it 
// is the same color as the origin coordinate and is directly adjacent via X or Y to 
// another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.

// Given canvas2D of:

// [   [3,2,3,4,3],
//     [2,3,3,4,0],
//     [7,3,3,5,3],
//     [6,5,3,4,1],
//     [1,2,3,3,3]
// ]

// plus startXY OF [2,2] and newColor of 1

// … we examine the cells that are directly (not diagonally) adjacent to startXY, 
// which is[2,2]. If any have a value of 3 (the original value at startXY), 
// we change its value to 1 (newColor) and repeat the process with its directly-adjacent 
// neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.

// Our canvas2D becomes:

// [   [3,2,1,4,3],
//     [2,1,1,4,0],
//     [7,1,1,5,3],
//     [6,5,1,4,1],
//     [1,2,1,1,1]
// ]
console.log('-'.repeat(50));
console.log('Algo 2');


function floodFill(image, sr, sc, newColor){
    //Get the input which needs to be replaced.
    const current = image[sr][sc];
    
    //If the newColor is same as the existing 
    //Then return the original image.
    if(current === newColor){
        return image;
    }
    
    //Other wise call the fill function which will fill in the existing image.
    fill(image, sr, sc, newColor, current);
    
    //Return the image once it is filled
    return image;
};

function fill(image, sr, sc, newColor, current){
    //If row is less than 0
    if(sr < 0){
        return;
    }

    //If column is less than 0
    if(sc < 0){
        return;
    }

    //If row is greater than image length
    if(sr > image.length - 1){
        return;
    }

    //If column is greater than image length
    if(sc > image[sr].length - 1){
        return;
    }

    //If the current pixel is not same as start color, stop
    if(image[sr][sc] !== current){
        return;
    }
    
    //Update to the new color
    image[sr][sc] = newColor;
    
    
    //Fill in all four directions
    //Fill Prev row
    fill(image, sr - 1, sc, newColor, current);

     //Fill Next row
    fill(image, sr + 1, sc, newColor, current);

     //Fill Prev col
    fill(image, sr, sc - 1, newColor, current);

     //Fill next col
    fill(image, sr, sc + 1, newColor, current);
    
}



let canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
]
let start = [2,2]

console.log(floodFill(canvas,2,2,1));