// Navigation must remain usable even if an optional animation fails.
(function () {
  function dismissLoader() {
    document.querySelectorAll('.preloader').forEach(function (loader) {
      loader.style.display = 'none';
      loader.style.pointerEvents = 'none';
      loader.setAttribute('aria-hidden', 'true');
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(dismissLoader, 1500);
  });
  window.addEventListener('pageshow', dismissLoader);
})();
