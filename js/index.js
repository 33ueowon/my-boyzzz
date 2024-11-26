function showLogo(logoId) {
    // 모든 로고 이미지를 숨김
    const logos = document.querySelectorAll('.logo-img');
    logos.forEach(logo => logo.style.display = 'none');

    // 클릭한 로고만 표시
    const selectedLogo = document.getElementById(logoId);
    if (selectedLogo) {
        selectedLogo.style.display = 'block';
    }
}