# browser_cookie
*A simple, lightweight JavaScript API for handling browser cookies*

## Build Status Matrix
![Selenium Test Status](https://camo.githubusercontent.com/1176ea6ce99215a0b8de53defaa91c77669b1921/68747470733a2f2f73617563656c6162732e636f6d2f62726f777365722d6d61747269782f6a71756572792d636f6f6b69652e737667)

## Getting started

Download cookie.js file and include it in your HTML document, this will add a global object called `BrowserCookie`:

```
<script src="cookie.js"></script>
```
Or, you can 

```
var BrowserCookie = require('cookie.js');
```
## Write a cookie

A cookie is set with a simple object as the first parameter:

```
BrowserCookie.cookie("CookieKey", CookieValue, {expires: Date});
```
The set `Date` demo:

```
var curDate = new Date();
curDate.setTime(curDate.getTime() + (1 * 60 * 1000));//set 1 minute expire
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