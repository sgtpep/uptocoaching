const onHash = header => {
  if (getComputedStyle(header).position === 'fixed' && location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      scrollBy(0, -header.offsetHeight);
    }
  }
};

export default header => {
  addEventListener('hashchange', () => onHash(header));
  addEventListener('load', () => onHash(header));
};
