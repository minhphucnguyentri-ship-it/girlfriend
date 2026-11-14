
/* =========================
   1. BIẾN ĐIỀU KHIỂN
========================= */

let isAnimating = false;

/* =========================
   2. HIỆN PHONG BÌ
========================= */

function showEnvelope() {
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openButton");

    button.style.display = "none";
    envelope.classList.remove("hidden");
}

/* =========================
   3. MỞ / ĐÓNG PHONG BÌ
========================= */

function toggleEnvelope() {
    const envelope = document.getElementById("envelope");

    // Không cho bấm khi hiệu ứng đang chạy
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    // ĐANG MỞ → ĐÓNG
    if (envelope.classList.contains("open")) {

        // Đưa thư vào trong
        envelope.classList.remove("letter-out");

        // Chờ 2 giây rồi đóng nắp
        setTimeout(() => {

            envelope.classList.remove("open");

            // Chờ nắp đóng xong
            setTimeout(() => {
                isAnimating = false;
            }, 900);

        }, 2000);

    }

    // ĐANG ĐÓNG → MỞ
    else {

        // Mở nắp
        envelope.classList.add("open");

        // Chờ 1 giây rồi kéo thư ra
        setTimeout(() => {

            envelope.classList.add("letter-out");

            // Chờ thư trượt xong
            setTimeout(() => {
                isAnimating = false;
            }, 1200);

        }, 1000);
    }
}

/* =========================
   4. TẠO TRÁI TIM BAY
========================= */

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤️";

    // Vị trí ngẫu nhiên
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
   5. TẠO TRÁI TIM LIÊN TỤC
========================= */

setInterval(createHeart, 500);
