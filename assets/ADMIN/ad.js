let formAD = document.querySelector("form");
console.log(formAD);
let tk = "admin@gmail.com";
let mk = "Abcd@2023";

formAD.onsubmit = function (e) {
  if (formAD.tk.value === tk && formAD.pass.value === mk) {
    formAD.setAttribute("action", "./admin.html");
  } else if (form.tk.value !== tk || form.pass.value !== mk) {
    e.preventDefault();
    alert("Bạn đã Nhập mật khẩu hoặc tài khoản sai");
  } else if (formAD.tk.value === "" || formAD.pass.value === "") {
    e.preventDefault();
    alert("Xin mời bạn nhập vào tài khoản");
  } else {
    e.preventDefault();
  }
};
