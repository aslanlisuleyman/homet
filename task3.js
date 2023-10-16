
var eded = parseInt(prompt("eded daxil et"));
var quvvet = parseInt(prompt("quvveti daxil et"));

var netice = 1;

for (var i = 0; i < quvvet; i++) {
  netice *= eded;
}
console.log( netice);
