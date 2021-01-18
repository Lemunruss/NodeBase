const path = require('path');

console.log('file', path.basename(__filename));

console.log('dir', path.dirname(__filename));

console.log('РАсширение', path.extname(__filename));

console.log('Parse', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));