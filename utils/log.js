const Chalk = import('chalk');
const Log = (...args) => { console.log.apply(console, args) }

const SuccessLog = (...args) => { Chalk.green(...args) }

const WarningLog = (...args) => { Chalk.yellow(...args) }

const ErrorLog = (...args) => { throw new Error(args); } 		// <1> 	Chalk is a


module.exports = { SuccessLog, WarningLog, ErrorLog }	// <2> 	export the functions as module.exports.