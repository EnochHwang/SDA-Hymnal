const totalPages = 10;
let currentPage = 1;
const scoreImg = document.getElementById('score');
const cacheProgress = document.getElementById('cache-progress');

// Load the first page when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);
});


function showPage(num, direction = 'left') {
  if (num < 1 || num > totalPages || num === currentPage) return;

  const oldImg = scoreImg.cloneNode();
  oldImg.src = `scores/${String(currentPage).padStart(4, '0')}.png`;
  oldImg.style.zIndex = 1;
  document.getElementById('score-container').appendChild(oldImg);

  currentPage = num;
  const padded = String(currentPage).padStart(4, '0');
  scoreImg.style.opacity = 0;
  scoreImg.style.transform = `translateX(${direction === 'left' ? '100%' : '-100%'})`;
  scoreImg.src = `scores/${padded}.png`;

  requestAnimationFrame(() => {
    scoreImg.style.transition = 'none';
    scoreImg.style.transform = `translateX(${direction === 'left' ? '-100%' : '100%'})`;
    scoreImg.offsetHeight;
    scoreImg.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    scoreImg.style.transform = 'translateX(0)';
    scoreImg.style.opacity = 1;
    oldImg.style.transform = `translateX(${direction === 'left' ? '-100%' : '100%'})`;
    oldImg.style.opacity = 0;
    setTimeout(() => oldImg.remove(), 400);
  });
}

function nextPage() {
  showPage(currentPage + 1, 'left');
}

function prevPage() {
  showPage(currentPage - 1, 'right');
}

let startX  = 0;
let currentX = 0;
let isDragging = false;

scoreImg.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
  scoreImg.style.transition = 'none';
});

scoreImg.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  scoreImg.style.transform = `translateX(${deltaX}px)`;
});

scoreImg.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  isDragging = false;

  const deltaX = currentX - startX;
  const threshold = 50; // Minimum distance to count as swipe

  scoreImg.style.transition = 'transform 0.3s ease';

  if (deltaX > threshold) {
    // Swipe right → show previous page
    scoreImg.style.transform = 'translateX(100%)';
    setTimeout(() => {
      prevPage();
      scoreImg.style.transform = 'translateX(-100%)';
      requestAnimationFrame(() => {
        scoreImg.style.transition = 'transform 0.3s ease';
        scoreImg.style.transform = 'translateX(0)';
      });
    }, 100);
  } else if (deltaX < -threshold) {
    // Swipe left → show next page
    scoreImg.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      nextPage();
      scoreImg.style.transform = 'translateX(100%)';
      requestAnimationFrame(() => {
        scoreImg.style.transition = 'transform 0.3s ease';
        scoreImg.style.transform = 'translateX(0)';
      });
    }, 100);
  } else {
    // Not enough movement — snap back
    scoreImg.style.transform = 'translateX(0)';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});

async function backgroundCacheScores() {
  const cache = await caches.open('piano-book-v2');
  let cachedCount = 0;
  for (let i = 1; i <= totalPages; i++) {
    const padded = String(i).padStart(4, '0');
    const url = `scores/${padded}.png`;
    try {
      const match = await cache.match(url);
      if (!match) {
        const response = await fetch(url);
        await cache.put(url, response.clone());
        console.log(`Cached: ${url}`);
      } else {
        console.log(`Already cached: ${url}`);
      }
      cachedCount++;
    } catch (err) {
      console.warn(`Error caching ${url}:`, err);
    }
    cacheProgress.textContent = `${cachedCount} / ${totalPages}`;
  }
}


window.addEventListener('load', () => {
  setTimeout(backgroundCacheScores, 3000);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
      console.log('SW registered');
    }).catch(console.error);
  }
});
