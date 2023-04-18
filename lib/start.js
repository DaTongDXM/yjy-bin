const path = require('path');
const fs = require('fs');
const basePath = path.resolve();
const { ErrorLog } = require('../utils/log');
const start = () => {
  const isPckFile = fs.existsSync(path.join(basePath, 'package.json'));
  if (!isPckFile) {
    ErrorLog('找不到包含package.json的文件！');
  }
}
module.exports = start