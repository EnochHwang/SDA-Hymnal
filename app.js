const totalPages = 10;
let currentPage = 1;
const scoreImg = document.getElementById('score');
const statusDiv = document.getElementById('status');

showPage(currentPage);

function showPage(num) {
  const padded = String(num).padStart(4, '0');
  const url = `scores/${padded}.png`;
  scoreImg.src = url;
}

function updateStatus(msg) {
  statusDiv.textContent = msg;
}

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

function backgroundCacheScores() {
  if (!('caches' in window)) {
    updateStatus("Caching not supported");
    return;
  }

  caches.open('sda-hymnal-v1').then(cache => {
    let count = 0;
    for (let i = 1; i <= totalPages; i++) {
      const padded = String(i).padStart(4, '0');
      const url = `scores/${padded}.png`;
      cache.add(url).then(() => {
        count++;
        updateStatus(`Cached ${count}/${totalPages}`);
      }).catch(err => {
        console.error("Failed to cache", url, err);
      });
    }
  });
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

scoreImg.addEventListener('touchstart', handleTouchStart, false);
scoreImg.addEventListener('touchend', handleTouchEnd, false);

let xStart = null;

function handleTouchStart(evt) {
  xStart = evt.changedTouches[0].clientX;
}

function handleTouchEnd(evt) {
  if (!xStart) return;
  let xEnd = evt.changedTouches[0].clientX;
  let dx = xEnd - xStart;
  if (dx > 50) prevPage();
  else if (dx < -50) nextPage();
  xStart = null;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});

window.addEventListener('load', () => {
  showPage(currentPage);
  backgroundCacheScores();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
