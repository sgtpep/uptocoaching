const russian = directory => /^\.\/ru($|\/)/.test(directory);

module.exports = options =>
  Object.assign(options, {
    page: options.page.replace(/^ru($|\/)/, ''),
    root: russian(options.directory) ? 'ru/' : '',
    russian: russian(options.directory),
  });
