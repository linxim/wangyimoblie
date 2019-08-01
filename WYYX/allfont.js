
function init() {
    var width = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = width / 10 + 'px';
}
init();
window.addEventListener('resize', init);
window.addEventListener('orientationchange', init);
