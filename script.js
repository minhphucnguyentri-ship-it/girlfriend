
/* =========================
   1. HIỆN PHONG BÌ
========================= */

function showEnvelope() {
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openButton");

    // Ẩn nút bấm
    button.style.display = "none";

    // Hiện phong bì
    envelope.classList.remove("hidden");
}

/* =========================
   2. MỞ / ĐÓNG PHONG BÌ
========================= */

function toggleEnvelope() {
    const envelope = document.getElementById("envelope");

    // Chuyển đổi trạng thái mở và đóng
    envelope.classList.toggle("open");
}

/* =========================
   3. TẠO TRÁI TIM BAY
========================= */

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤️";

    // Vị trí xuất hiện ngẫu nhiên
    heart.style.left = Math.random() * 100 + "vw";

    // Kích thước ngẫu nhiên
    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    // Tốc độ bay ngẫu nhiên
    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    // Xóa trái tim sau khi bay xong
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

/* =========================
   4. TẠO TRÁI TIM LIÊN TỤC
========================= */

// Cứ 0,5 giây tạo một trái tim
setInterval(createHeart, 500);
