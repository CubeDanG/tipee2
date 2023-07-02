var basket = [
  ["Grape", 15],
  ["Banana", 12],
];

// Grape 15
// Banana 12

// Grape 15 -> index tương ứng: 00 01
// -> basket[0][0] = "Grape"
// -> basket[0][1] = 15
// -> basket[1][0] = "Banana"
// Banana 12 -> index tương ứng: 10 11

array = [1, 2, 3];
// -> index tương ứng trong mảng: 0 1 2
// index của mảng luôn bắt đầu từ 0
// array[0] = 1
// array[2] = 3

// Phương thức .length -> trả về độ dài của mảng
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

var array1 = [
  ["Grape", 15],
  ["Banana", 12],
  ["apple", 10],
];

console.log(array1.length);
console.log(array1[2][0]);
// -> array1[i][j]

for (let i = 0; i < array1.length; i++) {
  // console.log(i, array1[i]);

  // array1[i].length = 2
  for (let j = 0; j < array1[i].length; j += 2) {
    console.log("I have ", array1[i][j + 1], array1[i][j]);
    // -> array1[0][0], array1[0][1]
    // -> array1[1][0], array1[1][1]
    // -> array1[2][0], array1[2][1]
  }
}

let x = 0;
let y = 0;
while (x < array1.length) {
  y = 0;
  while (y < array1[x].length) {
    console.log("I have ", array1[x][y + 1], array1[x][y]);
    y += 2;
  }
  x += 1;
}

// Bài tập 3

let myDog = {
  name: "Ngáo",
  legs: 4,
  friends: "A",
};

// -> thay đổi giá trị của thuộc tính
myDog.name = "Husky";

// -> thêm 1 thuộc tính
myDog.color = "Black";

// Xoá đi 1 thuộc tính
delete myDog.friends;

console.log(myDog);
