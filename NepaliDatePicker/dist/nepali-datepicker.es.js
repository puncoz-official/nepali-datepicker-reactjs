import * as g from "react";
import wr, { useContext as Er, useMemo as ie, useCallback as Ee, useState as En, createContext as Dr, useReducer as xr, useLayoutEffect as Dn, useEffect as Re, useRef as xn } from "react";
import * as Nr from "react-dom";
var kt = { exports: {} }, tt = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function kr() {
  if (Zt)
    return tt;
  Zt = 1;
  var e = Symbol.for("react.fragment");
  return tt.Fragment = e, tt.jsxDEV = void 0, tt;
}
var nt = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function Tr() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = wr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), h = Symbol.iterator, D = "@@iterator";
    function k(i) {
      if (i === null || typeof i != "object")
        return null;
      var b = h && i[h] || i[D];
      return typeof b == "function" ? b : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(i) {
      {
        for (var b = arguments.length, w = new Array(b > 1 ? b - 1 : 0), T = 1; T < b; T++)
          w[T - 1] = arguments[T];
        C("error", i, w);
      }
    }
    function C(i, b, w) {
      {
        var T = y.ReactDebugCurrentFrame, W = T.getStackAddendum();
        W !== "" && (b += "%s", w = w.concat([W]));
        var q = w.map(function(B) {
          return String(B);
        });
        q.unshift("Warning: " + b), Function.prototype.apply.call(console[i], console, q);
      }
    }
    var S = !1, N = !1, A = !1, E = !1, K = !1, G;
    G = Symbol.for("react.module.reference");
    function X(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || K || i === o || i === l || i === p || E || i === d || S || N || A || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === f || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === G || i.getModuleId !== void 0));
    }
    function R(i, b, w) {
      var T = i.displayName;
      if (T)
        return T;
      var W = b.displayName || b.name || "";
      return W !== "" ? w + "(" + W + ")" : w;
    }
    function Z(i) {
      return i.displayName || "Context";
    }
    function $(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var b = i;
            return Z(b) + ".Consumer";
          case s:
            var w = i;
            return Z(w._context) + ".Provider";
          case u:
            return R(i, i.render, "ForwardRef");
          case f:
            var T = i.displayName || null;
            return T !== null ? T : $(i.type) || "Memo";
          case m: {
            var W = i, q = W._payload, B = W._init;
            try {
              return $(B(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, J = 0, U, j, V, Y, P, ce, L;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function O() {
      {
        if (J === 0) {
          U = console.log, j = console.info, V = console.warn, Y = console.error, P = console.group, ce = console.groupCollapsed, L = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        J++;
      }
    }
    function F() {
      {
        if (J--, J === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, i, {
              value: U
            }),
            info: _({}, i, {
              value: j
            }),
            warn: _({}, i, {
              value: V
            }),
            error: _({}, i, {
              value: Y
            }),
            group: _({}, i, {
              value: P
            }),
            groupCollapsed: _({}, i, {
              value: ce
            }),
            groupEnd: _({}, i, {
              value: L
            })
          });
        }
        J < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = y.ReactCurrentDispatcher, H;
    function Q(i, b, w) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (W) {
            var T = W.stack.trim().match(/\n( *(at )?)/);
            H = T && T[1] || "";
          }
        return `
` + H + i;
      }
    }
    var fe = !1, Ne;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Qn();
    }
    function Vt(i, b) {
      if (!i || fe)
        return "";
      {
        var w = Ne.get(i);
        if (w !== void 0)
          return w;
      }
      var T;
      fe = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = z.current, z.current = null, O();
      try {
        if (b) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (ve) {
              T = ve;
            }
            Reflect.construct(i, [], B);
          } else {
            try {
              B.call();
            } catch (ve) {
              T = ve;
            }
            i.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            T = ve;
          }
          i();
        }
      } catch (ve) {
        if (ve && T && typeof ve.stack == "string") {
          for (var I = ve.stack.split(`
`), oe = T.stack.split(`
`), ee = I.length - 1, te = oe.length - 1; ee >= 1 && te >= 0 && I[ee] !== oe[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (I[ee] !== oe[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || I[ee] !== oe[te]) {
                    var pe = `
` + I[ee].replace(" at new ", " at ");
                    return i.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", i.displayName)), typeof i == "function" && Ne.set(i, pe), pe;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        fe = !1, z.current = q, F(), Error.prepareStackTrace = W;
      }
      var Me = i ? i.displayName || i.name : "", Jt = Me ? Q(Me) : "";
      return typeof i == "function" && Ne.set(i, Jt), Jt;
    }
    function er(i, b, w) {
      return Vt(i, !1);
    }
    function tr(i) {
      var b = i.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ze(i, b, w) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Vt(i, tr(i));
      if (typeof i == "string")
        return Q(i);
      switch (i) {
        case l:
          return Q("Suspense");
        case p:
          return Q("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return er(i.render);
          case f:
            return Ze(i.type, b, w);
          case m: {
            var T = i, W = T._payload, q = T._init;
            try {
              return Ze(q(W), b, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, Ft = {}, Wt = y.ReactDebugCurrentFrame;
    function et(i) {
      if (i) {
        var b = i._owner, w = Ze(i.type, i._source, b ? b.type : null);
        Wt.setExtraStackFrame(w);
      } else
        Wt.setExtraStackFrame(null);
    }
    function nr(i, b, w, T, W) {
      {
        var q = Function.call.bind(Qe);
        for (var B in i)
          if (q(i, B)) {
            var I = void 0;
            try {
              if (typeof i[B] != "function") {
                var oe = Error((T || "React class") + ": " + w + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              I = i[B](b, B, T, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              I = ee;
            }
            I && !(I instanceof Error) && (et(W), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", w, B, typeof I), et(null)), I instanceof Error && !(I.message in Ft) && (Ft[I.message] = !0, et(W), v("Failed %s type: %s", w, I.message), et(null));
          }
      }
    }
    var rr = Array.isArray;
    function ht(i) {
      return rr(i);
    }
    function or(i) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, w = b && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return w;
      }
    }
    function ar(i) {
      try {
        return Ut(i), !1;
      } catch {
        return !0;
      }
    }
    function Ut(i) {
      return "" + i;
    }
    function Yt(i) {
      if (ar(i))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(i)), Ut(i);
    }
    var ze = y.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, zt, bt;
    bt = {};
    function ir(i) {
      if (Qe.call(i, "ref")) {
        var b = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function cr(i) {
      if (Qe.call(i, "key")) {
        var b = Object.getOwnPropertyDescriptor(i, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function lr(i, b) {
      if (typeof i.ref == "string" && ze.current && b && ze.current.stateNode !== b) {
        var w = $(ze.current.type);
        bt[w] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(ze.current.type), i.ref), bt[w] = !0);
      }
    }
    function ur(i, b) {
      {
        var w = function() {
          $t || ($t = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function dr(i, b) {
      {
        var w = function() {
          zt || (zt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var fr = function(i, b, w, T, W, q, B) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: b,
        ref: w,
        props: B,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function pr(i, b, w, T, W) {
      {
        var q, B = {}, I = null, oe = null;
        w !== void 0 && (Yt(w), I = "" + w), cr(b) && (Yt(b.key), I = "" + b.key), ir(b) && (oe = b.ref, lr(b, W));
        for (q in b)
          Qe.call(b, q) && !sr.hasOwnProperty(q) && (B[q] = b[q]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (q in ee)
            B[q] === void 0 && (B[q] = ee[q]);
        }
        if (I || oe) {
          var te = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          I && ur(B, te), oe && dr(B, te);
        }
        return fr(i, I, oe, W, T, ze.current, B);
      }
    }
    var vt = y.ReactCurrentOwner, Kt = y.ReactDebugCurrentFrame;
    function _e(i) {
      if (i) {
        var b = i._owner, w = Ze(i.type, i._source, b ? b.type : null);
        Kt.setExtraStackFrame(w);
      } else
        Kt.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function yt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Ht() {
      {
        if (vt.current) {
          var i = $(vt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function mr(i) {
      {
        if (i !== void 0) {
          var b = i.fileName.replace(/^.*[\\\/]/, ""), w = i.lineNumber;
          return `

Check your code at ` + b + ":" + w + ".";
        }
        return "";
      }
    }
    var qt = {};
    function hr(i) {
      {
        var b = Ht();
        if (!b) {
          var w = typeof i == "string" ? i : i.displayName || i.name;
          w && (b = `

Check the top-level render call using <` + w + ">.");
        }
        return b;
      }
    }
    function Gt(i, b) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var w = hr(b);
        if (qt[w])
          return;
        qt[w] = !0;
        var T = "";
        i && i._owner && i._owner !== vt.current && (T = " It was passed a child from " + $(i._owner.type) + "."), _e(i), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, T), _e(null);
      }
    }
    function Xt(i, b) {
      {
        if (typeof i != "object")
          return;
        if (ht(i))
          for (var w = 0; w < i.length; w++) {
            var T = i[w];
            yt(T) && Gt(T, b);
          }
        else if (yt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var W = k(i);
          if (typeof W == "function" && W !== i.entries)
            for (var q = W.call(i), B; !(B = q.next()).done; )
              yt(B.value) && Gt(B.value, b);
        }
      }
    }
    function br(i) {
      {
        var b = i.type;
        if (b == null || typeof b == "string")
          return;
        var w;
        if (typeof b == "function")
          w = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === f))
          w = b.propTypes;
        else
          return;
        if (w) {
          var T = $(b);
          nr(w, i.props, "prop", T, i);
        } else if (b.PropTypes !== void 0 && !gt) {
          gt = !0;
          var W = $(b);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(i) {
      {
        for (var b = Object.keys(i.props), w = 0; w < b.length; w++) {
          var T = b[w];
          if (T !== "children" && T !== "key") {
            _e(i), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), _e(null);
            break;
          }
        }
        i.ref !== null && (_e(i), v("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function gr(i, b, w, T, W, q) {
      {
        var B = X(i);
        if (!B) {
          var I = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = mr(W);
          oe ? I += oe : I += Ht();
          var ee;
          i === null ? ee = "null" : ht(i) ? ee = "array" : i !== void 0 && i.$$typeof === t ? (ee = "<" + ($(i.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, I);
        }
        var te = pr(i, b, w, W, q);
        if (te == null)
          return te;
        if (B) {
          var pe = b.children;
          if (pe !== void 0)
            if (T)
              if (ht(pe)) {
                for (var Me = 0; Me < pe.length; Me++)
                  Xt(pe[Me], i);
                Object.freeze && Object.freeze(pe);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(pe, i);
        }
        return i === r ? vr(te) : br(te), te;
      }
    }
    var yr = gr;
    nt.Fragment = r, nt.jsxDEV = yr;
  }()), nt;
}
process.env.NODE_ENV === "production" ? kt.exports = kr() : kt.exports = Tr();
var x = kt.exports;
const Ct = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e;
  return /* @__PURE__ */ x.jsxDEV(
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
}, Nn = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e;
  return /* @__PURE__ */ x.jsxDEV(
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
}, Ge = () => ({ omitKeys: (o, a) => Object.entries(a).reduce((s, [c, u]) => o.includes(c) ? { ...s } : { ...s, [c]: u }, {}), getObject: (o, a, s = null) => {
  let c = { ...o };
  try {
    a.split(".").forEach((u) => {
      if (!Object.keys(c).includes(u))
        throw new Error(`No property ${u} found in the object. Please define defaultValue.`);
      c = c[u];
    });
  } catch (u) {
    if (s)
      return s;
    throw u;
  }
  return c;
}, range: (o, a, s = 1) => {
  const c = [];
  for (let u = o; u <= a; u += s)
    c.push(u);
  return c;
}, zeroPad: (o, a = 2) => String(o).padStart(a, "0") }), he = () => {
  const { state: e, dispatch: t } = Er(Rn);
  return { setData: (r) => {
    t(r);
  }, state: e };
};
var se = {
  maxBSYear: 2100,
  minBSYear: 1970,
  outputSeparator: "-",
  bsMonthTotalDaysCount: [
    [30, 31],
    [31, 32],
    [31, 32],
    [31, 32],
    [31, 32],
    [30, 31],
    [29, 30],
    [29, 30],
    [29, 30],
    [29, 30],
    [29, 30],
    [30, 31]
  ],
  monthReferences: [
    [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
    [
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      3,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      1,
      2
    ],
    [
      0,
      1,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      1,
      2
    ],
    [
      1,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      2,
      2,
      1,
      3,
      1,
      2,
      2,
      2,
      1,
      2
    ],
    [59, 1, 26, 1, 28, 1, 2, 1, 12],
    [
      0,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      5,
      1,
      1,
      2,
      2,
      1,
      3,
      1,
      2,
      1,
      2
    ],
    [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
    [
      1,
      2,
      2,
      2,
      2,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      1,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      2,
      2,
      2,
      15,
      2,
      4
    ],
    [
      0,
      1,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      3,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      15,
      2,
      4
    ],
    [
      1,
      1,
      3,
      1,
      3,
      1,
      14,
      1,
      3,
      1,
      1,
      1,
      3,
      1,
      14,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      18,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      14,
      1,
      3,
      15,
      1,
      2,
      1,
      1
    ],
    [
      0,
      1,
      1,
      3,
      1,
      3,
      1,
      10,
      1,
      3,
      1,
      3,
      1,
      1,
      1,
      3,
      1,
      3,
      1,
      10,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      14,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      10,
      1,
      20,
      1,
      1,
      1
    ],
    [
      1,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      3,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      3,
      1,
      3,
      1,
      20,
      3
    ]
  ],
  referenceDate: {
    AD: "1913-03-13",
    BS: "1970-01-01"
  }
}, ke = (
  /** @class */
  function() {
    function e() {
    }
    return e.dateType = function(t) {
      if (!["BS", "AD"].includes(t))
        throw new TypeError("Invalid date type. Only 'AD' or 'BS' type supported.");
      return !0;
    }, e.adYear = function(t) {
      var n = se.minBSYear - 57, r = se.maxBSYear - 57;
      if (t < n || t > r)
        throw new RangeError("AD year should be in range of " + n + " to " + r);
    }, e.adMonth = function(t) {
      if (t < 1 || t > 12)
        throw new RangeError("AD month should be in range of 1 to 12");
    }, e.adDay = function(t) {
      if (t < 1 || t > 31)
        throw new RangeError("AD day should be in range of 1 to 31");
    }, e.bsYear = function(t) {
      var n = se.minBSYear, r = se.maxBSYear;
      if (t < n || t > r)
        throw new RangeError("BS year should be in range of " + n + " to " + r);
    }, e.bsMonth = function(t) {
      if (t < 1 || t > 12)
        throw new RangeError("BS month should be in range of 1 to 12");
    }, e.bsDay = function(t) {
      if (t < 1 || t > 32)
        throw new RangeError("BS day should be in range of 1 to 32");
    }, e;
  }()
), kn = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = "AD"), this.dateType = "AD", this.date = { year: 0, month: 0, day: 0 }, t ? this.setDate(t, n) : this.setDate(/* @__PURE__ */ new Date());
    }
    return e.prototype.setDate = function(t, n) {
      if (n === void 0 && (n = "AD"), ke.dateType(n), n === "BS") {
        if (typeof t != "string")
          throw new TypeError("BS date should be 'string' type.");
        return this.dateType = "BS", this.date = this.splitBsDate(t), this;
      }
      return this.dateType = "AD", this.date = this.splitAdDate(t), this;
    }, e.prototype.toAD = function() {
      if (this.dateType === "AD")
        return this.format(this.date);
      var t = this.totalDaysSince(), n = this.splitDate(se.referenceDate.AD), r = n.year, o = n.month, a = n.day, s = new Date(r, o, a - 1);
      return s.setDate(s.getDate() + t), this.format(this.splitAdDate(s));
    }, e.prototype.toBS = function() {
      if (this.dateType === "BS")
        return this.format(this.date);
      var t = this.date, n = t.year, r = t.month, o = t.day, a = n + 57, s = (r + 9) % 12 || 12, c = 1;
      if (r < 4)
        a -= 1;
      else if (r === 4) {
        var u = new e(this.format({ year: a, month: 1, day: 1 }), "BS").toAD();
        o < new Date(u).getDate() && (a -= 1);
      }
      var l = new Date(new e(this.format({ year: a, month: s, day: 1 }), "BS").toAD());
      if (o >= 1 && o < l.getDate()) {
        s = s !== 1 ? s - 1 : 12;
        var p = this.daysInBsMonth(a, s);
        c = p - (l.getDate() - o) + 1;
      } else
        c = o - l.getDate() + 1;
      return this.format({ year: a, month: s, day: c });
    }, e.prototype.totalDaysSince = function() {
      for (var t = this.date, n = t.year, r = t.month, o = t.day, a = 0, s = n - se.minBSYear, c = 1; c <= 12; c++)
        a += this.totalMonthDaysSince(c, c < r ? s + 1 : s);
      return n > 2085 && n < 2088 || n === 2085 && r > 5 ? a += o - 2 : n > 2088 || n === 2088 && r > 5 ? a += o - 4 : a += o, a;
    }, e.prototype.totalMonthDaysSince = function(t, n) {
      if (n === 0)
        return 0;
      var r = se.monthReferences[t - 1], o = r.slice(0).reduce(function(a, s, c, u) {
        if (s === 0)
          return a;
        var l = c % 2;
        return n > a.year + s ? (a.year += s, a.month += se.bsMonthTotalDaysCount[t - 1][l] * s) : (a.month += se.bsMonthTotalDaysCount[t - 1][l] * (n - a.year), a.year = n - a.year, u.splice(1)), a;
      }, { month: 0, year: 0 });
      return o.month;
    }, e.prototype.daysInBsMonth = function(t, n) {
      for (var r = t + 1 - se.minBSYear, o = se.monthReferences[n - 1], a = 0, s = 0; s < o.length; s++)
        if (o[s] !== 0) {
          var c = s % 2;
          if (a += o[s], r <= a)
            return t === 2085 && n === 5 || t === 2088 && n === 5 ? se.bsMonthTotalDaysCount[n - 1][c] - 2 : se.bsMonthTotalDaysCount[n - 1][c];
        }
      return 0;
    }, e.prototype.splitDate = function(t) {
      var n = t.replace(/\//g, "-").split("-").map(function(s) {
        return Math.floor(Number(s));
      }), r = n[0], o = n[1], a = n[2];
      return { year: r, month: o, day: a };
    }, e.prototype.splitAdDate = function(t) {
      typeof t == "string" && (t = new Date(t));
      var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate();
      return ke.adYear(n), ke.adMonth(r), ke.adDay(o), { year: n, month: r, day: o };
    }, e.prototype.splitBsDate = function(t) {
      var n = this.splitDate(t), r = n.year, o = n.month, a = n.day;
      return ke.bsYear(r), ke.bsMonth(o), ke.bsDay(a), { year: r, month: o, day: a };
    }, e.prototype.format = function(t) {
      var n = se.outputSeparator, r = t.year, o = t.month, a = t.day;
      return "" + r + n + this.zeroPad(o) + n + this.zeroPad(a);
    }, e.prototype.zeroPad = function(t) {
      return t > 9 ? "" + t : "0" + t;
    }, e;
  }()
), en = function(e) {
  return new kn().setDate(e, "BS").toAD();
}, Pe = function(e) {
  return new kn().setDate(e, "AD").toBS();
}, it = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(it || {}), We = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(We || {}), Tt = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(Tt || {}), re = /* @__PURE__ */ ((e) => (e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(re || {});
const Sr = () => {
  const { state: e } = he(), t = (l, p) => {
    const f = p || e.options.dateSeparator, m = `^[0-9]{4}${f}(0?[1-9]|1[0-2])${f}(0?[1-9]|[1-2][0-9]|3[0-2])$`, d = new RegExp(m);
    if (!l.match(d))
      throw new TypeError(`${l} is invalid date format.`);
  }, n = (l) => {
    const p = e.calendarData.minBsYear, f = e.calendarData.maxBsYear;
    if (l < p || l > f)
      throw new RangeError(`Date between ${p} BS to ${f} BS is only supported.`);
  }, r = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("BS month should be in range of 1 to 12");
  }, o = (l) => {
    if (l < 1 || l > 32)
      throw new RangeError("BS day should be in range of 1 to 32");
  }, a = (l) => {
    const p = e.calendarData.minBsYear, f = e.calendarData.maxBsYear, m = p - 57, d = f - 57;
    if (l < m || l > d)
      throw new RangeError(`Date between ${m} AD (${p} BS) to ${d} AD (${f} BS) is only supported.`);
  }, s = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("AD month should be in range of 1 to 12");
  }, c = (l) => {
    if (l < 1 || l > 31)
      throw new RangeError("AD day should be in range of 1 to 31");
  };
  return {
    validateInputDate: t,
    validateDateObject: (l, p = Tt.BS) => {
      const { year: f, month: m, day: d } = l;
      if (p === Tt.BS) {
        n(f), r(m), o(d);
        return;
      }
      a(f), s(m), c(d);
    },
    validateBsYear: n,
    validateAdYear: a,
    validateBsMonth: r,
    validateAdMonth: s,
    validateBsDay: o,
    validateAdDay: c
  };
}, $e = () => {
  const e = Sr(), t = Ge(), { state: n } = he(), r = (c, u) => {
    e.validateInputDate(c, u);
    const [l, p, f] = c.split(u || n.options.dateSeparator);
    return {
      year: parseInt(l),
      month: parseInt(p),
      day: parseInt(f)
    };
  }, o = (c, u) => {
    const l = u || n.options.dateSeparator;
    return `${c.year}${l}${t.zeroPad(c.month)}${l}${t.zeroPad(c.day)}`;
  }, a = (c, u) => {
    e.validateBsYear(c), e.validateBsMonth(u);
    let l = 0;
    const p = c + 1 - n.calendarData.minBsYear;
    return n.calendarData.bsMonthCalculatedData[u - 1].reduce((m, d, h) => {
      if (d === 0 || m !== 0)
        return m;
      const D = h % 2;
      return l += d, p > l ? m : c === 2085 && u === 5 || c === 2088 && u === 5 ? n.calendarData.bsMonthMaxDays[u - 1][D] - 2 : n.calendarData.bsMonthMaxDays[u - 1][D];
    }, 0);
  };
  return {
    splitDate: r,
    stitchDate: o,
    parseBsDate: (c, u) => {
      const { year: l, month: p, day: f } = r(c, u);
      e.validateDateObject({ year: l, month: p, day: f });
      const m = o({ year: l, month: p, day: 1 }), d = en(m), h = new Date(d), D = a(l, p), k = new Date(en(c));
      return {
        bsDay: f,
        bsMonth: p,
        bsYear: l,
        weekDay: k.getDay(),
        adDate: k,
        firstAdDayInBsMonth: h,
        numberOfDaysInBsMonth: D
      };
    },
    getNumberOfDaysInBSMonth: a
  };
};
var Tn = (
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
        var o = n.digitMapping.findIndex(function(a) {
          return a === r;
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
), Rr = function(e) {
  return new Tn().setNumber(e).toNepali();
}, jr = function(e) {
  return new Tn().setNumber(e).toEnglish();
};
const ge = () => {
  const { state: e } = he(), { getObject: t } = Ge();
  return {
    trans: (n, r) => t(Qr[r || e.options.currentLocale], n, n),
    numberTrans: (n, r) => We.ENGLISH === `${r || e.options.currentLocale}` ? jr(n) : Rr(n)
  };
}, Cr = () => {
  const { trans: e } = ge();
  return /* @__PURE__ */ x.jsxDEV(Ct, { className: "ndp-font-medium ndp-border hover:ndp-text-red-500", title: e("labels.clear"), children: [
    /* @__PURE__ */ x.jsxDEV(zr, { className: "ndp-w-4 ndp-h-4" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Pr = () => {
  const { numberTrans: e } = ge(), { range: t } = Ge(), { state: n } = he(), r = $e(), o = ie(() => n.date.calendar || r.parseBsDate(Pe(/* @__PURE__ */ new Date())), [n.date.calendar]), a = ie(() => n.date.selected, [n.date.selected]), s = ie(() => Math.ceil((o.firstAdDayInBsMonth.getDay() + o.numberOfDaysInBsMonth) / 7) - 1, [o]), c = ie(() => o.bsMonth - 1 === 0 ? 12 : o.bsMonth - 1, [o]), u = ie(() => c === 12 ? o.bsYear - 1 : o.bsYear, [c, o]), l = ie(() => u >= n.calendarData.minBsYear ? r.getNumberOfDaysInBSMonth(u, c) : 30, [u, c]), p = Ee((m, d) => {
    let h = m * 7 + d - o.firstAdDayInBsMonth.getDay();
    const D = o.bsMonth, k = o.bsYear;
    let y = !0;
    h <= 0 ? (h = l + h, y = !1) : h > o.numberOfDaysInBsMonth && (h -= o.numberOfDaysInBsMonth, y = !1);
    const v = r.splitDate(Pe(/* @__PURE__ */ new Date())), C = y ? v.day === h && v.month === D && v.year === k : !1, S = y ? (a == null ? void 0 : a.bsDay) === h && (a == null ? void 0 : a.bsMonth) === D && (a == null ? void 0 : a.bsYear) === k : !1;
    return { day: h, month: D, year: k, isCurrentMonth: y, isToday: C, isSelected: S };
  }, [o, a, l]), f = Ee((m) => {
    if (!m.isCurrentMonth)
      return;
    const d = r.stitchDate({
      year: m.year,
      month: m.month,
      day: m.day
    });
    n.events.onSelect(d), n.events.onChange(d);
  }, [o]);
  return /* @__PURE__ */ x.jsxDEV("tbody", { children: t(0, s).map((m) => /* @__PURE__ */ x.jsxDEV("tr", { className: "ndp-border-0", children: t(1, 7).map((d) => {
    const h = p(m, d);
    return /* @__PURE__ */ x.jsxDEV(
      "td",
      {
        className: "ndp-border-0",
        title: e(h.day),
        children: /* @__PURE__ */ x.jsxDEV(
          "button",
          {
            className: `
                  ndp-rounded-full ndp-h-9 ndp-w-9
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${h.isSelected ? `
                    ndp-bg-primary ndp-text-secondary
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}

                  ${!h.isCurrentMonth && `
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `}
                `,
            onClick: () => f(h),
            onKeyDown: () => f(h),
            children: [
              e(h.day),
              h.isToday && /* @__PURE__ */ x.jsxDEV("div", { className: `
                      ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    ` }, void 0, !1, {
                fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, globalThis)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
            lineNumber: 99,
            columnNumber: 17
          },
          globalThis
        )
      },
      d,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
        lineNumber: 96,
        columnNumber: 15
      },
      globalThis
    );
  }) }, m, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, globalThis);
}, Sn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const [s, c] = En(!1), u = ie(() => e.find((f) => f.value === n), [n]), l = Ee(() => {
    c((f) => !f);
  }, []), p = Ee((f) => {
    c(!1), t(f.value);
  }, [t]);
  return /* @__PURE__ */ x.jsxDEV("div", { className: "ndp-relative", children: [
    /* @__PURE__ */ x.jsxDEV(
      Ct,
      {
        onClick: l,
        onKeyDown: l,
        className: o,
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
    s && /* @__PURE__ */ x.jsxDEV("ul", { className: `
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
          ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          ${a || ""}
        `, children: e.map((f) => /* @__PURE__ */ x.jsxDEV(
      "li",
      {
        onClick: () => p(f),
        onKeyDown: () => p(f),
        role: "button",
        className: `
                  ndp-px-3 ndp-py-1.5 ndp-text-sm hover-transition
                  ${f.value === n ? `
                    ndp-bg-primary ndp-text-secondary
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                `,
        children: f.label
      },
      f.value,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 54,
        columnNumber: 13
      },
      globalThis
    )) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, globalThis);
}, Ar = [
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
], Or = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], _r = () => {
  var c;
  const { trans: e } = ge(), { state: t, setData: n } = he(), r = $e(), o = ie(() => t.date.calendar || r.parseBsDate(Pe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ie(() => Ar.map((u, l) => ({
    label: e(`months.${u}`),
    value: l
  })), [t.options.currentLocale]), s = Ee((u) => {
    const l = r.stitchDate({
      year: o.bsYear,
      month: u + 1,
      day: 1
    });
    n({ type: re.SET_CALENDAR_DATE, date: r.parseBsDate(l) });
  }, [o]);
  return /* @__PURE__ */ x.jsxDEV(
    Sn,
    {
      options: a,
      value: (((c = t.date.calendar) == null ? void 0 : c.bsMonth) || 1) - 1,
      onSelect: s,
      className: "ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center",
      dropdownClass: "ndp-rounded-r-sm ndp-rounded-bl-sm",
      title: e("labels.select-month")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/month-picker.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    globalThis
  );
}, Mr = () => {
  const { trans: e } = ge(), { state: t, setData: n } = he(), r = $e(), o = ie(() => t.date.calendar || r.parseBsDate(Pe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = Ee(() => {
    let s = o.bsYear, c = o.bsMonth + 1;
    if (c > 12 && (c = 1, s++), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: re.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ x.jsxDEV(
    Nn,
    {
      title: e("labels.next"),
      onClick: () => a(),
      onKeyDown: () => a(),
      children: /* @__PURE__ */ x.jsxDEV(Hr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    globalThis
  );
}, Ir = () => {
  const { trans: e } = ge(), { state: t, setData: n } = he(), r = $e(), o = ie(() => t.date.calendar || r.parseBsDate(Pe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = Ee(() => {
    let s = o.bsYear, c = o.bsMonth - 1;
    if (c === 0 && (c = 12, s--), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: re.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ x.jsxDEV(
    Nn,
    {
      title: e("labels.previous"),
      onClick: () => a(),
      onKeyDown: () => a(),
      children: /* @__PURE__ */ x.jsxDEV(Kr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    globalThis
  );
}, Lr = () => {
  const { trans: e, numberTrans: t } = ge();
  return /* @__PURE__ */ x.jsxDEV(Ct, { className: "ndp-font-medium ndp-border hover:ndp-text-primary ndp-group", title: e("labels.today"), children: [
    /* @__PURE__ */ x.jsxDEV(qr, { date: t(20) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.today") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Br = () => {
  const { trans: e } = ge(), { state: t } = he(), n = ie(() => Or.map((r, o) => ({
    label: e(`weeks.${r}`),
    value: o
  })), [t.options.currentLocale]);
  return /* @__PURE__ */ x.jsxDEV("thead", { children: /* @__PURE__ */ x.jsxDEV("tr", { className: "ndp-border-0", children: n.map((r) => /* @__PURE__ */ x.jsxDEV(
    "td",
    {
      className: "ndp-border-0 ndp-h-10 ndp-w-10",
      title: r.label,
      children: r.label
    },
    r.value,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
      lineNumber: 22,
      columnNumber: 11
    },
    globalThis
  )) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, globalThis);
}, Vr = () => {
  var l;
  const { state: e, setData: t } = he(), { numberTrans: n, trans: r } = ge(), { range: o } = Ge(), a = $e(), s = ie(() => e.date.calendar || a.parseBsDate(Pe(/* @__PURE__ */ new Date())), [e.date.calendar]), c = ie(() => o(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((p) => ({
    label: n(p),
    value: p
  })), [e.options.currentLocale]), u = Ee((p) => {
    const f = a.stitchDate({
      year: p,
      month: s.bsMonth,
      day: 1
    });
    t({ type: re.SET_CALENDAR_DATE, date: a.parseBsDate(f) });
  }, [s]);
  return /* @__PURE__ */ x.jsxDEV(
    Sn,
    {
      options: c,
      value: ((l = e.date.calendar) == null ? void 0 : l.bsYear) || 0,
      onSelect: u,
      className: "ndp-border-y ndp-border-l ndp-rounded-l-sm",
      dropdownClass: "ndp-rounded-l-sm ndp-rounded-br-sm",
      title: r("labels.select-year")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/year-picker.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    globalThis
  );
}, Fr = () => /* @__PURE__ */ x.jsxDEV("div", { className: `
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
  /* @__PURE__ */ x.jsxDEV("div", { className: "ndp-flex ndp-items-center ndp-justify-between", children: [
    /* @__PURE__ */ x.jsxDEV(Ir, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV("div", { className: "ndp-flex", children: [
      /* @__PURE__ */ x.jsxDEV(Vr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, globalThis),
      /* @__PURE__ */ x.jsxDEV(_r, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV(Mr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ x.jsxDEV("table", { className: "ndp-text-center ndp-w-full ndp-border-0", children: [
    /* @__PURE__ */ x.jsxDEV(Br, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV(Pr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ x.jsxDEV("div", { className: "ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2", children: [
    /* @__PURE__ */ x.jsxDEV(Lr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ x.jsxDEV(Cr, {}, void 0, !1, {
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
}, globalThis), Wr = [
  [30, 31],
  [31, 32],
  [31, 32],
  [31, 32],
  [31, 32],
  [30, 31],
  [29, 30],
  [29, 30],
  [29, 30],
  [29, 30],
  [29, 30],
  [30, 31]
], Ur = [
  [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
  [1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2],
  [0, 1, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2],
  [1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 2, 1, 3, 1, 2, 2, 2, 1, 2],
  [59, 1, 26, 1, 28, 1, 2, 1, 12],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 1, 2, 2, 1, 3, 1, 2, 1, 2],
  [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 15, 2, 4],
  [0, 1, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 3, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 2, 2, 2, 15, 2, 4],
  [1, 1, 3, 1, 3, 1, 14, 1, 3, 1, 1, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 15, 1, 2, 1, 1],
  [0, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 1, 1, 3, 1, 3, 1, 10, 1, 3, 1, 3, 1, 3, 1, 3, 1, 14, 1, 3, 1, 3, 1, 3, 1, 3, 1, 10, 1, 20, 1, 1, 1],
  [1, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1, 3, 1, 20, 3]
], Pt = {
  classNames: {
    wrapper: "",
    input: ""
  },
  theme: it.LIGHT,
  value: "",
  events: {
    onChange: (e) => e,
    onSelect: (e) => e
  },
  locale: {
    calendar: We.NEPALI,
    value: We.NEPALI
  },
  options: {
    colors: {
      primary: "#2096f5",
      secondary: "#fff"
    },
    dateSeparator: "-",
    currentLocale: We.NEPALI,
    valueLocale: We.ENGLISH
  },
  calendarData: {
    minBsYear: 1970,
    maxBsYear: 2099,
    bsMonthMaxDays: Wr,
    bsMonthCalculatedData: Ur
  },
  date: {
    calendar: void 0,
    selected: void 0
  }
}, Yr = (e = Pt, t) => t.type === re.SET_VALUE ? { ...e, value: t.value } : t.type === re.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === re.SET_THEME ? { ...e, theme: t.theme } : t.type === re.SET_EVENTS ? { ...e, events: t.events } : t.type === re.SET_OPTIONS ? { ...e, options: t.options } : t.type === re.SET_CALENDAR_DATE ? { ...e, date: { ...e.date, calendar: t.date } } : t.type === re.SET_SELECTED_DATE ? { ...e, date: { ...e.date, selected: t.date } } : e, Rn = Dr({
  state: Pt,
  dispatch: () => null
}), $r = ({ children: e }) => {
  const [t, n] = xr(Yr, Pt);
  return /* @__PURE__ */ x.jsxDEV(Rn.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, zr = ({ className: e }) => /* @__PURE__ */ x.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ x.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
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
), Kr = ({ className: e }) => /* @__PURE__ */ x.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ x.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }, void 0, !1, {
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
), Hr = ({ className: e }) => /* @__PURE__ */ x.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ x.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }, void 0, !1, {
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
), qr = ({ date: e, className: t }) => /* @__PURE__ */ x.jsxDEV("span", { className: `
      ndp-border ndp-border-gray-200 dark:ndp-border-slate-700
      ndp-px-1 ndp-py-0.5 ndp-text-xs
      ndp-text-gray-400 ndp-inset-2 ndp-rounded-full
      group-hover:ndp-text-primary group-hover:ndp-border-primary group-hover:ndp-opacity-50
      ${t || ""}
    `, children: e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/today-icon.tsx",
  lineNumber: 11,
  columnNumber: 5
}, globalThis), Gr = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options"
], Xr = (e) => {
  const { state: t } = he(), { numberTrans: n } = ge(), { omitKeys: r } = Ge(), o = r([...Gr, "type", "readOnly"], e);
  return /* @__PURE__ */ x.jsxDEV(
    "input",
    {
      type: "text",
      className: t.classNames.input || `
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
      value: n(t.value),
      ...o
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/input/date-input.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    globalThis
  );
}, Jr = {
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
}, Zr = {
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
}, Qr = {
  en: Jr,
  ne: Zr
};
function De(e) {
  return jn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (jn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jn(e) {
  return e instanceof Node || e instanceof ue(e).Node;
}
function ne(e) {
  return e instanceof Element || e instanceof ue(e).Element;
}
function ae(e) {
  return e instanceof HTMLElement || e instanceof ue(e).HTMLElement;
}
function St(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function Xe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = de(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eo(e) {
  return ["table", "td", "th"].includes(De(e));
}
function At(e) {
  const t = Ot(), n = de(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function to(e) {
  let t = Ae(e);
  for (; ae(t) && !Je(t); ) {
    if (At(t))
      return t;
    t = Ae(t);
  }
  return null;
}
function Ot() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Je(e) {
  return ["html", "body", "#document"].includes(De(e));
}
function de(e) {
  return ue(e).getComputedStyle(e);
}
function pt(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ae(e) {
  if (De(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    St(e) && e.host || // Fallback.
    ye(e)
  );
  return St(t) ? t.host : t;
}
function Cn(e) {
  const t = Ae(e);
  return Je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Xe(t) ? t : Cn(t);
}
function we(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Cn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ue(o);
  return a ? t.concat(s, s.visualViewport || [], Xe(o) ? o : [], s.frameElement && n ? we(s.frameElement) : []) : t.concat(o, we(o, [], n));
}
function Be(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function le(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && St(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function no() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function ro() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function oo(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Pn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ao(e) {
  return !Pn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function so() {
  return /apple/i.test(navigator.vendor);
}
function Pn() {
  const e = /android/i;
  return e.test(no()) || e.test(ro());
}
function tn(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function io(e) {
  return "nativeEvent" in e;
}
function co(e) {
  return e.matches("html,body");
}
function be(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function wt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Ve(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const lo = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function An(e) {
  return ae(e) && e.matches(lo);
}
function Et(e) {
  e.preventDefault(), e.stopPropagation();
}
const Ye = Math.min, Ce = Math.max, ct = Math.round, rt = Math.floor, xe = (e) => ({
  x: e,
  y: e
});
function uo(e, t, n) {
  return Ce(e, Ye(t, n));
}
function On(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _t(e) {
  return e.split("-")[0];
}
function Mt(e) {
  return e.split("-")[1];
}
function fo(e) {
  return e === "x" ? "y" : "x";
}
function _n(e) {
  return e === "y" ? "height" : "width";
}
function It(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function Mn(e) {
  return fo(It(e));
}
function po(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mo(e) {
  return typeof e != "number" ? po(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function nn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = It(t), s = Mn(t), c = _n(s), u = _t(t), l = a === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[c] / 2 - o[c] / 2;
  let d;
  switch (u) {
    case "top":
      d = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mt(t)) {
    case "start":
      d[s] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && l ? -1 : 1);
      break;
  }
  return d;
}
const ho = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: f
  } = nn(l, r, u), m = r, d = {}, h = 0;
  for (let D = 0; D < c.length; D++) {
    const {
      name: k,
      fn: y
    } = c[D], {
      x: v,
      y: C,
      data: S,
      reset: N
    } = await y({
      x: p,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (p = v ?? p, f = C ?? f, d = {
      ...d,
      [k]: {
        ...d[k],
        ...S
      }
    }, N && h <= 50) {
      h++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (l = N.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : N.rects), {
        x: p,
        y: f
      } = nn(l, m, u)), D = -1;
      continue;
    }
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: d
  };
}, rn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: c,
      middlewareData: u
    } = t, {
      element: l,
      padding: p = 0
    } = On(e, t) || {};
    if (l == null)
      return {};
    const f = mo(p), m = {
      x: n,
      y: r
    }, d = Mn(o), h = _n(d), D = await s.getDimensions(l), k = d === "y", y = k ? "top" : "left", v = k ? "bottom" : "right", C = k ? "clientHeight" : "clientWidth", S = a.reference[h] + a.reference[d] - m[d] - a.floating[h], N = m[d] - a.reference[d], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let E = A ? A[C] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(A))) && (E = c.floating[C] || a.floating[h]);
    const K = S / 2 - N / 2, G = E / 2 - D[h] / 2 - 1, X = Ye(f[y], G), R = Ye(f[v], G), Z = X, $ = E - D[h] - R, _ = E / 2 - D[h] / 2 + K, J = uo(Z, _, $), U = !u.arrow && Mt(o) != null && _ != J && a.reference[h] / 2 - (_ < Z ? X : R) - D[h] / 2 < 0, j = U ? _ < Z ? _ - Z : _ - $ : 0;
    return {
      [d]: m[d] + j,
      data: {
        [d]: J,
        centerOffset: _ - J - j,
        ...U && {
          alignmentOffset: j
        }
      },
      reset: U
    };
  }
});
async function bo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = _t(n), c = Mt(n), u = It(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, p = a && u ? -1 : 1, f = On(t, e);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return c && typeof h == "number" && (d = c === "end" ? h * -1 : h), u ? {
    x: d * p,
    y: m * l
  } : {
    x: m * l,
    y: d * p
  };
}
const vo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await bo(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
};
function Ln(e) {
  const t = de(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ae(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = ct(n) !== a || ct(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Lt(e) {
  return ne(e) ? e : e.contextElement;
}
function Ue(e) {
  const t = Lt(e);
  if (!ae(t))
    return xe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ln(t);
  let s = (a ? ct(n.width) : n.width) / r, c = (a ? ct(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const go = /* @__PURE__ */ xe(0);
function Bn(e) {
  const t = ue(e);
  return !Ot() || !t.visualViewport ? go : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Oe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Lt(e);
  let s = xe(1);
  t && (r ? ne(r) && (s = Ue(r)) : s = Ue(e));
  const c = yo(a, n, r) ? Bn(a) : xe(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, p = o.width / s.x, f = o.height / s.y;
  if (a) {
    const m = ue(a), d = r && ne(r) ? ue(r) : r;
    let h = m.frameElement;
    for (; h && r && d !== m; ) {
      const D = Ue(h), k = h.getBoundingClientRect(), y = de(h), v = k.left + (h.clientLeft + parseFloat(y.paddingLeft)) * D.x, C = k.top + (h.clientTop + parseFloat(y.paddingTop)) * D.y;
      u *= D.x, l *= D.y, p *= D.x, f *= D.y, u += v, l += C, h = ue(h).frameElement;
    }
  }
  return In({
    width: p,
    height: f,
    x: u,
    y: l
  });
}
function wo(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ae(n), a = ye(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = xe(1);
  const u = xe(0);
  if ((o || !o && r !== "fixed") && ((De(n) !== "body" || Xe(a)) && (s = pt(n)), ae(n))) {
    const l = Oe(n);
    c = Ue(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + u.x,
    y: t.y * c.y - s.scrollTop * c.y + u.y
  };
}
function Eo(e) {
  return Array.from(e.getClientRects());
}
function Vn(e) {
  return Oe(ye(e)).left + pt(e).scrollLeft;
}
function Do(e) {
  const t = ye(e), n = pt(e), r = e.ownerDocument.body, o = Ce(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ce(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vn(e);
  const c = -n.scrollTop;
  return de(r).direction === "rtl" && (s += Ce(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function xo(e, t) {
  const n = ue(e), r = ye(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Ot();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function No(e, t) {
  const n = Oe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ae(e) ? Ue(e) : xe(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function on(e, t, n) {
  let r;
  if (t === "viewport")
    r = xo(e, n);
  else if (t === "document")
    r = Do(ye(e));
  else if (ne(t))
    r = No(t, n);
  else {
    const o = Bn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return In(r);
}
function Fn(e, t) {
  const n = Ae(e);
  return n === t || !ne(n) || Je(n) ? !1 : de(n).position === "fixed" || Fn(n, t);
}
function ko(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = we(e, [], !1).filter((c) => ne(c) && De(c) !== "body"), o = null;
  const a = de(e).position === "fixed";
  let s = a ? Ae(e) : e;
  for (; ne(s) && !Je(s); ) {
    const c = de(s), u = At(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Xe(s) && !u && Fn(e, s)) ? r = r.filter((p) => p !== s) : o = c, s = Ae(s);
  }
  return t.set(e, r), r;
}
function To(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ko(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((l, p) => {
    const f = on(t, p, o);
    return l.top = Ce(f.top, l.top), l.right = Ye(f.right, l.right), l.bottom = Ye(f.bottom, l.bottom), l.left = Ce(f.left, l.left), l;
  }, on(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function So(e) {
  return Ln(e);
}
function Ro(e, t, n) {
  const r = ae(t), o = ye(t), a = n === "fixed", s = Oe(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = xe(0);
  if (r || !r && !a)
    if ((De(t) !== "body" || Xe(o)) && (c = pt(t)), r) {
      const l = Oe(t, !0, a, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      o && (u.x = Vn(o));
  return {
    x: s.left + c.scrollLeft - u.x,
    y: s.top + c.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function an(e, t) {
  return !ae(e) || de(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wn(e, t) {
  const n = ue(e);
  if (!ae(e))
    return n;
  let r = an(e, t);
  for (; r && eo(r) && de(r).position === "static"; )
    r = an(r, t);
  return r && (De(r) === "html" || De(r) === "body" && de(r).position === "static" && !At(r)) ? n : r || to(e) || n;
}
const jo = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Wn, a = this.getDimensions;
  return {
    reference: Ro(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Co(e) {
  return de(e).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wo,
  getDocumentElement: ye,
  getClippingRect: To,
  getOffsetParent: Wn,
  getElementRects: jo,
  getClientRects: Eo,
  getDimensions: So,
  getScale: Ue,
  isElement: ne,
  isRTL: Co
};
function Po(e, t) {
  let n = null, r;
  const o = ye(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const {
      left: l,
      top: p,
      width: f,
      height: m
    } = e.getBoundingClientRect();
    if (c || t(), !f || !m)
      return;
    const d = rt(p), h = rt(o.clientWidth - (l + f)), D = rt(o.clientHeight - (p + m)), k = rt(l), v = {
      rootMargin: -d + "px " + -h + "px " + -D + "px " + -k + "px",
      threshold: Ce(0, Ye(1, u)) || 1
    };
    let C = !0;
    function S(N) {
      const A = N[0].intersectionRatio;
      if (A !== u) {
        if (!C)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, v);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Ao(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Lt(e), p = o || a ? [...l ? we(l) : [], ...we(t)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const f = l && c ? Po(l, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === l && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      d && d.observe(t);
    })), n();
  }), l && !u && d.observe(l), d.observe(t));
  let h, D = u ? Oe(e) : null;
  u && k();
  function k() {
    const y = Oe(e);
    D && (y.x !== D.x || y.y !== D.y || y.width !== D.width || y.height !== D.height) && n(), D = y, h = requestAnimationFrame(k);
  }
  return n(), () => {
    p.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f && f(), d && d.disconnect(), d = null, u && cancelAnimationFrame(h);
  };
}
const Oo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Un,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ho(e, t, {
    ...o,
    platform: a
  });
}, _o = (e) => {
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
      return r && t(r) ? r.current != null ? rn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? rn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var st = typeof document < "u" ? Dn : Re;
function lt(e, t) {
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
        if (!lt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !lt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Yn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sn(e, t) {
  const n = Yn(e);
  return Math.round(t * n) / n;
}
function cn(e) {
  const t = g.useRef(e);
  return st(() => {
    t.current = e;
  }), t;
}
function Mo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: l
  } = e, [p, f] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = g.useState(r);
  lt(m, r) || d(r);
  const [h, D] = g.useState(null), [k, y] = g.useState(null), v = g.useCallback((U) => {
    U != A.current && (A.current = U, D(U));
  }, [D]), C = g.useCallback((U) => {
    U !== E.current && (E.current = U, y(U));
  }, [y]), S = a || h, N = s || k, A = g.useRef(null), E = g.useRef(null), K = g.useRef(p), G = cn(u), X = cn(o), R = g.useCallback(() => {
    if (!A.current || !E.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: m
    };
    X.current && (U.platform = X.current), Oo(A.current, E.current, U).then((j) => {
      const V = {
        ...j,
        isPositioned: !0
      };
      Z.current && !lt(K.current, V) && (K.current = V, Nr.flushSync(() => {
        f(V);
      }));
    });
  }, [m, t, n, X]);
  st(() => {
    l === !1 && K.current.isPositioned && (K.current.isPositioned = !1, f((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [l]);
  const Z = g.useRef(!1);
  st(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), st(() => {
    if (S && (A.current = S), N && (E.current = N), S && N) {
      if (G.current)
        return G.current(S, N, R);
      R();
    }
  }, [S, N, R, G]);
  const $ = g.useMemo(() => ({
    reference: A,
    floating: E,
    setReference: v,
    setFloating: C
  }), [v, C]), _ = g.useMemo(() => ({
    reference: S,
    floating: N
  }), [S, N]), J = g.useMemo(() => {
    const U = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return U;
    const j = sn(_.floating, p.x), V = sn(_.floating, p.y);
    return c ? {
      ...U,
      transform: "translate(" + j + "px, " + V + "px)",
      ...Yn(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: V
    };
  }, [n, c, _.floating, p.x, p.y]);
  return g.useMemo(() => ({
    ...p,
    update: R,
    refs: $,
    elements: _,
    floatingStyles: J
  }), [p, R, $, _, J]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Io = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Rt = /* @__PURE__ */ Io.join(","), $n = typeof Element > "u", He = $n ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ut = !$n && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, dt = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Lo = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Bo = function(t, n, r) {
  if (dt(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Rt));
  return n && He.call(t, Rt) && o.unshift(t), o = o.filter(r), o;
}, Vo = function e(t, n, r) {
  for (var o = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!dt(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, l = e(u, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var p = He.call(s, Rt);
        p && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), m = !dt(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (f && m) {
          var d = e(f === !0 ? s.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: s,
            candidates: d
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return o;
}, zn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Kn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Lo(t)) && !zn(t) ? 0 : t.tabIndex;
}, Fo = function(t, n) {
  var r = Kn(t);
  return r < 0 && n && !zn(t) ? 0 : r;
}, Wo = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Hn = function(t) {
  return t.tagName === "INPUT";
}, Uo = function(t) {
  return Hn(t) && t.type === "hidden";
}, Yo = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, $o = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, zo = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ut(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var a = $o(o, t.form);
  return !a || a === t;
}, Ko = function(t) {
  return Hn(t) && t.type === "radio";
}, Ho = function(t) {
  return Ko(t) && !zo(t);
}, qo = function(t) {
  var n, r = t && ut(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (r && r !== t) {
    var s, c, u;
    for (a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !a && o; ) {
      var l, p, f;
      r = ut(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((p = o) !== null && p !== void 0 && (f = p.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return a;
}, ln = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Go = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = He.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (He.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = ut(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return ln(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (qo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ln(t);
  return !1;
}, Xo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return He.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Jo = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  dt(n) || Uo(n) || Go(n, t) || // For a details element with a summary, the summary element gets the focus
  Yo(n) || Xo(n));
}, un = function(t, n) {
  return !(Ho(n) || Kn(n) < 0 || !Jo(t, n));
}, Zo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Qo = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, a) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = Fo(c, s), l = s ? e(o.candidates) : c;
    u === 0 ? s ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: a,
      tabIndex: u,
      item: o,
      isScope: s,
      content: l
    });
  }), r.sort(Wo).reduce(function(o, a) {
    return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o;
  }, []).concat(n);
}, qn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Vo([t], n.includeContainer, {
    filter: un.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zo
  }) : r = Bo(t, n.includeContainer, un.bind(null, n)), Qo(r);
};
const ea = g[/* @__PURE__ */ "useInsertionEffect".toString()], ta = ea || ((e) => e());
function Fe(e) {
  const t = g.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ta(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
let dn = 0;
function Te(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(dn);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? a() : dn = requestAnimationFrame(a);
}
var me = typeof document < "u" ? Dn : Re;
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qe.apply(this, arguments);
}
let Dt = !1, na = 0;
const fn = () => "floating-ui-" + na++;
function ra() {
  const [e, t] = g.useState(() => Dt ? fn() : void 0);
  return me(() => {
    e == null && t(fn());
  }, []), g.useEffect(() => {
    Dt || (Dt = !0);
  }, []), e;
}
const oa = g[/* @__PURE__ */ "useId".toString()], mt = oa || ra, aa = /* @__PURE__ */ g.forwardRef(function(t, n) {
  let {
    context: {
      placement: r,
      elements: {
        floating: o
      },
      middlewareData: {
        arrow: a
      }
    },
    width: s = 14,
    height: c = 7,
    tipRadius: u = 0,
    strokeWidth: l = 0,
    staticOffset: p,
    stroke: f,
    d: m,
    style: {
      transform: d,
      ...h
    } = {},
    ...D
  } = t;
  process.env.NODE_ENV !== "production" && (n || console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component."));
  const k = mt();
  if (!o)
    return null;
  l *= 2;
  const y = l / 2, v = s / 2 * (u / -8 + 1), C = c / 2 * u / 4, [S, N] = r.split("-"), A = Un.isRTL(o), E = !!m, K = S === "top" || S === "bottom", G = p && N === "end" ? "bottom" : "top";
  let X = p && N === "end" ? "right" : "left";
  p && A && (X = N === "end" ? "left" : "right");
  const R = (a == null ? void 0 : a.x) != null ? p || a.x : "", Z = (a == null ? void 0 : a.y) != null ? p || a.y : "", $ = m || "M0,0" + (" H" + s) + (" L" + (s - v) + "," + (c - C)) + (" Q" + s / 2 + "," + c + " " + v + "," + (c - C)) + " Z", _ = {
    top: E ? "rotate(180deg)" : "",
    left: E ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: E ? "" : "rotate(180deg)",
    right: E ? "rotate(-90deg)" : "rotate(90deg)"
  }[S];
  return /* @__PURE__ */ g.createElement("svg", qe({}, D, {
    "aria-hidden": !0,
    ref: n,
    width: E ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [X]: R,
      [G]: Z,
      [S]: K || E ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + _ + (d ?? ""),
      ...h
    }
  }), l > 0 && /* @__PURE__ */ g.createElement("path", {
    clipPath: "url(#" + k + ")",
    fill: "none",
    stroke: f,
    strokeWidth: l + (m ? 0 : 1),
    d: $
  }), /* @__PURE__ */ g.createElement("path", {
    stroke: l && !m ? D.fill : "none",
    d: $
  }), /* @__PURE__ */ g.createElement("clipPath", {
    id: k
  }, /* @__PURE__ */ g.createElement("rect", {
    x: -y,
    y: y * (E ? -1 : 1),
    width: s + l,
    height: s
  })));
});
function sa() {
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
const ia = /* @__PURE__ */ g.createContext(null), ca = /* @__PURE__ */ g.createContext(null), la = () => {
  var e;
  return ((e = g.useContext(ia)) == null ? void 0 : e.id) || null;
}, Bt = () => g.useContext(ca);
function ft(e) {
  return "data-floating-ui-" + e;
}
function je(e) {
  const t = xn(e);
  return me(() => {
    t.current = e;
  }), t;
}
function ua(e, t) {
  var n;
  let r = [], o = (n = e.find((a) => a.id === t)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const a = e.find((s) => s.id === o);
    o = a == null ? void 0 : a.parentId, a && (r = r.concat(a));
  }
  return r;
}
function Ke(e, t) {
  let n = e.filter((o) => {
    var a;
    return o.parentId === t && ((a = o.context) == null ? void 0 : a.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var a;
      return (a = r) == null ? void 0 : a.some((s) => {
        var c;
        return o.parentId === s.id && ((c = o.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(r);
  return n;
}
let Ie = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {}, xt = 0;
const da = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Gn = (e) => e && (e.host || Gn(e.parentNode)), fa = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Gn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function pa(e, t, n, r) {
  const o = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = fa(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), l = [];
  at[o] || (at[o] = /* @__PURE__ */ new WeakMap());
  const p = at[o];
  s.forEach(f), m(t), c.clear();
  function f(d) {
    !d || c.has(d) || (c.add(d), d.parentNode && f(d.parentNode));
  }
  function m(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, (h) => {
      if (c.has(h))
        m(h);
      else {
        const D = a ? h.getAttribute(a) : null, k = D !== null && D !== "false", y = (Ie.get(h) || 0) + 1, v = (p.get(h) || 0) + 1;
        Ie.set(h, y), p.set(h, v), l.push(h), y === 1 && k && ot.add(h), v === 1 && h.setAttribute(o, ""), !k && a && h.setAttribute(a, "true");
      }
    });
  }
  return xt++, () => {
    l.forEach((d) => {
      const h = (Ie.get(d) || 0) - 1, D = (p.get(d) || 0) - 1;
      Ie.set(d, h), p.set(d, D), h || (!ot.has(d) && a && d.removeAttribute(a), ot.delete(d)), D || d.removeAttribute(o);
    }), xt--, xt || (Ie = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {});
  };
}
function pn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = be(e[0]).body;
  return pa(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Xn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Jn(e, t) {
  const n = qn(e, Xn());
  t === "prev" && n.reverse();
  const r = n.indexOf(Be(be(e)));
  return n.slice(r + 1)[0];
}
function ma() {
  return Jn(document.body, "next");
}
function ha() {
  return Jn(document.body, "prev");
}
function mn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !le(n, r);
}
const Zn = {
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
let ba;
function hn(e) {
  e.key === "Tab" && (e.target, clearTimeout(ba));
}
const bn = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const [r, o] = g.useState();
  me(() => (so() && o("button"), document.addEventListener("keydown", hn), () => {
    document.removeEventListener("keydown", hn);
  }), []);
  const a = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [ft("focus-guard")]: "",
    style: Zn
  };
  return /* @__PURE__ */ g.createElement("span", qe({}, t, a));
}), va = /* @__PURE__ */ g.createContext(null), ga = () => g.useContext(va), ya = /* @__PURE__ */ g.forwardRef(function(t, n) {
  return /* @__PURE__ */ g.createElement("button", qe({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: Zn
  }));
});
function wa(e) {
  const {
    context: t,
    children: n,
    disabled: r = !1,
    order: o = ["content"],
    guards: a = !0,
    initialFocus: s = 0,
    returnFocus: c = !0,
    modal: u = !0,
    visuallyHiddenDismiss: l = !1,
    closeOnFocusOut: p = !0
  } = e, {
    open: f,
    refs: m,
    nodeId: d,
    onOpenChange: h,
    events: D,
    dataRef: k,
    elements: {
      domReference: y,
      floating: v
    }
  } = t, C = typeof s == "number" && s < 0, S = (y == null ? void 0 : y.getAttribute("role")) === "combobox" && An(y) && C, N = S ? !1 : u, A = da() ? a : !0, E = je(o), K = je(s), G = je(c), X = Bt(), R = ga(), Z = g.useRef(null), $ = g.useRef(null), _ = g.useRef(!1), J = g.useRef(null), U = g.useRef(!1), j = R != null, V = g.useCallback(function(L) {
    return L === void 0 && (L = v), L ? qn(L, Xn()) : [];
  }, [v]), Y = g.useCallback((L) => {
    const M = V(L);
    return E.current.map((O) => y && O === "reference" ? y : v && O === "floating" ? v : M).filter(Boolean).flat();
  }, [y, v, E, V]);
  g.useEffect(() => {
    if (r || !N)
      return;
    function L(O) {
      if (O.key === "Tab") {
        le(v, Be(be(v))) && V().length === 0 && !S && Et(O);
        const F = Y(), z = Ve(O);
        E.current[0] === "reference" && z === y && (Et(O), O.shiftKey ? Te(F[F.length - 1]) : Te(F[1])), E.current[1] === "floating" && z === v && O.shiftKey && (Et(O), Te(F[0]));
      }
    }
    const M = be(v);
    return M.addEventListener("keydown", L), () => {
      M.removeEventListener("keydown", L);
    };
  }, [r, y, v, N, E, m, S, V, Y]), g.useEffect(() => {
    if (r || !p)
      return;
    function L() {
      U.current = !0, setTimeout(() => {
        U.current = !1;
      });
    }
    function M(O) {
      const F = O.relatedTarget;
      queueMicrotask(() => {
        const z = !(le(y, F) || le(v, F) || le(F, v) || le(R == null ? void 0 : R.portalNode, F) || F != null && F.hasAttribute(ft("focus-guard")) || X && (Ke(X.nodesRef.current, d).find((H) => {
          var Q, fe;
          return le((Q = H.context) == null ? void 0 : Q.elements.floating, F) || le((fe = H.context) == null ? void 0 : fe.elements.domReference, F);
        }) || ua(X.nodesRef.current, d).find((H) => {
          var Q, fe;
          return ((Q = H.context) == null ? void 0 : Q.elements.floating) === F || ((fe = H.context) == null ? void 0 : fe.elements.domReference) === F;
        })));
        F && z && !U.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        F !== J.current && (_.current = !0, h(!1, O));
      });
    }
    if (v && ae(y))
      return y.addEventListener("focusout", M), y.addEventListener("pointerdown", L), !N && v.addEventListener("focusout", M), () => {
        y.removeEventListener("focusout", M), y.removeEventListener("pointerdown", L), !N && v.removeEventListener("focusout", M);
      };
  }, [r, y, v, N, d, X, R, h, p]), g.useEffect(() => {
    var L;
    if (r)
      return;
    const M = Array.from((R == null || (L = R.portalNode) == null ? void 0 : L.querySelectorAll("[" + ft("portal") + "]")) || []);
    if (v) {
      const O = [v, ...M, Z.current, $.current, E.current.includes("reference") || S ? y : null].filter((z) => z != null), F = u || S ? pn(O, A, !A) : pn(O);
      return () => {
        F();
      };
    }
  }, [r, y, v, u, E, R, S, A]), me(() => {
    if (r || !v)
      return;
    const L = be(v), M = Be(L);
    queueMicrotask(() => {
      const O = Y(v), F = K.current, z = (typeof F == "number" ? O[F] : F.current) || v, H = le(v, M);
      !C && !H && f && Te(z, {
        preventScroll: z === v
      });
    });
  }, [r, f, v, C, Y, K]), me(() => {
    if (r || !v)
      return;
    let L = !1;
    const M = be(v), O = Be(M), F = k.current;
    J.current = O;
    function z(H) {
      if (H.type === "escapeKey" && m.domReference.current && (J.current = m.domReference.current), ["referencePress", "escapeKey"].includes(H.type))
        return;
      const Q = H.data.returnFocus;
      typeof Q == "object" ? (_.current = !1, L = Q.preventScroll) : _.current = !Q;
    }
    return D.on("dismiss", z), () => {
      D.off("dismiss", z);
      const H = Be(M);
      (le(v, H) || X && Ke(X.nodesRef.current, d).some((fe) => {
        var Ne;
        return le((Ne = fe.context) == null ? void 0 : Ne.elements.floating, H);
      }) || F.openEvent && ["click", "mousedown"].includes(F.openEvent.type)) && m.domReference.current && (J.current = m.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      G.current && ae(J.current) && !_.current && Te(J.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: L
      });
    };
  }, [r, v, G, k, m, D, X, d]), me(() => {
    if (!(r || !R))
      return R.setFocusManagerState({
        modal: N,
        closeOnFocusOut: p,
        open: f,
        onOpenChange: h,
        refs: m
      }), () => {
        R.setFocusManagerState(null);
      };
  }, [r, R, N, f, h, m, p]), me(() => {
    if (r || !v || typeof MutationObserver != "function" || C)
      return;
    const L = () => {
      const O = v.getAttribute("tabindex");
      E.current.includes("floating") || Be(be(v)) !== m.domReference.current && V().length === 0 ? O !== "0" && v.setAttribute("tabindex", "0") : O !== "-1" && v.setAttribute("tabindex", "-1");
    };
    L();
    const M = new MutationObserver(L);
    return M.observe(v, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      M.disconnect();
    };
  }, [r, v, m, E, V, C]);
  function P(L) {
    return r || !l || !N ? null : /* @__PURE__ */ g.createElement(ya, {
      ref: L === "start" ? Z : $,
      onClick: (M) => h(!1, M.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const ce = !r && A && (j || N);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, ce && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.beforeInsideRef,
    onFocus: (L) => {
      if (N) {
        const O = Y();
        Te(o[0] === "reference" ? O[0] : O[O.length - 1]);
      } else if (R != null && R.preserveTabOrder && R.portalNode)
        if (_.current = !1, mn(L, R.portalNode)) {
          const O = ma() || y;
          O == null || O.focus();
        } else {
          var M;
          (M = R.beforeOutsideRef.current) == null || M.focus();
        }
    }
  }), !S && P("start"), n, P("end"), ce && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.afterInsideRef,
    onFocus: (L) => {
      if (N)
        Te(Y()[0]);
      else if (R != null && R.preserveTabOrder && R.portalNode)
        if (p && (_.current = !0), mn(L, R.portalNode)) {
          const O = ha() || y;
          O == null || O.focus();
        } else {
          var M;
          (M = R.afterOutsideRef.current) == null || M.focus();
        }
    }
  }));
}
function vn(e) {
  return ae(e.target) && e.target.tagName === "BUTTON";
}
function gn(e) {
  return An(e);
}
function Ea(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    elements: {
      domReference: a
    }
  } = e, {
    enabled: s = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: l = !1,
    keyboardHandlers: p = !0
  } = t, f = g.useRef(), m = g.useRef(!1);
  return g.useMemo(() => s ? {
    reference: {
      onPointerDown(d) {
        f.current = d.pointerType;
      },
      onMouseDown(d) {
        d.button === 0 && (tn(f.current, !0) && l || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, d.nativeEvent) : (d.preventDefault(), r(!0, d.nativeEvent))));
      },
      onClick(d) {
        if (c === "mousedown" && f.current) {
          f.current = void 0;
          return;
        }
        tn(f.current, !0) && l || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, d.nativeEvent) : r(!0, d.nativeEvent));
      },
      onKeyDown(d) {
        f.current = void 0, !(d.defaultPrevented || !p || vn(d)) && (d.key === " " && !gn(a) && (d.preventDefault(), m.current = !0), d.key === "Enter" && r(!(n && u), d.nativeEvent));
      },
      onKeyUp(d) {
        d.defaultPrevented || !p || vn(d) || gn(a) || d.key === " " && m.current && (m.current = !1, r(!(n && u), d.nativeEvent));
      }
    }
  } : {}, [s, o, c, l, p, a, u, n, r]);
}
const Da = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, xa = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, yn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Na(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    nodeId: a,
    elements: {
      reference: s,
      domReference: c,
      floating: u
    },
    dataRef: l
  } = e, {
    enabled: p = !0,
    escapeKey: f = !0,
    outsidePress: m = !0,
    outsidePressEvent: d = "pointerdown",
    referencePress: h = !1,
    referencePressEvent: D = "pointerdown",
    ancestorScroll: k = !1,
    bubbles: y,
    capture: v
  } = t, C = Bt(), S = la() != null, N = Fe(typeof m == "function" ? m : () => !1), A = typeof m == "function" ? N : m, E = g.useRef(!1), K = g.useRef(!1), {
    escapeKey: G,
    outsidePress: X
  } = yn(y), {
    escapeKey: R,
    outsidePress: Z
  } = yn(v), $ = Fe((j) => {
    if (!n || !p || !f || j.key !== "Escape")
      return;
    const V = C ? Ke(C.nodesRef.current, a) : [];
    if (!G && (j.stopPropagation(), V.length > 0)) {
      let Y = !0;
      if (V.forEach((P) => {
        var ce;
        if ((ce = P.context) != null && ce.open && !P.context.dataRef.current.__escapeKeyBubbles) {
          Y = !1;
          return;
        }
      }), !Y)
        return;
    }
    o.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, io(j) ? j.nativeEvent : j);
  }), _ = Fe((j) => {
    var V;
    const Y = () => {
      var P;
      $(j), (P = Ve(j)) == null || P.removeEventListener("keydown", Y);
    };
    (V = Ve(j)) == null || V.addEventListener("keydown", Y);
  }), J = Fe((j) => {
    const V = E.current;
    E.current = !1;
    const Y = K.current;
    if (K.current = !1, d === "click" && Y || V || typeof A == "function" && !A(j))
      return;
    const P = Ve(j), ce = "[" + ft("inert") + "]", L = be(u).querySelectorAll(ce);
    let M = ne(P) ? P : null;
    for (; M && !Je(M); ) {
      const z = Ae(M);
      if (z === be(u).body || !ne(z))
        break;
      M = z;
    }
    if (L.length && ne(P) && !co(P) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !le(P, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(L).every((z) => !le(M, z)))
      return;
    if (ae(P) && u) {
      const z = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, H = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
      let Q = H && j.offsetX > P.clientWidth;
      if (H && de(P).direction === "rtl" && (Q = j.offsetX <= P.offsetWidth - P.clientWidth), Q || z && j.offsetY > P.clientHeight)
        return;
    }
    const O = C && Ke(C.nodesRef.current, a).some((z) => {
      var H;
      return wt(j, (H = z.context) == null ? void 0 : H.elements.floating);
    });
    if (wt(j, u) || wt(j, c) || O)
      return;
    const F = C ? Ke(C.nodesRef.current, a) : [];
    if (F.length > 0) {
      let z = !0;
      if (F.forEach((H) => {
        var Q;
        if ((Q = H.context) != null && Q.open && !H.context.dataRef.current.__outsidePressBubbles) {
          z = !1;
          return;
        }
      }), !z)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: S ? {
          preventScroll: !0
        } : oo(j) || ao(j)
      }
    }), r(!1, j);
  }), U = Fe((j) => {
    var V;
    const Y = () => {
      var P;
      J(j), (P = Ve(j)) == null || P.removeEventListener(d, Y);
    };
    (V = Ve(j)) == null || V.addEventListener(d, Y);
  });
  return g.useEffect(() => {
    if (!n || !p)
      return;
    l.current.__escapeKeyBubbles = G, l.current.__outsidePressBubbles = X;
    function j(P) {
      r(!1, P);
    }
    const V = be(u);
    f && V.addEventListener("keydown", R ? _ : $, R), A && V.addEventListener(d, Z ? U : J, Z);
    let Y = [];
    return k && (ne(c) && (Y = we(c)), ne(u) && (Y = Y.concat(we(u))), !ne(s) && s && s.contextElement && (Y = Y.concat(we(s.contextElement)))), Y = Y.filter((P) => {
      var ce;
      return P !== ((ce = V.defaultView) == null ? void 0 : ce.visualViewport);
    }), Y.forEach((P) => {
      P.addEventListener("scroll", j, {
        passive: !0
      });
    }), () => {
      f && V.removeEventListener("keydown", R ? _ : $, R), A && V.removeEventListener(d, Z ? U : J, Z), Y.forEach((P) => {
        P.removeEventListener("scroll", j);
      });
    };
  }, [l, u, c, s, f, A, d, n, r, k, p, G, X, $, R, _, J, Z, U]), g.useEffect(() => {
    E.current = !1;
  }, [A, d]), g.useMemo(() => p ? {
    reference: {
      onKeyDown: $,
      [Da[D]]: (j) => {
        h && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, j.nativeEvent));
      }
    },
    floating: {
      onKeyDown: $,
      onMouseDown() {
        K.current = !0;
      },
      onMouseUp() {
        K.current = !0;
      },
      [xa[d]]: () => {
        E.current = !0;
      }
    }
  } : {}, [p, o, h, d, D, r, $]);
}
let jt;
process.env.NODE_ENV !== "production" && (jt = /* @__PURE__ */ new Set());
function ka(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var a;
    const E = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !ne(e.elements.reference)) {
      var s;
      if (!((s = jt) != null && s.has(E))) {
        var c;
        (c = jt) == null || c.add(E), console.error(E);
      }
    }
  }
  const [u, l] = g.useState(null), p = ((t = e.elements) == null ? void 0 : t.reference) || u, f = Mo(e), m = Bt(), d = Fe((E, K) => {
    E && (D.current.openEvent = K), r == null || r(E, K);
  }), h = g.useRef(null), D = g.useRef({}), k = g.useState(() => sa())[0], y = mt(), v = g.useCallback((E) => {
    const K = ne(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      contextElement: E
    } : E;
    f.refs.setReference(K);
  }, [f.refs]), C = g.useCallback((E) => {
    (ne(E) || E === null) && (h.current = E, l(E)), (ne(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !ne(E)) && f.refs.setReference(E);
  }, [f.refs]), S = g.useMemo(() => ({
    ...f.refs,
    setReference: C,
    setPositionReference: v,
    domReference: h
  }), [f.refs, C, v]), N = g.useMemo(() => ({
    ...f.elements,
    domReference: p
  }), [f.elements, p]), A = g.useMemo(() => ({
    ...f,
    refs: S,
    elements: N,
    dataRef: D,
    nodeId: o,
    floatingId: y,
    events: k,
    open: n,
    onOpenChange: d
  }), [f, o, y, k, n, d, S, N]);
  return me(() => {
    const E = m == null ? void 0 : m.nodesRef.current.find((K) => K.id === o);
    E && (E.context = A);
  }), g.useMemo(() => ({
    ...f,
    context: A,
    refs: S,
    elements: N
  }), [f, S, N, A]);
}
function Nt(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[n] : null).concat(e).reduce((o, a) => (a && Object.entries(a).forEach((s) => {
      let [c, u] = s;
      if (c.indexOf("on") === 0) {
        if (r.has(c) || r.set(c, []), typeof u == "function") {
          var l;
          (l = r.get(c)) == null || l.push(u), o[c] = function() {
            for (var p, f = arguments.length, m = new Array(f), d = 0; d < f; d++)
              m[d] = arguments[d];
            return (p = r.get(c)) == null ? void 0 : p.map((h) => h(...m)).find((h) => h !== void 0);
          };
        }
      } else
        o[c] = u;
    }), o), {})
  };
}
function Ta(e) {
  e === void 0 && (e = []);
  const t = e, n = g.useCallback(
    (a) => Nt(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = g.useCallback(
    (a) => Nt(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = g.useCallback(
    (a) => Nt(a, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((a) => a == null ? void 0 : a.item)
  );
  return g.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function Sa(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: a = "dialog"
  } = t, s = mt();
  return g.useMemo(() => {
    const c = {
      id: r,
      role: a
    };
    return o ? a === "tooltip" ? {
      reference: {
        "aria-describedby": n ? r : void 0
      },
      floating: c
    } : {
      reference: {
        "aria-expanded": n ? "true" : "false",
        "aria-haspopup": a === "alertdialog" ? "dialog" : a,
        "aria-controls": n ? r : void 0,
        ...a === "listbox" && {
          role: "combobox"
        },
        ...a === "menu" && {
          id: s
        }
      },
      floating: {
        ...c,
        ...a === "menu" && {
          "aria-labelledby": s
        }
      }
    } : {};
  }, [o, a, n, r, s]);
}
const wn = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ra(e, t) {
  const [n, r] = g.useState(e);
  return e && !n && r(!0), g.useEffect(() => {
    if (!e) {
      const o = setTimeout(() => r(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, t]), n;
}
function ja(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, s = (typeof o == "number" ? o : o.close) || 0, [c, u] = g.useState(!1), [l, p] = g.useState("unmounted"), f = Ra(n, s);
  return me(() => {
    c && !f && p("unmounted");
  }, [c, f]), me(() => {
    if (r)
      if (n) {
        p("initial");
        const m = requestAnimationFrame(() => {
          p("open");
        });
        return () => {
          cancelAnimationFrame(m);
        };
      } else
        u(!0), p("close");
  }, [n, r]), {
    isMounted: f,
    status: l
  };
}
function Ca(e, t) {
  t === void 0 && (t = {});
  const {
    initial: n = {
      opacity: 0
    },
    open: r,
    close: o,
    common: a,
    duration: s = 250
  } = t, c = e.placement, u = c.split("-")[0], l = g.useMemo(() => ({
    side: u,
    placement: c
  }), [u, c]), p = typeof s == "number", f = (p ? s : s.open) || 0, m = (p ? s : s.close) || 0, [d, h] = g.useState(() => ({
    ...Le(a, l),
    ...Le(n, l)
  })), {
    isMounted: D,
    status: k
  } = ja(e, {
    duration: s
  }), y = je(n), v = je(r), C = je(o), S = je(a);
  return me(() => {
    const N = Le(y.current, l), A = Le(C.current, l), E = Le(S.current, l), K = Le(v.current, l) || Object.keys(N).reduce((G, X) => (G[X] = "", G), {});
    if (k === "initial" && h((G) => ({
      transitionProperty: G.transitionProperty,
      ...E,
      ...N
    })), k === "open" && h({
      transitionProperty: Object.keys(K).map(wn).join(","),
      transitionDuration: f + "ms",
      ...E,
      ...K
    }), k === "close") {
      const G = A || N;
      h({
        transitionProperty: Object.keys(G).map(wn).join(","),
        transitionDuration: m + "ms",
        ...E,
        ...G
      });
    }
  }, [m, C, y, v, S, f, k, l]), {
    isMounted: D,
    styles: d
  };
}
const Se = 7, Pa = 2, Aa = (e) => {
  var S, N;
  const [t, n] = En(!0), r = xn(null), {
    refs: o,
    context: a,
    floatingStyles: s,
    middlewareData: c
  } = ka({
    open: t,
    onOpenChange: n,
    middleware: [
      _o({
        element: r
      }),
      vo(Se + Pa)
    ],
    whileElementsMounted: Ao
  }), u = ((S = c.arrow) == null ? void 0 : S.x) ?? 0, l = ((N = c.arrow) == null ? void 0 : N.y) ?? 0, p = u + Se / 2, f = l + Se, { isMounted: m, styles: d } = Ca(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: A }) => ({
      transformOrigin: {
        top: `${p}px calc(100% + ${Se}px)`,
        bottom: `${p}px ${-Se}px`,
        left: `calc(100% + ${Se}px) ${f}px`,
        right: `${-Se}px ${f}px`
      }[A]
    })
  }), h = Ea(a), D = Na(a), k = Sa(a), { getReferenceProps: y, getFloatingProps: v } = Ta([h, D, k]), C = mt();
  return /* @__PURE__ */ x.jsxDEV(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxDEV("div", { ref: o.setReference, ...y(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, globalThis),
    t && /* @__PURE__ */ x.jsxDEV(wa, { context: a, modal: !1, children: m ? /* @__PURE__ */ x.jsxDEV("div", { ref: o.setFloating, style: s, "aria-labelledby": C, ...v(), children: /* @__PURE__ */ x.jsxDEV("div", { style: d, children: [
      /* @__PURE__ */ x.jsxDEV(
        aa,
        {
          ref: r,
          context: a,
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
    }, globalThis) : /* @__PURE__ */ x.jsxDEV("div", {}, void 0, !1, {
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
}, Oa = ({ ...e }) => {
  const { state: t, setData: n } = he(), { parseBsDate: r } = $e();
  return Re(() => {
    n({ type: re.SET_VALUE, value: e.value || "" });
    const o = e.value ? r(e.value) : void 0, a = r(e.value || Pe(/* @__PURE__ */ new Date()));
    n({ type: re.SET_CALENDAR_DATE, date: a }), n({ type: re.SET_SELECTED_DATE, date: o });
  }, [e.value]), Re(() => {
    n({
      type: re.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), Re(() => {
    n({
      type: re.SET_THEME,
      theme: e.dark ? it.DARK : it.LIGHT
    });
  }, [e.dark]), Re(() => {
    n({
      type: re.SET_EVENTS,
      events: {
        onChange: e.onChange || t.events.onChange,
        onSelect: e.onSelect || t.events.onSelect
      }
    });
  }, [e.onChange, e.onSelect]), Re(() => {
    var o, a, s, c, u, l, p;
    n({
      type: re.SET_OPTIONS,
      options: {
        colors: {
          primary: ((a = (o = e.options) == null ? void 0 : o.colors) == null ? void 0 : a.primary) || t.options.colors.primary,
          secondary: ((c = (s = e.options) == null ? void 0 : s.colors) == null ? void 0 : c.secondary) || t.options.colors.secondary
        },
        dateSeparator: ((u = e.options) == null ? void 0 : u.dateSeparator) || t.options.dateSeparator,
        currentLocale: ((l = e.options) == null ? void 0 : l.locale) || t.options.currentLocale,
        valueLocale: ((p = e.options) == null ? void 0 : p.valueLocale) || t.options.valueLocale
      }
    });
  }, [e.options]), /* @__PURE__ */ x.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.classNames.wrapper || ""}`,
      "data-theme": t.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ x.jsxDEV(Aa, { input: /* @__PURE__ */ x.jsxDEV(Xr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 75,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ x.jsxDEV(Fr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 75,
        columnNumber: 69
      }, globalThis) }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
      lineNumber: 69,
      columnNumber: 5
    },
    globalThis
  );
}, Ma = (e) => /* @__PURE__ */ x.jsxDEV($r, { children: /* @__PURE__ */ x.jsxDEV(Oa, { ...e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 13,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 12,
  columnNumber: 5
}, globalThis);
export {
  Ma as NepaliDatePicker
};
