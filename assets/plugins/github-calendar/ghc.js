"use strict";

function _typeof(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}! function(e) {
    if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.GitHubCalendar = e()
    }
}(function() {
    return function e(t, n, r) {
        function o(i, f) {
            if (!n[i]) {
                if (!t[i]) {
                    var d = "function" == typeof require && require;
                    if (!f && d) return d(i, !0);
                    if (u) return u(i, !0);
                    var c = new Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var p = n[i] = {
                    exports: {}
                };
                t[i][0].call(p.exports, function(e) {
                    var n = t[i][1][e];
                    return o(n ? n : e)
                }, p, p.exports, e, t, n, r)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
        return o
    }({
        1: [function(e, t, n) {
            t.exports = function(e, t, n) {
                return "string" == typeof e && (e = document.querySelector(e)), n = n || {}, n.summary_text = n.summary_text || 'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/' + t + '" target="blank">@' + t + "</a>", n.proxy = n.proxy || function(e) {
                    return "https://urlreq.appspot.com/req?method=GET&url=" + e
                }, fetch(n.proxy("https://github.com/" + t)).then(function(e) {
                    return e.text()
                }).then(function(t) {
                    var r = document.createElement("div");
                    r.innerHTML = t;
                    var o = r.querySelector("#contributions-calendar");
                    o.querySelector(".left.text-muted").innerHTML = n.summary_text, e.innerHTML = o.innerHTML
                })
            }
        }, {}]
    }, {}, [1])(1)
});
