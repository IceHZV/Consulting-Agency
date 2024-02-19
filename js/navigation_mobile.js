const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav_btn");
const navBtnImg = document.querySelector("#nav_btn_img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/logo/navkrest.png";
  } else {
    navBtnImg.src = "img/logo/nav1.png";
  }
};
