module.exports = options => `
<!doctype html>
<base href="${options.base}">
<html lang="${options.russian ? 'ru' : 'en'}">
<link href="${options.root}${options.page}" rel="canonical">
<link href="images/favicon.png" rel="icon">
<meta charset="utf-8">
<meta content="${
  options.russian
    ? 'Лайф-коучинг с профессиональным коучем Ксенией Романовой.'
    : 'Life coaching with a professional coach Ksenia Romanova.'
}" name="description">
<meta content="initial-scale=1, viewport-fit=cover, width=device-width" name="viewport">
<title>${options.meta.title ? `${options.meta.title} — ` : ''}Up to Coaching ${
  options.russian ? 'с Ксенией Романовой' : 'with Ksenia Romanova'
}</title>
<script src="scripts/google-analytics.js"></script>
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
}"><img alt="${options.russian ? 'Логотип' : 'Logo'}" src="images/logo.png"></a>
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
