import decodeProperties from './decode-properties.js';
import navigationActivation from './navigation-activation.js';
import pageJumps from './page-jumps.js';
import youcanbookme from './youcanbookme.js';

decodeProperties();

const header = document.querySelector('.header');
navigationActivation(
  document.querySelectorAll('.header-navigation a[href*="#"]'),
  header,
);
pageJumps(header);

const booking = document.querySelector('.book > iframe');
if (booking) {
  youcanbookme(booking);
}
