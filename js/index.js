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

// ................................................

const commentBtn = document.getElementById("btn_comm");
const nameComment = document.getElementById("input_name");
const textComment = document.getElementById("textarea_comment");
const apComment = document.getElementById("all_comment");
const seeMore = document.getElementById("see_more");

let res;

commentBtn.addEventListener("click", (e) => {
  post();
  nameComment.value = "";
  textComment.value = "";
  setTimeout(() => {
    location.reload();
  }, 1500);
});

function post() {
  axios
    .post("https://emz-strapi.onrender.com/api/reviews", {
      data: {
        name: nameComment.value,
        comment: textComment.value,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function getComment() {
  res = await axios.get("https://emz-strapi.onrender.com/api/reviews");

  addToComment(res.data.data);
}

function addToComment(arr) {
  let comment = "";
  for (let i = 0; i < arr.length; i++) {
    comment += `
        <div class="comment_card">
            <div class="div_img">
                <img src="./img/user-removebg-preview.png" alt="">
                <h4>${arr[i].attributes.name}</h4>
            </div>
            <div>
                <p>${arr[i].attributes.comment}</p>
            </div>
        </div>
        `;
  }

  apComment.innerHTML = comment;
}

getComment();
