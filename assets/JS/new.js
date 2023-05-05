let dataNews = localStorage.getItem("newFeed");
let listNews;
if (dataNews) {
  listNews = JSON.parse(dataNews);
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

let newsHTML = document.querySelector(".flex-news");

function renderNews() {
  let html = listNews.map((e) => {
    return `<div class="item-news">
              <a href=${e.srcYT}>
                <div class="over-img">
                  <img src=${e.srcIMG} alt="">
                </div>
                <div class="info-news">
                  <p><strong>${e.title}</strong></p>
                  <p class="desc line-clamp" style="--line-clamp : 2">${e.desc}</p>
                </div>
              </a>
            </div>`;
  });
  newsHTML.innerHTML = html.join("");
}
renderNews();
