document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let loadedImages = 0;

    images.forEach(img => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('photography-page').style.display = 'block';
            }
        };
        img.onerror = () => {
            console.error('Failed to load image:', img.src);
        };
    });
});