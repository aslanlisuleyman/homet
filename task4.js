let siyahi = [113, 25, 478, 237, 8, 543, 1890, 821]; 
let ucreqemli = 0;
let qarisiq = 0;

for (let i = 0; i < siyahi.length; i++) {
    if (siyahi[i] >= 100 && siyahi[i] <= 999) {
        ucreqemli += siyahi[i];
    } 
    else {
        qarisiq += siyahi[i];
    }
}

const ferq = ucreqemli - qarisiq;
console.log( ferq);


//n+5