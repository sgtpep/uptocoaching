module.exports = options => `
<!doctype html>
<html lang="${options.russian ? 'ru' : 'en'}">
<base href="${options.base}">
<link href="assets/favicon.ico" rel="shortcut icon">
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
  <a class="header-logo" href="${options.root}" title="${
  options.russian ? 'Главная' : 'Home'
}"></a>
  <ul class="no-list header-menu header-navigation">
    <li><a href="${options.root}.#about">${
  options.russian ? 'Обо мне' : 'About'
}</a></li>
    <li><a class="${options.page == 'reviews/' ? 'is-active' : ''}" href="${
  options.root
}reviews/">${options.russian ? 'Отзывы' : 'Reviews'}</a></li>
    <li class="javascript"><a href="${options.root}.#contacts">${
  options.russian ? 'Контакты' : 'Contacts'
}</a></li>
    <li class="javascript"><a class="${
      options.page == 'book/' ? 'is-active' : ''
    }" href="${options.root}book/">${
  options.russian ? 'Записаться' : 'Booking'
}</a></li>
  </ul>
  <ul class="no-list header-menu header-languages">
    <li><a class="${options.russian ? '' : 'is-active'}" href="${
  options.page
}">En</a></li>
    <li><a class="${options.russian ? 'is-active' : ''}" href="ru/${
  options.page
}">Ru</a></li>
  </ul>
</div>
`;
