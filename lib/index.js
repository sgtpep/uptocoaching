const footer = require('./footer');
const fs = require('fs');
const header = require('./header');
const path = require('path');

module.exports = directory => {
  const body = path.join(directory, 'body.html');
  if (fs.existsSync(body)) {
    const json = path.join(directory, 'meta.json');
    const options = {
      base: path.relative(directory, path.join(__dirname, '..')) || '.',
      directory,
      meta: fs.existsSync(json) ? JSON.parse(fs.readFileSync(json)) : {},
      page: path
        .relative(path.join(__dirname, '..'), directory)
        .replace(/^ru($|\/)/, ''),
      russian: /^\.\/ru($|\/)/.test(directory),
    };
    options.root = options.base + (options.russian ? '/ru' : '');
    return (
      header(options).replace(/^\n/, '') +
      fs.readFileSync(body) +
      footer(options)
        .replace(/^\n/, '')
        .replace(/\n$/, '')
    );
  }
};