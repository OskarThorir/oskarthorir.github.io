document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let loadedImages = 0;
    const MIN_IMAGES_TO_SHOW = Math.min(3, images.length); 

    images.forEach(img => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === MIN_IMAGES_TO_SHOW) {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('photography-page').style.display = 'block';
            }
        };

        // Add click event to open the lightbox
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });

    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('photography-page').style.display = 'block';
    }, 5000);
});

// Function to open lightbox
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.9)';  // Light grey background
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = 1000;

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    img.style.borderRadius = '10px';

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}