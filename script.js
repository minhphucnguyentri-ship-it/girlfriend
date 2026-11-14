
let isAnimating = false;

/* =========================
   1. HIỆN PHONG BÌ
========================= */

function showEnvelope() {
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openButton");

    button.style.display = "none";
    envelope.classList.remove("hidden");
}

/* =========================
   2. MỞ / ĐÓNG PHONG BÌ
========================= */

function toggleEnvelope() {
    const envelope = document.getElementById("envelope");

    if (isAnimating) return;

    isAnimating = true;

    // ĐANG MỞ → ĐÓNG
    if (envelope.classList.contains("open")) {

        // Đưa thư vào trong
        envelope.classList.remove("letter-out");

        // Chờ 2 giây rồi đóng nắp
        setTimeout(() => {
            envelope.classList.remove("open");

            setTimeout(() => {
                isAnimating = false;
            }, 900);

        }, 2000);
    }

    // ĐANG ĐÓNG → MỞ
    else {

        // Mở nắp trước
        envelope.classList.add("open");

        // Chờ 1 giây rồi kéo thư ra
        setTimeout(() => {
            envelope.classList.add("letter-out");

            setTimeout(() => {
                isAnimating = false;
            }, 1200);

        }, 1000);
    }
}

/* =========================
   3. TẠO TRÁI TIM BAY
========================= */

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤️";

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

/* =========================
   4. TẠO TRÁI TIM LIÊN TỤC
========================= */

setInterval(createHeart, 500);
