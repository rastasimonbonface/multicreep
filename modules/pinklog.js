const chalk = require('chalk')

pinklog = {
    message(txt){
        console.log(chalk.green(txt));
    },
    log(txt) {
            if (process.env.VERBOSE !== 'false') {
                console.log(chalk.magenta(txt));
            }
        },
        error(txt) {
            console.log(chalk.bold.red(txt));
        }
}
module.exports = pinklog;
