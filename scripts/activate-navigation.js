const activate = (header, anchors, targets) => {
  const { top } = document.body.getBoundingClientRect();
  const target = [...targets].find(target => {
    const rect = target.getBoundingClientRect();
    return (
      pageYOffset >= rect.top - top - header.offsetHeight - 10 &&
      pageYOffset <= rect.bottom - top - header.offsetHeight
    );
  });
  [...anchors].forEach(anchor =>
    target && anchor.hash == `#${target.id}`
      ? anchor.classList.add('is-active')
      : anchor.classList.remove('is-active'),
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
    const targets = document.querySelectorAll(
      [...anchors].map(anchor => anchor.hash).join(', '),
    );
    addEventListener(
      'scroll',
      throttle(() => activate(header, anchors, targets), 100),
    );
    activate(header, anchors, targets);
  }
};
