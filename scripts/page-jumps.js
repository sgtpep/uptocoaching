const scroll = header => {
  if (
    getComputedStyle(header).position === 'fixed' &&
    location.hash &&
    document.querySelector(location.hash)
  ) {
    scrollBy(0, -header.offsetHeight);
  }
};

export default header => {
  addEventListener('hashchange', () => scroll(header));
  setTimeout(() => scroll(header));
};
