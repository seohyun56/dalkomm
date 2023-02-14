// a
const as = document.querySelectorAll("a");
// nav
const nav = document.querySelector("nav");
const lastMenu = document.querySelector(".gnb > li:last-child");
const gnbHover = document.querySelector("nav .gnbHover");

// a 새로고침 방지
as.forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
  })
})

// nav scroll
addEventListener("scroll", () => {
  if (scrollY > 0) {
    nav.classList.add("on");
  } else {
    nav.classList.remove("on");
  }
})

// nav 마지막 메뉴에 마우스를 올렸을 때 하단 div opacity 조절
lastMenu.addEventListener("mouseover", () => {
  gnbHover.style.opacity = 0;
});
lastMenu.addEventListener("mouseout", () => {
  gnbHover.style.opacity = 1;
});

// swiper 
const mainSwiper = new Swiper('.mySwiper', {
    parallax: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',//패이지내이션 역할의 요소와 연결
    },
    autoplay: {
      delay: 2000,
    }
  });