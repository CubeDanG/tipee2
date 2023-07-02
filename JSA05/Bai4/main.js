let form = document.getElementById("form");
let input = document.getElementById("task"); // lấy nội dung ng dùng nhậpp trong thẻ input
let button = document.getElementById("submitBtn");
let todo = document.getElementById("todo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = input.value;
  if (!task) return alert("No value!❌");
});
