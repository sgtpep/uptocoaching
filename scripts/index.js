import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import pageJumps from './page-jumps.js';
import parallaxScrolling from './parallax-scrolling.js';
import youcanbookMe from './youcanbook-me.js';

const header = document.querySelector('.header');
activateNavigation(
  header,
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
pageJumps(header);

decodeProperties();
parallaxScrolling(document.querySelectorAll('.parallax'));

const frame = document.querySelector('.book > iframe');
if (frame) {
  youcanbookMe(frame);
}
