export default () => {
  [...document.querySelectorAll('[data-encoded]')].forEach(element =>
    Object.entries(JSON.parse(atob(element.dataset.encoded))).forEach(
      ([name, value]) => {
        element[name] = value;
      },
    ),
  );
};
