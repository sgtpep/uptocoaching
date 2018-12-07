import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import parallaxScrolling from './parallax-scrolling.js';
import smoothPageJumps from './smooth-page-jumps.js';
import youcanbookMe from './youcanbook-me.js';

const anchors = document.querySelectorAll('.header-navigation a[href*="#"]');
activateNavigation(anchors);
smoothPageJumps(anchors);

decodeProperties();
parallaxScrolling(document.querySelectorAll('.parallax'));

const frame = document.querySelector('.book > iframe');
if (frame) {
  youcanbookMe(frame);
}
