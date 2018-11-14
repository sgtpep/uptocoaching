const onHash = () => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      scrollTo(
        0,
        element.offsetTop - document.querySelector('.header').offsetHeight,
      );
    }
  }
};
addEventListener('hashchange', () => onHash());
setTimeout(() => onHash());
