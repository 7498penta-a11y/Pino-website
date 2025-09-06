// script.js

// ページ読み込み後にカードを順番にフェードインさせる
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  
  cards.forEach((card, i) => {
    // 最初は少し下にずらして透明にしておく
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";

    // 時間差でフェードイン・スライドアップ
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 200); // i*200msで順番に表示
  });
});
