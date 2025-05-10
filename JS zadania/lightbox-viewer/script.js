const galleryItem = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector('.lightbox');

const lightboxImage = document.getElementById('lightbox-image');

 const closeBtn = document.getElementById('close-btn');

function replaceThumbnail(item) {
   lightboxImage.src = item.src.replace('-thumbnail', '');
      lightbox.style.display = 'flex';
}

 galleryItem.forEach(item => {
   item.addEventListener("click", () => replaceThumbnail(item)) });

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

lightbox.addEventListener('click', (e) => {
    if (e.target == lightbox) {
      lightbox.style.display = 'none';
    }
  });
