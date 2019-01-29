export default frame => {
  frame.style.height = '593px';
  frame.addEventListener(
    'load',
    () => (frame.previousElementSibling.style.display = 'none'),
  );
  addEventListener(
    'message',
    event =>
      frame.src.startsWith(event.origin) &&
      (frame.style.height = `${event.data - 100}px`),
  );
};
