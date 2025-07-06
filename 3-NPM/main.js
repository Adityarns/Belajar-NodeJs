// Gunakan "npm i validator untuk install"
// Gunakan "npm uninstall validator untuk uninstall"

const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("adityarachmansyach@gmail.com"));
console.log(validator.isMobilePhone("082113467640", 'id-ID'));
console.log(validator.isNumeric("12352356135"));