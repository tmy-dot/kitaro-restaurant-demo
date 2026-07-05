// ======================================================
// 草鍋 喜多呂 Demo Site
// script.js
// ======================================================

// ローディング画面
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (loading) {
    setTimeout(() => {
      loading.classList.add("is-hidden");
    }, 700);
  }
});

// スクロール時にヘッダー背景を変更
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

// ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");

if (hamburger && drawer) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    drawer.classList.toggle("is-open");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// スクロールアニメーション
const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeItems.forEach((item) => observer.observe(item));

// ギャラリー画像の拡大表示
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll("[data-lightbox]").forEach((item) => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    const src = item.dataset.lightbox;

    lightboxImage.src = src;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

console.log("草鍋 喜多呂 Demo Site Loaded");