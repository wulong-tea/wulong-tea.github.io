var fs = require('fs'),
  sys = require('sys');

fs.writeFile('treasure-chamber-report.txt', 'adfdasf', function () {
  console.log('oh, look at all my money');
});

fs.writeFile('treasure-chamber-report.txt', '...', function () {
  console.log("can't wait to hear back from her!");
});
