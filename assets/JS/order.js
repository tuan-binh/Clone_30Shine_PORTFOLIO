let time = document.querySelector('.choose-your-time input[type="date"]');
let timingNow = new Date();

console.log(time);

let day = timingNow.getDate();
let month = timingNow.getMonth() + 1;
let year = timingNow.getFullYear();
// let d = ["CN", "T.Hai", "T.Ba", "T.Tư", "T.Năm", "T.Sáu", "T.Bảy"];

if (day < 10) {
  day = "0" + day;
} else {
  day = "" + day;
}
if (month < 10) {
  month = "0" + month;
} else {
  month = "" + month;
}
year = "" + year;

// console.log(day, month, year);

time.value = `${year}-${month}-${day}`;

// handle click

let city = document.querySelectorAll(".choose-city button");
let valueCity;
city.forEach(function (e) {
  e.onclick = function () {
    let active = document.querySelector(".choose-city .btn.active");
    if (active) {
      active.classList.remove("active");
    }
    e.classList.add("active");
    valueCity = e.innerText;
  };
});

let service = document.querySelectorAll(".choose-service button");
let valueService;
service.forEach(function (e) {
  e.onclick = function () {
    let active = document.querySelector(".choose-service .btn.active");
    if (active) {
      active.classList.remove("active");
    }
    e.classList.add("active");
    valueService = e.innerText;
  };
});

let timeOrder = document.querySelectorAll(".choose-your-time button");
console.log(timeOrder);
let valueTime;
timeOrder.forEach(function (e) {
  e.onclick = function () {
    let active = document.querySelector(".choose-your-time .btn.active");
    if (active) {
      active.classList.remove("active");
    }
    e.classList.add("active");
    valueTime = e.innerText;
  };
});

let dateTime = document.querySelector("input[type='date']");

// save localStorage order hair;
let phone = document.querySelector(".order .tel");
let storageOrder = JSON.parse(localStorage.getItem("listUser"));
let listOrder;
let nameUs;
let phoneUser;
for (let i = 0; i < storageOrder.length; i++) {
  if (storageOrder[i].status === true) {
    listOrder = storageOrder[i].order;
    phone.innerText = storageOrder[i].tel;
    nameUs = storageOrder[i].name;
    phoneUser = storageOrder[i].tel;
  }
}

// console.log(nameUs);
// console.log(phoneUser);

console.log(listOrder);

let buttonDone = document.querySelector(".actionDone .done");
// console.log(user1);

buttonDone.onclick = function () {
  // console.log(valueCity);
  // console.log(valueService);
  // console.log(valueTime);
  if (
    valueCity === undefined ||
    valueService === undefined ||
    valueTime === undefined
  ) {
    alert("Bạn chưa chọn đầy đủ thông tin");
  } else {
    if (listOrder.length > 0) {
      let isCheck = false;
      for (let i = 0; i < listOrder.length; i++) {
        if (dateTime.value === listOrder[i].date) {
          if(valueTime === listOrder[i].time) {
            isCheck = false;
            break;
          } else {
            isCheck = true;
          }
        } else {
          isCheck = true;
        }
      }
      if (isCheck) {
        let itemOrder = {
          name: nameUs,
          phone: phoneUser,
          city: valueCity,
          service: valueService,
          date: dateTime.value,
          time: valueTime,
          status: false,
        };
        listOrder.push(itemOrder);
        console.log(listOrder);
        let active = document.querySelectorAll(".btn.active");
        active.forEach((e) => {
          e.classList.remove("active");
        });
        Toastify({
          text: "Bạn đã đặt lịch thành công",
          gravity: "top", // `top` or `bottom`
          position: "left",
          duration: 3000,
        }).showToast();
        localStorage.setItem("listUser", JSON.stringify(storageOrder));
      } else {
        alert("Giờ này bạn đã đặt lịch rồi");
      }
    } else {
      let itemOrder = {
        name: nameUs,
        phone: phoneUser,
        city: valueCity,
        service: valueService,
        date: dateTime.value,
        time: valueTime,
        status: false,
      };
      listOrder.push(itemOrder);
      console.log(listOrder);
      let active = document.querySelectorAll(".btn.active");
      active.forEach((e) => {
        e.classList.remove("active");
      });
      Toastify({
        text: "Bạn đã đặt lịch thành công",
        gravity: "top", // `top` or `bottom`
        position: "left",
        duration: 3000,
      }).showToast();
      localStorage.setItem("listUser", JSON.stringify(storageOrder));
    }
  }
};
