const scroll = header => {
  if (getComputedStyle(header).position === 'fixed' && location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      scrollBy(0, -header.offsetHeight);
    }
  }
};

export default header => {
  addEventListener('hashchange', () => scroll(header));
  setTimeout(() => scroll(header));
};
