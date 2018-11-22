const onHash = header => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      scrollTo(
        0,
        element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          (getComputedStyle(header).position === 'fixed'
            ? header.offsetHeight
            : 0),
      );
    }
  }
};

export default header => {
  addEventListener('hashchange', () => onHash(header));
  addEventListener('load', () => onHash(header));
};
