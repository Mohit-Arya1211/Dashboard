(function () {

	var data = {
		"resource": {
			"version": "1",
			"macros": [],
			"tags": [],
			"predicates": [],
			"rules": []
		},
		"runtime": [
			[],
			[]
		]


	};
	var da, ea = this,
		fa = /^[\w+/_-]+[=]{0,2}$/,
		ia = null,
		la = function (a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.Xg = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.Gg = function (a, c, g) {
				for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d)
			}
		};
	var ma = function () {},
		na = function (a) {
			return "function" == typeof a
		},
		f = function (a) {
			return "string" == typeof a
		},
		oa = function (a) {
			return "number" == typeof a && !isNaN(a)
		},
		qa = function (a) {
			return "[object Array]" == Object.prototype.toString.call(Object(a))
		},
		n = function (a, b) {
			if (Array.prototype.indexOf) {
				var c = a.indexOf(b);
				return "number" == typeof c ? c : -1
			}
			for (var d = 0; d < a.length; d++)
				if (a[d] === b) return d;
			return -1
		},
		ra = function (a, b) {
			if (a && qa(a))
				for (var c = 0; c < a.length; c++)
					if (a[c] && b(a[c])) return a[c]
		},
		sa = function (a, b) {
			if (!oa(a) ||
				!oa(b) || a > b) a = 0, b = 2147483647;
			return Math.floor(Math.random() * (b - a + 1) + a)
		},
		ta = function (a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
		},
		ua = function (a) {
			return Math.round(Number(a)) || 0
		},
		va = function (a) {
			return "false" == String(a).toLowerCase() ? !1 : !!a
		},
		wa = function (a) {
			var b = [];
			if (qa(a))
				for (var c = 0; c < a.length; c++) b.push(String(a[c]));
			return b
		},
		xa = function (a) {
			return a ? a.replace(/^\s+|\s+$/g, "") : ""
		},
		ya = function () {
			return (new Date).getTime()
		},
		za = function () {
			this.prefix = "gtm.";
			this.values = {}
		};
	za.prototype.set = function (a, b) {
		this.values[this.prefix + a] = b
	};
	za.prototype.get = function (a) {
		return this.values[this.prefix + a]
	};
	za.prototype.contains = function (a) {
		return void 0 !== this.get(a)
	};
	var Ba = function (a, b, c) {
			return a && a.hasOwnProperty(b) ? a[b] : c
		},
		Ca = function (a) {
			var b = !1;
			return function () {
				if (!b) try {
					a()
				} catch (c) {}
				b = !0
			}
		},
		Da = function (a, b) {
			for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
		},
		Fa = function (a) {
			for (var b in a)
				if (a.hasOwnProperty(b)) return !0;
			return !1
		},
		Ga = function (a, b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
			return c
		};
	/*
	 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
	var Ha = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
		Ia = function (a) {
			if (null == a) return String(a);
			var b = Ha.exec(Object.prototype.toString.call(Object(a)));
			return b ? b[1].toLowerCase() : "object"
		},
		Ja = function (a, b) {
			return Object.prototype.hasOwnProperty.call(Object(a), b)
		},
		Ka = function (a) {
			if (!a || "object" != Ia(a) || a.nodeType || a == a.window) return !1;
			try {
				if (a.constructor && !Ja(a, "constructor") && !Ja(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			for (var b in a);
			return void 0 ===
				b || Ja(a, b)
		},
		t = function (a, b) {
			var c = b || ("array" == Ia(a) ? [] : {}),
				d;
			for (d in a)
				if (Ja(a, d)) {
					var e = a[d];
					"array" == Ia(e) ? ("array" != Ia(c[d]) && (c[d] = []), c[d] = t(e, c[d])) : Ka(e) ? (Ka(c[d]) || (c[d] = {}), c[d] = t(e, c[d])) : c[d] = e
				}
			return c
		};
	var x = window,
		y = document,
		La = navigator,
		Ma = y.currentScript && y.currentScript.src,
		Na = function (a, b) {
			var c = x[a];
			x[a] = void 0 === c ? b : c;
			return x[a]
		},
		Oa = function (a, b) {
			b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
				a.readyState in {
					loaded: 1,
					complete: 1
				} && (a.onreadystatechange = null, b())
			})
		},
		Pa = function (a, b, c) {
			var d = y.createElement("script");
			d.type = "text/javascript";
			d.async = !0;
			d.src = a;
			Oa(d, b);
			c && (d.onerror = c);
			var e;
			if (null === ia) b: {
				var g = ea.document,
					h = g.querySelector && g.querySelector("script[nonce]");
				if (h) {
					var k = h.nonce || h.getAttribute("nonce");
					if (k && fa.test(k)) {
						ia = k;
						break b
					}
				}
				ia = ""
			}
			e = ia;
			e && d.setAttribute("nonce", e);
			var l = y.getElementsByTagName("script")[0] || y.body || y.head;
			l.parentNode.insertBefore(d, l);
			return d
		},
		Qa = function () {
			if (Ma) {
				var a = Ma.toLowerCase();
				if (0 === a.indexOf("https://")) return 2;
				if (0 === a.indexOf("http://")) return 3
			}
			return 1
		},
		Ra = function (a, b) {
			var c = y.createElement("iframe");
			c.height = "0";
			c.width = "0";
			c.style.display = "none";
			c.style.visibility = "hidden";
			var d = y.body && y.body.lastChild ||
				y.body || y.head;
			d.parentNode.insertBefore(c, d);
			Oa(c, b);
			void 0 !== a && (c.src = a);
			return c
		},
		Sa = function (a, b, c) {
			var d = new Image(1, 1);
			d.onload = function () {
				d.onload = null;
				b && b()
			};
			d.onerror = function () {
				d.onerror = null;
				c && c()
			};
			d.src = a;
			return d
		},
		A = function (a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		Ta = function (a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
		},
		C = function (a) {
			x.setTimeout(a, 0)
		},
		Va = function (a) {
			var b =
				y.getElementById(a);
			if (b && Ua(b, "id") != a)
				for (var c = 1; c < document.all[a].length; c++)
					if (Ua(document.all[a][c], "id") == a) return document.all[a][c];
			return b
		},
		Ua = function (a, b) {
			return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
		},
		Wa = function (a) {
			var b = a.innerText || a.textContent || "";
			b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
			b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
			return b
		},
		Xa = function (a) {
			var b = y.createElement("div");
			b.innerHTML = "A<div>" + a + "</div>";
			b = b.lastChild;
			for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
			return c
		},
		Ya = function (a, b, c) {
			c = c || 100;
			for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
			for (var g = a, h = 0; g && h <= c; h++) {
				if (d[String(g.tagName).toLowerCase()]) return g;
				g = g.parentElement
			}
			return null
		};
	var Za = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	var $a = /:[0-9]+$/,
		cb = function (a, b, c) {
			for (var d = a.split("&"), e = 0; e < d.length; e++) {
				var g = d[e].split("=");
				if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
					var h = g.slice(1).join("=");
					return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
				}
			}
		},
		D = function (a, b, c, d, e) {
			b && (b = String(b).toLowerCase());
			if ("protocol" === b || "port" === b) a.protocol = db(a.protocol) || db(x.location.protocol);
			"port" === b ? a.port = String(Number(a.hostname ? a.port : x.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
				(a.hostname = (a.hostname || x.location.hostname).replace($a, "").toLowerCase());
			var g = b,
				h, k = db(a.protocol);
			g && (g = String(g).toLowerCase());
			switch (g) {
				case "url_no_fragment":
					h = eb(a);
					break;
				case "protocol":
					h = k;
					break;
				case "host":
					h = a.hostname.replace($a, "").toLowerCase();
					if (c) {
						var l = /^www\d*\./.exec(h);
						l && l[0] && (h = h.substr(l[0].length))
					}
					break;
				case "port":
					h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
					break;
				case "path":
					h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
					var m = h.split("/");
					0 <=
						n(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
					h = m.join("/");
					break;
				case "query":
					h = a.search.replace("?", "");
					e && (h = cb(h, e, void 0));
					break;
				case "extension":
					var p = a.pathname.split(".");
					h = 1 < p.length ? p[p.length - 1] : "";
					h = h.split("/")[0];
					break;
				case "fragment":
					h = a.hash.replace("#", "");
					break;
				default:
					h = a && a.href
			}
			return h
		},
		db = function (a) {
			return a ? a.replace(":", "").toLowerCase() : ""
		},
		eb = function (a) {
			var b = "";
			if (a && a.href) {
				var c = a.href.indexOf("#");
				b = 0 > c ? a.href : a.href.substr(0, c)
			}
			return b
		},
		fb = function (a) {
			var b = y.createElement("a");
			a && (b.href = a);
			var c = b.pathname;
			"/" !== c[0] && (c = "/" + c);
			var d = b.hostname.replace($a, "");
			return {
				href: b.href,
				protocol: b.protocol,
				host: b.host,
				hostname: d,
				pathname: c,
				search: b.search,
				hash: b.hash,
				port: b.port
			}
		};
	var gb = function (a, b, c) {
			for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
				var h = e[g].split("="),
					k = h[0].replace(/^\s*|\s*$/g, "");
				if (k && k == a) {
					var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
					l && c && (l = decodeURIComponent(l));
					d.push(l)
				}
			}
			return d
		},
		jb = function (a, b, c, d) {
			var e = hb(a, d);
			if (1 === e.length) return e[0].id;
			if (0 !== e.length) {
				e = ib(e, function (a) {
					return a.yb
				}, b);
				if (1 === e.length) return e[0].id;
				e = ib(e, function (a) {
					return a.Ta
				}, c);
				return e[0] ? e[0].id : void 0
			}
		};

	function kb(a, b, c) {
		var d = document.cookie;
		document.cookie = a;
		var e = document.cookie;
		return d != e || void 0 != c && 0 <= gb(b, e).indexOf(c)
	}
	var nb = function (a, b, c, d, e, g) {
		d = d || "auto";
		var h = {
			path: c || "/"
		};
		e && (h.expires = e);
		"none" !== d && (h.domain = d);
		var k;
		a: {
			var l = b,
				m;
			if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
			else {
				g && (l = encodeURIComponent(l));
				var p = l;
				p && 1200 < p.length && (p = p.substring(0, 1200));
				l = p;
				m = a + "=" + l
			}
			var q = void 0,
				r = void 0,
				w;
			for (w in h)
				if (h.hasOwnProperty(w)) {
					var v = h[w];
					if (null != v) switch (w) {
						case "secure":
							v && (m += "; secure");
							break;
						case "domain":
							q = v;
							break;
						default:
							"path" == w && (r = v), "expires" == w && v instanceof Date && (v =
								v.toUTCString()), m += "; " + w + "=" + v
					}
				}
			if ("auto" === q) {
				for (var u = lb(), z = 0; z < u.length; ++z) {
					var E = "none" != u[z] ? u[z] : void 0;
					if (!mb(E, r) && kb(m + (E ? "; domain=" + E : ""), a, l)) {
						k = !0;
						break a
					}
				}
				k = !1
			} else q && "none" != q && (m += "; domain=" + q),
			k = !mb(q, r) && kb(m, a, l)
		}
		return k
	};

	function ib(a, b, c) {
		for (var d = [], e = [], g, h = 0; h < a.length; h++) {
			var k = a[h],
				l = b(k);
			l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
		}
		return 0 < d.length ? d : e
	}

	function hb(a, b) {
		for (var c = [], d = gb(a), e = 0; e < d.length; e++) {
			var g = d[e].split("."),
				h = g.shift();
			if (!b || -1 !== b.indexOf(h)) {
				var k = g.shift();
				k && (k = k.split("-"), c.push({
					id: g.join("."),
					yb: 1 * k[0] || 1,
					Ta: 1 * k[1] || 1
				}))
			}
		}
		return c
	}
	var ob = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
		pb = /(^|\.)doubleclick\.net$/i,
		mb = function (a, b) {
			return pb.test(document.location.hostname) || "/" === b && ob.test(a)
		},
		lb = function () {
			var a = [],
				b = document.location.hostname.split(".");
			if (4 === b.length) {
				var c = b[b.length - 1];
				if (parseInt(c, 10).toString() === c) return ["none"]
			}
			for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
			a.push("none");
			return a
		};
	var Lb = [],
		Mb = [],
		Nb = [],
		Ob = [],
		Pb = [],
		Qb = {},
		Rb, Sb, Tb, Ub = function (a, b) {
			var c = {};
			c["function"] = "__" + a;
			for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
			return c
		},
		Vb = function (a, b) {
			var c = a["function"];
			if (!c) throw Error("Error: No function name given for function call.");
			var d = !!Qb[c],
				e = {},
				g;
			for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
			return d ? Qb[c](e) : (void 0)(c, e, b)
		},
		Xb = function (a, b, c, d) {
			c = c || [];
			d = d || ma;
			var e = {},
				g;
			for (g in a) a.hasOwnProperty(g) && (e[g] = Wb(a[g], b,
				c, d));
			return e
		},
		Yb = function (a) {
			var b = a["function"];
			if (!b) throw "Error: No function name given for function call.";
			var c = Qb[b];
			return c ? c.b || 0 : 0
		},
		Wb = function (a, b, c, d) {
			if (qa(a)) {
				var e;
				switch (a[0]) {
					case "function_id":
						return a[1];
					case "list":
						e = [];
						for (var g = 1; g < a.length; g++) e.push(Wb(a[g], b, c, d));
						return e;
					case "macro":
						var h = a[1];
						if (c[h]) return;
						var k = Lb[h];
						if (!k || b(k)) return;
						c[h] = !0;
						try {
							var l = Xb(k, b, c, d);
							e = Vb(l, d);
							Tb && (e = Tb.ff(e, l))
						} catch (E) {
							d(E, h), e = !1
						}
						c[h] = !1;
						return e;
					case "map":
						e = {};
						for (var m = 1; m < a.length; m +=
							2) e[Wb(a[m], b, c, d)] = Wb(a[m + 1], b, c, d);
						return e;
					case "template":
						e = [];
						for (var p = !1, q = 1; q < a.length; q++) {
							var r = Wb(a[q], b, c, d);
							Sb && (p = p || r === Sb.ob);
							e.push(r)
						}
						return Sb && p ? Sb.kf(e) : e.join("");
					case "escape":
						e = Wb(a[1], b, c, d);
						if (Sb && qa(a[1]) && "macro" === a[1][0] && Sb.Nf(a)) return Sb.Yf(e);
						e = String(e);
						for (var w = 2; w < a.length; w++) qb[a[w]] && (e = qb[a[w]](e));
						return e;
					case "tag":
						var v = a[1];
						if (!Ob[v]) throw Error("Unable to resolve tag reference " + v + ".");
						return e = {
							wd: a[2],
							index: v
						};
					case "zb":
						var u = {
							arg0: a[2],
							arg1: a[3],
							ignore_case: a[5]
						};
						u["function"] = a[1];
						var z = Zb(u, b, c, d);
						a[4] && (z = !z);
						return z;
					default:
						throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
				}
			}
			return a
		},
		Zb = function (a, b, c, d) {
			try {
				return Rb(Xb(a, b, c, d))
			} catch (e) {
				JSON.stringify(a)
			}
			return null
		};
	var $b = null,
		cc = function (a, b) {
			function c(a) {
				for (var b = 0; b < a.length; b++) e[a[b]] = !0
			}
			var d = [],
				e = [];
			$b = ac(a, b || function () {});
			for (var g = 0; g < Mb.length; g++) {
				var h = Mb[g],
					k = bc(h);
				if (k) {
					for (var l = h.add || [], m = 0; m < l.length; m++) d[l[m]] = !0;
					c(h.block || [])
				} else null === k && c(h.block || [])
			}
			for (var p = [], q = 0; q < Ob.length; q++) d[q] && !e[q] && (p[q] = !0);
			return p
		},
		bc = function (a) {
			for (var b = a["if"] || [], c = 0; c < b.length; c++) {
				var d = $b(b[c]);
				if (!d) return null === d ? null : !1
			}
			for (var e = a.unless || [], g = 0; g < e.length; g++) {
				var h = $b(e[g]);
				if (null ===
					h) return null;
				if (h) return !1
			}
			return !0
		},
		ac = function (a, b) {
			var c = [];
			return function (d) {
				void 0 === c[d] && (c[d] = Zb(Nb[d], a, void 0, b));
				return c[d]
			}
		};
	/*
	 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

	var H = {},
		K = null,
		pc = Math.random();
	H.m = "UA-23581568-13";
	H.sb = "3b2";
	var qc = "www.googletagmanager.com/gtm.js";
	qc = "www.googletagmanager.com/gtag/js";
	var rc = qc,
		sc = null,
		tc = null,
		uc = null,
		vc = "//www.googletagmanager.com/a?id=" + H.m + "&cv=1",
		wc = {},
		xc = {},
		yc = function () {
			var a = K.sequence || 0;
			K.sequence = a + 1;
			return a
		};
	var O = function (a, b, c, d) {
			return (2 === zc() || d || "http:" != x.location.protocol ? a : b) + c
		},
		zc = function () {
			var a = Qa(),
				b;
			if (1 === a) a: {
				var c = rc;c = c.toLowerCase();
				for (var d = "https://" + c, e = "http://" + c, g = 1, h = y.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
					var l = h[k].src;
					if (l) {
						l = l.toLowerCase();
						if (0 === l.indexOf(e)) {
							b = 3;
							break a
						}
						1 === g && 0 === l.indexOf(d) && (g = 2)
					}
				}
				b = g
			}
			else b = a;
			return b
		};
	var Ac = !1;
	var Bc = function (a, b, c, d) {
		if (c) {
			d = d || {};
			var e = x._googWcmImpl || function () {
				e.q = e.q || [];
				e.q.push(arguments)
			};
			x._googWcmImpl = e;
			void 0 === x._googWcmAk && (x._googWcmAk = a);
			Ac ? d.ya && C(d.ya) : (Pa(O("https://", "http://", "www.gstatic.com/wcm/loader.js"), d.ya, d.Ld), Ac = !0);
			var g = {
				ak: a,
				cl: b
			};
			void 0 === d.Yd && (g.autoreplace = c);
			e(2, d.Yd, g, c, 0, new Date, d.xg)
		}
	};
	var P = function () {
		var a = function (a) {
			return {
				toString: function () {
					return a
				}
			}
		};
		return {
			Vc: a("convert_case_to"),
			Wc: a("convert_false_to"),
			Xc: a("convert_null_to"),
			Yc: a("convert_true_to"),
			Zc: a("convert_undefined_to"),
			qa: a("function"),
			ye: a("instance_name"),
			ze: a("live_only"),
			Ae: a("malware_disabled"),
			Cg: a("original_vendor_template_id"),
			Be: a("once_per_event"),
			md: a("once_per_load"),
			nd: a("setup_tags"),
			Ce: a("tag_id"),
			od: a("teardown_tags")
		}
	}();
	var Dc = {},
		Ec = function (a) {
			Dc.GTM = Dc.GTM || [];
			Dc.GTM[a] = !0
		};
	var Fc = function () {
			return "&tc=" + Ob.filter(function (a) {
				return a
			}).length
		},
		Oc = function () {
			Gc && (x.clearTimeout(Gc), Gc = void 0);
			void 0 === Hc || Ic[Hc] && !Jc || (Kc[Hc] || Lc.Pf() || 0 >= Mc-- ? (Ec(1), Kc[Hc] = !0) : (Lc.gg(), Sa(Nc()), Ic[Hc] = !0, Jc = ""))
		},
		Nc = function () {
			var a = Hc;
			if (void 0 === a) return "";
			for (var b, c = [], d = Dc.GTM || [], e = 0; e < d.length; e++) d[e] && (c[Math.floor(e / 6)] ^= 1 << e % 6);
			for (var g = 0; g < c.length; g++) c[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g] || 0);
			b = c.join("");
			return [Pc, Ic[a] ? "" :
				"&es=1", Qc[a], b ? "&u=" + b : "", Fc(), Jc, "&z=0"
			].join("")
		},
		Rc = function () {
			return [vc, "&v=3&t=t", "&pid=" + sa(), "&rv=" + H.sb].join("")
		},
		Sc = "0.005000" > Math.random(),
		Pc = Rc(),
		Tc = function () {
			Pc = Rc()
		},
		Ic = {},
		Jc = "",
		Hc = void 0,
		Qc = {},
		Kc = {},
		Gc = void 0,
		Lc = function (a, b) {
			var c = 0,
				d = 0;
			return {
				Pf: function () {
					if (c < a) return !1;
					ya() - d >= b && (c = 0);
					return c >= a
				},
				gg: function () {
					ya() - d >= b && (c = 0);
					c++;
					d = ya()
				}
			}
		}(2, 1E3),
		Mc = 1E3,
		Uc = function (a, b) {
			if (Sc && !Kc[a] && Hc !== a) {
				Oc();
				Hc = a;
				Jc = "";
				var c;
				c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) :
					"*";
				Qc[a] = "&e=" + c + "&eid=" + a;
				Gc || (Gc = x.setTimeout(Oc, 500))
			}
		},
		Vc = function (a, b, c) {
			if (Sc && !Kc[a] && b) {
				a !== Hc && (Oc(), Hc = a);
				var d = c + String(b[P.qa] || "").replace(/_/g, "");
				Jc = Jc ? Jc + "." + d : "&tr=" + d;
				Gc || (Gc = x.setTimeout(Oc, 500));
				2022 <= Nc().length && Oc()
			}
		};
	var Wc = new za,
		Xc = {},
		Yc = {},
		bd = {
			set: function (a, b) {
				t(Zc(a, b), Xc);
				$c()
			},
			get: function (a) {
				return ad(a, 2)
			},
			reset: function () {
				Wc = new za;
				Xc = {};
				$c()
			}
		},
		ad = function (a, b) {
			if (2 != b) {
				var c = Wc.get(a);
				if (Sc) {
					var d = cd(a);
					c !== d && Ec(5)
				}
				return c
			}
			return cd(a)
		},
		cd = function (a, b, c) {
			var d = a.split("."),
				e = !1,
				g = void 0;
			var h = function (a, b) {
				for (var c = 0; void 0 !== a && c < d.length; c++) {
					if (null === a) return !1;
					a = a[d[c]]
				}
				return void 0 !== a || 1 < c ? a : b.length ? h(dd(b.pop()), b) : ed(d)
			};
			e = !0;
			g = h(Xc.eventModel, [b, c]);
			return e ? g : ed(d)
		},
		ed = function (a) {
			for (var b = Xc, c = 0; c < a.length; c++) {
				if (null === b) return !1;
				if (void 0 === b) break;
				b = b[a[c]]
			}
			return b
		};
	var fd = function (a, b) {
			return cd(a, b, void 0)
		},
		dd = function (a) {
			if (a) {
				var b = ed(["gtag", "targets", a]);
				return Ka(b) ? b : void 0
			}
		},
		gd = function (a, b) {
			function c(a) {
				a && ta(a, function (a) {
					d[a] = null
				})
			}
			var d = {};
			c(Xc);
			delete d.eventModel;
			c(dd(a));
			c(dd(b));
			c(Xc.eventModel);
			var e = [];
			ta(d, function (a) {
				e.push(a)
			});
			return e
		};
	var hd = function (a, b) {
			Yc.hasOwnProperty(a) || (Wc.set(a, b), t(Zc(a, b), Xc), $c())
		},
		Zc = function (a, b) {
			for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
			d[e[e.length - 1]] = b;
			return c
		},
		$c = function (a) {
			ta(Yc, function (b, c) {
				Wc.set(b, c);
				t(Zc(b, void 0), Xc);
				t(Zc(b, c), Xc);
				a && delete Yc[b]
			})
		};
	var id = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
		jd = {
			cl: ["ecl"],
			customPixels: ["nonGooglePixels"],
			ecl: ["cl"],
			html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			nonGooglePixels: [],
			nonGoogleScripts: ["nonGooglePixels"],
			nonGoogleIframes: ["nonGooglePixels"]
		},
		kd = {
			cl: ["ecl"],
			customPixels: ["customScripts", "html"],
			ecl: ["cl"],
			html: ["customScripts"],
			customScripts: ["html"],
			nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
			nonGoogleScripts: ["customScripts", "html"],
			nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
		};
	var md = function (a) {
			var b = ad("gtm.whitelist");
			b && Ec(9);
			b = ["google", "gtagfl", "lcl", "oid", "op"];
			var c = b && Ga(wa(b), jd),
				d = ad("gtm.blacklist");
			d || (d = ad("tagTypeBlacklist")) && Ec(3);
			d ? Ec(8) : d = [];
			ld() && (d = wa(d), d.push("nonGooglePixels", "nonGoogleScripts"));
			0 <= n(wa(d), "google") && Ec(2);
			var e = d && Ga(wa(d), kd),
				g = {};
			return function (h) {
				var k = h && h[P.qa];
				if (!k || "string" != typeof k) return !0;
				k = k.replace(/^_*/, "");
				if (void 0 !== g[k]) return g[k];
				var l = xc[k] || [],
					m = a(k);
				if (b) {
					var p;
					if (p = m) a: {
						if (0 > n(c, k))
							if (l && 0 < l.length)
								for (var q = 0; q < l.length; q++) {
									if (0 > n(c, l[q])) {
										Ec(11);
										p = !1;
										break a
									}
								} else {
									p = !1;
									break a
								}
						p = !0
					}
					m = p
				}
				var r = !1;
				if (d) {
					var w = 0 <= n(e, k);
					if (w) r = w;
					else {
						var v;
						b: {
							for (var u = l || [], z = new za, E = 0; E < e.length; E++) z.set(e[E], !0);
							for (var B = 0; B < u.length; B++)
								if (z.get(u[B])) {
									v = !0;
									break b
								}
							v = !1
						}
						var G = v;
						G && Ec(10);
						r = G
					}
				}
				return g[k] = !m || r
			}
		},
		ld = function () {
			return id.test(x.location && x.location.hostname)
		};
	var od = function (a) {
			return function (b, c) {
				if (oa(c)) a(b, c);
				else {
					b instanceof nd || (b = new nd(b));
					var d = b;
					c && d.jc.push(c);
					throw d;
				}
			}
		},
		nd = function (a) {
			this.Tf = a;
			this.jc = []
		};
	la(nd, Error);
	var pd = {
		ff: function (a, b) {
			b[P.Vc] && "string" === typeof a && (a = 1 == b[P.Vc] ? a.toLowerCase() : a.toUpperCase());
			b.hasOwnProperty(P.Xc) && null === a && (a = b[P.Xc]);
			b.hasOwnProperty(P.Zc) && void 0 === a && (a = b[P.Zc]);
			b.hasOwnProperty(P.Yc) && !0 === a && (a = b[P.Yc]);
			b.hasOwnProperty(P.Wc) && !1 === a && (a = b[P.Wc]);
			return a
		}
	};
	var qd = {
			active: !0,
			isWhitelisted: function () {
				return !0
			}
		},
		rd = function (a) {
			var b = K.zones;
			!b && a && (b = K.zones = a());
			return b
		};
	var sd = !1,
		td = 0,
		ud = [];

	function vd(a) {
		if (!sd) {
			var b = y.createEventObject,
				c = "complete" == y.readyState,
				d = "interactive" == y.readyState;
			if (!a || "readystatechange" != a.type || c || !b && d) {
				sd = !0;
				for (var e = 0; e < ud.length; e++) C(ud[e])
			}
			ud.push = function () {
				for (var a = 0; a < arguments.length; a++) C(arguments[a]);
				return 0
			}
		}
	}

	function wd() {
		if (!sd && 140 > td) {
			td++;
			try {
				y.documentElement.doScroll("left"), vd()
			} catch (a) {
				x.setTimeout(wd, 50)
			}
		}
	}
	var xd = function (a) {
		sd ? a() : ud.push(a)
	};
	var yd = function () {
		function a(a) {
			return !oa(a) || 0 > a ? 0 : a
		}
		if (!K._li && x.performance && x.performance.timing) {
			var b = x.performance.timing.navigationStart,
				c = oa(bd.get("gtm.start")) ? bd.get("gtm.start") : 0;
			K._li = {
				cst: a(c - b),
				cbt: a(tc - b)
			}
		}
	};
	var Cd = !1,
		Dd = function () {
			return x.GoogleAnalyticsObject && x[x.GoogleAnalyticsObject]
		},
		Ed = !1;
	var Fd = function (a) {
			x.GoogleAnalyticsObject || (x.GoogleAnalyticsObject = a || "ga");
			var b = x.GoogleAnalyticsObject;
			if (!x[b]) {
				var c = function () {
					c.q = c.q || [];
					c.q.push(arguments)
				};
				c.l = Number(new Date);
				x[b] = c
			}
			yd();
			return x[b]
		},
		Gd = function (a, b, c, d) {
			b = String(b).replace(/\s+/g, "").split(",");
			var e = Dd();
			e(a + "require", "linker");
			e(a + "linker:autoLink", b, c, d)
		};
	var Id = function () {},
		Hd = function () {
			return x.GoogleAnalyticsObject || "ga"
		},
		Jd = !1;
	var Kd = function (a, b, c) {
		if (b) {
			c = c || {};
			var d = x._gaPhoneImpl || function () {
				d.q = d.q || [];
				d.q.push(arguments)
			};
			x._gaPhoneImpl = d;
			void 0 === x.ga_wpid && (x.ga_wpid = a);
			Jd ? c.ya && C(c.ya) : (Pa(O("https://", "http://", "www.gstatic.com/gaphone/loader.js"), c.ya, c.Ld), Jd = !0);
			var e = {};
			void 0 !== c.zd ? e.receiver = c.zd : e.replace = b;
			e.ga_wpid = a;
			e.destination = b;
			d(2, new Date, e)
		}
	};
	var Qd = function (a) {};

	function Pd(a, b) {
		a.containerId = H.m;
		var c = {
			type: "GENERIC",
			value: a
		};
		b.length && (c.trace = b);
		return c
	};

	function Rd(a, b, c, d, e) {
		var g = Ob[a],
			h = Sd(a, b, c, d, e);
		if (!h) return null;
		var k = Wb(g[P.nd], d.da, [], ma);
		if (k && k.length) {
			var l = k[0];
			h = Rd(l.index, b, {
				I: h,
				O: 1 === l.wd ? c.terminate : h,
				terminate: c.terminate
			}, d, e)
		}
		return h
	}

	function Sd(a, b, c, d, e) {
		function g() {
			if (h[P.Ae]) l();
			else {
				var b = Xb(h, d.da, [], od(function (a) {
						Ec(6);
						Qd(a)
					})),
					c = !1;
				b.vtp_gtmOnSuccess = function () {
					if (!c) {
						c = !0;
						Vc(d.id, Ob[a], "5");
						k()
					}
				};
				b.vtp_gtmOnFailure = function () {
					if (!c) {
						c = !0;
						Vc(d.id, Ob[a], "6");
						l()
					}
				};
				b.vtp_gtmTagId = h.tag_id;
				Vc(d.id, h, "1");
				var e = !1,
					g = function (a, b) {
						if (!e) {
							a instanceof nd || (a = new nd(a));
							var g = a;
							b && g.jc.push(b);
							throw g;
						}
						Qd(a);
						Vc(d.id, h, "7");
						c || (c = !0, l())
					};
				try {
					Vb(b, g)
				} catch (M) {
					try {
						e = !0, g(M)
					} catch (F) {}
				}
			}
		}
		var h = Ob[a],
			k = c.I,
			l = c.O,
			m = c.terminate;
		if (d.da(h)) return null;
		var p = Wb(h[P.od], d.da, [], ma);
		if (p && p.length) {
			var q = p[0],
				r = Rd(q.index, b, {
					I: k,
					O: l,
					terminate: m
				}, d, e);
			if (!r) return null;
			k = r;
			l = 2 === q.wd ? m : r
		}
		if (h[P.md] || h[P.Be]) {
			var w = h[P.md] ? Pb : b,
				v = k,
				u = l;
			if (!w[a]) {
				g = Ca(g);
				var z = Td(a, w, g);
				k = z.I;
				l = z.O
			}
			return function () {
				w[a](v, u)
			}
		}
		return g
	}

	function Td(a, b, c) {
		var d = [],
			e = [];
		b[a] = Ud(d, e, c);
		return {
			I: function () {
				b[a] = Vd;
				for (var c = 0; c < d.length; c++) d[c]()
			},
			O: function () {
				b[a] = Wd;
				for (var c = 0; c < e.length; c++) e[c]()
			}
		}
	}

	function Ud(a, b, c) {
		return function (d, e) {
			a.push(d);
			b.push(e);
			c()
		}
	}

	function Vd(a) {
		a()
	}

	function Wd(a, b) {
		b()
	};

	function Xd(a) {
		var b = 0,
			c = 0,
			d = !1;
		return {
			add: function () {
				c++;
				return Ca(function () {
					b++;
					d && b >= c && a()
				})
			},
			Qe: function () {
				d = !0;
				b >= c && a()
			}
		}
	}
	var $d = function (a) {
		for (var b = Xd(a.callback), c = [], d = [], e = 0; e < Ob.length; e++)
			if (a.Va[e]) {
				var g = Ob[e];
				var h = b.add();
				try {
					var k = Rd(e, c, {
						I: h,
						O: h,
						terminate: h
					}, a, e);
					k ? d.push({
						Wd: e,
						b: Yb(g),
						uf: k
					}) : (Yd(e, a), h())
				} catch (m) {
					h()
				}
			}
		b.Qe();
		d.sort(Zd);
		for (var l = 0; l < d.length; l++) d[l].uf();
		return 0 < d.length
	};

	function Zd(a, b) {
		var c, d = b.b,
			e = a.b;
		c = d > e ? 1 : d < e ? -1 : 0;
		var g;
		if (0 !== c) g = c;
		else {
			var h = a.Wd,
				k = b.Wd;
			g = h > k ? 1 : h < k ? -1 : 0
		}
		return g
	}

	function Yd(a, b) {
		if (!Sc) return;
		var c = function (a) {
			var d = b.da(Ob[a]) ? "3" : "4",
				g = Wb(Ob[a][P.nd], b.da, [], ma);
			g && g.length && c(g[0].index);
			Vc(b.id, Ob[a], d);
			var h = Wb(Ob[a][P.od], b.da, [], ma);
			h && h.length && c(h[0].index)
		};
		c(a);
	}
	var ae = !1,
		be = function (a, b, c, d) {
			if ("gtm.js" == b) {
				if (ae) return !1;
				ae = !0
			}
			Uc(a, b);
			var e = md(c),
				g = {
					id: a,
					name: b,
					callback: d || ma,
					da: e,
					Va: []
				};
			g.Va = cc(e, od(function (a) {
				Qd(a)
			}));
			var h = $d(g);
			"gtm.js" !== b && "gtm.sync" !== b || Id();
			if (!h) return h;
			for (var k = {
					__cl: !0,
					__ecl: !0,
					__evl: !0,
					__fsl: !0,
					__hl: !0,
					__jel: !0,
					__lcl: !0,
					__sdl: !0,
					__tl: !0,
					__ytl: !0
				}, l = 0; l < g.Va.length; l++)
				if (g.Va[l]) {
					var m =
						Ob[l];
					if (m && !k[m[P.qa]]) return !0
				}
			return !1
		};
	var ce = function (a, b) {
		var c = Ub(a, b);
		Ob.push(c);
		return Ob.length - 1
	};
	var Q = {
		Pb: "event_callback",
		Rb: "event_timeout"
	};
	Q.Z = "gtag.config", Q.Mb = "page_view", Q.Zd = "user_engagement", Q.R = "allow_ad_personalization_signals", Q.$d = "allow_custom_scripts", Q.ae = "allow_display_features", Q.be = "allow_enhanced_conversions", Q.ab = "client_id", Q.N = "cookie_domain", Q.T = "cookie_expires", Q.cb = "cookie_name", Q.ma = "cookie_path", Q.de = "cookie_update", Q.na = "currency", Q.eb = "custom_params", Q.fe = "custom_map", Q.Tb = "groups", Q.Ha = "language", Q.ee = "country", Q.Bg = "non_interaction", Q.jb = "page_location", Q.kb = "page_referrer", Q.hd = "page_title", Q.Ja = "send_page_view",
		Q.oa = "send_to", Q.lb = "session_duration", Q.Xb = "session_engaged", Q.mb = "session_id", Q.Yb = "session_number", Q.we = "tracking_id", Q.nb = "user_properties", Q.Ia = "linker", Q.gb = "accept_incoming", Q.H = "domains", Q.ib = "url_position", Q.hb = "decorate_forms", Q.Wb = "phone_conversion_number", Q.Ub = "phone_conversion_callback", Q.Vb = "phone_conversion_css_class", Q.jd = "phone_conversion_options", Q.$c = "aw_remarketing", Q.ad = "aw_remarketing_only", Q.ba = "value", Q.ue = "quantity", Q.je = "affiliation", Q.oe = "tax", Q.ne = "shipping", Q.Ob = "list_name",
		Q.gd = "checkout_step", Q.fd = "checkout_option", Q.ke = "coupon", Q.me = "promotions", Q.Ka = "transaction_id", Q.aa = "user_id", Q.Ga = "conversion_linker", Q.Fa = "conversion_cookie_prefix", Q.F = "cookie_prefix", Q.S = "items", Q.Nb = "aw_merchant_id", Q.cd = "aw_feed_country", Q.dd = "aw_feed_language", Q.bd = "discount", Q.ed = "disable_merchant_reported_purchases", Q.ie = "dc_natural_search", Q.he = "dc_custom_params", Q.xe = "trip_type", Q.te = "passengers", Q.qe = "method", Q.ve = "search_term", Q.ce = "content_type", Q.se = "optimize_id", Q.pe = "experiments",
		Q.fb = "google_signals", Q.Sb = "google_tld", Q.Qb = "event_settings", Q.kd = [Q.R, Q.N, Q.T, Q.cb, Q.ma, Q.F, Q.eb, Q.Pb, Q.Qb, Q.Rb, Q.fb, Q.Sb, Q.Tb, Q.oa, Q.Ja, Q.lb, Q.aa, Q.nb], Q.Uc = [Q.oa, Q.$c, Q.ad, Q.eb, Q.Ja, Q.Ha, Q.ba, Q.na, Q.Ka, Q.aa, Q.Ga, Q.Fa, Q.F, Q.jb, Q.kb, Q.Wb, Q.Ub, Q.Vb, Q.jd, Q.S, Q.Nb, Q.cd, Q.dd, Q.bd, Q.ed, Q.R];
	var de = {};
	var ee = /[A-Z]+/,
		fe = /\s/,
		ge = function (a) {
			if (f(a) && (a = xa(a), !fe.test(a))) {
				var b = a.indexOf("-");
				if (!(0 > b)) {
					var c = a.substring(0, b);
					if (ee.test(c)) {
						for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
							if (!d[e]) return;
						return {
							id: a,
							prefix: c,
							containerId: c + "-" + d[0],
							ca: d
						}
					}
				}
			}
		},
		ie = function (a) {
			for (var b = {}, c = 0; c < a.length; ++c) {
				var d = ge(a[c]);
				d && (b[d.id] = d)
			}
			he(b);
			var e = [];
			ta(b, function (a, b) {
				e.push(b)
			});
			return e
		};

	function he(a) {
		var b = [],
			c;
		for (c in a)
			if (a.hasOwnProperty(c)) {
				var d = a[c];
				"AW" === d.prefix && d.ca[1] && b.push(d.containerId)
			}
		for (var e = 0; e < b.length; ++e) delete a[b[e]]
	};
	var je = null,
		ke = {},
		le = {},
		me, ne = function (a, b) {
			var c = {
				event: a
			};
			b && (c.eventModel = t(b), b[Q.Pb] && (c.eventCallback = b[Q.Pb]), b[Q.Rb] && (c.eventTimeout = b[Q.Rb]));
			return c
		};
	var oe = function () {
			je = je || !K.gtagRegistered;
			K.gtagRegistered = !0;
			return je
		},
		pe = function (a) {
			if (void 0 === le[a.id]) {
				var b;
				switch (a.prefix) {
					case "UA":
						b = ce("gtagua", {
							trackingId: a.id
						});
						break;
					case "AW":
						b = ce("gtagaw", {
							conversionId: a
						});
						break;
					case "DC":
						b = ce("gtagfl", {
							targetId: a.id
						});
						break;
					case "GF":
						b = ce("gtaggf", {
							conversionId: a
						});
						break;
					case "G":
						b = ce("get", {
							trackingId: a.id,
							isAutoTag: !0
						});
						break;
					case "HA":
						b = ce("gtagha", {
							conversionId: a
						});
						break;
					default:
						return
				}
				if (!me) {
					var c = Ub("v", {
						name: "send_to",
						dataLayerVersion: 2
					});
					Lb.push(c);
					me = ["macro", Lb.length - 1]
				}
				var d = {
					arg0: me,
					arg1: a.id,
					ignore_case: !1
				};
				d[P.qa] = "_lc";
				Nb.push(d);
				var e = {
					"if": [Nb.length - 1],
					add: [b]
				};
				e["if"] && (e.add || e.block) && Mb.push(e);
				le[a.id] = b
			}
		},
		qe = function (a) {
			ta(ke, function (b, c) {
				var d = n(c, a);
				0 <= d && c.splice(d, 1)
			})
		},
		re = Ca(function () {});
	var se = {
			config: function (a) {
				var b = a[2] || {};
				if (2 > a.length || !f(a[1]) || !Ka(b)) return;
				var c = ge(a[1]);
				if (!c) return;
				oe() ? pe(c) : re();
				qe(c.id);
				var d = c.id,
					e = b[Q.Tb] || "default";
				e = e.toString().split(",");
				for (var g = 0; g < e.length; g++) ke[e[g]] = ke[e[g]] || [], ke[e[g]].push(d);
				delete b[Q.Tb];
				hd("gtag.targets." + c.id, void 0);
				hd("gtag.targets." + c.id, t(b));
				var h = {};
				h[Q.oa] = c.id;
				return ne(Q.Z, h);
			},
			event: function (a) {
				var b = a[1];
				if (f(b) && !(3 < a.length)) {
					var c;
					if (2 < a.length) {
						if (!Ka(a[2])) return;
						c = a[2]
					}
					var d = ne(b, c);
					var e;
					var g = c,
						h = ad("gtag.fields.send_to", 2);
					f(h) || (h = Q.oa);
					var k = g && g[h];
					void 0 === k && (k = ad(h, 2), void 0 === k && (k = "default"));
					if (f(k) || qa(k)) {
						for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], p = 0; p < l.length; p++) 0 <= l[p].indexOf("-") ? m.push(l[p]) : m = m.concat(ke[l[p]] || []);
						e = ie(m)
					} else e = void 0;
					var q = e;
					if (!q) return;
					var r = oe();
					r || re();
					for (var w = [], v = 0; r && v < q.length; v++) {
						var u = q[v];
						w.push(u.id);
						pe(u)
					}
					d.eventModel = d.eventModel || {};
					0 < q.length ? d.eventModel[Q.oa] =
						w.join() : delete d.eventModel[Q.oa];
					return d
				}
			},
			js: function (a) {
				if (2 == a.length && a[1].getTime) return {
					event: "gtm.js",
					"gtm.start": a[1].getTime()
				}
			},
			policy: function (a) {
				if (3 === a.length) {
					var b = a[1],
						c = a[2];
					de[b] || (de[b] = []);
					de[b].push(c)
				}
			},
			set: function (a) {
				var b;
				2 == a.length && Ka(a[1]) ? b = t(a[1]) : 3 == a.length && f(a[1]) && (b = {}, b[a[1]] = a[2]);
				if (b) return b.eventModel = t(b), b.event = "gtag.set", b._clear = !0, b
			}
		},
		te = {
			policy: !0
		};
	var ue = function () {
		return !1
	};
	var ze = function (a) {
		this.vg = a
	};
	ze.prototype.Af = function () {
		return this.vg
	};
	var Ae = function (a) {
		return !a || "object" !== Ia(a) || Ka(a) ? !1 : "getUntrustedUpdateValue" in a
	};
	ze.prototype.getUntrustedUpdateValue = ze.prototype.Af;
	var Be = !1,
		Ce = [];

	function De() {
		if (!Be) {
			Be = !0;
			for (var a = 0; a < Ce.length; a++) C(Ce[a])
		}
	}
	var Ee = function (a) {
		Be ? C(a) : Ce.push(a)
	};
	var Fe = [],
		Ge = !1;

	function He(a) {
		var b = a.eventCallback,
			c = Ca(function () {
				na(b) && C(function () {
					b(H.m)
				})
			}),
			d = a.eventTimeout;
		d && x.setTimeout(c, Number(d));
		return c
	}
	var Ie = function (a) {
			return x["dataLayer"].push(a)
		},
		Ke = function (a) {
			var b = a._clear;
			ta(a, function (a, c) {
				"_clear" !== a && (b && hd(a, void 0), hd(a, c))
			});
			var c = a.event;
			if (!c) return !1;
			var d = a["gtm.uniqueEventId"];
			d || (d = yc(), a["gtm.uniqueEventId"] = d, hd("gtm.uniqueEventId", d));
			uc = c;
			var e = Je(a);
			uc = null;
			if (!sc) {
				sc = a["gtm.start"];
			}
			return e
		};

	function Je(a) {
		var b = a.event,
			c = a["gtm.uniqueEventId"],
			d, e = K.zones;
		d = e ? e.checkState(H.m, c) : qd;
		if (!d.active) return !1;
		var g = He(a);
		return be(c, b, d.isWhitelisted, g) ? !0 : !1
	}
	var Le = function () {
			for (var a = !1; !Ge && 0 < Fe.length;) {
				Ge = !0;
				delete Xc.eventModel;
				$c();
				var b = Fe.shift();
				if (null != b) {
					var c = Ae(b);
					if (c) {
						var d = b;
						b = Ae(d) ? d.getUntrustedUpdateValue() : void 0;
						for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
							var h = e[g],
								k = ad(h, 1);
							if (qa(k) || Ka(k)) k = t(k);
							Yc[h] = k
						}
					}
					try {
						if (na(b)) try {
							b.call(bd)
						} catch (u) {} else if (qa(b)) {
							var l = b;
							if (f(l[0])) {
								var m =
									l[0].split("."),
									p = m.pop(),
									q = l.slice(1),
									r = ad(m.join("."), 2);
								if (void 0 !== r && null !== r) try {
									r[p].apply(r, q)
								} catch (u) {}
							}
						} else {
							var w = b;
							if (w && ("[object Arguments]" == Object.prototype.toString.call(w) || Object.prototype.hasOwnProperty.call(w, "callee"))) {
								a: {
									if (b.length && f(b[0])) {
										var v = se[b[0]];
										if (v && (!c || !te[b[0]])) {
											b = v(b);
											break a
										}
									}
									b = void 0
								}
								if (!b) {
									Ge = !1;
									continue
								}
							}
							a = Ke(b) || a
						}
					} finally {
						c && $c(!0)
					}
				}
				Ge = !1
			}
			return !a
		},
		Me = function () {
			var a = Le();
			try {
				var b = H.m,
					c = x["dataLayer"].hide;
				if (c && void 0 !== c[b] && c.end) {
					c[b] = !1;
					var d = !0,
						e;
					for (e in c)
						if (c.hasOwnProperty(e) && !0 === c[e]) {
							d = !1;
							break
						}
					d && (c.end(), c.end = null)
				}
			} catch (g) {}
			return a
		},
		Ne = function () {
			var a = Na("dataLayer", []),
				b = Na("google_tag_manager", {});
			b = b["dataLayer"] = b["dataLayer"] || {};
			xd(function () {
				b.gtmDom || (b.gtmDom = !0, a.push({
					event: "gtm.dom"
				}))
			});
			Ee(function () {
				b.gtmLoad || (b.gtmLoad = !0, a.push({
					event: "gtm.load"
				}))
			});
			var c = a.push;
			a.push = function () {
				var b;
				if (0 < K.SANDBOXED_JS_SEMAPHORE) {
					b = [];
					for (var e = 0; e < arguments.length; e++) b[e] = new ze(arguments[e])
				} else b = [].slice.call(arguments, 0);
				var g = c.apply(a, b);
				Fe.push.apply(Fe, b);
				if (300 < this.length)
					for (Ec(4); 300 < this.length;) this.shift();
				var h = "boolean" !== typeof g || g;
				return Le() && h
			};
			Fe.push.apply(Fe, a.slice(0));
			C(Me)
		};
	var Pe = function (a) {
			return Oe ? y.querySelectorAll(a) : null
		},
		Qe = function (a, b) {
			if (!Oe) return null;
			if (Element.prototype.closest) try {
				return a.closest(b)
			} catch (e) {
				return null
			}
			var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
				d = a;
			if (!y.documentElement.contains(d)) return null;
			do {
				try {
					if (c.call(d, b)) return d
				} catch (e) {
					break
				}
				d = d.parentElement || d.parentNode
			} while (null !== d && 1 === d.nodeType);
			return null
		},
		Re = !1;
	if (y.querySelectorAll) try {
		var Se = y.querySelectorAll(":root");
		Se && 1 == Se.length && Se[0] == y.documentElement && (Re = !0)
	} catch (a) {}
	var Oe = Re;
	var Te;
	var pf = {};
	pf.ob = new String("undefined");
	var qf = function (a) {
		this.resolve = function (b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === pf.ob ? b : a[d]);
			return c.join("")
		}
	};
	qf.prototype.toString = function () {
		return this.resolve("undefined")
	};
	qf.prototype.valueOf = qf.prototype.toString;
	pf.De = qf;
	pf.$b = {};
	pf.kf = function (a) {
		return new qf(a)
	};
	var rf = {};
	pf.hg = function (a, b) {
		var c = yc();
		rf[c] = [a, b];
		return c
	};
	pf.td = function (a) {
		var b = a ? 0 : 1;
		return function (a) {
			var c = rf[a];
			if (c && "function" === typeof c[b]) c[b]();
			rf[a] = void 0
		}
	};
	pf.Nf = function (a) {
		for (var b = !1, c = !1,
				d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
		return b && c
	};
	pf.Yf = function (a) {
		if (a === pf.ob) return a;
		var b = yc();
		pf.$b[b] = a;
		return 'google_tag_manager["' + H.m + '"].macro(' + b + ")"
	};
	pf.Rf = function (a, b, c) {
		a instanceof pf.De && (a = a.resolve(pf.hg(b, c)), b = ma);
		return {
			oc: a,
			I: b
		}
	};
	var sf = function (a, b, c) {
			var d = {
				event: b,
				"gtm.element": a,
				"gtm.elementClasses": a.className,
				"gtm.elementId": a["for"] || Ua(a, "id") || "",
				"gtm.elementTarget": a.formTarget || a.target || ""
			};
			c && (d["gtm.triggers"] = c.join(","));
			d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
			return d
		},
		tf = function (a) {
			K.hasOwnProperty("autoEventsSettings") || (K.autoEventsSettings = {});
			var b = K.autoEventsSettings;
			b.hasOwnProperty(a) || (b[a] = {});
			return b[a]
		},
		uf =
		function (a, b, c, d) {
			var e = tf(a),
				g = Ba(e, b, d);
			e[b] = c(g)
		},
		vf = function (a, b, c) {
			var d = tf(a);
			return Ba(d, b, c)
		};
	var wf = function () {
			for (var a = La.userAgent + (y.cookie || "") + (y.referrer || ""), b = a.length, c = x.history.length; 0 < c;) a += c-- ^ b++;
			var d = 1,
				e, g, h;
			if (a)
				for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
			return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(ya() / 1E3)].join(".")
		},
		zf = function (a, b, c, d) {
			var e = xf(b);
			return jb(a, e, yf(c), d)
		},
		xf = function (a) {
			if (!a) return 1;
			a = 0 === a.indexOf(".") ? a.substr(1) : a;
			return a.split(".").length
		},
		yf = function (a) {
			if (!a ||
				"/" === a) return 1;
			"/" !== a[0] && (a = "/" + a);
			"/" !== a[a.length - 1] && (a += "/");
			return a.split("/").length - 1
		};

	function Af(a, b) {
		var c = "" + xf(a),
			d = yf(b);
		1 < d && (c += "-" + d);
		return c
	};
	var Bf = ["1"],
		Cf = {},
		Gf = function (a, b, c, d) {
			var e = Df(a);
			Cf[e] || Ef(e, b, c) || (Ff(e, wf(), b, c, d), Ef(e, b, c))
		};

	function Ff(a, b, c, d, e) {
		var g;
		g = ["1", Af(d, c), b].join(".");
		nb(a, g, c, d, 0 == e ? void 0 : new Date(ya() + 1E3 * (void 0 == e ? 7776E3 : e)))
	}

	function Ef(a, b, c) {
		var d = zf(a, b, c, Bf);
		d && (Cf[a] = d);
		return d
	}

	function Df(a) {
		return (a || "_gcl") + "_au"
	};
	var Hf = function () {
		for (var a = [], b = y.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
			var e = b[d].match(c);
			e && a.push({
				Nc: e[1],
				value: e[2]
			})
		}
		var g = {};
		if (!a || !a.length) return g;
		for (var h = 0; h < a.length; h++) {
			var k = a[h].value.split(".");
			"1" == k[0] && 3 == k.length && k[1] && (g[a[h].Nc] || (g[a[h].Nc] = []), g[a[h].Nc].push({
				timestamp: k[1],
				xf: k[2]
			}))
		}
		return g
	};

	function If() {
		for (var a = Jf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
		return b
	}

	function Kf() {
		var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		a += a.toLowerCase() + "0123456789-_";
		return a + "."
	}
	var Jf, Lf, Mf = function (a) {
			Jf = Jf || Kf();
			Lf = Lf || If();
			for (var b = [], c = 0; c < a.length; c += 3) {
				var d = c + 1 < a.length,
					e = c + 2 < a.length,
					g = a.charCodeAt(c),
					h = d ? a.charCodeAt(c + 1) : 0,
					k = e ? a.charCodeAt(c + 2) : 0,
					l = g >> 2,
					m = (g & 3) << 4 | h >> 4,
					p = (h & 15) << 2 | k >> 6,
					q = k & 63;
				e || (q = 64, d || (p = 64));
				b.push(Jf[l], Jf[m], Jf[p], Jf[q])
			}
			return b.join("")
		},
		Nf = function (a) {
			function b(b) {
				for (; d < a.length;) {
					var c = a.charAt(d++),
						e = Lf[c];
					if (null != e) return e;
					if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
				}
				return b
			}
			Jf = Jf || Kf();
			Lf = Lf ||
				If();
			for (var c = "", d = 0;;) {
				var e = b(-1),
					g = b(0),
					h = b(64),
					k = b(64);
				if (64 === k && -1 === e) return c;
				c += String.fromCharCode(e << 2 | g >> 4);
				64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
			}
		};
	var Of;

	function Pf(a, b) {
		if (!a || b === y.location.hostname) return !1;
		for (var c = 0; c < a.length; c++)
			if (a[c] instanceof RegExp) {
				if (a[c].test(b)) return !0
			} else if (0 <= b.indexOf(a[c])) return !0;
		return !1
	}
	var Qf = function () {
		var a = Na("google_tag_data", {}),
			b = a.gl;
		b && b.decorators || (b = {
			decorators: []
		}, a.gl = b);
		return b
	};
	var Rf = /(.*?)\*(.*?)\*(.*)/,
		Sf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
		Tf = /^(?:www\.|m\.|amp\.)+/,
		Uf = /([^?#]+)(\?[^#]*)?(#.*)?/,
		Vf = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
		Xf = function (a) {
			var b = [],
				c;
			for (c in a)
				if (a.hasOwnProperty(c)) {
					var d = a[c];
					void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Mf(String(d))))
				}
			var e = b.join("*");
			return ["1", Wf(e), e].join("*")
		},
		Wf = function (a, b) {
			var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
					window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
				].join("*"),
				d;
			if (!(d = Of)) {
				for (var e = Array(256), g = 0; 256 > g; g++) {
					for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
					e[g] = h
				}
				d = e
			}
			Of = d;
			for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Of[(l ^ c.charCodeAt(m)) & 255];
			return ((l ^ -1) >>> 0).toString(36)
		},
		Zf = function () {
			return function (a) {
				var b = fb(x.location.href),
					c = b.search.replace("?", ""),
					d = cb(c, "_gl", !0) || "";
				a.query = Yf(d) || {};
				var e = D(b, "fragment").match(Vf);
				a.fragment = Yf(e && e[3] ||
					"") || {}
			}
		},
		Yf = function (a) {
			var b;
			b = void 0 === b ? 3 : b;
			try {
				if (a) {
					var c;
					a: {
						for (var d = a, e = 0; 3 > e; ++e) {
							var g = Rf.exec(d);
							if (g) {
								c = g;
								break a
							}
							d = decodeURIComponent(d)
						}
						c = void 0
					}
					var h = c;
					if (h && "1" === h[1]) {
						var k = h[3],
							l;
						a: {
							for (var m = h[2], p = 0; p < b; ++p)
								if (m === Wf(k, p)) {
									l = !0;
									break a
								}
							l = !1
						}
						if (l) {
							for (var q = {}, r = k ? k.split("*") : [], w = 0; w < r.length; w += 2) q[r[w]] = Nf(r[w + 1]);
							return q
						}
					}
				}
			} catch (v) {}
		};

	function $f(a, b, c) {
		function d(a) {
			var b = a,
				c = Vf.exec(b),
				d = b;
			if (c) {
				var e = c[2],
					g = c[4];
				d = c[1];
				g && (d = d + e + g)
			}
			a = d;
			var h = a.charAt(a.length - 1);
			a && "&" !== h && (a += "&");
			return a + l
		}
		c = void 0 === c ? !1 : c;
		var e = Uf.exec(b);
		if (!e) return "";
		var g = e[1],
			h = e[2] || "",
			k = e[3] || "",
			l = "_gl=" + a;
		c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
		return "" + g + h + k
	}

	function ag(a, b, c) {
		for (var d = {}, e = {}, g = Qf().decorators, h = 0; h < g.length; ++h) {
			var k = g[h];
			(!c || k.forms) && Pf(k.domains, b) && (k.fragment ? Da(e, k.callback()) : Da(d, k.callback()))
		}
		if (Fa(d)) {
			var l = Xf(d);
			if (c) {
				if (a && a.action) {
					var m = (a.method || "").toLowerCase();
					if ("get" === m) {
						for (var p = a.childNodes || [], q = !1, r = 0; r < p.length; r++) {
							var w = p[r];
							if ("_gl" === w.name) {
								w.setAttribute("value", l);
								q = !0;
								break
							}
						}
						if (!q) {
							var v = y.createElement("input");
							v.setAttribute("type", "hidden");
							v.setAttribute("name", "_gl");
							v.setAttribute("value",
								l);
							a.appendChild(v)
						}
					} else if ("post" === m) {
						var u = $f(l, a.action);
						Za.test(u) && (a.action = u)
					}
				}
			} else bg(l, a, !1)
		}
		if (!c && Fa(e)) {
			var z = Xf(e);
			bg(z, a, !0)
		}
	}

	function bg(a, b, c) {
		if (b.href) {
			var d = $f(a, b.href, void 0 === c ? !1 : c);
			Za.test(d) && (b.href = d)
		}
	}
	var cg = function (a) {
			try {
				var b;
				a: {
					for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
						if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
							b = c;
							break a
						}
						c = c.parentNode;
						d--
					}
					b = null
				}
				var e = b;
				if (e) {
					var g = e.protocol;
					"http:" !== g && "https:" !== g || ag(e, e.hostname, !1)
				}
			} catch (h) {}
		},
		dg = function (a) {
			try {
				var b = a.target || a.srcElement || {};
				if (b.action) {
					var c = D(fb(b.action), "host");
					ag(b, c, !0)
				}
			} catch (d) {}
		},
		eg = function (a, b, c, d) {
			var e = Qf();
			e.init || (A(y, "mousedown", cg), A(y, "keyup", cg), A(y, "submit", dg), e.init = !0);
			var g = {
				callback: a,
				domains: b,
				fragment: "fragment" === c,
				forms: !!d
			};
			Qf().decorators.push(g)
		},
		fg = function () {
			var a = y.location.hostname,
				b = Sf.exec(y.referrer);
			if (!b) return !1;
			var c = b[2],
				d = b[1],
				e = "";
			if (c) {
				var g = c.split("/"),
					h = g[1];
				e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
			} else if (d) {
				if (0 === d.indexOf("xn--")) return !1;
				e = d.replace(/-/g, ".").replace(/\.\./g, "-")
			}
			return a.replace(Tf, "") === e.replace(Tf, "")
		},
		gg = function (a, b) {
			return !1 === a ? !1 : a || b || fg()
		};
	var hg = /^\w+$/,
		ig = /^[\w-]+$/,
		jg = /^~?[\w-]+$/,
		kg = {
			aw: "_aw",
			dc: "_dc",
			gf: "_gf",
			ha: "_ha"
		};

	function lg(a) {
		return a && "string" == typeof a && a.match(hg) ? a : "_gcl"
	}
	var ng = function () {
		var a = fb(x.location.href),
			b = D(a, "query", !1, void 0, "gclid"),
			c = D(a, "query", !1, void 0, "gclsrc"),
			d = D(a, "query", !1, void 0, "dclid");
		if (!b || !c) {
			var e = a.hash.replace("#", "");
			b = b || cb(e, "gclid", void 0);
			c = c || cb(e, "gclsrc", void 0)
		}
		return mg(b, c, d)
	};

	function mg(a, b, c) {
		var d = {},
			e = function (a, b) {
				d[b] || (d[b] = []);
				d[b].push(a)
			};
		if (void 0 !== a && a.match(ig)) switch (b) {
			case void 0:
				e(a, "aw");
				break;
			case "aw.ds":
				e(a, "aw");
				e(a, "dc");
				break;
			case "ds":
				e(a, "dc");
				break;
			case "gf":
				e(a, "gf");
				break;
			case "ha":
				e(a, "ha")
		}
		c && e(c, "dc");
		return d
	}

	function og(a, b, c) {
		function d(a, b) {
			var c = pg(a, e);
			c && nb(c, b, h, g, l, !0)
		}
		b = b || {};
		var e = lg(b.prefix),
			g = b.domain || "auto",
			h = b.path || "/",
			k = void 0 == b.Jd ? 7776E3 : b.Jd;
		c = c || ya();
		var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
			m = Math.round(c / 1E3),
			p = function (a) {
				return ["GCL", m, a].join(".")
			};
		a.aw && (!0 === b.bh ? d("aw", p("~" + a.aw[0])) : d("aw", p(a.aw[0])));
		a.dc && d("dc", p(a.dc[0]));
		a.gf && d("gf", p(a.gf[0]));
		a.ha && d("ha", p(a.ha[0]))
	}
	var pg = function (a, b) {
			var c = kg[a];
			if (void 0 !== c) return b + c
		},
		qg = function (a) {
			var b = a.split(".");
			return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
		};

	function rg(a) {
		var b = a.split(".");
		if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
	}
	var sg = function (a, b, c, d, e) {
			if (qa(b)) {
				var g = lg(e);
				eg(function () {
					for (var b = {}, c = 0; c < a.length; ++c) {
						var d = pg(a[c], g);
						if (d) {
							var e = gb(d, y.cookie);
							e.length && (b[d] = e.sort()[e.length - 1])
						}
					}
					return b
				}, b, c, d)
			}
		},
		tg = function (a) {
			return a.filter(function (a) {
				return jg.test(a)
			})
		},
		ug = function (a, b) {
			for (var c = lg(b && b.prefix), d = {}, e = 0; e < a.length; e++) kg[a[e]] && (d[a[e]] = kg[a[e]]);
			ta(d, function (a, d) {
				var e = gb(c + d, y.cookie);
				if (e.length) {
					var g = e[0],
						h = qg(g),
						p = {};
					p[a] = [rg(g)];
					og(p, b, h)
				}
			})
		};
	var vg = /^\d+\.fls\.doubleclick\.net$/;

	function wg(a) {
		var b = fb(x.location.href),
			c = D(b, "host", !1);
		if (c && c.match(vg)) {
			var d = D(b, "path").split(a + "=");
			if (1 < d.length) return d[1].split(";")[0].split("?")[0]
		}
	}

	function xg(a, b) {
		if ("aw" == a || "dc" == a) {
			var c = wg("gcl" + a);
			if (c) return c.split(".")
		}
		var d = lg(b);
		if ("_gcl" == d) {
			var e;
			e = ng()[a] || [];
			if (0 < e.length) return e
		}
		var g = pg(a, d),
			h;
		if (g) {
			var k = [];
			if (y.cookie) {
				var l = gb(g, y.cookie);
				if (l && 0 != l.length) {
					for (var m = 0; m < l.length; m++) {
						var p = rg(l[m]);
						p && -1 === n(k, p) && k.push(p)
					}
					h = tg(k)
				} else h = k
			} else h = k
		} else h = [];
		return h
	}
	var yg = function () {
			var a = wg("gac");
			if (a) return decodeURIComponent(a);
			var b = Hf(),
				c = [];
			ta(b, function (a, b) {
				for (var d = [], e = 0; e < b.length; e++) d.push(b[e].xf);
				d = tg(d);
				d.length && c.push(a + ":" + d.join(","))
			});
			return c.join(";")
		},
		zg = function (a, b, c, d, e) {
			Gf(b, c, d, e);
			var g = Cf[Df(b)],
				h = ng().dc || [],
				k = !1;
			if (g && 0 < h.length) {
				var l = K.joined_au = K.joined_au || {},
					m = b || "_gcl";
				if (!l[m])
					for (var p = 0; p < h.length; p++) {
						var q = "https://adservice.google.com/ddm/regclk",
							r = q = q + "?gclid=" + h[p] + "&auiddc=" + g;
						La.sendBeacon && La.sendBeacon(r) || Sa(r);
						k = l[m] = !0
					}
			}
			if (k && g) {
				var w = Df(b),
					v = Cf[w];
				v && Ff(w, v, c, d, e)
			}
		};
	var Ag;
	if (3 === H.sb.length) Ag = "g";
	else {
		var Bg = "G";
		Bg = "g";
		Ag = Bg
	}
	var Cg = {
			"": "n",
			UA: "u",
			AW: "a",
			DC: "d",
			G: "e",
			GF: "f",
			HA: "h",
			GTM: Ag
		},
		Dg = function (a) {
			var b = H.m.split("-"),
				c = b[0].toUpperCase(),
				d = Cg[c] || "i",
				e = a && "GTM" === c ? b[1] : "",
				g;
			if (3 === H.sb.length) {
				var h = void 0;
				h = h || (ue() ? "s" : "o");
				g = "2" + (h || "w")
			} else g = "";
			return g + d + H.sb + e
		};
	var Eg = function (a) {
			return !(void 0 === a || null === a || 0 === (a + "").length)
		},
		Fg = function (a, b) {
			var c;
			if (2 === b.L) return a("ord", sa(1E11, 1E13)), !0;
			if (3 === b.L) return a("ord", "1"), a("num", sa(1E11, 1E13)), !0;
			if (4 === b.L) return Eg(b.sessionId) && a("ord", b.sessionId), !0;
			if (5 === b.L) c = "1";
			else if (6 === b.L) c = b.Hc;
			else return !1;
			Eg(c) && a("qty", c);
			Eg(b.vb) && a("cost", b.vb);
			Eg(b.transactionId) && a("ord", b.transactionId);
			return !0
		},
		Gg = encodeURIComponent,
		Hg = function (a, b) {
			function c(a, b, c) {
				g.hasOwnProperty(a) || (b += "", e += ";" + a + "=" +
					(c ? b : Gg(b)))
			}
			var d = a.kc,
				e = a.protocol;
			e += a.Eb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
			e += ";src=" + Gg(d) + (";type=" + Gg(a.nc)) + (";cat=" + Gg(a.Na));
			var g = a.nf || {};
			ta(g, function (a, b) {
				e += ";" + Gg(a) + "=" + Gg(b + "")
			});
			if (Fg(c, a)) {
				Eg(a.Kb) && c("u", a.Kb);
				Eg(a.Jb) && c("tran", a.Jb);
				c("gtm", Dg());
				!1 === a.Me && c("npa", "1");
				if (a.hc) {
					var h = xg("dc", a.va);
					h && h.length && c("gcldc", h.join("."));
					var k = xg("aw", a.va);
					k && k.length && c("gclaw", k.join("."));
					var l = yg();
					l && c("gac", l);
					Gf(a.va, void 0, a.hf, a.jf);
					var m = Cf[Df(a.va)];
					m && c("auiddc", m)
				}
				Eg(a.Dc) && c("prd", a.Dc, !0);
				ta(a.Qc, function (a, b) {
					c(a, b)
				});
				e += b || "";
				Eg(a.Cb) && c("~oref", a.Cb);
				a.Eb ? Ra(e + "?", a.I) : Sa(e + "?", a.I, a.O)
			} else C(a.O)
		};
	var Jg = function (a) {
			var b = "/pagead/conversion/" + Ig(a.conversion_id) + "/?",
				c = Ig(JSON.stringify(a.conversion_data)),
				d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
			if (a.conversionLinkerEnabled) {
				var e = xg("gf", a.cookiePrefix);
				if (e && e.length)
					for (var g = 0; g < e.length; g++) d += "&gclgf=" + Ig(e[g])
			}
			Sa(d, a.onSuccess, a.onFailure)
		},
		Ig = function (a) {
			return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
		};
	var Kg = !!x.MutationObserver,
		Lg = void 0,
		Mg = function (a) {
			if (!Lg) {
				var b = function () {
					var a = y.body;
					if (a)
						if (Kg)(new MutationObserver(function () {
							for (var a = 0; a < Lg.length; a++) C(Lg[a])
						})).observe(a, {
							childList: !0,
							subtree: !0
						});
						else {
							var b = !1;
							A(a, "DOMNodeInserted", function () {
								b || (b = !0, C(function () {
									b = !1;
									for (var a = 0; a < Lg.length; a++) C(Lg[a])
								}))
							})
						}
				};
				Lg = [];
				y.body ? b() : C(b)
			}
			Lg.push(a)
		};
	var dh = x.clearTimeout,
		eh = x.setTimeout,
		T = function (a, b, c) {
			if (ue()) {
				b && C(b)
			} else return Pa(a, b, c)
		},
		fh = function () {
			return new Date
		},
		U = function () {
			return x.location.href
		},
		gh = function (a) {
			return D(fb(a), "fragment")
		},
		hh = function (a) {
			return eb(fb(a))
		},
		V = function (a, b) {
			return ad(a, b || 2)
		},
		ih = function (a, b, c) {
			b && (a.eventCallback = b, c && (a.eventTimeout = c));
			return Ie(a)
		},
		jh = function (a, b) {
			x[a] = b
		},
		W = function (a, b, c) {
			b && (void 0 === x[a] || c &&
				!x[a]) && (x[a] = b);
			return x[a]
		},
		kh = function (a, b, c) {
			return gb(a, b, void 0 === c ? !0 : !!c)
		},
		lh = function (a, b, c, d) {
			var e = {
					prefix: a,
					path: b,
					domain: c,
					Jd: d
				},
				g = ng();
			og(g, e);
			ug(["aw"], e);
			ug(["dc"], e);
		},
		mh = function (a, b, c, d, e) {
			var g = Zf(),
				h = Qf();
			h.data || (h.data = {
				query: {},
				fragment: {}
			}, g(h.data));
			var k = {},
				l = h.data;
			l && (Da(k, l.query), Da(k, l.fragment));
			for (var m = lg(b), p = 0; p < a.length; ++p) {
				var q = a[p];
				if (void 0 !== kg[q]) {
					var r = pg(q, m),
						w = k[r];
					if (w) {
						var v = Math.min(qg(w), ya()),
							u;
						b: {
							for (var z = v, E = gb(r, y.cookie), B = 0; B < E.length; ++B)
								if (qg(E[B]) > z) {
									u = !0;
									break b
								}
							u = !1
						}
						u || nb(r, w, c, d, 0 == e ? void 0 : new Date(v + 1E3 * (null == e ? 7776E3 : e)), !0)
					}
				}
			}
			var G = {
				prefix: b,
				path: c,
				domain: d
			};
			og(mg(k.gclid, k.gclsrc), G);
		},
		nh = function (a, b, c, d, e) {
			sg(a, b, c, d, e);
		},
		oh = function (a, b) {
			if (ue()) {
				b && C(b)
			} else Ra(a, b)
		},
		ph = function (a) {
			return !!vf(a, "init", !1)
		},
		qh = function (a) {
			tf(a).init = !0
		},
		rh = function (a, b, c) {
			var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : rc;
			d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
			b && ta(b, function (a, b) {
				b && (d += "&" + a + "=" + encodeURIComponent(b))
			});
			T(O("https://", "http://", d))
		};
	var sh = function (a, b, c, d, e, g) {
		var h = {
			config: a,
			gtm: Dg()
		};
		c && (Gf(d, void 0, e, g), h.auiddc = Cf[Df(d)]);
		b && (h.loadInsecure = b);
		W("__dc_ns_processor", []).push(h);
		T((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
	};
	var th = pf.Rf;
	var uh = new za;

	function vh(a, b) {
		function c(a) {
			var b = fb(a),
				c = D(b, "protocol"),
				d = D(b, "host", !0),
				e = D(b, "port"),
				g = D(b, "path").toLowerCase().replace(/\/$/, "");
			if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
			return [c, d, e, g]
		}
		for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
			if (d[g] !== e[g]) return !1;
		return !0
	}

	function wh(a) {
		var b = a.arg0,
			c = a.arg1;
		if (a.any_of && qa(c)) {
			for (var d = 0; d < c.length; d++)
				if (wh({
						"function": a["function"],
						arg0: b,
						arg1: c[d]
					})) return !0;
			return !1
		}
		switch (a["function"]) {
			case "_cn":
				return 0 <= String(b).indexOf(String(c));
			case "_css":
				var e;
				a: {
					if (b) {
						var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
						try {
							for (var h = 0; h < g.length; h++)
								if (b[g[h]]) {
									e = b[g[h]](c);
									break a
								}
						} catch (u) {}
					}
					e = !1
				}
				return e;
			case "_ew":
				var k, l;
				k = String(b);
				l = String(c);
				var m = k.length -
					l.length;
				return 0 <= m && k.indexOf(l, m) == m;
			case "_eq":
				return String(b) == String(c);
			case "_ge":
				return Number(b) >= Number(c);
			case "_gt":
				return Number(b) > Number(c);
			case "_lc":
				var p;
				p = String(b).split(",");
				return 0 <= n(p, String(c));
			case "_le":
				return Number(b) <= Number(c);
			case "_lt":
				return Number(b) < Number(c);
			case "_re":
				var q;
				var r = a.ignore_case ? "i" : void 0;
				try {
					var w = String(c) + r,
						v = uh.get(w);
					v || (v = new RegExp(c, r), uh.set(w, v));
					q = v.test(b)
				} catch (u) {
					q = !1
				}
				return q;
			case "_sw":
				return 0 == String(b).indexOf(String(c));
			case "_um":
				return vh(b,
					c)
		}
		return !1
	};
	var yh = function (a, b) {
		var c = function () {};
		c.prototype = a.prototype;
		var d = new c;
		a.apply(d, Array.prototype.slice.call(arguments, 1));
		return d
	};
	var zh = {},
		Ah = encodeURI,
		X = encodeURIComponent,
		Bh = Sa;
	var Ch = function (a, b) {
		if (!a) return !1;
		var c = D(fb(a), "host");
		if (!c) return !1;
		for (var d = 0; b && d < b.length; d++) {
			var e = b[d] && b[d].toLowerCase();
			if (e) {
				var g = c.length - e.length;
				0 < g && "." != e.charAt(0) && (g--, e = "." + e);
				if (0 <= g && c.indexOf(e, g) == g) return !0
			}
		}
		return !1
	};
	var Y = function (a, b, c) {
		for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
		return e ? d : null
	};
	zh.Of = function () {
		var a = !1;
		return a
	};
	var li = function (a, b, c, d) {
			this.n = a;
			this.t = b;
			this.p = c;
			this.d = d
		},
		mi = function () {
			this.c = 1;
			this.e = [];
			this.p = null
		};

	function ni(a) {
		var b = K,
			c = b.gss = b.gss || {};
		return c[a] = c[a] || new mi
	}
	var oi = function (a, b) {
			ni(a).p = b
		},
		pi = function (a) {
			var b = ni(a),
				c = b.p;
			if (c) {
				var d = b.e,
					e = [];
				b.e = [];
				var g = function (a) {
					for (var b = 0; b < a.length; b++) try {
						var d = a[b];
						d.d ? (d.d = !1, e.push(d)) : c(d.n, d.t, d.p)
					} catch (m) {}
				};
				g(d);
				g(e)
			}
		};
	var ri = function () {
		var a = x.gaGlobal = x.gaGlobal || {};
		a.hid = a.hid || sa();
		return a.hid
	};
	var Gi = window,
		Hi = document,
		Ii = function (a) {
			var b = Gi._gaUserPrefs;
			if (b && b.ioo && b.ioo() || a && !0 === Gi["ga-disable-" + a]) return !0;
			try {
				var c = Gi.external;
				if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
			} catch (g) {}
			for (var d = gb("AMP_TOKEN", Hi.cookie, !0), e = 0; e < d.length; e++)
				if ("$OPT_OUT" == d[e]) return !0;
			return Hi.getElementById("__gaOptOutExtension") ? !0 : !1
		};
	var Oi = function (a, b, c) {
			Ni(a);
			var d = Math.floor(ya() / 1E3);
			ni(a).e.push(new li(b, d, c, void 0));
			pi(a)
		},
		Qi = function (a, b, c) {
			Ni(a);
			var d = Math.floor(ya() / 1E3);
			ni(a).e.push(new li(b, d, c, !0))
		},
		Ni = function (a) {
			if (1 === ni(a).c) {
				ni(a).c = 2;
				var b = encodeURIComponent(a);
				Pa(("http:" != x.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
			}
		},
		Si = function (a, b) {},
		Ri = function (a, b) {};
	var Z = {
		a: {}
	};
	Z.a.gtagha = ["google"],
		function () {
			function a(a) {
				function b(a, b) {
					void 0 !== b && c.push(a + "=" + b)
				}
				if (void 0 === a) return "";
				var c = [];
				b("hct_base_price", a.Cd);
				b("hct_booking_xref", a.Dd);
				b("hct_checkin_date", a.Df);
				b("hct_checkout_date", a.Ef);
				b("hct_currency_code", a.Ff);
				b("hct_partner_hotel_id", a.Ed);
				b("hct_total_price", a.Fd);
				return c.join(";")
			}

			function b(b, c, d, e) {
				var g = X(b),
					h = X(a(c)),
					k = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + g + "/?data=" + h;
				d && (k += xg("ha", e).map(function (a) {
					return "&gclha=" +
						X(a)
				}).join(""));
				return k
			}

			function c(a, c, d, e, g, q) {
				/^\d+$/.test(a) ? Bh(b(a, c, d, e), g, q) : C(q)
			}

			function d(a, b, c, d) {
				var e = {};
				f(a) ? e.Dd = a : "number" === typeof a && (e.Dd = String(a));
				f(c) && (e.Ff = c);
				f(b) ? e.Fd = e.Cd = b : "number" === typeof b && (e.Fd = e.Cd = String(b));
				if (!qa(d) || 0 == d.length) return e;
				var g = d[0];
				if (!Ka(g)) return e;
				f(g.id) ? e.Ed = g.id : "number" === typeof g.id && (e.Ed = String(g.id));
				f(g.start_date) && (e.Df = g.start_date);
				f(g.end_date) && (e.Ef = g.end_date);
				return e
			}

			function e(a) {
				var b = uc,
					e = a.vtp_gtmOnSuccess,
					h = a.vtp_gtmOnFailure,
					p = a.vtp_conversionId,
					q = p.containerId,
					r = function (a) {
						return cd(a, q, p.id)
					},
					w = !1 !== r(Q.Ga),
					v = r(Q.Fa) || r(Q.F),
					u = r(Q.N),
					z = r(Q.T);
				if (b === Q.Z) {
					var E = r(Q.Ia) || {};
					w && (gg(E[Q.gb], !!E[Q.H]) && mh(g, v, void 0, u, z), lh(v, void 0, u, z));
					E[Q.H] && nh(g, E[Q.H], E[Q.ib], !!E[Q.hb], v);
					C(e)
				} else if ("purchase" === b) {
					var B = d(r(Q.Ka), r(Q.ba), r(Q.na), r(Q.S));
					c(p.ca[0], B, w, v, e, h)
				} else C(h)
			}
			var g = ["ha"];
			Z.__gtagha = e;
			Z.__gtagha.g = "gtagha";
			Z.__gtagha.h = !0;
			Z.__gtagha.b = 0;
		}();
	Z.a.e = ["google"],
		function () {
			(function (a) {
				Z.__e = a;
				Z.__e.g = "e";
				Z.__e.h = !0;
				Z.__e.b = 0
			})(function () {
				return uc
			})
		}();

	Z.a.v = ["google"],
		function () {
			(function (a) {
				Z.__v = a;
				Z.__v.g = "v";
				Z.__v.h = !0;
				Z.__v.b = 0
			})(function (a) {
				var b = a.vtp_name;
				if (!b || !b.replace) return !1;
				var c = V(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
				return void 0 !== c ? c : a.vtp_defaultValue
			})
		}();


	Z.a.gtagaw = ["google"],
		function () {
			var a = !1,
				b = [],
				c = ["aw", "dc"],
				d = function (a) {
					var b = W("google_trackConversion"),
						c = a.gtm_onFailure;
					"function" == typeof b ? b(a) || c() : c()
				},
				e = function () {
					for (; 0 < b.length;) d(b.shift())
				},
				g = function () {
					a || (a = !0, yd(), T(O("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
						e();
						b = {
							push: d
						}
					}, function () {
						e();
						a = !1
					}))
				},
				h = function (a, b, c, d) {
					if (ue()) {} else {
						qa(b) || (b = [b]);
						for (var e =
								0; e < b.length; e++) 1 > e && Bc(a.ca[0], a.ca[1], b[e], {
							Yd: c,
							xg: d
						})
					}
				},
				k = function (a) {
					if (a) {
						for (var b = [], c = 0; c < a.length; ++c) {
							var d = a[c];
							d && b.push({
								item_id: d.id,
								quantity: d.quantity,
								value: d.price,
								start_date: d.start_date,
								end_date: d.end_date
							})
						}
						return b
					}
				},
				l = function (a) {
					var d = a.vtp_conversionId,
						e = uc,
						l = e == Q.Z,
						m = d.ca[0],
						v = d.ca[1],
						u = void 0 !== v,
						z = d.containerId,
						E = u ? d.id : void 0,
						B = function (a) {
							return cd(a, z, E)
						},
						G = !1 !== B(Q.Ga),
						R = B(Q.Fa) || B(Q.F),
						M = B(Q.N),
						F = B(Q.T);
					if (l) {
						var N = B(Q.Ia) || {};
						G && (gg(N[Q.gb], !!N[Q.H]) && mh(c, R, void 0,
							M, F), lh(R, void 0, M, F));
						N[Q.H] && nh(c, N[Q.H], N[Q.ib], !!N[Q.hb], R);
						if (u) {
							var S = B(Q.Wb),
								J = B(Q.Ub),
								aa = B(Q.Vb),
								ha = B(Q.jd);
							h(d, S, J || aa, ha)
						}
					}
					var L = !1 === B(Q.$c) || !1 === B(Q.Ja);
					if (!l || !u && !L)
						if (!0 === B(Q.ad) && (u = !1), !1 !== B(Q.R) || u) {
							var I = {
								google_conversion_id: m,
								google_remarketing_only: !u,
								onload_callback: a.vtp_gtmOnSuccess,
								gtm_onFailure: a.vtp_gtmOnFailure,
								google_conversion_format: "3",
								google_conversion_color: "ffffff",
								google_conversion_domain: "",
								google_conversion_label: v,
								google_conversion_language: B(Q.Ha),
								google_conversion_value: B(Q.ba),
								google_conversion_currency: B(Q.na),
								google_conversion_order_id: B(Q.Ka),
								google_user_id: B(Q.aa),
								google_conversion_page_url: B(Q.jb),
								google_conversion_referrer_url: B(Q.kb),
								google_gtm: Dg()
							};
							!1 === B(Q.R) && (I.google_allow_ad_personalization_signals = !1);
							I.google_read_gcl_cookie_opt_out = !G;
							G && R && (I.google_gcl_cookie_prefix = R);
							var ja = function () {
								var a = B(Q.eb),
									b = {
										event: e
									};
								if (qa(a)) {
									for (var c = 0; c < a.length; ++c) {
										var d = a[c],
											g = B(d);
										void 0 !== g && (b[d] = g)
									}
									return b
								}
								var h = B("eventModel");
								if (!h) return null;
								t(h, b);
								for (var k =
										0; k < Q.Uc.length; ++k) delete b[Q.Uc[k]];
								return b
							}();
							ja && (I.google_custom_params = ja);
							!u && B(Q.S) && (I.google_gtag_event_data = {
								items: B(Q.S),
								value: B(Q.ba)
							});
							if (u && "purchase" == e) {
								B(Q.Nb) && (I.google_conversion_merchant_id = B(Q.Nb), I.google_basket_feed_country = B(Q.cd), I.google_basket_feed_language = B(Q.dd), I.google_basket_discount = B(Q.bd), I.google_basket_transaction_type = e, I.google_disable_merchant_reported_conversions = !0 === B(Q.ed), ue() && (I.google_disable_merchant_reported_conversions = !0));
								var ba = k(B(Q.S));
								ba &&
									(I.google_conversion_items = ba)
							}
							var Aa = !0;
							Aa && b.push(I)
						}
					g()
				};
			Z.__gtagaw = l;
			Z.__gtagaw.g = "gtagaw";
			Z.__gtagaw.h = !0;
			Z.__gtagaw.b = 0
		}();
	Z.a.get = ["google"],
		function () {
			function a(a, c) {
				ta(c, function (a) {
					"_" === a.charAt(0) && delete c[a]
				});
				var b = c[Q.nb] || {};
				ta(b, function (a) {
					"_" === a.charAt(0) && delete b[a]
				})
			}(function (a) {
				Z.__get = a;
				Z.__get.g = "get";
				Z.__get.h = !0;
				Z.__get.b = 0
			})(function (b) {
				if (b.vtp_isAutoTag) {
					for (var c = String(b.vtp_trackingId), d = uc || "", e = {}, g = Q.kd, h = 0; h < g.length; h++) {
						var k = fd(g[h], c);
						void 0 !== k && (e[g[h]] = k)
					}
					var l = fd(Q.eb, c);
					if (qa(l))
						for (var m = 0; m < l.length; m++) {
							var p = l[m],
								q = fd(p, c);
							void 0 !== q && (e[p] = q)
						} else {
							var r = V("eventModel");
							t(r, e)
						}
					if ("_" === d.charAt(0)) return;
					a(d, e);
					Oi(c, d, t(e))
				} else {
					var w = b.vtp_settings,
						v = w.eventParameters,
						u = w.userProperties;
					t(Y(b.vtp_eventParameters, "name", "value"), v);
					t(Y(b.vtp_userProperties, "name", "value"), u);
					v[Q.nb] = u;
					var z = String(b.vtp_eventName),
						E = b.vtp_allowSystemNames;
					if (!E && "_" === z.charAt(0)) return;
					E || a(z, v);
					(b.vtp_deferrable ? Qi : Oi)(String(w.streamId), z, v)
				}
				b.vtp_gtmOnSuccess()
			})
		}();


	Z.a.gtagfl = [],
		function () {
			function a(a) {
				var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
				if (b) {
					var c = {
						standard: 2,
						unique: 3,
						per_session: 4,
						transactions: 5,
						items_sold: 6,
						"": 1
					}[(b[5] || "").toLowerCase()];
					if (c) return {
						containerId: "DC-" + b[1],
						Xd: b[3] ? a : "",
						Ge: b[1],
						Fe: b[3] || "",
						Na: b[4] || "",
						L: c
					}
				}
			}

			function b(a, b) {
				function c(b, c, e) {
					void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + ""))
				}
				var d = [],
					e = b(Q.S) || [];
				if (qa(e))
					for (var g = 0; g < e.length; g++) {
						var p = e[g],
							q = g + 1;
						c("i", q, p.id);
						c("p", q, p.price);
						c("q", q, p.quantity);
						c("c", q, b(Q.ee));
						c("l", q, b(Q.Ha))
					}
				return d.join("|")
			}

			function c(a, b, c) {
				var d = /^u([1-9]\d?|100)$/,
					e = a(Q.fe) || {},
					g = gd(b, c),
					h = {},
					q = {};
				if (Ka(e))
					for (var r in e)
						if (e.hasOwnProperty(r) && d.test(r)) {
							var w = e[r];
							f(w) && (h[r] = w)
						}
				for (var v = 0; v < g.length; v++) {
					var u = g[v];
					d.test(u) && (h[u] = u)
				}
				for (var z in h) h.hasOwnProperty(z) && (q[z] = a(h[z]));
				return q
			}
			var d = ["aw", "dc"];
			(function (a) {
				Z.__gtagfl = a;
				Z.__gtagfl.g = "gtagfl";
				Z.__gtagfl.h = !0;
				Z.__gtagfl.b = 0
			})(function (e) {
				var g = e.vtp_gtmOnSuccess,
					h = e.vtp_gtmOnFailure,
					k = a(e.vtp_targetId);
				if (k) {
					var l = function (a) {
							return cd(a, k.containerId, k.Xd || void 0)
						},
						m = !1 !== l(Q.Ga),
						p = l(Q.Fa) || l(Q.F),
						q = l(Q.N),
						r = l(Q.T),
						w = l(Q.ie),
						v = 3 === zc();
					if (uc === Q.Z) {
						var u = l(Q.Ia) || {},
							z = l(Q.de),
							E = void 0 === z ? !0 : !!z;
						m && (gg(u[Q.gb], !!u[Q.H]) && mh(d, p, void 0, q, r), lh(p, void 0, q, r), zg(E, p, void 0, q, r));
						u[Q.H] && nh(d, u[Q.H], u[Q.ib], !!u[Q.hb], p);
						if (w && w.exclusion_parameters && w.engines) {}
						C(g)
					} else {
						var B = {},
							G = l(Q.he);
						if (Ka(G))
							for (var R in G)
								if (G.hasOwnProperty(R)) {
									var M = G[R];
									void 0 !== M && null !== M && (B[R] = M)
								}
						var F = "";
						if (5 === k.L || 6 === k.L) F = b(X, l);
						var N = c(l, k.containerId, k.Xd),
							S = !0 === l(Q.$d);
						if (ue() && S) {
							S = !1
						}
						var J = {
							Na: k.Na,
							hc: m,
							hf: q,
							jf: r,
							va: p,
							vb: l(Q.ba),
							L: k.L,
							nf: B,
							kc: k.Ge,
							nc: k.Fe,
							O: h,
							I: g,
							Cb: hh(U()),
							Dc: F,
							protocol: v ? "http:" : "https:",
							Hc: l(Q.ue),
							Eb: S,
							sessionId: l(Q.mb),
							Jb: void 0,
							transactionId: l(Q.Ka),
							Kb: void 0,
							Qc: N,
							Me: !1 !== l(Q.R)
						};
						Hg(J)
					}
				} else C(h)
			})
		}();

	Z.a.gtaggf = ["google"],
		function () {
			var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
				b = function (a) {
					if (a) {
						for (var b = [], c = 0, g = 0; g < a.length; ++g) {
							var h = a[g];
							!h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (b[c] = {
								cabin: h.travel_class,
								fare_product: h.fare_product,
								booking_code: h.booking_code,
								flight_number: h.flight_number,
								origin: h.origin,
								destination: h.destination,
								departure_date: h.start_date
							}, c++)
						}
						return b
					}
				};
			(function (a) {
				Z.__gtaggf = a;
				Z.__gtaggf.g = "gtaggf";
				Z.__gtaggf.h = !0;
				Z.__gtaggf.b =
					0
			})(function (c) {
				var d = uc,
					e = c.vtp_gtmOnSuccess,
					g = c.vtp_gtmOnFailure,
					h = c.vtp_conversionId,
					k = h.ca[0],
					l = h.containerId,
					m = function (a) {
						return cd(a, l, h.id)
					},
					p = !1 !== m(Q.Ga),
					q = m(Q.Fa) || m(Q.F),
					r = m(Q.N),
					w = m(Q.T);
				if (d === Q.Z) p && lh(q, void 0, r, w), C(e);
				else {
					var v = {
						conversion_id: k,
						onFailure: g,
						onSuccess: e,
						conversionLinkerEnabled: p,
						cookiePrefix: q
					};
					if ("purchase" === d) {
						var u = a.test(U()),
							z = {
								partner_id: k,
								trip_type: m(Q.xe),
								total_price: m(Q.ba),
								currency: m(Q.na),
								is_direct_booking: u,
								flight_segment: b(m(Q.S))
							},
							E = m(Q.te);
						E && "object" ===
							typeof E && (z.passengers_total = E.total, z.passengers_adult = E.adult, z.passengers_child = E.child, z.passengers_infant_in_seat = E.infant_in_seat, z.passengers_infant_in_lap = E.infant_in_lap);
						v.conversion_data = z
					}
					Jg(v)
				}
			})
		}();


	Z.a.gtagua = ["google"],
		function () {
			var a, b = {
					client_id: 1,
					client_storage: "storage",
					cookie_name: 1,
					cookie_domain: 1,
					cookie_expires: 1,
					cookie_path: 1,
					cookie_update: 1,
					sample_rate: 1,
					site_speed_sample_rate: 1,
					use_amp_client_id: 1,
					store_gac: 1,
					conversion_linker: "storeGac"
				},
				c = {
					anonymize_ip: 1,
					app_id: 1,
					app_installer_id: 1,
					app_name: 1,
					app_version: 1,
					campaign: {
						name: "campaignName",
						source: "campaignSource",
						medium: "campaignMedium",
						term: "campaignTerm",
						content: "campaignContent",
						id: "campaignId"
					},
					currency: "currencyCode",
					description: "exDescription",
					fatal: "exFatal",
					language: 1,
					non_interaction: 1,
					page_hostname: "hostname",
					page_referrer: "referrer",
					page_path: "page",
					page_location: "location",
					page_title: "title",
					screen_name: 1,
					transport_type: "transport",
					user_id: 1
				},
				d = {
					content_id: 1,
					event_category: 1,
					event_action: 1,
					event_label: 1,
					link_attribution: 1,
					linker: 1,
					method: 1,
					name: 1,
					send_page_view: 1,
					value: 1
				},
				e = {
					cookie_name: 1,
					cookie_expires: "duration",
					levels: 1
				},
				g = {
					anonymize_ip: 1,
					fatal: 1,
					non_interaction: 1,
					use_amp_client_id: 1,
					send_page_view: 1,
					store_gac: 1,
					conversion_linker: 1
				},
				h = function (a, b, c, d) {
					if (void 0 !== c)
						if (g[b] && (c = va(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c;
						else if (f(a)) d[a] = c;
					else
						for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
				},
				k = function (a) {
					return a && f(a) ? a.replace(/(_[a-z])/g, function (a) {
						return a[1].toUpperCase()
					}) : a
				},
				l = function (a, b, c) {
					a.hasOwnProperty(b) || (a[b] = c)
				},
				m = function (a, e, g) {
					var k = {},
						m = {},
						p = {},
						q;
					var r = fd(Q.pe, a);
					if (qa(r)) {
						for (var u = [], v = 0; v < r.length; v++) {
							var w = r[v];
							if (void 0 != w) {
								var z = w.id,
									aa = w.variant;
								void 0 != z && void 0 !=
									aa && u.push(String(z) + "." + String(aa))
							}
						}
						q = 0 < u.length ? u.join("!") : void 0
					} else q = void 0;
					var ha = q;
					ha && l(m, "exp", ha);
					var L = fd("custom_map", a);
					if (Ka(L))
						for (var I in L)
							if (L.hasOwnProperty(I) && /^(dimension|metric)\d+$/.test(I) && void 0 != L[I]) {
								var ja = fd(String(L[I]), a);
								void 0 !== ja && l(m, I, ja)
							}
					for (var ba = gd(a), Aa = 0; Aa < ba.length; ++Aa) {
						var ca = ba[Aa],
							pa = fd(ca, a);
						d.hasOwnProperty(ca) ? h(d[ca], ca, pa, k) : c.hasOwnProperty(ca) ? h(c[ca], ca, pa, m) : b.hasOwnProperty(ca) ? h(b[ca], ca, pa, p) : /^(dimension|metric|content_group)\d+$/.test(ca) ?
							h(1, ca, pa, m) : ca === Q.F && 0 > n(ba, Q.cb) && (p.cookieName = pa + "_ga")
					}
					var ka = String(uc);
					l(p, "cookieDomain", "auto");
					l(m, "forceSSL", !0);
					var Ea = "general";
					0 <= n("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ka) ? Ea = "ecommerce" : 0 <= n("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ka) ? Ea = "engagement" : "exception" == ka && (Ea = "error");
					l(k, "eventCategory",
						Ea);
					0 <= n(["view_item", "view_item_list", "view_promotion", "view_search_results"], ka) && l(m, "nonInteraction", !0);
					"login" == ka || "sign_up" == ka || "share" == ka ? l(k, "eventLabel", fd(Q.qe, a)) : "search" == ka || "view_search_results" == ka ? l(k, "eventLabel", fd(Q.ve, a)) : "select_content" == ka && l(k, "eventLabel", fd(Q.ce, a));
					var ab = k[Q.Ia] || {},
						bb = ab[Q.gb];
					bb || 0 != bb && ab[Q.H] ? p.allowLinker = !0 : !1 === bb && l(p, "useAmpClientId", !1);
					if (!1 === fd(Q.ae, a) || !1 === fd(Q.R, a)) m.allowAdFeatures = !1;
					p.name = e;
					m[">m"] = Dg(!0);
					m.hitCallback = g;
					k.W =
						m;
					k.ud = p;
					return k
				},
				p = function (a) {
					function b(a) {
						var b = t(a);
						b.list = a.list_name;
						b.listPosition = a.list_position;
						b.position = a.list_position || a.creative_slot;
						b.creative = a.creative_name;
						return b
					}

					function c(a) {
						for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
						return c.length ? c : void 0
					}

					function d(a) {
						return {
							id: g(e.Ka),
							affiliation: g(e.je),
							revenue: g(e.ba),
							tax: g(e.oe),
							shipping: g(e.ne),
							coupon: g(e.ke),
							list: g(e.Ob) || a
						}
					}
					for (var e = Q, g = function (b) {
							return cd(b, a, void 0)
						}, h = g(e.S), k, m = 0; h && m < h.length && !(k = h[m][e.Ob]); m++);
					var p = g("custom_map");
					if (Ka(p))
						for (var q = 0; h && q < h.length; ++q) {
							var r = h[q],
								w;
							for (w in p) p.hasOwnProperty(w) && /^(dimension|metric)\d+$/.test(w) && void 0 != p[w] && l(r, w, r[p[w]])
						}
					var v = null,
						L = uc,
						I = g(e.me);
					"purchase" == L || "refund" == L ? v = {
							action: L,
							Ma: d(),
							Aa: c(h)
						} : "add_to_cart" == L ? v = {
							action: "add",
							Aa: c(h)
						} : "remove_from_cart" == L ? v = {
							action: "remove",
							Aa: c(h)
						} : "view_item" == L ? v = {
							action: "detail",
							Ma: d(k),
							Aa: c(h)
						} : "view_item_list" == L ? v = {
							action: "impressions",
							If: c(h)
						} : "view_promotion" == L ? v = {
							action: "promo_view",
							Ec: c(I)
						} : "select_content" ==
						L && I && 0 < I.length ? v = {
							action: "promo_click",
							Ec: c(I)
						} : "select_content" == L ? v = {
							action: "click",
							Ma: {
								list: g(e.Ob) || k
							},
							Aa: c(h)
						} : "begin_checkout" == L || "checkout_progress" == L ? v = {
							action: "checkout",
							Aa: c(h),
							Ma: {
								step: "begin_checkout" == L ? 1 : g(e.gd),
								option: g(e.fd)
							}
						} : "set_checkout_option" == L && (v = {
							action: "checkout_option",
							Ma: {
								step: g(e.gd),
								option: g(e.fd)
							}
						});
					v && (v.Jg = g(e.na));
					return v
				},
				q = {},
				r = function (a, b) {
					var c = q[a];
					q[a] = t(b);
					if (!c) return !1;
					for (var d in b)
						if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
					for (var e in c)
						if (c.hasOwnProperty(e) &&
							c[e] !== b[e]) return !0;
					return !1
				},
				w = function (b) {
					var c = b.vtp_trackingId,
						d = Fd();
					if (na(d)) {
						var g = "gtag_" + c.split("-").join("_"),
							q = function (a) {
								var b = [].slice.call(arguments, 0);
								b[0] = g + "." + b[0];
								d.apply(window, b)
							},
							w = function () {
								var a = function (a, b) {
										for (var c = 0; b && c < b.length; c++) q(a, b[c])
									},
									b = p(c);
								if (b) {
									var d = b.action;
									if ("impressions" == d) a("ec:addImpression", b.If);
									else if ("promo_click" == d || "promo_view" == d) {
										var e = b.Ec;
										a("ec:addPromo", b.Ec);
										e && 0 < e.length && "promo_click" == d && q("ec:setAction", d)
									} else a("ec:addProduct",
										b.Aa), q("ec:setAction", d, b.Ma)
								}
							},
							v = function () {
								if (ue()) {} else {
									var a = fd(Q.se, c);
									a && (q("require", a, {
										dataLayer: "dataLayer"
									}), q("require", "render"))
								}
							},
							M = function () {
								if (ue()) {} else {}
							},
							F = m(c, g, b.vtp_gtmOnSuccess);
						r(g, F.ud) && d(function () {
							Dd() && Dd().remove(g)
						});
						d("create", c, F.ud);
						(function () {
							var a = fd("custom_map", c);
							d(function () {
								if (Ka(a)) {
									var b = F.W,
										c = Dd().getByName(g),
										d;
									for (d in a)
										if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d) && void 0 != a[d]) {
											var e = c.get(k(a[d]));
											l(b, d, e)
										}
								}
							})
						})();
						(function (a) {
							if (a) {
								var b = {};
								if (Ka(a))
									for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
								q("require", "linkid", b)
							}
						})(F.linkAttribution);
						var N =
							F[Q.Ia];
						if (N && N[Q.H]) {
							var S = N[Q.ib];
							Gd(g + ".", N[Q.H], void 0 === S ? !!N.use_anchor : "fragment" === S, !!N[Q.hb])
						}
						var J = function (a, b, c) {
								c && (b = "" + b);
								F.W[a] = b
							},
							aa = uc;
						aa == Q.Mb ? (v(), q("send", "pageview", F.W)) : aa == Q.Z ? (v(), M(), 0 != F.sendPageView && q("send", "pageview", F.W)) : "screen_view" == aa ? q("send", "screenview", F.W) : "timing_complete" == aa ? (J("timingCategory", F.eventCategory, !0), J("timingVar", F.name, !0), J("timingValue", ua(F.value)), void 0 !== F.eventLabel && J("timingLabel", F.eventLabel, !0), q("send", "timing", F.W)) : "exception" ==
							aa ? q("send", "exception", F.W) : "optimize.callback" != aa && (0 <= n("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), aa) && (q("require", "ec", "ec.js"), w()), J("eventCategory", F.eventCategory, !0), J("eventAction", F.eventAction || aa, !0), void 0 !== F.eventLabel && J("eventLabel", F.eventLabel, !0), void 0 !== F.value && J("eventValue", ua(F.value)), q("send", "event", F.W));
						a || (a = !0, yd(), T("https://www.google-analytics.com/analytics.js",
							function () {
								Dd().loaded || b.vtp_gtmOnFailure()
							}, b.vtp_gtmOnFailure))
					} else C(b.vtp_gtmOnFailure)
				};
			Z.__gtagua = w;
			Z.__gtagua.g = "gtagua";
			Z.__gtagua.h = !0;
			Z.__gtagua.b = 0
		}();

	var Ti = {};
	Ti.macro = function (a) {
		if (pf.$b.hasOwnProperty(a)) return pf.$b[a]
	}, Ti.onHtmlSuccess = pf.td(!0), Ti.onHtmlFailure = pf.td(!1);
	Ti.dataLayer = bd;
	Ti.callback = function (a) {
		wc.hasOwnProperty(a) && na(wc[a]) && wc[a]();
		delete wc[a]
	};
	Ti.Ve = function () {
		K[H.m] = Ti;
		xc = Z.a;
		Sb = Sb || pf;
		Tb = pd
	};
	Ti.Jf = function () {
		K = x.google_tag_manager = x.google_tag_manager || {};
		if (K[H.m]) {
			var a = K.zones;
			a && a.unregisterChild(H.m)
		} else {
			for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Lb.push(c[d]);
			for (var e = b.tags || [], g = 0; g < e.length; g++) Ob.push(e[g]);
			for (var h = b.predicates || [], k = 0; k < h.length; k++) Nb.push(h[k]);
			for (var l = b.rules || [], m = 0; m < l.length; m++) {
				for (var p = l[m], q = {}, r = 0; r < p.length; r++) q[p[r][0]] =
					Array.prototype.slice.call(p[r], 1);
				Mb.push(q)
			}
			Qb = Z;
			Rb = wh;
			Ti.Ve();
			Ne();
			sd = !1;
			td = 0;
			if ("interactive" == y.readyState && !y.createEventObject || "complete" == y.readyState) vd();
			else {
				A(y, "DOMContentLoaded", vd);
				A(y, "readystatechange", vd);
				if (y.createEventObject && y.documentElement.doScroll) {
					var w = !0;
					try {
						w = !x.frameElement
					} catch (E) {}
					w && wd()
				}
				A(x, "load", vd)
			}
			Be = !1;
			"complete" === y.readyState ? De() : A(x, "load", De);
			a: {
				if (!Sc) break a;x.setInterval(Tc, 864E5);
			}
			tc = (new Date).getTime();
		}
	};
	(0, Ti.Jf)();

})()
