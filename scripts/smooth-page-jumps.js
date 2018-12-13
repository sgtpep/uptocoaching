export default anchors =>
  [...anchors].forEach(anchor =>
    anchor.addEventListener('click', event => {
      const target = document.querySelector(anchor.hash);
      if (target && target.scrollIntoView) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }),
  );
