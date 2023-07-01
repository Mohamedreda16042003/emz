let navScroll = document.querySelector(".home");
const listNav = document.querySelector(".list_nav");
const btnMenu = document.querySelector(".menu");
const linkes = document.querySelectorAll(".link_nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    navScroll.classList.add("on_nav-active");
  } else if (window.scrollY < 60) {
    navScroll.classList.remove("on_nav-active");
  }
});

linkes.forEach((ele) => {
  ele.addEventListener("click", () => {
    listNav.classList.remove("activer_menu-nav");
  });
});

btnMenu.addEventListener("click", () => {
  listNav.classList.toggle("activer_menu-nav");
});

// active_link

const linkNav = document.querySelectorAll(".link_nav");

linkNav.forEach((ele) => {
  ele.addEventListener("click", () => {
    linkNav.forEach((e) => {
      e.classList.remove("active_link");
    });
    ele.classList.add("active_link");
  });
});
