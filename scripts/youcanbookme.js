export default element => {
  addEventListener('message', event => {
    if (event.origin === 'https://uptocoaching.youcanbook.me') {
      element.style.height = `${event.data - 100}px`;
    }
  });
};
