/**
 * https://github.com/Hancoson/i-cookie
 *
 * Created by Guoxing.han on 2017-03-23.
 * Released under the MIT license
 */

var iCookie = (function () {

  var decode = function (value) {
      return decodeURIComponent(value);
    },
    encode = function (value) {
      return encodeURIComponent(value);
    };

  return {
    /**
     * @param {key}
     * @param {value}
     * @param {option} set the `expires`.
     */
    cookie: function (key, value, option) {
      var t,
        days,
        items,
        cookies,
        i,
        len,
        item,
        result;

      // if the arguments' length  greater than 1, it's set the cookie
      if (arguments.length > 1) {
        option = option || {};

        if (typeof option.expires === "number") {
          days = option.expires;
          t = option.expires = new Date();
          t.setTime(+ t + days * 864e + 5); // 86400000MS ; +t, Object to Number;
        }
        items = [
          encode(key), "=", encode(value), option.expires
            ? "; expires=" + option
              .expires
              .toUTCString()
            : '',
          option.path
            ? "; path=" + path
            : '',
          option.domain
            ? "; domain=" + domain
            : '',
          option.secure
            ? "; secure"
            : ''
        ].join('');

        return document.cookie = items;
      }
      //
      cookies = document.cookie
        ? document
          .cookie
          .split("; ")
        : [];
      for (i = 0, len = cookies.length; i < len; i++) {
        item = cookies[i].split("=");
        if (key && key == decode(item[0])) {
          result = decode(item[1]);
          break;
        }
      }
      return result;
    },
    deleteCookie: function (key) {
      if (this.cookie(key) === undefined) {
        return false;
      }

      this.cookie(key, "", {expires: -1});

      return !this.cookie(key);
    }
  }

})();

// to  modularization
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = iCookie;
  }
  exports.iCookie = iCookie;
} else {
  window.iCookie = iCookie;
}