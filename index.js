const param = process.argv[2] || 'start';

const testPath = process.env.TEST_PATH

const basePath = __dirname + `\\${testPath ? testPath : ''}`

console.log(basePath)
const command = require(`./lib/${param}.js`)
if (command) {
  command(basePath)
}
