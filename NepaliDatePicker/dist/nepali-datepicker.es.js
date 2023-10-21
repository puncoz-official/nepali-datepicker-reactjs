import * as g from "react";
import wr, { useContext as Er, useCallback as ve, useMemo as ae, useState as En, createContext as Dr, useReducer as Nr, useLayoutEffect as Dn, useEffect as je, useRef as Nn } from "react";
import * as xr from "react-dom";
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
    var e = wr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function k(i) {
      if (i === null || typeof i != "object")
        return null;
      var h = v && i[v] || i[y];
      return typeof h == "function" ? h : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(i) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), T = 1; T < h; T++)
          E[T - 1] = arguments[T];
        C("error", i, E);
      }
    }
    function C(i, h, E) {
      {
        var T = w.ReactDebugCurrentFrame, W = T.getStackAddendum();
        W !== "" && (h += "%s", E = E.concat([W]));
        var q = E.map(function(B) {
          return String(B);
        });
        q.unshift("Warning: " + h), Function.prototype.apply.call(console[i], console, q);
      }
    }
    var S = !1, x = !1, P = !1, D = !1, K = !1, G;
    G = Symbol.for("react.module.reference");
    function X(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || K || i === o || i === l || i === p || D || i === d || S || x || P || typeof i == "object" && i !== null && (i.$$typeof === m || i.$$typeof === f || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === G || i.getModuleId !== void 0));
    }
    function R(i, h, E) {
      var T = i.displayName;
      if (T)
        return T;
      var W = h.displayName || h.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function Q(i) {
      return i.displayName || "Context";
    }
    function $(i) {
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
        case p:
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
    var _ = Object.assign, J = 0, U, j, V, Y, A, le, L;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function O() {
      {
        if (J === 0) {
          U = console.log, j = console.info, V = console.warn, Y = console.error, A = console.group, le = console.groupCollapsed, L = console.groupEnd;
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
              value: A
            }),
            groupCollapsed: _({}, i, {
              value: le
            }),
            groupEnd: _({}, i, {
              value: L
            })
          });
        }
        J < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = w.ReactCurrentDispatcher, H;
    function ee(i, h, E) {
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
    var pe = !1, ke;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new Qn();
    }
    function Vt(i, h) {
      if (!i || pe)
        return "";
      {
        var E = ke.get(i);
        if (E !== void 0)
          return E;
      }
      var T;
      pe = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = z.current, z.current = null, O();
      try {
        if (h) {
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
            } catch (ge) {
              T = ge;
            }
            Reflect.construct(i, [], B);
          } else {
            try {
              B.call();
            } catch (ge) {
              T = ge;
            }
            i.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            T = ge;
          }
          i();
        }
      } catch (ge) {
        if (ge && T && typeof ge.stack == "string") {
          for (var I = ge.stack.split(`
`), oe = T.stack.split(`
`), te = I.length - 1, ne = oe.length - 1; te >= 1 && ne >= 0 && I[te] !== oe[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (I[te] !== oe[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || I[te] !== oe[ne]) {
                    var me = `
` + I[te].replace(" at new ", " at ");
                    return i.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", i.displayName)), typeof i == "function" && ke.set(i, me), me;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        pe = !1, z.current = q, F(), Error.prepareStackTrace = W;
      }
      var Ie = i ? i.displayName || i.name : "", Jt = Ie ? ee(Ie) : "";
      return typeof i == "function" && ke.set(i, Jt), Jt;
    }
    function er(i, h, E) {
      return Vt(i, !1);
    }
    function tr(i) {
      var h = i.prototype;
      return !!(h && h.isReactComponent);
    }
    function Ze(i, h, E) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Vt(i, tr(i));
      if (typeof i == "string")
        return ee(i);
      switch (i) {
        case l:
          return ee("Suspense");
        case p:
          return ee("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return er(i.render);
          case f:
            return Ze(i.type, h, E);
          case m: {
            var T = i, W = T._payload, q = T._init;
            try {
              return Ze(q(W), h, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, Ft = {}, Wt = w.ReactDebugCurrentFrame;
    function et(i) {
      if (i) {
        var h = i._owner, E = Ze(i.type, i._source, h ? h.type : null);
        Wt.setExtraStackFrame(E);
      } else
        Wt.setExtraStackFrame(null);
    }
    function nr(i, h, E, T, W) {
      {
        var q = Function.call.bind(Qe);
        for (var B in i)
          if (q(i, B)) {
            var I = void 0;
            try {
              if (typeof i[B] != "function") {
                var oe = Error((T || "React class") + ": " + E + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              I = i[B](h, B, T, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              I = te;
            }
            I && !(I instanceof Error) && (et(W), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", E, B, typeof I), et(null)), I instanceof Error && !(I.message in Ft) && (Ft[I.message] = !0, et(W), b("Failed %s type: %s", E, I.message), et(null));
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
    function Yt(i) {
      if (ar(i))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(i)), Ut(i);
    }
    var Ke = w.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, zt, bt;
    bt = {};
    function ir(i) {
      if (Qe.call(i, "ref")) {
        var h = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function cr(i) {
      if (Qe.call(i, "key")) {
        var h = Object.getOwnPropertyDescriptor(i, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function lr(i, h) {
      if (typeof i.ref == "string" && Ke.current && h && Ke.current.stateNode !== h) {
        var E = $(Ke.current.type);
        bt[E] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(Ke.current.type), i.ref), bt[E] = !0);
      }
    }
    function ur(i, h) {
      {
        var E = function() {
          $t || ($t = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
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
    var fr = function(i, h, E, T, W, q, B) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: h,
        ref: E,
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
    function pr(i, h, E, T, W) {
      {
        var q, B = {}, I = null, oe = null;
        E !== void 0 && (Yt(E), I = "" + E), cr(h) && (Yt(h.key), I = "" + h.key), ir(h) && (oe = h.ref, lr(h, W));
        for (q in h)
          Qe.call(h, q) && !sr.hasOwnProperty(q) && (B[q] = h[q]);
        if (i && i.defaultProps) {
          var te = i.defaultProps;
          for (q in te)
            B[q] === void 0 && (B[q] = te[q]);
        }
        if (I || oe) {
          var ne = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          I && ur(B, ne), oe && dr(B, ne);
        }
        return fr(i, I, oe, W, T, Ke.current, B);
      }
    }
    var vt = w.ReactCurrentOwner, Kt = w.ReactDebugCurrentFrame;
    function Me(i) {
      if (i) {
        var h = i._owner, E = Ze(i.type, i._source, h ? h.type : null);
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
        var T = "";
        i && i._owner && i._owner !== vt.current && (T = " It was passed a child from " + $(i._owner.type) + "."), Me(i), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, T), Me(null);
      }
    }
    function Xt(i, h) {
      {
        if (typeof i != "object")
          return;
        if (ht(i))
          for (var E = 0; E < i.length; E++) {
            var T = i[E];
            yt(T) && Gt(T, h);
          }
        else if (yt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var W = k(i);
          if (typeof W == "function" && W !== i.entries)
            for (var q = W.call(i), B; !(B = q.next()).done; )
              yt(B.value) && Gt(B.value, h);
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
        h.$$typeof === f))
          E = h.propTypes;
        else
          return;
        if (E) {
          var T = $(h);
          nr(E, i.props, "prop", T, i);
        } else if (h.PropTypes !== void 0 && !gt) {
          gt = !0;
          var W = $(h);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(i) {
      {
        for (var h = Object.keys(i.props), E = 0; E < h.length; E++) {
          var T = h[E];
          if (T !== "children" && T !== "key") {
            Me(i), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Me(null);
            break;
          }
        }
        i.ref !== null && (Me(i), b("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function gr(i, h, E, T, W, q) {
      {
        var B = X(i);
        if (!B) {
          var I = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = mr(W);
          oe ? I += oe : I += Ht();
          var te;
          i === null ? te = "null" : ht(i) ? te = "array" : i !== void 0 && i.$$typeof === t ? (te = "<" + ($(i.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : te = typeof i, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, I);
        }
        var ne = pr(i, h, E, W, q);
        if (ne == null)
          return ne;
        if (B) {
          var me = h.children;
          if (me !== void 0)
            if (T)
              if (ht(me)) {
                for (var Ie = 0; Ie < me.length; Ie++)
                  Xt(me[Ie], i);
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
    nt.Fragment = r, nt.jsxDEV = yr;
  }()), nt;
}
process.env.NODE_ENV === "production" ? kt.exports = kr() : kt.exports = Tr();
var N = kt.exports;
const Ct = (e) => {
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
}, xn = (e) => {
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
}, ze = () => ({ omitKeys: (o, a) => Object.entries(a).reduce((s, [c, u]) => o.includes(c) ? { ...s } : { ...s, [c]: u }, {}), getObject: (o, a, s = null) => {
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
}, zeroPad: (o, a = 2) => String(o).padStart(a, "0") }), ce = () => {
  const { state: e, dispatch: t } = Er(Rn);
  return { setData: (r) => {
    t(r);
  }, state: e };
};
var ie = {
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
      var n = ie.minBSYear - 57, r = ie.maxBSYear - 57;
      if (t < n || t > r)
        throw new RangeError("AD year should be in range of " + n + " to " + r);
    }, e.adMonth = function(t) {
      if (t < 1 || t > 12)
        throw new RangeError("AD month should be in range of 1 to 12");
    }, e.adDay = function(t) {
      if (t < 1 || t > 31)
        throw new RangeError("AD day should be in range of 1 to 31");
    }, e.bsYear = function(t) {
      var n = ie.minBSYear, r = ie.maxBSYear;
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
      if (n === void 0 && (n = "AD"), Te.dateType(n), n === "BS") {
        if (typeof t != "string")
          throw new TypeError("BS date should be 'string' type.");
        return this.dateType = "BS", this.date = this.splitBsDate(t), this;
      }
      return this.dateType = "AD", this.date = this.splitAdDate(t), this;
    }, e.prototype.toAD = function() {
      if (this.dateType === "AD")
        return this.format(this.date);
      var t = this.totalDaysSince(), n = this.splitDate(ie.referenceDate.AD), r = n.year, o = n.month, a = n.day, s = new Date(r, o, a - 1);
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
      for (var t = this.date, n = t.year, r = t.month, o = t.day, a = 0, s = n - ie.minBSYear, c = 1; c <= 12; c++)
        a += this.totalMonthDaysSince(c, c < r ? s + 1 : s);
      return n > 2085 && n < 2088 || n === 2085 && r > 5 ? a += o - 2 : n > 2088 || n === 2088 && r > 5 ? a += o - 4 : a += o, a;
    }, e.prototype.totalMonthDaysSince = function(t, n) {
      if (n === 0)
        return 0;
      var r = ie.monthReferences[t - 1], o = r.slice(0).reduce(function(a, s, c, u) {
        if (s === 0)
          return a;
        var l = c % 2;
        return n > a.year + s ? (a.year += s, a.month += ie.bsMonthTotalDaysCount[t - 1][l] * s) : (a.month += ie.bsMonthTotalDaysCount[t - 1][l] * (n - a.year), a.year = n - a.year, u.splice(1)), a;
      }, { month: 0, year: 0 });
      return o.month;
    }, e.prototype.daysInBsMonth = function(t, n) {
      for (var r = t + 1 - ie.minBSYear, o = ie.monthReferences[n - 1], a = 0, s = 0; s < o.length; s++)
        if (o[s] !== 0) {
          var c = s % 2;
          if (a += o[s], r <= a)
            return t === 2085 && n === 5 || t === 2088 && n === 5 ? ie.bsMonthTotalDaysCount[n - 1][c] - 2 : ie.bsMonthTotalDaysCount[n - 1][c];
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
      var n = ie.outputSeparator, r = t.year, o = t.month, a = t.day;
      return "" + r + n + this.zeroPad(o) + n + this.zeroPad(a);
    }, e.prototype.zeroPad = function(t) {
      return t > 9 ? "" + t : "0" + t;
    }, e;
  }()
), en = function(e) {
  return new kn().setDate(e, "BS").toAD();
}, De = function(e) {
  return new kn().setDate(e, "AD").toBS();
}, it = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(it || {}), Ue = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(Ue || {}), Tt = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(Tt || {}), Z = /* @__PURE__ */ ((e) => (e.SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN", e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(Z || {});
const Sr = () => {
  const { state: e } = ce(), t = (l, p) => {
    const f = (p || e.options.dateSeparator).replace(/[[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&"), m = `^[0-9]{4}${f}(0?[1-9]|1[0-2])${f}(0?[1-9]|[1-2][0-9]|3[0-2])$`;
    console.log(m);
    const d = new RegExp(m);
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
}, _e = () => {
  const e = Sr(), t = ze(), { state: n } = ce(), r = (c, u) => {
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
    return n.calendarData.bsMonthCalculatedData[u - 1].reduce((m, d, v) => {
      if (d === 0 || m !== 0)
        return m;
      const y = v % 2;
      return l += d, p > l ? m : c === 2085 && u === 5 || c === 2088 && u === 5 ? n.calendarData.bsMonthMaxDays[u - 1][y] - 2 : n.calendarData.bsMonthMaxDays[u - 1][y];
    }, 0);
  };
  return {
    splitDate: r,
    stitchDate: o,
    parseBsDate: (c, u) => {
      const { year: l, month: p, day: f } = r(c, u);
      e.validateDateObject({ year: l, month: p, day: f });
      const m = o({ year: l, month: p, day: 1 }), d = en(m), v = new Date(d), y = a(l, p), k = new Date(en(c));
      return {
        bsDay: f,
        bsMonth: p,
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
const ye = () => {
  const { state: e } = ce(), { getObject: t } = ze();
  return {
    trans: (n, r) => t(Qr[r || e.options.currentLocale], n, n),
    numberTrans: (n, r) => Ue.ENGLISH === `${r || e.options.currentLocale}` ? jr(n) : Rr(n)
  };
}, Cr = () => {
  const { trans: e } = ye(), { state: t, setData: n } = ce(), r = ve(() => {
    t.events.onChange(""), t.options.closeOnSelect && n({ type: Z.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [t.events.onChange, t.options.closeOnSelect]);
  return t.date.selected ? /* @__PURE__ */ N.jsxDEV(
    Ct,
    {
      className: "ndp-font-medium ndp-border hover:ndp-text-red-500",
      title: e("labels.clear"),
      onClick: () => r(),
      onKeyDown: () => r(),
      children: [
        /* @__PURE__ */ N.jsxDEV(zr, { className: "ndp-w-4 ndp-h-4" }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
          lineNumber: 29,
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
}, Pr = () => {
  const { numberTrans: e } = ye(), { range: t } = ze(), { state: n, setData: r } = ce(), o = _e(), a = ae(() => n.date.calendar || o.parseBsDate(De(/* @__PURE__ */ new Date())), [n.date.calendar]), s = ae(() => n.date.selected, [n.date.selected]), c = ae(() => Math.ceil((a.firstAdDayInBsMonth.getDay() + a.numberOfDaysInBsMonth) / 7) - 1, [a]), u = ae(() => a.bsMonth - 1 === 0 ? 12 : a.bsMonth - 1, [a]), l = ae(() => u === 12 ? a.bsYear - 1 : a.bsYear, [u, a]), p = ae(() => l >= n.calendarData.minBsYear ? o.getNumberOfDaysInBSMonth(l, u) : 30, [l, u]), f = ve((d, v) => {
    let y = d * 7 + v - a.firstAdDayInBsMonth.getDay();
    const k = a.bsMonth, w = a.bsYear;
    let b = !0;
    y <= 0 ? (y = p + y, b = !1) : y > a.numberOfDaysInBsMonth && (y -= a.numberOfDaysInBsMonth, b = !1);
    const C = o.splitDate(De(/* @__PURE__ */ new Date())), S = b ? C.day === y && C.month === k && C.year === w : !1, x = b ? (s == null ? void 0 : s.bsDay) === y && (s == null ? void 0 : s.bsMonth) === k && (s == null ? void 0 : s.bsYear) === w : !1;
    return { day: y, month: k, year: w, isCurrentMonth: b, isToday: S, isSelected: x };
  }, [a, s, p]), m = ve((d) => {
    if (!d.isCurrentMonth)
      return;
    const v = o.stitchDate({
      year: d.year,
      month: d.month,
      day: d.day
    });
    n.events.onSelect(v), n.events.onChange(v), n.options.closeOnSelect && r({ type: Z.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [n.events.onSelect, n.events.onChange, n.options.closeOnSelect]);
  return /* @__PURE__ */ N.jsxDEV("tbody", { children: t(0, c).map((d) => /* @__PURE__ */ N.jsxDEV("tr", { className: "ndp-border-0", children: t(1, 7).map((v) => {
    const y = f(d, v);
    return /* @__PURE__ */ N.jsxDEV(
      "td",
      {
        className: "ndp-border-0",
        title: e(y.day),
        children: /* @__PURE__ */ N.jsxDEV(
          "button",
          {
            className: `
                  ndp-rounded-full ndp-h-9 ndp-w-9
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${y.isSelected ? `
                    ndp-bg-primary ndp-text-secondary
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}

                  ${!y.isCurrentMonth && `
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `}
                `,
            onClick: () => m(y),
            onKeyDown: () => m(y),
            children: [
              e(y.day),
              y.isToday && /* @__PURE__ */ N.jsxDEV("div", { className: `
                      ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    ` }, void 0, !1, {
                fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
                lineNumber: 124,
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
}, Sn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const [s, c] = En(!1), u = ae(() => e.find((f) => f.value === n), [n]), l = ve(() => {
    c((f) => !f);
  }, []), p = ve((f) => {
    c(!1), t(f.value);
  }, [t]);
  return /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-relative", children: [
    /* @__PURE__ */ N.jsxDEV(
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
    s && /* @__PURE__ */ N.jsxDEV("ul", { className: `
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
          ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          ${a || ""}
        `, children: e.map((f) => /* @__PURE__ */ N.jsxDEV(
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
  const { trans: e } = ye(), { state: t, setData: n } = ce(), r = _e(), o = ae(() => t.date.calendar || r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ae(() => Ar.map((u, l) => ({
    label: e(`months.${u}`),
    value: l
  })), [t.options.currentLocale]), s = ve((u) => {
    const l = r.stitchDate({
      year: o.bsYear,
      month: u + 1,
      day: 1
    });
    n({ type: Z.SET_CALENDAR_DATE, date: r.parseBsDate(l) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
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
  const { trans: e } = ye(), { state: t, setData: n } = ce(), r = _e(), o = ae(() => t.date.calendar || r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ve(() => {
    let s = o.bsYear, c = o.bsMonth + 1;
    if (c > 12 && (c = 1, s++), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: Z.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
    xn,
    {
      title: e("labels.next"),
      onClick: () => a(),
      onKeyDown: () => a(),
      children: /* @__PURE__ */ N.jsxDEV(Hr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
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
  const { trans: e } = ye(), { state: t, setData: n } = ce(), r = _e(), o = ae(() => t.date.calendar || r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ve(() => {
    let s = o.bsYear, c = o.bsMonth - 1;
    if (c === 0 && (c = 12, s--), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: Z.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ N.jsxDEV(
    xn,
    {
      title: e("labels.previous"),
      onClick: () => a(),
      onKeyDown: () => a(),
      children: /* @__PURE__ */ N.jsxDEV(Kr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
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
  const { trans: e, numberTrans: t } = ye(), n = _e(), { zeroPad: r } = ze(), { state: o, setData: a } = ce(), s = ae(() => n.parseBsDate(De(/* @__PURE__ */ new Date())), []), c = ve(() => {
    o.events.onChange(s.dateString), o.options.closeOnSelect && a({ type: Z.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [s, o.events.onChange, o.options.closeOnSelect]);
  return /* @__PURE__ */ N.jsxDEV(
    Ct,
    {
      className: "ndp-font-medium ndp-border hover:ndp-text-primary ndp-group",
      title: e("labels.today"),
      onClick: () => c(),
      onKeyDown: () => c(),
      children: [
        /* @__PURE__ */ N.jsxDEV(qr, { date: t(r(s.bsDay)) }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, globalThis),
        /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.today") }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
          lineNumber: 30,
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
}, Br = () => {
  const { trans: e } = ye(), { state: t } = ce(), n = ae(() => Or.map((r, o) => ({
    label: e(`weeks.${r}`),
    value: o
  })), [t.options.currentLocale]);
  return /* @__PURE__ */ N.jsxDEV("thead", { children: /* @__PURE__ */ N.jsxDEV("tr", { className: "ndp-border-0", children: n.map((r) => /* @__PURE__ */ N.jsxDEV(
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
  const { state: e, setData: t } = ce(), { numberTrans: n, trans: r } = ye(), { range: o } = ze(), a = _e(), s = ae(() => e.date.calendar || a.parseBsDate(De(/* @__PURE__ */ new Date())), [e.date.calendar]), c = ae(() => o(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((p) => ({
    label: n(p),
    value: p
  })), [e.options.currentLocale]), u = ve((p) => {
    const f = a.stitchDate({
      year: p,
      month: s.bsMonth,
      day: 1
    });
    t({ type: Z.SET_CALENDAR_DATE, date: a.parseBsDate(f) });
  }, [s]);
  return /* @__PURE__ */ N.jsxDEV(
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
}, Fr = () => /* @__PURE__ */ N.jsxDEV("div", { className: `
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
  /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-flex ndp-items-center ndp-justify-between", children: [
    /* @__PURE__ */ N.jsxDEV(Ir, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-flex", children: [
      /* @__PURE__ */ N.jsxDEV(Vr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, globalThis),
      /* @__PURE__ */ N.jsxDEV(_r, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Mr, {}, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV(Br, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Pr, {}, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV(Lr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Cr, {}, void 0, !1, {
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
    calendar: Ue.NEPALI,
    value: Ue.NEPALI
  },
  isCalendarOpen: !1,
  options: {
    colors: {
      primary: "#2096f5",
      secondary: "#fff"
    },
    dateSeparator: "-",
    currentLocale: Ue.NEPALI,
    valueLocale: Ue.ENGLISH,
    closeOnSelect: !0
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
}, Yr = (e = Pt, t) => t.type === Z.SET_CALENDAR_OPEN ? { ...e, isCalendarOpen: t.isOpen } : t.type === Z.SET_VALUE ? { ...e, value: t.value } : t.type === Z.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === Z.SET_THEME ? { ...e, theme: t.theme } : t.type === Z.SET_EVENTS ? { ...e, events: t.events } : t.type === Z.SET_OPTIONS ? { ...e, options: t.options } : t.type === Z.SET_CALENDAR_DATE ? { ...e, date: { ...e.date, calendar: t.date } } : t.type === Z.SET_SELECTED_DATE ? { ...e, date: { ...e.date, selected: t.date } } : e, Rn = Dr({
  state: Pt,
  dispatch: () => null
}), $r = ({ children: e }) => {
  const [t, n] = Nr(Yr, Pt);
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
), qr = ({ date: e, className: t }) => /* @__PURE__ */ N.jsxDEV("span", { className: `
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
  const { state: t } = ce(), { numberTrans: n } = ye(), { omitKeys: r } = ze(), o = r([...Gr, "type", "readOnly"], e);
  return /* @__PURE__ */ N.jsxDEV(
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
function Ne(e) {
  return jn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (jn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jn(e) {
  return e instanceof Node || e instanceof de(e).Node;
}
function re(e) {
  return e instanceof Element || e instanceof de(e).Element;
}
function se(e) {
  return e instanceof HTMLElement || e instanceof de(e).HTMLElement;
}
function St(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function Xe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eo(e) {
  return ["table", "td", "th"].includes(Ne(e));
}
function At(e) {
  const t = Ot(), n = fe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function to(e) {
  let t = Ae(e);
  for (; se(t) && !Je(t); ) {
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
  return ["html", "body", "#document"].includes(Ne(e));
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
function Ae(e) {
  if (Ne(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    St(e) && e.host || // Fallback.
    we(e)
  );
  return St(t) ? t.host : t;
}
function Cn(e) {
  const t = Ae(e);
  return Je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && Xe(t) ? t : Cn(t);
}
function Ee(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Cn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = de(o);
  return a ? t.concat(s, s.visualViewport || [], Xe(o) ? o : [], s.frameElement && n ? Ee(s.frameElement) : []) : t.concat(o, Ee(o, [], n));
}
function Ve(e) {
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
function Fe(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const lo = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function An(e) {
  return se(e) && e.matches(lo);
}
function Et(e) {
  e.preventDefault(), e.stopPropagation();
}
const $e = Math.min, Pe = Math.max, ct = Math.round, rt = Math.floor, xe = (e) => ({
  x: e,
  y: e
});
function uo(e, t, n) {
  return Pe(e, $e(t, n));
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
  } = nn(l, r, u), m = r, d = {}, v = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: k,
      fn: w
    } = c[y], {
      x: b,
      y: C,
      data: S,
      reset: x
    } = await w({
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
    if (p = b ?? p, f = C ?? f, d = {
      ...d,
      [k]: {
        ...d[k],
        ...S
      }
    }, x && v <= 50) {
      v++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (l = x.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: p,
        y: f
      } = nn(l, m, u)), y = -1;
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
    }, d = Mn(o), v = _n(d), y = await s.getDimensions(l), k = d === "y", w = k ? "top" : "left", b = k ? "bottom" : "right", C = k ? "clientHeight" : "clientWidth", S = a.reference[v] + a.reference[d] - m[d] - a.floating[v], x = m[d] - a.reference[d], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let D = P ? P[C] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(P))) && (D = c.floating[C] || a.floating[v]);
    const K = S / 2 - x / 2, G = D / 2 - y[v] / 2 - 1, X = $e(f[w], G), R = $e(f[b], G), Q = X, $ = D - y[v] - R, _ = D / 2 - y[v] / 2 + K, J = uo(Q, _, $), U = !u.arrow && Mt(o) != null && _ != J && a.reference[v] / 2 - (_ < Q ? X : R) - y[v] / 2 < 0, j = U ? _ < Q ? _ - Q : _ - $ : 0;
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
    alignmentAxis: v
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
  return c && typeof v == "number" && (d = c === "end" ? v * -1 : v), u ? {
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
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = se(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = ct(n) !== a || ct(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Lt(e) {
  return re(e) ? e : e.contextElement;
}
function Ye(e) {
  const t = Lt(e);
  if (!se(t))
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
  const t = de(e);
  return !Ot() || !t.visualViewport ? go : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function Oe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Lt(e);
  let s = xe(1);
  t && (r ? re(r) && (s = Ye(r)) : s = Ye(e));
  const c = yo(a, n, r) ? Bn(a) : xe(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, p = o.width / s.x, f = o.height / s.y;
  if (a) {
    const m = de(a), d = r && re(r) ? de(r) : r;
    let v = m.frameElement;
    for (; v && r && d !== m; ) {
      const y = Ye(v), k = v.getBoundingClientRect(), w = fe(v), b = k.left + (v.clientLeft + parseFloat(w.paddingLeft)) * y.x, C = k.top + (v.clientTop + parseFloat(w.paddingTop)) * y.y;
      u *= y.x, l *= y.y, p *= y.x, f *= y.y, u += b, l += C, v = de(v).frameElement;
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
  const o = se(n), a = we(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = xe(1);
  const u = xe(0);
  if ((o || !o && r !== "fixed") && ((Ne(n) !== "body" || Xe(a)) && (s = pt(n)), se(n))) {
    const l = Oe(n);
    c = Ye(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
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
  return Oe(we(e)).left + pt(e).scrollLeft;
}
function Do(e) {
  const t = we(e), n = pt(e), r = e.ownerDocument.body, o = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vn(e);
  const c = -n.scrollTop;
  return fe(r).direction === "rtl" && (s += Pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function No(e, t) {
  const n = de(e), r = we(e), o = n.visualViewport;
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
function xo(e, t) {
  const n = Oe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = se(e) ? Ye(e) : xe(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
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
    r = Do(we(e));
  else if (re(t))
    r = xo(t, n);
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
  return n === t || !re(n) || Je(n) ? !1 : fe(n).position === "fixed" || Fn(n, t);
}
function ko(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ee(e, [], !1).filter((c) => re(c) && Ne(c) !== "body"), o = null;
  const a = fe(e).position === "fixed";
  let s = a ? Ae(e) : e;
  for (; re(s) && !Je(s); ) {
    const c = fe(s), u = At(s);
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
    return l.top = Pe(f.top, l.top), l.right = $e(f.right, l.right), l.bottom = $e(f.bottom, l.bottom), l.left = Pe(f.left, l.left), l;
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
  const r = se(t), o = we(t), a = n === "fixed", s = Oe(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = xe(0);
  if (r || !r && !a)
    if ((Ne(t) !== "body" || Xe(o)) && (c = pt(t)), r) {
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
  return !se(e) || fe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wn(e, t) {
  const n = de(e);
  if (!se(e))
    return n;
  let r = an(e, t);
  for (; r && eo(r) && fe(r).position === "static"; )
    r = an(r, t);
  return r && (Ne(r) === "html" || Ne(r) === "body" && fe(r).position === "static" && !At(r)) ? n : r || to(e) || n;
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
  return fe(e).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wo,
  getDocumentElement: we,
  getClippingRect: To,
  getOffsetParent: Wn,
  getElementRects: jo,
  getClientRects: Eo,
  getDimensions: So,
  getScale: Ye,
  isElement: re,
  isRTL: Co
};
function Po(e, t) {
  let n = null, r;
  const o = we(e);
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
    const d = rt(p), v = rt(o.clientWidth - (l + f)), y = rt(o.clientHeight - (p + m)), k = rt(l), b = {
      rootMargin: -d + "px " + -v + "px " + -y + "px " + -k + "px",
      threshold: Pe(0, $e(1, u)) || 1
    };
    let C = !0;
    function S(x) {
      const P = x[0].intersectionRatio;
      if (P !== u) {
        if (!C)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, b);
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
  } = r, l = Lt(e), p = o || a ? [...l ? Ee(l) : [], ...Ee(t)] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = l && c ? Po(l, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      d && d.observe(t);
    })), n();
  }), l && !u && d.observe(l), d.observe(t));
  let v, y = u ? Oe(e) : null;
  u && k();
  function k() {
    const w = Oe(e);
    y && (w.x !== y.x || w.y !== y.y || w.width !== y.width || w.height !== y.height) && n(), y = w, v = requestAnimationFrame(k);
  }
  return n(), () => {
    p.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), f && f(), d && d.disconnect(), d = null, u && cancelAnimationFrame(v);
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
var st = typeof document < "u" ? Dn : je;
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
  const [v, y] = g.useState(null), [k, w] = g.useState(null), b = g.useCallback((U) => {
    U != P.current && (P.current = U, y(U));
  }, [y]), C = g.useCallback((U) => {
    U !== D.current && (D.current = U, w(U));
  }, [w]), S = a || v, x = s || k, P = g.useRef(null), D = g.useRef(null), K = g.useRef(p), G = cn(u), X = cn(o), R = g.useCallback(() => {
    if (!P.current || !D.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: m
    };
    X.current && (U.platform = X.current), Oo(P.current, D.current, U).then((j) => {
      const V = {
        ...j,
        isPositioned: !0
      };
      Q.current && !lt(K.current, V) && (K.current = V, xr.flushSync(() => {
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
  const Q = g.useRef(!1);
  st(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), st(() => {
    if (S && (P.current = S), x && (D.current = x), S && x) {
      if (G.current)
        return G.current(S, x, R);
      R();
    }
  }, [S, x, R, G]);
  const $ = g.useMemo(() => ({
    reference: P,
    floating: D,
    setReference: b,
    setFloating: C
  }), [b, C]), _ = g.useMemo(() => ({
    reference: S,
    floating: x
  }), [S, x]), J = g.useMemo(() => {
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
var Io = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Rt = /* @__PURE__ */ Io.join(","), $n = typeof Element > "u", qe = $n ? function() {
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
  return n && qe.call(t, Rt) && o.unshift(t), o = o.filter(r), o;
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
        var p = qe.call(s, Rt);
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
  var a = qe.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (qe.call(s, "details:not([open]) *"))
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
            return qe.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
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
function We(e) {
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
function Se(e, t) {
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
var he = typeof document < "u" ? Dn : je;
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ge.apply(this, arguments);
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
    staticOffset: p,
    stroke: f,
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
  const w = l / 2, b = s / 2 * (u / -8 + 1), C = c / 2 * u / 4, [S, x] = r.split("-"), P = Un.isRTL(o), D = !!m, K = S === "top" || S === "bottom", G = p && x === "end" ? "bottom" : "top";
  let X = p && x === "end" ? "right" : "left";
  p && P && (X = x === "end" ? "left" : "right");
  const R = (a == null ? void 0 : a.x) != null ? p || a.x : "", Q = (a == null ? void 0 : a.y) != null ? p || a.y : "", $ = m || "M0,0" + (" H" + s) + (" L" + (s - b) + "," + (c - C)) + (" Q" + s / 2 + "," + c + " " + b + "," + (c - C)) + " Z", _ = {
    top: D ? "rotate(180deg)" : "",
    left: D ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: D ? "" : "rotate(180deg)",
    right: D ? "rotate(-90deg)" : "rotate(90deg)"
  }[S];
  return /* @__PURE__ */ g.createElement("svg", Ge({}, y, {
    "aria-hidden": !0,
    ref: n,
    width: D ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [X]: R,
      [G]: Q,
      [S]: K || D ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + _ + (d ?? ""),
      ...v
    }
  }), l > 0 && /* @__PURE__ */ g.createElement("path", {
    clipPath: "url(#" + k + ")",
    fill: "none",
    stroke: f,
    strokeWidth: l + (m ? 0 : 1),
    d: $
  }), /* @__PURE__ */ g.createElement("path", {
    stroke: l && !m ? y.fill : "none",
    d: $
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
}, Bt = () => g.useContext(ca);
function ft(e) {
  return "data-floating-ui-" + e;
}
function Ce(e) {
  const t = Nn(e);
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
let Le = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {}, Nt = 0;
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
    !d || u.has(d) || Array.prototype.forEach.call(d.children, (v) => {
      if (c.has(v))
        m(v);
      else {
        const y = a ? v.getAttribute(a) : null, k = y !== null && y !== "false", w = (Le.get(v) || 0) + 1, b = (p.get(v) || 0) + 1;
        Le.set(v, w), p.set(v, b), l.push(v), w === 1 && k && ot.add(v), b === 1 && v.setAttribute(o, ""), !k && a && v.setAttribute(a, "true");
      }
    });
  }
  return Nt++, () => {
    l.forEach((d) => {
      const v = (Le.get(d) || 0) - 1, y = (p.get(d) || 0) - 1;
      Le.set(d, v), p.set(d, y), v || (!ot.has(d) && a && d.removeAttribute(a), ot.delete(d)), y || d.removeAttribute(o);
    }), Nt--, Nt || (Le = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {});
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
  const r = n.indexOf(Ve(be(e)));
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
  return /* @__PURE__ */ g.createElement("span", Ge({}, t, a));
}), va = /* @__PURE__ */ g.createContext(null), ga = () => g.useContext(va), ya = /* @__PURE__ */ g.forwardRef(function(t, n) {
  return /* @__PURE__ */ g.createElement("button", Ge({}, t, {
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
    onOpenChange: v,
    events: y,
    dataRef: k,
    elements: {
      domReference: w,
      floating: b
    }
  } = t, C = typeof s == "number" && s < 0, S = (w == null ? void 0 : w.getAttribute("role")) === "combobox" && An(w) && C, x = S ? !1 : u, P = da() ? a : !0, D = Ce(o), K = Ce(s), G = Ce(c), X = Bt(), R = ga(), Q = g.useRef(null), $ = g.useRef(null), _ = g.useRef(!1), J = g.useRef(null), U = g.useRef(!1), j = R != null, V = g.useCallback(function(L) {
    return L === void 0 && (L = b), L ? qn(L, Xn()) : [];
  }, [b]), Y = g.useCallback((L) => {
    const M = V(L);
    return D.current.map((O) => w && O === "reference" ? w : b && O === "floating" ? b : M).filter(Boolean).flat();
  }, [w, b, D, V]);
  g.useEffect(() => {
    if (r || !x)
      return;
    function L(O) {
      if (O.key === "Tab") {
        ue(b, Ve(be(b))) && V().length === 0 && !S && Et(O);
        const F = Y(), z = Fe(O);
        D.current[0] === "reference" && z === w && (Et(O), O.shiftKey ? Se(F[F.length - 1]) : Se(F[1])), D.current[1] === "floating" && z === b && O.shiftKey && (Et(O), Se(F[0]));
      }
    }
    const M = be(b);
    return M.addEventListener("keydown", L), () => {
      M.removeEventListener("keydown", L);
    };
  }, [r, w, b, x, D, m, S, V, Y]), g.useEffect(() => {
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
        const z = !(ue(w, F) || ue(b, F) || ue(F, b) || ue(R == null ? void 0 : R.portalNode, F) || F != null && F.hasAttribute(ft("focus-guard")) || X && (He(X.nodesRef.current, d).find((H) => {
          var ee, pe;
          return ue((ee = H.context) == null ? void 0 : ee.elements.floating, F) || ue((pe = H.context) == null ? void 0 : pe.elements.domReference, F);
        }) || ua(X.nodesRef.current, d).find((H) => {
          var ee, pe;
          return ((ee = H.context) == null ? void 0 : ee.elements.floating) === F || ((pe = H.context) == null ? void 0 : pe.elements.domReference) === F;
        })));
        F && z && !U.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        F !== J.current && (_.current = !0, v(!1, O));
      });
    }
    if (b && se(w))
      return w.addEventListener("focusout", M), w.addEventListener("pointerdown", L), !x && b.addEventListener("focusout", M), () => {
        w.removeEventListener("focusout", M), w.removeEventListener("pointerdown", L), !x && b.removeEventListener("focusout", M);
      };
  }, [r, w, b, x, d, X, R, v, p]), g.useEffect(() => {
    var L;
    if (r)
      return;
    const M = Array.from((R == null || (L = R.portalNode) == null ? void 0 : L.querySelectorAll("[" + ft("portal") + "]")) || []);
    if (b) {
      const O = [b, ...M, Q.current, $.current, D.current.includes("reference") || S ? w : null].filter((z) => z != null), F = u || S ? pn(O, P, !P) : pn(O);
      return () => {
        F();
      };
    }
  }, [r, w, b, u, D, R, S, P]), he(() => {
    if (r || !b)
      return;
    const L = be(b), M = Ve(L);
    queueMicrotask(() => {
      const O = Y(b), F = K.current, z = (typeof F == "number" ? O[F] : F.current) || b, H = ue(b, M);
      !C && !H && f && Se(z, {
        preventScroll: z === b
      });
    });
  }, [r, f, b, C, Y, K]), he(() => {
    if (r || !b)
      return;
    let L = !1;
    const M = be(b), O = Ve(M), F = k.current;
    J.current = O;
    function z(H) {
      if (H.type === "escapeKey" && m.domReference.current && (J.current = m.domReference.current), ["referencePress", "escapeKey"].includes(H.type))
        return;
      const ee = H.data.returnFocus;
      typeof ee == "object" ? (_.current = !1, L = ee.preventScroll) : _.current = !ee;
    }
    return y.on("dismiss", z), () => {
      y.off("dismiss", z);
      const H = Ve(M);
      (ue(b, H) || X && He(X.nodesRef.current, d).some((pe) => {
        var ke;
        return ue((ke = pe.context) == null ? void 0 : ke.elements.floating, H);
      }) || F.openEvent && ["click", "mousedown"].includes(F.openEvent.type)) && m.domReference.current && (J.current = m.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      G.current && se(J.current) && !_.current && Se(J.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: L
      });
    };
  }, [r, b, G, k, m, y, X, d]), he(() => {
    if (!(r || !R))
      return R.setFocusManagerState({
        modal: x,
        closeOnFocusOut: p,
        open: f,
        onOpenChange: v,
        refs: m
      }), () => {
        R.setFocusManagerState(null);
      };
  }, [r, R, x, f, v, m, p]), he(() => {
    if (r || !b || typeof MutationObserver != "function" || C)
      return;
    const L = () => {
      const O = b.getAttribute("tabindex");
      D.current.includes("floating") || Ve(be(b)) !== m.domReference.current && V().length === 0 ? O !== "0" && b.setAttribute("tabindex", "0") : O !== "-1" && b.setAttribute("tabindex", "-1");
    };
    L();
    const M = new MutationObserver(L);
    return M.observe(b, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      M.disconnect();
    };
  }, [r, b, m, D, V, C]);
  function A(L) {
    return r || !l || !x ? null : /* @__PURE__ */ g.createElement(ya, {
      ref: L === "start" ? Q : $,
      onClick: (M) => v(!1, M.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const le = !r && P && (j || x);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, le && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.beforeInsideRef,
    onFocus: (L) => {
      if (x) {
        const O = Y();
        Se(o[0] === "reference" ? O[0] : O[O.length - 1]);
      } else if (R != null && R.preserveTabOrder && R.portalNode)
        if (_.current = !1, mn(L, R.portalNode)) {
          const O = ma() || w;
          O == null || O.focus();
        } else {
          var M;
          (M = R.beforeOutsideRef.current) == null || M.focus();
        }
    }
  }), !S && A("start"), n, A("end"), le && /* @__PURE__ */ g.createElement(bn, {
    "data-type": "inside",
    ref: R == null ? void 0 : R.afterInsideRef,
    onFocus: (L) => {
      if (x)
        Se(Y()[0]);
      else if (R != null && R.preserveTabOrder && R.portalNode)
        if (p && (_.current = !0), mn(L, R.portalNode)) {
          const O = ha() || w;
          O == null || O.focus();
        } else {
          var M;
          (M = R.afterOutsideRef.current) == null || M.focus();
        }
    }
  }));
}
function vn(e) {
  return se(e.target) && e.target.tagName === "BUTTON";
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
    enabled: p = !0,
    escapeKey: f = !0,
    outsidePress: m = !0,
    outsidePressEvent: d = "pointerdown",
    referencePress: v = !1,
    referencePressEvent: y = "pointerdown",
    ancestorScroll: k = !1,
    bubbles: w,
    capture: b
  } = t, C = Bt(), S = la() != null, x = We(typeof m == "function" ? m : () => !1), P = typeof m == "function" ? x : m, D = g.useRef(!1), K = g.useRef(!1), {
    escapeKey: G,
    outsidePress: X
  } = yn(w), {
    escapeKey: R,
    outsidePress: Q
  } = yn(b), $ = We((j) => {
    if (!n || !p || !f || j.key !== "Escape")
      return;
    const V = C ? He(C.nodesRef.current, a) : [];
    if (!G && (j.stopPropagation(), V.length > 0)) {
      let Y = !0;
      if (V.forEach((A) => {
        var le;
        if ((le = A.context) != null && le.open && !A.context.dataRef.current.__escapeKeyBubbles) {
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
  }), _ = We((j) => {
    var V;
    const Y = () => {
      var A;
      $(j), (A = Fe(j)) == null || A.removeEventListener("keydown", Y);
    };
    (V = Fe(j)) == null || V.addEventListener("keydown", Y);
  }), J = We((j) => {
    const V = D.current;
    D.current = !1;
    const Y = K.current;
    if (K.current = !1, d === "click" && Y || V || typeof P == "function" && !P(j))
      return;
    const A = Fe(j), le = "[" + ft("inert") + "]", L = be(u).querySelectorAll(le);
    let M = re(A) ? A : null;
    for (; M && !Je(M); ) {
      const z = Ae(M);
      if (z === be(u).body || !re(z))
        break;
      M = z;
    }
    if (L.length && re(A) && !co(A) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ue(A, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(L).every((z) => !ue(M, z)))
      return;
    if (se(A) && u) {
      const z = A.clientWidth > 0 && A.scrollWidth > A.clientWidth, H = A.clientHeight > 0 && A.scrollHeight > A.clientHeight;
      let ee = H && j.offsetX > A.clientWidth;
      if (H && fe(A).direction === "rtl" && (ee = j.offsetX <= A.offsetWidth - A.clientWidth), ee || z && j.offsetY > A.clientHeight)
        return;
    }
    const O = C && He(C.nodesRef.current, a).some((z) => {
      var H;
      return wt(j, (H = z.context) == null ? void 0 : H.elements.floating);
    });
    if (wt(j, u) || wt(j, c) || O)
      return;
    const F = C ? He(C.nodesRef.current, a) : [];
    if (F.length > 0) {
      let z = !0;
      if (F.forEach((H) => {
        var ee;
        if ((ee = H.context) != null && ee.open && !H.context.dataRef.current.__outsidePressBubbles) {
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
  }), U = We((j) => {
    var V;
    const Y = () => {
      var A;
      J(j), (A = Fe(j)) == null || A.removeEventListener(d, Y);
    };
    (V = Fe(j)) == null || V.addEventListener(d, Y);
  });
  return g.useEffect(() => {
    if (!n || !p)
      return;
    l.current.__escapeKeyBubbles = G, l.current.__outsidePressBubbles = X;
    function j(A) {
      r(!1, A);
    }
    const V = be(u);
    f && V.addEventListener("keydown", R ? _ : $, R), P && V.addEventListener(d, Q ? U : J, Q);
    let Y = [];
    return k && (re(c) && (Y = Ee(c)), re(u) && (Y = Y.concat(Ee(u))), !re(s) && s && s.contextElement && (Y = Y.concat(Ee(s.contextElement)))), Y = Y.filter((A) => {
      var le;
      return A !== ((le = V.defaultView) == null ? void 0 : le.visualViewport);
    }), Y.forEach((A) => {
      A.addEventListener("scroll", j, {
        passive: !0
      });
    }), () => {
      f && V.removeEventListener("keydown", R ? _ : $, R), P && V.removeEventListener(d, Q ? U : J, Q), Y.forEach((A) => {
        A.removeEventListener("scroll", j);
      });
    };
  }, [l, u, c, s, f, P, d, n, r, k, p, G, X, $, R, _, J, Q, U]), g.useEffect(() => {
    D.current = !1;
  }, [P, d]), g.useMemo(() => p ? {
    reference: {
      onKeyDown: $,
      [Da[y]]: (j) => {
        v && (o.emit("dismiss", {
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
      [Na[d]]: () => {
        D.current = !0;
      }
    }
  } : {}, [p, o, v, d, y, r, $]);
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
    const D = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !re(e.elements.reference)) {
      var s;
      if (!((s = jt) != null && s.has(D))) {
        var c;
        (c = jt) == null || c.add(D), console.error(D);
      }
    }
  }
  const [u, l] = g.useState(null), p = ((t = e.elements) == null ? void 0 : t.reference) || u, f = Mo(e), m = Bt(), d = We((D, K) => {
    D && (y.current.openEvent = K), r == null || r(D, K);
  }), v = g.useRef(null), y = g.useRef({}), k = g.useState(() => sa())[0], w = mt(), b = g.useCallback((D) => {
    const K = re(D) ? {
      getBoundingClientRect: () => D.getBoundingClientRect(),
      contextElement: D
    } : D;
    f.refs.setReference(K);
  }, [f.refs]), C = g.useCallback((D) => {
    (re(D) || D === null) && (v.current = D, l(D)), (re(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    D !== null && !re(D)) && f.refs.setReference(D);
  }, [f.refs]), S = g.useMemo(() => ({
    ...f.refs,
    setReference: C,
    setPositionReference: b,
    domReference: v
  }), [f.refs, C, b]), x = g.useMemo(() => ({
    ...f.elements,
    domReference: p
  }), [f.elements, p]), P = g.useMemo(() => ({
    ...f,
    refs: S,
    elements: x,
    dataRef: y,
    nodeId: o,
    floatingId: w,
    events: k,
    open: n,
    onOpenChange: d
  }), [f, o, w, k, n, d, S, x]);
  return he(() => {
    const D = m == null ? void 0 : m.nodesRef.current.find((K) => K.id === o);
    D && (D.context = P);
  }), g.useMemo(() => ({
    ...f,
    context: P,
    refs: S,
    elements: x
  }), [f, S, x, P]);
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
            for (var p, f = arguments.length, m = new Array(f), d = 0; d < f; d++)
              m[d] = arguments[d];
            return (p = r.get(c)) == null ? void 0 : p.map((v) => v(...m)).find((v) => v !== void 0);
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
function Be(e, t) {
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
  return he(() => {
    c && !f && p("unmounted");
  }, [c, f]), he(() => {
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
  }), [u, c]), p = typeof s == "number", f = (p ? s : s.open) || 0, m = (p ? s : s.close) || 0, [d, v] = g.useState(() => ({
    ...Be(a, l),
    ...Be(n, l)
  })), {
    isMounted: y,
    status: k
  } = ja(e, {
    duration: s
  }), w = Ce(n), b = Ce(r), C = Ce(o), S = Ce(a);
  return he(() => {
    const x = Be(w.current, l), P = Be(C.current, l), D = Be(S.current, l), K = Be(b.current, l) || Object.keys(x).reduce((G, X) => (G[X] = "", G), {});
    if (k === "initial" && v((G) => ({
      transitionProperty: G.transitionProperty,
      ...D,
      ...x
    })), k === "open" && v({
      transitionProperty: Object.keys(K).map(wn).join(","),
      transitionDuration: f + "ms",
      ...D,
      ...K
    }), k === "close") {
      const G = P || x;
      v({
        transitionProperty: Object.keys(G).map(wn).join(","),
        transitionDuration: m + "ms",
        ...D,
        ...G
      });
    }
  }, [m, C, w, b, S, f, k, l]), {
    isMounted: y,
    styles: d
  };
}
const Re = 7, Pa = 2, Aa = (e) => {
  var S, x;
  const { state: t, setData: n } = ce(), r = Nn(null), {
    refs: o,
    context: a,
    floatingStyles: s,
    middlewareData: c
  } = ka({
    open: t.isCalendarOpen,
    onOpenChange: (P) => {
      n({ type: Z.SET_CALENDAR_OPEN, isOpen: P });
    },
    middleware: [
      _o({
        element: r
      }),
      vo(Re + Pa)
    ],
    whileElementsMounted: Ao
  }), u = ((S = c.arrow) == null ? void 0 : S.x) ?? 0, l = ((x = c.arrow) == null ? void 0 : x.y) ?? 0, p = u + Re / 2, f = l + Re, { isMounted: m, styles: d } = Ca(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: P }) => ({
      transformOrigin: {
        top: `${p}px calc(100% + ${Re}px)`,
        bottom: `${p}px ${-Re}px`,
        left: `calc(100% + ${Re}px) ${f}px`,
        right: `${-Re}px ${f}px`
      }[P]
    })
  }), v = Ea(a), y = xa(a), k = Sa(a), { getReferenceProps: w, getFloatingProps: b } = Ta([v, y, k]), C = mt();
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
}, Oa = ({ ...e }) => {
  const { state: t, setData: n } = ce(), { parseBsDate: r } = _e(), [o, a] = En(!1);
  return je(() => {
    n({
      type: Z.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), je(() => {
    n({
      type: Z.SET_THEME,
      theme: e.dark ? it.DARK : it.LIGHT
    });
  }, [e.dark]), je(() => {
    n({
      type: Z.SET_EVENTS,
      events: {
        onChange: e.onChange || t.events.onChange,
        onSelect: e.onSelect || t.events.onSelect
      }
    });
  }, [e.onChange, e.onSelect]), je(() => {
    var s, c, u, l, p, f, m, d, v;
    n({
      type: Z.SET_OPTIONS,
      options: {
        colors: {
          primary: ((c = (s = e.options) == null ? void 0 : s.colors) == null ? void 0 : c.primary) || t.options.colors.primary,
          secondary: ((l = (u = e.options) == null ? void 0 : u.colors) == null ? void 0 : l.secondary) || t.options.colors.secondary
        },
        dateSeparator: ((p = e.options) == null ? void 0 : p.dateSeparator) || t.options.dateSeparator,
        currentLocale: ((f = e.options) == null ? void 0 : f.locale) || t.options.currentLocale,
        valueLocale: ((m = e.options) == null ? void 0 : m.valueLocale) || t.options.valueLocale,
        closeOnSelect: typeof ((d = e.options) == null ? void 0 : d.closeOnSelect) > "u" ? t.options.closeOnSelect : (v = e.options) == null ? void 0 : v.closeOnSelect
      }
    }), a(!0);
  }, [e.options]), je(() => {
    if (o) {
      n({ type: Z.SET_VALUE, value: e.value || "" });
      const s = e.value ? r(e.value) : void 0, c = r(e.value || De(/* @__PURE__ */ new Date()));
      n({ type: Z.SET_CALENDAR_DATE, date: c }), n({ type: Z.SET_SELECTED_DATE, date: s });
    }
  }, [o, e.value]), /* @__PURE__ */ N.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.classNames.wrapper || ""}`,
      "data-theme": t.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ N.jsxDEV(Aa, { input: /* @__PURE__ */ N.jsxDEV(Xr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 81,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ N.jsxDEV(Fr, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 81,
        columnNumber: 69
      }, globalThis) }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    globalThis
  );
}, Ma = (e) => /* @__PURE__ */ N.jsxDEV($r, { children: /* @__PURE__ */ N.jsxDEV(Oa, { ...e }, void 0, !1, {
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
