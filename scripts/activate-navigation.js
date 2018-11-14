const anchors = document.querySelectorAll('.header-navigation a[href*="#"]');
const elements = Array.prototype.map
  .call(anchors, anchor => document.querySelector(anchor.hash))
  .filter(Boolean);
const headerHeight = document.querySelector('.header').offsetHeight;
const onScroll = () => {
  const element = elements.find(
    element =>
      pageYOffset >= element.offsetTop - headerHeight &&
      pageYOffset <= element.offsetTop,
  );
  Array.prototype.forEach.call(
    anchors,
    anchor =>
      element && anchor.hash == `#${element.id}`
        ? anchor.classList.add('active')
        : anchor.classList.remove('active'),
  );
};
addEventListener('scroll', () => onScroll());
onScroll();
