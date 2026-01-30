let r = 4; 

for (let i = 1; i <= r; i++) {
  let str = "";

  for (let s = 1; s <= r - i; s++) {
    str += " ";
  }

  for (let j = 1; j <= (2 * i - 1); j++) {
    str += "*";
  }

  console.log(str);
}
