import * as g from "react";
import wr, { useContext as Er, useCallback as ve, useMemo as ae, useState as Dr, createContext as Nr, useReducer as xr, useLayoutEffect as Dn, useEffect as he, useRef as Nn } from "react";
import * as kr from "react-dom";
var St = { exports: {} }, tt = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function Sr() {
  if (Qt)
    return tt;
  Qt = 1;
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
var en;
function Tr() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && function() {
    var e = wr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function T(i) {
      if (i === null || typeof i != "object")
        return null;
      var b = v && i[v] || i[y];
      return typeof b == "function" ? b : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(i) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), C = 1; C < b; C++)
          E[C - 1] = arguments[C];
        M("error", i, E);
      }
    }
    function M(i, b, E) {
      {
        var C = w.ReactDebugCurrentFrame, Y = C.getStackAddendum();
        Y !== "" && (b += "%s", E = E.concat([Y]));
        var K = E.map(function($) {
          return String($);
        });
        K.unshift("Warning: " + b), Function.prototype.apply.call(console[i], console, K);
      }
    }
    var R = !1, N = !1, A = !1, j = !1, P = !1, I;
    I = Symbol.for("react.module.reference");
    function z(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || P || i === o || i === l || i === f || j || i === d || R || N || A || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === p || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === I || i.getModuleId !== void 0));
    }
    function _(i, b, E) {
      var C = i.displayName;
      if (C)
        return C;
      var Y = b.displayName || b.name || "";
      return Y !== "" ? E + "(" + Y + ")" : E;
    }
    function J(i) {
      return i.displayName || "Context";
    }
    function q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
        case f:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var b = i;
            return J(b) + ".Consumer";
          case s:
            var E = i;
            return J(E._context) + ".Provider";
          case u:
            return _(i, i.render, "ForwardRef");
          case p:
            var C = i.displayName || null;
            return C !== null ? C : q(i.type) || "Memo";
          case m: {
            var Y = i, K = Y._payload, $ = Y._init;
            try {
              return q($(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, S = 0, O, W, x, ne, Ee, pe, V;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function k() {
      {
        if (S === 0) {
          O = console.log, W = console.info, x = console.warn, ne = console.error, Ee = console.group, pe = console.groupCollapsed, V = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: U,
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
        S++;
      }
    }
    function B() {
      {
        if (S--, S === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, i, {
              value: O
            }),
            info: L({}, i, {
              value: W
            }),
            warn: L({}, i, {
              value: x
            }),
            error: L({}, i, {
              value: ne
            }),
            group: L({}, i, {
              value: Ee
            }),
            groupCollapsed: L({}, i, {
              value: pe
            }),
            groupEnd: L({}, i, {
              value: V
            })
          });
        }
        S < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = w.ReactCurrentDispatcher, ee;
    function re(i, b, E) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (Y) {
            var C = Y.stack.trim().match(/\n( *(at )?)/);
            ee = C && C[1] || "";
          }
        return `
` + ee + i;
      }
    }
    var ie = !1, De;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      De = new Je();
    }
    function Wt(i, b) {
      if (!i || ie)
        return "";
      {
        var E = De.get(i);
        if (E !== void 0)
          return E;
      }
      var C;
      ie = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = G.current, G.current = null, k();
      try {
        if (b) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (ge) {
              C = ge;
            }
            Reflect.construct(i, [], $);
          } else {
            try {
              $.call();
            } catch (ge) {
              C = ge;
            }
            i.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            C = ge;
          }
          i();
        }
      } catch (ge) {
        if (ge && C && typeof ge.stack == "string") {
          for (var F = ge.stack.split(`
`), oe = C.stack.split(`
`), X = F.length - 1, Z = oe.length - 1; X >= 1 && Z >= 0 && F[X] !== oe[Z]; )
            Z--;
          for (; X >= 1 && Z >= 0; X--, Z--)
            if (F[X] !== oe[Z]) {
              if (X !== 1 || Z !== 1)
                do
                  if (X--, Z--, Z < 0 || F[X] !== oe[Z]) {
                    var fe = `
` + F[X].replace(" at new ", " at ");
                    return i.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", i.displayName)), typeof i == "function" && De.set(i, fe), fe;
                  }
                while (X >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        ie = !1, G.current = K, B(), Error.prepareStackTrace = Y;
      }
      var Le = i ? i.displayName || i.name : "", Zt = Le ? re(Le) : "";
      return typeof i == "function" && De.set(i, Zt), Zt;
    }
    function er(i, b, E) {
      return Wt(i, !1);
    }
    function tr(i) {
      var b = i.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ze(i, b, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Wt(i, tr(i));
      if (typeof i == "string")
        return re(i);
      switch (i) {
        case l:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return er(i.render);
          case p:
            return Ze(i.type, b, E);
          case m: {
            var C = i, Y = C._payload, K = C._init;
            try {
              return Ze(K(Y), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, Vt = {}, Ut = w.ReactDebugCurrentFrame;
    function et(i) {
      if (i) {
        var b = i._owner, E = Ze(i.type, i._source, b ? b.type : null);
        Ut.setExtraStackFrame(E);
      } else
        Ut.setExtraStackFrame(null);
    }
    function nr(i, b, E, C, Y) {
      {
        var K = Function.call.bind(Qe);
        for (var $ in i)
          if (K(i, $)) {
            var F = void 0;
            try {
              if (typeof i[$] != "function") {
                var oe = Error((C || "React class") + ": " + E + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              F = i[$](b, $, C, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              F = X;
            }
            F && !(F instanceof Error) && (et(Y), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", E, $, typeof F), et(null)), F instanceof Error && !(F.message in Vt) && (Vt[F.message] = !0, et(Y), h("Failed %s type: %s", E, F.message), et(null));
          }
      }
    }
    var rr = Array.isArray;
    function bt(i) {
      return rr(i);
    }
    function or(i) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return E;
      }
    }
    function ar(i) {
      try {
        return $t(i), !1;
      } catch {
        return !0;
      }
    }
    function $t(i) {
      return "" + i;
    }
    function Yt(i) {
      if (ar(i))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(i)), $t(i);
    }
    var ze = w.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zt, Ht, vt;
    vt = {};
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
        var E = q(ze.current.type);
        vt[E] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ze.current.type), i.ref), vt[E] = !0);
      }
    }
    function ur(i, b) {
      {
        var E = function() {
          zt || (zt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function dr(i, b) {
      {
        var E = function() {
          Ht || (Ht = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var fr = function(i, b, E, C, Y, K, $) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: b,
        ref: E,
        props: $,
        // Record the component responsible for creating this element.
        _owner: K
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
        value: C
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function pr(i, b, E, C, Y) {
      {
        var K, $ = {}, F = null, oe = null;
        E !== void 0 && (Yt(E), F = "" + E), cr(b) && (Yt(b.key), F = "" + b.key), ir(b) && (oe = b.ref, lr(b, Y));
        for (K in b)
          Qe.call(b, K) && !sr.hasOwnProperty(K) && ($[K] = b[K]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for (K in X)
            $[K] === void 0 && ($[K] = X[K]);
        }
        if (F || oe) {
          var Z = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && ur($, Z), oe && dr($, Z);
        }
        return fr(i, F, oe, Y, C, ze.current, $);
      }
    }
    var gt = w.ReactCurrentOwner, Kt = w.ReactDebugCurrentFrame;
    function Me(i) {
      if (i) {
        var b = i._owner, E = Ze(i.type, i._source, b ? b.type : null);
        Kt.setExtraStackFrame(E);
      } else
        Kt.setExtraStackFrame(null);
    }
    var yt;
    yt = !1;
    function wt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function qt() {
      {
        if (gt.current) {
          var i = q(gt.current.type);
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
          var b = i.fileName.replace(/^.*[\\\/]/, ""), E = i.lineNumber;
          return `

Check your code at ` + b + ":" + E + ".";
        }
        return "";
      }
    }
    var Gt = {};
    function hr(i) {
      {
        var b = qt();
        if (!b) {
          var E = typeof i == "string" ? i : i.displayName || i.name;
          E && (b = `

Check the top-level render call using <` + E + ">.");
        }
        return b;
      }
    }
    function Xt(i, b) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var E = hr(b);
        if (Gt[E])
          return;
        Gt[E] = !0;
        var C = "";
        i && i._owner && i._owner !== gt.current && (C = " It was passed a child from " + q(i._owner.type) + "."), Me(i), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, C), Me(null);
      }
    }
    function Jt(i, b) {
      {
        if (typeof i != "object")
          return;
        if (bt(i))
          for (var E = 0; E < i.length; E++) {
            var C = i[E];
            wt(C) && Xt(C, b);
          }
        else if (wt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var Y = T(i);
          if (typeof Y == "function" && Y !== i.entries)
            for (var K = Y.call(i), $; !($ = K.next()).done; )
              wt($.value) && Xt($.value, b);
        }
      }
    }
    function br(i) {
      {
        var b = i.type;
        if (b == null || typeof b == "string")
          return;
        var E;
        if (typeof b == "function")
          E = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          E = b.propTypes;
        else
          return;
        if (E) {
          var C = q(b);
          nr(E, i.props, "prop", C, i);
        } else if (b.PropTypes !== void 0 && !yt) {
          yt = !0;
          var Y = q(b);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(i) {
      {
        for (var b = Object.keys(i.props), E = 0; E < b.length; E++) {
          var C = b[E];
          if (C !== "children" && C !== "key") {
            Me(i), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Me(null);
            break;
          }
        }
        i.ref !== null && (Me(i), h("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function gr(i, b, E, C, Y, K) {
      {
        var $ = z(i);
        if (!$) {
          var F = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = mr(Y);
          oe ? F += oe : F += qt();
          var X;
          i === null ? X = "null" : bt(i) ? X = "array" : i !== void 0 && i.$$typeof === t ? (X = "<" + (q(i.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, F);
        }
        var Z = pr(i, b, E, Y, K);
        if (Z == null)
          return Z;
        if ($) {
          var fe = b.children;
          if (fe !== void 0)
            if (C)
              if (bt(fe)) {
                for (var Le = 0; Le < fe.length; Le++)
                  Jt(fe[Le], i);
                Object.freeze && Object.freeze(fe);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(fe, i);
        }
        return i === r ? vr(Z) : br(Z), Z;
      }
    }
    var yr = gr;
    nt.Fragment = r, nt.jsxDEV = yr;
  }()), nt;
}
process.env.NODE_ENV === "production" ? St.exports = Sr() : St.exports = Tr();
var D = St.exports;
const Ye = () => ({ omitKeys: (o, a) => Object.entries(a).reduce((s, [c, u]) => o.includes(c) ? { ...s } : { ...s, [c]: u }, {}), getObject: (o, a, s = null) => {
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
}, zeroPad: (o, a = 2) => String(o).padStart(a, "0") }), te = () => {
  const { state: e, dispatch: t } = Er(_n);
  return { setData: (r) => {
    t(r);
  }, state: e };
};
var ce = {
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
}, Te = (
  /** @class */
  function() {
    function e() {
    }
    return e.dateType = function(t) {
      if (!["BS", "AD"].includes(t))
        throw new TypeError("Invalid date type. Only 'AD' or 'BS' type supported.");
      return !0;
    }, e.adYear = function(t) {
      var n = ce.minBSYear - 57, r = ce.maxBSYear - 57;
      if (t < n || t > r)
        throw new RangeError("AD year should be in range of " + n + " to " + r);
    }, e.adMonth = function(t) {
      if (t < 1 || t > 12)
        throw new RangeError("AD month should be in range of 1 to 12");
    }, e.adDay = function(t) {
      if (t < 1 || t > 31)
        throw new RangeError("AD day should be in range of 1 to 31");
    }, e.bsYear = function(t) {
      var n = ce.minBSYear, r = ce.maxBSYear;
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
), xn = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = "AD"), this.dateType = "AD", this.date = { year: 0, month: 0, day: 0 }, t ? this.setDate(t, n) : this.setDate(/* @__PURE__ */ new Date());
    }
    return e.prototype.setDate = function(t, n) {
      if (n === void 0 && (n = "AD"), Te.dateType(n), n === "BS") {
        if (typeof t != "string")
          throw new TypeError("BS date should be 'string' type.");
        return this.dateType = "BS", this.date = this.splitBsDate(t), this;
      }
      return this.dateType = "AD", this.date = this.splitAdDate(t), this;
    }, e.prototype.toAD = function() {
      if (this.dateType === "AD")
        return this.format(this.date);
      var t = this.totalDaysSince(), n = this.splitDate(ce.referenceDate.AD), r = n.year, o = n.month, a = n.day, s = new Date(r, o, a - 1);
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
        var f = this.daysInBsMonth(a, s);
        c = f - (l.getDate() - o) + 1;
      } else
        c = o - l.getDate() + 1;
      return this.format({ year: a, month: s, day: c });
    }, e.prototype.totalDaysSince = function() {
      for (var t = this.date, n = t.year, r = t.month, o = t.day, a = 0, s = n - ce.minBSYear, c = 1; c <= 12; c++)
        a += this.totalMonthDaysSince(c, c < r ? s + 1 : s);
      return n > 2085 && n < 2088 || n === 2085 && r > 5 ? a += o - 2 : n > 2088 || n === 2088 && r > 5 ? a += o - 4 : a += o, a;
    }, e.prototype.totalMonthDaysSince = function(t, n) {
      if (n === 0)
        return 0;
      var r = ce.monthReferences[t - 1], o = r.slice(0).reduce(function(a, s, c, u) {
        if (s === 0)
          return a;
        var l = c % 2;
        return n > a.year + s ? (a.year += s, a.month += ce.bsMonthTotalDaysCount[t - 1][l] * s) : (a.month += ce.bsMonthTotalDaysCount[t - 1][l] * (n - a.year), a.year = n - a.year, u.splice(1)), a;
      }, { month: 0, year: 0 });
      return o.month;
    }, e.prototype.daysInBsMonth = function(t, n) {
      for (var r = t + 1 - ce.minBSYear, o = ce.monthReferences[n - 1], a = 0, s = 0; s < o.length; s++)
        if (o[s] !== 0) {
          var c = s % 2;
          if (a += o[s], r <= a)
            return t === 2085 && n === 5 || t === 2088 && n === 5 ? ce.bsMonthTotalDaysCount[n - 1][c] - 2 : ce.bsMonthTotalDaysCount[n - 1][c];
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
      return Te.adYear(n), Te.adMonth(r), Te.adDay(o), { year: n, month: r, day: o };
    }, e.prototype.splitBsDate = function(t) {
      var n = this.splitDate(t), r = n.year, o = n.month, a = n.day;
      return Te.bsYear(r), Te.bsMonth(o), Te.bsDay(a), { year: r, month: o, day: a };
    }, e.prototype.format = function(t) {
      var n = ce.outputSeparator, r = t.year, o = t.month, a = t.day;
      return "" + r + n + this.zeroPad(o) + n + this.zeroPad(a);
    }, e.prototype.zeroPad = function(t) {
      return t > 9 ? "" + t : "0" + t;
    }, e;
  }()
), tn = function(e) {
  return new xn().setDate(e, "BS").toAD();
}, xe = function(e) {
  return new xn().setDate(e, "AD").toBS();
}, it = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(it || {}), ct = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(ct || {}), Tt = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(Tt || {}), H = /* @__PURE__ */ ((e) => (e.SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_LOCALE = "SET_LOCALE", e.SET_COLORS = "SET_COLORS", e.SET_SEPARATOR = "SET_SEPARATOR", e.SET_CLOSE_ON_SELECT = "SET_CLOSE_ON_SELECT", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(H || {});
const Rr = () => {
  const { state: e } = te(), t = (l, f) => {
    const p = (f || e.options.dateSeparator).replace(/[[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&"), m = `^[0-9]{4}${p}(0?[1-9]|1[0-2])${p}(0?[1-9]|[1-2][0-9]|3[0-2])$`, d = new RegExp(m);
    if (!l.match(d))
      throw new TypeError(`${l} is invalid date format.`);
  }, n = (l) => {
    const f = e.calendarData.minBsYear, p = e.calendarData.maxBsYear;
    if (l < f || l > p)
      throw new RangeError(`Date between ${f} BS to ${p} BS is only supported.`);
  }, r = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("BS month should be in range of 1 to 12");
  }, o = (l) => {
    if (l < 1 || l > 32)
      throw new RangeError("BS day should be in range of 1 to 32");
  }, a = (l) => {
    const f = e.calendarData.minBsYear, p = e.calendarData.maxBsYear, m = f - 57, d = p - 57;
    if (l < m || l > d)
      throw new RangeError(`Date between ${m} AD (${f} BS) to ${d} AD (${p} BS) is only supported.`);
  }, s = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("AD month should be in range of 1 to 12");
  }, c = (l) => {
    if (l < 1 || l > 31)
      throw new RangeError("AD day should be in range of 1 to 31");
  };
  return {
    validateInputDate: t,
    validateDateObject: (l, f = Tt.BS) => {
      const { year: p, month: m, day: d } = l;
      if (f === Tt.BS) {
        n(p), r(m), o(d);
        return;
      }
      a(p), s(m), c(d);
    },
    validateBsYear: n,
    validateAdYear: a,
    validateBsMonth: r,
    validateAdMonth: s,
    validateBsDay: o,
    validateAdDay: c
  };
}, Ae = () => {
  const e = Rr(), t = Ye(), { state: n } = te(), r = (c, u) => {
    e.validateInputDate(c, u);
    const [l, f, p] = c.split(u || n.options.dateSeparator);
    return {
      year: parseInt(l),
      month: parseInt(f),
      day: parseInt(p)
    };
  }, o = (c, u) => {
    const l = u || n.options.dateSeparator;
    return `${c.year}${l}${t.zeroPad(c.month)}${l}${t.zeroPad(c.day)}`;
  }, a = (c, u) => {
    e.validateBsYear(c), e.validateBsMonth(u);
    let l = 0;
    const f = c + 1 - n.calendarData.minBsYear;
    return n.calendarData.bsMonthCalculatedData[u - 1].reduce((m, d, v) => {
      if (d === 0 || m !== 0)
        return m;
      const y = v % 2;
      return l += d, f > l ? m : c === 2085 && u === 5 || c === 2088 && u === 5 ? n.calendarData.bsMonthMaxDays[u - 1][y] - 2 : n.calendarData.bsMonthMaxDays[u - 1][y];
    }, 0);
  };
  return {
    splitDate: r,
    stitchDate: o,
    parseBsDate: (c, u) => {
      const { year: l, month: f, day: p } = r(c, u);
      e.validateDateObject({ year: l, month: f, day: p });
      const m = o({ year: l, month: f, day: 1 }), d = tn(m), v = new Date(d), y = a(l, f), T = new Date(tn(c));
      return {
        bsDay: p,
        bsMonth: f,
        bsYear: l,
        weekDay: T.getDay(),
        adDate: T,
        firstAdDayInBsMonth: v,
        numberOfDaysInBsMonth: y,
        dateString: c
      };
    },
    getNumberOfDaysInBSMonth: a
  };
};
var kn = (
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
), _r = function(e) {
  return new kn().setNumber(e).toNepali();
}, Sn = function(e) {
  return new kn().setNumber(e).toEnglish();
};
const ye = () => {
  const { state: e } = te(), { getObject: t } = Ye();
  return {
    trans: (n, r) => t(Qr[r || e.locale.calendar], n, n),
    numberTrans: (n, r) => ct.ENGLISH === `${r || e.locale.calendar}` ? Sn(n) : _r(n)
  };
}, jt = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e, { state: a } = te();
  return /* @__PURE__ */ D.jsxDEV(
    "button",
    {
      className: `
          ${a.options.classNames.actionBtn || `
            ndp__action_btn
            ndp-bg-white dark:ndp-bg-slate-800
            hover:ndp-bg-gray-100 dark:hover:ndp-bg-gray-700
            ndp-border-gray-300 dark:ndp-border-gray-600
            dark:hover:ndp-border-gray-600
            focus:ndp-outline-none focus:ndp-ring-0
            ndp-text-sm ndp-px-3 ndp-py-1.5 hover-transition
            ndp-flex ndp-items-center
          `}
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
      lineNumber: 16,
      columnNumber: 5
    },
    globalThis
  );
}, Tn = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e, { state: a } = te();
  return /* @__PURE__ */ D.jsxDEV(
    "button",
    {
      className: `
              ${a.options.classNames.navBtn || `
                ndp__nav_button
                ndp-flex ndp-justify-center ndp-items-center hover-transition
                ndp-border-0 ndp-h-10 ndp-w-10 ndp-rounded-full
                hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
              `}
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
      lineNumber: 15,
      columnNumber: 5
    },
    globalThis
  );
}, Cr = () => {
  const { trans: e } = ye(), { state: t, setData: n } = te(), r = ve(() => {
    t.events.onChange(""), t.options.closeOnSelect && n({ type: H.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [t.events.onChange, t.options.closeOnSelect]);
  return t.date.selected ? /* @__PURE__ */ D.jsxDEV(
    jt,
    {
      className: t.options.classNames.clearBtn || `
                ndp__clear_btn ndp-font-medium ndp-border hover:ndp-text-red-500
               `,
      title: e("labels.clear"),
      onClick: () => r(),
      onKeyDown: () => r(),
      children: [
        /* @__PURE__ */ D.jsxDEV(zr, { className: t.options.classNames.clearBtnIcon || "ndp__today_btn-icon ndp-w-4 ndp-h-4" }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ D.jsxDEV("span", { className: t.options.classNames.clearBtnText || "ndp__today_btn-text ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    globalThis
  ) : null;
}, jr = () => {
  const { numberTrans: e } = ye(), { range: t } = Ye(), { state: n, setData: r } = te(), o = Ae(), a = ae(() => n.date.calendar || o.parseBsDate(xe(/* @__PURE__ */ new Date())), [n.date.calendar]), s = ae(() => n.date.selected, [n.date.selected]), c = ae(() => Math.ceil((a.firstAdDayInBsMonth.getDay() + a.numberOfDaysInBsMonth) / 7) - 1, [a]), u = ae(() => a.bsMonth - 1 === 0 ? 12 : a.bsMonth - 1, [a]), l = ae(() => u === 12 ? a.bsYear - 1 : a.bsYear, [u, a]), f = ae(() => l >= n.calendarData.minBsYear ? o.getNumberOfDaysInBSMonth(l, u) : 30, [l, u]), p = ve((d, v) => {
    let y = d * 7 + v - a.firstAdDayInBsMonth.getDay();
    const T = a.bsMonth, w = a.bsYear;
    let h = !0;
    y <= 0 ? (y = f + y, h = !1) : y > a.numberOfDaysInBsMonth && (y -= a.numberOfDaysInBsMonth, h = !1);
    const M = o.splitDate(xe(/* @__PURE__ */ new Date())), R = h ? M.day === y && M.month === T && M.year === w : !1, N = h ? (s == null ? void 0 : s.bsDay) === y && (s == null ? void 0 : s.bsMonth) === T && (s == null ? void 0 : s.bsYear) === w : !1, A = o.stitchDate({ year: w, month: T, day: y });
    return { day: y, month: T, year: w, isCurrentMonth: h, isToday: R, isSelected: N, dateString: A };
  }, [a, s, f]), m = ve((d) => {
    if (!d.isCurrentMonth)
      return;
    const v = o.stitchDate({
      year: d.year,
      month: d.month,
      day: d.day
    });
    n.events.onSelect(d), n.events.onChange(e(v, n.locale.value)), n.options.closeOnSelect && r({ type: H.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [n.events.onSelect, n.events.onChange, n.options.closeOnSelect, n.locale.value]);
  return /* @__PURE__ */ D.jsxDEV("tbody", { children: t(0, c).map((d) => /* @__PURE__ */ D.jsxDEV("tr", { className: n.options.classNames.dayPickerTr || "ndp__day_picker-tr ndp-border-0", children: t(1, 7).map((v) => {
    const y = p(d, v);
    return /* @__PURE__ */ D.jsxDEV(
      "td",
      {
        className: n.options.classNames.dayPickerTd || "ndp__day_picker-td ndp-border-0",
        title: e(y.day),
        children: /* @__PURE__ */ D.jsxDEV(
          "button",
          {
            className: `
                  ${n.options.classNames.dayPickerDay || `
                    ndp__day_picker-day
                    ndp-rounded-full ndp-h-9 ndp-w-9
                    ndp-relative ndp-cursor-pointer hover-transition
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}
                  ${y.isSelected && (n.options.classNames.dayPickerDaySelected || `
                    ndp__day_picker-day-selected
                    ndp-bg-primary ndp-text-secondary
                    hover:ndp-opacity-80
                  `)}

                  ${!y.isCurrentMonth && (n.options.classNames.dayPickerDayOtherMonth || `
                    ndp__day_picker-day-other_month
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `)}
                `,
            onClick: () => m(y),
            onKeyDown: () => m(y),
            children: [
              e(y.day),
              y.isToday && /* @__PURE__ */ D.jsxDEV("span", { className: n.options.classNames.dayPickerToday || `
                      ndp__day_picker-today
                      ndp-inline-block ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    ` }, void 0, !1, {
                fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, globalThis)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
            lineNumber: 96,
            columnNumber: 17
          },
          globalThis
        )
      },
      v,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
        lineNumber: 93,
        columnNumber: 15
      },
      globalThis
    );
  }) }, d, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 88,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, globalThis);
}, Rn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const { state: s } = te(), [c, u] = Dr(!1), l = ae(() => e.find((m) => m.value === n), [n]), f = ve(() => {
    u((m) => !m);
  }, []), p = ve((m) => {
    u(!1), t(m.value);
  }, [t]);
  return /* @__PURE__ */ D.jsxDEV("div", { className: s.options.classNames.dropDownWrapper || `
      ndp__dropdown-wrapper ndp-relative
    `, children: [
    /* @__PURE__ */ D.jsxDEV(
      jt,
      {
        onClick: f,
        onKeyDown: f,
        className: o,
        title: r,
        children: l == null ? void 0 : l.label
      },
      void 0,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      globalThis
    ),
    c && /* @__PURE__ */ D.jsxDEV("ul", { className: `
          ${s.options.classNames.dropDown || `
            ndp__dropdown
            ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
            ndp-absolute ndp-w-full
            ndp-bg-white dark:ndp-bg-slate-900
            ndp-top-0 ndp-z-10
            ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          `}
          ${a || ""}
        `, children: e.map((m) => /* @__PURE__ */ D.jsxDEV(
      "li",
      {
        onClick: () => p(m),
        onKeyDown: () => p(m),
        role: "button",
        className: `
                  ${s.options.classNames.dropDownItem || `
                    ndp__dropdown-item
                    ndp-px-3 ndp-py-1.5 ndp-text-sm hover-transition
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                  ${m.value === n && (s.options.classNames.dropDownItemActive || `
                    ndp__dropdown-item-active
                    ndp-bg-primary ndp-text-secondary
                  `)}
                `,
        children: m.label
      },
      m.value,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 62,
        columnNumber: 13
      },
      globalThis
    )) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, globalThis);
}, Pr = [
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
], Or = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Ar = () => {
  var c;
  const { trans: e } = ye(), { state: t, setData: n } = te(), r = Ae(), o = ae(() => t.date.calendar || r.parseBsDate(xe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ae(() => Pr.map((u, l) => ({
    label: e(`months.${u}`),
    value: l
  })), [t.locale.calendar]), s = ve((u) => {
    const l = r.stitchDate({
      year: o.bsYear,
      month: u + 1,
      day: 1
    });
    n({ type: H.SET_CALENDAR_DATE, date: r.parseBsDate(l) });
  }, [o]);
  return /* @__PURE__ */ D.jsxDEV(
    Rn,
    {
      options: a,
      value: (((c = t.date.calendar) == null ? void 0 : c.bsMonth) || 1) - 1,
      onSelect: s,
      className: t.options.classNames.monthPicker || `
                ndp__month_picker ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center
              `,
      dropdownClass: t.options.classNames.monthPickerDropDown || `
                ndp__month_picker-dropdown ndp-rounded-r-sm ndp-rounded-bl-sm
              `,
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
  const { trans: e } = ye(), { state: t, setData: n } = te(), r = Ae(), o = ae(() => t.date.calendar || r.parseBsDate(xe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ve(() => {
    let s = o.bsYear, c = o.bsMonth + 1;
    if (c > 12 && (c = 1, s++), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: H.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ D.jsxDEV(
    Tn,
    {
      title: e("labels.next"),
      onClick: () => a(),
      onKeyDown: () => a(),
      className: t.options.classNames.nextBtn || "ndp__nav_button-next",
      children: /* @__PURE__ */ D.jsxDEV(Kr, { className: t.options.classNames.navBtnIcon || `
        ndp__nav_btn_icon ndp-w-5 ndp-h-5
      ` }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
        lineNumber: 40,
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
}, Lr = () => {
  const { trans: e } = ye(), { state: t, setData: n } = te(), r = Ae(), o = ae(() => t.date.calendar || r.parseBsDate(xe(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ve(() => {
    let s = o.bsYear, c = o.bsMonth - 1;
    if (c === 0 && (c = 12, s--), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: H.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ D.jsxDEV(
    Tn,
    {
      title: e("labels.previous"),
      onClick: () => a(),
      onKeyDown: () => a(),
      className: t.options.classNames.previousBtn || "ndp__nav_button-previous",
      children: /* @__PURE__ */ D.jsxDEV(Hr, { className: t.options.classNames.navBtnIcon || "ndp__nav_btn_icon ndp-w-5 ndp-h-5" }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
        lineNumber: 40,
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
}, Br = () => {
  const { trans: e, numberTrans: t } = ye(), n = Ae(), { zeroPad: r } = Ye(), { state: o, setData: a } = te(), s = ae(() => n.parseBsDate(xe(/* @__PURE__ */ new Date())), []), c = ve(() => {
    o.events.onSelect({
      day: s.bsDay,
      month: s.bsMonth,
      year: s.bsYear,
      isToday: !0,
      isCurrentMonth: !0,
      isSelected: !0,
      dateString: s.dateString
    }), o.events.onChange(t(s.dateString, o.locale.value)), o.options.closeOnSelect && a({ type: H.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [s, o.events.onChange, o.options.closeOnSelect, o.locale.value]);
  return /* @__PURE__ */ D.jsxDEV(
    jt,
    {
      className: o.options.classNames.todayBtn || `
                ndp__today_btn ndp-font-medium ndp-border hover:ndp-text-primary ndp-group
              `,
      title: e("labels.today"),
      onClick: () => c(),
      onKeyDown: () => c(),
      children: [
        /* @__PURE__ */ D.jsxDEV(qr, { date: t(r(s.bsDay)) }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ D.jsxDEV("span", { className: o.options.classNames.todayBtnText || "ndp__today_btn-text ndp-ml-2", children: e("labels.today") }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    globalThis
  );
}, Ir = () => {
  const { trans: e } = ye(), { state: t } = te(), n = ae(() => Or.map((r, o) => ({
    label: e(`weeks.${r}`),
    value: o
  })), [t.locale.calendar]);
  return /* @__PURE__ */ D.jsxDEV("thead", { children: /* @__PURE__ */ D.jsxDEV("tr", { className: t.options.classNames.weekDaysTr || "ndp__weekdays-tr ndp-border-0", children: n.map((r) => /* @__PURE__ */ D.jsxDEV(
    "td",
    {
      className: t.options.classNames.weekDaysTd || "ndp__weekdays-td ndp-border-0 ndp-h-10 ndp-w-10",
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
}, Fr = () => {
  var l;
  const { state: e, setData: t } = te(), { numberTrans: n, trans: r } = ye(), { range: o } = Ye(), a = Ae(), s = ae(() => e.date.calendar || a.parseBsDate(xe(/* @__PURE__ */ new Date())), [e.date.calendar]), c = ae(() => o(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((f) => ({
    label: n(f),
    value: f
  })), [e.locale.calendar]), u = ve((f) => {
    const p = a.stitchDate({ year: f, month: s.bsMonth, day: 1 });
    t({ type: H.SET_CALENDAR_DATE, date: a.parseBsDate(p) });
  }, [s]);
  return /* @__PURE__ */ D.jsxDEV(
    Rn,
    {
      options: c,
      value: ((l = e.date.calendar) == null ? void 0 : l.bsYear) || 0,
      onSelect: u,
      className: e.options.classNames.yearPicker || `
                ndp__year_picker ndp-border-y ndp-border-l ndp-rounded-l-sm
              `,
      dropdownClass: e.options.classNames.yearPickerDropDown || `
                ndp__year_picker-dropdown ndp-rounded-l-sm ndp-rounded-br-sm
              `,
      title: r("labels.select-year")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/year-picker.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    globalThis
  );
}, Wr = () => {
  const { state: e } = te();
  return /* @__PURE__ */ D.jsxDEV("div", { className: e.options.classNames.calendar || `
      ndp__calendar
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
    /* @__PURE__ */ D.jsxDEV(
      "div",
      {
        className: e.options.classNames.calendarHeader || `
          ndp__calendar-header ndp-flex ndp-items-center ndp-justify-between
        `,
        children: [
          /* @__PURE__ */ D.jsxDEV(Lr, {}, void 0, !1, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, globalThis),
          /* @__PURE__ */ D.jsxDEV("div", { className: e.options.classNames.yearMonthPicker || `
          ndp__year_month_picker ndp-flex
        `, children: [
            /* @__PURE__ */ D.jsxDEV(Fr, {}, void 0, !1, {
              fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, globalThis),
            /* @__PURE__ */ D.jsxDEV(Ar, {}, void 0, !1, {
              fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, globalThis)
          ] }, void 0, !0, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, globalThis),
          /* @__PURE__ */ D.jsxDEV(Mr, {}, void 0, !1, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, globalThis)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      globalThis
    ),
    /* @__PURE__ */ D.jsxDEV("table", { className: e.options.classNames.calendarBody || `
        ndp__calendar-body ndp-text-center ndp-w-full ndp-border-0
      `, children: [
      /* @__PURE__ */ D.jsxDEV(Ir, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, globalThis),
      /* @__PURE__ */ D.jsxDEV(jr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ D.jsxDEV("div", { className: e.options.classNames.calendarFooter || `
        ndp__calendar-footer
        ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2
      `, children: [
      /* @__PURE__ */ D.jsxDEV(Br, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, globalThis),
      /* @__PURE__ */ D.jsxDEV(Cr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, globalThis);
}, Vr = [
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
  isCalendarOpen: !1,
  events: {
    onChange: (e) => e,
    onSelect: (e) => e
  },
  locale: {
    calendar: ct.NEPALI,
    value: ct.ENGLISH
  },
  options: {
    theme: it.LIGHT,
    classNames: {},
    colors: {
      primary: "#2096f5",
      secondary: "#fff"
    },
    dateSeparator: "-",
    closeOnSelect: !0
  },
  calendarData: {
    minBsYear: 1970,
    maxBsYear: 2099,
    bsMonthMaxDays: Vr,
    bsMonthCalculatedData: Ur
  },
  date: {
    calendar: void 0,
    selected: void 0
  }
}, $r = (e = Pt, t) => t.type === H.SET_CALENDAR_OPEN ? { ...e, isCalendarOpen: t.isOpen } : t.type === H.SET_CLASSES ? { ...e, options: { ...e.options, classNames: { ...e.options.classNames, ...t.classNames } } } : t.type === H.SET_THEME ? { ...e, options: { ...e.options, theme: t.theme } } : t.type === H.SET_EVENTS ? { ...e, events: t.events } : t.type === H.SET_LOCALE ? { ...e, locale: { ...e.locale, ...t.locale } } : t.type === H.SET_COLORS ? { ...e, options: { ...e.options, colors: { ...e.options.colors, ...t.colors } } } : t.type === H.SET_SEPARATOR ? { ...e, options: { ...e.options, dateSeparator: t.separator } } : t.type === H.SET_CLOSE_ON_SELECT ? { ...e, options: { ...e.options, closeOnSelect: t.closeOnSelect } } : t.type === H.SET_OPTIONS ? { ...e, options: t.options } : t.type === H.SET_CALENDAR_DATE ? { ...e, date: { ...e.date, calendar: t.date } } : t.type === H.SET_SELECTED_DATE ? { ...e, date: { ...e.date, selected: t.date } } : e, _n = Nr({
  state: Pt,
  dispatch: () => null
}), Yr = ({ children: e }) => {
  const [t, n] = xr($r, Pt);
  return /* @__PURE__ */ D.jsxDEV(_n.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, zr = ({ className: e }) => /* @__PURE__ */ D.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ D.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
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
), Hr = ({ className: e }) => /* @__PURE__ */ D.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ D.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }, void 0, !1, {
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
), Kr = ({ className: e }) => /* @__PURE__ */ D.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ D.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }, void 0, !1, {
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
), qr = ({ date: e, className: t }) => {
  const { state: n } = te();
  return /* @__PURE__ */ D.jsxDEV("span", { className: `
      ${n.options.classNames.todayBtnIcon || `
        ndp__today_btn-icon
        ndp-border ndp-border-gray-200 dark:ndp-border-slate-700
        ndp-px-1 ndp-py-0.5 ndp-text-xs
        ndp-text-gray-400 ndp-inset-2 ndp-rounded-full
        group-hover:ndp-text-primary group-hover:ndp-border-primary group-hover:ndp-opacity-50
      `}
      ${t || ""}
    `, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/icons/today-icon.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, globalThis);
}, Gr = [
  "dark",
  "value",
  "className",
  "onChange",
  "onSelect",
  "options"
], Xr = (e) => {
  var a;
  const { state: t } = te(), { numberTrans: n } = ye(), { omitKeys: r } = Ye(), o = r([...Gr, "type", "readOnly"], e);
  return /* @__PURE__ */ D.jsxDEV(
    "input",
    {
      type: "text",
      className: t.options.classNames.input || `
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
      value: n(((a = t.date.selected) == null ? void 0 : a.dateString) || ""),
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
function ke(e) {
  return Cn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (Cn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cn(e) {
  return e instanceof Node || e instanceof ue(e).Node;
}
function Q(e) {
  return e instanceof Element || e instanceof ue(e).Element;
}
function se(e) {
  return e instanceof HTMLElement || e instanceof ue(e).HTMLElement;
}
function Rt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function Ge(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = de(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eo(e) {
  return ["table", "td", "th"].includes(ke(e));
}
function Ot(e) {
  const t = At(), n = de(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function to(e) {
  let t = Pe(e);
  for (; se(t) && !Xe(t); ) {
    if (Ot(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function At() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xe(e) {
  return ["html", "body", "#document"].includes(ke(e));
}
function de(e) {
  return ue(e).getComputedStyle(e);
}
function mt(e) {
  return Q(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Pe(e) {
  if (ke(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Rt(e) && e.host || // Fallback.
    we(e)
  );
  return Rt(t) ? t.host : t;
}
function jn(e) {
  const t = Pe(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && Ge(t) ? t : jn(t);
}
function Ne(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = jn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ue(o);
  return a ? t.concat(s, s.visualViewport || [], Ge(o) ? o : [], s.frameElement && n ? Ne(s.frameElement) : []) : t.concat(o, Ne(o, [], n));
}
function Fe(e) {
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
  if (n && Rt(n)) {
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
function nn(e, t) {
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
function Et(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function We(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const lo = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function On(e) {
  return se(e) && e.matches(lo);
}
function Dt(e) {
  e.preventDefault(), e.stopPropagation();
}
const $e = Math.min, je = Math.max, lt = Math.round, rt = Math.floor, Se = (e) => ({
  x: e,
  y: e
});
function uo(e, t, n) {
  return je(e, $e(t, n));
}
function An(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Lt(e) {
  return e.split("-")[1];
}
function fo(e) {
  return e === "x" ? "y" : "x";
}
function Mn(e) {
  return e === "y" ? "height" : "width";
}
function Bt(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ln(e) {
  return fo(Bt(e));
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
function Bn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function rn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Bt(t), s = Ln(t), c = Mn(s), u = Mt(t), l = a === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[c] / 2 - o[c] / 2;
  let d;
  switch (u) {
    case "top":
      d = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Lt(t)) {
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
    x: f,
    y: p
  } = rn(l, r, u), m = r, d = {}, v = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: T,
      fn: w
    } = c[y], {
      x: h,
      y: M,
      data: R,
      reset: N
    } = await w({
      x: f,
      y: p,
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
    if (f = h ?? f, p = M ?? p, d = {
      ...d,
      [T]: {
        ...d[T],
        ...R
      }
    }, N && v <= 50) {
      v++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (l = N.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : N.rects), {
        x: f,
        y: p
      } = rn(l, m, u)), y = -1;
      continue;
    }
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: d
  };
}, on = (e) => ({
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
      padding: f = 0
    } = An(e, t) || {};
    if (l == null)
      return {};
    const p = mo(f), m = {
      x: n,
      y: r
    }, d = Ln(o), v = Mn(d), y = await s.getDimensions(l), T = d === "y", w = T ? "top" : "left", h = T ? "bottom" : "right", M = T ? "clientHeight" : "clientWidth", R = a.reference[v] + a.reference[d] - m[d] - a.floating[v], N = m[d] - a.reference[d], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let j = A ? A[M] : 0;
    (!j || !await (s.isElement == null ? void 0 : s.isElement(A))) && (j = c.floating[M] || a.floating[v]);
    const P = R / 2 - N / 2, I = j / 2 - y[v] / 2 - 1, z = $e(p[w], I), _ = $e(p[h], I), J = z, q = j - y[v] - _, L = j / 2 - y[v] / 2 + P, S = uo(J, L, q), O = !u.arrow && Lt(o) != null && L != S && a.reference[v] / 2 - (L < J ? z : _) - y[v] / 2 < 0, W = O ? L < J ? L - J : L - q : 0;
    return {
      [d]: m[d] + W,
      data: {
        [d]: S,
        centerOffset: L - S - W,
        ...O && {
          alignmentOffset: W
        }
      },
      reset: O
    };
  }
});
async function bo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Mt(n), c = Lt(n), u = Bt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = a && u ? -1 : 1, p = An(t, e);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return c && typeof v == "number" && (d = c === "end" ? v * -1 : v), u ? {
    x: d * f,
    y: m * l
  } : {
    x: m * l,
    y: d * f
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
function In(e) {
  const t = de(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = se(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = lt(n) !== a || lt(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function It(e) {
  return Q(e) ? e : e.contextElement;
}
function Ue(e) {
  const t = It(e);
  if (!se(t))
    return Se(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = In(t);
  let s = (a ? lt(n.width) : n.width) / r, c = (a ? lt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const go = /* @__PURE__ */ Se(0);
function Fn(e) {
  const t = ue(e);
  return !At() || !t.visualViewport ? go : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Oe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = It(e);
  let s = Se(1);
  t && (r ? Q(r) && (s = Ue(r)) : s = Ue(e));
  const c = yo(a, n, r) ? Fn(a) : Se(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, f = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = ue(a), d = r && Q(r) ? ue(r) : r;
    let v = m.frameElement;
    for (; v && r && d !== m; ) {
      const y = Ue(v), T = v.getBoundingClientRect(), w = de(v), h = T.left + (v.clientLeft + parseFloat(w.paddingLeft)) * y.x, M = T.top + (v.clientTop + parseFloat(w.paddingTop)) * y.y;
      u *= y.x, l *= y.y, f *= y.x, p *= y.y, u += h, l += M, v = ue(v).frameElement;
    }
  }
  return Bn({
    width: f,
    height: p,
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
  const o = se(n), a = we(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Se(1);
  const u = Se(0);
  if ((o || !o && r !== "fixed") && ((ke(n) !== "body" || Ge(a)) && (s = mt(n)), se(n))) {
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
function Wn(e) {
  return Oe(we(e)).left + mt(e).scrollLeft;
}
function Do(e) {
  const t = we(e), n = mt(e), r = e.ownerDocument.body, o = je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wn(e);
  const c = -n.scrollTop;
  return de(r).direction === "rtl" && (s += je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function No(e, t) {
  const n = ue(e), r = we(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = At();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function xo(e, t) {
  const n = Oe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = se(e) ? Ue(e) : Se(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function an(e, t, n) {
  let r;
  if (t === "viewport")
    r = No(e, n);
  else if (t === "document")
    r = Do(we(e));
  else if (Q(t))
    r = xo(t, n);
  else {
    const o = Fn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Bn(r);
}
function Vn(e, t) {
  const n = Pe(e);
  return n === t || !Q(n) || Xe(n) ? !1 : de(n).position === "fixed" || Vn(n, t);
}
function ko(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ne(e, [], !1).filter((c) => Q(c) && ke(c) !== "body"), o = null;
  const a = de(e).position === "fixed";
  let s = a ? Pe(e) : e;
  for (; Q(s) && !Xe(s); ) {
    const c = de(s), u = Ot(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ge(s) && !u && Vn(e, s)) ? r = r.filter((f) => f !== s) : o = c, s = Pe(s);
  }
  return t.set(e, r), r;
}
function So(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ko(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((l, f) => {
    const p = an(t, f, o);
    return l.top = je(p.top, l.top), l.right = $e(p.right, l.right), l.bottom = $e(p.bottom, l.bottom), l.left = je(p.left, l.left), l;
  }, an(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function To(e) {
  return In(e);
}
function Ro(e, t, n) {
  const r = se(t), o = we(t), a = n === "fixed", s = Oe(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Se(0);
  if (r || !r && !a)
    if ((ke(t) !== "body" || Ge(o)) && (c = mt(t)), r) {
      const l = Oe(t, !0, a, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      o && (u.x = Wn(o));
  return {
    x: s.left + c.scrollLeft - u.x,
    y: s.top + c.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function sn(e, t) {
  return !se(e) || de(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Un(e, t) {
  const n = ue(e);
  if (!se(e))
    return n;
  let r = sn(e, t);
  for (; r && eo(r) && de(r).position === "static"; )
    r = sn(r, t);
  return r && (ke(r) === "html" || ke(r) === "body" && de(r).position === "static" && !Ot(r)) ? n : r || to(e) || n;
}
const _o = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Un, a = this.getDimensions;
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
const $n = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wo,
  getDocumentElement: we,
  getClippingRect: So,
  getOffsetParent: Un,
  getElementRects: _o,
  getClientRects: Eo,
  getDimensions: To,
  getScale: Ue,
  isElement: Q,
  isRTL: Co
};
function jo(e, t) {
  let n = null, r;
  const o = we(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const {
      left: l,
      top: f,
      width: p,
      height: m
    } = e.getBoundingClientRect();
    if (c || t(), !p || !m)
      return;
    const d = rt(f), v = rt(o.clientWidth - (l + p)), y = rt(o.clientHeight - (f + m)), T = rt(l), h = {
      rootMargin: -d + "px " + -v + "px " + -y + "px " + -T + "px",
      threshold: je(0, $e(1, u)) || 1
    };
    let M = !0;
    function R(N) {
      const A = N[0].intersectionRatio;
      if (A !== u) {
        if (!M)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      M = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, h);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Po(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = It(e), f = o || a ? [...l ? Ne(l) : [], ...Ne(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const p = l && c ? jo(l, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((w) => {
    let [h] = w;
    h && h.target === l && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      d && d.observe(t);
    })), n();
  }), l && !u && d.observe(l), d.observe(t));
  let v, y = u ? Oe(e) : null;
  u && T();
  function T() {
    const w = Oe(e);
    y && (w.x !== y.x || w.y !== y.y || w.width !== y.width || w.height !== y.height) && n(), y = w, v = requestAnimationFrame(T);
  }
  return n(), () => {
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), p && p(), d && d.disconnect(), d = null, u && cancelAnimationFrame(v);
  };
}
const Oo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $n,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ho(e, t, {
    ...o,
    platform: a
  });
}, Ao = (e) => {
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
      return r && t(r) ? r.current != null ? on({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? on({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var st = typeof document < "u" ? Dn : he;
function ut(e, t) {
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
        if (!ut(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !ut(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Yn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function cn(e, t) {
  const n = Yn(e);
  return Math.round(t * n) / n;
}
function ln(e) {
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
  } = e, [f, p] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = g.useState(r);
  ut(m, r) || d(r);
  const [v, y] = g.useState(null), [T, w] = g.useState(null), h = g.useCallback((O) => {
    O != A.current && (A.current = O, y(O));
  }, [y]), M = g.useCallback((O) => {
    O !== j.current && (j.current = O, w(O));
  }, [w]), R = a || v, N = s || T, A = g.useRef(null), j = g.useRef(null), P = g.useRef(f), I = ln(u), z = ln(o), _ = g.useCallback(() => {
    if (!A.current || !j.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: m
    };
    z.current && (O.platform = z.current), Oo(A.current, j.current, O).then((W) => {
      const x = {
        ...W,
        isPositioned: !0
      };
      J.current && !ut(P.current, x) && (P.current = x, kr.flushSync(() => {
        p(x);
      }));
    });
  }, [m, t, n, z]);
  st(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, p((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [l]);
  const J = g.useRef(!1);
  st(() => (J.current = !0, () => {
    J.current = !1;
  }), []), st(() => {
    if (R && (A.current = R), N && (j.current = N), R && N) {
      if (I.current)
        return I.current(R, N, _);
      _();
    }
  }, [R, N, _, I]);
  const q = g.useMemo(() => ({
    reference: A,
    floating: j,
    setReference: h,
    setFloating: M
  }), [h, M]), L = g.useMemo(() => ({
    reference: R,
    floating: N
  }), [R, N]), S = g.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return O;
    const W = cn(L.floating, f.x), x = cn(L.floating, f.y);
    return c ? {
      ...O,
      transform: "translate(" + W + "px, " + x + "px)",
      ...Yn(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: x
    };
  }, [n, c, L.floating, f.x, f.y]);
  return g.useMemo(() => ({
    ...f,
    update: _,
    refs: q,
    elements: L,
    floatingStyles: S
  }), [f, _, q, L, S]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Lo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], _t = /* @__PURE__ */ Lo.join(","), zn = typeof Element > "u", Ke = zn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, dt = !zn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, ft = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Bo = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Io = function(t, n, r) {
  if (ft(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(_t));
  return n && Ke.call(t, _t) && o.unshift(t), o = o.filter(r), o;
}, Fo = function e(t, n, r) {
  for (var o = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!ft(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, l = e(u, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var f = Ke.call(s, _t);
        f && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), m = !ft(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (p && m) {
          var d = e(p === !0 ? s.children : p.children, !0, r);
          r.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: s,
            candidates: d
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return o;
}, Hn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Kn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Bo(t)) && !Hn(t) ? 0 : t.tabIndex;
}, Wo = function(t, n) {
  var r = Kn(t);
  return r < 0 && n && !Hn(t) ? 0 : r;
}, Vo = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, qn = function(t) {
  return t.tagName === "INPUT";
}, Uo = function(t) {
  return qn(t) && t.type === "hidden";
}, $o = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Yo = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, zo = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || dt(t), r = function(c) {
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
  var a = Yo(o, t.form);
  return !a || a === t;
}, Ho = function(t) {
  return qn(t) && t.type === "radio";
}, Ko = function(t) {
  return Ho(t) && !zo(t);
}, qo = function(t) {
  var n, r = t && dt(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (r && r !== t) {
    var s, c, u;
    for (a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !a && o; ) {
      var l, f, p;
      r = dt(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((f = o) !== null && f !== void 0 && (p = f.ownerDocument) !== null && p !== void 0 && p.contains(o));
    }
  }
  return a;
}, un = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Go = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = Ke.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (Ke.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = dt(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return un(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (qo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return un(t);
  return !1;
}, Xo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Ke.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
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
  ft(n) || Uo(n) || Go(n, t) || // For a details element with a summary, the summary element gets the focus
  $o(n) || Xo(n));
}, dn = function(t, n) {
  return !(Ko(n) || Kn(n) < 0 || !Jo(t, n));
}, Zo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Qo = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, a) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = Wo(c, s), l = s ? e(o.candidates) : c;
    u === 0 ? s ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: a,
      tabIndex: u,
      item: o,
      isScope: s,
      content: l
    });
  }), r.sort(Vo).reduce(function(o, a) {
    return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o;
  }, []).concat(n);
}, Gn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fo([t], n.includeContainer, {
    filter: dn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zo
  }) : r = Io(t, n.includeContainer, dn.bind(null, n)), Qo(r);
};
const ea = g[/* @__PURE__ */ "useInsertionEffect".toString()], ta = ea || ((e) => e());
function Ve(e) {
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
let fn = 0;
function Re(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(fn);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? a() : fn = requestAnimationFrame(a);
}
var me = typeof document < "u" ? Dn : he;
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
let Nt = !1, na = 0;
const pn = () => "floating-ui-" + na++;
function ra() {
  const [e, t] = g.useState(() => Nt ? pn() : void 0);
  return me(() => {
    e == null && t(pn());
  }, []), g.useEffect(() => {
    Nt || (Nt = !0);
  }, []), e;
}
const oa = g[/* @__PURE__ */ "useId".toString()], ht = oa || ra, aa = /* @__PURE__ */ g.forwardRef(function(t, n) {
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
    staticOffset: f,
    stroke: p,
    d: m,
    style: {
      transform: d,
      ...v
    } = {},
    ...y
  } = t;
  process.env.NODE_ENV !== "production" && (n || console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component."));
  const T = ht();
  if (!o)
    return null;
  l *= 2;
  const w = l / 2, h = s / 2 * (u / -8 + 1), M = c / 2 * u / 4, [R, N] = r.split("-"), A = $n.isRTL(o), j = !!m, P = R === "top" || R === "bottom", I = f && N === "end" ? "bottom" : "top";
  let z = f && N === "end" ? "right" : "left";
  f && A && (z = N === "end" ? "left" : "right");
  const _ = (a == null ? void 0 : a.x) != null ? f || a.x : "", J = (a == null ? void 0 : a.y) != null ? f || a.y : "", q = m || "M0,0" + (" H" + s) + (" L" + (s - h) + "," + (c - M)) + (" Q" + s / 2 + "," + c + " " + h + "," + (c - M)) + " Z", L = {
    top: j ? "rotate(180deg)" : "",
    left: j ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: j ? "" : "rotate(180deg)",
    right: j ? "rotate(-90deg)" : "rotate(90deg)"
  }[R];
  return /* @__PURE__ */ g.createElement("svg", qe({}, y, {
    "aria-hidden": !0,
    ref: n,
    width: j ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [z]: _,
      [I]: J,
      [R]: P || j ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + L + (d ?? ""),
      ...v
    }
  }), l > 0 && /* @__PURE__ */ g.createElement("path", {
    clipPath: "url(#" + T + ")",
    fill: "none",
    stroke: p,
    strokeWidth: l + (m ? 0 : 1),
    d: q
  }), /* @__PURE__ */ g.createElement("path", {
    stroke: l && !m ? y.fill : "none",
    d: q
  }), /* @__PURE__ */ g.createElement("clipPath", {
    id: T
  }, /* @__PURE__ */ g.createElement("rect", {
    x: -w,
    y: w * (j ? -1 : 1),
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
}, Ft = () => g.useContext(ca);
function pt(e) {
  return "data-floating-ui-" + e;
}
function Ce(e) {
  const t = Nn(e);
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
function He(e, t) {
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
let Be = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {}, xt = 0;
const da = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Xn = (e) => e && (e.host || Xn(e.parentNode)), fa = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Xn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function pa(e, t, n, r) {
  const o = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = fa(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), l = [];
  at[o] || (at[o] = /* @__PURE__ */ new WeakMap());
  const f = at[o];
  s.forEach(p), m(t), c.clear();
  function p(d) {
    !d || c.has(d) || (c.add(d), d.parentNode && p(d.parentNode));
  }
  function m(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, (v) => {
      if (c.has(v))
        m(v);
      else {
        const y = a ? v.getAttribute(a) : null, T = y !== null && y !== "false", w = (Be.get(v) || 0) + 1, h = (f.get(v) || 0) + 1;
        Be.set(v, w), f.set(v, h), l.push(v), w === 1 && T && ot.add(v), h === 1 && v.setAttribute(o, ""), !T && a && v.setAttribute(a, "true");
      }
    });
  }
  return xt++, () => {
    l.forEach((d) => {
      const v = (Be.get(d) || 0) - 1, y = (f.get(d) || 0) - 1;
      Be.set(d, v), f.set(d, y), v || (!ot.has(d) && a && d.removeAttribute(a), ot.delete(d)), y || d.removeAttribute(o);
    }), xt--, xt || (Be = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {});
  };
}
function mn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = be(e[0]).body;
  return pa(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Jn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Zn(e, t) {
  const n = Gn(e, Jn());
  t === "prev" && n.reverse();
  const r = n.indexOf(Fe(be(e)));
  return n.slice(r + 1)[0];
}
function ma() {
  return Zn(document.body, "next");
}
function ha() {
  return Zn(document.body, "prev");
}
function hn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !le(n, r);
}
const Qn = {
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
function bn(e) {
  e.key === "Tab" && (e.target, clearTimeout(ba));
}
const vn = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const [r, o] = g.useState();
  me(() => (so() && o("button"), document.addEventListener("keydown", bn), () => {
    document.removeEventListener("keydown", bn);
  }), []);
  const a = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [pt("focus-guard")]: "",
    style: Qn
  };
  return /* @__PURE__ */ g.createElement("span", qe({}, t, a));
}), va = /* @__PURE__ */ g.createContext(null), ga = () => g.useContext(va), ya = /* @__PURE__ */ g.forwardRef(function(t, n) {
  return /* @__PURE__ */ g.createElement("button", qe({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: Qn
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
    closeOnFocusOut: f = !0
  } = e, {
    open: p,
    refs: m,
    nodeId: d,
    onOpenChange: v,
    events: y,
    dataRef: T,
    elements: {
      domReference: w,
      floating: h
    }
  } = t, M = typeof s == "number" && s < 0, R = (w == null ? void 0 : w.getAttribute("role")) === "combobox" && On(w) && M, N = R ? !1 : u, A = da() ? a : !0, j = Ce(o), P = Ce(s), I = Ce(c), z = Ft(), _ = ga(), J = g.useRef(null), q = g.useRef(null), L = g.useRef(!1), S = g.useRef(null), O = g.useRef(!1), W = _ != null, x = g.useCallback(function(V) {
    return V === void 0 && (V = h), V ? Gn(V, Jn()) : [];
  }, [h]), ne = g.useCallback((V) => {
    const U = x(V);
    return j.current.map((k) => w && k === "reference" ? w : h && k === "floating" ? h : U).filter(Boolean).flat();
  }, [w, h, j, x]);
  g.useEffect(() => {
    if (r || !N)
      return;
    function V(k) {
      if (k.key === "Tab") {
        le(h, Fe(be(h))) && x().length === 0 && !R && Dt(k);
        const B = ne(), G = We(k);
        j.current[0] === "reference" && G === w && (Dt(k), k.shiftKey ? Re(B[B.length - 1]) : Re(B[1])), j.current[1] === "floating" && G === h && k.shiftKey && (Dt(k), Re(B[0]));
      }
    }
    const U = be(h);
    return U.addEventListener("keydown", V), () => {
      U.removeEventListener("keydown", V);
    };
  }, [r, w, h, N, j, m, R, x, ne]), g.useEffect(() => {
    if (r || !f)
      return;
    function V() {
      O.current = !0, setTimeout(() => {
        O.current = !1;
      });
    }
    function U(k) {
      const B = k.relatedTarget;
      queueMicrotask(() => {
        const G = !(le(w, B) || le(h, B) || le(B, h) || le(_ == null ? void 0 : _.portalNode, B) || B != null && B.hasAttribute(pt("focus-guard")) || z && (He(z.nodesRef.current, d).find((ee) => {
          var re, ie;
          return le((re = ee.context) == null ? void 0 : re.elements.floating, B) || le((ie = ee.context) == null ? void 0 : ie.elements.domReference, B);
        }) || ua(z.nodesRef.current, d).find((ee) => {
          var re, ie;
          return ((re = ee.context) == null ? void 0 : re.elements.floating) === B || ((ie = ee.context) == null ? void 0 : ie.elements.domReference) === B;
        })));
        B && G && !O.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        B !== S.current && (L.current = !0, v(!1, k));
      });
    }
    if (h && se(w))
      return w.addEventListener("focusout", U), w.addEventListener("pointerdown", V), !N && h.addEventListener("focusout", U), () => {
        w.removeEventListener("focusout", U), w.removeEventListener("pointerdown", V), !N && h.removeEventListener("focusout", U);
      };
  }, [r, w, h, N, d, z, _, v, f]), g.useEffect(() => {
    var V;
    if (r)
      return;
    const U = Array.from((_ == null || (V = _.portalNode) == null ? void 0 : V.querySelectorAll("[" + pt("portal") + "]")) || []);
    if (h) {
      const k = [h, ...U, J.current, q.current, j.current.includes("reference") || R ? w : null].filter((G) => G != null), B = u || R ? mn(k, A, !A) : mn(k);
      return () => {
        B();
      };
    }
  }, [r, w, h, u, j, _, R, A]), me(() => {
    if (r || !h)
      return;
    const V = be(h), U = Fe(V);
    queueMicrotask(() => {
      const k = ne(h), B = P.current, G = (typeof B == "number" ? k[B] : B.current) || h, ee = le(h, U);
      !M && !ee && p && Re(G, {
        preventScroll: G === h
      });
    });
  }, [r, p, h, M, ne, P]), me(() => {
    if (r || !h)
      return;
    let V = !1;
    const U = be(h), k = Fe(U), B = T.current;
    S.current = k;
    function G(ee) {
      let {
        reason: re,
        event: ie,
        nested: De
      } = ee;
      re === "escape-key" && m.domReference.current && (S.current = m.domReference.current), re === "hover" && ie.type === "mouseleave" && (L.current = !0), re === "outside-press" && (De ? (L.current = !1, V = !0) : L.current = !(oo(ie) || ao(ie)));
    }
    return y.on("openchange", G), () => {
      y.off("openchange", G);
      const ee = Fe(U), re = le(h, ee) || z && He(z.nodesRef.current, d).some((De) => {
        var Je;
        return le((Je = De.context) == null ? void 0 : Je.elements.floating, ee);
      });
      (re || B.openEvent && ["click", "mousedown"].includes(B.openEvent.type)) && m.domReference.current && (S.current = m.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      I.current && se(S.current) && !L.current && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (!(k !== ee && ee !== U.body) || re) && Re(S.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: V
      });
    };
  }, [r, h, I, T, m, y, z, d]), me(() => {
    if (!(r || !_))
      return _.setFocusManagerState({
        modal: N,
        closeOnFocusOut: f,
        open: p,
        onOpenChange: v,
        refs: m
      }), () => {
        _.setFocusManagerState(null);
      };
  }, [r, _, N, p, v, m, f]), me(() => {
    if (r || !h || typeof MutationObserver != "function" || M)
      return;
    const V = () => {
      const k = h.getAttribute("tabindex");
      j.current.includes("floating") || Fe(be(h)) !== m.domReference.current && x().length === 0 ? k !== "0" && h.setAttribute("tabindex", "0") : k !== "-1" && h.setAttribute("tabindex", "-1");
    };
    V();
    const U = new MutationObserver(V);
    return U.observe(h, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      U.disconnect();
    };
  }, [r, h, m, j, x, M]);
  function Ee(V) {
    return r || !l || !N ? null : /* @__PURE__ */ g.createElement(ya, {
      ref: V === "start" ? J : q,
      onClick: (U) => v(!1, U.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const pe = !r && A && (W || N);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, pe && /* @__PURE__ */ g.createElement(vn, {
    "data-type": "inside",
    ref: _ == null ? void 0 : _.beforeInsideRef,
    onFocus: (V) => {
      if (N) {
        const k = ne();
        Re(o[0] === "reference" ? k[0] : k[k.length - 1]);
      } else if (_ != null && _.preserveTabOrder && _.portalNode)
        if (L.current = !1, hn(V, _.portalNode)) {
          const k = ma() || w;
          k == null || k.focus();
        } else {
          var U;
          (U = _.beforeOutsideRef.current) == null || U.focus();
        }
    }
  }), !R && Ee("start"), n, Ee("end"), pe && /* @__PURE__ */ g.createElement(vn, {
    "data-type": "inside",
    ref: _ == null ? void 0 : _.afterInsideRef,
    onFocus: (V) => {
      if (N)
        Re(ne()[0]);
      else if (_ != null && _.preserveTabOrder && _.portalNode)
        if (f && (L.current = !0), hn(V, _.portalNode)) {
          const k = ha() || w;
          k == null || k.focus();
        } else {
          var U;
          (U = _.afterOutsideRef.current) == null || U.focus();
        }
    }
  }));
}
function gn(e) {
  return se(e.target) && e.target.tagName === "BUTTON";
}
function yn(e) {
  return On(e);
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
    keyboardHandlers: f = !0
  } = t, p = g.useRef(), m = g.useRef(!1);
  return g.useMemo(() => s ? {
    reference: {
      onPointerDown(d) {
        p.current = d.pointerType;
      },
      onMouseDown(d) {
        d.button === 0 && (nn(p.current, !0) && l || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, d.nativeEvent, "click") : (d.preventDefault(), r(!0, d.nativeEvent, "click"))));
      },
      onClick(d) {
        if (c === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        nn(p.current, !0) && l || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, d.nativeEvent, "click") : r(!0, d.nativeEvent, "click"));
      },
      onKeyDown(d) {
        p.current = void 0, !(d.defaultPrevented || !f || gn(d)) && (d.key === " " && !yn(a) && (d.preventDefault(), m.current = !0), d.key === "Enter" && r(!(n && u), d.nativeEvent, "click"));
      },
      onKeyUp(d) {
        d.defaultPrevented || !f || gn(d) || yn(a) || d.key === " " && m.current && (m.current = !1, r(!(n && u), d.nativeEvent, "click"));
      }
    }
  } : {}, [s, o, c, l, f, a, u, n, r]);
}
const Da = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Na = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, wn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function xa(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    nodeId: o,
    elements: {
      reference: a,
      domReference: s,
      floating: c
    },
    dataRef: u
  } = e, {
    enabled: l = !0,
    escapeKey: f = !0,
    outsidePress: p = !0,
    outsidePressEvent: m = "pointerdown",
    referencePress: d = !1,
    referencePressEvent: v = "pointerdown",
    ancestorScroll: y = !1,
    bubbles: T,
    capture: w
  } = t, h = Ft(), M = Ve(typeof p == "function" ? p : () => !1), R = typeof p == "function" ? M : p, N = g.useRef(!1), A = g.useRef(!1), {
    escapeKey: j,
    outsidePress: P
  } = wn(T), {
    escapeKey: I,
    outsidePress: z
  } = wn(w), _ = Ve((S) => {
    if (!n || !l || !f || S.key !== "Escape")
      return;
    const O = h ? He(h.nodesRef.current, o) : [];
    if (!j && (S.stopPropagation(), O.length > 0)) {
      let W = !0;
      if (O.forEach((x) => {
        var ne;
        if ((ne = x.context) != null && ne.open && !x.context.dataRef.current.__escapeKeyBubbles) {
          W = !1;
          return;
        }
      }), !W)
        return;
    }
    r(!1, io(S) ? S.nativeEvent : S, "escape-key");
  }), J = Ve((S) => {
    var O;
    const W = () => {
      var x;
      _(S), (x = We(S)) == null || x.removeEventListener("keydown", W);
    };
    (O = We(S)) == null || O.addEventListener("keydown", W);
  }), q = Ve((S) => {
    const O = N.current;
    N.current = !1;
    const W = A.current;
    if (A.current = !1, m === "click" && W || O || typeof R == "function" && !R(S))
      return;
    const x = We(S), ne = "[" + pt("inert") + "]", Ee = be(c).querySelectorAll(ne);
    let pe = Q(x) ? x : null;
    for (; pe && !Xe(pe); ) {
      const k = Pe(pe);
      if (k === be(c).body || !Q(k))
        break;
      pe = k;
    }
    if (Ee.length && Q(x) && !co(x) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !le(x, c) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(Ee).every((k) => !le(pe, k)))
      return;
    if (se(x) && c) {
      const k = x.clientWidth > 0 && x.scrollWidth > x.clientWidth, B = x.clientHeight > 0 && x.scrollHeight > x.clientHeight;
      let G = B && S.offsetX > x.clientWidth;
      if (B && de(x).direction === "rtl" && (G = S.offsetX <= x.offsetWidth - x.clientWidth), G || k && S.offsetY > x.clientHeight)
        return;
    }
    const V = h && He(h.nodesRef.current, o).some((k) => {
      var B;
      return Et(S, (B = k.context) == null ? void 0 : B.elements.floating);
    });
    if (Et(S, c) || Et(S, s) || V)
      return;
    const U = h ? He(h.nodesRef.current, o) : [];
    if (U.length > 0) {
      let k = !0;
      if (U.forEach((B) => {
        var G;
        if ((G = B.context) != null && G.open && !B.context.dataRef.current.__outsidePressBubbles) {
          k = !1;
          return;
        }
      }), !k)
        return;
    }
    r(!1, S, "outside-press");
  }), L = Ve((S) => {
    var O;
    const W = () => {
      var x;
      q(S), (x = We(S)) == null || x.removeEventListener(m, W);
    };
    (O = We(S)) == null || O.addEventListener(m, W);
  });
  return g.useEffect(() => {
    if (!n || !l)
      return;
    u.current.__escapeKeyBubbles = j, u.current.__outsidePressBubbles = P;
    function S(x) {
      r(!1, x, "ancestor-scroll");
    }
    const O = be(c);
    f && O.addEventListener("keydown", I ? J : _, I), R && O.addEventListener(m, z ? L : q, z);
    let W = [];
    return y && (Q(s) && (W = Ne(s)), Q(c) && (W = W.concat(Ne(c))), !Q(a) && a && a.contextElement && (W = W.concat(Ne(a.contextElement)))), W = W.filter((x) => {
      var ne;
      return x !== ((ne = O.defaultView) == null ? void 0 : ne.visualViewport);
    }), W.forEach((x) => {
      x.addEventListener("scroll", S, {
        passive: !0
      });
    }), () => {
      f && O.removeEventListener("keydown", I ? J : _, I), R && O.removeEventListener(m, z ? L : q, z), W.forEach((x) => {
        x.removeEventListener("scroll", S);
      });
    };
  }, [u, c, s, a, f, R, m, n, r, y, l, j, P, _, I, J, q, z, L]), g.useEffect(() => {
    N.current = !1;
  }, [R, m]), g.useMemo(() => l ? {
    reference: {
      onKeyDown: _,
      [Da[v]]: (S) => {
        d && r(!1, S.nativeEvent, "reference-press");
      }
    },
    floating: {
      onKeyDown: _,
      onMouseDown() {
        A.current = !0;
      },
      onMouseUp() {
        A.current = !0;
      },
      [Na[m]]: () => {
        N.current = !0;
      }
    }
  } : {}, [l, d, m, v, r, _]);
}
let Ct;
process.env.NODE_ENV !== "production" && (Ct = /* @__PURE__ */ new Set());
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
    const P = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !Q(e.elements.reference)) {
      var s;
      if (!((s = Ct) != null && s.has(P))) {
        var c;
        (c = Ct) == null || c.add(P), console.error(P);
      }
    }
  }
  const [u, l] = g.useState(null), f = ((t = e.elements) == null ? void 0 : t.reference) || u, p = Mo(e), m = Ft(), d = la() != null, v = Ve((P, I, z) => {
    P && (T.current.openEvent = I), w.emit("openchange", {
      open: P,
      event: I,
      reason: z,
      nested: d
    }), r == null || r(P, I, z);
  }), y = g.useRef(null), T = g.useRef({}), w = g.useState(() => sa())[0], h = ht(), M = g.useCallback((P) => {
    const I = Q(P) ? {
      getBoundingClientRect: () => P.getBoundingClientRect(),
      contextElement: P
    } : P;
    p.refs.setReference(I);
  }, [p.refs]), R = g.useCallback((P) => {
    (Q(P) || P === null) && (y.current = P, l(P)), (Q(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    P !== null && !Q(P)) && p.refs.setReference(P);
  }, [p.refs]), N = g.useMemo(() => ({
    ...p.refs,
    setReference: R,
    setPositionReference: M,
    domReference: y
  }), [p.refs, R, M]), A = g.useMemo(() => ({
    ...p.elements,
    domReference: f
  }), [p.elements, f]), j = g.useMemo(() => ({
    ...p,
    refs: N,
    elements: A,
    dataRef: T,
    nodeId: o,
    floatingId: h,
    events: w,
    open: n,
    onOpenChange: v
  }), [p, o, h, w, n, v, N, A]);
  return me(() => {
    const P = m == null ? void 0 : m.nodesRef.current.find((I) => I.id === o);
    P && (P.context = j);
  }), g.useMemo(() => ({
    ...p,
    context: j,
    refs: N,
    elements: A
  }), [p, N, A, j]);
}
function kt(e, t, n) {
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
            for (var f, p = arguments.length, m = new Array(p), d = 0; d < p; d++)
              m[d] = arguments[d];
            return (f = r.get(c)) == null ? void 0 : f.map((v) => v(...m)).find((v) => v !== void 0);
          };
        }
      } else
        o[c] = u;
    }), o), {})
  };
}
function Sa(e) {
  e === void 0 && (e = []);
  const t = e, n = g.useCallback(
    (a) => kt(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = g.useCallback(
    (a) => kt(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = g.useCallback(
    (a) => kt(a, e, "item"),
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
function Ta(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: a = "dialog"
  } = t, s = ht();
  return g.useMemo(() => {
    if (!o)
      return {};
    const c = {
      id: r,
      ...a !== "label" && {
        role: a
      }
    };
    return a === "tooltip" || a === "label" ? {
      reference: {
        ["aria-" + (a === "label" ? "labelledby" : "describedby")]: n ? r : void 0
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
    };
  }, [o, a, n, r, s]);
}
const En = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function Ie(e, t) {
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
function _a(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, s = (typeof o == "number" ? o : o.close) || 0, [c, u] = g.useState(!1), [l, f] = g.useState("unmounted"), p = Ra(n, s);
  return me(() => {
    c && !p && f("unmounted");
  }, [c, p]), me(() => {
    if (r)
      if (n) {
        f("initial");
        const m = requestAnimationFrame(() => {
          f("open");
        });
        return () => {
          cancelAnimationFrame(m);
        };
      } else
        u(!0), f("close");
  }, [n, r]), {
    isMounted: p,
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
  }), [u, c]), f = typeof s == "number", p = (f ? s : s.open) || 0, m = (f ? s : s.close) || 0, [d, v] = g.useState(() => ({
    ...Ie(a, l),
    ...Ie(n, l)
  })), {
    isMounted: y,
    status: T
  } = _a(e, {
    duration: s
  }), w = Ce(n), h = Ce(r), M = Ce(o), R = Ce(a);
  return me(() => {
    const N = Ie(w.current, l), A = Ie(M.current, l), j = Ie(R.current, l), P = Ie(h.current, l) || Object.keys(N).reduce((I, z) => (I[z] = "", I), {});
    if (T === "initial" && v((I) => ({
      transitionProperty: I.transitionProperty,
      ...j,
      ...N
    })), T === "open" && v({
      transitionProperty: Object.keys(P).map(En).join(","),
      transitionDuration: p + "ms",
      ...j,
      ...P
    }), T === "close") {
      const I = A || N;
      v({
        transitionProperty: Object.keys(I).map(En).join(","),
        transitionDuration: m + "ms",
        ...j,
        ...I
      });
    }
  }, [m, M, w, h, R, p, T, l]), {
    isMounted: y,
    styles: d
  };
}
const _e = 7, ja = 2, Pa = (e) => {
  var R, N;
  const { state: t, setData: n } = te(), r = Nn(null), {
    refs: o,
    context: a,
    floatingStyles: s,
    middlewareData: c
  } = ka({
    open: t.isCalendarOpen,
    onOpenChange: (A) => {
      n({ type: H.SET_CALENDAR_OPEN, isOpen: A });
    },
    middleware: [
      Ao({
        element: r
      }),
      vo(_e + ja)
    ],
    whileElementsMounted: Po
  }), u = ((R = c.arrow) == null ? void 0 : R.x) ?? 0, l = ((N = c.arrow) == null ? void 0 : N.y) ?? 0, f = u + _e / 2, p = l + _e, { isMounted: m, styles: d } = Ca(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: A }) => ({
      transformOrigin: {
        top: `${f}px calc(100% + ${_e}px)`,
        bottom: `${f}px ${-_e}px`,
        left: `calc(100% + ${_e}px) ${p}px`,
        right: `${-_e}px ${p}px`
      }[A]
    })
  }), v = Ea(a), y = xa(a), T = Ta(a), { getReferenceProps: w, getFloatingProps: h } = Sa([v, y, T]), M = ht();
  return /* @__PURE__ */ D.jsxDEV(D.Fragment, { children: [
    /* @__PURE__ */ D.jsxDEV("div", { ref: o.setReference, ...w(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, globalThis),
    t.isCalendarOpen && /* @__PURE__ */ D.jsxDEV(wa, { context: a, modal: !1, children: m ? /* @__PURE__ */ D.jsxDEV("div", { ref: o.setFloating, style: s, "aria-labelledby": M, ...h(), children: /* @__PURE__ */ D.jsxDEV("div", { style: d, children: [
      /* @__PURE__ */ D.jsxDEV(
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
          lineNumber: 89,
          columnNumber: 17
        },
        globalThis
      ),
      e.calendar
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 88,
      columnNumber: 15
    }, globalThis) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, globalThis) : /* @__PURE__ */ D.jsxDEV("div", {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 97,
      columnNumber: 15
    }, globalThis) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, globalThis);
}, Oa = ({ ...e }) => {
  var o, a, s, c, u, l;
  const { state: t, setData: n } = te(), { parseBsDate: r } = Ae();
  return he(() => {
    var f;
    n({
      type: H.SET_CLASSES,
      classNames: {
        input: e.className || t.options.classNames.input,
        ...(f = e.options) == null ? void 0 : f.classNames
      }
    });
  }, [e.className, (o = e.options) == null ? void 0 : o.classNames]), he(() => {
    n({
      type: H.SET_THEME,
      theme: e.dark ? it.DARK : it.LIGHT
    });
  }, [e.dark]), he(() => {
    n({
      type: H.SET_EVENTS,
      events: {
        onChange: e.onChange || t.events.onChange,
        onSelect: e.onSelect || t.events.onSelect
      }
    });
  }, [e.onChange, e.onSelect]), he(() => {
    var f, p;
    n({
      type: H.SET_LOCALE,
      locale: {
        calendar: ((f = e.options) == null ? void 0 : f.locale) || t.locale.calendar,
        value: ((p = e.options) == null ? void 0 : p.valueLocale) || t.locale.value
      }
    });
  }, [(a = e.options) == null ? void 0 : a.locale, (s = e.options) == null ? void 0 : s.valueLocale]), he(() => {
    var f;
    n({
      type: H.SET_COLORS,
      colors: { ...t.options.colors, ...(f = e.options) == null ? void 0 : f.colors }
    });
  }, [(c = e.options) == null ? void 0 : c.colors]), he(() => {
    var f;
    n({
      type: H.SET_SEPARATOR,
      separator: ((f = e.options) == null ? void 0 : f.dateSeparator) || t.options.dateSeparator
    });
  }, [(u = e.options) == null ? void 0 : u.dateSeparator]), he(() => {
    var f, p;
    n({
      type: H.SET_CLOSE_ON_SELECT,
      closeOnSelect: typeof ((f = e.options) == null ? void 0 : f.closeOnSelect) > "u" ? t.options.closeOnSelect : (p = e.options) == null ? void 0 : p.closeOnSelect
    });
  }, [(l = e.options) == null ? void 0 : l.closeOnSelect]), he(() => {
    const f = Sn(e.value || ""), p = f ? r(f) : void 0, m = r(f || xe(/* @__PURE__ */ new Date()));
    n({ type: H.SET_CALENDAR_DATE, date: m }), n({ type: H.SET_SELECTED_DATE, date: p });
  }, [e.value]), /* @__PURE__ */ D.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.options.classNames.wrapper || ""}`,
      "data-theme": t.options.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ D.jsxDEV(Pa, { input: /* @__PURE__ */ D.jsxDEV(Xr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 93,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ D.jsxDEV(Wr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 93,
        columnNumber: 69
      }, globalThis) }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
      lineNumber: 87,
      columnNumber: 5
    },
    globalThis
  );
}, Ma = (e) => /* @__PURE__ */ D.jsxDEV(Yr, { children: /* @__PURE__ */ D.jsxDEV(Oa, { ...e }, void 0, !1, {
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
