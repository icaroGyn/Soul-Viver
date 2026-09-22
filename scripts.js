// Reveal-on-scroll: adds a fade/slide-in animation as sections enter the viewport.
// Safe by design: sections are fully visible by default in the CSS, so if this
// script fails to load for any reason, the content still shows normally.
document.addEventListener('DOMContentLoaded', function () {
  var revealEls = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    return; // nothing to do — content is already visible via CSS defaults
  }

  // Only now do we switch these elements into the "hidden, about to animate" state.
  revealEls.forEach(function (el) { el.classList.add('reveal-init'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) { observer.observe(el); });
});
