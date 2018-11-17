import navigationActivation from './navigation-activation.js';
import pageJumps from './page-jumps.js';
import parallax from './parallax.js';

const header = document.querySelector('.header');
navigationActivation(
  document.querySelectorAll('.header-navigation a[href*="#"]'),
  header,
);
pageJumps(header);
parallax(document.querySelectorAll('.cover, .hero'));
