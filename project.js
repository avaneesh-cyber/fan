const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

// Helper function to toggle menu visibility
function toggleMenu(show) {
  if (show) {
    menu.classList.add("visible");
    open.setAttribute("aria-expanded", "true");
  } else {
    menu.classList.remove("visible");
    open.setAttribute("aria-expanded", "false");
  }
}

// Close menu on click of close button
close.addEventListener("click", () => {
  toggleMenu(false);
});

// Open menu on click of open button
open.addEventListener("click", () => {
  toggleMenu(true);
});
let likeCount = 0;
let dislikeCount = 0;

function likeWebsite() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
    showMessage("Thanks for liking the website!");
}

function dislikeWebsite() {
    dislikeCount++;
    document.getElementById('dislike-count').innerText = dislikeCount;
    showMessage("Sorry to hear that! We'll try to improve.");
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

