(() => {
  function I(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var { toString: Et } = Object.prototype,
    { getPrototypeOf: ce } = Object,
    $ = ((e) => (t) => {
      let r = Et.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    g = (e) => ((e = e.toLowerCase()), (t) => $(t) === e),
    G = (e) => (t) => typeof t === e,
    { isArray: L } = Array,
    j = G('undefined');
  function wt(e) {
    return (
      e !== null &&
      !j(e) &&
      e.constructor !== null &&
      !j(e.constructor) &&
      S(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  var Pe = g('ArrayBuffer');
  function bt(e) {
    let t;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Pe(e.buffer)),
      t
    );
  }
  var xt = G('string'),
    S = G('function'),
    Fe = G('number'),
    X = (e) => e !== null && typeof e == 'object',
    St = (e) => e === !0 || e === !1,
    K = (e) => {
      if ($(e) !== 'object') return !1;
      let t = ce(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    At = g('Date'),
    gt = g('File'),
    Rt = g('Blob'),
    Ot = g('FileList'),
    Tt = (e) => X(e) && S(e.pipe),
    Nt = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == 'function' && e instanceof FormData) ||
          (S(e.append) &&
            ((t = $(e)) === 'formdata' ||
              (t === 'object' &&
                S(e.toString) &&
                e.toString() === '[object FormData]'))))
      );
    },
    Ct = g('URLSearchParams'),
    Pt = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  function H(e, t, { allOwnKeys: r = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let o, n;
    if ((typeof e != 'object' && (e = [e]), L(e)))
      for (o = 0, n = e.length; o < n; o++) t.call(null, e[o], o, e);
    else {
      let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
        i = s.length,
        c;
      for (o = 0; o < i; o++) (c = s[o]), t.call(null, e[c], c, e);
    }
  }
  function Be(e, t) {
    t = t.toLowerCase();
    let r = Object.keys(e),
      o = r.length,
      n;
    for (; o-- > 0; ) if (((n = r[o]), t === n.toLowerCase())) return n;
    return null;
  }
  var Le = (() =>
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : global)(),
    De = (e) => !j(e) && e !== Le;
  function ue() {
    let { caseless: e } = (De(this) && this) || {},
      t = {},
      r = (o, n) => {
        let s = (e && Be(t, n)) || n;
        K(t[s]) && K(o)
          ? (t[s] = ue(t[s], o))
          : K(o)
          ? (t[s] = ue({}, o))
          : L(o)
          ? (t[s] = o.slice())
          : (t[s] = o);
      };
    for (let o = 0, n = arguments.length; o < n; o++)
      arguments[o] && H(arguments[o], r);
    return t;
  }
  var Ft = (e, t, r, { allOwnKeys: o } = {}) => (
      H(
        t,
        (n, s) => {
          r && S(n) ? (e[s] = I(n, r)) : (e[s] = n);
        },
        { allOwnKeys: o },
      ),
      e
    ),
    Bt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Lt = (e, t, r, o) => {
      (e.prototype = Object.create(t.prototype, o)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, 'super', { value: t.prototype }),
        r && Object.assign(e.prototype, r);
    },
    Dt = (e, t, r, o) => {
      let n,
        s,
        i,
        c = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
          (i = n[s]),
            (!o || o(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
        e = r !== !1 && ce(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    Ut = (e, t, r) => {
      (e = String(e)),
        (r === void 0 || r > e.length) && (r = e.length),
        (r -= t.length);
      let o = e.indexOf(t, r);
      return o !== -1 && o === r;
    },
    _t = (e) => {
      if (!e) return null;
      if (L(e)) return e;
      let t = e.length;
      if (!Fe(t)) return null;
      let r = new Array(t);
      for (; t-- > 0; ) r[t] = e[t];
      return r;
    },
    kt = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < 'u' && ce(Uint8Array)),
    It = (e, t) => {
      let o = (e && e[Symbol.iterator]).call(e),
        n;
      for (; (n = o.next()) && !n.done; ) {
        let s = n.value;
        t.call(e, s[0], s[1]);
      }
    },
    jt = (e, t) => {
      let r,
        o = [];
      for (; (r = e.exec(t)) !== null; ) o.push(r);
      return o;
    },
    Ht = g('HTMLFormElement'),
    qt = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, o, n) {
        return o.toUpperCase() + n;
      }),
    Ne = (
      ({ hasOwnProperty: e }) =>
      (t, r) =>
        e.call(t, r)
    )(Object.prototype),
    Mt = g('RegExp'),
    Ue = (e, t) => {
      let r = Object.getOwnPropertyDescriptors(e),
        o = {};
      H(r, (n, s) => {
        let i;
        (i = t(n, s, e)) !== !1 && (o[s] = i || n);
      }),
        Object.defineProperties(e, o);
    },
    Jt = (e) => {
      Ue(e, (t, r) => {
        if (S(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
          return !1;
        let o = e[r];
        if (S(o)) {
          if (((t.enumerable = !1), 'writable' in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + r + "'");
            });
        }
      });
    },
    vt = (e, t) => {
      let r = {},
        o = (n) => {
          n.forEach((s) => {
            r[s] = !0;
          });
        };
      return L(e) ? o(e) : o(String(e).split(t)), r;
    },
    zt = () => {},
    Vt = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    ae = 'abcdefghijklmnopqrstuvwxyz',
    Ce = '0123456789',
    _e = { DIGIT: Ce, ALPHA: ae, ALPHA_DIGIT: ae + ae.toUpperCase() + Ce },
    Wt = (e = 16, t = _e.ALPHA_DIGIT) => {
      let r = '',
        { length: o } = t;
      for (; e--; ) r += t[(Math.random() * o) | 0];
      return r;
    };
  function Kt(e) {
    return !!(
      e &&
      S(e.append) &&
      e[Symbol.toStringTag] === 'FormData' &&
      e[Symbol.iterator]
    );
  }
  var $t = (e) => {
      let t = new Array(10),
        r = (o, n) => {
          if (X(o)) {
            if (t.indexOf(o) >= 0) return;
            if (!('toJSON' in o)) {
              t[n] = o;
              let s = L(o) ? [] : {};
              return (
                H(o, (i, c) => {
                  let d = r(i, n + 1);
                  !j(d) && (s[c] = d);
                }),
                (t[n] = void 0),
                s
              );
            }
          }
          return o;
        };
      return r(e, 0);
    },
    Gt = g('AsyncFunction'),
    Xt = (e) => e && (X(e) || S(e)) && S(e.then) && S(e.catch),
    a = {
      isArray: L,
      isArrayBuffer: Pe,
      isBuffer: wt,
      isFormData: Nt,
      isArrayBufferView: bt,
      isString: xt,
      isNumber: Fe,
      isBoolean: St,
      isObject: X,
      isPlainObject: K,
      isUndefined: j,
      isDate: At,
      isFile: gt,
      isBlob: Rt,
      isRegExp: Mt,
      isFunction: S,
      isStream: Tt,
      isURLSearchParams: Ct,
      isTypedArray: kt,
      isFileList: Ot,
      forEach: H,
      merge: ue,
      extend: Ft,
      trim: Pt,
      stripBOM: Bt,
      inherits: Lt,
      toFlatObject: Dt,
      kindOf: $,
      kindOfTest: g,
      endsWith: Ut,
      toArray: _t,
      forEachEntry: It,
      matchAll: jt,
      isHTMLForm: Ht,
      hasOwnProperty: Ne,
      hasOwnProp: Ne,
      reduceDescriptors: Ue,
      freezeMethods: Jt,
      toObjectSet: vt,
      toCamelCase: qt,
      noop: zt,
      toFiniteNumber: Vt,
      findKey: Be,
      global: Le,
      isContextDefined: De,
      ALPHABET: _e,
      generateString: Wt,
      isSpecCompliantForm: Kt,
      toJSONObject: $t,
      isAsyncFn: Gt,
      isThenable: Xt,
    };
  function D(e, t, r, o, n) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      r && (this.config = r),
      o && (this.request = o),
      n && (this.response = n);
  }
  a.inherits(D, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: a.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var ke = D.prototype,
    Ie = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((e) => {
    Ie[e] = { value: e };
  });
  Object.defineProperties(D, Ie);
  Object.defineProperty(ke, 'isAxiosError', { value: !0 });
  D.from = (e, t, r, o, n, s) => {
    let i = Object.create(ke);
    return (
      a.toFlatObject(
        e,
        i,
        function (d) {
          return d !== Error.prototype;
        },
        (c) => c !== 'isAxiosError',
      ),
      D.call(i, e.message, t, r, o, n),
      (i.cause = e),
      (i.name = e.name),
      s && Object.assign(i, s),
      i
    );
  };
  var m = D;
  var Q = null;
  function le(e) {
    return a.isPlainObject(e) || a.isArray(e);
  }
  function He(e) {
    return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
  }
  function je(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (n, s) {
            return (n = He(n)), !r && s ? '[' + n + ']' : n;
          })
          .join(r ? '.' : '')
      : t;
  }
  function Qt(e) {
    return a.isArray(e) && !e.some(le);
  }
  var Zt = a.toFlatObject(a, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function Yt(e, t, r) {
    if (!a.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new (Q || FormData)()),
      (r = a.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (h, R) {
          return !a.isUndefined(R[h]);
        },
      ));
    let o = r.metaTokens,
      n = r.visitor || l,
      s = r.dots,
      i = r.indexes,
      d = (r.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
    if (!a.isFunction(n)) throw new TypeError('visitor must be a function');
    function u(f) {
      if (f === null) return '';
      if (a.isDate(f)) return f.toISOString();
      if (!d && a.isBlob(f))
        throw new m('Blob is not supported. Use a Buffer instead.');
      return a.isArrayBuffer(f) || a.isTypedArray(f)
        ? d && typeof Blob == 'function'
          ? new Blob([f])
          : Buffer.from(f)
        : f;
    }
    function l(f, h, R) {
      let A = f;
      if (f && !R && typeof f == 'object') {
        if (a.endsWith(h, '{}'))
          (h = o ? h : h.slice(0, -2)), (f = JSON.stringify(f));
        else if (
          (a.isArray(f) && Qt(f)) ||
          ((a.isFileList(f) || a.endsWith(h, '[]')) && (A = a.toArray(f)))
        )
          return (
            (h = He(h)),
            A.forEach(function (W, yt) {
              !(a.isUndefined(W) || W === null) &&
                t.append(
                  i === !0 ? je([h], yt, s) : i === null ? h : h + '[]',
                  u(W),
                );
            }),
            !1
          );
      }
      return le(f) ? !0 : (t.append(je(R, h, s), u(f)), !1);
    }
    let p = [],
      w = Object.assign(Zt, {
        defaultVisitor: l,
        convertValue: u,
        isVisitable: le,
      });
    function y(f, h) {
      if (!a.isUndefined(f)) {
        if (p.indexOf(f) !== -1)
          throw Error('Circular reference detected in ' + h.join('.'));
        p.push(f),
          a.forEach(f, function (A, B) {
            (!(a.isUndefined(A) || A === null) &&
              n.call(t, A, a.isString(B) ? B.trim() : B, h, w)) === !0 &&
              y(A, h ? h.concat(B) : [B]);
          }),
          p.pop();
      }
    }
    if (!a.isObject(e)) throw new TypeError('data must be an object');
    return y(e), t;
  }
  var C = Yt;
  function qe(e) {
    let t = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (o) {
      return t[o];
    });
  }
  function Me(e, t) {
    (this._pairs = []), e && C(e, this, t);
  }
  var Je = Me.prototype;
  Je.append = function (t, r) {
    this._pairs.push([t, r]);
  };
  Je.toString = function (t) {
    let r = t
      ? function (o) {
          return t.call(this, o, qe);
        }
      : qe;
    return this._pairs
      .map(function (n) {
        return r(n[0]) + '=' + r(n[1]);
      }, '')
      .join('&');
  };
  var Z = Me;
  function er(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function q(e, t, r) {
    if (!t) return e;
    let o = (r && r.encode) || er,
      n = r && r.serialize,
      s;
    if (
      (n
        ? (s = n(t, r))
        : (s = a.isURLSearchParams(t) ? t.toString() : new Z(t, r).toString(o)),
      s)
    ) {
      let i = e.indexOf('#');
      i !== -1 && (e = e.slice(0, i)),
        (e += (e.indexOf('?') === -1 ? '?' : '&') + s);
    }
    return e;
  }
  var fe = class {
      constructor() {
        this.handlers = [];
      }
      use(t, r, o) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        a.forEach(this.handlers, function (o) {
          o !== null && t(o);
        });
      }
    },
    de = fe;
  var Y = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
  var ve = typeof URLSearchParams < 'u' ? URLSearchParams : Z;
  var ze = typeof FormData < 'u' ? FormData : null;
  var Ve = typeof Blob < 'u' ? Blob : null;
  var tr = (() => {
      let e;
      return typeof navigator < 'u' &&
        ((e = navigator.product) === 'ReactNative' ||
          e === 'NativeScript' ||
          e === 'NS')
        ? !1
        : typeof window < 'u' && typeof document < 'u';
    })(),
    rr = (() =>
      typeof WorkerGlobalScope < 'u' &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == 'function')(),
    b = {
      isBrowser: !0,
      classes: { URLSearchParams: ve, FormData: ze, Blob: Ve },
      isStandardBrowserEnv: tr,
      isStandardBrowserWebWorkerEnv: rr,
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    };
  function pe(e, t) {
    return C(
      e,
      new b.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (r, o, n, s) {
            return b.isNode && a.isBuffer(r)
              ? (this.append(o, r.toString('base64')), !1)
              : s.defaultVisitor.apply(this, arguments);
          },
        },
        t,
      ),
    );
  }
  function or(e) {
    return a
      .matchAll(/\w+|\[(\w*)]/g, e)
      .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
  }
  function nr(e) {
    let t = {},
      r = Object.keys(e),
      o,
      n = r.length,
      s;
    for (o = 0; o < n; o++) (s = r[o]), (t[s] = e[s]);
    return t;
  }
  function sr(e) {
    function t(r, o, n, s) {
      let i = r[s++],
        c = Number.isFinite(+i),
        d = s >= r.length;
      return (
        (i = !i && a.isArray(n) ? n.length : i),
        d
          ? (a.hasOwnProp(n, i) ? (n[i] = [n[i], o]) : (n[i] = o), !c)
          : ((!n[i] || !a.isObject(n[i])) && (n[i] = []),
            t(r, o, n[i], s) && a.isArray(n[i]) && (n[i] = nr(n[i])),
            !c)
      );
    }
    if (a.isFormData(e) && a.isFunction(e.entries)) {
      let r = {};
      return (
        a.forEachEntry(e, (o, n) => {
          t(or(o), n, r, 0);
        }),
        r
      );
    }
    return null;
  }
  var ee = sr;
  function ir(e, t, r) {
    if (a.isString(e))
      try {
        return (t || JSON.parse)(e), a.trim(e);
      } catch (o) {
        if (o.name !== 'SyntaxError') throw o;
      }
    return (r || JSON.stringify)(e);
  }
  var me = {
    transitional: Y,
    adapter: b.isNode ? 'http' : 'xhr',
    transformRequest: [
      function (t, r) {
        let o = r.getContentType() || '',
          n = o.indexOf('application/json') > -1,
          s = a.isObject(t);
        if ((s && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
          return n && n ? JSON.stringify(ee(t)) : t;
        if (
          a.isArrayBuffer(t) ||
          a.isBuffer(t) ||
          a.isStream(t) ||
          a.isFile(t) ||
          a.isBlob(t)
        )
          return t;
        if (a.isArrayBufferView(t)) return t.buffer;
        if (a.isURLSearchParams(t))
          return (
            r.setContentType(
              'application/x-www-form-urlencoded;charset=utf-8',
              !1,
            ),
            t.toString()
          );
        let c;
        if (s) {
          if (o.indexOf('application/x-www-form-urlencoded') > -1)
            return pe(t, this.formSerializer).toString();
          if ((c = a.isFileList(t)) || o.indexOf('multipart/form-data') > -1) {
            let d = this.env && this.env.FormData;
            return C(
              c ? { 'files[]': t } : t,
              d && new d(),
              this.formSerializer,
            );
          }
        }
        return s || n ? (r.setContentType('application/json', !1), ir(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        let r = this.transitional || me.transitional,
          o = r && r.forcedJSONParsing,
          n = this.responseType === 'json';
        if (t && a.isString(t) && ((o && !this.responseType) || n)) {
          let i = !(r && r.silentJSONParsing) && n;
          try {
            return JSON.parse(t);
          } catch (c) {
            if (i)
              throw c.name === 'SyntaxError'
                ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
                : c;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: b.classes.FormData, Blob: b.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': void 0,
      },
    },
  };
  a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    me.headers[e] = {};
  });
  var U = me;
  var ar = a.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]),
    We = (e) => {
      let t = {},
        r,
        o,
        n;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (i) {
              (n = i.indexOf(':')),
                (r = i.substring(0, n).trim().toLowerCase()),
                (o = i.substring(n + 1).trim()),
                !(!r || (t[r] && ar[r])) &&
                  (r === 'set-cookie'
                    ? t[r]
                      ? t[r].push(o)
                      : (t[r] = [o])
                    : (t[r] = t[r] ? t[r] + ', ' + o : o));
            }),
        t
      );
    };
  var Ke = Symbol('internals');
  function M(e) {
    return e && String(e).trim().toLowerCase();
  }
  function te(e) {
    return e === !1 || e == null ? e : a.isArray(e) ? e.map(te) : String(e);
  }
  function ur(e) {
    let t = Object.create(null),
      r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
      o;
    for (; (o = r.exec(e)); ) t[o[1]] = o[2];
    return t;
  }
  var cr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function he(e, t, r, o, n) {
    if (a.isFunction(o)) return o.call(this, t, r);
    if ((n && (t = r), !!a.isString(t))) {
      if (a.isString(o)) return t.indexOf(o) !== -1;
      if (a.isRegExp(o)) return o.test(t);
    }
  }
  function lr(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
  }
  function fr(e, t) {
    let r = a.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((o) => {
      Object.defineProperty(e, o + r, {
        value: function (n, s, i) {
          return this[o].call(this, t, n, s, i);
        },
        configurable: !0,
      });
    });
  }
  var _ = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, r, o) {
      let n = this;
      function s(c, d, u) {
        let l = M(d);
        if (!l) throw new Error('header name must be a non-empty string');
        let p = a.findKey(n, l);
        (!p || n[p] === void 0 || u === !0 || (u === void 0 && n[p] !== !1)) &&
          (n[p || d] = te(c));
      }
      let i = (c, d) => a.forEach(c, (u, l) => s(u, l, d));
      return (
        a.isPlainObject(t) || t instanceof this.constructor
          ? i(t, r)
          : a.isString(t) && (t = t.trim()) && !cr(t)
          ? i(We(t), r)
          : t != null && s(r, t, o),
        this
      );
    }
    get(t, r) {
      if (((t = M(t)), t)) {
        let o = a.findKey(this, t);
        if (o) {
          let n = this[o];
          if (!r) return n;
          if (r === !0) return ur(n);
          if (a.isFunction(r)) return r.call(this, n, o);
          if (a.isRegExp(r)) return r.exec(n);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(t, r) {
      if (((t = M(t)), t)) {
        let o = a.findKey(this, t);
        return !!(o && this[o] !== void 0 && (!r || he(this, this[o], o, r)));
      }
      return !1;
    }
    delete(t, r) {
      let o = this,
        n = !1;
      function s(i) {
        if (((i = M(i)), i)) {
          let c = a.findKey(o, i);
          c && (!r || he(o, o[c], c, r)) && (delete o[c], (n = !0));
        }
      }
      return a.isArray(t) ? t.forEach(s) : s(t), n;
    }
    clear(t) {
      let r = Object.keys(this),
        o = r.length,
        n = !1;
      for (; o--; ) {
        let s = r[o];
        (!t || he(this, this[s], s, t, !0)) && (delete this[s], (n = !0));
      }
      return n;
    }
    normalize(t) {
      let r = this,
        o = {};
      return (
        a.forEach(this, (n, s) => {
          let i = a.findKey(o, s);
          if (i) {
            (r[i] = te(n)), delete r[s];
            return;
          }
          let c = t ? lr(s) : String(s).trim();
          c !== s && delete r[s], (r[c] = te(n)), (o[c] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      let r = Object.create(null);
      return (
        a.forEach(this, (o, n) => {
          o != null &&
            o !== !1 &&
            (r[n] = t && a.isArray(o) ? o.join(', ') : o);
        }),
        r
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...r) {
      let o = new this(t);
      return r.forEach((n) => o.set(n)), o;
    }
    static accessor(t) {
      let o = (this[Ke] = this[Ke] = { accessors: {} }).accessors,
        n = this.prototype;
      function s(i) {
        let c = M(i);
        o[c] || (fr(n, i), (o[c] = !0));
      }
      return a.isArray(t) ? t.forEach(s) : s(t), this;
    }
  };
  _.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
  ]);
  a.reduceDescriptors(_.prototype, ({ value: e }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(o) {
        this[r] = o;
      },
    };
  });
  a.freezeMethods(_);
  var x = _;
  function J(e, t) {
    let r = this || U,
      o = t || r,
      n = x.from(o.headers),
      s = o.data;
    return (
      a.forEach(e, function (c) {
        s = c.call(r, s, n.normalize(), t ? t.status : void 0);
      }),
      n.normalize(),
      s
    );
  }
  function v(e) {
    return !!(e && e.__CANCEL__);
  }
  function $e(e, t, r) {
    m.call(this, e ?? 'canceled', m.ERR_CANCELED, t, r),
      (this.name = 'CanceledError');
  }
  a.inherits($e, m, { __CANCEL__: !0 });
  var P = $e;
  function ye(e, t, r) {
    let o = r.config.validateStatus;
    !r.status || !o || o(r.status)
      ? e(r)
      : t(
          new m(
            'Request failed with status code ' + r.status,
            [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r,
          ),
        );
  }
  var Ge = b.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (r, o, n, s, i, c) {
            let d = [];
            d.push(r + '=' + encodeURIComponent(o)),
              a.isNumber(n) && d.push('expires=' + new Date(n).toGMTString()),
              a.isString(s) && d.push('path=' + s),
              a.isString(i) && d.push('domain=' + i),
              c === !0 && d.push('secure'),
              (document.cookie = d.join('; '));
          },
          read: function (r) {
            let o = document.cookie.match(
              new RegExp('(^|;\\s*)(' + r + ')=([^;]*)'),
            );
            return o ? decodeURIComponent(o[3]) : null;
          },
          remove: function (r) {
            this.write(r, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
  function Ee(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function we(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  }
  function z(e, t) {
    return e && !Ee(t) ? we(e, t) : t;
  }
  var Xe = b.isStandardBrowserEnv
    ? (function () {
        let t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement('a'),
          o;
        function n(s) {
          let i = s;
          return (
            t && (r.setAttribute('href', i), (i = r.href)),
            r.setAttribute('href', i),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          );
        }
        return (
          (o = n(window.location.href)),
          function (i) {
            let c = a.isString(i) ? n(i) : i;
            return c.protocol === o.protocol && c.host === o.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
  function be(e) {
    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
  }
  function dr(e, t) {
    e = e || 10;
    let r = new Array(e),
      o = new Array(e),
      n = 0,
      s = 0,
      i;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (d) {
        let u = Date.now(),
          l = o[s];
        i || (i = u), (r[n] = d), (o[n] = u);
        let p = s,
          w = 0;
        for (; p !== n; ) (w += r[p++]), (p = p % e);
        if (((n = (n + 1) % e), n === s && (s = (s + 1) % e), u - i < t))
          return;
        let y = l && u - l;
        return y ? Math.round((w * 1e3) / y) : void 0;
      }
    );
  }
  var Qe = dr;
  function Ze(e, t) {
    let r = 0,
      o = Qe(50, 250);
    return (n) => {
      let s = n.loaded,
        i = n.lengthComputable ? n.total : void 0,
        c = s - r,
        d = o(c),
        u = s <= i;
      r = s;
      let l = {
        loaded: s,
        total: i,
        progress: i ? s / i : void 0,
        bytes: c,
        rate: d || void 0,
        estimated: d && i && u ? (i - s) / d : void 0,
        event: n,
      };
      (l[t ? 'download' : 'upload'] = !0), e(l);
    };
  }
  var pr = typeof XMLHttpRequest < 'u',
    Ye =
      pr &&
      function (e) {
        return new Promise(function (r, o) {
          let n = e.data,
            s = x.from(e.headers).normalize(),
            i = e.responseType,
            c;
          function d() {
            e.cancelToken && e.cancelToken.unsubscribe(c),
              e.signal && e.signal.removeEventListener('abort', c);
          }
          a.isFormData(n) &&
            (b.isStandardBrowserEnv || b.isStandardBrowserWebWorkerEnv
              ? s.setContentType(!1)
              : s.setContentType('multipart/form-data;', !1));
          let u = new XMLHttpRequest();
          if (e.auth) {
            let y = e.auth.username || '',
              f = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : '';
            s.set('Authorization', 'Basic ' + btoa(y + ':' + f));
          }
          let l = z(e.baseURL, e.url);
          u.open(
            e.method.toUpperCase(),
            q(l, e.params, e.paramsSerializer),
            !0,
          ),
            (u.timeout = e.timeout);
          function p() {
            if (!u) return;
            let y = x.from(
                'getAllResponseHeaders' in u && u.getAllResponseHeaders(),
              ),
              h = {
                data:
                  !i || i === 'text' || i === 'json'
                    ? u.responseText
                    : u.response,
                status: u.status,
                statusText: u.statusText,
                headers: y,
                config: e,
                request: u,
              };
            ye(
              function (A) {
                r(A), d();
              },
              function (A) {
                o(A), d();
              },
              h,
            ),
              (u = null);
          }
          if (
            ('onloadend' in u
              ? (u.onloadend = p)
              : (u.onreadystatechange = function () {
                  !u ||
                    u.readyState !== 4 ||
                    (u.status === 0 &&
                      !(
                        u.responseURL && u.responseURL.indexOf('file:') === 0
                      )) ||
                    setTimeout(p);
                }),
            (u.onabort = function () {
              u &&
                (o(new m('Request aborted', m.ECONNABORTED, e, u)), (u = null));
            }),
            (u.onerror = function () {
              o(new m('Network Error', m.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let f = e.timeout
                  ? 'timeout of ' + e.timeout + 'ms exceeded'
                  : 'timeout exceeded',
                h = e.transitional || Y;
              e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
                o(
                  new m(
                    f,
                    h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                    e,
                    u,
                  ),
                ),
                (u = null);
            }),
            b.isStandardBrowserEnv)
          ) {
            let y =
              (e.withCredentials || Xe(l)) &&
              e.xsrfCookieName &&
              Ge.read(e.xsrfCookieName);
            y && s.set(e.xsrfHeaderName, y);
          }
          n === void 0 && s.setContentType(null),
            'setRequestHeader' in u &&
              a.forEach(s.toJSON(), function (f, h) {
                u.setRequestHeader(h, f);
              }),
            a.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            i && i !== 'json' && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == 'function' &&
              u.addEventListener('progress', Ze(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == 'function' &&
              u.upload &&
              u.upload.addEventListener('progress', Ze(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((c = (y) => {
                u &&
                  (o(!y || y.type ? new P(null, e, u) : y),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(c),
              e.signal &&
                (e.signal.aborted
                  ? c()
                  : e.signal.addEventListener('abort', c)));
          let w = be(l);
          if (w && b.protocols.indexOf(w) === -1) {
            o(new m('Unsupported protocol ' + w + ':', m.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(n || null);
        });
      };
  var re = { http: Q, xhr: Ye };
  a.forEach(re, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t });
      } catch {}
      Object.defineProperty(e, 'adapterName', { value: t });
    }
  });
  var oe = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      let { length: t } = e,
        r,
        o;
      for (
        let n = 0;
        n < t && ((r = e[n]), !(o = a.isString(r) ? re[r.toLowerCase()] : r));
        n++
      );
      if (!o)
        throw o === !1
          ? new m(
              `Adapter ${r} is not supported by the environment`,
              'ERR_NOT_SUPPORT',
            )
          : new Error(
              a.hasOwnProp(re, r)
                ? `Adapter '${r}' is not available in the build`
                : `Unknown adapter '${r}'`,
            );
      if (!a.isFunction(o)) throw new TypeError('adapter is not a function');
      return o;
    },
    adapters: re,
  };
  function xe(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new P(null, e);
  }
  function ne(e) {
    return (
      xe(e),
      (e.headers = x.from(e.headers)),
      (e.data = J.call(e, e.transformRequest)),
      ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1),
      oe
        .getAdapter(e.adapter || U.adapter)(e)
        .then(
          function (o) {
            return (
              xe(e),
              (o.data = J.call(e, e.transformResponse, o)),
              (o.headers = x.from(o.headers)),
              o
            );
          },
          function (o) {
            return (
              v(o) ||
                (xe(e),
                o &&
                  o.response &&
                  ((o.response.data = J.call(
                    e,
                    e.transformResponse,
                    o.response,
                  )),
                  (o.response.headers = x.from(o.response.headers)))),
              Promise.reject(o)
            );
          },
        )
    );
  }
  var et = (e) => (e instanceof x ? e.toJSON() : e);
  function O(e, t) {
    t = t || {};
    let r = {};
    function o(u, l, p) {
      return a.isPlainObject(u) && a.isPlainObject(l)
        ? a.merge.call({ caseless: p }, u, l)
        : a.isPlainObject(l)
        ? a.merge({}, l)
        : a.isArray(l)
        ? l.slice()
        : l;
    }
    function n(u, l, p) {
      if (a.isUndefined(l)) {
        if (!a.isUndefined(u)) return o(void 0, u, p);
      } else return o(u, l, p);
    }
    function s(u, l) {
      if (!a.isUndefined(l)) return o(void 0, l);
    }
    function i(u, l) {
      if (a.isUndefined(l)) {
        if (!a.isUndefined(u)) return o(void 0, u);
      } else return o(void 0, l);
    }
    function c(u, l, p) {
      if (p in t) return o(u, l);
      if (p in e) return o(void 0, u);
    }
    let d = {
      url: s,
      method: s,
      data: s,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: c,
      headers: (u, l) => n(et(u), et(l), !0),
    };
    return (
      a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
        let p = d[l] || n,
          w = p(e[l], t[l], l);
        (a.isUndefined(w) && p !== c) || (r[l] = w);
      }),
      r
    );
  }
  var se = '1.5.0';
  var Se = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
      Se[e] = function (o) {
        return typeof o === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
      };
    },
  );
  var tt = {};
  Se.transitional = function (t, r, o) {
    function n(s, i) {
      return (
        '[Axios v' +
        se +
        "] Transitional option '" +
        s +
        "'" +
        i +
        (o ? '. ' + o : '')
      );
    }
    return (s, i, c) => {
      if (t === !1)
        throw new m(
          n(i, ' has been removed' + (r ? ' in ' + r : '')),
          m.ERR_DEPRECATED,
        );
      return (
        r &&
          !tt[i] &&
          ((tt[i] = !0),
          console.warn(
            n(
              i,
              ' has been deprecated since v' +
                r +
                ' and will be removed in the near future',
            ),
          )),
        t ? t(s, i, c) : !0
      );
    };
  };
  function mr(e, t, r) {
    if (typeof e != 'object')
      throw new m('options must be an object', m.ERR_BAD_OPTION_VALUE);
    let o = Object.keys(e),
      n = o.length;
    for (; n-- > 0; ) {
      let s = o[n],
        i = t[s];
      if (i) {
        let c = e[s],
          d = c === void 0 || i(c, s, e);
        if (d !== !0)
          throw new m('option ' + s + ' must be ' + d, m.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (r !== !0) throw new m('Unknown option ' + s, m.ERR_BAD_OPTION);
    }
  }
  var ie = { assertOptions: mr, validators: Se };
  var F = ie.validators,
    k = class {
      constructor(t) {
        (this.defaults = t),
          (this.interceptors = { request: new de(), response: new de() });
      }
      request(t, r) {
        typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
          (r = O(this.defaults, r));
        let { transitional: o, paramsSerializer: n, headers: s } = r;
        o !== void 0 &&
          ie.assertOptions(
            o,
            {
              silentJSONParsing: F.transitional(F.boolean),
              forcedJSONParsing: F.transitional(F.boolean),
              clarifyTimeoutError: F.transitional(F.boolean),
            },
            !1,
          ),
          n != null &&
            (a.isFunction(n)
              ? (r.paramsSerializer = { serialize: n })
              : ie.assertOptions(
                  n,
                  { encode: F.function, serialize: F.function },
                  !0,
                )),
          (r.method = (
            r.method ||
            this.defaults.method ||
            'get'
          ).toLowerCase());
        let i = s && a.merge(s.common, s[r.method]);
        s &&
          a.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            (f) => {
              delete s[f];
            },
          ),
          (r.headers = x.concat(i, s));
        let c = [],
          d = !0;
        this.interceptors.request.forEach(function (h) {
          (typeof h.runWhen == 'function' && h.runWhen(r) === !1) ||
            ((d = d && h.synchronous), c.unshift(h.fulfilled, h.rejected));
        });
        let u = [];
        this.interceptors.response.forEach(function (h) {
          u.push(h.fulfilled, h.rejected);
        });
        let l,
          p = 0,
          w;
        if (!d) {
          let f = [ne.bind(this), void 0];
          for (
            f.unshift.apply(f, c),
              f.push.apply(f, u),
              w = f.length,
              l = Promise.resolve(r);
            p < w;

          )
            l = l.then(f[p++], f[p++]);
          return l;
        }
        w = c.length;
        let y = r;
        for (p = 0; p < w; ) {
          let f = c[p++],
            h = c[p++];
          try {
            y = f(y);
          } catch (R) {
            h.call(this, R);
            break;
          }
        }
        try {
          l = ne.call(this, y);
        } catch (f) {
          return Promise.reject(f);
        }
        for (p = 0, w = u.length; p < w; ) l = l.then(u[p++], u[p++]);
        return l;
      }
      getUri(t) {
        t = O(this.defaults, t);
        let r = z(t.baseURL, t.url);
        return q(r, t.params, t.paramsSerializer);
      }
    };
  a.forEach(['delete', 'get', 'head', 'options'], function (t) {
    k.prototype[t] = function (r, o) {
      return this.request(
        O(o || {}, { method: t, url: r, data: (o || {}).data }),
      );
    };
  });
  a.forEach(['post', 'put', 'patch'], function (t) {
    function r(o) {
      return function (s, i, c) {
        return this.request(
          O(c || {}, {
            method: t,
            headers: o ? { 'Content-Type': 'multipart/form-data' } : {},
            url: s,
            data: i,
          }),
        );
      };
    }
    (k.prototype[t] = r()), (k.prototype[t + 'Form'] = r(!0));
  });
  var V = k;
  var Ae = class e {
      constructor(t) {
        if (typeof t != 'function')
          throw new TypeError('executor must be a function.');
        let r;
        this.promise = new Promise(function (s) {
          r = s;
        });
        let o = this;
        this.promise.then((n) => {
          if (!o._listeners) return;
          let s = o._listeners.length;
          for (; s-- > 0; ) o._listeners[s](n);
          o._listeners = null;
        }),
          (this.promise.then = (n) => {
            let s,
              i = new Promise((c) => {
                o.subscribe(c), (s = c);
              }).then(n);
            return (
              (i.cancel = function () {
                o.unsubscribe(s);
              }),
              i
            );
          }),
          t(function (s, i, c) {
            o.reason || ((o.reason = new P(s, i, c)), r(o.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(t) {
        if (this.reason) {
          t(this.reason);
          return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
      }
      unsubscribe(t) {
        if (!this._listeners) return;
        let r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1);
      }
      static source() {
        let t;
        return {
          token: new e(function (n) {
            t = n;
          }),
          cancel: t,
        };
      }
    },
    rt = Ae;
  function ge(e) {
    return function (r) {
      return e.apply(null, r);
    };
  }
  function Re(e) {
    return a.isObject(e) && e.isAxiosError === !0;
  }
  var Oe = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Oe).forEach(([e, t]) => {
    Oe[t] = e;
  });
  var ot = Oe;
  function nt(e) {
    let t = new V(e),
      r = I(V.prototype.request, t);
    return (
      a.extend(r, V.prototype, t, { allOwnKeys: !0 }),
      a.extend(r, t, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return nt(O(e, n));
      }),
      r
    );
  }
  var E = nt(U);
  E.Axios = V;
  E.CanceledError = P;
  E.CancelToken = rt;
  E.isCancel = v;
  E.VERSION = se;
  E.toFormData = C;
  E.AxiosError = m;
  E.Cancel = E.CanceledError;
  E.all = function (t) {
    return Promise.all(t);
  };
  E.spread = ge;
  E.isAxiosError = Re;
  E.mergeConfig = O;
  E.AxiosHeaders = x;
  E.formToJSON = (e) => ee(a.isHTMLForm(e) ? new FormData(e) : e);
  E.getAdapter = oe.getAdapter;
  E.HttpStatusCode = ot;
  E.default = E;
  var T = E;
  var {
    Axios: Kn,
    AxiosError: $n,
    CanceledError: Gn,
    isCancel: Xn,
    CancelToken: Qn,
    VERSION: Zn,
    all: Yn,
    Cancel: es,
    isAxiosError: ts,
    spread: rs,
    toFormData: os,
    AxiosHeaders: ns,
    HttpStatusCode: ss,
    formToJSON: is,
    getAdapter: as,
    mergeConfig: us,
  } = T;
  var st = () => {
      let e = document.querySelector('.alert');
      e && e.parentElement.removeChild(e);
    },
    N = (e, t) => {
      st();
      let r = `<div class="alert alert--${e}">${t}</div>`;
      document.querySelector('body').insertAdjacentHTML('afterbegin', r),
        window.setTimeout(st, 5e3);
    };
  var it = async (e, t) => {
      try {
        (
          await T({
            method: 'POST',
            url: '/api/v1/users/login',
            data: { email: e, password: t },
          })
        ).data.status === 'success' &&
          (N('success', 'Logged in successfully!'),
          window.setTimeout(() => {
            location.assign('/');
          }, 1500));
      } catch (r) {
        N('error', r.response.data.message);
      }
    },
    at = async () => {
      try {
        (await T({ method: 'GET', url: '/api/v1/users/logout' })).data
          .status === 'success' &&
          window.setTimeout(() => {
            location.assign('/login');
          }, 1500);
      } catch {
        N('error', 'Error logging out! Try again!');
      }
    };
  var ut = (e) => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibXJrZ2JyIiwiYSI6ImNsbWtrc2RsNzAzc2kya3J4NGF6OGJwbWsifQ.oDb0weyaRxtnPHbu9Z9EIA';
    var t = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mrkgbr/clmklklvy01s401pj9dkt4n14',
      scrollZoom: !1,
    });
    let r = new mapboxgl.LngLatBounds();
    e.forEach((o) => {
      let n = document.createElement('div');
      (n.className = 'marker'),
        new mapboxgl.Marker({ element: n, anchor: 'bottom' })
          .setLngLat(o.coordinates)
          .addTo(t),
        new mapboxgl.Popup({ offset: 35 })
          .setLngLat(o.coordinates)
          .setHTML(`<p>Day ${o.day}: ${o.description}</p>`)
          .addTo(t),
        r.extend(o.coordinates);
    }),
      t.fitBounds(r, {
        padding: { top: 200, bottom: 150, left: 100, right: 100 },
      });
  };
  var Te = async (e, t) => {
    try {
      (
        await T({
          method: 'PATCH',
          url:
            t === 'password'
              ? '/api/v1/users/updateMyPassword'
              : '/api/v1/users/updateMe',
          data: e,
        })
      ).data.status === 'success' &&
        N('success', `${t.toUpperCase()} updated successfully!`);
    } catch (r) {
      N('error', r.response.data.message);
    }
  };
  var hr = Stripe(
      'pk_test_51Nt9u4G8myYmdW75J7hilpjcuK5iuM47I9idbDe0sYOMr0K68v067OMGPcf7Qvdby23hoAmz5AjnrN6OaQb3ZzGx00d9eXn68a',
    ),
    ct = async (e) => {
      try {
        let t = await T(`/api/v1/bookings/checkout-session/${e}`);
        await hr.redirectToCheckout({ sessionId: t.data.session.id });
      } catch (t) {
        console.log(t), N('error', t);
      }
    };
  var lt = document.getElementById('map'),
    ft = document.querySelector('.form--login'),
    dt = document.querySelector('.nav__el--logout'),
    pt = document.querySelector('.form-user-data'),
    mt = document.querySelector('.form-user-password'),
    ht = document.getElementById('book-tour');
  if (lt) {
    let e = JSON.parse(lt.dataset.locations);
    ut(e);
  }
  ft &&
    ft.addEventListener('submit', (e) => {
      e.preventDefault();
      let t = document.getElementById('email').value,
        r = document.getElementById('password').value;
      it(t, r);
    });
  dt && dt.addEventListener('click', at);
  pt &&
    pt.addEventListener('submit', (e) => {
      e.preventDefault();
      let t = new FormData();
      t.append('name', document.getElementById('name').value),
        t.append('email', document.getElementById('email').value),
        t.append('photo', document.getElementById('photo').files[0]),
        Te(t, 'data');
    });
  mt &&
    mt.addEventListener('submit', async (e) => {
      e.preventDefault(),
        (document.querySelector('.btn--save-password').textContent =
          'Updating...');
      let t = document.getElementById('password-current').value,
        r = document.getElementById('password').value,
        o = document.getElementById('password-confirm').value;
      await Te(
        { passwordCurrent: t, password: r, passwordConfirm: o },
        'password',
      ),
        (document.querySelector('.btn--save-password').textContent =
          'SAVE PASSWORD'),
        (document.getElementById('password-current').value = ''),
        (document.getElementById('password').value = ''),
        (document.getElementById('password-confirm').value = '');
    });
  ht &&
    ht.addEventListener('click', (e) => {
      e.target.textContent = 'Processing...';
      let { tourId: t } = e.target.dataset;
      ct(t);
    });
})();
