if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = pt.type(t);
            return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (pt.isFunction(e)) return pt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return pt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Ct.test(e)) return pt.filter(e, t, n);
                e = pt.filter(e, t)
            }
            return pt.grep(t, function(t) {
                return pt.inArray(t, e) > -1 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = {};
            return pt.each(t.match(At) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), pt.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Ht, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ot.test(n) ? pt.parseJSON(n) : n)
                    } catch (t) {}
                    pt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (jt(t)) {
                var o, r, s = pt.expando,
                    a = t.nodeType,
                    l = a ? pt.cache : t,
                    c = a ? t[s] : t[s] && s;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[s] = nt.pop() || pt.guid++ : s), l[c] || (l[c] = a ? {} : {
                    toJSON: pt.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = pt.extend(l[c], e) : l[c].data = pt.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[pt.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[pt.camelCase(e)])) : o = r, o
            }
        }

        function d(t, e, n) {
            if (jt(t)) {
                var i, o, r = t.nodeType,
                    s = r ? pt.cache : t,
                    a = r ? t[pt.expando] : pt.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in i ? e = [e] : (e = pt.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !c(i) : !pt.isEmptyObject(i)) return
                    }(n || (delete s[a].data, c(s[a]))) && (r ? pt.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                }
            }
        }

        function h(t, e, n, i) {
            var o, r = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return pt.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
                u = (pt.cssNumber[e] || "px" !== c && +l) && It.exec(pt.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do r = r || ".5", u /= r, pt.style(t, e, u + c); while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function p(t) {
            var e = zt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function f(t, e) {
            var n, i, o = 0,
                r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || pt.nodeName(i, e) ? r.push(i) : pt.merge(r, f(i, e));
            return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], r) : r
        }

        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
        }

        function g(t) {
            Pt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function v(t, e, n, i, o) {
            for (var r, s, a, l, c, u, d, h = t.length, v = p(e), y = [], b = 0; h > b; b++)
                if (s = t[b], s || 0 === s)
                    if ("object" === pt.type(s)) pt.merge(y, s.nodeType ? [s] : s);
                    else if (Ut.test(s)) {
                for (l = l || v.appendChild(e.createElement("div")), c = (_t.exec(s) || ["", ""])[1].toLowerCase(), d = Xt[c] || Xt._default, l.innerHTML = d[1] + pt.htmlPrefilter(s) + d[2], r = d[0]; r--;) l = l.lastChild;
                if (!dt.leadingWhitespace && Wt.test(s) && y.push(e.createTextNode(Wt.exec(s)[0])), !dt.tbody)
                    for (s = "table" !== c || Yt.test(s) ? "<table>" !== d[1] || Yt.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;) pt.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(e.createTextNode(s));
            for (l && v.removeChild(l), dt.appendChecked || pt.grep(f(y, "input"), g), b = 0; s = y[b++];)
                if (i && pt.inArray(s, i) > -1) o && o.push(s);
                else if (a = pt.contains(s.ownerDocument, s), l = f(v.appendChild(s), "script"), a && m(l), n)
                for (r = 0; s = l[r++];) Bt.test(s.type || "") && n.push(s);
            return l = null, v
        }

        function y() {
            return !0
        }

        function b() {
            return !1
        }

        function w() {
            try {
                return it.activeElement
            } catch (t) {}
        }

        function x(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) x(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = b;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return pt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = pt.guid++)), t.each(function() {
                pt.event.add(this, e, o, i, n)
            })
        }

        function T(t, e) {
            return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function C(t) {
            return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
        }

        function E(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function S(t, e) {
            if (1 === e.nodeType && pt.hasData(t)) {
                var n, i, o, r = pt._data(t),
                    s = pt._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) pt.event.add(e, n, a[n][i])
                }
                s.data && (s.data = pt.extend({}, s.data))
            }
        }

        function k(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[pt.expando]) {
                    o = pt._data(e);
                    for (i in o.events) pt.removeEvent(e, i, o.handle);
                    e.removeAttribute(pt.expando)
                }
                "script" === n && e.text !== t.text ? (C(e).text = t.text, E(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Pt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function N(t, e, n, i) {
            e = rt.apply([], e);
            var o, r, s, a, l, c, u = 0,
                d = t.length,
                h = d - 1,
                p = e[0],
                m = pt.isFunction(p);
            if (m || d > 1 && "string" == typeof p && !dt.checkClone && ie.test(p)) return t.each(function(o) {
                var r = t.eq(o);
                m && (e[0] = p.call(this, o, r.html())), N(r, e, n, i)
            });
            if (d && (c = v(e, t[0].ownerDocument, !1, t, i), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || i)) {
                for (a = pt.map(f(c, "script"), C), s = a.length; d > u; u++) r = c, u !== h && (r = pt.clone(r, !0, !0), s && pt.merge(a, f(r, "script"))), n.call(t[u], r, u);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, pt.map(a, E), u = 0; s > u; u++) r = a[u], Bt.test(r.type || "") && !pt._data(r, "globalEval") && pt.contains(l, r) && (r.src ? pt._evalUrl && pt._evalUrl(r.src) : pt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
                c = o = null
            }
            return t
        }

        function D(t, e, n) {
            for (var i, o = e ? pt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || pt.cleanData(f(i)), i.parentNode && (n && pt.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function A(t, e) {
            var n = pt(e.createElement(t)).appendTo(e.body),
                i = pt.css(n[0], "display");
            return n.detach(), i
        }

        function $(t) {
            var e = it,
                n = ce[t];
            return n || (n = A(t, e), "none" !== n && n || (le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = A(t, e), le.detach()), ce[t] = n), n
        }

        function L(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function j(t) {
            if (t in Ee) return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
                if (t = Ce[n] + e, t in Ee) return t
        }

        function O(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = pt._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ft(i) && (r[s] = pt._data(i, "olddisplay", $(i.nodeName)))) : (o = Ft(i), (n && "none" !== n || !o) && pt._data(i, "olddisplay", o ? n : pt.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function H(t, e, n) {
            var i = we.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function M(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += pt.css(t, n + Rt[r], !0, o)), i ? ("content" === n && (s -= pt.css(t, "padding" + Rt[r], !0, o)), "margin" !== n && (s -= pt.css(t, "border" + Rt[r] + "Width", !0, o))) : (s += pt.css(t, "padding" + Rt[r], !0, o), "padding" !== n && (s += pt.css(t, "border" + Rt[r] + "Width", !0, o)));
            return s
        }

        function I(e, n, i) {
            var o = !0,
                r = "width" === n ? e.offsetWidth : e.offsetHeight,
                s = fe(e),
                a = dt.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, s);
            if (it.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= r || null == r) {
                if (r = me(e, n, s), (0 > r || null == r) && (r = e.style[n]), de.test(r)) return r;
                o = a && (dt.boxSizingReliable() || r === e.style[n]), r = parseFloat(r) || 0
            }
            return r + M(e, n, i || (a ? "border" : "content"), o, s) + "px"
        }

        function R(t, e, n, i, o) {
            return new R.prototype.init(t, e, n, i, o)
        }

        function F() {
            return t.setTimeout(function() {
                Se = void 0
            }), Se = pt.now()
        }

        function q(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Rt[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function P(t, e, n) {
            for (var i, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function _(t, e, n) {
            var i, o, r, s, a, l, c, u, d = this,
                h = {},
                p = t.style,
                f = t.nodeType && Ft(t),
                m = pt._data(t, "fxshow");
            n.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = pt.css(t, "display"), u = "none" === c ? pt._data(t, "olddisplay") || $(t.nodeName) : c, "inline" === u && "none" === pt.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", dt.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], Ne.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || pt.style(t, i)
                } else c = void 0;
            if (pt.isEmptyObject(h)) "inline" === ("none" === c ? $(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = pt._data(t, "fxshow", {}), r && (m.hidden = !f), f ? pt(t).show() : d.done(function() {
                    pt(t).hide()
                }), d.done(function() {
                    var e;
                    pt._removeData(t, "fxshow");
                    for (e in h) pt.style(t, e, h[e])
                });
                for (i in h) s = P(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function B(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = pt.camelCase(n), o = e[i], r = t[n], pt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = pt.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function W(t, e, n) {
            var i, o, r = 0,
                s = W.prefilters.length,
                a = pt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Se || F(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: pt.extend({}, e),
                    opts: pt.extend(!0, {
                        specialEasing: {},
                        easing: pt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Se || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = pt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); s > r; r++)
                if (i = W.prefilters[r].call(c, t, u, c.opts)) return pt.isFunction(i.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(i.stop, i)), i;
            return pt.map(u, P, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function z(t) {
            return pt.attr(t, "class") || ""
        }

        function X(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(At) || [];
                if (pt.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function U(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, pt.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === Je;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function Y(t, e) {
            var n, i, o = pt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && pt.extend(!0, t, n), t
        }

        function V(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function Q(t, e, n, i) {
            var o, r, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function K(t) {
            return t.style && t.style.display || pt.css(t, "display")
        }

        function J(t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === K(t) || "hidden" === t.type) return !0;
                t = t.parentNode
            }
            return !1
        }

        function G(t, e, n, i) {
            var o;
            if (pt.isArray(e)) pt.each(e, function(e, o) {
                n || nn.test(t) ? i(t, o) : G(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== pt.type(e)) i(t, e);
            else
                for (o in e) G(t + "[" + o + "]", e[o], n, i)
        }

        function Z() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        }

        function tt() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function et(t) {
            return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var nt = [],
            it = t.document,
            ot = nt.slice,
            rt = nt.concat,
            st = nt.push,
            at = nt.indexOf,
            lt = {},
            ct = lt.toString,
            ut = lt.hasOwnProperty,
            dt = {},
            ht = "1.12.1",
            pt = function(t, e) {
                return new pt.fn.init(t, e)
            },
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            mt = /^-ms-/,
            gt = /-([\da-z])/gi,
            vt = function(t, e) {
                return e.toUpperCase()
            };
        pt.fn = pt.prototype = {
            jquery: ht,
            constructor: pt,
            selector: "",
            length: 0,
            toArray: function() {
                return ot.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : ot.call(this)
            },
            pushStack: function(t) {
                var e = pt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return pt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(pt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ot.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: nt.sort,
            splice: nt.splice
        }, pt.extend = pt.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || pt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) t = s[i], n = o[i], s !== n && (c && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, r = t && pt.isArray(t) ? t : []) : r = t && pt.isPlainObject(t) ? t : {}, s[i] = pt.extend(c, r, n)) : void 0 !== n && (s[i] = n));
            return s
        }, pt.extend({
            expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === pt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === pt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (!dt.ownFirst)
                    for (e in t) return ut.call(t, e);
                for (e in t);
                return void 0 === e || ut.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && pt.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(mt, "ms-").replace(gt, vt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, o = 0;
                if (n(t))
                    for (i = t.length; i > o && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(ft, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (at) return at.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r, s = 0,
                    a = [];
                if (n(t))
                    for (o = t.length; o > s; s++) r = e(t[s], s, i), null != r && a.push(r);
                else
                    for (s in t) r = e(t[s], s, i), null != r && a.push(r);
                return rt.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), pt.isFunction(t) ? (n = ot.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(ot.call(arguments)))
                }, i.guid = t.guid = t.guid || pt.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: dt
        }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            lt["[object " + e + "]"] = e.toLowerCase()
        });
        var yt = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, p, f = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((e ? e.ownerDocument || e : P) !== j && L(e), e = e || j, H)) {
                    if (11 !== m && (c = vt.exec(t)))
                        if (o = c[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (f && (s = f.getElementById(o)) && F(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (c[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (x.qsa && !X[t + " "] && (!M || !M.test(t))) {
                        if (1 !== m) f = e, p = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = q), d = S(t), r = d.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; r--;) d[r] = l + " " + h(d[r]);
                            p = d.join(","), f = yt.test(t) && u(e.parentNode) || e
                        }
                        if (p) try {
                            return G.apply(n, f.querySelectorAll(p)), n
                        } catch (t) {} finally {
                            a === q && e.removeAttribute("id")
                        }
                    }
                }
                return N(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[q] = !0, t
            }

            function o(t) {
                var e = j.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {}

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = B++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, c, u = [_, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (c = e[q] || (e[q] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[i]) && a[0] === _ && a[1] === r) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[q] && (o = v(o)), r && !r[q] && (r = v(r, s)), i(function(i, s, a, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = s.length,
                        v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, h, t, a, l),
                        b = n ? r || (i ? t : f || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? tt(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = g(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : G.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, s, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), u = [function(t, n, i) {
                        var o = !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, o
                    }]; o > a; a++)
                    if (n = T.relative[t[a].type]) u = [p(f(u), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                            for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                            return v(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && h(t))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, c) {
                        var u, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = D,
                            b = i || r && T.find.TAG("*", c),
                            w = _ += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (D = s === j || s || c); f !== x && null != (u = b[f]); f++) {
                            if (r && u) {
                                for (d = 0, s || u.ownerDocument === j || (L(u), a = !H); h = t[d++];)
                                    if (h(u, s || j, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (_ = w)
                            }
                            o && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, o && f !== p) {
                            for (d = 0; h = n[d++];) h(m, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                v = g(v)
                            }
                            G.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (_ = w, D = y), m
                    };
                return o ? i(s) : s
            }
            var w, x, T, C, E, S, k, N, D, A, $, L, j, O, H, M, I, R, F, q = "sizzle" + 1 * new Date,
                P = t.document,
                _ = 0,
                B = 0,
                W = n(),
                z = n(),
                X = n(),
                U = function(t, e) {
                    return t === e && ($ = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                K = Q.pop,
                J = Q.push,
                G = Q.push,
                Z = Q.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(rt),
                ht = new RegExp("^" + it + "$"),
                pt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                ft = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Tt = function() {
                    L()
                };
            try {
                G.apply(Q = Z.call(P.childNodes), P.childNodes), Q[P.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: Q.length ? function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, E = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, L = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : P;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = j.documentElement, H = !E(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(j.getElementsByClassName), x.getById = o(function(t) {
                    return O.appendChild(t).id = q, !j.getElementsByName || !j.getElementsByName(q).length
                }), x.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && H ? e.getElementsByClassName(t) : void 0
                }, I = [], M = [], (x.qsa = gt.test(j.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || M.push(".#.+[+~]")
                }), o(function(t) {
                    var e = j.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (x.matchesSelector = gt.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), I.push("!=", rt)
                }), M = M.length && new RegExp(M.join("|")), I = I.length && new RegExp(I.join("|")), e = gt.test(O.compareDocumentPosition), F = e || gt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === P && F(P, t) ? -1 : e === j || e.ownerDocument === P && F(P, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t === j ? -1 : e === j ? 1 : o ? -1 : r ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (o === r) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === P ? -1 : l[i] === P ? 1 : 0
                }, j) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== j && L(t), n = n.replace(ut, "='$1']"), x.matchesSelector && H && !X[n + " "] && (!I || !I.test(n)) && (!M || !M.test(n))) try {
                    var i = R.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== j && L(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== j && L(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && V.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !H) : void 0;
                return void 0 !== i ? i : x.attributes || !H ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if ($ = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), $) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (h = g, d = h[q] || (h[q] = {}),
                                        u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[t] || [], p = c[0] === _ && c[1], b = p && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            u[t] = [_, p, b];
                                            break
                                        }
                                } else if (y && (h = e, d = h[q] || (h[q] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[t] || [], p = c[0] === _ && c[1], b = p), b === !1)
                                    for (;
                                        (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[q] || (h[q] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[t] = [_, b]), h !== e)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[q] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = k(t.replace(at, "$1"));
                        return o[q] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(wt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ft.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, S = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, c, u = z[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = T.preFilter; a;) {
                    (!i || (o = lt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ct.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(o = pt[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, k = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = X[t + " "];
                if (!r) {
                    for (e || (e = S(t)), n = e.length; n--;) r = y(e[n]), r[q] ? i.push(r) : o.push(r);
                    r = X(t, b(o, i)), r.selector = t
                }
                return r
            }, N = e.select = function(t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    d = !i && S(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && H && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && h(r), !t) return G.apply(n, i), n;
                            break
                        }
                }
                return (c || k(t, d))(i, e, !H, n, !e || yt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!$, L(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains;
        var bt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && pt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            wt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            xt = pt.expr.match.needsContext,
            Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ct = /^.[^:#\[\.,]*$/;
        pt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? pt.find.matchesSelector(i, t) ? [i] : [] : pt.find.matches(t, pt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, pt.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (pt.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) pt.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? pt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && xt.test(t) ? pt(t) : t || [], !1).length
            }
        });
        var Et, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            kt = pt.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || Et, "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : St.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Tt.test(i[1]) && pt.isPlainObject(e))
                            for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (o = it.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return Et.find(t);
                        this.length = 1, this[0] = o
                    }
                    return this.context = it, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
            };
        kt.prototype = pt.fn, Et = pt(it);
        var Nt = /^(?:parents|prev(?:Until|All))/,
            Dt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pt.fn.extend({
            has: function(t) {
                var e, n = pt(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (pt.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = xt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), pt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return bt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return bt(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return bt(t, "nextSibling")
            },
            prevAll: function(t) {
                return bt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return bt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return bt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return wt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return wt(t.firstChild)
            },
            contents: function(t) {
                return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
            }
        }, function(t, e) {
            pt.fn[t] = function(n, i) {
                var o = pt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = pt.filter(i, o)), this.length > 1 && (Dt[t] || (o = pt.uniqueSort(o)), Nt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var At = /\S+/g;
        pt.Callbacks = function(t) {
            t = "string" == typeof t ? r(t) : pt.extend({}, t);
            var e, n, i, o, s = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                            pt.each(n, function(n, i) {
                                pt.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== pt.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function() {
                        return pt.each(arguments, function(t, e) {
                            for (var n;
                                (n = pt.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? pt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = !0, n || u.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, pt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return pt.Deferred(function(n) {
                                pt.each(e, function(e, r) {
                                    var s = pt.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? pt.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, pt.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = ot.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && pt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : pt.Deferred(),
                    c = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && pt.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, e)).done(c(o, i, r)).fail(l.reject) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var $t;
        pt.fn.ready = function(t) {
            return pt.ready.promise().done(t), this
        }, pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? pt.readyWait++ : pt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || ($t.resolveWith(it, [pt]), pt.fn.triggerHandler && (pt(it).triggerHandler("ready"), pt(it).off("ready"))))
            }
        }), pt.ready.promise = function(e) {
            if (!$t)
                if ($t = pt.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(pt.ready);
                else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
            else {
                it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (t) {}
                n && n.doScroll && ! function e() {
                    if (!pt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return t.setTimeout(e, 50)
                        }
                        s(), pt.ready()
                    }
                }()
            }
            return $t.promise(e)
        }, pt.ready.promise();
        var Lt;
        for (Lt in pt(dt)) break;
        dt.ownFirst = "0" === Lt, dt.inlineBlockNeedsLayout = !1, pt(function() {
                var t, e, n, i;
                n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var t = it.createElement("div");
                dt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    dt.deleteExpando = !1
                }
                t = null
            }();
        var jt = function(t) {
                var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            },
            Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ht = /([A-Z])/g;
        pt.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando], !!t && !c(t)
                },
                data: function(t, e, n) {
                    return u(t, e, n)
                },
                removeData: function(t, e) {
                    return d(t, e)
                },
                _data: function(t, e, n) {
                    return u(t, e, n, !0)
                },
                _removeData: function(t, e) {
                    return d(t, e, !0)
                }
            }), pt.fn.extend({
                data: function(t, e) {
                    var n, i, o, r = this[0],
                        s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = pt.data(r), 1 === r.nodeType && !pt._data(r, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = pt.camelCase(i.slice(5)), l(r, i, o[i])));
                            pt._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        pt.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        pt.data(this, t, e)
                    }) : r ? l(r, t, pt.data(r, t)) : void 0
                },
                removeData: function(t) {
                    return this.each(function() {
                        pt.removeData(this, t)
                    })
                }
            }), pt.extend({
                queue: function(t, e, n) {
                    var i;
                    return t ? (e = (e || "fx") + "queue", i = pt._data(t, e), n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)), i || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = pt.queue(t, e),
                        i = n.length,
                        o = n.shift(),
                        r = pt._queueHooks(t, e),
                        s = function() {
                            pt.dequeue(t, e)
                        };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return pt._data(t, n) || pt._data(t, n, {
                        empty: pt.Callbacks("once memory").add(function() {
                            pt._removeData(t, e + "queue"), pt._removeData(t, n)
                        })
                    })
                }
            }), pt.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = pt.queue(this, t, e);
                        pt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        pt.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, i = 1,
                        o = pt.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = pt._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(e)
                }
            }),
            function() {
                var t;
                dt.shrinkWrapBlocks = function() {
                    if (null != t) return t;
                    t = !1;
                    var e, n, i;
                    return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
                }
            }();
        var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            It = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
            Rt = ["Top", "Right", "Bottom", "Left"],
            Ft = function(t, e) {
                return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
            },
            qt = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === pt.type(n)) {
                    o = !0;
                    for (a in n) qt(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, pt.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(pt(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            Pt = /^(?:checkbox|radio)$/i,
            _t = /<([\w:-]+)/,
            Bt = /^$|\/(?:java|ecma)script/i,
            Wt = /^\s+/,
            zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var t = it.createElement("div"),
                e = it.createDocumentFragment(),
                n = it.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), dt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, dt.attributes = !t.getAttribute(pt.expando)
        }();
        var Xt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
        var Ut = /<|&#?\w+;/,
            Yt = /<tbody/i;
        ! function() {
            var e, n, i = it.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = i.attributes[n].expando === !1);
            i = null
        }();
        var Vt = /^(?:input|select|textarea)$/i,
            Qt = /^key/,
            Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Jt = /^(?:focusinfocus|focusoutblur)$/,
            Gt = /^([^.]*)(?:\.(.+)|)/;
        pt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = pt._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = pt.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                            return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), e = (e || "").match(At) || [""], a = e.length; a--;) r = Gt.exec(e[a]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (c = pt.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = pt.event.special[p] || {}, d = pt.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pt.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), pt.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = pt.hasData(t) && pt._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(At) || [""], c = e.length; c--;)
                        if (a = Gt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = pt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || pt.removeEvent(t, p, g.handle), delete u[p])
                        } else
                            for (p in u) pt.event.remove(t, p + e[c], n, i, !0);
                    pt.isEmptyObject(u) && (delete g.handle, pt._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, c, u, d, h = [i || it],
                    p = ut.call(e, "type") ? e.type : e,
                    f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Jt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : pt.makeArray(n, [e]), c = pt.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !pt.isWindow(i)) {
                        for (l = c.delegateType || p, Jt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                        u === (i.ownerDocument || it) && h.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0;
                        (a = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || p, r = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && jt(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && jt(i) && s && i[p] && !pt.isWindow(i)) {
                        u = i[s], u && (i[s] = null), pt.event.triggered = p;
                        try {
                            i[p]()
                        } catch (t) {}
                        pt.event.triggered = void 0, u && (i[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = pt.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = ot.call(arguments),
                    l = (pt._data(this, "events") || {})[t.type] || [],
                    c = pt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = pt.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; a > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? pt(o, this).index(l) > -1 : pt.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[pt.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Kt.test(o) ? this.mouseHooks : Qt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new pt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return pt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n) {
                var i = pt.extend(new pt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                pt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pt.removeEvent = it.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
        }, pt.Event = function(t, e) {
            return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
        }, pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !pt.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), dt.submit || (pt.event.special.submit = {
            setup: function() {
                return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                    n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function(t) {
                        t._submitBubble = !0
                    }), pt._data(n, "submit", !0))
                })
            },
            postDispatch: function(t) {
                t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
            },
            teardown: function() {
                return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit")
            }
        }), dt.change || (pt.event.special.change = {
            setup: function() {
                return Vt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (pt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }), pt.event.add(this, "click._change", function(t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
                })), !1) : void pt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Vt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                    }), pt._data(e, "change", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return pt.event.remove(this, "._change"), !Vt.test(this.nodeName)
            }
        }), dt.focusin || pt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                pt.event.simulate(e, t.target, pt.event.fix(t))
            };
            pt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = pt._data(i, e);
                    o || i.addEventListener(t, n, !0), pt._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = pt._data(i, e) - 1;
                    o ? pt._data(i, e, o) : (i.removeEventListener(t, n, !0), pt._removeData(i, e))
                }
            }
        }), pt.fn.extend({
            on: function(t, e, n, i) {
                return x(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return x(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                    pt.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    pt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? pt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Zt = / jQuery\d+="(?:null|\d+)"/g,
            te = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
            ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ne = /<script|<style|<link/i,
            ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            oe = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            se = p(it),
            ae = se.appendChild(it.createElement("div"));
        pt.extend({
            htmlPrefilter: function(t) {
                return t.replace(ee, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a, l = pt.contains(t.ownerDocument, t);
                if (dt.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(r = ae.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                    for (i = f(r), a = f(t), s = 0; null != (o = a[s]); ++s) i[s] && k(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || f(t), i = i || f(r), s = 0; null != (o = a[s]); s++) S(o, i[s]);
                    else S(t, r);
                return i = f(r, "script"), i.length > 0 && m(i, !l && f(t, "script")), i = a = o = null, r
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, s = 0, a = pt.expando, l = pt.cache, c = dt.attributes, u = pt.event.special; null != (n = t[s]); s++)
                    if ((e || jt(n)) && (o = n[a], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(o))
                    }
            }
        }), pt.fn.extend({
            domManip: N,
            detach: function(t) {
                return D(this, t, !0)
            },
            remove: function(t) {
                return D(this, t)
            },
            text: function(t) {
                return qt(this, function(t) {
                    return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return N(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return N(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = T(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return N(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return N(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return pt.clone(this, t, e)
                })
            },
            html: function(t) {
                return qt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                    if ("string" == typeof t && !ne.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !Wt.test(t)) && !Xt[(_t.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = pt.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (pt.cleanData(f(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return N(this, arguments, function(e) {
                    var n = this.parentNode;
                    pt.inArray(this, t) < 0 && (pt.cleanData(f(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            pt.fn[t] = function(t) {
                for (var n, i = 0, o = [], r = pt(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), pt(r[i])[e](n), st.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var le, ce = {
                HTML: "block",
                BODY: "block"
            },
            ue = /^margin/,
            de = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
            he = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            pe = it.documentElement;
        ! function() {
            function e() {
                var e, u, d = it.documentElement;
                d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, t.getComputedStyle && (u = t.getComputedStyle(c), n = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", i = "4px" === (u || {
                    marginRight: "4px"
                }).marginRight, e = c.appendChild(it.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, o, r, s, a, l = it.createElement("div"),
                c = it.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === c.style.opacity, dt.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === c.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), dt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pt.extend(dt, {
                reliableHiddenOffsets: function() {
                    return null == n && e(), r
                },
                boxSizingReliable: function() {
                    return null == n && e(), o
                },
                pixelMarginRight: function() {
                    return null == n && e(), i
                },
                pixelPosition: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    return null == n && e(), s
                },
                reliableMarginLeft: function() {
                    return null == n && e(), a
                }
            }))
        }();
        var fe, me, ge = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (fe = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        }, me = function(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || fe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || pt.contains(t.ownerDocument, t) || (s = pt.style(t, e)), n && !dt.pixelMarginRight() && de.test(s) && ue.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
        }) : pe.currentStyle && (fe = function(t) {
            return t.currentStyle
        }, me = function(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || fe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), de.test(s) && !ge.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        });
        var ve = /alpha\([^)]*\)/i,
            ye = /opacity\s*=\s*([^)]*)/i,
            be = /^(none|table(?!-c[ea]).+)/,
            we = new RegExp("^(" + Mt + ")(.*)$", "i"),
            xe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Te = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ce = ["Webkit", "O", "Moz", "ms"],
            Ee = it.createElement("div").style;
        pt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = me(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: dt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = pt.camelCase(e),
                        l = t.style;
                    if (e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = It.exec(n)) && o[1] && (n = h(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (pt.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (t) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = pt.camelCase(e);
                return e = pt.cssProps[a] || (pt.cssProps[a] = j(a) || a), s = pt.cssHooks[e] || pt.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = me(t, e, i)), "normal" === r && e in Te && (r = Te[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), pt.each(["height", "width"], function(t, e) {
            pt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? be.test(pt.css(t, "display")) && 0 === t.offsetWidth ? he(t, xe, function() {
                        return I(t, e, i)
                    }) : I(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && fe(t);
                    return H(t, n, i ? M(t, e, i, dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), dt.opacity || (pt.cssHooks.opacity = {
            get: function(t, e) {
                return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(r.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(r) ? r.replace(ve, o) : r + " " + o)
            }
        }), pt.cssHooks.marginRight = L(dt.reliableMarginRight, function(t, e) {
            return e ? he(t, {
                display: "inline-block"
            }, me, [t, "marginRight"]) : void 0
        }), pt.cssHooks.marginLeft = L(dt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(me(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), pt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            pt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Rt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ue.test(t) || (pt.cssHooks[t + e].set = H)
        }), pt.fn.extend({
            css: function(t, e) {
                return qt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (pt.isArray(e)) {
                        for (i = fe(t), o = e.length; o > s; s++) r[e[s]] = pt.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ft(this) ? pt(this).show() : pt(this).hide()
                })
            }
        }), pt.Tween = R, R.prototype = {
            constructor: R,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (pt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, pt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, pt.fx = R.prototype.init, pt.fx.step = {};
        var Se, ke, Ne = /^(?:toggle|show|hide)$/,
            De = /queueHooks$/;
        pt.Animation = pt.extend(W, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return h(n.elem, t, It.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
                },
                prefilters: [_],
                prefilter: function(t, e) {
                    e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                }
            }), pt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? pt.extend({}, t) : {
                    complete: n || !n && e || pt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !pt.isFunction(e) && e
                };
                return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    pt.isFunction(i.old) && i.old.call(this), i.queue && pt.dequeue(this, i.queue)
                }, i
            }, pt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Ft).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = pt.isEmptyObject(t),
                        r = pt.speed(e, n, i),
                        s = function() {
                            var e = W(this, pt.extend({}, t), r);
                            (o || pt._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = pt.timers,
                            s = pt._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && De.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && pt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = pt._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = pt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, pt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), pt.each(["toggle", "show", "hide"], function(t, e) {
                var n = pt.fn[e];
                pt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, o)
                }
            }), pt.each({
                slideDown: q("show"),
                slideUp: q("hide"),
                slideToggle: q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                pt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), pt.timers = [], pt.fx.tick = function() {
                var t, e = pt.timers,
                    n = 0;
                for (Se = pt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || pt.fx.stop(), Se = void 0
            }, pt.fx.timer = function(t) {
                pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
            }, pt.fx.interval = 13, pt.fx.start = function() {
                ke || (ke = t.setInterval(pt.fx.tick, pt.fx.interval))
            }, pt.fx.stop = function() {
                t.clearInterval(ke), ke = null
            }, pt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pt.fn.delay = function(e, n) {
                return e = pt.fx ? pt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t, e = it.createElement("input"),
                    n = it.createElement("div"),
                    i = it.createElement("select"),
                    o = i.appendChild(it.createElement("option"));
                n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== n.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = o.selected, dt.enctype = !!it.createElement("form").enctype, i.disabled = !0, dt.optDisabled = !o.disabled, e = it.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
            }();
        var Ae = /\r/g;
        pt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = pt.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, pt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : pt.isArray(o) && (o = pt.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)) : void 0
            }
        }), pt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = pt.find.attr(t, "value");
                        return null != e ? e : pt.trim(pt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = pt(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = pt.makeArray(e), s = o.length; s--;)
                            if (i = o[s], pt.inArray(pt.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (t) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), pt.each(["radio", "checkbox"], function() {
            pt.valHooks[this] = {
                set: function(t, e) {
                    return pt.isArray(e) ? t.checked = pt.inArray(pt(t).val(), e) > -1 : void 0
                }
            }, dt.checkOn || (pt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var $e, Le, je = pt.expr.attrHandle,
            Oe = /^(?:checked|selected)$/i,
            He = dt.getSetAttribute,
            Me = dt.input;
        pt.fn.extend({
            attr: function(t, e) {
                return qt(this, pt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    pt.removeAttr(this, t)
                })
            }
        }), pt.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === r && pt.isXMLDoc(t) || (e = e.toLowerCase(), o = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Le : $e)), void 0 !== n ? null === n ? void pt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = pt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(At);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = pt.propFix[n] || n, pt.expr.match.bool.test(n) ? Me && He || !Oe.test(n) ? t[i] = !1 : t[pt.camelCase("default-" + n)] = t[i] = !1 : pt.attr(t, n, ""), t.removeAttribute(He ? n : i)
            }
        }), Le = {
            set: function(t, e, n) {
                return e === !1 ? pt.removeAttr(t, n) : Me && He || !Oe.test(n) ? t.setAttribute(!He && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = je[e] || pt.find.attr;
            Me && He || !Oe.test(e) ? je[e] = function(t, e, i) {
                var o, r;
                return i || (r = je[e], je[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, je[e] = r), o
            } : je[e] = function(t, e, n) {
                return n ? void 0 : t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Me && He || (pt.attrHooks.value = {
            set: function(t, e, n) {
                return pt.nodeName(t, "input") ? void(t.defaultValue = e) : $e && $e.set(t, e, n)
            }
        }), He || ($e = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, je.id = je.name = je.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, pt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: $e.set
        }, pt.attrHooks.contenteditable = {
            set: function(t, e, n) {
                $e.set(t, "" !== e && e, n)
            }
        }, pt.each(["width", "height"], function(t, e) {
            pt.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), dt.style || (pt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ie = /^(?:input|select|textarea|button|object)$/i,
            Re = /^(?:a|area)$/i;
        pt.fn.extend({
            prop: function(t, e) {
                return qt(this, pt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = pt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {}
                })
            }
        }), pt.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, o = pt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = pt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ie.test(t.nodeName) || Re.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), dt.hrefNormalized || pt.each(["href", "src"], function(t, e) {
            pt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), dt.optSelected || (pt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pt.propFix[this.toLowerCase()] = this
        }), dt.enctype || (pt.propFix.enctype = "encoding");
        var Fe = /[\t\r\n\f]/g;
        pt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).addClass(t.call(this, e, z(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = pt.trim(i), o !== a && pt.attr(n, "class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).removeClass(t.call(this, e, z(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (o = z(n), i = 1 === n.nodeType && (" " + o + " ").replace(Fe, " ")) {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            a = pt.trim(i), o !== a && pt.attr(n, "class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(n) {
                    pt(this).toggleClass(t.call(this, n, z(this), e), e)
                }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = pt(this), r = t.match(At) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(void 0 === t || "boolean" === n) && (e = z(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + z(n) + " ").replace(Fe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            pt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), pt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        });
        var qe = t.location,
            Pe = pt.now(),
            _e = /\?/,
            Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pt.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = pt.trim(e + "");
            return o && !pt.trim(o.replace(Be, function(t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : pt.error("Invalid JSON: " + e)
        }, pt.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (t) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), n
        };
        var We = /#.*$/,
            ze = /([?&])_=[^&]*/,
            Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ye = /^(?:GET|HEAD)$/,
            Ve = /^\/\//,
            Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ke = {},
            Je = {},
            Ge = "*/".concat("*"),
            Ze = qe.href,
            tn = Qe.exec(Ze.toLowerCase()) || [];
        pt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ze,
                type: "GET",
                isLocal: Ue.test(tn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ge,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": pt.parseJSON,
                    "text xml": pt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Y(Y(t, pt.ajaxSettings), e) : Y(pt.ajaxSettings, t)
            },
            ajaxPrefilter: X(Ke),
            ajaxTransport: X(Je),
            ajax: function(e, n) {
                function i(e, n, i, o) {
                    var r, d, y, b, x, C = n;
                    2 !== w && (w = 2, l && t.clearTimeout(l), u = void 0, a = o || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (b = V(h, T, i)), b = Q(h, b, T, r), r ? (h.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (pt.lastModified[s] = x), x = T.getResponseHeader("etag"), x && (pt.etag[s] = x)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", r ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [T, h, r ? d : y]), g.fireWith(p, [T, C]), c && (f.trigger("ajaxComplete", [T, h]), --pt.active || pt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, s, a, l, c, u, d, h = pt.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                    m = pt.Deferred(),
                    g = pt.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; e = Xe.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return u && u.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, h.url = ((e || h.url || Ze) + "").replace(We, "").replace(Ve, tn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pt.trim(h.dataType || "*").toLowerCase().match(At) || [""], null == h.crossDomain && (o = Qe.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pt.param(h.data, h.traditional)), U(Ke, h, n, T), 2 === w) return T;
                c = pt.event && h.global, c && 0 === pt.active++ && pt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ye.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (_e.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = ze.test(s) ? s.replace(ze, "$1_=" + Pe++) : s + (_e.test(s) ? "&" : "?") + "_=" + Pe++)), h.ifModified && (pt.lastModified[s] && T.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && T.setRequestHeader("If-None-Match", pt.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ge + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) T.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (h.beforeSend.call(p, T, h) === !1 || 2 === w)) return T.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[r](h[r]);
                if (u = U(Je, h, n, T)) {
                    if (T.readyState = 1, c && f.trigger("ajaxSend", [T, h]), 2 === w) return T;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1, u.send(y, i)
                    } catch (t) {
                        if (!(2 > w)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, n) {
                return pt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return pt.get(t, void 0, e, "script")
            }
        }), pt.each(["get", "post"], function(t, e) {
            pt[e] = function(t, n, i, o) {
                return pt.isFunction(n) && (o = o || i, i = n, n = void 0), pt.ajax(pt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, pt.isPlainObject(t) && t))
            }
        }), pt._evalUrl = function(t) {
            return pt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, pt.fn.extend({
            wrapAll: function(t) {
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return pt.isFunction(t) ? this.each(function(e) {
                    pt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = pt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = pt.isFunction(t);
                return this.each(function(n) {
                    pt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), pt.expr.filters.hidden = function(t) {
            return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
        }, pt.expr.filters.visible = function(t) {
            return !pt.expr.filters.hidden(t)
        };
        var en = /%20/g,
            nn = /\[\]$/,
            on = /\r?\n/g,
            rn = /^(?:submit|button|image|reset|file)$/i,
            sn = /^(?:input|select|textarea|keygen)/i;
        pt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = pt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) G(n, t[n], e, o);
            return i.join("&").replace(en, "+")
        }, pt.fn.extend({
            serialize: function() {
                return pt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !pt(this).is(":disabled") && sn.test(this.nodeName) && !rn.test(t) && (this.checked || !Pt.test(t))
                }).map(function(t, e) {
                    var n = pt(this).val();
                    return null == n ? null : pt.isArray(n) ? pt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(on, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(on, "\r\n")
                    }
                }).get()
            }
        }), pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
        } : Z;
        var an = 0,
            ln = {},
            cn = pt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in ln) ln[t](void 0, !0)
        }), dt.cors = !!cn && "withCredentials" in cn, cn = dt.ajax = !!cn, cn && pt.ajaxTransport(function(e) {
            if (!e.crossDomain || dt.cors) {
                var n;
                return {
                    send: function(i, o) {
                        var r, s = e.xhr(),
                            a = ++an;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) s[r] = e.xhrFields[r];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                        s.send(e.hasContent && e.data || null), n = function(t, i) {
                            var r, l, c;
                            if (n && (i || 4 === s.readyState))
                                if (delete ln[a], n = void 0, s.onreadystatechange = pt.noop, i) 4 !== s.readyState && s.abort();
                                else {
                                    c = {}, r = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                    try {
                                        l = s.statusText
                                    } catch (t) {
                                        l = ""
                                    }
                                    r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                                }
                            c && o(r, l, c, s.getAllResponseHeaders())
                        }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }), pt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return pt.globalEval(t), t
                }
            }
        }), pt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), pt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = it.head || pt("head")[0] || it.documentElement;
                return {
                    send: function(i, o) {
                        e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var un = [],
            dn = /(=)\?(?=&|$)|\?\?/;
        pt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = un.pop() || pt.expando + "_" + Pe++;
                return this[t] = !0, t
            }
        }), pt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(dn, "$1" + o) : e.jsonp !== !1 && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || pt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? pt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, un.push(o)), s && pt.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), dt.createHTMLDocument = function() {
            if (!it.implementation.createHTMLDocument) return !1;
            var t = it.implementation.createHTMLDocument("");
            return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
        }(), pt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || (dt.createHTMLDocument ? it.implementation.createHTMLDocument("") : it);
            var i = Tt.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = v([t], e, o), o && o.length && pt(o).remove(), pt.merge([], i.childNodes))
        };
        var hn = pt.fn.load;
        pt.fn.load = function(t, e, n) {
            if ("string" != typeof t && hn) return hn.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && pt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(s, r || [t.responseText, e, t])
                })
            }), this
        }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            pt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), pt.expr.filters.animated = function(t) {
            return pt.grep(pt.timers, function(e) {
                return t === e.elem
            }).length
        }, pt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, c, u = pt.css(t, "position"),
                    d = pt(t),
                    h = {};
                "static" === u && (t.style.position = "relative"), a = d.offset(), r = pt.css(t, "top"), l = pt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && pt.inArray("auto", [r, l]) > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, pt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    pt.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, pt.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = et(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                        e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - pt.css(i, "marginTop", !0),
                        left: e.left - n.left - pt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                    return t || pe
                })
            }
        }), pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            pt.fn[t] = function(i) {
                return qt(this, function(t, i, o) {
                    var r = et(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? pt(r).scrollLeft() : o, n ? o : pt(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), pt.each(["top", "left"], function(t, e) {
            pt.cssHooks[e] = L(dt.pixelPosition, function(t, n) {
                return n ? (n = me(t, e), de.test(n) ? pt(t).position()[e] + "px" : n) : void 0
            })
        }), pt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            pt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                pt.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return qt(this, function(e, n, i) {
                        var o;
                        return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? pt.css(e, n, s) : pt.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), pt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), pt.fn.size = function() {
            return this.length
        }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return pt
        });
        var pn = t.jQuery,
            fn = t.$;
        return pt.noConflict = function(e) {
            return t.$ === pt && (t.$ = fn), e && t.jQuery === pt && (t.jQuery = pn), pt
        }, e || (t.jQuery = t.$ = pt), pt
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, r.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, h);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            c = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function() {
    function t() {
        k.keyboardSupport && h("keydown", o)
    }

    function e() {
        if (!$ && document.body) {
            $ = !0;
            var e = document.body,
                n = document.documentElement,
                i = window.innerHeight,
                o = e.scrollHeight;
            if (L = document.compatMode.indexOf("CSS") >= 0 ? n : e, x = e, t(), top != self) D = !0;
            else if (o > i && (e.offsetHeight <= i || n.offsetHeight <= i)) {
                var r = !1,
                    s = function() {
                        r || n.scrollHeight == document.height || (r = !0, setTimeout(function() {
                            n.style.height = document.height + "px", r = !1
                        }, 500))
                    };
                n.style.oldHeight = n.style.height, n.style.height = "auto", setTimeout(s, 10);
                var a = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if (T = new B(s), T.observe(e, a), L.offsetHeight <= i) {
                    var l = document.createElement("div");
                    l.style.clear = "both", e.appendChild(l)
                }
            }
            k.fixedBackground || N || (e.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
        }
    }

    function n(t, e, n, i) {
        if (i || (i = 1e3), f(e, n), 1 != k.accelerationMax) {
            var o = Date.now(),
                r = o - R;
            if (r < k.accelerationDelta) {
                var s = (1 + 50 / r) / 2;
                s > 1 && (s = Math.min(s, k.accelerationMax), e *= s, n *= s)
            }
            R = Date.now()
        }
        if (M.push({
                x: e,
                y: n,
                lastX: e < 0 ? .99 : -.99,
                lastY: n < 0 ? .99 : -.99,
                start: Date.now()
            }), !I) {
            var a = t === document.body,
                l = function(o) {
                    for (var r = Date.now(), s = 0, c = 0, u = 0; u < M.length; u++) {
                        var d = M[u],
                            h = r - d.start,
                            p = h >= k.animationTime,
                            f = p ? 1 : h / k.animationTime;
                        k.pulseAlgorithm && (f = w(f));
                        var m = d.x * f - d.lastX >> 0,
                            g = d.y * f - d.lastY >> 0;
                        s += m, c += g, d.lastX += m, d.lastY += g, p && (M.splice(u, 1), u--)
                    }
                    a ? window.scrollBy(s, c) : (s && (t.scrollLeft += s), c && (t.scrollTop += c)), e || n || (M = []), M.length ? _(l, t, i / k.frameRate + 1) : I = !1
                };
            _(l, t, 0), I = !0
        }
    }

    function i(t) {
        $ || e();
        var i = t.target,
            o = l(i);
        if (!o || t.defaultPrevented || t.ctrlKey) return !0;
        if (p(x, "embed") || p(i, "embed") && /\.pdf/i.test(i.src) || p(x, "object")) return !0;
        var r = -t.wheelDeltaX || t.deltaX || 0,
            a = -t.wheelDeltaY || t.deltaY || 0;
        return O && (t.wheelDeltaX && g(t.wheelDeltaX, 120) && (r = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && g(t.wheelDeltaY, 120) && (a = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), r || a || (a = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, a *= 40), !(k.touchpadSupport || !m(a)) || (Math.abs(r) > 1.2 && (r *= k.stepSize / 120), Math.abs(a) > 1.2 && (a *= k.stepSize / 120), n(o, r, a), t.preventDefault(), void s())
    }

    function o(t) {
        var e = t.target,
            i = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== H.spacebar,
            o = /^(textarea|select|embed|object)$/i,
            r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (o.test(e.nodeName) || p(e, "input") && !r.test(e.type) || p(x, "video") || y(t) || e.isContentEditable || t.defaultPrevented || i) return !0;
        if (p(e, "button") && t.keyCode === H.spacebar) return !0;
        var a, c = 0,
            u = 0,
            d = l(x),
            h = d.clientHeight;
        switch (d == document.body && (h = window.innerHeight), t.keyCode) {
            case H.up:
                u = -k.arrowScroll;
                break;
            case H.down:
                u = k.arrowScroll;
                break;
            case H.spacebar:
                a = t.shiftKey ? 1 : -1, u = -a * h * .9;
                break;
            case H.pageup:
                u = .9 * -h;
                break;
            case H.pagedown:
                u = .9 * h;
                break;
            case H.home:
                u = -d.scrollTop;
                break;
            case H.end:
                var f = d.scrollHeight - d.scrollTop - h;
                u = f > 0 ? f + 10 : 0;
                break;
            case H.left:
                c = -k.arrowScroll;
                break;
            case H.right:
                c = k.arrowScroll;
                break;
            default:
                return !0
        }
        n(d, c, u), t.preventDefault(), s()
    }

    function r(t) {
        x = t.target
    }

    function s() {
        clearTimeout(C), C = setInterval(function() {
            q = {}
        }, 1e3)
    }

    function a(t, e) {
        for (var n = t.length; n--;) q[F(t[n])] = e;
        return e
    }

    function l(t) {
        var e = [],
            n = document.body,
            i = L.scrollHeight;
        do {
            var o = q[F(t)];
            if (o) return a(e, o);
            if (e.push(t), i === t.scrollHeight) {
                var r = u(L) && u(n),
                    s = r || d(L);
                if (D && c(L) || !D && s) return a(e, W())
            } else if (c(t) && d(t)) return a(e, t)
        } while (t = t.parentElement)
    }

    function c(t) {
        return t.clientHeight + 10 < t.scrollHeight
    }

    function u(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "hidden" !== e
    }

    function d(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "scroll" === e || "auto" === e
    }

    function h(t, e, n) {
        window.addEventListener(t, e, n || !1)
    }

    function p(t, e) {
        return (t.nodeName || "").toLowerCase() === e.toLowerCase()
    }

    function f(t, e) {
        t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, A.x === t && A.y === e || (A.x = t, A.y = e, M = [], R = 0)
    }

    function m(t) {
        if (t) return j.length || (j = [t, t, t]), t = Math.abs(t), j.push(t), j.shift(), clearTimeout(E), E = setTimeout(function() {
            window.localStorage && (localStorage.SS_deltaBuffer = j.join(","))
        }, 1e3), !v(120) && !v(100)
    }

    function g(t, e) {
        return Math.floor(t / e) == t / e
    }

    function v(t) {
        return g(j[0], t) && g(j[1], t) && g(j[2], t)
    }

    function y(t) {
        var e = t.target,
            n = !1;
        if (document.URL.indexOf("www.youtube.com/watch") != -1)
            do
                if (n = e.classList && e.classList.contains("html5-video-controls")) break;
        while (e = e.parentNode);
        return n
    }

    function b(t) {
        var e, n, i;
        return t *= k.pulseScale, t < 1 ? e = t - (1 - Math.exp(-t)) : (n = Math.exp(-1), t -= 1, i = 1 - Math.exp(-t), e = n + i * (1 - n)), e * k.pulseNormalize
    }

    function w(t) {
        return t >= 1 ? 1 : t <= 0 ? 0 : (1 == k.pulseNormalize && (k.pulseNormalize /= b(1)), b(t))
    }
    if (navigator.appVersion.indexOf("Win") != -1) {
        var x, T, C, E, S = {
                frameRate: 150,
                animationTime: 500,
                stepSize: 150,
                pulseAlgorithm: !0,
                pulseScale: 6,
                pulseNormalize: 1,
                accelerationDelta: 20,
                accelerationMax: 1,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !0,
                fixedBackground: !0,
                excluded: ""
            },
            k = S,
            N = !1,
            D = !1,
            A = {
                x: 0,
                y: 0
            },
            $ = !1,
            L = document.documentElement,
            j = [],
            O = /^Mac/.test(navigator.platform),
            H = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            k = S,
            M = [],
            I = !1,
            R = Date.now(),
            F = function() {
                var t = 0;
                return function(e) {
                    return e.uniqueID || (e.uniqueID = t++)
                }
            }(),
            q = {};
        window.localStorage && localStorage.SS_deltaBuffer && (j = localStorage.SS_deltaBuffer.split(","));
        var P, _ = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t, e, n) {
                    window.setTimeout(t, n || 1e3 / 60)
                }
            }(),
            B = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            W = function() {
                var t;
                return function() {
                    if (!t) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var n = document.body.scrollTop;
                        document.documentElement.scrollTop;
                        window.scrollBy(0, 1), t = document.body.scrollTop != n ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(e)
                    }
                    return t
                }
            }();
        "onwheel" in document.createElement("div") ? P = "wheel" : "onmousewheel" in document.createElement("div") && (P = "mousewheel"), P && (h(P, i), h("mousedown", r), h("load", e))
    }
}(),
function(t, e, n, i) {
    "use strict";

    function o(e, n) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var i = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in i) null === i[o] && delete i[o];
        t.extend(this, a, n, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var r = "parallax",
        s = 30,
        a = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    o.prototype.transformSupport = function(t) {
        for (var o = n.createElement("div"), r = !1, s = null, a = !1, l = null, c = null, u = 0, d = this.vendors.length; u < d; u++)
            if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== i) {
                r = !0;
                break
            }
        switch (t) {
            case "2D":
                a = r;
                break;
            case "3D":
                if (r) {
                    var h = n.body || n.createElement("body"),
                        p = n.documentElement,
                        f = p.style.overflow;
                    n.body || (p.style.overflow = "hidden", p.appendChild(h), h.style.overflow = "hidden", h.style.background = ""), h.appendChild(o), o.style[c] = "translate3d(1px,1px,1px)", s = e.getComputedStyle(o).getPropertyValue(l), a = s !== i && s.length > 0 && "none" !== s, p.style.overflow = f, h.removeChild(o)
                }
        }
        return a
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({
            position: "relative"
        }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, n) {
            this.depths.push(t(n).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function() {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function(t, e) {
        this.calibrateX = t === i ? this.calibrateX : t, this.calibrateY = e === i ? this.calibrateY : e
    }, o.prototype.invert = function(t, e) {
        this.invertX = t === i ? this.invertX : t, this.invertY = e === i ? this.invertY : e
    }, o.prototype.friction = function(t, e) {
        this.frictionX = t === i ? this.frictionX : t, this.frictionY = e === i ? this.frictionY : e
    }, o.prototype.scalar = function(t, e) {
        this.scalarX = t === i ? this.scalarX : t, this.scalarY = e === i ? this.scalarY : e
    }, o.prototype.limit = function(t, e) {
        this.limitX = t === i ? this.limitX : t, this.limitY = e === i ? this.limitY : e
    }, o.prototype.origin = function(t, e) {
        this.originX = t === i ? this.originX : t, this.originY = e === i ? this.originY : e
    }, o.prototype.clamp = function(t, e, n) {
        return t = Math.max(t, e), t = Math.min(t, n)
    }, o.prototype.css = function(e, n, o) {
        var r = this.propertyCache[n];
        if (!r)
            for (var s = 0, a = this.vendors.length; s < a; s++)
                if (r = null !== this.vendors[s] ? t.camelCase(this.vendors[s][1] + "-" + n) : n, e.style[r] !== i) {
                    this.propertyCache[n] = r;
                    break
                }
        e.style[r] = o
    }, o.prototype.accelerate = function(t) {
        for (var e = 0, n = t.length; e < n; e++) {
            var i = t[e];
            this.css(i, "transform", "translate3d(0,0,0)"), this.css(i, "transform-style", "preserve-3d"), this.css(i, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function(t, e, n) {
        e += "px", n += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + n + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + n + ")") : (t.style.left = e, t.style.top = n)
    }, o.prototype.onOrientationTimer = function(t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function(t) {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function(t) {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
            e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var n = 0, i = this.$layers.length; n < i; n++) {
            var o = this.depths[n],
                r = this.$layers[n],
                s = this.vx * o * (this.invertX ? -1 : 1),
                a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(r, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var n = (t.beta || 0) / s,
                i = (t.gamma || 0) / s,
                o = e.innerHeight > e.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = n, this.cy = i), this.ix = n, this.iy = i
        }
    }, o.prototype.onMouseMove = function(t) {
        var e = t.clientX,
            n = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), n = Math.max(n, this.ey), n = Math.min(n, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (n - this.wcy) / this.wry)
    };
    var l = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[r] = function(e) {
        var n = arguments;
        return this.each(function() {
            var i = t(this),
                s = i.data(r);
            s || (s = new o(this, e), i.data(r, s)), l[e] && s[e].apply(s, Array.prototype.slice.call(n, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
        var i = (new Date).getTime(),
            o = Math.max(0, 16 - (i - t)),
            r = window.setTimeout(function() {
                e(i + o)
            }, o);
        return t = i + o, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(),
function() {
    var t, e, n, i, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o, r;
            for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)
                if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r, s;
            for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
                if (i = s[n], i === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() {
                        var t, e, n, i;
                        for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            i = [];
            for (n in e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, s, a;
                for (s = this.vendors, a = [], e = 0, i = s.length; i > e; e++) r = s[e], a.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return a
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, r, s, a, l;
            for (a = i(t), s = a.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) l = r[n], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this);