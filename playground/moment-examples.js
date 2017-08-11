var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp is: ' + now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);
console.log('Current time is: ' + currentMoment.format('LLLL'));

console.log('Current time is: ' + currentMoment.format('MMMM Do, YYYY @ h:mm A'));
