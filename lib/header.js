const fs = require('fs');

module.exports = options => {
  const description = options.russian
    ? 'Коучинг с профессиональным коучем Ксенией Романовой.'
    : 'Coaching with a professional coach Ksenia Romanova.';
  return `
<!doctype html>
<html lang="${options.russian ? 'ru' : 'en'}">
<base href="${options.base}">
<link href="%ABSOLUTE_BASE%${options.page}" hreflang="en" rel="alternate">
<link href="%ABSOLUTE_BASE%ru/${options.page}" hreflang="ru" rel="alternate">
<link href="%ABSOLUTE_BASE%${options.root}${options.page}" rel="canonical">
<link href="images/favicon.png" rel="icon">
<meta charset="utf-8">
<meta content="${options.meta.description || description}" name="description">
<meta content="%ABSOLUTE_BASE%assets/noomii-interview.mp3" property="og:audio">
<meta content="${
    JSON.parse(fs.readFileSync(`./${options.root}meta.json`)).description
  }" property="og:description">
<meta content="%ABSOLUTE_BASE%images/image.jpg" property="og:image">
<meta content="${options.russian ? 'ru_RU' : 'en_US'}" property="og:locale">
<meta content="${
    options.russian ? 'en_US' : 'ru_RU'
  }" property="og:locale:alternate">
<meta content="${options.name}" property="og:site_name">
<meta content="${description}" property="og:title">
<meta content="%ABSOLUTE_BASE%${options.root}" property="og:url">
<meta content="initial-scale=1, viewport-fit=cover, width=device-width" name="viewport">
<title>${options.meta.title ? `${options.meta.title} – ` : ''}${
    options.russian
      ? `${options.name} с Ксенией Романовой`
      : `${options.name} with Ksenia Romanova`
  }</title>
<script>
  if (location.hostname !== 'localhost') {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-129621111-1', { storage: 'none' });
    ga('send', 'pageview');
  }
</script>
<link href="styles/index.css" rel="stylesheet">
<noscript>
  <style>
    .javascript {
      display: none !important;
    }
  </style>
</noscript>
<div class="header">
  <div class="header-container">
    <a class="header-logo" href="${options.root}" title="${
    options.russian ? 'Главная' : 'Home'
  }"><img alt="${
    options.russian ? 'Логотип' : 'Logo'
  }" src="images/logo.png"></a>
    <ul class="no-list header-menu header-navigation">
      <li><a href="${options.root}.#about">${
    options.russian ? 'Обо мне' : 'About'
  }</a></li>
      <li><a class="${options.page == 'reviews/' ? 'active' : ''}" href="${
    options.root
  }reviews/">${options.russian ? 'Отзывы' : 'Reviews'}</a></li>
      <li class="javascript"><a href="${options.root}.#contacts">${
    options.russian ? 'Контакты' : 'Contacts'
  }</a></li>
      <li class="javascript"><a class="${
        options.page == 'booking/' ? 'active' : ''
      }" href="${options.root}booking/">${
    options.russian ? 'Записаться' : 'Booking'
  }</a></li>
    </ul>
    <ul class="no-list header-menu header-languages">
      <li><a class="${
        options.russian ? '' : 'active'
      }" href="${options.page.replace(/^404\//, '')}">En</a></li>
      <li><a class="${
        options.russian ? 'active' : ''
      }" href="ru/${options.page.replace(/^404\//, '')}">Ru</a></li>
    </ul>
  </div>
</div>
`;
};
