document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let loadedImages = 0;
    const MIN_IMAGES_TO_SHOW = Math.min(3, images.length);  // Display page after 3 images are loaded

    images.forEach(img => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === MIN_IMAGES_TO_SHOW) {
                // Display the page once the first few images are loaded
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('photography-page').style.display = 'block';
            }
        };

        img.onerror = () => {
            console.error('Failed to load image:', img.src);
        };
    });

    // Fallback in case some images take too long
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('photography-page').style.display = 'block';
    }, 5000);  // Force load after 5 seconds
});