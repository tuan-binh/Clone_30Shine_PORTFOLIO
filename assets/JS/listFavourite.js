let datalist = JSON.parse(localStorage.getItem("listUser"));
let dataH = JSON.parse(localStorage.getItem("listHair2"));
let listItem;
for (let i = 0; i < datalist.length; i++) {
  if (datalist[i].status === true) {
    listItem = datalist[i].likeHair;
  }
}
console.log(listItem);
let listElement = document.querySelector(".list-favorite");

renderFavorite();

function renderFavorite() {
  if (listItem.length) {
    let html = listItem.map((e) => {
      return `<div class="item" id="${e.id}">
                <img src=${e.src} alt="">
                <div class="close">
                  <i class="fa-regular fa-circle-xmark"></i>
                </div>
              </div>`;
    });
    listElement.innerHTML = html.join("");
  } else {
    listElement.innerHTML = "<h3>Your Favorite empty</h3>";
  }
}

listElement.addEventListener("click", handleDisLike);

function handleDisLike(e) {
  // console.log(e.target);
  if (e.target.classList.contains("close")) {
    let id = +e.target.parentElement.id;
    for (let i = 0; i < listItem.length; i++) {
      if (id === listItem[i].id) {
        listItem.splice(i, 1);
      }
    }
    for (let i = 0; i < dataH.length; i++) {
      if (id === dataH[i].id) {
        dataH[i].like = "";
      }
    }
  }
  renderFavorite();
  localStorage.setItem("listHair2", JSON.stringify(dataH));
  localStorage.setItem("listUser", JSON.stringify(datalist));
}
