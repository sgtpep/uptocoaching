import activateNavigation from './activate-navigation.js';
import animateParallaxes from './animate-parallaxes.js';
import decodeProperties from './decode-properties.js';
import offsetPageJumps from './offset-page-jumps.js';
import resizeYoucanbookMe from './resize-youcanbook-me.js';

const header = document.querySelector('.header');
activateNavigation(
  header,
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
offsetPageJumps(header);

animateParallaxes(document.querySelectorAll('.parallax'));
decodeProperties();

const youcanbookMe = document.querySelector('.book > iframe');
if (youcanbookMe) {
  resizeYoucanbookMe(youcanbookMe);
}
