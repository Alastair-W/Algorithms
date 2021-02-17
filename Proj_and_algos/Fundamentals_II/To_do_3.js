// Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo 
// sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), 
// but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three,
// or a sweet 35% discount if you buy four or more. He only accepts cash and says 
// he doesn’t have coins, so you should round up to the nearest dollar. 
// Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.
console.log('Algo 1');

function sweatshirt(a){
    let basePrice = 20;
    let discounts = [0.09, 0.19, 0.35];
    if(a>3){
        return(Math.ceil(a*basePrice-(a*basePrice*discounts[2])));
    }
    else if(a==3){
        return(Math.ceil(a*basePrice-(a*basePrice*discounts[1])));
    }
    else if(a==2){
        return(Math.ceil(a*basePrice-(a*basePrice*discounts[0])));
    }
    else{
        return(a*basePrice);
    }
}

let vol = 2;
console.log(sweatshirt(vol));



// Clock Hand Angles, Revisited
// Return to your previous clockHandAngles solution. 
// Allow fractional values for input seconds, but change your implementation to print 
// only integer values for angles (in degrees) of the various hands.
console.log('-'.repeat(50));
console.log('Algo 3');

function clock(k){
    let secRemain = k%3600;
    // Hour
    let hourDeg = Math.floor(((k/3600)%24)*30);
    let hour = Math.floor(hourDeg/30);
    // Minutes
    let minDeg = Math.floor((secRemain/60)*6);
    let min = Math.floor(minDeg/6);
    // Seconds
    let secsDeg = Math.floor(((secRemain%60)/60)*360);
    let secs = Math.floor(secRemain%60)
    console.log(hour+':'+min+':'+secs);
    console.log(`Hour: `+hourDeg+` degs , Min: `+minDeg+` degs , Secs: `+secsDeg+` degs`);
}

clock(119730.233);