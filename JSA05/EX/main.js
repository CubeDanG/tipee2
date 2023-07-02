let menu = ["rau xào", "thịt luộc", "gà rán"];

localStorage.setItem("list", JSON.stringify(menu));

let x = prompt("Nhập ký tự");

if (x == "C") {
  let newC = prompt("Mời nhập món muốn thêm");
  let tmp = JSON.parse(localStorage.list);
  tmp.push(newC);
  localStorage.setItem("list", JSON.stringify(tmp));
} else if (x == "R") {
  let tmp = JSON.parse(localStorage.list);
  alert("Danh sách món ăn mới nhất là", tmp);
} else if (x == "U") {
  let newU = prompt("Mời nhập món muốn sửa");
  let tmp = JSON.parse(localStorage.list);
  let index = tmp.indexOf(newU);
  let update = prompt("Mời nhập tên mới");
  tmp[index] = update;
  localStorage.setItem("list", JSON.stringify(tmp));
} else {
  let newU = prompt("Mời nhập món muốn thêm");
  let tmp = JSON.parse(localStorage.list);
  let index = tmp.indexOf(newU);
  tmp.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(tmp));
}
