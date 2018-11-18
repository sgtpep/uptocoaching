export default () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-encoded]'),
    element => {
      const properties = JSON.parse(atob(element.dataset.encoded));
      Object.keys(properties).forEach(name => {
        element[name] = properties[name];
      });
    },
  );
};
