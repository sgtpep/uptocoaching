import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import pageJumps from './page-jumps.js';
import youcanbookMe from './youcanbook-me.js';

const header = document.querySelector('.header');
activateNavigation(
  header,
  document.querySelectorAll('.header-navigation a[href*="#"]'),
);
pageJumps(header);

decodeProperties();

const booking = document.querySelector('.book > iframe');
if (booking) {
  youcanbookMe(booking);
}
