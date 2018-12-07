import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import parallaxScrolling from './parallax-scrolling.js';
import youcanbookMe from './youcanbook-me.js';

activateNavigation(
  document.querySelector('.header'),
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
decodeProperties();
parallaxScrolling(document.querySelectorAll('.parallax'));

const frame = document.querySelector('.book > iframe');
if (frame) {
  youcanbookMe(frame);
}
