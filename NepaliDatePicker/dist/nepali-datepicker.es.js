import * as m from "react";
import Zt, { createContext as Jn, useReducer as Zn, useContext as Qn, useLayoutEffect as Qt, useEffect as en, useRef as er, useState as tr } from "react";
import * as nr from "react-dom";
var ut = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function rr() {
  if (Ft)
    return De;
  Ft = 1;
  var e = Zt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, c, d) {
    var v, p = {}, b = null, l = null;
    d !== void 0 && (b = "" + d), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (l = c.ref);
    for (v in c)
      r.call(c, v) && !s.hasOwnProperty(v) && (p[v] = c[v]);
    if (u && u.defaultProps)
      for (v in c = u.defaultProps, c)
        p[v] === void 0 && (p[v] = c[v]);
    return { $$typeof: t, type: u, key: b, ref: l, props: p, _owner: i.current };
  }
  return De.Fragment = n, De.jsx = a, De.jsxs = a, De;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function or() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Zt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), E = Symbol.iterator, x = "@@iterator";
    function K(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = E && o[E] || o[x];
      return typeof f == "function" ? f : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
          h[w - 1] = arguments[w];
        W("error", o, h);
      }
    }
    function W(o, f, h) {
      {
        var w = y.ReactDebugCurrentFrame, N = w.getStackAddendum();
        N !== "" && (f += "%s", h = h.concat([N]));
        var B = h.map(function(A) {
          return String(A);
        });
        B.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, B);
      }
    }
    var M = !1, S = !1, V = !1, R = !1, q = !1, re;
    re = Symbol.for("react.module.reference");
    function Q(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === s || q || o === i || o === d || o === v || R || o === l || M || S || V || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === p || o.$$typeof === a || o.$$typeof === u || o.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === re || o.getModuleId !== void 0));
    }
    function O(o, f, h) {
      var w = o.displayName;
      if (w)
        return w;
      var N = f.displayName || f.name || "";
      return N !== "" ? h + "(" + N + ")" : h;
    }
    function ee(o) {
      return o.displayName || "Context";
    }
    function H(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var f = o;
            return ee(f) + ".Consumer";
          case a:
            var h = o;
            return ee(h._context) + ".Provider";
          case c:
            return O(o, o.render, "ForwardRef");
          case p:
            var w = o.displayName || null;
            return w !== null ? w : H(o.type) || "Memo";
          case b: {
            var N = o, B = N._payload, A = N._init;
            try {
              return H(A(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, G = 0, U, T, F, L, C, oe, D;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function P() {
      {
        if (G === 0) {
          U = console.log, T = console.info, F = console.warn, L = console.error, C = console.group, oe = console.groupCollapsed, D = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        G++;
      }
    }
    function I() {
      {
        if (G--, G === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, o, {
              value: U
            }),
            info: Y({}, o, {
              value: T
            }),
            warn: Y({}, o, {
              value: F
            }),
            error: Y({}, o, {
              value: L
            }),
            group: Y({}, o, {
              value: C
            }),
            groupCollapsed: Y({}, o, {
              value: oe
            }),
            groupEnd: Y({}, o, {
              value: D
            })
          });
        }
        G < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = y.ReactCurrentDispatcher, $;
    function z(o, f, h) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (N) {
            var w = N.stack.trim().match(/\n( *(at )?)/);
            $ = w && w[1] || "";
          }
        return `
` + $ + o;
      }
    }
    var ue = !1, be;
    {
      var Pn = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Pn();
    }
    function yt(o, f) {
      if (!o || ue)
        return "";
      {
        var h = be.get(o);
        if (h !== void 0)
          return h;
      }
      var w;
      ue = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = j.current, j.current = null, P();
      try {
        if (f) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (de) {
              w = de;
            }
            Reflect.construct(o, [], A);
          } else {
            try {
              A.call();
            } catch (de) {
              w = de;
            }
            o.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            w = de;
          }
          o();
        }
      } catch (de) {
        if (de && w && typeof de.stack == "string") {
          for (var k = de.stack.split(`
`), te = w.stack.split(`
`), X = k.length - 1, J = te.length - 1; X >= 1 && J >= 0 && k[X] !== te[J]; )
            J--;
          for (; X >= 1 && J >= 0; X--, J--)
            if (k[X] !== te[J]) {
              if (X !== 1 || J !== 1)
                do
                  if (X--, J--, J < 0 || k[X] !== te[J]) {
                    var ce = `
` + k[X].replace(" at new ", " at ");
                    return o.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", o.displayName)), typeof o == "function" && be.set(o, ce), ce;
                  }
                while (X >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        ue = !1, j.current = B, I(), Error.prepareStackTrace = N;
      }
      var xe = o ? o.displayName || o.name : "", At = xe ? z(xe) : "";
      return typeof o == "function" && be.set(o, At), At;
    }
    function _n(o, f, h) {
      return yt(o, !1);
    }
    function kn(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function Me(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return yt(o, kn(o));
      if (typeof o == "string")
        return z(o);
      switch (o) {
        case d:
          return z("Suspense");
        case v:
          return z("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            return _n(o.render);
          case p:
            return Me(o.type, f, h);
          case b: {
            var w = o, N = w._payload, B = w._init;
            try {
              return Me(B(N), f, h);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Et = {}, Rt = y.ReactDebugCurrentFrame;
    function We(o) {
      if (o) {
        var f = o._owner, h = Me(o.type, o._source, f ? f.type : null);
        Rt.setExtraStackFrame(h);
      } else
        Rt.setExtraStackFrame(null);
    }
    function Dn(o, f, h, w, N) {
      {
        var B = Function.call.bind(je);
        for (var A in o)
          if (B(o, A)) {
            var k = void 0;
            try {
              if (typeof o[A] != "function") {
                var te = Error((w || "React class") + ": " + h + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              k = o[A](f, A, w, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              k = X;
            }
            k && !(k instanceof Error) && (We(N), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", h, A, typeof k), We(null)), k instanceof Error && !(k.message in Et) && (Et[k.message] = !0, We(N), g("Failed %s type: %s", h, k.message), We(null));
          }
      }
    }
    var An = Array.isArray;
    function Je(o) {
      return An(o);
    }
    function Fn(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function In(o) {
      try {
        return wt(o), !1;
      } catch {
        return !0;
      }
    }
    function wt(o) {
      return "" + o;
    }
    function xt(o) {
      if (In(o))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(o)), wt(o);
    }
    var ke = y.ReactCurrentOwner, Nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tt, Ct, Ze;
    Ze = {};
    function Ln(o) {
      if (je.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Mn(o) {
      if (je.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function jn(o, f) {
      if (typeof o.ref == "string" && ke.current && f && ke.current.stateNode !== f) {
        var h = H(ke.current.type);
        Ze[h] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ke.current.type), o.ref), Ze[h] = !0);
      }
    }
    function Wn(o, f) {
      {
        var h = function() {
          Tt || (Tt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Vn(o, f) {
      {
        var h = function() {
          Ct || (Ct = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var $n = function(o, f, h, w, N, B, A) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: h,
        props: A,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Bn(o, f, h, w, N) {
      {
        var B, A = {}, k = null, te = null;
        h !== void 0 && (xt(h), k = "" + h), Mn(f) && (xt(f.key), k = "" + f.key), Ln(f) && (te = f.ref, jn(f, N));
        for (B in f)
          je.call(f, B) && !Nn.hasOwnProperty(B) && (A[B] = f[B]);
        if (o && o.defaultProps) {
          var X = o.defaultProps;
          for (B in X)
            A[B] === void 0 && (A[B] = X[B]);
        }
        if (k || te) {
          var J = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          k && Wn(A, J), te && Vn(A, J);
        }
        return $n(o, k, te, N, w, ke.current, A);
      }
    }
    var Qe = y.ReactCurrentOwner, St = y.ReactDebugCurrentFrame;
    function we(o) {
      if (o) {
        var f = o._owner, h = Me(o.type, o._source, f ? f.type : null);
        St.setExtraStackFrame(h);
      } else
        St.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function tt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Ot() {
      {
        if (Qe.current) {
          var o = H(Qe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Kn(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var Pt = {};
    function Yn(o) {
      {
        var f = Ot();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function _t(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = Yn(f);
        if (Pt[h])
          return;
        Pt[h] = !0;
        var w = "";
        o && o._owner && o._owner !== Qe.current && (w = " It was passed a child from " + H(o._owner.type) + "."), we(o), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, w), we(null);
      }
    }
    function kt(o, f) {
      {
        if (typeof o != "object")
          return;
        if (Je(o))
          for (var h = 0; h < o.length; h++) {
            var w = o[h];
            tt(w) && _t(w, f);
          }
        else if (tt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var N = K(o);
          if (typeof N == "function" && N !== o.entries)
            for (var B = N.call(o), A; !(A = B.next()).done; )
              tt(A.value) && _t(A.value, f);
        }
      }
    }
    function Un(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var w = H(f);
          Dn(h, o.props, "prop", w, o);
        } else if (f.PropTypes !== void 0 && !et) {
          et = !0;
          var N = H(f);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hn(o) {
      {
        for (var f = Object.keys(o.props), h = 0; h < f.length; h++) {
          var w = f[h];
          if (w !== "children" && w !== "key") {
            we(o), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), we(null);
            break;
          }
        }
        o.ref !== null && (we(o), g("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function Dt(o, f, h, w, N, B) {
      {
        var A = Q(o);
        if (!A) {
          var k = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Kn(N);
          te ? k += te : k += Ot();
          var X;
          o === null ? X = "null" : Je(o) ? X = "array" : o !== void 0 && o.$$typeof === t ? (X = "<" + (H(o.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : X = typeof o, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, k);
        }
        var J = Bn(o, f, h, N, B);
        if (J == null)
          return J;
        if (A) {
          var ce = f.children;
          if (ce !== void 0)
            if (w)
              if (Je(ce)) {
                for (var xe = 0; xe < ce.length; xe++)
                  kt(ce[xe], o);
                Object.freeze && Object.freeze(ce);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(ce, o);
        }
        return o === r ? Hn(J) : Un(J), J;
      }
    }
    function qn(o, f, h) {
      return Dt(o, f, h, !0);
    }
    function zn(o, f, h) {
      return Dt(o, f, h, !1);
    }
    var Xn = zn, Gn = qn;
    Ae.Fragment = r, Ae.jsx = Xn, Ae.jsxs = Gn;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? ut.exports = rr() : ut.exports = or();
var le = ut.exports;
const ir = () => /* @__PURE__ */ le.jsx("div", { children: "Calendar" }), tn = "SET_DATA", pt = (e) => ({
  ...e
}), sr = (e = pt(), t) => t.type === tn ? { ...e, [t.key]: t.value } : e, nn = Jn({
  dispatch: () => null,
  state: pt()
}), ar = ({ children: e, ...t }) => {
  const [n, r] = Zn(
    sr,
    pt({
      classNames: {
        wrapper: t.wrapperClassName,
        input: t.className
      },
      theme: t.dark ? "dark" : "light",
      value: t.value || "",
      onChange: t.onChange,
      onSelect: t.onSelect,
      locale: {
        calendar: "ne",
        value: "ne"
      }
    })
  );
  return /* @__PURE__ */ le.jsx(nn.Provider, { value: { state: n, dispatch: r }, children: e });
}, rn = () => {
  const { state: e, dispatch: t } = Qn(nn);
  return { setData: (r, i) => {
    t({
      key: r,
      type: tn,
      value: i
    });
  }, state: e };
}, on = (e, t) => Object.entries(t).reduce((n, [r, i]) => e.includes(r) ? { ...n, [r]: i } : { ...n }, {}), ur = (e) => {
  const t = on(["type", "readOnly"], e), { state: n } = rn();
  return /* @__PURE__ */ le.jsx(
    "input",
    {
      type: "text",
      className: n.classNames.input || `
                ndp__input
                ndp-inline-block ndp-w-full ndp-py-2 ndp-px-3 ndp-rounded
                ndp-shadow-sm dark:ndp-shadow-slate-800
                ndp-transition-all ndp-ease-in
                ndp-border-0
                ndp-bg-white dark:ndp-bg-slate-700 ndp-bg-clip-padding
                ndp-text-sm ndp-leading-5 ndp-font-normal
                ndp-text-gray-700 dark:ndp-text-white/80
                ndp-outline-none
                ndp-ring-inset ndp-ring-1 ndp-ring-slate-300 dark:ndp-ring-transparent
                focus:ndp-ring-blue-500 dark:focus:ndp-ring-blue-500
             `,
      readOnly: !0,
      value: n.value,
      ...t
    }
  );
};
function he(e) {
  return sn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pe(e) {
  var t;
  return (t = (sn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sn(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function Z(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ne(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function ct(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function Ne(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function cr(e) {
  return ["table", "td", "th"].includes(he(e));
}
function vt(e) {
  const t = gt(), n = ae(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function lr(e) {
  let t = Ee(e);
  for (; ne(t) && !Le(t); ) {
    if (vt(t))
      return t;
    t = Ee(t);
  }
  return null;
}
function gt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Le(e) {
  return ["html", "body", "#document"].includes(he(e));
}
function ae(e) {
  return se(e).getComputedStyle(e);
}
function Ge(e) {
  return Z(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ee(e) {
  if (he(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ct(e) && e.host || // Fallback.
    pe(e)
  );
  return ct(t) ? t.host : t;
}
function an(e) {
  const t = Ee(e);
  return Le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ne(t) && Ne(t) ? t : an(t);
}
function ge(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = an(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = se(i);
  return s ? t.concat(a, a.visualViewport || [], Ne(i) ? i : [], a.frameElement && n ? ge(a.frameElement) : []) : t.concat(i, ge(i, [], n));
}
function Ce(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ie(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ct(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function fr() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function dr() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function pr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : un() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function vr(e) {
  return !un() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function gr() {
  return /apple/i.test(navigator.vendor);
}
function un() {
  const e = /android/i;
  return e.test(fr()) || e.test(dr());
}
function Nt(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function hr(e) {
  return "nativeEvent" in e;
}
function mr(e) {
  return e.matches("html,body");
}
function fe(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function nt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Se(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const br = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function cn(e) {
  return ne(e) && e.matches(br);
}
function rt(e) {
  e.preventDefault(), e.stopPropagation();
}
const lt = Math.min, Pe = Math.max, Ye = Math.round, Ve = Math.floor, me = (e) => ({
  x: e,
  y: e
});
function ln(e) {
  return e.split("-")[0];
}
function yr(e) {
  return e.split("-")[1];
}
function Er(e) {
  return e === "x" ? "y" : "x";
}
function Rr(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  return ["top", "bottom"].includes(ln(e)) ? "y" : "x";
}
function wr(e) {
  return Er(fn(e));
}
function dn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Lt(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const s = fn(t), a = wr(t), u = Rr(a), c = ln(t), d = s === "y", v = r.x + r.width / 2 - i.width / 2, p = r.y + r.height / 2 - i.height / 2, b = r[u] / 2 - i[u] / 2;
  let l;
  switch (c) {
    case "top":
      l = {
        x: v,
        y: r.y - i.height
      };
      break;
    case "bottom":
      l = {
        x: v,
        y: r.y + r.height
      };
      break;
    case "right":
      l = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      l = {
        x: r.x - i.width,
        y: p
      };
      break;
    default:
      l = {
        x: r.x,
        y: r.y
      };
  }
  switch (yr(t)) {
    case "start":
      l[a] -= b * (n && d ? -1 : 1);
      break;
    case "end":
      l[a] += b * (n && d ? -1 : 1);
      break;
  }
  return l;
}
const xr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: a
  } = n, u = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: v,
    y: p
  } = Lt(d, r, c), b = r, l = {}, E = 0;
  for (let x = 0; x < u.length; x++) {
    const {
      name: K,
      fn: y
    } = u[x], {
      x: g,
      y: W,
      data: M,
      reset: S
    } = await y({
      x: v,
      y: p,
      initialPlacement: r,
      placement: b,
      strategy: i,
      middlewareData: l,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (v = g ?? v, p = W ?? p, l = {
      ...l,
      [K]: {
        ...l[K],
        ...M
      }
    }, S && E <= 50) {
      E++, typeof S == "object" && (S.placement && (b = S.placement), S.rects && (d = S.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: v,
        y: p
      } = Lt(d, b, c)), x = -1;
      continue;
    }
  }
  return {
    x: v,
    y: p,
    placement: b,
    strategy: i,
    middlewareData: l
  };
};
function pn(e) {
  const t = ae(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = ne(e), s = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, u = Ye(n) !== s || Ye(r) !== a;
  return u && (n = s, r = a), {
    width: n,
    height: r,
    $: u
  };
}
function ht(e) {
  return Z(e) ? e : e.contextElement;
}
function _e(e) {
  const t = ht(e);
  if (!ne(t))
    return me(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: s
  } = pn(t);
  let a = (s ? Ye(n.width) : n.width) / r, u = (s ? Ye(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: a,
    y: u
  };
}
const Tr = /* @__PURE__ */ me(0);
function vn(e) {
  const t = se(e);
  return !gt() || !t.visualViewport ? Tr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function Re(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), s = ht(e);
  let a = me(1);
  t && (r ? Z(r) && (a = _e(r)) : a = _e(e));
  const u = Cr(s, n, r) ? vn(s) : me(0);
  let c = (i.left + u.x) / a.x, d = (i.top + u.y) / a.y, v = i.width / a.x, p = i.height / a.y;
  if (s) {
    const b = se(s), l = r && Z(r) ? se(r) : r;
    let E = b.frameElement;
    for (; E && r && l !== b; ) {
      const x = _e(E), K = E.getBoundingClientRect(), y = ae(E), g = K.left + (E.clientLeft + parseFloat(y.paddingLeft)) * x.x, W = K.top + (E.clientTop + parseFloat(y.paddingTop)) * x.y;
      c *= x.x, d *= x.y, v *= x.x, p *= x.y, c += g, d += W, E = se(E).frameElement;
    }
  }
  return dn({
    width: v,
    height: p,
    x: c,
    y: d
  });
}
function Sr(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const i = ne(n), s = pe(n);
  if (n === s)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = me(1);
  const c = me(0);
  if ((i || !i && r !== "fixed") && ((he(n) !== "body" || Ne(s)) && (a = Ge(n)), ne(n))) {
    const d = Re(n);
    u = _e(n), c.x = d.x + n.clientLeft, c.y = d.y + n.clientTop;
  }
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - a.scrollLeft * u.x + c.x,
    y: t.y * u.y - a.scrollTop * u.y + c.y
  };
}
function Or(e) {
  return Array.from(e.getClientRects());
}
function gn(e) {
  return Re(pe(e)).left + Ge(e).scrollLeft;
}
function Pr(e) {
  const t = pe(e), n = Ge(e), r = e.ownerDocument.body, i = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + gn(e);
  const u = -n.scrollTop;
  return ae(r).direction === "rtl" && (a += Pe(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
function _r(e, t) {
  const n = se(e), r = pe(e), i = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, u = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    const d = gt();
    (!d || d && t === "fixed") && (u = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: u,
    y: c
  };
}
function kr(e, t) {
  const n = Re(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, s = ne(e) ? _e(e) : me(1), a = e.clientWidth * s.x, u = e.clientHeight * s.y, c = i * s.x, d = r * s.y;
  return {
    width: a,
    height: u,
    x: c,
    y: d
  };
}
function Mt(e, t, n) {
  let r;
  if (t === "viewport")
    r = _r(e, n);
  else if (t === "document")
    r = Pr(pe(e));
  else if (Z(t))
    r = kr(t, n);
  else {
    const i = vn(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return dn(r);
}
function hn(e, t) {
  const n = Ee(e);
  return n === t || !Z(n) || Le(n) ? !1 : ae(n).position === "fixed" || hn(n, t);
}
function Dr(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ge(e, [], !1).filter((u) => Z(u) && he(u) !== "body"), i = null;
  const s = ae(e).position === "fixed";
  let a = s ? Ee(e) : e;
  for (; Z(a) && !Le(a); ) {
    const u = ae(a), c = vt(a);
    !c && u.position === "fixed" && (i = null), (s ? !c && !i : !c && u.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ne(a) && !c && hn(e, a)) ? r = r.filter((v) => v !== a) : i = u, a = Ee(a);
  }
  return t.set(e, r), r;
}
function Ar(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? Dr(t, this._c) : [].concat(n), r], u = a[0], c = a.reduce((d, v) => {
    const p = Mt(t, v, i);
    return d.top = Pe(p.top, d.top), d.right = lt(p.right, d.right), d.bottom = lt(p.bottom, d.bottom), d.left = Pe(p.left, d.left), d;
  }, Mt(t, u, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Fr(e) {
  return pn(e);
}
function Ir(e, t, n) {
  const r = ne(t), i = pe(t), s = n === "fixed", a = Re(e, !0, s, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = me(0);
  if (r || !r && !s)
    if ((he(t) !== "body" || Ne(i)) && (u = Ge(t)), r) {
      const d = Re(t, !0, s, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      i && (c.x = gn(i));
  return {
    x: a.left + u.scrollLeft - c.x,
    y: a.top + u.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function jt(e, t) {
  return !ne(e) || ae(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function mn(e, t) {
  const n = se(e);
  if (!ne(e))
    return n;
  let r = jt(e, t);
  for (; r && cr(r) && ae(r).position === "static"; )
    r = jt(r, t);
  return r && (he(r) === "html" || he(r) === "body" && ae(r).position === "static" && !vt(r)) ? n : r || lr(e) || n;
}
const Nr = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const i = this.getOffsetParent || mn, s = this.getDimensions;
  return {
    reference: Ir(t, await i(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function Lr(e) {
  return ae(e).direction === "rtl";
}
const Mr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sr,
  getDocumentElement: pe,
  getClippingRect: Ar,
  getOffsetParent: mn,
  getElementRects: Nr,
  getClientRects: Or,
  getDimensions: Fr,
  getScale: _e,
  isElement: Z,
  isRTL: Lr
};
function jr(e, t) {
  let n = null, r;
  const i = pe(e);
  function s() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(u, c) {
    u === void 0 && (u = !1), c === void 0 && (c = 1), s();
    const {
      left: d,
      top: v,
      width: p,
      height: b
    } = e.getBoundingClientRect();
    if (u || t(), !p || !b)
      return;
    const l = Ve(v), E = Ve(i.clientWidth - (d + p)), x = Ve(i.clientHeight - (v + b)), K = Ve(d), g = {
      rootMargin: -l + "px " + -E + "px " + -x + "px " + -K + "px",
      threshold: Pe(0, lt(1, c)) || 1
    };
    let W = !0;
    function M(S) {
      const V = S[0].intersectionRatio;
      if (V !== c) {
        if (!W)
          return a();
        V ? a(!1, V) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      W = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ...g,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, g);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Wr(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = ht(e), v = i || s ? [...d ? ge(d) : [], ...ge(t)] : [];
  v.forEach((y) => {
    i && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const p = d && u ? jr(d, n) : null;
  let b = -1, l = null;
  a && (l = new ResizeObserver((y) => {
    let [g] = y;
    g && g.target === d && l && (l.unobserve(t), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      l && l.observe(t);
    })), n();
  }), d && !c && l.observe(d), l.observe(t));
  let E, x = c ? Re(e) : null;
  c && K();
  function K() {
    const y = Re(e);
    x && (y.x !== x.x || y.y !== x.y || y.width !== x.width || y.height !== x.height) && n(), x = y, E = requestAnimationFrame(K);
  }
  return n(), () => {
    v.forEach((y) => {
      i && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), p && p(), l && l.disconnect(), l = null, c && cancelAnimationFrame(E);
  };
}
const Vr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Mr,
    ...n
  }, s = {
    ...i.platform,
    _c: r
  };
  return xr(e, t, {
    ...i,
    platform: s
  });
};
var Ke = typeof document < "u" ? Qt : en;
function Ue(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Ue(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (!(s === "_owner" && e.$$typeof) && !Ue(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wt(e, t) {
  const n = bn(e);
  return Math.round(t * n) / n;
}
function Vt(e) {
  const t = m.useRef(e);
  return Ke(() => {
    t.current = e;
  }), t;
}
function $r(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: u = !0,
    whileElementsMounted: c,
    open: d
  } = e, [v, p] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [b, l] = m.useState(r);
  Ue(b, r) || l(r);
  const [E, x] = m.useState(null), [K, y] = m.useState(null), g = m.useCallback((U) => {
    U != V.current && (V.current = U, x(U));
  }, [x]), W = m.useCallback((U) => {
    U !== R.current && (R.current = U, y(U));
  }, [y]), M = s || E, S = a || K, V = m.useRef(null), R = m.useRef(null), q = m.useRef(v), re = Vt(c), Q = Vt(i), O = m.useCallback(() => {
    if (!V.current || !R.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: b
    };
    Q.current && (U.platform = Q.current), Vr(V.current, R.current, U).then((T) => {
      const F = {
        ...T,
        isPositioned: !0
      };
      ee.current && !Ue(q.current, F) && (q.current = F, nr.flushSync(() => {
        p(F);
      }));
    });
  }, [b, t, n, Q]);
  Ke(() => {
    d === !1 && q.current.isPositioned && (q.current.isPositioned = !1, p((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [d]);
  const ee = m.useRef(!1);
  Ke(() => (ee.current = !0, () => {
    ee.current = !1;
  }), []), Ke(() => {
    if (M && (V.current = M), S && (R.current = S), M && S) {
      if (re.current)
        return re.current(M, S, O);
      O();
    }
  }, [M, S, O, re]);
  const H = m.useMemo(() => ({
    reference: V,
    floating: R,
    setReference: g,
    setFloating: W
  }), [g, W]), Y = m.useMemo(() => ({
    reference: M,
    floating: S
  }), [M, S]), G = m.useMemo(() => {
    const U = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return U;
    const T = Wt(Y.floating, v.x), F = Wt(Y.floating, v.y);
    return u ? {
      ...U,
      transform: "translate(" + T + "px, " + F + "px)",
      ...bn(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: F
    };
  }, [n, u, Y.floating, v.x, v.y]);
  return m.useMemo(() => ({
    ...v,
    update: O,
    refs: H,
    elements: Y,
    floatingStyles: G
  }), [v, O, H, Y, G]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Br = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ft = /* @__PURE__ */ Br.join(","), yn = typeof Element > "u", Ie = yn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, He = !yn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, qe = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = i === "" || i === "true", a = s || n && t && e(t.parentNode);
  return a;
}, Kr = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Yr = function(t, n, r) {
  if (qe(t))
    return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(ft));
  return n && Ie.call(t, ft) && i.unshift(t), i = i.filter(r), i;
}, Ur = function e(t, n, r) {
  for (var i = [], s = Array.from(t); s.length; ) {
    var a = s.shift();
    if (!qe(a, !1))
      if (a.tagName === "SLOT") {
        var u = a.assignedElements(), c = u.length ? u : a.children, d = e(c, !0, r);
        r.flatten ? i.push.apply(i, d) : i.push({
          scopeParent: a,
          candidates: d
        });
      } else {
        var v = Ie.call(a, ft);
        v && r.filter(a) && (n || !t.includes(a)) && i.push(a);
        var p = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), b = !qe(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (p && b) {
          var l = e(p === !0 ? a.children : p.children, !0, r);
          r.flatten ? i.push.apply(i, l) : i.push({
            scopeParent: a,
            candidates: l
          });
        } else
          s.unshift.apply(s, a.children);
      }
  }
  return i;
}, En = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Rn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Kr(t)) && !En(t) ? 0 : t.tabIndex;
}, Hr = function(t, n) {
  var r = Rn(t);
  return r < 0 && n && !En(t) ? 0 : r;
}, qr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, wn = function(t) {
  return t.tagName === "INPUT";
}, zr = function(t) {
  return wn(t) && t.type === "hidden";
}, Xr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Gr = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Jr = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || He(t), r = function(u) {
    return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(t.name));
  else
    try {
      i = r(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var s = Gr(i, t.form);
  return !s || s === t;
}, Zr = function(t) {
  return wn(t) && t.type === "radio";
}, Qr = function(t) {
  return Zr(t) && !Jr(t);
}, eo = function(t) {
  var n, r = t && He(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var a, u, c;
    for (s = !!((a = i) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(i) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !s && i; ) {
      var d, v, p;
      r = He(i), i = (d = r) === null || d === void 0 ? void 0 : d.host, s = !!((v = i) !== null && v !== void 0 && (p = v.ownerDocument) !== null && p !== void 0 && p.contains(i));
    }
  }
  return s;
}, $t = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, to = function(t, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = Ie.call(t, "details>summary:first-of-type"), a = s ? t.parentElement : t;
  if (Ie.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var u = t; t; ) {
        var c = t.parentElement, d = He(t);
        if (c && !c.shadowRoot && i(c) === !0)
          return $t(t);
        t.assignedSlot ? t = t.assignedSlot : !c && d !== t.ownerDocument ? t = d.host : t = c;
      }
      t = u;
    }
    if (eo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return $t(t);
  return !1;
}, no = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return Ie.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ro = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  qe(n) || zr(n) || to(n, t) || // For a details element with a summary, the summary element gets the focus
  Xr(n) || no(n));
}, Bt = function(t, n) {
  return !(Qr(n) || Rn(n) < 0 || !ro(t, n));
}, oo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, io = function e(t) {
  var n = [], r = [];
  return t.forEach(function(i, s) {
    var a = !!i.scopeParent, u = a ? i.scopeParent : i, c = Hr(u, a), d = a ? e(i.candidates) : u;
    c === 0 ? a ? n.push.apply(n, d) : n.push(u) : r.push({
      documentOrder: s,
      tabIndex: c,
      item: i,
      isScope: a,
      content: d
    });
  }), r.sort(qr).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, xn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Ur([t], n.includeContainer, {
    filter: Bt.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: oo
  }) : r = Yr(t, n.includeContainer, Bt.bind(null, n)), io(r);
};
const so = m[/* @__PURE__ */ "useInsertionEffect".toString()], ao = so || ((e) => e());
function Oe(e) {
  const t = m.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ao(() => {
    t.current = e;
  }), m.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
let Kt = 0;
function ye(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: i = !1
  } = t;
  r && cancelAnimationFrame(Kt);
  const s = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  i ? s() : Kt = requestAnimationFrame(s);
}
var ve = typeof document < "u" ? Qt : en;
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ze.apply(this, arguments);
}
let ot = !1, uo = 0;
const Yt = () => "floating-ui-" + uo++;
function co() {
  const [e, t] = m.useState(() => ot ? Yt() : void 0);
  return ve(() => {
    e == null && t(Yt());
  }, []), m.useEffect(() => {
    ot || (ot = !0);
  }, []), e;
}
const lo = m[/* @__PURE__ */ "useId".toString()], mt = lo || co;
function fo() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((i) => i(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((i) => i !== n)) || []);
    }
  };
}
const po = /* @__PURE__ */ m.createContext(null), vo = /* @__PURE__ */ m.createContext(null), go = () => {
  var e;
  return ((e = m.useContext(po)) == null ? void 0 : e.id) || null;
}, bt = () => m.useContext(vo);
function Xe(e) {
  return "data-floating-ui-" + e;
}
function it(e) {
  const t = er(e);
  return ve(() => {
    t.current = e;
  }), t;
}
function ho(e, t) {
  var n;
  let r = [], i = (n = e.find((s) => s.id === t)) == null ? void 0 : n.parentId;
  for (; i; ) {
    const s = e.find((a) => a.id === i);
    i = s == null ? void 0 : s.parentId, s && (r = r.concat(s));
  }
  return r;
}
function Fe(e, t) {
  let n = e.filter((i) => {
    var s;
    return i.parentId === t && ((s = i.context) == null ? void 0 : s.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((i) => {
      var s;
      return (s = r) == null ? void 0 : s.some((a) => {
        var u;
        return i.parentId === a.id && ((u = i.context) == null ? void 0 : u.open);
      });
    }), n = n.concat(r);
  return n;
}
let Te = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakSet(), Be = {}, st = 0;
const mo = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Tn = (e) => e && (e.host || Tn(e.parentNode)), bo = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Tn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function yo(e, t, n, r) {
  const i = "data-floating-ui-inert", s = r ? "inert" : n ? "aria-hidden" : null, a = bo(t, e), u = /* @__PURE__ */ new Set(), c = new Set(a), d = [];
  Be[i] || (Be[i] = /* @__PURE__ */ new WeakMap());
  const v = Be[i];
  a.forEach(p), b(t), u.clear();
  function p(l) {
    !l || u.has(l) || (u.add(l), l.parentNode && p(l.parentNode));
  }
  function b(l) {
    !l || c.has(l) || Array.prototype.forEach.call(l.children, (E) => {
      if (u.has(E))
        b(E);
      else {
        const x = s ? E.getAttribute(s) : null, K = x !== null && x !== "false", y = (Te.get(E) || 0) + 1, g = (v.get(E) || 0) + 1;
        Te.set(E, y), v.set(E, g), d.push(E), y === 1 && K && $e.add(E), g === 1 && E.setAttribute(i, ""), !K && s && E.setAttribute(s, "true");
      }
    });
  }
  return st++, () => {
    d.forEach((l) => {
      const E = (Te.get(l) || 0) - 1, x = (v.get(l) || 0) - 1;
      Te.set(l, E), v.set(l, x), E || (!$e.has(l) && s && l.removeAttribute(s), $e.delete(l)), x || l.removeAttribute(i);
    }), st--, st || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakSet(), Be = {});
  };
}
function Ut(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = fe(e[0]).body;
  return yo(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Cn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Sn(e, t) {
  const n = xn(e, Cn());
  t === "prev" && n.reverse();
  const r = n.indexOf(Ce(fe(e)));
  return n.slice(r + 1)[0];
}
function Eo() {
  return Sn(document.body, "next");
}
function Ro() {
  return Sn(document.body, "prev");
}
function Ht(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !ie(n, r);
}
const On = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
let wo;
function qt(e) {
  e.key === "Tab" && (e.target, clearTimeout(wo));
}
const zt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const [r, i] = m.useState();
  ve(() => (gr() && i("button"), document.addEventListener("keydown", qt), () => {
    document.removeEventListener("keydown", qt);
  }), []);
  const s = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Xe("focus-guard")]: "",
    style: On
  };
  return /* @__PURE__ */ m.createElement("span", ze({}, t, s));
}), xo = /* @__PURE__ */ m.createContext(null), To = () => m.useContext(xo), Co = /* @__PURE__ */ m.forwardRef(function(t, n) {
  return /* @__PURE__ */ m.createElement("button", ze({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: On
  }));
});
function So(e) {
  const {
    context: t,
    children: n,
    disabled: r = !1,
    order: i = ["content"],
    guards: s = !0,
    initialFocus: a = 0,
    returnFocus: u = !0,
    modal: c = !0,
    visuallyHiddenDismiss: d = !1,
    closeOnFocusOut: v = !0
  } = e, {
    open: p,
    refs: b,
    nodeId: l,
    onOpenChange: E,
    events: x,
    dataRef: K,
    elements: {
      domReference: y,
      floating: g
    }
  } = t, W = typeof a == "number" && a < 0, M = (y == null ? void 0 : y.getAttribute("role")) === "combobox" && cn(y) && W, S = M ? !1 : c, V = mo() ? s : !0, R = it(i), q = it(a), re = it(u), Q = bt(), O = To(), ee = m.useRef(null), H = m.useRef(null), Y = m.useRef(!1), G = m.useRef(null), U = m.useRef(!1), T = O != null, F = m.useCallback(function(D) {
    return D === void 0 && (D = g), D ? xn(D, Cn()) : [];
  }, [g]), L = m.useCallback((D) => {
    const _ = F(D);
    return R.current.map((P) => y && P === "reference" ? y : g && P === "floating" ? g : _).filter(Boolean).flat();
  }, [y, g, R, F]);
  m.useEffect(() => {
    if (r || !S)
      return;
    function D(P) {
      if (P.key === "Tab") {
        ie(g, Ce(fe(g))) && F().length === 0 && !M && rt(P);
        const I = L(), j = Se(P);
        R.current[0] === "reference" && j === y && (rt(P), P.shiftKey ? ye(I[I.length - 1]) : ye(I[1])), R.current[1] === "floating" && j === g && P.shiftKey && (rt(P), ye(I[0]));
      }
    }
    const _ = fe(g);
    return _.addEventListener("keydown", D), () => {
      _.removeEventListener("keydown", D);
    };
  }, [r, y, g, S, R, b, M, F, L]), m.useEffect(() => {
    if (r || !v)
      return;
    function D() {
      U.current = !0, setTimeout(() => {
        U.current = !1;
      });
    }
    function _(P) {
      const I = P.relatedTarget;
      queueMicrotask(() => {
        const j = !(ie(y, I) || ie(g, I) || ie(I, g) || ie(O == null ? void 0 : O.portalNode, I) || I != null && I.hasAttribute(Xe("focus-guard")) || Q && (Fe(Q.nodesRef.current, l).find(($) => {
          var z, ue;
          return ie((z = $.context) == null ? void 0 : z.elements.floating, I) || ie((ue = $.context) == null ? void 0 : ue.elements.domReference, I);
        }) || ho(Q.nodesRef.current, l).find(($) => {
          var z, ue;
          return ((z = $.context) == null ? void 0 : z.elements.floating) === I || ((ue = $.context) == null ? void 0 : ue.elements.domReference) === I;
        })));
        I && j && !U.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        I !== G.current && (Y.current = !0, E(!1, P));
      });
    }
    if (g && ne(y))
      return y.addEventListener("focusout", _), y.addEventListener("pointerdown", D), !S && g.addEventListener("focusout", _), () => {
        y.removeEventListener("focusout", _), y.removeEventListener("pointerdown", D), !S && g.removeEventListener("focusout", _);
      };
  }, [r, y, g, S, l, Q, O, E, v]), m.useEffect(() => {
    var D;
    if (r)
      return;
    const _ = Array.from((O == null || (D = O.portalNode) == null ? void 0 : D.querySelectorAll("[" + Xe("portal") + "]")) || []);
    if (g) {
      const P = [g, ..._, ee.current, H.current, R.current.includes("reference") || M ? y : null].filter((j) => j != null), I = c || M ? Ut(P, V, !V) : Ut(P);
      return () => {
        I();
      };
    }
  }, [r, y, g, c, R, O, M, V]), ve(() => {
    if (r || !g)
      return;
    const D = fe(g), _ = Ce(D);
    queueMicrotask(() => {
      const P = L(g), I = q.current, j = (typeof I == "number" ? P[I] : I.current) || g, $ = ie(g, _);
      !W && !$ && p && ye(j, {
        preventScroll: j === g
      });
    });
  }, [r, p, g, W, L, q]), ve(() => {
    if (r || !g)
      return;
    let D = !1;
    const _ = fe(g), P = Ce(_), I = K.current;
    G.current = P;
    function j($) {
      if ($.type === "escapeKey" && b.domReference.current && (G.current = b.domReference.current), ["referencePress", "escapeKey"].includes($.type))
        return;
      const z = $.data.returnFocus;
      typeof z == "object" ? (Y.current = !1, D = z.preventScroll) : Y.current = !z;
    }
    return x.on("dismiss", j), () => {
      x.off("dismiss", j);
      const $ = Ce(_);
      (ie(g, $) || Q && Fe(Q.nodesRef.current, l).some((ue) => {
        var be;
        return ie((be = ue.context) == null ? void 0 : be.elements.floating, $);
      }) || I.openEvent && ["click", "mousedown"].includes(I.openEvent.type)) && b.domReference.current && (G.current = b.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      re.current && ne(G.current) && !Y.current && ye(G.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: D
      });
    };
  }, [r, g, re, K, b, x, Q, l]), ve(() => {
    if (!(r || !O))
      return O.setFocusManagerState({
        modal: S,
        closeOnFocusOut: v,
        open: p,
        onOpenChange: E,
        refs: b
      }), () => {
        O.setFocusManagerState(null);
      };
  }, [r, O, S, p, E, b, v]), ve(() => {
    if (r || !g || typeof MutationObserver != "function" || W)
      return;
    const D = () => {
      const P = g.getAttribute("tabindex");
      R.current.includes("floating") || Ce(fe(g)) !== b.domReference.current && F().length === 0 ? P !== "0" && g.setAttribute("tabindex", "0") : P !== "-1" && g.setAttribute("tabindex", "-1");
    };
    D();
    const _ = new MutationObserver(D);
    return _.observe(g, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      _.disconnect();
    };
  }, [r, g, b, R, F, W]);
  function C(D) {
    return r || !d || !S ? null : /* @__PURE__ */ m.createElement(Co, {
      ref: D === "start" ? ee : H,
      onClick: (_) => E(!1, _.nativeEvent)
    }, typeof d == "string" ? d : "Dismiss");
  }
  const oe = !r && V && (T || S);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, oe && /* @__PURE__ */ m.createElement(zt, {
    "data-type": "inside",
    ref: O == null ? void 0 : O.beforeInsideRef,
    onFocus: (D) => {
      if (S) {
        const P = L();
        ye(i[0] === "reference" ? P[0] : P[P.length - 1]);
      } else if (O != null && O.preserveTabOrder && O.portalNode)
        if (Y.current = !1, Ht(D, O.portalNode)) {
          const P = Eo() || y;
          P == null || P.focus();
        } else {
          var _;
          (_ = O.beforeOutsideRef.current) == null || _.focus();
        }
    }
  }), !M && C("start"), n, C("end"), oe && /* @__PURE__ */ m.createElement(zt, {
    "data-type": "inside",
    ref: O == null ? void 0 : O.afterInsideRef,
    onFocus: (D) => {
      if (S)
        ye(L()[0]);
      else if (O != null && O.preserveTabOrder && O.portalNode)
        if (v && (Y.current = !0), Ht(D, O.portalNode)) {
          const P = Ro() || y;
          P == null || P.focus();
        } else {
          var _;
          (_ = O.afterOutsideRef.current) == null || _.focus();
        }
    }
  }));
}
function Xt(e) {
  return ne(e.target) && e.target.tagName === "BUTTON";
}
function Gt(e) {
  return cn(e);
}
function Oo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: i,
    elements: {
      domReference: s
    }
  } = e, {
    enabled: a = !0,
    event: u = "click",
    toggle: c = !0,
    ignoreMouse: d = !1,
    keyboardHandlers: v = !0
  } = t, p = m.useRef(), b = m.useRef(!1);
  return m.useMemo(() => a ? {
    reference: {
      onPointerDown(l) {
        p.current = l.pointerType;
      },
      onMouseDown(l) {
        l.button === 0 && (Nt(p.current, !0) && d || u !== "click" && (n && c && (!i.current.openEvent || i.current.openEvent.type === "mousedown") ? r(!1, l.nativeEvent) : (l.preventDefault(), r(!0, l.nativeEvent))));
      },
      onClick(l) {
        if (u === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        Nt(p.current, !0) && d || (n && c && (!i.current.openEvent || i.current.openEvent.type === "click") ? r(!1, l.nativeEvent) : r(!0, l.nativeEvent));
      },
      onKeyDown(l) {
        p.current = void 0, !(l.defaultPrevented || !v || Xt(l)) && (l.key === " " && !Gt(s) && (l.preventDefault(), b.current = !0), l.key === "Enter" && r(!(n && c), l.nativeEvent));
      },
      onKeyUp(l) {
        l.defaultPrevented || !v || Xt(l) || Gt(s) || l.key === " " && b.current && (b.current = !1, r(!(n && c), l.nativeEvent));
      }
    }
  } : {}, [a, i, u, d, v, s, c, n, r]);
}
const Po = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, _o = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Jt = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function ko(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: i,
    nodeId: s,
    elements: {
      reference: a,
      domReference: u,
      floating: c
    },
    dataRef: d
  } = e, {
    enabled: v = !0,
    escapeKey: p = !0,
    outsidePress: b = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: E = !1,
    referencePressEvent: x = "pointerdown",
    ancestorScroll: K = !1,
    bubbles: y,
    capture: g
  } = t, W = bt(), M = go() != null, S = Oe(typeof b == "function" ? b : () => !1), V = typeof b == "function" ? S : b, R = m.useRef(!1), q = m.useRef(!1), {
    escapeKey: re,
    outsidePress: Q
  } = Jt(y), {
    escapeKey: O,
    outsidePress: ee
  } = Jt(g), H = Oe((T) => {
    if (!n || !v || !p || T.key !== "Escape")
      return;
    const F = W ? Fe(W.nodesRef.current, s) : [];
    if (!re && (T.stopPropagation(), F.length > 0)) {
      let L = !0;
      if (F.forEach((C) => {
        var oe;
        if ((oe = C.context) != null && oe.open && !C.context.dataRef.current.__escapeKeyBubbles) {
          L = !1;
          return;
        }
      }), !L)
        return;
    }
    i.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, hr(T) ? T.nativeEvent : T);
  }), Y = Oe((T) => {
    var F;
    const L = () => {
      var C;
      H(T), (C = Se(T)) == null || C.removeEventListener("keydown", L);
    };
    (F = Se(T)) == null || F.addEventListener("keydown", L);
  }), G = Oe((T) => {
    const F = R.current;
    R.current = !1;
    const L = q.current;
    if (q.current = !1, l === "click" && L || F || typeof V == "function" && !V(T))
      return;
    const C = Se(T), oe = "[" + Xe("inert") + "]", D = fe(c).querySelectorAll(oe);
    let _ = Z(C) ? C : null;
    for (; _ && !Le(_); ) {
      const j = Ee(_);
      if (j === fe(c).body || !Z(j))
        break;
      _ = j;
    }
    if (D.length && Z(C) && !mr(C) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ie(C, c) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(D).every((j) => !ie(_, j)))
      return;
    if (ne(C) && c) {
      const j = C.clientWidth > 0 && C.scrollWidth > C.clientWidth, $ = C.clientHeight > 0 && C.scrollHeight > C.clientHeight;
      let z = $ && T.offsetX > C.clientWidth;
      if ($ && ae(C).direction === "rtl" && (z = T.offsetX <= C.offsetWidth - C.clientWidth), z || j && T.offsetY > C.clientHeight)
        return;
    }
    const P = W && Fe(W.nodesRef.current, s).some((j) => {
      var $;
      return nt(T, ($ = j.context) == null ? void 0 : $.elements.floating);
    });
    if (nt(T, c) || nt(T, u) || P)
      return;
    const I = W ? Fe(W.nodesRef.current, s) : [];
    if (I.length > 0) {
      let j = !0;
      if (I.forEach(($) => {
        var z;
        if ((z = $.context) != null && z.open && !$.context.dataRef.current.__outsidePressBubbles) {
          j = !1;
          return;
        }
      }), !j)
        return;
    }
    i.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: M ? {
          preventScroll: !0
        } : pr(T) || vr(T)
      }
    }), r(!1, T);
  }), U = Oe((T) => {
    var F;
    const L = () => {
      var C;
      G(T), (C = Se(T)) == null || C.removeEventListener(l, L);
    };
    (F = Se(T)) == null || F.addEventListener(l, L);
  });
  return m.useEffect(() => {
    if (!n || !v)
      return;
    d.current.__escapeKeyBubbles = re, d.current.__outsidePressBubbles = Q;
    function T(C) {
      r(!1, C);
    }
    const F = fe(c);
    p && F.addEventListener("keydown", O ? Y : H, O), V && F.addEventListener(l, ee ? U : G, ee);
    let L = [];
    return K && (Z(u) && (L = ge(u)), Z(c) && (L = L.concat(ge(c))), !Z(a) && a && a.contextElement && (L = L.concat(ge(a.contextElement)))), L = L.filter((C) => {
      var oe;
      return C !== ((oe = F.defaultView) == null ? void 0 : oe.visualViewport);
    }), L.forEach((C) => {
      C.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      p && F.removeEventListener("keydown", O ? Y : H, O), V && F.removeEventListener(l, ee ? U : G, ee), L.forEach((C) => {
        C.removeEventListener("scroll", T);
      });
    };
  }, [d, c, u, a, p, V, l, n, r, K, v, re, Q, H, O, Y, G, ee, U]), m.useEffect(() => {
    R.current = !1;
  }, [V, l]), m.useMemo(() => v ? {
    reference: {
      onKeyDown: H,
      [Po[x]]: (T) => {
        E && (i.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, T.nativeEvent));
      }
    },
    floating: {
      onKeyDown: H,
      onMouseDown() {
        q.current = !0;
      },
      onMouseUp() {
        q.current = !0;
      },
      [_o[l]]: () => {
        R.current = !0;
      }
    }
  } : {}, [v, i, E, l, x, r, H]);
}
let dt;
process.env.NODE_ENV !== "production" && (dt = /* @__PURE__ */ new Set());
function Do(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: i
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var s;
    const R = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((s = e.elements) != null && s.reference && !Z(e.elements.reference)) {
      var a;
      if (!((a = dt) != null && a.has(R))) {
        var u;
        (u = dt) == null || u.add(R), console.error(R);
      }
    }
  }
  const [c, d] = m.useState(null), v = ((t = e.elements) == null ? void 0 : t.reference) || c, p = $r(e), b = bt(), l = Oe((R, q) => {
    R && (x.current.openEvent = q), r == null || r(R, q);
  }), E = m.useRef(null), x = m.useRef({}), K = m.useState(() => fo())[0], y = mt(), g = m.useCallback((R) => {
    const q = Z(R) ? {
      getBoundingClientRect: () => R.getBoundingClientRect(),
      contextElement: R
    } : R;
    p.refs.setReference(q);
  }, [p.refs]), W = m.useCallback((R) => {
    (Z(R) || R === null) && (E.current = R, d(R)), (Z(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    R !== null && !Z(R)) && p.refs.setReference(R);
  }, [p.refs]), M = m.useMemo(() => ({
    ...p.refs,
    setReference: W,
    setPositionReference: g,
    domReference: E
  }), [p.refs, W, g]), S = m.useMemo(() => ({
    ...p.elements,
    domReference: v
  }), [p.elements, v]), V = m.useMemo(() => ({
    ...p,
    refs: M,
    elements: S,
    dataRef: x,
    nodeId: i,
    floatingId: y,
    events: K,
    open: n,
    onOpenChange: l
  }), [p, i, y, K, n, l, M, S]);
  return ve(() => {
    const R = b == null ? void 0 : b.nodesRef.current.find((q) => q.id === i);
    R && (R.context = V);
  }), m.useMemo(() => ({
    ...p,
    context: V,
    refs: M,
    elements: S
  }), [p, M, S, V]);
}
function at(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((i) => i ? i[n] : null).concat(e).reduce((i, s) => (s && Object.entries(s).forEach((a) => {
      let [u, c] = a;
      if (u.indexOf("on") === 0) {
        if (r.has(u) || r.set(u, []), typeof c == "function") {
          var d;
          (d = r.get(u)) == null || d.push(c), i[u] = function() {
            for (var v, p = arguments.length, b = new Array(p), l = 0; l < p; l++)
              b[l] = arguments[l];
            return (v = r.get(u)) == null ? void 0 : v.map((E) => E(...b)).find((E) => E !== void 0);
          };
        }
      } else
        i[u] = c;
    }), i), {})
  };
}
function Ao(e) {
  e === void 0 && (e = []);
  const t = e, n = m.useCallback(
    (s) => at(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = m.useCallback(
    (s) => at(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = m.useCallback(
    (s) => at(s, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((s) => s == null ? void 0 : s.item)
  );
  return m.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: i
  }), [n, r, i]);
}
function Fo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: i = !0,
    role: s = "dialog"
  } = t, a = mt();
  return m.useMemo(() => {
    const u = {
      id: r,
      role: s
    };
    return i ? s === "tooltip" ? {
      reference: {
        "aria-describedby": n ? r : void 0
      },
      floating: u
    } : {
      reference: {
        "aria-expanded": n ? "true" : "false",
        "aria-haspopup": s === "alertdialog" ? "dialog" : s,
        "aria-controls": n ? r : void 0,
        ...s === "listbox" && {
          role: "combobox"
        },
        ...s === "menu" && {
          id: a
        }
      },
      floating: {
        ...u,
        ...s === "menu" && {
          "aria-labelledby": a
        }
      }
    } : {};
  }, [i, s, n, r, a]);
}
const Io = (e) => {
  const { state: t } = rn(), [n, r] = tr(!1), { refs: i, context: s, floatingStyles: a } = Do({
    open: n,
    onOpenChange: r,
    middleware: [],
    whileElementsMounted: Wr
  }), u = Oo(s), c = ko(s), d = Fo(s), { getReferenceProps: v, getFloatingProps: p } = Ao([u, c, d]), b = mt();
  return /* @__PURE__ */ le.jsxs("div", { className: `nepali-datepicker ${t.classNames.wrapper || ""}`, "data-theme": t.theme, children: [
    /* @__PURE__ */ le.jsx("div", { ref: i.setReference, ...v(), children: e.input }),
    n && /* @__PURE__ */ le.jsx(So, { context: s, modal: !1, children: /* @__PURE__ */ le.jsx("div", { ref: i.setFloating, style: a, "aria-labelledby": b, ...p(), children: e.calendar }) })
  ] });
}, No = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options"
], Mo = (e) => {
  const t = on(No, e);
  return /* @__PURE__ */ le.jsx(ar, { ...e, children: /* @__PURE__ */ le.jsx(Io, { input: /* @__PURE__ */ le.jsx(ur, { ...t }), calendar: /* @__PURE__ */ le.jsx(ir, {}) }) });
};
export {
  Mo as NepaliDatePicker
};
