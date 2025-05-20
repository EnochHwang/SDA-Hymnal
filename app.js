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

let touchStartX = 0;
scoreImg.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
scoreImg.addEventListener('touchend', e => {
  const diffX = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diffX) > 50) (diffX < 0 ? nextPage() : prevPage());
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
