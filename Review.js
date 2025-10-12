const reviewContainer = document.getElementById("review-container");

// 評價資料
const reviews = [
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B02.JPG?raw=true", title: "鯊克鞋", review: "在溪邊拍攝也不怕，鞋子完全沒滲水，超實用！", rating: 5, link: "https://www.gtselect.com/products/shark-shoes2" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B04.PNG?raw=true", title: "雲朵水波鞋", review: "鞋底很有彈性，很輕盈，到外縣市輕旅行必穿。", rating: 5, link: "https://www.gtselect.com/products/cloudshoes" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B01.jpg?raw=true", title: "鯊克鞋", review: "走一整天都不會累，真的比我之前穿過的鞋子都舒服。", rating: 5 , link: "https://www.gtselect.com/products/shark-shoes2" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B05.PNG?raw=true", title: "凌豹鞋", review: "實際穿了兩週，穿著去海邊踏浪也不擔心，Y2K銀色好好看。", rating: 5 , link: "https://www.gtselect.com/products/lepoard" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B06.jpg?raw=true", title: "鯊克鞋", review: "第一次買這個牌子，原本擔心白色不耐髒，沒想到用清水就能洗乾淨", rating: 5 , link: "https://www.gtselect.com/products/shark-shoes2" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B07.jpg?raw=true", title: "鯊克鞋", review: "設計簡單大方，不管搭牛仔褲還是運動褲都很好看。", rating: 5 , link: "https://www.gtselect.com/products/shark-shoes" },
  { img: "https://github.com/vobo-is-vobo/vobo-homepage/blob/main/B03.JPG?raw=true", title: "鯊克鞋", review: "防水功能很棒，同時又能透氣，值得回購！", rating: 5 , link: "https://www.gtselect.com/products/shark-shoes2" }
];

// 這裡新增一個評價資料循環
let reviewsLoop = [...reviews, ...reviews];  // 複製一次評價資料，實現循環效果

// 動態生成卡片
function renderReviews() {
  reviewContainer.innerHTML = ""; // 清空舊內容
  reviewsLoop.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
      <a href="${review.link}" target="_blank"> <!-- 使用 href 來跳轉 -->
        <div class="image-container">
          <img src="${review.img}" alt="${review.title}">
        </div>
        <div class="review-info">
          <h3>${review.title}</h3>
          <p>${review.review}</p>
          <div class="rating">
            ${[...Array(5)].map((_, i) => 
              i < review.rating ? '<span class="filled">★</span>' : '<span class="empty">☆</span>'
            ).join('')}
            <span>${review.rating}/5</span>
          </div>
        </div>
      </a>
    `;
    reviewContainer.appendChild(reviewItem);
  });
}

renderReviews();

// 自動滾動
let scrollSpeed = 0.5; // 減慢滾動速度，讓手機顯示更加流暢
let scrollInterval;

function startScroll() {
  scrollInterval = setInterval(() => {
    reviewContainer.scrollLeft += scrollSpeed;

    // 當滾動到最後一張時，平滑地將滾動位置移動到開頭
    if (reviewContainer.scrollLeft + reviewContainer.clientWidth >= reviewContainer.scrollWidth - 2) {
      reviewContainer.style.transition = "none"; // 關閉動畫避免閃爍
      reviewContainer.scrollLeft = 0;  // 滾動到最左邊
      setTimeout(() => {
        reviewContainer.style.transition = "scroll-left 0.5s ease"; // 恢復動畫效果
      }, 100);  // 等待一點時間再重新開啟過渡效果
    }
  }, 30);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

startScroll();

// 滑鼠懸停暫停
reviewContainer.addEventListener("mouseenter", stopScroll);
reviewContainer.addEventListener("mouseleave", startScroll);

// 根據螢幕尺寸調整滾動速度和樣式
window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        scrollSpeed = 0.3; // 在較小螢幕上減慢滾動速度，讓滾動更加流暢
    } else {
        scrollSpeed = 0.5; // 在較大螢幕上使用稍快的滾動速度
    }
});
