import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import initializeYoucanbookMe from './initialize-youcanbook-me.js';
import offsetPageJumps from './offset-page-jumps.js';

const header = document.querySelector('.header');
activateNavigation(
  header,
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
offsetPageJumps(header);

decodeProperties();

const booking = document.querySelector('.book > iframe');
if (booking) {
  initializeYoucanbookMe(booking);
}
