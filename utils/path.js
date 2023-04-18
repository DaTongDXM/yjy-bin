const path = require('path');
/**
 * 
 * @param {String} tPath 需要转换的path
 * @param {*String} isSolve 是否为当前工作目录
 */
const getPath = function (tPath, isSolve = false) {
  if (isSolve) return path.resolve('./');
  return path.isAbsolute(tPath) ? tPath : path.join(__dirname, tPath)
}

export {
  getPath
}