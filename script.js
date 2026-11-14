
/* =========================
   1. CÀI ĐẶT CHUNG
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    min-height: 100%;
}

body {
    min-height: 100vh;

    background-image: url("https://24hstore.vn/upload_images/images/hinh-nen-trai-tim/hinh-anh-trai-tim-doc-dao_(2).jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: Arial, sans-serif;
    color: white;

    overflow-x: hidden;
}

/* XÓA CÁC LỚP PHỦ MÀU ĐỎ */

body::before,
body::after {
    content: none !important;
    display: none !important;
}

/* =========================
   2. TIÊU ĐỀ VÀ NÚT
========================= */

h1 {
    margin-bottom: 25px;
    text-shadow: 2px 2px 5px black;
}

button {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;

    background: #ff4081;
    color: white;

    font-size: 18px;
    cursor: pointer;
}

/* =========================
   3. TRÁI TIM BAY
========================= */

.heart {
    position: fixed;
    bottom: -50px;

    pointer-events: none;
    z-index: 10;

    animation: flyUp linear forwards;
}

@keyframes flyUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}

/* =========================
   4. PHONG BÌ
========================= */

.envelope {
    position: relative;

    width: 440px;
    height: 290px;

    margin-top: 30px;

    background: transparent;
    border: none;
    padding: 0;

    cursor: pointer;
    perspective: 1000px;

    overflow: visible;
    isolation: isolate;
}

.hidden {
    display: none;
}

/* =========================
   5. MẶT SAU
========================= */

.envelope-back {
    position: absolute;
    inset: 0;

    background: #ffb6c9;
    border-radius: 12px;

    z-index: 1;
}

/* =========================
   6. LÁ THƯ
========================= */

.letter {
    position: absolute;

    width: calc(100% - 20px);
    height: calc(100% - 20px);

    left: 10px;
    bottom: 10px;

    background: white;
    border-radius: 8px;

    color: #e75480;
    text-align: center;

    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2;

    transform: translateY(0);
    transition: transform 1.2s ease 0.3s;
}

.letter h2 {
    font-size: 24px;
    margin-bottom: 15px;
}

.letter p {
    font-size: 17px;
}

/* =========================
   7. MẶT TRƯỚC
========================= */

.envelope-pocket {
    position: absolute;
    inset: 0;

    z-index: 3;
    pointer-events: none;
}

.envelope-front {
    position: absolute;
    inset: 0;

    background: #ff8fab;
    border-radius: 12px;

    clip-path: polygon(
        0 35%,
        50% 75%,
        100% 35%,
        100% 100%,
        0 100%
    );
}

/* =========================
   8. NẮP PHONG BÌ
========================= */

.envelope-flap {
    position: absolute;
    inset: 0;

    background: #ffc2d1;

    clip-path: polygon(
        0 0,
        100% 0,
        50% 58%
    );

    transform-origin: top center;
    transform: rotateX(0deg);

    transition: transform 0.9s ease;

    z-index: 4;
    backface-visibility: visible;
}

/* =========================
   9. TRÁI TIM TRÊN PHONG BÌ
========================= */

.heart-seal {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    font-size: 48px;

    z-index: 5;
    transition: opacity 0.4s ease;
}

/* =========================
   10. HIỆU ỨNG MỞ PHONG BÌ
========================= */

.envelope.open .envelope-flap {
    transform: rotateX(180deg);
    z-index: 1;
}

.envelope.open .letter {
    transform: translateY(-260px);
    z-index: 4;
}

.envelope.open .heart-seal {
    opacity: 0;
}

/* =========================
   11. RESPONSIVE
========================= */

@media (max-width: 500px) {
    .envelope {
        transform: scale(0.8);
        margin-top: 15px;
    }
}
