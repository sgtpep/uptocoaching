import activateNavigation from './activate-navigation.js';
import decodeProperties from './decode-properties.js';
import parallaxScrolling from './parallax-scrolling.js';
import youcanbookMe from './youcanbook-me.js';

activateNavigation(document.querySelectorAll('.header-navigation a[href*="#"]'));
decodeProperties();
parallaxScrolling(document.querySelectorAll('.parallax'));

const frame = document.querySelector('.booking > iframe');
frame && youcanbookMe(frame);
