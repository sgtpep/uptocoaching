const onScroll = (anchors, header, elements) => {
  const bodyTop = document.body.getBoundingClientRect().top;
  const element = [...elements].find(element => {
    const top = element.getBoundingClientRect().top - bodyTop;
    return pageYOffset >= top - header.offsetHeight - 10 && pageYOffset <= top;
  });
  [...anchors].forEach(anchor =>
    element && anchor.hash == `#${element.id}`
      ? anchor.classList.add('active')
      : anchor.classList.remove('active'),
  );
};

export default (anchors, header) => {
  const elements = document.querySelectorAll(
    [...anchors].map(anchor => anchor.hash).join(', '),
  );
  addEventListener('scroll', () => onScroll(anchors, header, elements));
  onScroll(anchors, header, elements);
};
