// Bài 1
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) row += " ";
  for (let j = 1; j <= 2 * i - 1; j++) row += "1";
  console.log(row);
}

// Bài 2 -> lọc số chẵn trong mảng
let myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
// myArr[0] = 9

for (let index = 0; index < myArr.length; index++) {
  if (myArr[index] % 2 == 0 && myArr[index] != 0) console.log(myArr[index]);
}

// Bài 3
let myAns = [];
let x = prompt("Em đã ăn cơm chưa ?");
myAns.push(x);
if (x == "Yes") {
  let y = prompt("Em có muốn ăn bánh ngọt không?");
  myAns.push(y);
}
if (x == "No") {
  let y = prompt("Em có muốn ăn cái khác không?");
  myAns.push(y);
}
console.log(myAns);
