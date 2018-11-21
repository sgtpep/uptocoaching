export default element => {
  element.style.height = '593px';
  addEventListener('message', event => {
    if (event.origin === 'https://uptocoaching.youcanbook.me') {
      element.style.height = `${event.data - 100}px`;
    }
  });
};
