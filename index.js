var chalk = require("chalk");

var message = chalk.bgYellow("Hello") + chalk.bgMagenta(" ") + chalk.yellow("World");
console.log(message);