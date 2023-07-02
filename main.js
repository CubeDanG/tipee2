function scrollToElement2() {
  var element = document.getElementById("text2");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToElement3() {
  var element = document.getElementById("text3");
  element.scrollIntoView({ behavior: "smooth" });
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  console.log(1)
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function checkVoucher() {
  console.log("check")
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let listUser = JSON.parse(localStorage.getItem("users"));
  let currentUserIndex = listUser.findIndex(
    (item) => item.username == currentUser.username
  );
  listUser[currentUserIndex].voucher = true;
  localStorage.setItem('users', JSON.stringify(listUser));
}
  

let voucherBtn = document.getElementById("voucherBtn");
voucherBtn.addEventListener('click', checkVoucher);