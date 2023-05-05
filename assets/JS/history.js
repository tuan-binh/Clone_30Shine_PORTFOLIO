let dataOrder = JSON.parse(localStorage.getItem("listUser"));
let order;
for (let i = 0; i < dataOrder.length; i++) {
  if (dataOrder[i].status === true) {
    order = dataOrder[i].order;
  }
}
console.log(order);

let tbody = document.querySelector(".table tbody");

renderHistory();

function renderHistory() {
  let html = order.map((e, i) => {
    return e.status === false
      ? `<tr id="${i}">
          <th scope="row">${i + 1}</th>
          <td>${e.name}</td>
          <td>${e.phone}</td>
          <td>${e.city}</td>
          <td>${e.service}</td>
          <td>Ngày: ${e.date} Giờ: ${e.time}</td>
          <td>
            <button type="button" class="btn btn-success update">Sửa</button>
            <button type="button" class="btn btn-danger delete">Hủy Kèo</button>
          </td>
          <td></td>
        </tr>`
      : `<tr id="${i}">
          <th scope="row">${i + 1}</th>
          <td>${e.name}</td>
          <td>${e.phone}</td>
          <td>${e.city}</td>
          <td>${e.service}</td>
          <td>Ngày: ${e.date} Giờ: ${e.time}</td>
          <td></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>`;
  });
  tbody.innerHTML = html.join("");
}

tbody.addEventListener("click", handleClick);

function handleClick(e) {
  let id = e.target.parentElement.parentElement.id;
  // hủy kèo xóa mục đặt hàng
  if (e.target.classList.contains("delete")) {
    let result = confirm("Bạn có chắc chắn muốn hủy kèo không");
    if (result) {
      order.splice(id, 1);
    }
    renderHistory();
  }
  if (e.target.classList.contains("update")) {
    let tr = e.target.parentElement.parentElement;
    console.log(tr);
    tr.innerHTML = `<tr>
                      <th scope="row"></th>
                      <td>${order[id].name}</td>
                      <td>${order[id].phone}</td>
                      <td>${order[id].city}</td>
                      <td>
                        <select>
                          <option selected>Choose your services...</option>
                          <option value="Cắt Gội Massage">Cắt Gội Massage</option>
                          <option value="Uốn Nhập Khẩu">Uốn Nhập Khẩu</option>
                          <option value="Nhuộm Nhập Khẩu ý">Nhuộm Nhập Khẩu ý</option>
                        </select>
                      </td>
                      <td>
                      Ngày: <input type="date" value="${order[id].date}"/> Giờ: 
                      <select>
                        <option value="8h - 10h" selected>8h - 10h</option>
                        <option value="10h - 12h">10h - 12h</option>
                        <option value="12h - 14h">12h - 14h</option>
                        <option value="14h - 16h">14h - 16h</option>
                        <option value="16h - 18h">16h - 18h</option>
                        <option value="18h - 20h">18h - 20h</option>
                        <option value="20h - 22h">20h - 22h</option>
                        <option value="22h - 24h">22h - 24h</option>
                      </select>
                      </td>
                      <td>
                        <button type="button" class="btn btn-success confirm">Xác Nhận</button>
                        <button type="button" class="btn btn-danger cancel">Hủy</button>
                      </td>
                      <td></td>
                    </tr>`;
  }
  if (e.target.classList.contains("confirm")) {
    let valueService =
      e.target.parentElement.parentElement.children[4].children[0];
    let valueDate =
      e.target.parentElement.parentElement.children[5].children[0];
    let valueTime =
      e.target.parentElement.parentElement.children[5].children[1];
    if (valueService.value === "Choose your services...") {
      alert("Bạn chưa lựa chọn");
    } else {
      let isCheck = false;
      for (let i = 0; i < order.length; i++) {
        if (valueDate.value === order[i].date) {
          if (valueTime.value === order[i].time) {
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
        order[id].service = valueService.value;
        order[id].date = valueDate.value;
        order[id].time = valueTime.value;
        alert('Bạn đã thay đổi thành công');
        renderHistory();
      } else {
        alert("Giờ này bạn đã đặt rồi");
      }
    }
  }

  if (e.target.classList.contains("cancel")) {
    renderHistory();
  }
  localStorage.setItem("listUser", JSON.stringify(dataOrder));
}


