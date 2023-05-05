let form = document.querySelector("form");

// regular expression số điện thoại việt nam
let regPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
let regName = /^[a-zA-Z\-]+$/;

let dataUS = localStorage.getItem("listUser");
let listUser;
if (dataUS) {
  listUser = JSON.parse(dataUS);
} else {
  listUser = [];
}

console.log(listUser.length);

// preventDefault form

form.onsubmit = function (e) {
  if (listUser.length > 0) {
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].tel === form.telePhone.value) {
        e.preventDefault();
        alert("Tài khoản này đã được đăng ký");
        break;
      } else if (
        form.telePhone.value === "" ||
        form.username.value === "" ||
        form.password.value === "" ||
        form.pass2.value === ""
      ) {
        e.preventDefault();
        alert("Bạn chưa nhập đầy đủ thông tin");
        break;
      } else if (
        regName.test(form.username.value) &&
        tPass(form.password.value) &&
        regPhone.test(form.telePhone.value) &&
        form.password.value === form.pass2.value
      ) {
        let newUser = {
          name: form.username.value,
          tel: form.telePhone.value,
          pass: form.password.value,
          status: false,
          order: [],
          likeHair: [],
        };
        listUser.push(newUser);
        form.setAttribute("action", "../../index.html");
        localStorage.setItem("listUser", JSON.stringify(listUser));
        break;
      }
    }
  } else {
    if (
      form.telePhone.value === "" ||
      form.username.value === "" ||
      form.password.value === "" ||
      form.pass2.value === ""
    ) {
      e.preventDefault();
      alert("Bạn chưa nhập đầy đủ thông tin");
    } else if (
      regName.test(form.username.value) &&
      tPass(form.password.value) &&
      regPhone.test(form.telePhone.value) &&
      form.password.value === form.pass2.value
    ) {
      let newUser = {
        name: form.username.value,
        tel: form.telePhone.value,
        pass: form.password.value,
        status: false,
        order: [],
        likeHair: [],
      };
      listUser.push(newUser);
      form.setAttribute("action", "../../index.html");
      localStorage.setItem("listUser", JSON.stringify(listUser));
    }
  }
};

function tPass(str) {
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " " || newArr.length < 8) {
      return false;
    }
  }
  return true;
}
