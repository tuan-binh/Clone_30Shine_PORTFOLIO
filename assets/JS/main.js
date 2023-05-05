// console.log(btnOutTK);

// nameUser.forEach(function (e) {
//   e.innerHTML = `<i class="fa-solid fa-crown"></i> ${
//     user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1)
//   }`;
// });

let nameUsers = JSON.parse(localStorage.getItem("listUser"));

let listHair1 = localStorage.getItem("listHair2");
let dataHair;
if (listHair1) {
  dataHair = JSON.parse(listHair1);
} else {
  dataHair = [
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

console.log(dataHair);

console.log(nameUsers);
let nameUser = document.querySelectorAll(".login");
nameUser.forEach(function (e) {
  for (let i = 0; i < nameUsers.length; i++) {
    if (nameUsers[i].status === true) {
      e.innerHTML = `<i class="fa-solid fa-crown"></i> ${
        nameUsers[i].name.charAt(0).toUpperCase() +
        nameUsers[i].name.slice(1).toLowerCase()
      }`;
    }
  }
});
let btnOutTK = document.getElementById("out");
btnOutTK.onclick = function () {
  for (let i = 0; i < nameUsers.length; i++) {
    nameUsers[i].status = false;
  }

  for (let j = 0; j < dataHair.length; j++) {
    dataHair[j].like = "";
  }

  localStorage.setItem("listHair2", JSON.stringify(dataHair));
  localStorage.setItem("listUser", JSON.stringify(nameUsers));
};
