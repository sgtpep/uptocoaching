const onScroll = elements => {
  const bodyTop = document.body.getBoundingClientRect().top;
  Array.prototype.forEach.call(elements, element => {
    element.style.backgroundPositionY =
      50 -
      ((pageYOffset -
        (element.getBoundingClientRect().top - bodyTop) +
        (innerHeight - element.offsetHeight) / 2) /
        (innerHeight + element.offsetHeight)) *
        150 +
      '%';
  });
};

export default elements => {
  Array.prototype.forEach.call(elements, element => {
    element.style.backgroundAttachment = 'scroll';
  });
  addEventListener('scroll', () => onScroll(elements));
  onScroll(elements);
};
