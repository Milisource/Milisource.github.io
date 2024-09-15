function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", function() {
    if (isMobileDevice()) {
        document.getElementById('mobile-notification').style.display = 'block';
    }
});