// let array = [1, 2, 3, 4, 5];
// // 0 1 2 3 4

// for (let i in array) {
//   console.log(i);
//   // i là từng index trong mảng
//   // -> kết quả : 0 1 2 3 4
//   // để in ra các giá trị của mảng cần in theo cú pháp ten_Mang[index]
//   console.log(array[i])
// }

// console.log("-----------");

// for (let i of array) {
//   console.log(i);
//   // i là từng phần tử trong mảng
//   // -> kết quả: 1 2 3 4 5
// }

let products = {
  data: [
    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
      price: "35",
      image:
        "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },

    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
      price: "34",
      image:
        "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
      price: "35",
      image:
        "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ BLACK",
      price: "22",
      image:
        "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg",
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
      price: "38",
      image:
        "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg",
    },

    {
      productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
      price: "42",
      image:
        "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg",
    },

    {
      productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
      price: "37",
      image:
        "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg",
    },

    {
      productName: "LEVENTS® EARTH TEE/ PURPLE",
      price: "36",
      image:
        "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg",
    },

    {
      productName: "LEVENTS® PLAY LOGO TEE/ PINK",
      price: "29",
      image:
        "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg",
    },
  ],
};

// let x = prompt("Bạn ăn cơm chưa");
// -> x sẽ lưu giá trị ng dùng nhập

for (let i of products.data) {
  // Mỗi i là 1 obj trong mảng
  // i = {
  //   productName: "LEVENTS® PLAY LOGO TEE/ PINK",
  //   price: "29",
  //   image:
  //     "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg",
  // },

  let card = document.createElement("div");
  // tạo ra 1 thẻ
  // Element : open tag - value - close tag : <div>xin chào</div>
  card.classList.add("card");
  // classList.add -> thêm 1 class
  // classList.remove -> xoá 1 class

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  // <img src= i.image/>
  // Thêm thuộc tính src cho thẻ ảnh để hiển thị được ảnh

  imgContainer.appendChild(image);
  // appendChild: thêm 1 thẻ img vào thẻ div
  card.appendChild(imgContainer);

  let name = document.createElement("p");
  name.innerText = i.productName.toUpperCase();

  card.appendChild(name);

  let price = document.createElement("p");
  price.innerText = "$" + i.price.toUpperCase();

  card.appendChild(price);

  document.getElementById("products").appendChild(card);
}

// addEventListener -> lắng nghe và xử lý các sự kiện "click" -> sự kiện nhấn chuột vào đúng đối tượng
document.getElementById("search-btn").addEventListener("click", () => {
  // .value -> lấy giá trị người dùng nhập
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  // querySelectorAll -> lấy ra tất cả nội dung của các thẻ có class = "card"
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);
  console.log(cards);

  // forEach: item -> giá trị của từng phần tử trong mảng
  // forEach: index: thứ tự trong mảng
  cards.forEach((item, index) => {
    if (item.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else cards[index].classList.add("hide");
  });
});
