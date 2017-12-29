# i-cookie
[![GitHub license](https://img.shields.io/github/license/Hancoson/i-cookie.svg)](https://github.com/Hancoson/i-cookie/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://github.com/Hancoson/i-cookie)

*A simple, lightweight JavaScript API for handling browser cookies*

## Getting started

Download `i-cookie` folder and include it in your HTML document, this will add a global object called `iCookie`:
```
<script src="./i-cookie/index.js"></script>
```
or run npm:
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

```
var curDate = new Date();
curDate.setTime(curDate.getTime() + (1 * 60 * 1000)); //set 1 minute expire
```

## Read a cookie

```
iCookie.cookie("CookieKey")
```
## Delete a cookie

```
iCookie.deleteCookie("CookieKey")
```

## Authors

[Hancoson](https://github.com/Hancoson)