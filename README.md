# i-cookie
*A simple, lightweight JavaScript API for handling browser cookies*

## Getting started

Download `i-cookie.js` file and include it in your HTML document, this will add a global object called `iCookie`:

```
<script src="i-cookie.js"></script>
```
Or, you can 

```
var iCookie = require('i-cookie.js');
```
## Write a cookie

A cookie is set with a simple object as the first parameter:

```
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