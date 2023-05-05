let data = localStorage.getItem("listHair2");
let dataU = JSON.parse(localStorage.getItem("listUser"));
let likeHair;
for (let i = 0; i < dataU.length; i++) {
  if (dataU[i].status === true) {
    likeHair = dataU[i].likeHair;
  }
}
console.log(likeHair);
let listHair;
if (data) {
  listHair = JSON.parse(data);
} else {
  listHair = [
    { id: 1, src: "/assets/img/hairStyle/boy-1.jpg", row: 1, like: "" },
    { id: 2, src: "/assets/img/hairStyle/boy-2.jpg", row: 1, like: "" },
    { id: 3, src: "/assets/img/hairStyle/boy-3.jpg", row: 1, like: "" },
    { id: 4, src: "/assets/img/hairStyle/boy-4.png", row: 2, like: "" },
    { id: 5, src: "/assets/img/hairStyle/boy-5.jpg", row: 2, like: "" },
    { id: 6, src: "/assets/img/hairStyle/boy-6.jpg", row: 2, like: "" },
    { id: 7, src: "/assets/img/hairStyle/item-7.png", row: 3, like: "" },
    { id: 8, src: "/assets/img/hairStyle/item-8.jpg", row: 3, like: "" },
    { id: 9, src: "/assets/img/hairStyle/item-9.png", row: 3, like: "" },
    { id: 10, src: "/assets/img/hairStyle/item-10.jpg", row: 4, like: "" },
    { id: 11, src: "/assets/img/hairStyle/item-11.jpg", row: 4, like: "" },
    { id: 12, src: "/assets/img/hairStyle/item-12.jpg", row: 4, like: "" },
    { id: 13, src: "/assets/img/hairStyle/item-13.jpg", row: 5, like: "" },
    { id: 14, src: "/assets/img/hairStyle/ronaldo.jpg", row: 5, like: "" },
    { id: 15, src: "/assets/img/hairStyle/messi.jpg", row: 5, like: "" },
  ];
}

for (let i = 0; i < dataU.length; i++) {
  // kiểm tra tài khoản nào đăng nhập vào
  if (dataU[i].status === true) {
    // lặp qua list ảnh yêu thích của khánh hàng
    for (let j = 0; j < dataU[i].likeHair.length; j++) {
      // lặp qua danh sách ảnh
      for (let z = 0; z < listHair.length; z++) {
        if (dataU[i].likeHair[j].id === listHair[z].id) {
          listHair[z].like = "active";
        }
      }
    }
    break;
  }
}

console.log(listHair);

let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let row3 = document.querySelector(".row3");
let row4 = document.querySelector(".row4");
let row5 = document.querySelector(".row5");

let list = document.querySelector(".list-hair");

render();

function render() {
  // column 1
  let column1 = listHair.filter((e) => {
    return e.row === 1;
  });
  let html1 = column1.map((e) => {
    return `<div class="item" id="${e.id}">
              <img src=${e.src} alt="">
              <i class="fa-solid fa-heart ${e.like}"></i>
            </div>`;
  });
  row1.innerHTML = html1.join("");
  // column 2
  let column2 = listHair.filter((e) => {
    return e.row === 2;
  });
  let html2 = column2.map((e) => {
    return `<div class="item" id="${e.id}">
              <img src=${e.src} alt="">
              <i class="fa-solid fa-heart ${e.like}"></i>
            </div>`;
  });
  row2.innerHTML = html2.join("");
  // column 3
  let column3 = listHair.filter((e) => {
    return e.row === 3;
  });
  let html3 = column3.map((e) => {
    return `<div class="item" id="${e.id}">
              <img src=${e.src} alt="">
              <i class="fa-solid fa-heart ${e.like}"></i>
            </div>`;
  });
  row3.innerHTML = html3.join("");
  // column 4
  let column4 = listHair.filter((e) => {
    return e.row === 4;
  });
  let html4 = column4.map((e) => {
    return `<div class="item" id="${e.id}">
              <img src=${e.src} alt="">
              <i class="fa-solid fa-heart ${e.like}"></i>
            </div>`;
  });
  row4.innerHTML = html4.join("");
  // column 5
  let column5 = listHair.filter((e) => {
    return e.row === 5;
  });
  let html5 = column5.map((e) => {
    return `<div class="item" id="${e.id}">
              <img src=${e.src} alt="">
              <i class="fa-solid fa-heart ${e.like}"></i>
            </div>`;
  });
  row5.innerHTML = html5.join("");
}

list.addEventListener("click", function (e) {
  let icon = document.querySelectorAll(".list-hair img");
  let id = +e.target.parentElement.id;
  console.log(id);
  for (let i = 0; i < listHair.length; i++) {
    if (id === listHair[i].id && listHair[i].like === "") {
      listHair[i].like = "active";
      // push vào list yêu thích
      likeHair.push(listHair[i]);
      console.log(likeHair);
    } else if (id === listHair[i].id && listHair[i].like !== "") {
      listHair[i].like = "";
      // xóa ở mục yêu thích
      for (let j = 0; j < likeHair.length; j++) {
        if (likeHair[j].id === id) {
          likeHair.splice(j, 1);
        }
      }
      console.log(likeHair);
    }
  }
  render();

  localStorage.setItem("listUser", JSON.stringify(dataU));
  localStorage.setItem("listHair2", JSON.stringify(listHair));
});
