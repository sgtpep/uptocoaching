const path = require('path');

module.exports = (directory, meta) => {
  const base = path.relative(directory, path.join(__dirname, '..')) || '.';
  const page = path
    .relative(path.join(__dirname, '..'), directory)
    .replace(/^ru($|\/)/, '');
  const russian = /^\.\/ru($|\/)/.test(directory);

  const root = base + (russian ? '/ru/' : '');
  return `
<!DOCTYPE html>
<link rel="shortcut icon" href="favicon.ico">
<meta charset="utf-8">
<meta name="description" content="${
    russian
      ? 'Лайф-коучинг с профессиональным коучем Ксенией Романовой.'
      : 'Life coaching with a professional coach Ksenia Romanova.'
  }">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>
  ${meta.title ? `${meta.title} — ` : ''}Up to Coaching
  ${russian ? 'с Ксенией Романовой' : 'with Ksenia Romanova'}
</title>
<div class="header">
  <a class="header-logo" href="${root}" title="${
    russian ? 'Главная' : 'Home'
  }"><img src="${base}/images/logo.png"></a>
  <ul class="header-menu">
    <li><a href="${root}#about">${russian ? 'Обо мне' : 'About'}</a></li>
    <li><a href="${root}reviews/" class="${
    page == 'reviews' ? 'active' : ''
  }">${russian ? 'Отзывы' : 'Reviews'}</a></li>
    <li><a href="${root}#contacts">${russian ? 'Контакты' : 'Contacts'}</a></li>
  </ul>
  <ul class="header-languages">
    <li><a href="${base}/${page}${page ? '/' : ''}" class="${
    russian ? '' : 'active'
  }">En</a></li>
    <li><a href="${base}/ru/${page}${page ? '/' : ''}" class="${
    russian ? 'active' : ''
  }">Ru</a></li>
  </ul>
</div>
`;
};
