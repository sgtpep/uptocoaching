import encodedData from './encoded-data.js';
import navigationActivation from './navigation-activation.js';
import pageJumps from './page-jumps.js';
import youcanbookme from './youcanbookme.js';

encodedData();
navigationActivation(
  document.querySelectorAll('.header-navigation a[href*="#"]'),
  document.querySelector('.header'),
);
pageJumps(document.querySelector('.header'));
youcanbookme(document.querySelector('.youcanbookme'));
