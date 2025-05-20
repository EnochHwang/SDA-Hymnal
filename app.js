
document.addEventListener('DOMContentLoaded', () => {
  const totalPages = 10;
  let currentPage = 1;

  const imgA = document.getElementById('imgA');
  const imgB = document.getElementById('imgB');
  const cacheStatus = document.getElementById('cacheStatus');
  const container = document.getElementById('scoreContainer');
  let showingA = true;

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function showPage(pageNum, direction = 0) {
    const currentImg = showingA ? imgA : imgB;
    const nextImg = showingA ? imgB : imgA;
    const offset = direction * 100;

    nextImg.style.transition = 'none';
    nextImg.style.transform = `translateX(${offset}%)`;
    nextImg.src = `scores/${pageNum.toString().padStart(4, '0')}.png`;

    requestAnimationFrame(() => {
      nextImg.style.transition = 'transform 0.3s ease';
      currentImg.style.transform = `translateX(${-offset}%)`;
      nextImg.style.transform = 'translateX(0)';
    });

    showingA = !showingA;
  }

  function prevPage() {
    if (currentPage <= 1) return;
    currentPage--;
    showPage(currentPage, -1);
  }

  function nextPage() {
    if (currentPage >= totalPages) return;
    currentPage++;
    showPage(currentPage, 1);
  }

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const activeImg = showingA ? imgA : imgB;
    activeImg.style.transition = 'none';
    activeImg.style.transform = `translateX(${deltaX}px)`;
  });

  container.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = currentX - startX;
    const threshold = 50;

    if (deltaX > threshold) {
      prevPage();
    } else if (deltaX < -threshold) {
      nextPage();
    } else {
      const activeImg = showingA ? imgA : imgB;
      activeImg.style.transition = 'transform 0.3s ease';
      activeImg.style.transform = 'translateX(0)';
    }
  });

  // Initial page load
  showPage(currentPage);

  // Background caching
  if ('caches' in window && location.protocol === 'https:') {
    caches.open('SDA-Hymnal-v1').then(cache => {
      let cachedCount = 0;
      const cacheNext = (i) => {
        if (i > totalPages) {
          cacheStatus.textContent = "All pages cached";
          return;
        }
        const url = `scores/${i.toString().padStart(4, '0')}.png`;
        cache.add(url).then(() => {
          cachedCount++;
          cacheStatus.textContent = `Cached ${cachedCount}/${totalPages}`;
          cacheNext(i + 1);
        });
      };
      cacheNext(1);
    });
  } else {
    cacheStatus.textContent = "Caching disabled (non-HTTPS)";
  }
});
