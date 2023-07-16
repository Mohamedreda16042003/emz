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

commentBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    post();
});

function post() {
    axios
        .post("http://localhost:1337/api/comments", {
            data: {
                Name: nameComment.value,
                Comment: textComment.value,
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
    const res = await axios.get("http://localhost:1337/api/comments");

    addToComment(res.data.data);
}

function addToComment(arr) {
    let comment = "";
    for (let i = 0; i < arr.length; i++) {
        comment += `
        <div class="comment_card">
            <div class="div_img"><img src="./img/user-removebg-preview.png" alt=""></div>
            <div>
                <h4>${arr[i].attributes.Name}</h4>
                <p>${arr[i].attributes.Comment}</p>
            </div>
        </div>
        `;
    }
    console.log(textComment);
    apComment.innerHTML = comment;
}

getComment();
