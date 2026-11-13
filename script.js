function hello() {
    alert("Xin chào! ❤️");
}
function showEnvelope() {
    const envelope = document.getElementById("envelope");
    envelope.classList.remove("hidden");
}
function toggleEnvelope() {
    const envelope = document.getElementById("envelope");
    envelope.classList.toggle("open");
}
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);
