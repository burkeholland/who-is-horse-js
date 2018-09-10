let d3 = require('d3');

let parseTime = d3.timeParse('%B %d, %Y');

let d = new Date('Thu Apr 28 23:01:52 +0000 2016');

console.log(d);

let f = parseTime(new Date());

console.log(f);
