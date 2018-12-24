module.exports = options => {
  const russian = /^\.\/ru($|\/)/.test(options.directory);
  return {
    ...options,
    name: 'Up to Coaching',
    page: options.page.replace(/^ru($|\/)/, ''),
    root: russian ? 'ru/' : '',
    russian,
  };
};
