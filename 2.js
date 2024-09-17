let likeCount = 0;
let dislikeCount = 0;

function likeWebsite() {
    likeCount++
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
console.log("Current Like Count: " + likeCount);

