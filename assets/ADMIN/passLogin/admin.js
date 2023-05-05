const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const allItem = $$(".item");
const allPage = $$(".page__item");

let btnMenu = $(".menu");
let nav = $("nav");
// console.log(nav);
let pageBlock = $(".pages__block");

allItem.forEach((e, i) => {
  let page = allPage[i];
  e.onclick = () => {
    let active = $(".item.active");
    let action = $(".page__item.action");
    active.classList.remove("active");
    action.classList.remove("action");

    e.classList.add("active");
    page.classList.add("action");

    let navActive = $('nav.open');
    if(navActive) {
      navActive.classList.remove('open')
    }
  };
});

let dataN = localStorage.getItem("newFeed");
let listNews;
if (dataN) {
  listNews = JSON.parse(dataN);
} else {
  listNews = [
    {
      srcYT: "https://www.youtube.com/watch?v=m23tHreFffA",
      srcIMG: "/assets/img/admin/30shine-lot-xac-thanh-hot-boy.jpg",
      title: "BẠN SINH VIÊN IT LỘT XÁC THÀNH HOT BOY VẠN NGƯỜI MÊ",
      desc: `Ai nghĩ sinh viên IT là người xuề xoà, không quá quan tâm đến ngoại hình thì xem ngay màn lột xác mái tóc, thay đổi ngoại hình cực ấn tượng`,
    },
    {
      srcYT: "https://www.youtube.com/watch?v=S2bVJbLCUQk",
      srcIMG: "/assets/img/admin/30shine-nam-sinh-kien-truc-lot-xac.jpg",
      title: `PHÚC LỘT XÁC MÁI TÓC ĐỂ SUỐT BAO NĂM GIÚP NGOẠI HÌNH MỚI CỰC CUỐN HÚT`,
      desc: `Thay đổi kiểu tóc đã để suốt bao năm là một quyết định vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và tạo một kiểu tóc mới hoàn`,
    },
    {
      srcYT: "https://www.youtube.com/watch?v=MccG8Gf6Oc4",
      srcIMG: "/assets/img/admin/30shine-toc-mullet.jpg",
      title:
        'Nam Sinh Kiến Trúc "Lột Xác" Nhờ Từ Bỏ Mái Tóc Nuôi Dài Từ Năm 14 Tuổi',
      desc: "Anh bạn sinh viên Kiến Trúc đắn đo rất nhiều về việc cắt bỏ mái tóc dài của mình nuôi 14 năm",
    },
    {
      srcYT: "https://www.youtube.com/watch?v=XBwFe2REmIw",
      srcIMG:
        "/assets/img/admin/30shine-mat-tron-nhu-mam-vi-de-sai-kieu-toc.jpg",
      title: "Mặt Tròn Như Mâm Vì Để Sai Kiểu Tóc Và Cái Kết",
      desc: "Nam sinh đại học QGHN đã có màn lột xác cực kì ấn tượng với crush trường đại học kiến trúc",
    },
  ];
}

let newFeed = $(".newFeed");

function renderNews() {
  let html = listNews.map((e, i) => {
    return `<div id="${i}" class="new__item">
              <a href=${e.srcYT}>
                <div class="block_img">
                  <img src=${e.srcIMG} alt="">
                </div>
                <div class="new__item--info">
                  <h4>${e.title}</h4>
                  <p>${e.desc}</p>
                </div>
              </a>
              <i class="fa-solid fa-xmark delete"></i>
            </div>`;
  });
  newFeed.innerHTML = html.join("");
}
renderNews();

newFeed.addEventListener("click", handleRemove);

function handleRemove(e) {
  let id = e.target.parentElement.id;
  if (e.target.classList.contains("delete")) {
    listNews.splice(id, 1);
  }
  renderNews();
  localStorage.setItem("newFeed", JSON.stringify(listNews));
}

let formAddNews = $(".addNew");

formAddNews.addEventListener("submit", handleSubmit);

let inputFile = $('input[type="file"]');
let image = $(".block__img--news img");
let srcIMG;
function handleSubmit(e) {
  e.preventDefault();
  let newItem = {
    srcYT: formAddNews.youtube.value,
    srcIMG: srcIMG,
    title: formAddNews.title.value,
    desc: formAddNews.desc.value,
  };
  listNews.push(newItem);
  renderNews();
  formAddNews.youtube.value = "";
  formAddNews.title.value = "";
  formAddNews.desc.value = "";
  localStorage.setItem("newFeed", JSON.stringify(listNews));
}

inputFile.onchange = function (e) {
  if (e.target.files.length) {
    const src = new FileReader();
    src.onload = function (e) {
      image.src = e.target.result;
      srcIMG = e.target.result;
    };
    src.readAsDataURL(inputFile.files[0]);
  }
};

/**
 * ========== JS page two
 */

let listCus = $(".page__item .listCus");
let dataOrderCus = JSON.parse(localStorage.getItem("listUser"));
console.log(dataOrderCus);

function renderOrderCus() {
  let html = dataOrderCus.map((e, i) => {
    return `<li class="customer">
              <h4>${i + 1}: ${e.name} - Tel: <span>${e.tel}</span></h4>
              <table class="table dataCustomer">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ĐỊA ĐIỂM</th>
                    <th scope="col">DỊNH VỤ</th>
                    <th scope="col">THỜI GIAN</th>
                    <th scope="col">ACTION</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>
                <tbody id="${i}" >${renderOrder(e.order)}</tbody>
              </table>
            </li>`;
  });
  listCus.innerHTML = html.join("");
}
renderOrderCus();

function renderOrder(arr) {
  let htmlArr = arr.map((e, i) => {
    return e.status === false
      ? `<tr id="${i}">
          <th scope="row">${i + 1}</th>
          <td>${e.city}</td>
          <td>${e.service}</td>
          <td>Ngày: ${e.date} Giờ: ${e.time}</td>
          <td>
            <button type="button" class="btn btn-success done">Done Kèo</button>
          </td>
          <td></td>
        </tr>`
      : `<tr id="${i}">
          <th scope="row">${i + 1}</th>
          <td>${e.city}</td>
          <td>${e.service}</td>
          <td>Ngày: ${e.date} Giờ: ${e.time}</td>
          <td></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>`;
  });
  return htmlArr.join("");
}

listCus.addEventListener("click", handleClickCus);

function handleClickCus(e) {
  let idTable = e.target.parentElement.parentElement.parentElement.id;
  let idTr = e.target.parentElement.parentElement.id;

  if (e.target.classList.contains("done")) {
    dataOrderCus[idTable].order[idTr].status = true;
  }
  renderOrderCus();
  localStorage.setItem("listUser", JSON.stringify(dataOrderCus));
}

// handle search customers

let inputSearch = $(".searchCus");

inputSearch.onkeyup = function () {
  let filter = inputSearch.value;

  let allCus = $$(".customer");
  allCus.forEach((e) => {
    let text = e.children[0].children[0].innerText;
    text.indexOf(filter) > -1
      ? (e.style.display = "")
      : (e.style.display = "none");
  });
};

/**
 * ========= JS page three
 */

let hair;
let dataHair = localStorage.getItem("listHair2");
if (dataHair) {
  hair = JSON.parse(dataHair);
} else {
  hair = [
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

let column1 = $(".column1");
let column2 = $(".column2");
let column3 = $(".column3");
let column4 = $(".column4");
let column5 = $(".column5");

function renderIMGadmin() {
  let filColumn1 = hair.filter((e) => {
    return e.row === 1;
  });
  let html1 = filColumn1.map((e) => {
    return `<div class="img_item" id="${e.id}">
              <img src=${e.src} alt="">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>`;
  });
  column1.innerHTML = html1.join("");
  let filColumn2 = hair.filter((e) => {
    return e.row === 2;
  });
  let html2 = filColumn2.map((e) => {
    return `<div class="img_item" id="${e.id}">
              <img src=${e.src} alt="">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>`;
  });
  column2.innerHTML = html2.join("");
  let filColumn3 = hair.filter((e) => {
    return e.row === 3;
  });
  let html3 = filColumn3.map((e) => {
    return `<div class="img_item" id="${e.id}">
              <img src=${e.src} alt="">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>`;
  });
  column3.innerHTML = html3.join("");
  let filColumn4 = hair.filter((e) => {
    return e.row === 4;
  });
  let html4 = filColumn4.map((e) => {
    return `<div class="img_item" id="${e.id}">
              <img src=${e.src} alt="">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>`;
  });
  column4.innerHTML = html4.join("");
  let filColumn5 = hair.filter((e) => {
    return e.row === 5;
  });
  let html5 = filColumn5.map((e) => {
    return `<div class="img_item" id="${e.id}">
              <img src=${e.src} alt="">
              <div class="close">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            </div>`;
  });
  column5.innerHTML = html5.join("");
}
renderIMGadmin();

/**
 * JS upload image
 */

let showIMG = $(".block__img--show img");
let fileIMG = $('.upload-hair input[type="file"]');
let formAddImg = $(".upload-hair");

let newSrc;

formAddImg.onsubmit = function (e) {
  e.preventDefault();

  if (
    newSrc === undefined ||
    +formAddImg.column.value > 5 ||
    +formAddImg.column.value < 0
  ) {
    alert("Bạn chưa điền đầy đủ thông tin");
  } else if (+formAddImg.column.value <= 5 && +formAddImg.column.value > 0) {
    let newID = hair.length + 1;
    let newIMG = {
      id: newID,
      src: newSrc,
      row: +formAddImg.column.value,
      like: "",
    };
    hair.push(newIMG);
    renderIMGadmin();
    localStorage.setItem("listHair2", JSON.stringify(hair));
    formAddImg.column.value = "";
  } else {
    alert("Không có cột đấy");
  }
};

fileIMG.onchange = function (e) {
  if (e.target.files.length) {
    const source = new FileReader();
    source.onload = function (e) {
      showIMG.src = e.target.result;
      newSrc = e.target.result;
    };
    source.readAsDataURL(fileIMG.files[0]);
  }
};

let listImgAdmin = $(".block__list--img");
listImgAdmin.addEventListener("click", handleClickRemoveImg);

function handleClickRemoveImg(e) {
  if (e.target.classList.contains("close")) {
    let id = +e.target.parentElement.id;
    for (let i = 0; i < hair.length; i++) {
      if (id === hair[i].id) {
        hair.splice(i, 1);
      }
    }
  }
  if (e.target.classList.contains("fa-circle-xmark")) {
    let id = +e.target.parentElement.parentElement.id;
    for (let i = 0; i < hair.length; i++) {
      if (id === hair[i].id) {
        hair.splice(i, 1);
      }
    }
  }
  renderIMGadmin();
  localStorage.setItem("listHair2", JSON.stringify(hair));
}

// modal menu mobile



btnMenu.onclick = function () {
  nav.classList.toggle("open");
};

/**
 * ========== page four JS
 */

let tbodyManager = $(".managerUser tbody");

function renderUser() {
  let html = dataOrderCus.map((e, i) => {
    return `<tr id="${i}">
              <th scope="row">${i + 1}</th>
              <td>${e.name}</td>
              <td>${e.tel}</td>
              <td>${e.pass}</td>
              <td>
                <button type="button" class="btn btn-danger delete">Xóa</button>
              </td>
            </tr>`;
  });
  tbodyManager.innerHTML = html.join("");
}
renderUser();

tbodyManager.addEventListener("click", handleRemoveUser);
function handleRemoveUser(e) {
  let index = e.target.parentElement.parentElement.id;
  if (e.target.classList.contains("delete")) {
    let result = confirm("Bạn có chắc chắn muốn xóa người này không");
    if (result) {
      dataOrderCus.splice(index, 1);
    }
  }
  renderUser();
  localStorage.setItem("listUser", JSON.stringify(dataOrderCus));
}
