// var Cookie = require('../bin/cookie');

var { Cookie } = require('../bin/cookie.js');

console.log(Cookie);

if (Cookie.create('cookieTest', 'valueTest')) {
    console.log('Result: Create ok!');
} else {
    console.log('Result: Error');
}

if (Cookie.get('cookieTest')) {
    console.log('Result: Retrieve ok!');
} else {
    console.log('Result: Error');
}

if (Cookie.destroy('cookieTest')) {
    console.log('Result: Destroy ok!');
} else {
    console.log('Result: Error');
}