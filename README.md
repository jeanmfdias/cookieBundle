# CookieBundle

This package just work in browser

## How to install

```shell
npm install cookiebundle
```

## How to Use

- Import

```javascript
const { Cookie } = require('cookiebundle/bin/cookie');
```

- Create a cookie

```javascript
Cookie.create('name', 'value', 1);
```

- Retrieve a cookie

```javascript
Cookie.get('name');
```

- Delete a cookie

```javascript
Cookie.destroy('name');
```

