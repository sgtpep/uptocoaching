module.exports = (directory, meta) => {
  const russian = /^\.\/ru($|\/)/.test(directory);
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
`;
};
