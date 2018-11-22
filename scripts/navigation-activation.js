const onScroll = (anchors, header, elements) => {
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

export default (anchors, header) => {
  const elements = document.querySelectorAll(
    [...anchors].map(anchor => anchor.hash).join(', '),
  );
  addEventListener('scroll', () => onScroll(anchors, header, elements));
  onScroll(anchors, header, elements);
};
