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
// ...........................................

const commentBtn = document.getElementById("comment_btn");
const nameComment = document.getElementById("name_area");
const textComment = document.getElementById("comment_area");
const apComment = document.getElementById("all_comment");
const seeMore = document.getElementById("see_more");

// commentBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   //   post();
//   setTimeout(() => {
//     window.location.reload();
//   }, 1500);
// });

// function post() {
//     axios
//         .post("http://localhost:1337/api/comments", {
//             data: {
//                 Name: nameComment.value,
//                 Comment: textComment.value,
//             },
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// async function getComment() {
//     const res = await axios.get("http://localhost:1337/api/comments");

//     addToComment(res.data.data);
// }

//^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-

import { data } from "./data.js";

//^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-^-

let numComment = 5;

seeMore.addEventListener("click", () => {
  numComment += 5;
  addToComment(data);
});

addToComment(data);

function addToComment(arr) {
  let comment = "";
  for (let i = 0; i < numComment; i++) {
    comment += `
        <div class="comment_card">
            <div class="div_img">
                <img src="./img/user-removebg-preview.png" alt="">
                <h4>${arr[i].name}</h4>
            </div>
            <div>
                <p>${arr[i].comment}</p>
            </div>
        </div>
        `;
  }

  apComment.innerHTML = comment;
}

// getComment();
