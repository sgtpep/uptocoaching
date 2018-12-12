module.exports = options => {
  const russian = /^\.\/ru($|\/)/.test(options.directory);
  return Object.assign(options, {
    name: 'Up to Coaching',
    page: options.page.replace(/^ru($|\/)/, ''),
    root: russian ? 'ru/' : '',
    russian,
  });
};
