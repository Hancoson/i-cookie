/**
 * https://github.com/Hancoson/i-cookie
 *
 * Created by Guoxing.han on 2017-03-23.
 * Released under the MIT license
 */

var iCookie = {
  decode: function (value) {
    return decodeURIComponent(value);
  },
  encode: function (value) {
    return encodeURIComponent(value);
  },

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
        t.setTime(+t + days * 864e+5); // 86400000MS ; +t, Object to Number;
      }
      items = [
        this.encode(key),
        "=",
        this.encode(value),
        option.expires ?
        "; expires=" + option
        .expires
        .toUTCString() :
        '',
        option.path ?
        "; path=" + path :
        '',
        option.domain ?
        "; domain=" + domain :
        '',
        option.secure ?
        "; secure" :
        ''
      ].join('');

      return document.cookie = items;
    }
    //
    cookies = document.cookie ?
      document
      .cookie
      .split("; ") :
      [];
    for (i = 0, len = cookies.length; i < len; i++) {
      item = cookies[i].split("=");
      if (key && key == this.decode(item[0])) {
        result = this.decode(item[1]);
        break;
      }
    }
    return result;
  },
  deleteCookie: function (key) {
    if (this.cookie(key) === undefined) {
      return false;
    }

    this.cookie(key, "", {
      expires: -1
    });

    return !this.cookie(key);
  }

};

module.exports = iCookie;