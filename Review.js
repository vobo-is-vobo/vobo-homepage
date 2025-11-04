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

// 產生內容
function renderReviews() {
  reviewContainer.innerHTML = "";
  [...reviews, ...reviews].forEach((review) => {
    const div = document.createElement("div");
    div.classList.add("review-item");
    div.innerHTML = `
      <a href="${review.link}" target="_blank">
        <div class="image-container">
          <img src="${review.img}" alt="${review.title}">
        </div>
        <div class="review-info">
          <h3>${review.title}</h3>
          <p>${review.review}</p>
          <div class="rating">
            ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)} 
            <span>${review.rating}/5</span>
          </div>
        </div>
      </a>
    `;
    reviewContainer.appendChild(div);
  });
}
renderReviews();

// ========== 手機／平板：手指滑動 ==========
let startX = 0;
reviewContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
});
reviewContainer.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].pageX - startX;
  reviewContainer.scrollLeft -= moveX * 0.8;
  startX = e.touches[0].pageX;
});
