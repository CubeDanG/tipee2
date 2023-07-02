// Bài 1: tính giai thừa của 1 số

//  N = 5;
// giai thừa của 5 = 5*4*3*2*1
// giai thừa của 1 số bằng tích các số nguyên dương bắt đầu từ 1 đến n
let giaiThua = 1;

function tinhGiaiThua(n) {
  for (let i = 1; i <= n; i++) {
    giaiThua = giaiThua * i;
    // Sau mỗi vòng for giá trị của giaiThua lại nhân thêm với i
    // với vòng for đầu tiên i = 1 thì giaiThua = 1*1 = 1
    // với vòng for thứ 2 i = 2 thì giaiThua = giaiThua * 2 = 1 * 2 = 2
    // với vòng for thứ 3 i = 3 thì giaiThua = giaiThua * 3 = 2*3 = 6
    // với vòng for thứ 4 i = 4 thì giaiThua = giaiThua * 4 = 6*4 = 24
    // với vòng for thứ 5 i = 5 thì giaiThua = giaiThua * 5 = 6*5 = 120
  }
  return giaiThua;
}
console.log(tinhGiaiThua(5)); // đáp án ra 120

// Bài 2 vẽ tam giác cân

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) row += " ";
  for (let j = 1; j <= 2 * i - 1; j++) row += "1";
  console.log(row);
}

// Bài 3 có 3 cách làm như sau:

// Cách 1
document.getElementById("btnLogin").addEventListener("click", () => {
  let username = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;
  if (username == "username" && password == "123456")
    alert("Đăng nhập thành công");
  else alert("Đăng nhập không thành công");
});

// Cách 2
// Đối với cách này cần có phương thức onclick="handleClick()" tại button "Login" bên HTML
function handleClick() {
  let username = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;
  if (username == "username" && password == "123456")
    alert("Đăng nhập thành công");
  else alert("Đăng nhập không thành công");
}

// Cách 3
// Đối với cách 3 bắt buộc dùng thẻ form bọc bên ngoài, để bắt sự kiện "submit"
document.getElementById("form").addEventListener("submit", () => {
  let username = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;
  if (username == "username" && password == "123456")
    alert("Đăng nhập thành công");
  else alert("Đăng nhập không thành công");
});
