// slider.js

let currentIndex = 0; // 현재 이미지 인덱스
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;

// 다음 버튼 클릭 시
document.querySelector('.next-btn').addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % totalItems; // 마지막 이미지에서 다시 첫 번째로
   updateSlider();
});

// 이전 버튼 클릭 시
document.querySelector('.prev-btn').addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + totalItems) % totalItems; // 첫 번째 이미지에서 마지막으로
   updateSlider();
});

// 슬라이더 업데이트 함수
function updateSlider() {
   const offset = -currentIndex * 100; // 각 이미지의 너비가 100%이므로 인덱스에 따라 이동
   sliderWrapper.style.transform = `translateX(${offset}%)`;
}