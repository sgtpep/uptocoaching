const activate = (anchors, targets) => {
  const { top } = document.body.getBoundingClientRect();
  const target = [...targets].find(target => {
    const offset = target.getBoundingClientRect().top - top;
    return (
      pageYOffset >= offset - 10 &&
      pageYOffset <= offset + target.nextElementSibling.offsetHeight
    );
  });
  [...anchors].forEach(anchor =>
    target && anchor.hash.slice(1) === target.id
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

export default anchors => {
  const targets = document.querySelectorAll(
    [...anchors].map(anchor => anchor.hash).join(', '),
  );
  addEventListener('scroll', throttle(() => activate(anchors, targets), 100));
  activate(anchors, targets);
};
