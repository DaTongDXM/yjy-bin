const path = require('path');
const fs = require('fs');
// const basePath = path.resolve();
const { ErrorLog } = require('../utils/log');
const start = (basePath) => {
  const isPckFile = fs.existsSync(path.join(basePath, 'package.json'));
  if (!isPckFile) {
    ErrorLog('找不到包含package.json的文件！');
  }
  
  const isApp = fs.existsSync(path.join(basePath, 'app.js'));
  if(!isApp){
    ErrorLog('找不到包含app.ts或app.js的文件！'); 
  }
  require(path.join(basePath,'app.js'))
}
module.exports = start