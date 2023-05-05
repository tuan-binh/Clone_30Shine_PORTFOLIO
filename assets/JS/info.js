let allTabs = document.querySelectorAll(".tab__item");
let allPages = document.querySelectorAll(".page__item");
console.log(allTabs);

let out = document.querySelector(".out");

allTabs.forEach(function (e, i) {
  let page = allPages[i];
  e.onclick = function () {
    let active = document.querySelector(".tab__item.active");
    active.classList.remove("active");
    let action = document.querySelector(".page__item.action");
    if (active) {
      action.classList.remove("action");
    }

    e.classList.add("active");
    page.classList.add("action");
  };
});

let dataUS = JSON.parse(localStorage.getItem("listUser"));
console.log(dataUS);
let dataU;
for (let i = 0; i < dataUS.length; i++) {
  if (dataUS[i].status === true) {
    dataU = dataUS[i];
  }
}
console.log(dataU.name);
function renderInformation() {
  let oldName = document.querySelectorAll(".oldName");
  let oldPhone = document.querySelector(".oldPhone");
  let oldPS = document.querySelector(".oldPS");
  // console.log(oldName);
  // console.log(oldPhone);
  // console.log(oldPS);
  for (let i = 0; i < oldName.length; i++) {
    oldName[i].value = dataU.name;
  }

  oldPhone.value = dataU.tel;
  oldPS.value = dataU.pass;
}

renderInformation();

let formNewTel = document.querySelector(".newTel");
let formNewName = document.querySelector(".newName");
let formNewPass = document.querySelector(".newPass");

// formNewTel.onsubmit = function (e) {
//   // e.preventDefault();
//   let valueNewTel = formNewTel.tel.value;
//   dataU.tel = valueNewTel;
//   localStorage.setItem("listUser", JSON.stringify(dataUS));
//   renderInformation();
// };

formNewName.onsubmit = function (e) {
  let valueNewName = formNewName.name.value;
  dataU.name = valueNewName;
  localStorage.setItem("listUser", JSON.stringify(dataUS));
  renderInformation();
};

formNewPass.onsubmit = function (e) {
  let valueNewPass = formNewPass.Pass.value;
  dataU.pass = valueNewPass;
  localStorage.setItem("listUser", JSON.stringify(dataUS));
  renderInformation();
};
