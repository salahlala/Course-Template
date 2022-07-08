let mainHeader = document.querySelector("header"),
  learnSeciton = document.querySelector(".learn-section"),
  landing = document.querySelector(".landing"),
  btn = document.querySelector(".btnUp");
(window.onscroll = () => {
  window.scrollY >= 300
    ? mainHeader.classList.add("chn")
    : mainHeader.classList.remove("chn"),
    calcScroll();
}),
  (window.onload = function () {
    calcScroll(), checkDark();
  });

let mainspan = document.querySelector("header .container .list"),
  links = document.querySelector(".container .links");
function convertButton() {
  mainspan.children[0].classList.toggle("active"),
    mainspan.children[1].classList.toggle("del"),
    mainspan.children[2].classList.toggle("active"),
    links.classList.toggle("open"),
    document.querySelector("body").classList.toggle("hidden");
}
mainspan.onclick = convertButton;
let allLi = document.querySelectorAll(".switcher li"),
  allBoxex = document.querySelectorAll(".portfolio .gallery .boxex"),
  activeLi = document.querySelectorAll(".switcher li"),
  webCount = document.querySelectorAll(".gallery .web"),
  graphicCount = document.querySelectorAll(".gallery .gaph"),
  progCount = document.querySelectorAll(".gallery .programming");
function removeClasses() {
  allLi.forEach((e) => {
    e.classList.remove("active"), this.classList.add("active");
  });
}
function showElement() {
  allBoxex.forEach((e) => {
    e.classList.add("hid"), e.classList.remove("show");
  }),
    document.querySelectorAll(this.dataset.cat).forEach((e) => {
      e.classList.remove("hid"), e.classList.add("show");
    });
}
function calcScroll() {
  let e = document.querySelector(".btnUp"),
    t = document.documentElement.scrollTop,
    o =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    l = Math.round((100 * t) / o);
  e.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  }),
    t > 100 ? e.classList.add("active") : e.classList.remove("active"),
    (e.style.background = `conic-gradient(var(--second-color) ${l}%, #d7d7d7 ${l}%)`);
}
allLi.forEach((e) => {
  e.addEventListener("click", removeClasses),
    e.addEventListener("click", showElement);
});
let liNote = document.querySelectorAll(".week-data ul li"),
  boxNote = document.querySelectorAll(".content-course .box");
function getData() {
  liNote.forEach((e) => {
    e.classList.remove("active"),
      this.classList.add("active"),
      boxNote.forEach((e) => {
        e.classList.remove("active");
      });
    for (let e = 0; e < boxNote.length; e++)
      boxNote[e].dataset.index == this.dataset.index &&
        boxNote[e].classList.add("active");
  });
}
function checkDark() {
  // "true" == window.localStorage.getItem("dark-theme")
  //   ? document.body.classList.add("dark-mode")
  //   : document.body.classList.remove("dark-mode");
  if (window.localStorage.getItem("dark-theme") == "true") {
    document.body.classList.add("dark-mode");
    lightIcon.className = "fa-solid fa-sun";
  } else {
    document.body.classList.remove("dark-mode");
    lightIcon.className = "fa-solid fa-moon";
  }
}
liNote.forEach((e) => {
  e.addEventListener("click", getData);
});
let lightIcon = document.querySelector(".dark-icon i");
lightIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"),
    document.body.classList.contains("dark-mode")
      ? (lightIcon.className = "fa-solid fa-sun")
      : (lightIcon.className = "fa-solid fa-moon"),
    window.localStorage.setItem(
      "dark-theme",
      document.body.classList.contains("dark-mode")
    );
});
