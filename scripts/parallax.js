const parallaxes = document.querySelectorAll('.parallax');
Array.prototype.forEach.call(parallaxes, parallax => {
  parallax.style.backgroundAttachment = 'scroll';
});
const onScroll = () =>
  Array.prototype.forEach.call(parallaxes, parallax => {
    parallax.style.backgroundPositionY =
      50 -
      ((pageYOffset -
        parallax.offsetTop +
        (innerHeight - parallax.offsetHeight) / 2) /
        (innerHeight + parallax.offsetHeight)) *
        100 +
      '%';
  });
addEventListener('scroll', () => onScroll());
onScroll();
