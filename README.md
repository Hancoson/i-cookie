# Browser Cookie
*A simple, lightweight JavaScript API for handling browser cookies*

## Getting started

Download `browser-cookie.js` file and include it in your HTML document, this will add a global object called `BrowserCookie`:

```
<script src="browser-cookie.min.js"></script>
```
Or, you can 

```
var BrowserCookie = require('browser-cookie.min.js');
```
## Write a cookie

A cookie is set with a simple object as the first parameter:

```
BrowserCookie.cookie("CookieKey", CookieValue, {expires: Date});
```
The set `Date` demo:

```
var curDate = new Date();
curDate.setTime(curDate.getTime() + (1 * 60 * 1000)); //set 1 minute expire
```

## Read a cookie

```
BrowserCookie.cookie("CookieKey")
```
## Delete a cookie

```
BrowserCookie.deleteCookie("CookieKey")
```

## Authors

[Hancoson](https://github.com/Hancoson)