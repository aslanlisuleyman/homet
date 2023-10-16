const siyahi1 = [1, 2, 3, 4, 5];
const siyahi2 = [1, 4, 5, 6, 7];

const umumi = [];

for (let i = 0; i < siyahi1.length; i++) {
  if (!siyahi2.includes(siyahi1[i])) {
    umumi.push(siyahi1[i]);
  }
}

console.log( umumi);
//n*m