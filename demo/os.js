const os = require('os');

console.log('ОПЕРАЦИОНКА', os.platform());

console.log('Процессор', os.arch());

console.log('Инфа Процессор', os.cpus());

console.log('Свободная память', os.freemem());

console.log('Всего память', os.totalmem());

console.log('Домашнаяя лиректория', os.homedir());

console.log('Время работы', os.uptime());