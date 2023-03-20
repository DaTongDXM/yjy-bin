const param = process.argv[2] || 'start';

const command = require(`./lib/${param}.js`)
if (command) {
  command()
}
