let siyahi = [2, 5, 8, 11, 18, 23, 26]; 
let teklerincemi = 0;
let cutlerincemi = 0;

for (let i = 0; i < siyahi.length; i++) {
    if (siyahi[i] % 2 === 0) {
    
        cutlerincemi+= siyahi[i];
    } else {
    
        teklerincemi += siyahi[i];
    }
}

const ferq = cutlerincemi - teklerincemi;
console.log( ferq);
//n+5