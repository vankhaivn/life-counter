document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("heart");
    var container = document.querySelector(".container");
    setTimeout(function () {
        canvas.classList.add("fade-out");
        container.classList.add("show");
    }, 3000)
})

document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body')
    let heart = document.createElement('heart')
    let x = e.offsetX
    let y = e.offsetY
    heart.style.left = x + 'px'
    heart.style.top = y + 'px'
    body.appendChild(heart)
    setTimeout(function () {
        heart.remove()
    }, 1000)
})

document.getElementById('switchLink').addEventListener('click', function() {
    window.location.href = '/v2';
});