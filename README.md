# i-cookie
[![GitHub license](https://img.shields.io/github/license/Hancoson/i-cookie.svg)](https://github.com/Hancoson/i-cookie/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/Hancoson/i-cookie/master.svg)](https://travis-ci.org/Hancoson/i-cookie)
[![npm version](https://img.shields.io/npm/v/i-cookie.svg)](https://www.npmjs.com/package/i-cookie)
[![npm](https://img.shields.io/npm/dt/i-cookie.svg)](https://www.npmjs.com/package/i-cookie)

*A simple, lightweight JavaScript API for handling browser cookies*

## Getting started

run npm:
```
npm i i-cookie --save
```
and then:
```js
import iCookie from 'i-cookie'
```

## Write a cookie

A cookie is set with a simple object as the first parameter:

```js
/**
* @param {key}
* @param {value}
* @param {option} set the `expires` 【non-mandatory】
*/
iCookie.cookie("CookieKey", CookieValue, {expires: Date});
```
The set `Date` demo:

```js
var curDate = new Date();
curDate.setTime(curDate.getTime() + (1 * 60 * 1000)); //set 1 minute expire
```

## Read a cookie

```js
iCookie.cookie("CookieKey")
```
## Delete a cookie

```js
iCookie.deleteCookie("CookieKey")
```

## Authors

[Hancoson](https://github.com/Hancoson)

[MIT](https://github.com/Hancoson/i-cookie/blob/master/LICENSE)