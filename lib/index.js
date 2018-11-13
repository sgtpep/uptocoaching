const footer = require('./footer');
const fs = require('fs');
const header = require('./header');
const path = require('path');

module.exports = directory => {
  const body = path.join(directory, 'body.html');
  if (fs.existsSync(body)) {
    const json = path.join(directory, 'meta.json');
    const meta = fs.existsSync(json) ? JSON.parse(json) : {};
    return (
      header(directory, meta).trimLeft() +
      fs.readFileSync(body) +
      footer(directory, meta).trimLeft()
    );
  }
};
