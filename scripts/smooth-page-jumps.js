export default anchors =>
  [...anchors].forEach(anchor =>
    anchor.addEventListener('click', event => {
      const target = document.querySelector(
        `a[name="${anchor.hash.slice(1)}"]`,
      );
      if (target && target.scrollIntoView) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }),
  );
