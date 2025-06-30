const images = [
  { title: "Forest Path", file: "labs/degree-show-catalogue.jpg" },
  { title: "Ocean View", file: "labs/book-closeup.jpg" },
  { title: "Mountain Sky", file: "labs/book-far.jpg" },
  { title: "Desert Light", file: "moonbun/moonbun-logo-black-square.jpg" },
{ title: "Desert Light", file: "moonbun/moonbun-logo-black-square.jpg" }
];

const galleryInner = document.getElementById('galleryInner');

images.forEach(img => {
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.innerHTML = `
    <img src="${img.file}" alt="${img.title}">
    <div class="title">${img.title}</div>
  `;
  galleryInner.appendChild(div);
});

// Optional drag scroll
const container = document.getElementById('gallery');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

galleryInner.addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG') return;

  const overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.cursor = 'pointer';
  overlay.style.zIndex = 1000;

  const largeImg = document.createElement('img');
  largeImg.src = e.target.src;
  largeImg.alt = e.target.alt || '';
  largeImg.style.maxWidth = '90%';
  largeImg.style.maxHeight = '90%';
  largeImg.style.borderRadius = '8px';
  largeImg.style.cursor = 'auto';

  overlay.appendChild(largeImg);
  document.body.appendChild(overlay);

  // Trigger CSS transition by adding visible class on next frame
  requestAnimationFrame(() => {
    overlay.classList.add('visible');
  });

  overlay.addEventListener('click', () => {
    // Start fade-out by removing visible class
    overlay.classList.remove('visible');

    // Wait for transition to finish before removing from DOM
    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    }, { once: true });
  });
});
