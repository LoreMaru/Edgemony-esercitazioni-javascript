window.require = require;

const _ = require("lodash");

const min = _("./node_modules/lodash/min");

const arr = [234, 5, 43, 564, 55, 98, 67, 88, 1, 789];

console.log("ciao");
console.log(_.min(arr));
