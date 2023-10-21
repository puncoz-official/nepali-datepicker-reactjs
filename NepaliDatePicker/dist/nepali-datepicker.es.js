import * as g from "react";
import wr, { useContext as Er, useCallback as ge, useMemo as se, useState as Dr, createContext as Nr, useReducer as xr, useLayoutEffect as En, useEffect as be, useRef as Dn } from "react";
import * as kr from "react-dom";
var kt = { exports: {} }, et = {};
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
function Sr() {
  if (Zt)
    return et;
  Zt = 1;
  var e = Symbol.for("react.fragment");
  return et.Fragment = e, et.jsxDEV = void 0, et;
}
var tt = {};
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
    var e = wr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function k(i) {
      if (i === null || typeof i != "object")
        return null;
      var h = v && i[v] || i[y];
      return typeof h == "function" ? h : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(i) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          E[S - 1] = arguments[S];
        C("error", i, E);
      }
    }
    function C(i, h, E) {
      {
        var S = w.ReactDebugCurrentFrame, V = S.getStackAddendum();
        V !== "" && (h += "%s", E = E.concat([V]));
        var G = E.map(function(I) {
          return String(I);
        });
        G.unshift("Warning: " + h), Function.prototype.apply.call(console[i], console, G);
      }
    }
    var T = !1, x = !1, j = !1, D = !1, H = !1, X;
    X = Symbol.for("react.module.reference");
    function J(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || H || i === o || i === l || i === f || D || i === d || T || x || j || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === p || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === X || i.getModuleId !== void 0));
    }
    function R(i, h, E) {
      var S = i.displayName;
      if (S)
        return S;
      var V = h.displayName || h.name || "";
      return V !== "" ? E + "(" + V + ")" : E;
    }
    function Q(i) {
      return i.displayName || "Context";
    }
    function Y(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
            var h = i;
            return Q(h) + ".Consumer";
          case s:
            var E = i;
            return Q(E._context) + ".Provider";
          case u:
            return R(i, i.render, "ForwardRef");
          case p:
            var S = i.displayName || null;
            return S !== null ? S : Y(i.type) || "Memo";
          case m: {
            var V = i, G = V._payload, I = V._init;
            try {
              return Y(I(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, Z = 0, U, _, F, $, P, le, B;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function A() {
      {
        if (Z === 0) {
          U = console.log, _ = console.info, F = console.warn, $ = console.error, P = console.group, le = console.groupCollapsed, B = console.groupEnd;
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
        Z++;
      }
    }
    function W() {
      {
        if (Z--, Z === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, i, {
              value: U
            }),
            info: O({}, i, {
              value: _
            }),
            warn: O({}, i, {
              value: F
            }),
            error: O({}, i, {
              value: $
            }),
            group: O({}, i, {
              value: P
            }),
            groupCollapsed: O({}, i, {
              value: le
            }),
            groupEnd: O({}, i, {
              value: B
            })
          });
        }
        Z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = w.ReactCurrentDispatcher, q;
    function ee(i, h, E) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (V) {
            var S = V.stack.trim().match(/\n( *(at )?)/);
            q = S && S[1] || "";
          }
        return `
` + q + i;
      }
    }
    var pe = !1, Se;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new Qn();
    }
    function Ft(i, h) {
      if (!i || pe)
        return "";
      {
        var E = Se.get(i);
        if (E !== void 0)
          return E;
      }
      var S;
      pe = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = z.current, z.current = null, A();
      try {
        if (h) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ye) {
              S = ye;
            }
            Reflect.construct(i, [], I);
          } else {
            try {
              I.call();
            } catch (ye) {
              S = ye;
            }
            i.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            S = ye;
          }
          i();
        }
      } catch (ye) {
        if (ye && S && typeof ye.stack == "string") {
          for (var L = ye.stack.split(`
`), ae = S.stack.split(`
`), te = L.length - 1, ne = ae.length - 1; te >= 1 && ne >= 0 && L[te] !== ae[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (L[te] !== ae[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || L[te] !== ae[ne]) {
                    var me = `
` + L[te].replace(" at new ", " at ");
                    return i.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", i.displayName)), typeof i == "function" && Se.set(i, me), me;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        pe = !1, z.current = G, W(), Error.prepareStackTrace = V;
      }
      var Le = i ? i.displayName || i.name : "", Jt = Le ? ee(Le) : "";
      return typeof i == "function" && Se.set(i, Jt), Jt;
    }
    function er(i, h, E) {
      return Ft(i, !1);
    }
    function tr(i) {
      var h = i.prototype;
      return !!(h && h.isReactComponent);
    }
    function Je(i, h, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ft(i, tr(i));
      if (typeof i == "string")
        return ee(i);
      switch (i) {
        case l:
          return ee("Suspense");
        case f:
          return ee("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return er(i.render);
          case p:
            return Je(i.type, h, E);
          case m: {
            var S = i, V = S._payload, G = S._init;
            try {
              return Je(G(V), h, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ze = Object.prototype.hasOwnProperty, Wt = {}, Vt = w.ReactDebugCurrentFrame;
    function Qe(i) {
      if (i) {
        var h = i._owner, E = Je(i.type, i._source, h ? h.type : null);
        Vt.setExtraStackFrame(E);
      } else
        Vt.setExtraStackFrame(null);
    }
    function nr(i, h, E, S, V) {
      {
        var G = Function.call.bind(Ze);
        for (var I in i)
          if (G(i, I)) {
            var L = void 0;
            try {
              if (typeof i[I] != "function") {
                var ae = Error((S || "React class") + ": " + E + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              L = i[I](h, I, S, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              L = te;
            }
            L && !(L instanceof Error) && (Qe(V), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", E, I, typeof L), Qe(null)), L instanceof Error && !(L.message in Wt) && (Wt[L.message] = !0, Qe(V), b("Failed %s type: %s", E, L.message), Qe(null));
          }
      }
    }
    var rr = Array.isArray;
    function ht(i) {
      return rr(i);
    }
    function or(i) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, E = h && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return E;
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
    function $t(i) {
      if (ar(i))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(i)), Ut(i);
    }
    var ze = w.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yt, zt, bt;
    bt = {};
    function ir(i) {
      if (Ze.call(i, "ref")) {
        var h = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function cr(i) {
      if (Ze.call(i, "key")) {
        var h = Object.getOwnPropertyDescriptor(i, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function lr(i, h) {
      if (typeof i.ref == "string" && ze.current && h && ze.current.stateNode !== h) {
        var E = Y(ze.current.type);
        bt[E] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(ze.current.type), i.ref), bt[E] = !0);
      }
    }
    function ur(i, h) {
      {
        var E = function() {
          Yt || (Yt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function dr(i, h) {
      {
        var E = function() {
          zt || (zt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        E.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var fr = function(i, h, E, S, V, G, I) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: h,
        ref: E,
        props: I,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function pr(i, h, E, S, V) {
      {
        var G, I = {}, L = null, ae = null;
        E !== void 0 && ($t(E), L = "" + E), cr(h) && ($t(h.key), L = "" + h.key), ir(h) && (ae = h.ref, lr(h, V));
        for (G in h)
          Ze.call(h, G) && !sr.hasOwnProperty(G) && (I[G] = h[G]);
        if (i && i.defaultProps) {
          var te = i.defaultProps;
          for (G in te)
            I[G] === void 0 && (I[G] = te[G]);
        }
        if (L || ae) {
          var ne = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          L && ur(I, ne), ae && dr(I, ne);
        }
        return fr(i, L, ae, V, S, ze.current, I);
      }
    }
    var vt = w.ReactCurrentOwner, Kt = w.ReactDebugCurrentFrame;
    function Me(i) {
      if (i) {
        var h = i._owner, E = Je(i.type, i._source, h ? h.type : null);
        Kt.setExtraStackFrame(E);
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
          var i = Y(vt.current.type);
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
          var h = i.fileName.replace(/^.*[\\\/]/, ""), E = i.lineNumber;
          return `

Check your code at ` + h + ":" + E + ".";
        }
        return "";
      }
    }
    var qt = {};
    function hr(i) {
      {
        var h = Ht();
        if (!h) {
          var E = typeof i == "string" ? i : i.displayName || i.name;
          E && (h = `

Check the top-level render call using <` + E + ">.");
        }
        return h;
      }
    }
    function Gt(i, h) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var E = hr(h);
        if (qt[E])
          return;
        qt[E] = !0;
        var S = "";
        i && i._owner && i._owner !== vt.current && (S = " It was passed a child from " + Y(i._owner.type) + "."), Me(i), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, S), Me(null);
      }
    }
    function Xt(i, h) {
      {
        if (typeof i != "object")
          return;
        if (ht(i))
          for (var E = 0; E < i.length; E++) {
            var S = i[E];
            yt(S) && Gt(S, h);
          }
        else if (yt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var V = k(i);
          if (typeof V == "function" && V !== i.entries)
            for (var G = V.call(i), I; !(I = G.next()).done; )
              yt(I.value) && Gt(I.value, h);
        }
      }
    }
    function br(i) {
      {
        var h = i.type;
        if (h == null || typeof h == "string")
          return;
        var E;
        if (typeof h == "function")
          E = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === p))
          E = h.propTypes;
        else
          return;
        if (E) {
          var S = Y(h);
          nr(E, i.props, "prop", S, i);
        } else if (h.PropTypes !== void 0 && !gt) {
          gt = !0;
          var V = Y(h);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(i) {
      {
        for (var h = Object.keys(i.props), E = 0; E < h.length; E++) {
          var S = h[E];
          if (S !== "children" && S !== "key") {
            Me(i), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Me(null);
            break;
          }
        }
        i.ref !== null && (Me(i), b("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function gr(i, h, E, S, V, G) {
      {
        var I = J(i);
        if (!I) {
          var L = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = mr(V);
          ae ? L += ae : L += Ht();
          var te;
          i === null ? te = "null" : ht(i) ? te = "array" : i !== void 0 && i.$$typeof === t ? (te = "<" + (Y(i.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : te = typeof i, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, L);
        }
        var ne = pr(i, h, E, V, G);
        if (ne == null)
          return ne;
        if (I) {
          var me = h.children;
          if (me !== void 0)
            if (S)
              if (ht(me)) {
                for (var Le = 0; Le < me.length; Le++)
                  Xt(me[Le], i);
                Object.freeze && Object.freeze(me);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(me, i);
        }
        return i === r ? vr(ne) : br(ne), ne;
      }
    }
    var yr = gr;
    tt.Fragment = r, tt.jsxDEV = yr;
  }()), tt;
}
process.env.NODE_ENV === "production" ? kt.exports = Sr() : kt.exports = Tr();
var N = kt.exports;
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
}, zeroPad: (o, a = 2) => String(o).padStart(a, "0") }), oe = () => {
  const { state: e, dispatch: t } = Er(Rn);
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
), Nn = (
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
), en = function(e) {
  return new Nn().setDate(e, "BS").toAD();
}, Ne = function(e) {
  return new Nn().setDate(e, "AD").toBS();
}, st = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(st || {}), it = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(it || {}), St = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(St || {}), K = /* @__PURE__ */ ((e) => (e.SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_LOCALE = "SET_LOCALE", e.SET_COLORS = "SET_COLORS", e.SET_SEPARATOR = "SET_SEPARATOR", e.SET_CLOSE_ON_SELECT = "SET_CLOSE_ON_SELECT", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(K || {});
const Rr = () => {
  const { state: e } = oe(), t = (l, f) => {
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
    validateDateObject: (l, f = St.BS) => {
      const { year: p, month: m, day: d } = l;
      if (f === St.BS) {
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
}, Oe = () => {
  const e = Rr(), t = Ye(), { state: n } = oe(), r = (c, u) => {
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
      const m = o({ year: l, month: f, day: 1 }), d = en(m), v = new Date(d), y = a(l, f), k = new Date(en(c));
      return {
        bsDay: p,
        bsMonth: f,
        bsYear: l,
        weekDay: k.getDay(),
        adDate: k,
        firstAdDayInBsMonth: v,
        numberOfDaysInBsMonth: y,
        dateString: c
      };
    },
    getNumberOfDaysInBSMonth: a
  };
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
  return new xn().setNumber(e).toNepali();
}, kn = function(e) {
  return new xn().setNumber(e).toEnglish();
};
const we = () => {
  const { state: e } = oe(), { getObject: t } = Ye();
  return {
    trans: (n, r) => t(Qr[r || e.locale.calendar], n, n),
    numberTrans: (n, r) => it.ENGLISH === `${r || e.locale.calendar}` ? kn(n) : _r(n)
  };
}, Ct = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e, { state: a } = oe();
  return /* @__PURE__ */ N.jsxDEV(
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
}, Sn = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e, { state: a } = oe();
  return /* @__PURE__ */ N.jsxDEV(
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
  const { trans: e } = we(), { state: t, setData: n } = oe(), r = ge(() => {
    t.events.onChange(""), t.options.closeOnSelect && n({ type: K.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [t.events.onChange, t.options.closeOnSelect]);
  return t.date.selected ? /* @__PURE__ */ N.jsxDEV(
    Ct,
    {
      className: t.options.classNames.clearBtn || `
                ndp__clear_btn ndp-font-medium ndp-border hover:ndp-text-red-500
               `,
      title: e("labels.clear"),
      onClick: () => r(),
      onKeyDown: () => r(),
      children: [
        /* @__PURE__ */ N.jsxDEV(zr, { className: t.options.classNames.clearBtnIcon || "ndp__today_btn-icon ndp-w-4 ndp-h-4" }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ N.jsxDEV("span", { className: t.options.classNames.clearBtnText || "ndp__today_btn-text ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
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
  const { numberTrans: e } = we(), { range: t } = Ye(), { state: n, setData: r } = oe(), o = Oe(), a = se(() => n.date.calendar || o.parseBsDate(Ne(/* @__PURE__ */ new Date())), [n.date.calendar]), s = se(() => n.date.selected, [n.date.selected]), c = se(() => Math.ceil((a.firstAdDayInBsMonth.getDay() + a.numberOfDaysInBsMonth) / 7) - 1, [a]), u = se(() => a.bsMonth - 1 === 0 ? 12 : a.bsMonth - 1, [a]), l = se(() => u === 12 ? a.bsYear - 1 : a.bsYear, [u, a]), f = se(() => l >= n.calendarData.minBsYear ? o.getNumberOfDaysInBSMonth(l, u) : 30, [l, u]), p = ge((d, v) => {
    let y = d * 7 + v - a.firstAdDayInBsMonth.getDay();
    const k = a.bsMonth, w = a.bsYear;
    let b = !0;
    y <= 0 ? (y = f + y, b = !1) : y > a.numberOfDaysInBsMonth && (y -= a.numberOfDaysInBsMonth, b = !1);
    const C = o.splitDate(Ne(/* @__PURE__ */ new Date())), T = b ? C.day === y && C.month === k && C.year === w : !1, x = b ? (s == null ? void 0 : s.bsDay) === y && (s == null ? void 0 : s.bsMonth) === k && (s == null ? void 0 : s.bsYear) === w : !1;
    return { day: y, month: k, year: w, isCurrentMonth: b, isToday: T, isSelected: x };
  }, [a, s, f]), m = ge((d) => {
    if (!d.isCurrentMonth)
      return;
    const v = o.stitchDate({
      year: d.year,
      month: d.month,
      day: d.day
    });
    n.events.onSelect(v), n.events.onChange(v), n.options.closeOnSelect && r({ type: K.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [n.events.onSelect, n.events.onChange, n.options.closeOnSelect]);
  return /* @__PURE__ */ N.jsxDEV("tbody", { children: t(0, c).map((d) => /* @__PURE__ */ N.jsxDEV("tr", { className: n.options.classNames.dayPickerTr || "ndp__day_picker-tr ndp-border-0", children: t(1, 7).map((v) => {
    const y = p(d, v);
    return /* @__PURE__ */ N.jsxDEV(
      "td",
      {
        className: n.options.classNames.dayPickerTd || "ndp__day_picker-td ndp-border-0",
        title: e(y.day),
        children: /* @__PURE__ */ N.jsxDEV(
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
              y.isToday && /* @__PURE__ */ N.jsxDEV("span", { className: n.options.classNames.dayPickerToday || `
                      ndp__day_picker-today
                      ndp-inline-block ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    ` }, void 0, !1, {
                fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, globalThis)
            ]
          },
          void 0,
          !0,
          {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
            lineNumber: 103,
            columnNumber: 17
          },
          globalThis
        )
      },
      v,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
        lineNumber: 100,
        columnNumber: 15
      },
      globalThis
    );
  }) }, d, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 95,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, globalThis);
}, Tn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const { state: s } = oe(), [c, u] = Dr(!1), l = se(() => e.find((m) => m.value === n), [n]), f = ge(() => {
    u((m) => !m);
  }, []), p = ge((m) => {
    u(!1), t(m.value);
  }, [t]);
  return /* @__PURE__ */ N.jsxDEV("div", { className: s.options.classNames.dropDownWrapper || `
      ndp__dropdown-wrapper ndp-relative
    `, children: [
    /* @__PURE__ */ N.jsxDEV(
      Ct,
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
    c && /* @__PURE__ */ N.jsxDEV("ul", { className: `
          ${s.options.classNames.dropDown || `
            ndp__dropdown
            ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
            ndp-absolute ndp-w-full
            ndp-bg-white dark:ndp-bg-slate-900
            ndp-top-0 ndp-z-10
            ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          `}
          ${a || ""}
        `, children: e.map((m) => /* @__PURE__ */ N.jsxDEV(
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
], Ar = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Or = () => {
  var c;
  const { trans: e } = we(), { state: t, setData: n } = oe(), r = Oe(), o = se(() => t.date.calendar || r.parseBsDate(Ne(/* @__PURE__ */ new Date())), [t.date.calendar]), a = se(() => Pr.map((u, l) => ({
    label: e(`months.${u}`),
    value: l
  })), [t.locale.calendar]), s = ge((u) => {
    const l = r.stitchDate({
      year: o.bsYear,
      month: u + 1,
      day: 1
    });
    n({ type: K.SET_CALENDAR_DATE, date: r.parseBsDate(l) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
    Tn,
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
  const { trans: e } = we(), { state: t, setData: n } = oe(), r = Oe(), o = se(() => t.date.calendar || r.parseBsDate(Ne(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ge(() => {
    let s = o.bsYear, c = o.bsMonth + 1;
    if (c > 12 && (c = 1, s++), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: K.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
    Sn,
    {
      title: e("labels.next"),
      onClick: () => a(),
      onKeyDown: () => a(),
      className: t.options.classNames.nextBtn || "ndp__nav_button-next",
      children: /* @__PURE__ */ N.jsxDEV(Hr, { className: t.options.classNames.navBtnIcon || `
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
  const { trans: e } = we(), { state: t, setData: n } = oe(), r = Oe(), o = se(() => t.date.calendar || r.parseBsDate(Ne(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ge(() => {
    let s = o.bsYear, c = o.bsMonth - 1;
    if (c === 0 && (c = 12, s--), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: K.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
    Sn,
    {
      title: e("labels.previous"),
      onClick: () => a(),
      onKeyDown: () => a(),
      className: t.options.classNames.previousBtn || "ndp__nav_button-previous",
      children: /* @__PURE__ */ N.jsxDEV(Kr, { className: t.options.classNames.navBtnIcon || "ndp__nav_btn_icon ndp-w-5 ndp-h-5" }, void 0, !1, {
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
  const { trans: e, numberTrans: t } = we(), n = Oe(), { zeroPad: r } = Ye(), { state: o, setData: a } = oe(), s = se(() => n.parseBsDate(Ne(/* @__PURE__ */ new Date())), []), c = ge(() => {
    o.events.onChange(s.dateString), o.options.closeOnSelect && a({ type: K.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [s, o.events.onChange, o.options.closeOnSelect]);
  return /* @__PURE__ */ N.jsxDEV(
    Ct,
    {
      className: o.options.classNames.todayBtn || `
                ndp__today_btn ndp-font-medium ndp-border hover:ndp-text-primary ndp-group
              `,
      title: e("labels.today"),
      onClick: () => c(),
      onKeyDown: () => c(),
      children: [
        /* @__PURE__ */ N.jsxDEV(qr, { date: t(r(s.bsDay)) }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ N.jsxDEV("span", { className: o.options.classNames.todayBtnText || "ndp__today_btn-text ndp-ml-2", children: e("labels.today") }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, globalThis)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    globalThis
  );
}, Ir = () => {
  const { trans: e } = we(), { state: t } = oe(), n = se(() => Ar.map((r, o) => ({
    label: e(`weeks.${r}`),
    value: o
  })), [t.locale.calendar]);
  return /* @__PURE__ */ N.jsxDEV("thead", { children: /* @__PURE__ */ N.jsxDEV("tr", { className: t.options.classNames.weekDaysTr || "ndp__weekdays-tr ndp-border-0", children: n.map((r) => /* @__PURE__ */ N.jsxDEV(
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
  const { state: e, setData: t } = oe(), { numberTrans: n, trans: r } = we(), { range: o } = Ye(), a = Oe(), s = se(() => e.date.calendar || a.parseBsDate(Ne(/* @__PURE__ */ new Date())), [e.date.calendar]), c = se(() => o(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((f) => ({
    label: n(f),
    value: f
  })), [e.locale.calendar]), u = ge((f) => {
    const p = a.stitchDate({ year: f, month: s.bsMonth, day: 1 });
    t({ type: K.SET_CALENDAR_DATE, date: a.parseBsDate(p) });
  }, [s]);
  return /* @__PURE__ */ N.jsxDEV(
    Tn,
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
  const { state: e } = oe();
  return /* @__PURE__ */ N.jsxDEV("div", { className: e.options.classNames.calendar || `
      ndp__calendar
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
    /* @__PURE__ */ N.jsxDEV(
      "div",
      {
        className: e.options.classNames.calendarHeader || `
          ndp__calendar-header ndp-flex ndp-items-center ndp-justify-between
        `,
        children: [
          /* @__PURE__ */ N.jsxDEV(Lr, {}, void 0, !1, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, globalThis),
          /* @__PURE__ */ N.jsxDEV("div", { className: e.options.classNames.yearMonthPicker || `
          ndp__year_month_picker ndp-flex
        `, children: [
            /* @__PURE__ */ N.jsxDEV(Fr, {}, void 0, !1, {
              fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, globalThis),
            /* @__PURE__ */ N.jsxDEV(Or, {}, void 0, !1, {
              fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, globalThis)
          ] }, void 0, !0, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, globalThis),
          /* @__PURE__ */ N.jsxDEV(Mr, {}, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV("table", { className: e.options.classNames.calendarBody || `
        ndp__calendar-body ndp-text-center ndp-w-full ndp-border-0
      `, children: [
      /* @__PURE__ */ N.jsxDEV(Ir, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, globalThis),
      /* @__PURE__ */ N.jsxDEV(jr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("div", { className: e.options.classNames.calendarFooter || `
        ndp__calendar-footer
        ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2
      `, children: [
      /* @__PURE__ */ N.jsxDEV(Br, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, globalThis),
      /* @__PURE__ */ N.jsxDEV(Cr, {}, void 0, !1, {
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
], jt = {
  isCalendarOpen: !1,
  events: {
    onChange: (e) => e,
    onSelect: (e) => e
  },
  locale: {
    calendar: it.NEPALI,
    value: it.ENGLISH
  },
  options: {
    theme: st.LIGHT,
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
}, $r = (e = jt, t) => t.type === K.SET_CALENDAR_OPEN ? { ...e, isCalendarOpen: t.isOpen } : t.type === K.SET_CLASSES ? { ...e, options: { ...e.options, classNames: { ...e.options.classNames, ...t.classNames } } } : t.type === K.SET_THEME ? { ...e, options: { ...e.options, theme: t.theme } } : t.type === K.SET_EVENTS ? { ...e, events: t.events } : t.type === K.SET_LOCALE ? { ...e, locale: { ...e.locale, ...t.locale } } : t.type === K.SET_COLORS ? { ...e, options: { ...e.options, colors: { ...e.options.colors, ...t.colors } } } : t.type === K.SET_SEPARATOR ? { ...e, options: { ...e.options, dateSeparator: t.separator } } : t.type === K.SET_CLOSE_ON_SELECT ? { ...e, options: { ...e.options, closeOnSelect: t.closeOnSelect } } : t.type === K.SET_OPTIONS ? { ...e, options: t.options } : t.type === K.SET_CALENDAR_DATE ? { ...e, date: { ...e.date, calendar: t.date } } : t.type === K.SET_SELECTED_DATE ? { ...e, date: { ...e.date, selected: t.date } } : e, Rn = Nr({
  state: jt,
  dispatch: () => null
}), Yr = ({ children: e }) => {
  const [t, n] = xr($r, jt);
  return /* @__PURE__ */ N.jsxDEV(Rn.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, zr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
), Kr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
), Hr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
), qr = ({ date: e, className: t }) => {
  const { state: n } = oe();
  return /* @__PURE__ */ N.jsxDEV("span", { className: `
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
  const { state: t } = oe(), { numberTrans: n } = we(), { omitKeys: r } = Ye(), o = r([...Gr, "type", "readOnly"], e);
  return /* @__PURE__ */ N.jsxDEV(
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
function xe(e) {
  return _n(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (_n(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _n(e) {
  return e instanceof Node || e instanceof de(e).Node;
}
function re(e) {
  return e instanceof Element || e instanceof de(e).Element;
}
function ie(e) {
  return e instanceof HTMLElement || e instanceof de(e).HTMLElement;
}
function Tt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function Ge(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eo(e) {
  return ["table", "td", "th"].includes(xe(e));
}
function Pt(e) {
  const t = At(), n = fe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function to(e) {
  let t = Pe(e);
  for (; ie(t) && !Xe(t); ) {
    if (Pt(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function At() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xe(e) {
  return ["html", "body", "#document"].includes(xe(e));
}
function fe(e) {
  return de(e).getComputedStyle(e);
}
function pt(e) {
  return re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Pe(e) {
  if (xe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tt(e) && e.host || // Fallback.
    Ee(e)
  );
  return Tt(t) ? t.host : t;
}
function Cn(e) {
  const t = Pe(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ie(t) && Ge(t) ? t : Cn(t);
}
function De(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Cn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = de(o);
  return a ? t.concat(s, s.visualViewport || [], Ge(o) ? o : [], s.frameElement && n ? De(s.frameElement) : []) : t.concat(o, De(o, [], n));
}
function Fe(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ue(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Tt(n)) {
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
  return e.mozInputSource === 0 && e.isTrusted ? !0 : jn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ao(e) {
  return !jn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function so() {
  return /apple/i.test(navigator.vendor);
}
function jn() {
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
function ve(e) {
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
function We(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const lo = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Pn(e) {
  return ie(e) && e.matches(lo);
}
function Et(e) {
  e.preventDefault(), e.stopPropagation();
}
const $e = Math.min, je = Math.max, ct = Math.round, nt = Math.floor, ke = (e) => ({
  x: e,
  y: e
});
function uo(e, t, n) {
  return je(e, $e(t, n));
}
function An(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ot(e) {
  return e.split("-")[0];
}
function Mt(e) {
  return e.split("-")[1];
}
function fo(e) {
  return e === "x" ? "y" : "x";
}
function On(e) {
  return e === "y" ? "height" : "width";
}
function Lt(e) {
  return ["top", "bottom"].includes(Ot(e)) ? "y" : "x";
}
function Mn(e) {
  return fo(Lt(e));
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
function Ln(e) {
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
  const a = Lt(t), s = Mn(t), c = On(s), u = Ot(t), l = a === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[c] / 2 - o[c] / 2;
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
    x: f,
    y: p
  } = nn(l, r, u), m = r, d = {}, v = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: k,
      fn: w
    } = c[y], {
      x: b,
      y: C,
      data: T,
      reset: x
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
    if (f = b ?? f, p = C ?? p, d = {
      ...d,
      [k]: {
        ...d[k],
        ...T
      }
    }, x && v <= 50) {
      v++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (l = x.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: f,
        y: p
      } = nn(l, m, u)), y = -1;
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
      padding: f = 0
    } = An(e, t) || {};
    if (l == null)
      return {};
    const p = mo(f), m = {
      x: n,
      y: r
    }, d = Mn(o), v = On(d), y = await s.getDimensions(l), k = d === "y", w = k ? "top" : "left", b = k ? "bottom" : "right", C = k ? "clientHeight" : "clientWidth", T = a.reference[v] + a.reference[d] - m[d] - a.floating[v], x = m[d] - a.reference[d], j = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let D = j ? j[C] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(j))) && (D = c.floating[C] || a.floating[v]);
    const H = T / 2 - x / 2, X = D / 2 - y[v] / 2 - 1, J = $e(p[w], X), R = $e(p[b], X), Q = J, Y = D - y[v] - R, O = D / 2 - y[v] / 2 + H, Z = uo(Q, O, Y), U = !u.arrow && Mt(o) != null && O != Z && a.reference[v] / 2 - (O < Q ? J : R) - y[v] / 2 < 0, _ = U ? O < Q ? O - Q : O - Y : 0;
    return {
      [d]: m[d] + _,
      data: {
        [d]: Z,
        centerOffset: O - Z - _,
        ...U && {
          alignmentOffset: _
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
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ot(n), c = Mt(n), u = Lt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = a && u ? -1 : 1, p = An(t, e);
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
function Bn(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ie(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = ct(n) !== a || ct(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Bt(e) {
  return re(e) ? e : e.contextElement;
}
function Ue(e) {
  const t = Bt(e);
  if (!ie(t))
    return ke(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Bn(t);
  let s = (a ? ct(n.width) : n.width) / r, c = (a ? ct(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const go = /* @__PURE__ */ ke(0);
function In(e) {
  const t = de(e);
  return !At() || !t.visualViewport ? go : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function Ae(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bt(e);
  let s = ke(1);
  t && (r ? re(r) && (s = Ue(r)) : s = Ue(e));
  const c = yo(a, n, r) ? In(a) : ke(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, f = o.width / s.x, p = o.height / s.y;
  if (a) {
    const m = de(a), d = r && re(r) ? de(r) : r;
    let v = m.frameElement;
    for (; v && r && d !== m; ) {
      const y = Ue(v), k = v.getBoundingClientRect(), w = fe(v), b = k.left + (v.clientLeft + parseFloat(w.paddingLeft)) * y.x, C = k.top + (v.clientTop + parseFloat(w.paddingTop)) * y.y;
      u *= y.x, l *= y.y, f *= y.x, p *= y.y, u += b, l += C, v = de(v).frameElement;
    }
  }
  return Ln({
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
  const o = ie(n), a = Ee(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ke(1);
  const u = ke(0);
  if ((o || !o && r !== "fixed") && ((xe(n) !== "body" || Ge(a)) && (s = pt(n)), ie(n))) {
    const l = Ae(n);
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
function Fn(e) {
  return Ae(Ee(e)).left + pt(e).scrollLeft;
}
function Do(e) {
  const t = Ee(e), n = pt(e), r = e.ownerDocument.body, o = je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Fn(e);
  const c = -n.scrollTop;
  return fe(r).direction === "rtl" && (s += je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function No(e, t) {
  const n = de(e), r = Ee(e), o = n.visualViewport;
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
  const n = Ae(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ie(e) ? Ue(e) : ke(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
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
    r = No(e, n);
  else if (t === "document")
    r = Do(Ee(e));
  else if (re(t))
    r = xo(t, n);
  else {
    const o = In(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ln(r);
}
function Wn(e, t) {
  const n = Pe(e);
  return n === t || !re(n) || Xe(n) ? !1 : fe(n).position === "fixed" || Wn(n, t);
}
function ko(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = De(e, [], !1).filter((c) => re(c) && xe(c) !== "body"), o = null;
  const a = fe(e).position === "fixed";
  let s = a ? Pe(e) : e;
  for (; re(s) && !Xe(s); ) {
    const c = fe(s), u = Pt(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ge(s) && !u && Wn(e, s)) ? r = r.filter((f) => f !== s) : o = c, s = Pe(s);
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
    const p = on(t, f, o);
    return l.top = je(p.top, l.top), l.right = $e(p.right, l.right), l.bottom = $e(p.bottom, l.bottom), l.left = je(p.left, l.left), l;
  }, on(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function To(e) {
  return Bn(e);
}
function Ro(e, t, n) {
  const r = ie(t), o = Ee(t), a = n === "fixed", s = Ae(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ke(0);
  if (r || !r && !a)
    if ((xe(t) !== "body" || Ge(o)) && (c = pt(t)), r) {
      const l = Ae(t, !0, a, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      o && (u.x = Fn(o));
  return {
    x: s.left + c.scrollLeft - u.x,
    y: s.top + c.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function an(e, t) {
  return !ie(e) || fe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Vn(e, t) {
  const n = de(e);
  if (!ie(e))
    return n;
  let r = an(e, t);
  for (; r && eo(r) && fe(r).position === "static"; )
    r = an(r, t);
  return r && (xe(r) === "html" || xe(r) === "body" && fe(r).position === "static" && !Pt(r)) ? n : r || to(e) || n;
}
const _o = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Vn, a = this.getDimensions;
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
  return fe(e).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wo,
  getDocumentElement: Ee,
  getClippingRect: So,
  getOffsetParent: Vn,
  getElementRects: _o,
  getClientRects: Eo,
  getDimensions: To,
  getScale: Ue,
  isElement: re,
  isRTL: Co
};
function jo(e, t) {
  let n = null, r;
  const o = Ee(e);
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
    const d = nt(f), v = nt(o.clientWidth - (l + p)), y = nt(o.clientHeight - (f + m)), k = nt(l), b = {
      rootMargin: -d + "px " + -v + "px " + -y + "px " + -k + "px",
      threshold: je(0, $e(1, u)) || 1
    };
    let C = !0;
    function T(x) {
      const j = x[0].intersectionRatio;
      if (j !== u) {
        if (!C)
          return s();
        j ? s(!1, j) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, b);
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
  } = r, l = Bt(e), f = o || a ? [...l ? De(l) : [], ...De(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const p = l && c ? jo(l, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      d && d.observe(t);
    })), n();
  }), l && !u && d.observe(l), d.observe(t));
  let v, y = u ? Ae(e) : null;
  u && k();
  function k() {
    const w = Ae(e);
    y && (w.x !== y.x || w.y !== y.y || w.width !== y.width || w.height !== y.height) && n(), y = w, v = requestAnimationFrame(k);
  }
  return n(), () => {
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), p && p(), d && d.disconnect(), d = null, u && cancelAnimationFrame(v);
  };
}
const Ao = (e, t, n) => {
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
}, Oo = (e) => {
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
var at = typeof document < "u" ? En : be;
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
function $n(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sn(e, t) {
  const n = $n(e);
  return Math.round(t * n) / n;
}
function cn(e) {
  const t = g.useRef(e);
  return at(() => {
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
  lt(m, r) || d(r);
  const [v, y] = g.useState(null), [k, w] = g.useState(null), b = g.useCallback((U) => {
    U != j.current && (j.current = U, y(U));
  }, [y]), C = g.useCallback((U) => {
    U !== D.current && (D.current = U, w(U));
  }, [w]), T = a || v, x = s || k, j = g.useRef(null), D = g.useRef(null), H = g.useRef(f), X = cn(u), J = cn(o), R = g.useCallback(() => {
    if (!j.current || !D.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: m
    };
    J.current && (U.platform = J.current), Ao(j.current, D.current, U).then((_) => {
      const F = {
        ..._,
        isPositioned: !0
      };
      Q.current && !lt(H.current, F) && (H.current = F, kr.flushSync(() => {
        p(F);
      }));
    });
  }, [m, t, n, J]);
  at(() => {
    l === !1 && H.current.isPositioned && (H.current.isPositioned = !1, p((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [l]);
  const Q = g.useRef(!1);
  at(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), at(() => {
    if (T && (j.current = T), x && (D.current = x), T && x) {
      if (X.current)
        return X.current(T, x, R);
      R();
    }
  }, [T, x, R, X]);
  const Y = g.useMemo(() => ({
    reference: j,
    floating: D,
    setReference: b,
    setFloating: C
  }), [b, C]), O = g.useMemo(() => ({
    reference: T,
    floating: x
  }), [T, x]), Z = g.useMemo(() => {
    const U = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return U;
    const _ = sn(O.floating, f.x), F = sn(O.floating, f.y);
    return c ? {
      ...U,
      transform: "translate(" + _ + "px, " + F + "px)",
      ...$n(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: F
    };
  }, [n, c, O.floating, f.x, f.y]);
  return g.useMemo(() => ({
    ...f,
    update: R,
    refs: Y,
    elements: O,
    floatingStyles: Z
  }), [f, R, Y, O, Z]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Lo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Rt = /* @__PURE__ */ Lo.join(","), Yn = typeof Element > "u", He = Yn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ut = !Yn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, dt = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Bo = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Io = function(t, n, r) {
  if (dt(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(Rt));
  return n && He.call(t, Rt) && o.unshift(t), o = o.filter(r), o;
}, Fo = function e(t, n, r) {
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
        var f = He.call(s, Rt);
        f && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), m = !dt(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
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
}, zn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Kn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Bo(t)) && !zn(t) ? 0 : t.tabIndex;
}, Wo = function(t, n) {
  var r = Kn(t);
  return r < 0 && n && !zn(t) ? 0 : r;
}, Vo = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Hn = function(t) {
  return t.tagName === "INPUT";
}, Uo = function(t) {
  return Hn(t) && t.type === "hidden";
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
  var a = Yo(o, t.form);
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
      var l, f, p;
      r = ut(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((f = o) !== null && f !== void 0 && (p = f.ownerDocument) !== null && p !== void 0 && p.contains(o));
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
  $o(n) || Xo(n));
}, un = function(t, n) {
  return !(Ho(n) || Kn(n) < 0 || !Jo(t, n));
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
}, qn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Fo([t], n.includeContainer, {
    filter: un.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zo
  }) : r = Io(t, n.includeContainer, un.bind(null, n)), Qo(r);
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
let dn = 0;
function Re(e, t) {
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
var he = typeof document < "u" ? En : be;
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
  return he(() => {
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
  const k = mt();
  if (!o)
    return null;
  l *= 2;
  const w = l / 2, b = s / 2 * (u / -8 + 1), C = c / 2 * u / 4, [T, x] = r.split("-"), j = Un.isRTL(o), D = !!m, H = T === "top" || T === "bottom", X = f && x === "end" ? "bottom" : "top";
  let J = f && x === "end" ? "right" : "left";
  f && j && (J = x === "end" ? "left" : "right");
  const R = (a == null ? void 0 : a.x) != null ? f || a.x : "", Q = (a == null ? void 0 : a.y) != null ? f || a.y : "", Y = m || "M0,0" + (" H" + s) + (" L" + (s - b) + "," + (c - C)) + (" Q" + s / 2 + "," + c + " " + b + "," + (c - C)) + " Z", O = {
    top: D ? "rotate(180deg)" : "",
    left: D ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: D ? "" : "rotate(180deg)",
    right: D ? "rotate(-90deg)" : "rotate(90deg)"
  }[T];
  return /* @__PURE__ */ g.createElement("svg", qe({}, y, {
    "aria-hidden": !0,
    ref: n,
    width: D ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [J]: R,
      [X]: Q,
      [T]: H || D ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + O + (d ?? ""),
      ...v
    }
  }), l > 0 && /* @__PURE__ */ g.createElement("path", {
    clipPath: "url(#" + k + ")",
    fill: "none",
    stroke: p,
    strokeWidth: l + (m ? 0 : 1),
    d: Y
  }), /* @__PURE__ */ g.createElement("path", {
    stroke: l && !m ? y.fill : "none",
    d: Y
  }), /* @__PURE__ */ g.createElement("clipPath", {
    id: k
  }, /* @__PURE__ */ g.createElement("rect", {
    x: -w,
    y: w * (D ? -1 : 1),
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
}, It = () => g.useContext(ca);
function ft(e) {
  return "data-floating-ui-" + e;
}
function Ce(e) {
  const t = Dn(e);
  return he(() => {
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
let Be = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakSet(), ot = {}, Nt = 0;
const da = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Gn = (e) => e && (e.host || Gn(e.parentNode)), fa = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Gn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function pa(e, t, n, r) {
  const o = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = fa(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), l = [];
  ot[o] || (ot[o] = /* @__PURE__ */ new WeakMap());
  const f = ot[o];
  s.forEach(p), m(t), c.clear();
  function p(d) {
    !d || c.has(d) || (c.add(d), d.parentNode && p(d.parentNode));
  }
  function m(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, (v) => {
      if (c.has(v))
        m(v);
      else {
        const y = a ? v.getAttribute(a) : null, k = y !== null && y !== "false", w = (Be.get(v) || 0) + 1, b = (f.get(v) || 0) + 1;
        Be.set(v, w), f.set(v, b), l.push(v), w === 1 && k && rt.add(v), b === 1 && v.setAttribute(o, ""), !k && a && v.setAttribute(a, "true");
      }
    });
  }
  return Nt++, () => {
    l.forEach((d) => {
      const v = (Be.get(d) || 0) - 1, y = (f.get(d) || 0) - 1;
      Be.set(d, v), f.set(d, y), v || (!rt.has(d) && a && d.removeAttribute(a), rt.delete(d)), y || d.removeAttribute(o);
    }), Nt--, Nt || (Be = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakSet(), ot = {});
  };
}
function pn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = ve(e[0]).body;
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
  const r = n.indexOf(Fe(ve(e)));
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
  return !r || !ue(n, r);
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
  he(() => (so() && o("button"), document.addEventListener("keydown", hn), () => {
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
    closeOnFocusOut: f = !0
  } = e, {
    open: p,
    refs: m,
    nodeId: d,
    onOpenChange: v,
    events: y,
    dataRef: k,
    elements: {
      domReference: w,
      floating: b
    }
  } = t, C = typeof s == "number" && s < 0, T = (w == null ? void 0 : w.getAttribute("role")) === "combobox" && Pn(w) && C, x = T ? !1 : u, j = da() ? a : !0, D = Ce(o), H = Ce(s), X = Ce(c), J = It(), R = ga(), Q = g.useRef(null), Y = g.useRef(null), O = g.useRef(!1), Z = g.useRef(null), U = g.useRef(!1), _ = R != null, F = g.useCallback(function(B) {
    return B === void 0 && (B = b), B ? qn(B, Xn()) : [];
  }, [b]), $ = g.useCallback((B) => {
    const M = F(B);
    return D.current.map((A) => w && A === "reference" ? w : b && A === "floating" ? b : M).filter(Boolean).flat();
  }, [w, b, D, F]);
  g.useEffect(() => {
    if (r || !x)
      return;
    function B(A) {
      if (A.key === "Tab") {
        ue(b, Fe(ve(b))) && F().length === 0 && !T && Et(A);
        const W = $(), z = We(A);
        D.current[0] === "reference" && z === w && (Et(A), A.shiftKey ? Re(W[W.length - 1]) : Re(W[1])), D.current[1] === "floating" && z === b && A.shiftKey && (Et(A), Re(W[0]));
      }
    }
    const M = ve(b);
    return M.addEventListener("keydown", B), () => {
      M.removeEventListener("keydown", B);
    };
  }, [r, w, b, x, D, m, T, F, $]), g.useEffect(() => {
    if (r || !f)
      return;
    function B() {
      U.current = !0, setTimeout(() => {
        U.current = !1;
      });
    }
    function M(A) {
      const W = A.relatedTarget;
      queueMicrotask(() => {
        const z = !(ue(w, W) || ue(b, W) || ue(W, b) || ue(R == null ? void 0 : R.portalNode, W) || W != null && W.hasAttribute(ft("focus-guard")) || J && (Ke(J.nodesRef.current, d).find((q) => {
          var ee, pe;
          return ue((ee = q.context) == null ? void 0 : ee.elements.floating, W) || ue((pe = q.context) == null ? void 0 : pe.elements.domReference, W);
        }) || ua(J.nodesRef.current, d).find((q) => {
          var ee, pe;
          return ((ee = q.context) == null ? void 0 : ee.elements.floating) === W || ((pe = q.context) == null ? void 0 : pe.elements.domReference) === W;
        })));
        W && z && !U.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        W !== Z.current && (O.current = !0, v(!1, A));
      });
    }
    if (b && ie(w))
      return w.addEventListener("focusout", M), w.addEventListener("pointerdown", B), !x && b.addEventListener("focusout", M), () => {
        w.removeEventListener("focusout", M), w.removeEventListener("pointerdown", B), !x && b.removeEventListener("focusout", M);
      };
  }, [r, w, b, x, d, J, R, v, f]), g.useEffect(() => {
    var B;
    if (r)
      return;
    const M = Array.from((R == null || (B = R.portalNode) == null ? void 0 : B.querySelectorAll("[" + ft("portal") + "]")) || []);
    if (b) {
      const A = [b, ...M, Q.current, Y.current, D.current.includes("reference") || T ? w : null].filter((z) => z != null), W = u || T ? pn(A, j, !j) : pn(A);
      return () => {
        W();
      };
    }
  }, [r, w, b, u, D, R, T, j]), he(() => {
    if (r || !b)
      return;
    const B = ve(b), M = Fe(B);
    queueMicrotask(() => {
      const A = $(b), W = H.current, z = (typeof W == "number" ? A[W] : W.current) || b, q = ue(b, M);
      !C && !q && p && Re(z, {
        preventScroll: z === b
      });
    });
  }, [r, p, b, C, $, H]), he(() => {
    if (r || !b)
      return;
    let B = !1;
    const M = ve(b), A = Fe(M), W = k.current;
    Z.current = A;
    function z(q) {
      if (q.type === "escapeKey" && m.domReference.current && (Z.current = m.domReference.current), ["referencePress", "escapeKey"].includes(q.type))
        return;
      const ee = q.data.returnFocus;
      typeof ee == "object" ? (O.current = !1, B = ee.preventScroll) : O.current = !ee;
    }
    return y.on("dismiss", z), () => {
      y.off("dismiss", z);
      const q = Fe(M);
      (ue(b, q) || J && Ke(J.nodesRef.current, d).some((pe) => {
        var Se;
        return ue((Se = pe.context) == null ? void 0 : Se.elements.floating, q);
      }) || W.openEvent && ["click", "mousedown"].includes(W.openEvent.type)) && m.domReference.current && (Z.current = m.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      X.current && ie(Z.current) && !O.current && Re(Z.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: B
      });
    };
  }, [r, b, X, k, m, y, J, d]), he(() => {
    if (!(r || !R))
      return R.setFocusManagerState({
        modal: x,
        closeOnFocusOut: f,
        open: p,
        onOpenChange: v,
        refs: m
      }), () => {
        R.setFocusManagerState(null);
      };
  }, [r, R, x, p, v, m, f]), he(() => {
    if (r || !b || typeof MutationObserver != "function" || C)
      return;
    const B = () => {
      const A = b.getAttribute("tabindex");
      D.current.includes("floating") || Fe(ve(b)) !== m.domReference.current && F().length === 0 ? A !== "0" && b.setAttribute("tabindex", "0") : A !== "-1" && b.setAttribute("tabindex", "-1");
    };
    B();
    const M = new MutationObserver(B);
    return M.observe(b, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      M.disconnect();
    };
  }, [r, b, m, D, F, C]);
  function P(B) {
    return r || !l || !x ? null : /* @__PURE__ */ g.createElement(ya, {
      ref: B === "start" ? Q : Y,
      onClick: (M) => v(!1, M.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const le = !r && j && (_ || x);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, le && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.beforeInsideRef,
    onFocus: (B) => {
      if (x) {
        const A = $();
        Re(o[0] === "reference" ? A[0] : A[A.length - 1]);
      } else if (R != null && R.preserveTabOrder && R.portalNode)
        if (O.current = !1, mn(B, R.portalNode)) {
          const A = ma() || w;
          A == null || A.focus();
        } else {
          var M;
          (M = R.beforeOutsideRef.current) == null || M.focus();
        }
    }
  }), !T && P("start"), n, P("end"), le && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.afterInsideRef,
    onFocus: (B) => {
      if (x)
        Re($()[0]);
      else if (R != null && R.preserveTabOrder && R.portalNode)
        if (f && (O.current = !0), mn(B, R.portalNode)) {
          const A = ha() || w;
          A == null || A.focus();
        } else {
          var M;
          (M = R.afterOutsideRef.current) == null || M.focus();
        }
    }
  }));
}
function vn(e) {
  return ie(e.target) && e.target.tagName === "BUTTON";
}
function gn(e) {
  return Pn(e);
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
        d.button === 0 && (tn(p.current, !0) && l || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, d.nativeEvent) : (d.preventDefault(), r(!0, d.nativeEvent))));
      },
      onClick(d) {
        if (c === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        tn(p.current, !0) && l || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, d.nativeEvent) : r(!0, d.nativeEvent));
      },
      onKeyDown(d) {
        p.current = void 0, !(d.defaultPrevented || !f || vn(d)) && (d.key === " " && !gn(a) && (d.preventDefault(), m.current = !0), d.key === "Enter" && r(!(n && u), d.nativeEvent));
      },
      onKeyUp(d) {
        d.defaultPrevented || !f || vn(d) || gn(a) || d.key === " " && m.current && (m.current = !1, r(!(n && u), d.nativeEvent));
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
}, yn = (e) => {
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
    events: o,
    nodeId: a,
    elements: {
      reference: s,
      domReference: c,
      floating: u
    },
    dataRef: l
  } = e, {
    enabled: f = !0,
    escapeKey: p = !0,
    outsidePress: m = !0,
    outsidePressEvent: d = "pointerdown",
    referencePress: v = !1,
    referencePressEvent: y = "pointerdown",
    ancestorScroll: k = !1,
    bubbles: w,
    capture: b
  } = t, C = It(), T = la() != null, x = Ve(typeof m == "function" ? m : () => !1), j = typeof m == "function" ? x : m, D = g.useRef(!1), H = g.useRef(!1), {
    escapeKey: X,
    outsidePress: J
  } = yn(w), {
    escapeKey: R,
    outsidePress: Q
  } = yn(b), Y = Ve((_) => {
    if (!n || !f || !p || _.key !== "Escape")
      return;
    const F = C ? Ke(C.nodesRef.current, a) : [];
    if (!X && (_.stopPropagation(), F.length > 0)) {
      let $ = !0;
      if (F.forEach((P) => {
        var le;
        if ((le = P.context) != null && le.open && !P.context.dataRef.current.__escapeKeyBubbles) {
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
    }), r(!1, io(_) ? _.nativeEvent : _);
  }), O = Ve((_) => {
    var F;
    const $ = () => {
      var P;
      Y(_), (P = We(_)) == null || P.removeEventListener("keydown", $);
    };
    (F = We(_)) == null || F.addEventListener("keydown", $);
  }), Z = Ve((_) => {
    const F = D.current;
    D.current = !1;
    const $ = H.current;
    if (H.current = !1, d === "click" && $ || F || typeof j == "function" && !j(_))
      return;
    const P = We(_), le = "[" + ft("inert") + "]", B = ve(u).querySelectorAll(le);
    let M = re(P) ? P : null;
    for (; M && !Xe(M); ) {
      const z = Pe(M);
      if (z === ve(u).body || !re(z))
        break;
      M = z;
    }
    if (B.length && re(P) && !co(P) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ue(P, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(B).every((z) => !ue(M, z)))
      return;
    if (ie(P) && u) {
      const z = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, q = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
      let ee = q && _.offsetX > P.clientWidth;
      if (q && fe(P).direction === "rtl" && (ee = _.offsetX <= P.offsetWidth - P.clientWidth), ee || z && _.offsetY > P.clientHeight)
        return;
    }
    const A = C && Ke(C.nodesRef.current, a).some((z) => {
      var q;
      return wt(_, (q = z.context) == null ? void 0 : q.elements.floating);
    });
    if (wt(_, u) || wt(_, c) || A)
      return;
    const W = C ? Ke(C.nodesRef.current, a) : [];
    if (W.length > 0) {
      let z = !0;
      if (W.forEach((q) => {
        var ee;
        if ((ee = q.context) != null && ee.open && !q.context.dataRef.current.__outsidePressBubbles) {
          z = !1;
          return;
        }
      }), !z)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: T ? {
          preventScroll: !0
        } : oo(_) || ao(_)
      }
    }), r(!1, _);
  }), U = Ve((_) => {
    var F;
    const $ = () => {
      var P;
      Z(_), (P = We(_)) == null || P.removeEventListener(d, $);
    };
    (F = We(_)) == null || F.addEventListener(d, $);
  });
  return g.useEffect(() => {
    if (!n || !f)
      return;
    l.current.__escapeKeyBubbles = X, l.current.__outsidePressBubbles = J;
    function _(P) {
      r(!1, P);
    }
    const F = ve(u);
    p && F.addEventListener("keydown", R ? O : Y, R), j && F.addEventListener(d, Q ? U : Z, Q);
    let $ = [];
    return k && (re(c) && ($ = De(c)), re(u) && ($ = $.concat(De(u))), !re(s) && s && s.contextElement && ($ = $.concat(De(s.contextElement)))), $ = $.filter((P) => {
      var le;
      return P !== ((le = F.defaultView) == null ? void 0 : le.visualViewport);
    }), $.forEach((P) => {
      P.addEventListener("scroll", _, {
        passive: !0
      });
    }), () => {
      p && F.removeEventListener("keydown", R ? O : Y, R), j && F.removeEventListener(d, Q ? U : Z, Q), $.forEach((P) => {
        P.removeEventListener("scroll", _);
      });
    };
  }, [l, u, c, s, p, j, d, n, r, k, f, X, J, Y, R, O, Z, Q, U]), g.useEffect(() => {
    D.current = !1;
  }, [j, d]), g.useMemo(() => f ? {
    reference: {
      onKeyDown: Y,
      [Da[y]]: (_) => {
        v && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, _.nativeEvent));
      }
    },
    floating: {
      onKeyDown: Y,
      onMouseDown() {
        H.current = !0;
      },
      onMouseUp() {
        H.current = !0;
      },
      [Na[d]]: () => {
        D.current = !0;
      }
    }
  } : {}, [f, o, v, d, y, r, Y]);
}
let _t;
process.env.NODE_ENV !== "production" && (_t = /* @__PURE__ */ new Set());
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
    const D = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !re(e.elements.reference)) {
      var s;
      if (!((s = _t) != null && s.has(D))) {
        var c;
        (c = _t) == null || c.add(D), console.error(D);
      }
    }
  }
  const [u, l] = g.useState(null), f = ((t = e.elements) == null ? void 0 : t.reference) || u, p = Mo(e), m = It(), d = Ve((D, H) => {
    D && (y.current.openEvent = H), r == null || r(D, H);
  }), v = g.useRef(null), y = g.useRef({}), k = g.useState(() => sa())[0], w = mt(), b = g.useCallback((D) => {
    const H = re(D) ? {
      getBoundingClientRect: () => D.getBoundingClientRect(),
      contextElement: D
    } : D;
    p.refs.setReference(H);
  }, [p.refs]), C = g.useCallback((D) => {
    (re(D) || D === null) && (v.current = D, l(D)), (re(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    D !== null && !re(D)) && p.refs.setReference(D);
  }, [p.refs]), T = g.useMemo(() => ({
    ...p.refs,
    setReference: C,
    setPositionReference: b,
    domReference: v
  }), [p.refs, C, b]), x = g.useMemo(() => ({
    ...p.elements,
    domReference: f
  }), [p.elements, f]), j = g.useMemo(() => ({
    ...p,
    refs: T,
    elements: x,
    dataRef: y,
    nodeId: o,
    floatingId: w,
    events: k,
    open: n,
    onOpenChange: d
  }), [p, o, w, k, n, d, T, x]);
  return he(() => {
    const D = m == null ? void 0 : m.nodesRef.current.find((H) => H.id === o);
    D && (D.context = j);
  }), g.useMemo(() => ({
    ...p,
    context: j,
    refs: T,
    elements: x
  }), [p, T, x, j]);
}
function xt(e, t, n) {
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
    (a) => xt(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = g.useCallback(
    (a) => xt(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = g.useCallback(
    (a) => xt(a, e, "item"),
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
  return he(() => {
    c && !p && f("unmounted");
  }, [c, p]), he(() => {
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
    status: k
  } = _a(e, {
    duration: s
  }), w = Ce(n), b = Ce(r), C = Ce(o), T = Ce(a);
  return he(() => {
    const x = Ie(w.current, l), j = Ie(C.current, l), D = Ie(T.current, l), H = Ie(b.current, l) || Object.keys(x).reduce((X, J) => (X[J] = "", X), {});
    if (k === "initial" && v((X) => ({
      transitionProperty: X.transitionProperty,
      ...D,
      ...x
    })), k === "open" && v({
      transitionProperty: Object.keys(H).map(wn).join(","),
      transitionDuration: p + "ms",
      ...D,
      ...H
    }), k === "close") {
      const X = j || x;
      v({
        transitionProperty: Object.keys(X).map(wn).join(","),
        transitionDuration: m + "ms",
        ...D,
        ...X
      });
    }
  }, [m, C, w, b, T, p, k, l]), {
    isMounted: y,
    styles: d
  };
}
const _e = 7, ja = 2, Pa = (e) => {
  var T, x;
  const { state: t, setData: n } = oe(), r = Dn(null), {
    refs: o,
    context: a,
    floatingStyles: s,
    middlewareData: c
  } = ka({
    open: t.isCalendarOpen,
    onOpenChange: (j) => {
      n({ type: K.SET_CALENDAR_OPEN, isOpen: j });
    },
    middleware: [
      Oo({
        element: r
      }),
      vo(_e + ja)
    ],
    whileElementsMounted: Po
  }), u = ((T = c.arrow) == null ? void 0 : T.x) ?? 0, l = ((x = c.arrow) == null ? void 0 : x.y) ?? 0, f = u + _e / 2, p = l + _e, { isMounted: m, styles: d } = Ca(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: j }) => ({
      transformOrigin: {
        top: `${f}px calc(100% + ${_e}px)`,
        bottom: `${f}px ${-_e}px`,
        left: `calc(100% + ${_e}px) ${p}px`,
        right: `${-_e}px ${p}px`
      }[j]
    })
  }), v = Ea(a), y = xa(a), k = Ta(a), { getReferenceProps: w, getFloatingProps: b } = Sa([v, y, k]), C = mt();
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV("div", { ref: o.setReference, ...w(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, globalThis),
    t.isCalendarOpen && /* @__PURE__ */ N.jsxDEV(wa, { context: a, modal: !1, children: m ? /* @__PURE__ */ N.jsxDEV("div", { ref: o.setFloating, style: s, "aria-labelledby": C, ...b(), children: /* @__PURE__ */ N.jsxDEV("div", { style: d, children: [
      /* @__PURE__ */ N.jsxDEV(
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
    }, globalThis) : /* @__PURE__ */ N.jsxDEV("div", {}, void 0, !1, {
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
}, Aa = ({ ...e }) => {
  var o, a, s, c, u, l;
  const { state: t, setData: n } = oe(), { parseBsDate: r } = Oe();
  return be(() => {
    var f;
    n({
      type: K.SET_CLASSES,
      classNames: {
        input: e.className || t.options.classNames.input,
        ...(f = e.options) == null ? void 0 : f.classNames
      }
    });
  }, [e.className, (o = e.options) == null ? void 0 : o.classNames]), be(() => {
    n({
      type: K.SET_THEME,
      theme: e.dark ? st.DARK : st.LIGHT
    });
  }, [e.dark]), be(() => {
    n({
      type: K.SET_EVENTS,
      events: {
        onChange: e.onChange || t.events.onChange,
        onSelect: e.onSelect || t.events.onSelect
      }
    });
  }, [e.onChange, e.onSelect]), be(() => {
    var f, p;
    n({
      type: K.SET_LOCALE,
      locale: {
        calendar: ((f = e.options) == null ? void 0 : f.locale) || t.locale.calendar,
        value: ((p = e.options) == null ? void 0 : p.valueLocale) || t.locale.value
      }
    });
  }, [(a = e.options) == null ? void 0 : a.locale, (s = e.options) == null ? void 0 : s.valueLocale]), be(() => {
    var f;
    n({
      type: K.SET_COLORS,
      colors: { ...t.options.colors, ...(f = e.options) == null ? void 0 : f.colors }
    });
  }, [(c = e.options) == null ? void 0 : c.colors]), be(() => {
    var f;
    n({
      type: K.SET_SEPARATOR,
      separator: ((f = e.options) == null ? void 0 : f.dateSeparator) || t.options.dateSeparator
    });
  }, [(u = e.options) == null ? void 0 : u.dateSeparator]), be(() => {
    var f, p;
    n({
      type: K.SET_CLOSE_ON_SELECT,
      closeOnSelect: typeof ((f = e.options) == null ? void 0 : f.closeOnSelect) > "u" ? t.options.closeOnSelect : (p = e.options) == null ? void 0 : p.closeOnSelect
    });
  }, [(l = e.options) == null ? void 0 : l.closeOnSelect]), be(() => {
    const f = kn(e.value || ""), p = f ? r(f) : void 0, m = r(f || Ne(/* @__PURE__ */ new Date()));
    n({ type: K.SET_CALENDAR_DATE, date: m }), n({ type: K.SET_SELECTED_DATE, date: p });
  }, [e.value]), /* @__PURE__ */ N.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.options.classNames.wrapper || ""}`,
      "data-theme": t.options.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ N.jsxDEV(Pa, { input: /* @__PURE__ */ N.jsxDEV(Xr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 93,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ N.jsxDEV(Wr, {}, void 0, !1, {
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
}, Ma = (e) => /* @__PURE__ */ N.jsxDEV(Yr, { children: /* @__PURE__ */ N.jsxDEV(Aa, { ...e }, void 0, !1, {
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
