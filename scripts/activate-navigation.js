const onScroll = (header, anchors, elements) => {
  const { top } = document.body.getBoundingClientRect();
  const element = [...elements].find(element => {
    const rect = element.getBoundingClientRect();
    return (
      pageYOffset >= rect.top - top - header.offsetHeight - 10 &&
      pageYOffset <= rect.bottom - top - header.offsetHeight
    );
  });
  [...anchors].forEach(anchor =>
    element && anchor.hash == `#${element.id}`
      ? anchor.classList.add('active')
      : anchor.classList.remove('active'),
  );
};

const throttle = (callback, delay) => {
  let throttling = false;
  return function(...args) {
    if (!throttling) {
      throttling = true;
      setTimeout(() => {
        throttling = false;
      }, delay);
      callback.apply(this, args);
    }
  };
};

export default (header, anchors) => {
  if (getComputedStyle(header).position === 'fixed') {
    const elements = document.querySelectorAll(
      [...anchors].map(anchor => anchor.hash).join(', '),
    );
    addEventListener(
      'scroll',
      throttle(() => onScroll(header, anchors, elements), 100),
    );
    onScroll(header, anchors, elements);
  }
};
