window.addEventListener('load', function() {
    var audio = document.getElementById('backgroundMusic');
    setTimeout(function() {
        audio.play();
    }, 800000); // 30초 (30000 밀리초) 후에 재생
});