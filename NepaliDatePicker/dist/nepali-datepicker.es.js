import * as h from "react";
import pr, { useMemo as ze, useState as bn, useCallback as et, createContext as mr, useReducer as br, useContext as hr, useLayoutEffect as hn, useEffect as Ee, useRef as gn } from "react";
import * as gr from "react-dom";
var wt = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function vr() {
  if (Kt)
    return qe;
  Kt = 1;
  var e = Symbol.for("react.fragment");
  return qe.Fragment = e, qe.jsxDEV = void 0, qe;
}
var Ge = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function yr() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function S(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = v && s[v] || s[E];
      return typeof p == "function" ? p : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(s) {
      {
        for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), T = 1; T < p; T++)
          y[T - 1] = arguments[T];
        C("error", s, y);
      }
    }
    function C(s, p, y) {
      {
        var T = w.ReactDebugCurrentFrame, U = T.getStackAddendum();
        U !== "" && (p += "%s", y = y.concat([U]));
        var q = y.map(function(V) {
          return String(V);
        });
        q.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, q);
      }
    }
    var j = !1, k = !1, O = !1, x = !1, H = !1, G;
    G = Symbol.for("react.module.reference");
    function X(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === i || H || s === o || s === f || s === m || x || s === l || j || k || O || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === d || s.$$typeof === a || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === G || s.getModuleId !== void 0));
    }
    function R(s, p, y) {
      var T = s.displayName;
      if (T)
        return T;
      var U = p.displayName || p.name || "";
      return U !== "" ? y + "(" + U + ")" : y;
    }
    function Z(s) {
      return s.displayName || "Context";
    }
    function B(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var p = s;
            return Z(p) + ".Consumer";
          case a:
            var y = s;
            return Z(y._context) + ".Provider";
          case u:
            return R(s, s.render, "ForwardRef");
          case d:
            var T = s.displayName || null;
            return T !== null ? T : B(s.type) || "Memo";
          case g: {
            var U = s, q = U._payload, V = U._init;
            try {
              return B(V(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, J = 0, z, D, W, $, P, se, L;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function A() {
      {
        if (J === 0) {
          z = console.log, D = console.info, W = console.warn, $ = console.error, P = console.group, se = console.groupCollapsed, L = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        J++;
      }
    }
    function M() {
      {
        if (J--, J === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, s, {
              value: z
            }),
            info: _({}, s, {
              value: D
            }),
            warn: _({}, s, {
              value: W
            }),
            error: _({}, s, {
              value: $
            }),
            group: _({}, s, {
              value: P
            }),
            groupCollapsed: _({}, s, {
              value: se
            }),
            groupEnd: _({}, s, {
              value: L
            })
          });
        }
        J < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, K;
    function Q(s, p, y) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (U) {
            var T = U.stack.trim().match(/\n( *(at )?)/);
            K = T && T[1] || "";
          }
        return `
` + K + s;
      }
    }
    var le = !1, we;
    {
      var Hn = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Hn();
    }
    function _t(s, p) {
      if (!s || le)
        return "";
      {
        var y = we.get(s);
        if (y !== void 0)
          return y;
      }
      var T;
      le = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = Y.current, Y.current = null, A();
      try {
        if (p) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (me) {
              T = me;
            }
            Reflect.construct(s, [], V);
          } else {
            try {
              V.call();
            } catch (me) {
              T = me;
            }
            s.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            T = me;
          }
          s();
        }
      } catch (me) {
        if (me && T && typeof me.stack == "string") {
          for (var F = me.stack.split(`
`), re = T.stack.split(`
`), ee = F.length - 1, te = re.length - 1; ee >= 1 && te >= 0 && F[ee] !== re[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (F[ee] !== re[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || F[ee] !== re[te]) {
                    var ue = `
` + F[ee].replace(" at new ", " at ");
                    return s.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", s.displayName)), typeof s == "function" && we.set(s, ue), ue;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        le = !1, Y.current = q, M(), Error.prepareStackTrace = U;
      }
      var Se = s ? s.displayName || s.name : "", Ht = Se ? Q(Se) : "";
      return typeof s == "function" && we.set(s, Ht), Ht;
    }
    function Kn(s, p, y) {
      return _t(s, !1);
    }
    function qn(s) {
      var p = s.prototype;
      return !!(p && p.isReactComponent);
    }
    function Ye(s, p, y) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return _t(s, qn(s));
      if (typeof s == "string")
        return Q(s);
      switch (s) {
        case f:
          return Q("Suspense");
        case m:
          return Q("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return Kn(s.render);
          case d:
            return Ye(s.type, p, y);
          case g: {
            var T = s, U = T._payload, q = T._init;
            try {
              return Ye(q(U), p, y);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, It = {}, Ft = w.ReactDebugCurrentFrame;
    function Ke(s) {
      if (s) {
        var p = s._owner, y = Ye(s.type, s._source, p ? p.type : null);
        Ft.setExtraStackFrame(y);
      } else
        Ft.setExtraStackFrame(null);
    }
    function Gn(s, p, y, T, U) {
      {
        var q = Function.call.bind(He);
        for (var V in s)
          if (q(s, V)) {
            var F = void 0;
            try {
              if (typeof s[V] != "function") {
                var re = Error((T || "React class") + ": " + y + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              F = s[V](p, V, T, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              F = ee;
            }
            F && !(F instanceof Error) && (Ke(U), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", y, V, typeof F), Ke(null)), F instanceof Error && !(F.message in It) && (It[F.message] = !0, Ke(U), b("Failed %s type: %s", y, F.message), Ke(null));
          }
      }
    }
    var Xn = Array.isArray;
    function ut(s) {
      return Xn(s);
    }
    function Jn(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, y = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return y;
      }
    }
    function Zn(s) {
      try {
        return Lt(s), !1;
      } catch {
        return !0;
      }
    }
    function Lt(s) {
      return "" + s;
    }
    function Vt(s) {
      if (Zn(s))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jn(s)), Lt(s);
    }
    var Le = w.ReactCurrentOwner, Qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wt, Mt, ft;
    ft = {};
    function er(s) {
      if (He.call(s, "ref")) {
        var p = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function tr(s) {
      if (He.call(s, "key")) {
        var p = Object.getOwnPropertyDescriptor(s, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function nr(s, p) {
      if (typeof s.ref == "string" && Le.current && p && Le.current.stateNode !== p) {
        var y = B(Le.current.type);
        ft[y] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Le.current.type), s.ref), ft[y] = !0);
      }
    }
    function rr(s, p) {
      {
        var y = function() {
          Wt || (Wt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function or(s, p) {
      {
        var y = function() {
          Mt || (Mt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var sr = function(s, p, y, T, U, q, V) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: p,
        ref: y,
        props: V,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function ir(s, p, y, T, U) {
      {
        var q, V = {}, F = null, re = null;
        y !== void 0 && (Vt(y), F = "" + y), tr(p) && (Vt(p.key), F = "" + p.key), er(p) && (re = p.ref, nr(p, U));
        for (q in p)
          He.call(p, q) && !Qn.hasOwnProperty(q) && (V[q] = p[q]);
        if (s && s.defaultProps) {
          var ee = s.defaultProps;
          for (q in ee)
            V[q] === void 0 && (V[q] = ee[q]);
        }
        if (F || re) {
          var te = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          F && rr(V, te), re && or(V, te);
        }
        return sr(s, F, re, U, T, Le.current, V);
      }
    }
    var dt = w.ReactCurrentOwner, Ut = w.ReactDebugCurrentFrame;
    function je(s) {
      if (s) {
        var p = s._owner, y = Ye(s.type, s._source, p ? p.type : null);
        Ut.setExtraStackFrame(y);
      } else
        Ut.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function mt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function zt() {
      {
        if (dt.current) {
          var s = B(dt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function ar(s) {
      {
        if (s !== void 0) {
          var p = s.fileName.replace(/^.*[\\\/]/, ""), y = s.lineNumber;
          return `

Check your code at ` + p + ":" + y + ".";
        }
        return "";
      }
    }
    var $t = {};
    function cr(s) {
      {
        var p = zt();
        if (!p) {
          var y = typeof s == "string" ? s : s.displayName || s.name;
          y && (p = `

Check the top-level render call using <` + y + ">.");
        }
        return p;
      }
    }
    function Bt(s, p) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var y = cr(p);
        if ($t[y])
          return;
        $t[y] = !0;
        var T = "";
        s && s._owner && s._owner !== dt.current && (T = " It was passed a child from " + B(s._owner.type) + "."), je(s), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, T), je(null);
      }
    }
    function Yt(s, p) {
      {
        if (typeof s != "object")
          return;
        if (ut(s))
          for (var y = 0; y < s.length; y++) {
            var T = s[y];
            mt(T) && Bt(T, p);
          }
        else if (mt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var U = S(s);
          if (typeof U == "function" && U !== s.entries)
            for (var q = U.call(s), V; !(V = q.next()).done; )
              mt(V.value) && Bt(V.value, p);
        }
      }
    }
    function lr(s) {
      {
        var p = s.type;
        if (p == null || typeof p == "string")
          return;
        var y;
        if (typeof p == "function")
          y = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === d))
          y = p.propTypes;
        else
          return;
        if (y) {
          var T = B(p);
          Gn(y, s.props, "prop", T, s);
        } else if (p.PropTypes !== void 0 && !pt) {
          pt = !0;
          var U = B(p);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(s) {
      {
        for (var p = Object.keys(s.props), y = 0; y < p.length; y++) {
          var T = p[y];
          if (T !== "children" && T !== "key") {
            je(s), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), je(null);
            break;
          }
        }
        s.ref !== null && (je(s), b("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function fr(s, p, y, T, U, q) {
      {
        var V = X(s);
        if (!V) {
          var F = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = ar(U);
          re ? F += re : F += zt();
          var ee;
          s === null ? ee = "null" : ut(s) ? ee = "array" : s !== void 0 && s.$$typeof === t ? (ee = "<" + (B(s.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof s, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, F);
        }
        var te = ir(s, p, y, U, q);
        if (te == null)
          return te;
        if (V) {
          var ue = p.children;
          if (ue !== void 0)
            if (T)
              if (ut(ue)) {
                for (var Se = 0; Se < ue.length; Se++)
                  Yt(ue[Se], s);
                Object.freeze && Object.freeze(ue);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(ue, s);
        }
        return s === r ? ur(te) : lr(te), te;
      }
    }
    var dr = fr;
    Ge.Fragment = r, Ge.jsxDEV = dr;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? wt.exports = vr() : wt.exports = yr();
var N = wt.exports;
const Tt = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e;
  return /* @__PURE__ */ N.jsxDEV(
    "button",
    {
      className: `
          ndp-bg-white dark:ndp-bg-slate-800
          hover:ndp-bg-gray-100 dark:hover:ndp-bg-gray-700
          ndp-border-gray-300 dark:ndp-border-gray-600
          dark:hover:ndp-border-gray-600
          focus:ndp-outline-none focus:ndp-ring-0
          ndp-text-sm ndp-px-3 ndp-py-1.5 hover-transition
          ndp-flex ndp-items-center
          ${n || ""}
        `,
      type: r,
      ...o,
      children: t
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/buttons/action-btn.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    globalThis
  );
}, vn = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e;
  return /* @__PURE__ */ N.jsxDEV(
    "button",
    {
      className: `
              ndp-flex ndp-justify-center ndp-items-center hover-transition
              ndp-border-0 ndp-h-10 ndp-w-10 ndp-rounded-full
              hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
              ${n || ""}
            `,
      type: r,
      ...o,
      children: t
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/buttons/nav-btn.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    globalThis
  );
}, wr = () => {
  const { trans: e } = ye();
  return /* @__PURE__ */ N.jsxDEV(Tt, { className: "ndp-font-medium ndp-border hover:ndp-text-red-500", title: e("labels.clear"), children: [
    /* @__PURE__ */ N.jsxDEV(Ir, { className: "ndp-w-4 ndp-h-4" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, globalThis);
}, xr = (e, t) => Object.entries(t).reduce((n, [r, o]) => e.includes(r) ? { ...n } : { ...n, [r]: o }, {}), Nr = (e, t, n = null) => {
  let r = { ...e };
  try {
    t.split(".").forEach((o) => {
      if (!Object.keys(r).includes(o))
        throw new Error(`No property ${o} found in the object. Please define defaultValue.`);
      r = r[o];
    });
  } catch (o) {
    if (n)
      return n;
    throw o;
  }
  return r;
}, xt = (e, t, n = 1) => {
  const r = [];
  for (let o = e; o <= t; o += n)
    r.push(o);
  return r;
}, Er = () => {
  const { numberTrans: e } = ye(), t = ze(() => 5, []);
  return /* @__PURE__ */ N.jsxDEV("tbody", { children: xt(0, t).map((n) => /* @__PURE__ */ N.jsxDEV("tr", { className: "ndp-border-0", children: xt(1, 7).map((r) => /* @__PURE__ */ N.jsxDEV(
    "td",
    {
      className: `
                  ndp-border-0 ndp-h-10 ndp-w-10  ndp-rounded-full
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${n === 2 && r === 3 ? `
                    ndp-bg-primary ndp-text-secondary ndp-m-2
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}
                `,
      title: e(r * (n + 1)),
      children: [
        e(r * (n + 1)),
        n === 3 && r === 5 && /* @__PURE__ */ N.jsxDEV("div", { className: `
                  ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                  ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                ` }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, globalThis)
      ]
    },
    r,
    !0,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
      lineNumber: 15,
      columnNumber: 13
    },
    globalThis
  )) }, n, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, globalThis);
}, yn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: i }) => {
  const [a, c] = bn(!1), u = ze(() => e.find((d) => d.value === n), [n]), f = et(() => {
    c((d) => !d);
  }, []), m = et((d) => {
    c(!1), t(d);
  }, [t]);
  return /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-relative", children: [
    /* @__PURE__ */ N.jsxDEV(
      Tt,
      {
        onClick: f,
        onKeyDown: f,
        className: `
                    ${o || ""}
                 `,
        title: r,
        children: u == null ? void 0 : u.label
      },
      void 0,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      globalThis
    ),
    a && /* @__PURE__ */ N.jsxDEV("ul", { className: `
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
          ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          ${i || ""}
        `, children: e.map((d) => /* @__PURE__ */ N.jsxDEV(
      "li",
      {
        onClick: () => m(d),
        onKeyDown: () => m(d),
        role: "button",
        className: `
                  ndp-px-3 ndp-py-1.5 ndp-text-sm hover-transition
                  ${d.value === n ? `
                    ndp-bg-primary ndp-text-secondary
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                `,
        children: d.label
      },
      d.value,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 56,
        columnNumber: 13
      },
      globalThis
    )) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, globalThis);
}, kr = [
  "baisakh",
  "jestha",
  "asar",
  "shrawan",
  "bhadra",
  "asoj",
  "kartik",
  "mangsir",
  "pouse",
  "magh",
  "falgun",
  "chaitra"
], Tr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Rr = () => {
  const { trans: e } = ye(), t = ze(() => kr.map((r, o) => ({
    label: e(`months.${r}`),
    value: o
  })), []), n = et((r) => {
    console.log(r);
  }, []);
  return /* @__PURE__ */ N.jsxDEV(
    yn,
    {
      options: t,
      value: 6,
      onSelect: n,
      className: "ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center",
      dropdownClass: "ndp-rounded-r-sm ndp-rounded-bl-sm",
      title: e("labels.select-month")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/month-picker.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    globalThis
  );
}, Dr = () => {
  const { trans: e } = ye();
  return /* @__PURE__ */ N.jsxDEV(vn, { title: e("labels.next"), children: /* @__PURE__ */ N.jsxDEV(Lr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, globalThis);
}, jr = () => {
  const { trans: e } = ye();
  return /* @__PURE__ */ N.jsxDEV(vn, { title: e("labels.previous"), children: /* @__PURE__ */ N.jsxDEV(Fr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, globalThis);
}, Sr = () => {
  const { trans: e, numberTrans: t } = ye();
  return /* @__PURE__ */ N.jsxDEV(Tt, { className: "ndp-font-medium ndp-border hover:ndp-text-primary ndp-group", title: e("labels.today"), children: [
    /* @__PURE__ */ N.jsxDEV(Vr, { date: t(20) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.today") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, globalThis);
}, Pr = () => {
  const { trans: e } = ye(), t = ze(() => Tr.map((n, r) => ({
    label: e(`weeks.${n}`),
    value: r
  })), []);
  return /* @__PURE__ */ N.jsxDEV("thead", { children: /* @__PURE__ */ N.jsxDEV("tr", { className: "ndp-border-0", children: t.map((n) => /* @__PURE__ */ N.jsxDEV(
    "td",
    {
      className: "ndp-border-0 ndp-h-10 ndp-w-10",
      title: n.label,
      children: n.label
    },
    n.value,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
      lineNumber: 20,
      columnNumber: 11
    },
    globalThis
  )) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, globalThis);
}, Cr = () => {
  const { state: e } = at(), { numberTrans: t, trans: n } = ye(), r = ze(() => xt(e.config.minYear, e.config.maxYear).reverse().map((i) => ({
    label: t(i),
    value: i
  })), []), o = et((i) => {
    console.log(i);
  }, []);
  return /* @__PURE__ */ N.jsxDEV(
    yn,
    {
      options: r,
      value: 2080,
      onSelect: o,
      className: "ndp-border-y ndp-border-l ndp-rounded-l-sm",
      dropdownClass: "ndp-rounded-l-sm ndp-rounded-br-sm",
      title: n("labels.select-year")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/year-picker.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    globalThis
  );
}, Or = () => /* @__PURE__ */ N.jsxDEV("div", { className: `
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
  /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-flex ndp-items-center ndp-justify-between", children: [
    /* @__PURE__ */ N.jsxDEV(jr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-flex", children: [
      /* @__PURE__ */ N.jsxDEV(Cr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, globalThis),
      /* @__PURE__ */ N.jsxDEV(Rr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Dr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ N.jsxDEV("table", { className: "ndp-text-center ndp-w-full ndp-border-0", children: [
    /* @__PURE__ */ N.jsxDEV(Pr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Er, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2", children: [
    /* @__PURE__ */ N.jsxDEV(Sr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(wr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, globalThis)
] }, void 0, !0, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
  lineNumber: 14,
  columnNumber: 5
}, globalThis);
var tt = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(tt || {}), Ve = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(Ve || {}), fe = /* @__PURE__ */ ((e) => (e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_OPTIONS = "SET_OPTIONS", e))(fe || {});
const Rt = {
  classNames: {
    wrapper: "",
    input: ""
  },
  theme: tt.LIGHT,
  value: "",
  events: {
    onChange: void 0,
    onSelect: void 0
  },
  locale: {
    calendar: Ve.NEPALI,
    value: Ve.NEPALI
  },
  options: {
    colors: {
      primary: "#2096f5",
      secondary: "#fff"
    }
  },
  config: {
    maxYear: 2100,
    minYear: 1970,
    currentLocale: Ve.NEPALI
  }
}, Ar = (e = Rt, t) => t.type === fe.SET_VALUE ? { ...e, value: t.value } : t.type === fe.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === fe.SET_THEME ? { ...e, theme: t.theme } : t.type === fe.SET_EVENTS ? { ...e, events: t.events } : t.type === fe.SET_OPTIONS ? { ...e, options: t.options } : e, wn = mr({
  state: Rt,
  dispatch: () => null
}), _r = ({ children: e }) => {
  const [t, n] = br(Ar, Rt);
  return /* @__PURE__ */ N.jsxDEV(wn.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, at = () => {
  const { state: e, dispatch: t } = hr(wn);
  return { setData: (r) => {
    t(r);
  }, state: e };
}, Ir = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ N.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/cross-icon.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, globalThis)
  },
  void 0,
  !1,
  {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/cross-icon.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  globalThis
), Fr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ N.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/left-arrow.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, globalThis)
  },
  void 0,
  !1,
  {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/left-arrow.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  globalThis
), Lr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ N.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/right-arrow.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, globalThis)
  },
  void 0,
  !1,
  {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/right-arrow.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  globalThis
), Vr = ({ date: e, className: t }) => /* @__PURE__ */ N.jsxDEV("span", { className: `
      ndp-border ndp-border-gray-200 dark:ndp-border-slate-700
      ndp-px-1 ndp-py-0.5 ndp-text-xs
      ndp-text-gray-400 ndp-inset-2 ndp-rounded-full
      group-hover:ndp-text-primary group-hover:ndp-border-primary group-hover:ndp-opacity-50
      ${t || ""}
    `, children: e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/today-icon.tsx",
  lineNumber: 11,
  columnNumber: 5
}, globalThis), Wr = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options"
], Mr = (e) => {
  const t = xr([...Wr, "type", "readOnly"], e), { state: n } = at();
  return /* @__PURE__ */ N.jsxDEV(
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
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/input/date-input.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    globalThis
  );
};
var xn = (
  /** @class */
  function() {
    function e(t) {
      this.outputLocale = "en", this.numberString = "", this.supportedLocale = ["en", "ne"], this.supportedNumberType = ["en-IN", "en-US"], this.digitMapping = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"], t && this.setNumber(t);
    }
    return e.prototype.setOutputLocale = function(t) {
      if (!this.supportedLocale.includes(t))
        throw new TypeError("Currently 'ne' and 'en' only supported as a `locale` parameter.");
      return this.outputLocale = t, this;
    }, e.prototype.setNumber = function(t) {
      return this.numberString = "" + t, this;
    }, e.prototype.toNepali = function(t) {
      var n = this;
      return t = t || this.numberString, t ? t.toString().split("").map(function(r) {
        return isNaN(parseInt(r)) ? r : n.digitMapping[r] || r;
      }).join("") : "";
    }, e.prototype.toEnglish = function(t) {
      var n = this;
      return t = t || this.numberString, t ? t.toString().split("").map(function(r) {
        var o = n.digitMapping.findIndex(function(i) {
          return i === r;
        });
        return o === -1 ? r : "" + o;
      }).join("") : "";
    }, e.prototype.formatNumber = function(t) {
      if (!this.supportedNumberType.includes(t))
        throw new TypeError("Currently 'en-US' and 'en-IN' only supported as a `type` parameter.");
      var n = parseFloat(this.toEnglish());
      if (isNaN(n))
        return this.numberString;
      var r = new Intl.NumberFormat(t).format(n);
      return this.outputLocale === "en" ? this.toEnglish(r) : this.toNepali(r);
    }, e.prototype.formatAmount = function(t, n) {
      if (n === void 0 && (n = 2), !this.supportedNumberType.includes(t))
        throw new TypeError("Currently 'en-US' and 'en-IN' only supported as a `type` parameter.");
      var r = parseFloat(this.toEnglish());
      if (isNaN(r))
        return this.numberString;
      var o = new Intl.NumberFormat(t, {
        maximumFractionDigits: n,
        minimumFractionDigits: n
      }).format(r);
      return this.outputLocale === "en" ? this.toEnglish(o) : this.toNepali(o);
    }, e;
  }()
), Ur = function(e) {
  return new xn().setNumber(e).toNepali();
}, zr = function(e) {
  return new xn().setNumber(e).toEnglish();
};
const $r = {
  months: {
    baisakh: "Baisakh",
    jestha: "Jestha",
    asar: "Asar",
    shrawan: "Shrawan",
    bhadra: "Bhadra",
    asoj: "Asoj",
    kartik: "Kartik",
    mangsir: "Mangsir",
    pouse: "Pouse",
    magh: "Magh",
    falgun: "Falgun",
    chaitra: "Chaitra"
  },
  weeks: {
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat"
  },
  labels: {
    previous: "Previous Month",
    next: "Next Month",
    today: "Today",
    "select-year": "Select Year",
    "select-month": "Select Month",
    clear: "Clear"
  }
}, Br = {
  months: {
    baisakh: "बैशाख",
    jestha: "जेठ",
    asar: "असार",
    shrawan: "सावन",
    bhadra: "भदौ",
    asoj: "असोज",
    kartik: "कार्तिक",
    mangsir: "मंसिर",
    pouse: "पौष",
    magh: "माघ",
    falgun: "फागुन",
    chaitra: "चैत"
  },
  weeks: {
    sun: "आईत",
    mon: "सोम",
    tue: "मंगल",
    wed: "बुध",
    thu: "बिही",
    fri: "शुक्र",
    sat: "शनि"
  },
  labels: {
    previous: "अघिल्लो महिना",
    next: "अर्को महिना",
    today: "आज",
    "select-year": "वर्ष छान्नुहोस्",
    "select-month": "महिना छान्नुहोस्",
    clear: "मेटाउनुहोस्"
  }
}, Yr = {
  en: $r,
  ne: Br
}, ye = () => {
  const { state: e } = at();
  return {
    trans: (t, n) => Nr(Yr[n || e.config.currentLocale], t, t),
    numberTrans: (t, n) => Ve.ENGLISH === `${n || e.config.currentLocale}` ? zr(t) : Ur(t)
  };
};
function ge(e) {
  return Nn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (Nn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nn(e) {
  return e instanceof Node || e instanceof ae(e).Node;
}
function ne(e) {
  return e instanceof Element || e instanceof ae(e).Element;
}
function oe(e) {
  return e instanceof HTMLElement || e instanceof ae(e).HTMLElement;
}
function Nt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ae(e).ShadowRoot;
}
function $e(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Hr(e) {
  return ["table", "td", "th"].includes(ge(e));
}
function Dt(e) {
  const t = jt(), n = ce(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Kr(e) {
  let t = Re(e);
  for (; oe(t) && !Be(t); ) {
    if (Dt(t))
      return t;
    t = Re(t);
  }
  return null;
}
function jt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Be(e) {
  return ["html", "body", "#document"].includes(ge(e));
}
function ce(e) {
  return ae(e).getComputedStyle(e);
}
function ct(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Re(e) {
  if (ge(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nt(e) && e.host || // Fallback.
    be(e)
  );
  return Nt(t) ? t.host : t;
}
function En(e) {
  const t = Re(e);
  return Be(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oe(t) && $e(t) ? t : En(t);
}
function he(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = En(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ae(o);
  return i ? t.concat(a, a.visualViewport || [], $e(o) ? o : [], a.frameElement && n ? he(a.frameElement) : []) : t.concat(o, he(o, [], n));
}
function Oe(e) {
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
  if (n && Nt(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function qr() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Gr() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function Xr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : kn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Jr(e) {
  return !kn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Zr() {
  return /apple/i.test(navigator.vendor);
}
function kn() {
  const e = /android/i;
  return e.test(qr()) || e.test(Gr());
}
function Gt(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function Qr(e) {
  return "nativeEvent" in e;
}
function eo(e) {
  return e.matches("html,body");
}
function pe(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function bt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Ae(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const to = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Tn(e) {
  return oe(e) && e.matches(to);
}
function ht(e) {
  e.preventDefault(), e.stopPropagation();
}
const Fe = Math.min, Te = Math.max, nt = Math.round, Xe = Math.floor, ve = (e) => ({
  x: e,
  y: e
});
function no(e, t, n) {
  return Te(e, Fe(t, n));
}
function Rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function St(e) {
  return e.split("-")[0];
}
function Pt(e) {
  return e.split("-")[1];
}
function ro(e) {
  return e === "x" ? "y" : "x";
}
function Dn(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  return ["top", "bottom"].includes(St(e)) ? "y" : "x";
}
function jn(e) {
  return ro(Ct(e));
}
function oo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function so(e) {
  return typeof e != "number" ? oo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Xt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ct(t), a = jn(t), c = Dn(a), u = St(t), f = i === "y", m = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[c] / 2 - o[c] / 2;
  let l;
  switch (u) {
    case "top":
      l = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      l = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      l = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      l = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      l = {
        x: r.x,
        y: r.y
      };
  }
  switch (Pt(t)) {
    case "start":
      l[a] -= g * (n && f ? -1 : 1);
      break;
    case "end":
      l[a] += g * (n && f ? -1 : 1);
      break;
  }
  return l;
}
const io = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, c = i.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let f = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: d
  } = Xt(f, r, u), g = r, l = {}, v = 0;
  for (let E = 0; E < c.length; E++) {
    const {
      name: S,
      fn: w
    } = c[E], {
      x: b,
      y: C,
      data: j,
      reset: k
    } = await w({
      x: m,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: l,
      rects: f,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (m = b ?? m, d = C ?? d, l = {
      ...l,
      [S]: {
        ...l[S],
        ...j
      }
    }, k && v <= 50) {
      v++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (f = k.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : k.rects), {
        x: m,
        y: d
      } = Xt(f, g, u)), E = -1;
      continue;
    }
  }
  return {
    x: m,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: l
  };
}, Jt = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: c,
      middlewareData: u
    } = t, {
      element: f,
      padding: m = 0
    } = Rn(e, t) || {};
    if (f == null)
      return {};
    const d = so(m), g = {
      x: n,
      y: r
    }, l = jn(o), v = Dn(l), E = await a.getDimensions(f), S = l === "y", w = S ? "top" : "left", b = S ? "bottom" : "right", C = S ? "clientHeight" : "clientWidth", j = i.reference[v] + i.reference[l] - g[l] - i.floating[v], k = g[l] - i.reference[l], O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(f));
    let x = O ? O[C] : 0;
    (!x || !await (a.isElement == null ? void 0 : a.isElement(O))) && (x = c.floating[C] || i.floating[v]);
    const H = j / 2 - k / 2, G = x / 2 - E[v] / 2 - 1, X = Fe(d[w], G), R = Fe(d[b], G), Z = X, B = x - E[v] - R, _ = x / 2 - E[v] / 2 + H, J = no(Z, _, B), z = !u.arrow && Pt(o) != null && _ != J && i.reference[v] / 2 - (_ < Z ? X : R) - E[v] / 2 < 0, D = z ? _ < Z ? _ - Z : _ - B : 0;
    return {
      [l]: g[l] + D,
      data: {
        [l]: J,
        centerOffset: _ - J - D,
        ...z && {
          alignmentOffset: D
        }
      },
      reset: z
    };
  }
});
async function ao(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = St(n), c = Pt(n), u = Ct(n) === "y", f = ["left", "top"].includes(a) ? -1 : 1, m = i && u ? -1 : 1, d = Rn(t, e);
  let {
    mainAxis: g,
    crossAxis: l,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof v == "number" && (l = c === "end" ? v * -1 : v), u ? {
    x: l * m,
    y: g * f
  } : {
    x: g * f,
    y: l * m
  };
}
const co = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await ao(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Pn(e) {
  const t = ce(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = oe(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, c = nt(n) !== i || nt(r) !== a;
  return c && (n = i, r = a), {
    width: n,
    height: r,
    $: c
  };
}
function Ot(e) {
  return ne(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = Ot(e);
  if (!oe(t))
    return ve(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Pn(t);
  let a = (i ? nt(n.width) : n.width) / r, c = (i ? nt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
const lo = /* @__PURE__ */ ve(0);
function Cn(e) {
  const t = ae(e);
  return !jt() || !t.visualViewport ? lo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ae(e) ? !1 : t;
}
function De(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ot(e);
  let a = ve(1);
  t && (r ? ne(r) && (a = Ie(r)) : a = Ie(e));
  const c = uo(i, n, r) ? Cn(i) : ve(0);
  let u = (o.left + c.x) / a.x, f = (o.top + c.y) / a.y, m = o.width / a.x, d = o.height / a.y;
  if (i) {
    const g = ae(i), l = r && ne(r) ? ae(r) : r;
    let v = g.frameElement;
    for (; v && r && l !== g; ) {
      const E = Ie(v), S = v.getBoundingClientRect(), w = ce(v), b = S.left + (v.clientLeft + parseFloat(w.paddingLeft)) * E.x, C = S.top + (v.clientTop + parseFloat(w.paddingTop)) * E.y;
      u *= E.x, f *= E.y, m *= E.x, d *= E.y, u += b, f += C, v = ae(v).frameElement;
    }
  }
  return Sn({
    width: m,
    height: d,
    x: u,
    y: f
  });
}
function fo(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = oe(n), i = be(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ve(1);
  const u = ve(0);
  if ((o || !o && r !== "fixed") && ((ge(n) !== "body" || $e(i)) && (a = ct(n)), oe(n))) {
    const f = De(n);
    c = Ie(n), u.x = f.x + n.clientLeft, u.y = f.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - a.scrollLeft * c.x + u.x,
    y: t.y * c.y - a.scrollTop * c.y + u.y
  };
}
function po(e) {
  return Array.from(e.getClientRects());
}
function On(e) {
  return De(be(e)).left + ct(e).scrollLeft;
}
function mo(e) {
  const t = be(e), n = ct(e), r = e.ownerDocument.body, o = Te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + On(e);
  const c = -n.scrollTop;
  return ce(r).direction === "rtl" && (a += Te(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: c
  };
}
function bo(e, t) {
  const n = ae(e), r = be(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
  if (o) {
    i = o.width, a = o.height;
    const f = jt();
    (!f || f && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c,
    y: u
  };
}
function ho(e, t) {
  const n = De(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = oe(e) ? Ie(e) : ve(1), a = e.clientWidth * i.x, c = e.clientHeight * i.y, u = o * i.x, f = r * i.y;
  return {
    width: a,
    height: c,
    x: u,
    y: f
  };
}
function Zt(e, t, n) {
  let r;
  if (t === "viewport")
    r = bo(e, n);
  else if (t === "document")
    r = mo(be(e));
  else if (ne(t))
    r = ho(t, n);
  else {
    const o = Cn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Sn(r);
}
function An(e, t) {
  const n = Re(e);
  return n === t || !ne(n) || Be(n) ? !1 : ce(n).position === "fixed" || An(n, t);
}
function go(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = he(e, [], !1).filter((c) => ne(c) && ge(c) !== "body"), o = null;
  const i = ce(e).position === "fixed";
  let a = i ? Re(e) : e;
  for (; ne(a) && !Be(a); ) {
    const c = ce(a), u = Dt(a);
    !u && c.position === "fixed" && (o = null), (i ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || $e(a) && !u && An(e, a)) ? r = r.filter((m) => m !== a) : o = c, a = Re(a);
  }
  return t.set(e, r), r;
}
function vo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? go(t, this._c) : [].concat(n), r], c = a[0], u = a.reduce((f, m) => {
    const d = Zt(t, m, o);
    return f.top = Te(d.top, f.top), f.right = Fe(d.right, f.right), f.bottom = Fe(d.bottom, f.bottom), f.left = Te(d.left, f.left), f;
  }, Zt(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function yo(e) {
  return Pn(e);
}
function wo(e, t, n) {
  const r = oe(t), o = be(t), i = n === "fixed", a = De(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ve(0);
  if (r || !r && !i)
    if ((ge(t) !== "body" || $e(o)) && (c = ct(t)), r) {
      const f = De(t, !0, i, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else
      o && (u.x = On(o));
  return {
    x: a.left + c.scrollLeft - u.x,
    y: a.top + c.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Qt(e, t) {
  return !oe(e) || ce(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function _n(e, t) {
  const n = ae(e);
  if (!oe(e))
    return n;
  let r = Qt(e, t);
  for (; r && Hr(r) && ce(r).position === "static"; )
    r = Qt(r, t);
  return r && (ge(r) === "html" || ge(r) === "body" && ce(r).position === "static" && !Dt(r)) ? n : r || Kr(e) || n;
}
const xo = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || _n, i = this.getDimensions;
  return {
    reference: wo(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function No(e) {
  return ce(e).direction === "rtl";
}
const In = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fo,
  getDocumentElement: be,
  getClippingRect: vo,
  getOffsetParent: _n,
  getElementRects: xo,
  getClientRects: po,
  getDimensions: yo,
  getScale: Ie,
  isElement: ne,
  isRTL: No
};
function Eo(e, t) {
  let n = null, r;
  const o = be(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const {
      left: f,
      top: m,
      width: d,
      height: g
    } = e.getBoundingClientRect();
    if (c || t(), !d || !g)
      return;
    const l = Xe(m), v = Xe(o.clientWidth - (f + d)), E = Xe(o.clientHeight - (m + g)), S = Xe(f), b = {
      rootMargin: -l + "px " + -v + "px " + -E + "px " + -S + "px",
      threshold: Te(0, Fe(1, u)) || 1
    };
    let C = !0;
    function j(k) {
      const O = k[0].intersectionRatio;
      if (O !== u) {
        if (!C)
          return a();
        O ? a(!1, O) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(j, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(j, b);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function ko(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = Ot(e), m = o || i ? [...f ? he(f) : [], ...he(t)] : [];
  m.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = f && c ? Eo(f, n) : null;
  let g = -1, l = null;
  a && (l = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === f && l && (l.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      l && l.observe(t);
    })), n();
  }), f && !u && l.observe(f), l.observe(t));
  let v, E = u ? De(e) : null;
  u && S();
  function S() {
    const w = De(e);
    E && (w.x !== E.x || w.y !== E.y || w.width !== E.width || w.height !== E.height) && n(), E = w, v = requestAnimationFrame(S);
  }
  return n(), () => {
    m.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), l && l.disconnect(), l = null, u && cancelAnimationFrame(v);
  };
}
const To = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: In,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return io(e, t, {
    ...o,
    platform: i
  });
}, Ro = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Jt({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Jt({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Qe = typeof document < "u" ? hn : Ee;
function rt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!rt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !rt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function en(e, t) {
  const n = Fn(e);
  return Math.round(t * n) / n;
}
function tn(e) {
  const t = h.useRef(e);
  return Qe(() => {
    t.current = e;
  }), t;
}
function Do(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: f
  } = e, [m, d] = h.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, l] = h.useState(r);
  rt(g, r) || l(r);
  const [v, E] = h.useState(null), [S, w] = h.useState(null), b = h.useCallback((z) => {
    z != O.current && (O.current = z, E(z));
  }, [E]), C = h.useCallback((z) => {
    z !== x.current && (x.current = z, w(z));
  }, [w]), j = i || v, k = a || S, O = h.useRef(null), x = h.useRef(null), H = h.useRef(m), G = tn(u), X = tn(o), R = h.useCallback(() => {
    if (!O.current || !x.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: g
    };
    X.current && (z.platform = X.current), To(O.current, x.current, z).then((D) => {
      const W = {
        ...D,
        isPositioned: !0
      };
      Z.current && !rt(H.current, W) && (H.current = W, gr.flushSync(() => {
        d(W);
      }));
    });
  }, [g, t, n, X]);
  Qe(() => {
    f === !1 && H.current.isPositioned && (H.current.isPositioned = !1, d((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [f]);
  const Z = h.useRef(!1);
  Qe(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), Qe(() => {
    if (j && (O.current = j), k && (x.current = k), j && k) {
      if (G.current)
        return G.current(j, k, R);
      R();
    }
  }, [j, k, R, G]);
  const B = h.useMemo(() => ({
    reference: O,
    floating: x,
    setReference: b,
    setFloating: C
  }), [b, C]), _ = h.useMemo(() => ({
    reference: j,
    floating: k
  }), [j, k]), J = h.useMemo(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return z;
    const D = en(_.floating, m.x), W = en(_.floating, m.y);
    return c ? {
      ...z,
      transform: "translate(" + D + "px, " + W + "px)",
      ...Fn(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: W
    };
  }, [n, c, _.floating, m.x, m.y]);
  return h.useMemo(() => ({
    ...m,
    update: R,
    refs: B,
    elements: _,
    floatingStyles: J
  }), [m, R, B, _, J]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var jo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Et = /* @__PURE__ */ jo.join(","), Ln = typeof Element > "u", Me = Ln ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ot = !Ln && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, st = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = o === "" || o === "true", a = i || n && t && e(t.parentNode);
  return a;
}, So = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Po = function(t, n, r) {
  if (st(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Et));
  return n && Me.call(t, Et) && o.unshift(t), o = o.filter(r), o;
}, Co = function e(t, n, r) {
  for (var o = [], i = Array.from(t); i.length; ) {
    var a = i.shift();
    if (!st(a, !1))
      if (a.tagName === "SLOT") {
        var c = a.assignedElements(), u = c.length ? c : a.children, f = e(u, !0, r);
        r.flatten ? o.push.apply(o, f) : o.push({
          scopeParent: a,
          candidates: f
        });
      } else {
        var m = Me.call(a, Et);
        m && r.filter(a) && (n || !t.includes(a)) && o.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), g = !st(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && g) {
          var l = e(d === !0 ? a.children : d.children, !0, r);
          r.flatten ? o.push.apply(o, l) : o.push({
            scopeParent: a,
            candidates: l
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, Vn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Wn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || So(t)) && !Vn(t) ? 0 : t.tabIndex;
}, Oo = function(t, n) {
  var r = Wn(t);
  return r < 0 && n && !Vn(t) ? 0 : r;
}, Ao = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Mn = function(t) {
  return t.tagName === "INPUT";
}, _o = function(t) {
  return Mn(t) && t.type === "hidden";
}, Io = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Fo = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Lo = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ot(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = Fo(o, t.form);
  return !i || i === t;
}, Vo = function(t) {
  return Mn(t) && t.type === "radio";
}, Wo = function(t) {
  return Vo(t) && !Lo(t);
}, Mo = function(t) {
  var n, r = t && ot(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var a, c, u;
    for (i = !!((a = o) !== null && a !== void 0 && (c = a.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && o; ) {
      var f, m, d;
      r = ot(o), o = (f = r) === null || f === void 0 ? void 0 : f.host, i = !!((m = o) !== null && m !== void 0 && (d = m.ownerDocument) !== null && d !== void 0 && d.contains(o));
    }
  }
  return i;
}, nn = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Uo = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Me.call(t, "details>summary:first-of-type"), a = i ? t.parentElement : t;
  if (Me.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, f = ot(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return nn(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = c;
    }
    if (Mo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return nn(t);
  return !1;
}, zo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Me.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, $o = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  st(n) || _o(n) || Uo(n, t) || // For a details element with a summary, the summary element gets the focus
  Io(n) || zo(n));
}, rn = function(t, n) {
  return !(Wo(n) || Wn(n) < 0 || !$o(t, n));
}, Bo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Yo = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, i) {
    var a = !!o.scopeParent, c = a ? o.scopeParent : o, u = Oo(c, a), f = a ? e(o.candidates) : c;
    u === 0 ? a ? n.push.apply(n, f) : n.push(c) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: o,
      isScope: a,
      content: f
    });
  }), r.sort(Ao).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, Un = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Co([t], n.includeContainer, {
    filter: rn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Bo
  }) : r = Po(t, n.includeContainer, rn.bind(null, n)), Yo(r);
};
const Ho = h[/* @__PURE__ */ "useInsertionEffect".toString()], Ko = Ho || ((e) => e());
function _e(e) {
  const t = h.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Ko(() => {
    t.current = e;
  }), h.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
let on = 0;
function xe(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(on);
  const i = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? i() : on = requestAnimationFrame(i);
}
var de = typeof document < "u" ? hn : Ee;
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ue.apply(this, arguments);
}
let gt = !1, qo = 0;
const sn = () => "floating-ui-" + qo++;
function Go() {
  const [e, t] = h.useState(() => gt ? sn() : void 0);
  return de(() => {
    e == null && t(sn());
  }, []), h.useEffect(() => {
    gt || (gt = !0);
  }, []), e;
}
const Xo = h[/* @__PURE__ */ "useId".toString()], lt = Xo || Go, Jo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  let {
    context: {
      placement: r,
      elements: {
        floating: o
      },
      middlewareData: {
        arrow: i
      }
    },
    width: a = 14,
    height: c = 7,
    tipRadius: u = 0,
    strokeWidth: f = 0,
    staticOffset: m,
    stroke: d,
    d: g,
    style: {
      transform: l,
      ...v
    } = {},
    ...E
  } = t;
  process.env.NODE_ENV !== "production" && (n || console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component."));
  const S = lt();
  if (!o)
    return null;
  f *= 2;
  const w = f / 2, b = a / 2 * (u / -8 + 1), C = c / 2 * u / 4, [j, k] = r.split("-"), O = In.isRTL(o), x = !!g, H = j === "top" || j === "bottom", G = m && k === "end" ? "bottom" : "top";
  let X = m && k === "end" ? "right" : "left";
  m && O && (X = k === "end" ? "left" : "right");
  const R = (i == null ? void 0 : i.x) != null ? m || i.x : "", Z = (i == null ? void 0 : i.y) != null ? m || i.y : "", B = g || "M0,0" + (" H" + a) + (" L" + (a - b) + "," + (c - C)) + (" Q" + a / 2 + "," + c + " " + b + "," + (c - C)) + " Z", _ = {
    top: x ? "rotate(180deg)" : "",
    left: x ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: x ? "" : "rotate(180deg)",
    right: x ? "rotate(-90deg)" : "rotate(90deg)"
  }[j];
  return /* @__PURE__ */ h.createElement("svg", Ue({}, E, {
    "aria-hidden": !0,
    ref: n,
    width: x ? a : a + f,
    height: a,
    viewBox: "0 0 " + a + " " + (c > a ? c : a),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [X]: R,
      [G]: Z,
      [j]: H || x ? "100%" : "calc(100% - " + f / 2 + "px)",
      transform: "" + _ + (l ?? ""),
      ...v
    }
  }), f > 0 && /* @__PURE__ */ h.createElement("path", {
    clipPath: "url(#" + S + ")",
    fill: "none",
    stroke: d,
    strokeWidth: f + (g ? 0 : 1),
    d: B
  }), /* @__PURE__ */ h.createElement("path", {
    stroke: f && !g ? E.fill : "none",
    d: B
  }), /* @__PURE__ */ h.createElement("clipPath", {
    id: S
  }, /* @__PURE__ */ h.createElement("rect", {
    x: -w,
    y: w * (x ? -1 : 1),
    width: a + f,
    height: a
  })));
});
function Zo() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const Qo = /* @__PURE__ */ h.createContext(null), es = /* @__PURE__ */ h.createContext(null), ts = () => {
  var e;
  return ((e = h.useContext(Qo)) == null ? void 0 : e.id) || null;
}, At = () => h.useContext(es);
function it(e) {
  return "data-floating-ui-" + e;
}
function ke(e) {
  const t = gn(e);
  return de(() => {
    t.current = e;
  }), t;
}
function ns(e, t) {
  var n;
  let r = [], o = (n = e.find((i) => i.id === t)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const i = e.find((a) => a.id === o);
    o = i == null ? void 0 : i.parentId, i && (r = r.concat(i));
  }
  return r;
}
function We(e, t) {
  let n = e.filter((o) => {
    var i;
    return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((a) => {
        var c;
        return o.parentId === a.id && ((c = o.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(r);
  return n;
}
let Pe = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakSet(), Ze = {}, vt = 0;
const rs = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, zn = (e) => e && (e.host || zn(e.parentNode)), os = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = zn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function ss(e, t, n, r) {
  const o = "data-floating-ui-inert", i = r ? "inert" : n ? "aria-hidden" : null, a = os(t, e), c = /* @__PURE__ */ new Set(), u = new Set(a), f = [];
  Ze[o] || (Ze[o] = /* @__PURE__ */ new WeakMap());
  const m = Ze[o];
  a.forEach(d), g(t), c.clear();
  function d(l) {
    !l || c.has(l) || (c.add(l), l.parentNode && d(l.parentNode));
  }
  function g(l) {
    !l || u.has(l) || Array.prototype.forEach.call(l.children, (v) => {
      if (c.has(v))
        g(v);
      else {
        const E = i ? v.getAttribute(i) : null, S = E !== null && E !== "false", w = (Pe.get(v) || 0) + 1, b = (m.get(v) || 0) + 1;
        Pe.set(v, w), m.set(v, b), f.push(v), w === 1 && S && Je.add(v), b === 1 && v.setAttribute(o, ""), !S && i && v.setAttribute(i, "true");
      }
    });
  }
  return vt++, () => {
    f.forEach((l) => {
      const v = (Pe.get(l) || 0) - 1, E = (m.get(l) || 0) - 1;
      Pe.set(l, v), m.set(l, E), v || (!Je.has(l) && i && l.removeAttribute(i), Je.delete(l)), E || l.removeAttribute(o);
    }), vt--, vt || (Pe = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakSet(), Ze = {});
  };
}
function an(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = pe(e[0]).body;
  return ss(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const $n = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Bn(e, t) {
  const n = Un(e, $n());
  t === "prev" && n.reverse();
  const r = n.indexOf(Oe(pe(e)));
  return n.slice(r + 1)[0];
}
function is() {
  return Bn(document.body, "next");
}
function as() {
  return Bn(document.body, "prev");
}
function cn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !ie(n, r);
}
const Yn = {
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
let cs;
function ln(e) {
  e.key === "Tab" && (e.target, clearTimeout(cs));
}
const un = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const [r, o] = h.useState();
  de(() => (Zr() && o("button"), document.addEventListener("keydown", ln), () => {
    document.removeEventListener("keydown", ln);
  }), []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [it("focus-guard")]: "",
    style: Yn
  };
  return /* @__PURE__ */ h.createElement("span", Ue({}, t, i));
}), ls = /* @__PURE__ */ h.createContext(null), us = () => h.useContext(ls), fs = /* @__PURE__ */ h.forwardRef(function(t, n) {
  return /* @__PURE__ */ h.createElement("button", Ue({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: Yn
  }));
});
function ds(e) {
  const {
    context: t,
    children: n,
    disabled: r = !1,
    order: o = ["content"],
    guards: i = !0,
    initialFocus: a = 0,
    returnFocus: c = !0,
    modal: u = !0,
    visuallyHiddenDismiss: f = !1,
    closeOnFocusOut: m = !0
  } = e, {
    open: d,
    refs: g,
    nodeId: l,
    onOpenChange: v,
    events: E,
    dataRef: S,
    elements: {
      domReference: w,
      floating: b
    }
  } = t, C = typeof a == "number" && a < 0, j = (w == null ? void 0 : w.getAttribute("role")) === "combobox" && Tn(w) && C, k = j ? !1 : u, O = rs() ? i : !0, x = ke(o), H = ke(a), G = ke(c), X = At(), R = us(), Z = h.useRef(null), B = h.useRef(null), _ = h.useRef(!1), J = h.useRef(null), z = h.useRef(!1), D = R != null, W = h.useCallback(function(L) {
    return L === void 0 && (L = b), L ? Un(L, $n()) : [];
  }, [b]), $ = h.useCallback((L) => {
    const I = W(L);
    return x.current.map((A) => w && A === "reference" ? w : b && A === "floating" ? b : I).filter(Boolean).flat();
  }, [w, b, x, W]);
  h.useEffect(() => {
    if (r || !k)
      return;
    function L(A) {
      if (A.key === "Tab") {
        ie(b, Oe(pe(b))) && W().length === 0 && !j && ht(A);
        const M = $(), Y = Ae(A);
        x.current[0] === "reference" && Y === w && (ht(A), A.shiftKey ? xe(M[M.length - 1]) : xe(M[1])), x.current[1] === "floating" && Y === b && A.shiftKey && (ht(A), xe(M[0]));
      }
    }
    const I = pe(b);
    return I.addEventListener("keydown", L), () => {
      I.removeEventListener("keydown", L);
    };
  }, [r, w, b, k, x, g, j, W, $]), h.useEffect(() => {
    if (r || !m)
      return;
    function L() {
      z.current = !0, setTimeout(() => {
        z.current = !1;
      });
    }
    function I(A) {
      const M = A.relatedTarget;
      queueMicrotask(() => {
        const Y = !(ie(w, M) || ie(b, M) || ie(M, b) || ie(R == null ? void 0 : R.portalNode, M) || M != null && M.hasAttribute(it("focus-guard")) || X && (We(X.nodesRef.current, l).find((K) => {
          var Q, le;
          return ie((Q = K.context) == null ? void 0 : Q.elements.floating, M) || ie((le = K.context) == null ? void 0 : le.elements.domReference, M);
        }) || ns(X.nodesRef.current, l).find((K) => {
          var Q, le;
          return ((Q = K.context) == null ? void 0 : Q.elements.floating) === M || ((le = K.context) == null ? void 0 : le.elements.domReference) === M;
        })));
        M && Y && !z.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        M !== J.current && (_.current = !0, v(!1, A));
      });
    }
    if (b && oe(w))
      return w.addEventListener("focusout", I), w.addEventListener("pointerdown", L), !k && b.addEventListener("focusout", I), () => {
        w.removeEventListener("focusout", I), w.removeEventListener("pointerdown", L), !k && b.removeEventListener("focusout", I);
      };
  }, [r, w, b, k, l, X, R, v, m]), h.useEffect(() => {
    var L;
    if (r)
      return;
    const I = Array.from((R == null || (L = R.portalNode) == null ? void 0 : L.querySelectorAll("[" + it("portal") + "]")) || []);
    if (b) {
      const A = [b, ...I, Z.current, B.current, x.current.includes("reference") || j ? w : null].filter((Y) => Y != null), M = u || j ? an(A, O, !O) : an(A);
      return () => {
        M();
      };
    }
  }, [r, w, b, u, x, R, j, O]), de(() => {
    if (r || !b)
      return;
    const L = pe(b), I = Oe(L);
    queueMicrotask(() => {
      const A = $(b), M = H.current, Y = (typeof M == "number" ? A[M] : M.current) || b, K = ie(b, I);
      !C && !K && d && xe(Y, {
        preventScroll: Y === b
      });
    });
  }, [r, d, b, C, $, H]), de(() => {
    if (r || !b)
      return;
    let L = !1;
    const I = pe(b), A = Oe(I), M = S.current;
    J.current = A;
    function Y(K) {
      if (K.type === "escapeKey" && g.domReference.current && (J.current = g.domReference.current), ["referencePress", "escapeKey"].includes(K.type))
        return;
      const Q = K.data.returnFocus;
      typeof Q == "object" ? (_.current = !1, L = Q.preventScroll) : _.current = !Q;
    }
    return E.on("dismiss", Y), () => {
      E.off("dismiss", Y);
      const K = Oe(I);
      (ie(b, K) || X && We(X.nodesRef.current, l).some((le) => {
        var we;
        return ie((we = le.context) == null ? void 0 : we.elements.floating, K);
      }) || M.openEvent && ["click", "mousedown"].includes(M.openEvent.type)) && g.domReference.current && (J.current = g.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      G.current && oe(J.current) && !_.current && xe(J.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: L
      });
    };
  }, [r, b, G, S, g, E, X, l]), de(() => {
    if (!(r || !R))
      return R.setFocusManagerState({
        modal: k,
        closeOnFocusOut: m,
        open: d,
        onOpenChange: v,
        refs: g
      }), () => {
        R.setFocusManagerState(null);
      };
  }, [r, R, k, d, v, g, m]), de(() => {
    if (r || !b || typeof MutationObserver != "function" || C)
      return;
    const L = () => {
      const A = b.getAttribute("tabindex");
      x.current.includes("floating") || Oe(pe(b)) !== g.domReference.current && W().length === 0 ? A !== "0" && b.setAttribute("tabindex", "0") : A !== "-1" && b.setAttribute("tabindex", "-1");
    };
    L();
    const I = new MutationObserver(L);
    return I.observe(b, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      I.disconnect();
    };
  }, [r, b, g, x, W, C]);
  function P(L) {
    return r || !f || !k ? null : /* @__PURE__ */ h.createElement(fs, {
      ref: L === "start" ? Z : B,
      onClick: (I) => v(!1, I.nativeEvent)
    }, typeof f == "string" ? f : "Dismiss");
  }
  const se = !r && O && (D || k);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, se && /* @__PURE__ */ h.createElement(un, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.beforeInsideRef,
    onFocus: (L) => {
      if (k) {
        const A = $();
        xe(o[0] === "reference" ? A[0] : A[A.length - 1]);
      } else if (R != null && R.preserveTabOrder && R.portalNode)
        if (_.current = !1, cn(L, R.portalNode)) {
          const A = is() || w;
          A == null || A.focus();
        } else {
          var I;
          (I = R.beforeOutsideRef.current) == null || I.focus();
        }
    }
  }), !j && P("start"), n, P("end"), se && /* @__PURE__ */ h.createElement(un, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.afterInsideRef,
    onFocus: (L) => {
      if (k)
        xe($()[0]);
      else if (R != null && R.preserveTabOrder && R.portalNode)
        if (m && (_.current = !0), cn(L, R.portalNode)) {
          const A = as() || w;
          A == null || A.focus();
        } else {
          var I;
          (I = R.afterOutsideRef.current) == null || I.focus();
        }
    }
  }));
}
function fn(e) {
  return oe(e.target) && e.target.tagName === "BUTTON";
}
function dn(e) {
  return Tn(e);
}
function ps(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    elements: {
      domReference: i
    }
  } = e, {
    enabled: a = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: m = !0
  } = t, d = h.useRef(), g = h.useRef(!1);
  return h.useMemo(() => a ? {
    reference: {
      onPointerDown(l) {
        d.current = l.pointerType;
      },
      onMouseDown(l) {
        l.button === 0 && (Gt(d.current, !0) && f || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, l.nativeEvent) : (l.preventDefault(), r(!0, l.nativeEvent))));
      },
      onClick(l) {
        if (c === "mousedown" && d.current) {
          d.current = void 0;
          return;
        }
        Gt(d.current, !0) && f || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, l.nativeEvent) : r(!0, l.nativeEvent));
      },
      onKeyDown(l) {
        d.current = void 0, !(l.defaultPrevented || !m || fn(l)) && (l.key === " " && !dn(i) && (l.preventDefault(), g.current = !0), l.key === "Enter" && r(!(n && u), l.nativeEvent));
      },
      onKeyUp(l) {
        l.defaultPrevented || !m || fn(l) || dn(i) || l.key === " " && g.current && (g.current = !1, r(!(n && u), l.nativeEvent));
      }
    }
  } : {}, [a, o, c, f, m, i, u, n, r]);
}
const ms = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, bs = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, pn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function hs(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    nodeId: i,
    elements: {
      reference: a,
      domReference: c,
      floating: u
    },
    dataRef: f
  } = e, {
    enabled: m = !0,
    escapeKey: d = !0,
    outsidePress: g = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: v = !1,
    referencePressEvent: E = "pointerdown",
    ancestorScroll: S = !1,
    bubbles: w,
    capture: b
  } = t, C = At(), j = ts() != null, k = _e(typeof g == "function" ? g : () => !1), O = typeof g == "function" ? k : g, x = h.useRef(!1), H = h.useRef(!1), {
    escapeKey: G,
    outsidePress: X
  } = pn(w), {
    escapeKey: R,
    outsidePress: Z
  } = pn(b), B = _e((D) => {
    if (!n || !m || !d || D.key !== "Escape")
      return;
    const W = C ? We(C.nodesRef.current, i) : [];
    if (!G && (D.stopPropagation(), W.length > 0)) {
      let $ = !0;
      if (W.forEach((P) => {
        var se;
        if ((se = P.context) != null && se.open && !P.context.dataRef.current.__escapeKeyBubbles) {
          $ = !1;
          return;
        }
      }), !$)
        return;
    }
    o.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, Qr(D) ? D.nativeEvent : D);
  }), _ = _e((D) => {
    var W;
    const $ = () => {
      var P;
      B(D), (P = Ae(D)) == null || P.removeEventListener("keydown", $);
    };
    (W = Ae(D)) == null || W.addEventListener("keydown", $);
  }), J = _e((D) => {
    const W = x.current;
    x.current = !1;
    const $ = H.current;
    if (H.current = !1, l === "click" && $ || W || typeof O == "function" && !O(D))
      return;
    const P = Ae(D), se = "[" + it("inert") + "]", L = pe(u).querySelectorAll(se);
    let I = ne(P) ? P : null;
    for (; I && !Be(I); ) {
      const Y = Re(I);
      if (Y === pe(u).body || !ne(Y))
        break;
      I = Y;
    }
    if (L.length && ne(P) && !eo(P) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ie(P, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(L).every((Y) => !ie(I, Y)))
      return;
    if (oe(P) && u) {
      const Y = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, K = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
      let Q = K && D.offsetX > P.clientWidth;
      if (K && ce(P).direction === "rtl" && (Q = D.offsetX <= P.offsetWidth - P.clientWidth), Q || Y && D.offsetY > P.clientHeight)
        return;
    }
    const A = C && We(C.nodesRef.current, i).some((Y) => {
      var K;
      return bt(D, (K = Y.context) == null ? void 0 : K.elements.floating);
    });
    if (bt(D, u) || bt(D, c) || A)
      return;
    const M = C ? We(C.nodesRef.current, i) : [];
    if (M.length > 0) {
      let Y = !0;
      if (M.forEach((K) => {
        var Q;
        if ((Q = K.context) != null && Q.open && !K.context.dataRef.current.__outsidePressBubbles) {
          Y = !1;
          return;
        }
      }), !Y)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: j ? {
          preventScroll: !0
        } : Xr(D) || Jr(D)
      }
    }), r(!1, D);
  }), z = _e((D) => {
    var W;
    const $ = () => {
      var P;
      J(D), (P = Ae(D)) == null || P.removeEventListener(l, $);
    };
    (W = Ae(D)) == null || W.addEventListener(l, $);
  });
  return h.useEffect(() => {
    if (!n || !m)
      return;
    f.current.__escapeKeyBubbles = G, f.current.__outsidePressBubbles = X;
    function D(P) {
      r(!1, P);
    }
    const W = pe(u);
    d && W.addEventListener("keydown", R ? _ : B, R), O && W.addEventListener(l, Z ? z : J, Z);
    let $ = [];
    return S && (ne(c) && ($ = he(c)), ne(u) && ($ = $.concat(he(u))), !ne(a) && a && a.contextElement && ($ = $.concat(he(a.contextElement)))), $ = $.filter((P) => {
      var se;
      return P !== ((se = W.defaultView) == null ? void 0 : se.visualViewport);
    }), $.forEach((P) => {
      P.addEventListener("scroll", D, {
        passive: !0
      });
    }), () => {
      d && W.removeEventListener("keydown", R ? _ : B, R), O && W.removeEventListener(l, Z ? z : J, Z), $.forEach((P) => {
        P.removeEventListener("scroll", D);
      });
    };
  }, [f, u, c, a, d, O, l, n, r, S, m, G, X, B, R, _, J, Z, z]), h.useEffect(() => {
    x.current = !1;
  }, [O, l]), h.useMemo(() => m ? {
    reference: {
      onKeyDown: B,
      [ms[E]]: (D) => {
        v && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, D.nativeEvent));
      }
    },
    floating: {
      onKeyDown: B,
      onMouseDown() {
        H.current = !0;
      },
      onMouseUp() {
        H.current = !0;
      },
      [bs[l]]: () => {
        x.current = !0;
      }
    }
  } : {}, [m, o, v, l, E, r, B]);
}
let kt;
process.env.NODE_ENV !== "production" && (kt = /* @__PURE__ */ new Set());
function gs(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var i;
    const x = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((i = e.elements) != null && i.reference && !ne(e.elements.reference)) {
      var a;
      if (!((a = kt) != null && a.has(x))) {
        var c;
        (c = kt) == null || c.add(x), console.error(x);
      }
    }
  }
  const [u, f] = h.useState(null), m = ((t = e.elements) == null ? void 0 : t.reference) || u, d = Do(e), g = At(), l = _e((x, H) => {
    x && (E.current.openEvent = H), r == null || r(x, H);
  }), v = h.useRef(null), E = h.useRef({}), S = h.useState(() => Zo())[0], w = lt(), b = h.useCallback((x) => {
    const H = ne(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    d.refs.setReference(H);
  }, [d.refs]), C = h.useCallback((x) => {
    (ne(x) || x === null) && (v.current = x, f(x)), (ne(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !ne(x)) && d.refs.setReference(x);
  }, [d.refs]), j = h.useMemo(() => ({
    ...d.refs,
    setReference: C,
    setPositionReference: b,
    domReference: v
  }), [d.refs, C, b]), k = h.useMemo(() => ({
    ...d.elements,
    domReference: m
  }), [d.elements, m]), O = h.useMemo(() => ({
    ...d,
    refs: j,
    elements: k,
    dataRef: E,
    nodeId: o,
    floatingId: w,
    events: S,
    open: n,
    onOpenChange: l
  }), [d, o, w, S, n, l, j, k]);
  return de(() => {
    const x = g == null ? void 0 : g.nodesRef.current.find((H) => H.id === o);
    x && (x.context = O);
  }), h.useMemo(() => ({
    ...d,
    context: O,
    refs: j,
    elements: k
  }), [d, j, k, O]);
}
function yt(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[n] : null).concat(e).reduce((o, i) => (i && Object.entries(i).forEach((a) => {
      let [c, u] = a;
      if (c.indexOf("on") === 0) {
        if (r.has(c) || r.set(c, []), typeof u == "function") {
          var f;
          (f = r.get(c)) == null || f.push(u), o[c] = function() {
            for (var m, d = arguments.length, g = new Array(d), l = 0; l < d; l++)
              g[l] = arguments[l];
            return (m = r.get(c)) == null ? void 0 : m.map((v) => v(...g)).find((v) => v !== void 0);
          };
        }
      } else
        o[c] = u;
    }), o), {})
  };
}
function vs(e) {
  e === void 0 && (e = []);
  const t = e, n = h.useCallback(
    (i) => yt(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = h.useCallback(
    (i) => yt(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = h.useCallback(
    (i) => yt(i, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((i) => i == null ? void 0 : i.item)
  );
  return h.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function ys(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, a = lt();
  return h.useMemo(() => {
    const c = {
      id: r,
      role: i
    };
    return o ? i === "tooltip" ? {
      reference: {
        "aria-describedby": n ? r : void 0
      },
      floating: c
    } : {
      reference: {
        "aria-expanded": n ? "true" : "false",
        "aria-haspopup": i === "alertdialog" ? "dialog" : i,
        "aria-controls": n ? r : void 0,
        ...i === "listbox" && {
          role: "combobox"
        },
        ...i === "menu" && {
          id: a
        }
      },
      floating: {
        ...c,
        ...i === "menu" && {
          "aria-labelledby": a
        }
      }
    } : {};
  }, [o, i, n, r, a]);
}
const mn = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ws(e, t) {
  const [n, r] = h.useState(e);
  return e && !n && r(!0), h.useEffect(() => {
    if (!e) {
      const o = setTimeout(() => r(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, t]), n;
}
function xs(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, a = (typeof o == "number" ? o : o.close) || 0, [c, u] = h.useState(!1), [f, m] = h.useState("unmounted"), d = ws(n, a);
  return de(() => {
    c && !d && m("unmounted");
  }, [c, d]), de(() => {
    if (r)
      if (n) {
        m("initial");
        const g = requestAnimationFrame(() => {
          m("open");
        });
        return () => {
          cancelAnimationFrame(g);
        };
      } else
        u(!0), m("close");
  }, [n, r]), {
    isMounted: d,
    status: f
  };
}
function Ns(e, t) {
  t === void 0 && (t = {});
  const {
    initial: n = {
      opacity: 0
    },
    open: r,
    close: o,
    common: i,
    duration: a = 250
  } = t, c = e.placement, u = c.split("-")[0], f = h.useMemo(() => ({
    side: u,
    placement: c
  }), [u, c]), m = typeof a == "number", d = (m ? a : a.open) || 0, g = (m ? a : a.close) || 0, [l, v] = h.useState(() => ({
    ...Ce(i, f),
    ...Ce(n, f)
  })), {
    isMounted: E,
    status: S
  } = xs(e, {
    duration: a
  }), w = ke(n), b = ke(r), C = ke(o), j = ke(i);
  return de(() => {
    const k = Ce(w.current, f), O = Ce(C.current, f), x = Ce(j.current, f), H = Ce(b.current, f) || Object.keys(k).reduce((G, X) => (G[X] = "", G), {});
    if (S === "initial" && v((G) => ({
      transitionProperty: G.transitionProperty,
      ...x,
      ...k
    })), S === "open" && v({
      transitionProperty: Object.keys(H).map(mn).join(","),
      transitionDuration: d + "ms",
      ...x,
      ...H
    }), S === "close") {
      const G = O || k;
      v({
        transitionProperty: Object.keys(G).map(mn).join(","),
        transitionDuration: g + "ms",
        ...x,
        ...G
      });
    }
  }, [g, C, w, b, j, d, S, f]), {
    isMounted: E,
    styles: l
  };
}
const Ne = 7, Es = 2, ks = (e) => {
  var j, k;
  const [t, n] = bn(!0), r = gn(null), {
    refs: o,
    context: i,
    floatingStyles: a,
    middlewareData: c
  } = gs({
    open: t,
    onOpenChange: n,
    middleware: [
      Ro({
        element: r
      }),
      co(Ne + Es)
    ],
    whileElementsMounted: ko
  }), u = ((j = c.arrow) == null ? void 0 : j.x) ?? 0, f = ((k = c.arrow) == null ? void 0 : k.y) ?? 0, m = u + Ne / 2, d = f + Ne, { isMounted: g, styles: l } = Ns(i, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: O }) => ({
      transformOrigin: {
        top: `${m}px calc(100% + ${Ne}px)`,
        bottom: `${m}px ${-Ne}px`,
        left: `calc(100% + ${Ne}px) ${d}px`,
        right: `${-Ne}px ${d}px`
      }[O]
    })
  }), v = ps(i), E = hs(i), S = ys(i), { getReferenceProps: w, getFloatingProps: b } = vs([v, E, S]), C = lt();
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV("div", { ref: o.setReference, ...w(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, globalThis),
    t && /* @__PURE__ */ N.jsxDEV(ds, { context: i, modal: !1, children: g ? /* @__PURE__ */ N.jsxDEV("div", { ref: o.setFloating, style: a, "aria-labelledby": C, ...b(), children: /* @__PURE__ */ N.jsxDEV("div", { style: l, children: [
      /* @__PURE__ */ N.jsxDEV(
        Jo,
        {
          ref: r,
          context: i,
          className: `
                                  ndp-fill-white dark:ndp-fill-slate-800
                               `
        },
        void 0,
        !1,
        {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
          lineNumber: 84,
          columnNumber: 17
        },
        globalThis
      ),
      e.calendar
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 83,
      columnNumber: 15
    }, globalThis) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, globalThis) : /* @__PURE__ */ N.jsxDEV("div", {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, globalThis) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, globalThis);
}, Ts = ({ ...e }) => {
  const { state: t, setData: n } = at();
  return Ee(() => {
    n({ type: fe.SET_VALUE, value: e.value || "" });
  }, [e.value]), Ee(() => {
    n({
      type: fe.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), Ee(() => {
    n({
      type: fe.SET_THEME,
      theme: e.dark ? tt.DARK : tt.LIGHT
    });
  }, [e.dark]), Ee(() => {
    n({
      type: fe.SET_EVENTS,
      events: {
        onChange: e.onChange || void 0,
        onSelect: e.onSelect || void 0
      }
    });
  }, [e.onChange, e.onSelect]), Ee(() => {
    var r, o, i, a;
    n({
      type: fe.SET_OPTIONS,
      options: {
        colors: {
          primary: ((o = (r = e.options) == null ? void 0 : r.colors) == null ? void 0 : o.primary) || t.options.colors.primary,
          secondary: ((a = (i = e.options) == null ? void 0 : i.colors) == null ? void 0 : a.secondary) || t.options.colors.secondary
        }
      }
    });
  }, [e.options]), /* @__PURE__ */ N.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.classNames.wrapper || ""}`,
      "data-theme": t.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ N.jsxDEV(ks, { input: /* @__PURE__ */ N.jsxDEV(Mr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 64,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ N.jsxDEV(Or, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 64,
        columnNumber: 69
      }, globalThis) }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    globalThis
  );
}, Ds = (e) => /* @__PURE__ */ N.jsxDEV(_r, { children: /* @__PURE__ */ N.jsxDEV(Ts, { ...e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 13,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 12,
  columnNumber: 5
}, globalThis);
export {
  Ds as NepaliDatePicker
};
