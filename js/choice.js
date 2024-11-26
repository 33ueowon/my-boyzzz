// 모든 메뉴 항목을 가져옴
const menuItems = document.querySelectorAll('.menu-item');

// 각 메뉴 항목에 클릭 이벤트 추가
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // 클릭된 항목을 제외한 다른 모든 항목에 불투명도 적용
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.5'; // 불투명하게 설정
            } else {
                otherItem.style.opacity = '1'; // 클릭된 항목은 원래대로 유지
            }
        });
    });
});