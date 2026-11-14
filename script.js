
/* =========================
   1. HIỆN PHONG BÌ
========================= */

function showEnvelope() {
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openButton");

    // Ẩn nút
    button.style.display = "none";

    // Hiện phong bì
    envelope.classList.remove("hidden");
}

/* =========================
   2. MỞ / ĐÓNG PHONG BÌ
========================= */

function toggleEnvelope() {
    const envelope = document.getElementById("envelope");

    envelope.classList.toggle("open");
}

/* =========================
   3. TẠO TRÁI TIM BAY
========================= */

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

/* Tạo trái tim mỗi 0,5 giây */

setInterval(createHeart, 500);
