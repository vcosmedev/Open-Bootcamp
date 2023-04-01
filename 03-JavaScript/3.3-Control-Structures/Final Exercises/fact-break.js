let n = 10;
let i = n - 1;

while (n) {
  n *= i;
  i--;
  if (i <= 1) break;
}
console.log(n); // EO: 33628800
