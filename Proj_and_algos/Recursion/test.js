let testF = {
    0: ['O'],
    1: ['I'], 
    2: ['A','B','C'], 
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R','S'],
    8: ['T','U','V'],
    9: ['W','X','Y','Z']
}

let testG = 123;

let letters = [];
let strG = String(testG);
for(digit in strG){
    // console.log(testF[parseInt(strG[digit])]);
    for(i in testF[parseInt(strG[digit])]){
        letters.push(testF[parseInt(strG[digit])][i]);
    }
        
}

console.log(letters);