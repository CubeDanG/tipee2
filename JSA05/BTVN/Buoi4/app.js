localStorage.setItem("name", "A");
localStorage.setItem("age", "15");
localStorage.setItem("gender", "Nam");

localStorage.getItem("gender");
localStorage.age = "20";

localStorage.removeItem("name");

localStorage.clear();

console.log(localStorage.getItem("gender"));
console.log("SetTimeout");

// setTimeout chỉ chạy 1 lần
setTimeout(function () {
  console.log("Hello");
}, 1000);

console.log("SetInterval");

let Arr = [1, 2, 3];
let i = 0;
Arr[2] = 3;
console.log(Arr[i]);

// setInterval chạy mãi mãi -> cần có điều kiện dừng cho hàm setInterval
let x = setInterval(function () {
  console.log(Arr[i]);
  i++;
  if (i >= Arr.length) clearInterval(x);
}, 3000);
