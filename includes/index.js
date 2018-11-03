const footer = require('./footer');
const fs = require('fs');
const header = require('./header');
const path = require('path');

module.exports = directoryPath => {
  const bodyPath = path.join(directoryPath, 'body.html');
  if (fs.existsSync(bodyPath)) {
    const metaPath = path.join(directoryPath, 'meta.json');
    const meta = fs.existsSync(metaPath) ? JSON.parse(metaPath) : {};
    return (
      header(directoryPath, meta).trimLeft() +
      fs.readFileSync(bodyPath) +
      footer(directoryPath, meta).trimLeft()
    );
  }
};
