import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import offsetPageJumps from './offset-page-jumps.js';
import resizeYoucanbookMe from './resize-youcanbook-me.js';

const header = document.querySelector('.header');
activateNavigation(
  header,
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
offsetPageJumps(header);

decodeProperties();

const youcanbookMe = document.querySelector('.book > iframe');
if (youcanbookMe) {
  resizeYoucanbookMe(youcanbookMe);
}
