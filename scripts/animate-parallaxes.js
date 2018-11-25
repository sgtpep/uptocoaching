const onScroll = elements => {
  const { top } = document.body.getBoundingClientRect();
  elements.forEach(element =>
    ['msTransform', 'transform', 'webkitTransform'].forEach(property => {
      element.style[property] = `translate3d(0, ${(
        Math.min(
          Math.max(
            (pageYOffset -
              (element.parentElement.getBoundingClientRect().top - top) +
              (innerHeight - element.parentElement.offsetHeight) / 2) /
              -(innerHeight + element.parentElement.offsetHeight),
            -0.5,
          ),
          0.5,
        ) * element.parentElement.offsetHeight
      ).toFixed(1)}px, 0)`;
    }),
  );
};

export default elements => {
  [...elements].forEach(element =>
    element.parentElement.classList.add('parallax-container'),
  );
  addEventListener('scroll', () =>
    requestAnimationFrame(() => onScroll(elements)),
  );
  onScroll(elements);
};
