module.exports = options => `
<!DOCTYPE html>
<base href="${options.base}">
<link rel="shortcut icon" href="assets/favicon.ico">
<meta charset="utf-8">
<meta name="description" content="${
  options.russian
    ? 'Лайф-коучинг с профессиональным коучем Ксенией Романовой.'
    : 'Life coaching with a professional coach Ksenia Romanova.'
}">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>${options.meta.title ? `${options.meta.title} — ` : ''}Up to Coaching ${
  options.russian ? 'с Ксенией Романовой' : 'with Ksenia Romanova'
}</title>
<script src="scripts/google-analytics.js"></script>
<link rel="stylesheet" href="styles/index.css">
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
    <li><a href="${options.root}reviews/" class="${
  options.page == 'reviews/' ? 'active' : ''
}">${options.russian ? 'Отзывы' : 'Reviews'}</a></li>
    <li class="javascript"><a href="${options.root}.#contacts">${
  options.russian ? 'Контакты' : 'Contacts'
}</a></li>
    <li class="javascript"><a href="${options.root}book/" class="${
  options.page == 'book/' ? 'active' : ''
}">${options.russian ? 'Записаться' : 'Book'}</a></li>
  </ul>
  <ul class="no-list header-menu header-languages">
    <li><a href="${options.page}" class="${
  options.russian ? '' : 'active'
}">En</a></li>
    <li><a href="ru/${options.page}" class="${
  options.russian ? 'active' : ''
}">Ru</a></li>
  </ul>
</div>
`;
