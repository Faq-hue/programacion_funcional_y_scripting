const rq= require("duplicar");
const { argv } = require("process");

var args = process.argv.slice(2);
console.log(args[0])

rq.copyFile(`${args[0]}`, `${args[1]}`, args[2]);


