let nomre = 121;
let nomre1 = 0;
let nomretersi = 0;
const Nomre = nomre; 

while (nomre > 0) {
    nomre1 = nomre % 10;
    nomretersi = nomretersi * 10 + nomre1;
    nomre = parseInt(nomre / 10);
}

if (Nomre === nomretersi) {
    console.log("true"); 
} else {
    console.log("false"); 
}
