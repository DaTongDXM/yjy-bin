const param = process.argv[2] || 'start';

const basePath = __dirname + '/test'

const command = require(`./lib/${param}.js`)
if (command) {
  command(basePath)
}
