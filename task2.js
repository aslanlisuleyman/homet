var eded = parseInt(prompt("ededi daxil edin"));

if (eded <= 1) {
    console.log(false); 
}  else if (eded === 2) {
    console.log(true);
} else {
    
    for (let i = 2; i < eded; i++) {
        if (eded % i === 0) {
         console.log(eded = false);
        }
    }
    if (eded) {
        console.log(true);
    } else {
        console.log(false);
    }
}



