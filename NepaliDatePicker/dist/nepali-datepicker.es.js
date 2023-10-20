import * as g from "react";
import wr, { useContext as Er, useMemo as me, useCallback as ze, useState as wn, createContext as xr, useReducer as Nr, useLayoutEffect as En, useEffect as Se, useRef as xn } from "react";
import * as Dr from "react-dom";
var Nt = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function kr() {
  if (Jt)
    return Qe;
  Jt = 1;
  var e = Symbol.for("react.fragment");
  return Qe.Fragment = e, Qe.jsxDEV = void 0, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function Tr() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = wr, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), v = Symbol.iterator, x = "@@iterator";
    function k(i) {
      if (i === null || typeof i != "object")
        return null;
      var m = v && i[v] || i[x];
      return typeof m == "function" ? m : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(i) {
      {
        for (var m = arguments.length, w = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
          w[T - 1] = arguments[T];
        P("error", i, w);
      }
    }
    function P(i, m, w) {
      {
        var T = y.ReactDebugCurrentFrame, W = T.getStackAddendum();
        W !== "" && (m += "%s", w = w.concat([W]));
        var q = w.map(function(F) {
          return String(F);
        });
        q.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, q);
      }
    }
    var j = !1, D = !1, A = !1, E = !1, H = !1, G;
    G = Symbol.for("react.module.reference");
    function X(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || H || i === o || i === l || i === p || E || i === f || j || D || A || typeof i == "object" && i !== null && (i.$$typeof === h || i.$$typeof === d || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === G || i.getModuleId !== void 0));
    }
    function S(i, m, w) {
      var T = i.displayName;
      if (T)
        return T;
      var W = m.displayName || m.name || "";
      return W !== "" ? w + "(" + W + ")" : w;
    }
    function Z(i) {
      return i.displayName || "Context";
    }
    function z(i) {
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
            var m = i;
            return Z(m) + ".Consumer";
          case s:
            var w = i;
            return Z(w._context) + ".Provider";
          case u:
            return S(i, i.render, "ForwardRef");
          case d:
            var T = i.displayName || null;
            return T !== null ? T : z(i.type) || "Memo";
          case h: {
            var W = i, q = W._payload, F = W._init;
            try {
              return z(F(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, J = 0, U, R, V, $, C, ie, L;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function O() {
      {
        if (J === 0) {
          U = console.log, R = console.info, V = console.warn, $ = console.error, C = console.group, ie = console.groupCollapsed, L = console.groupEnd;
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
    function B() {
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
              value: R
            }),
            warn: _({}, i, {
              value: V
            }),
            error: _({}, i, {
              value: $
            }),
            group: _({}, i, {
              value: C
            }),
            groupCollapsed: _({}, i, {
              value: ie
            }),
            groupEnd: _({}, i, {
              value: L
            })
          });
        }
        J < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = y.ReactCurrentDispatcher, K;
    function Q(i, m, w) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (W) {
            var T = W.stack.trim().match(/\n( *(at )?)/);
            K = T && T[1] || "";
          }
        return `
` + K + i;
      }
    }
    var fe = !1, Ne;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new Qn();
    }
    function Ft(i, m) {
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
      q = Y.current, Y.current = null, O();
      try {
        if (m) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (be) {
              T = be;
            }
            Reflect.construct(i, [], F);
          } else {
            try {
              F.call();
            } catch (be) {
              T = be;
            }
            i.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            T = be;
          }
          i();
        }
      } catch (be) {
        if (be && T && typeof be.stack == "string") {
          for (var I = be.stack.split(`
`), re = T.stack.split(`
`), ee = I.length - 1, te = re.length - 1; ee >= 1 && te >= 0 && I[ee] !== re[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (I[ee] !== re[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || I[ee] !== re[te]) {
                    var de = `
` + I[ee].replace(" at new ", " at ");
                    return i.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", i.displayName)), typeof i == "function" && Ne.set(i, de), de;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        fe = !1, Y.current = q, B(), Error.prepareStackTrace = W;
      }
      var Oe = i ? i.displayName || i.name : "", Xt = Oe ? Q(Oe) : "";
      return typeof i == "function" && Ne.set(i, Xt), Xt;
    }
    function er(i, m, w) {
      return Ft(i, !1);
    }
    function tr(i) {
      var m = i.prototype;
      return !!(m && m.isReactComponent);
    }
    function Xe(i, m, w) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ft(i, tr(i));
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
          case d:
            return Xe(i.type, m, w);
          case h: {
            var T = i, W = T._payload, q = T._init;
            try {
              return Xe(q(W), m, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Je = Object.prototype.hasOwnProperty, Vt = {}, Bt = y.ReactDebugCurrentFrame;
    function Ze(i) {
      if (i) {
        var m = i._owner, w = Xe(i.type, i._source, m ? m.type : null);
        Bt.setExtraStackFrame(w);
      } else
        Bt.setExtraStackFrame(null);
    }
    function nr(i, m, w, T, W) {
      {
        var q = Function.call.bind(Je);
        for (var F in i)
          if (q(i, F)) {
            var I = void 0;
            try {
              if (typeof i[F] != "function") {
                var re = Error((T || "React class") + ": " + w + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              I = i[F](m, F, T, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              I = ee;
            }
            I && !(I instanceof Error) && (Ze(W), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", w, F, typeof I), Ze(null)), I instanceof Error && !(I.message in Vt) && (Vt[I.message] = !0, Ze(W), b("Failed %s type: %s", w, I.message), Ze(null));
          }
      }
    }
    var rr = Array.isArray;
    function pt(i) {
      return rr(i);
    }
    function or(i) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, w = m && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return w;
      }
    }
    function ar(i) {
      try {
        return Wt(i), !1;
      } catch {
        return !0;
      }
    }
    function Wt(i) {
      return "" + i;
    }
    function Ut(i) {
      if (ar(i))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(i)), Wt(i);
    }
    var We = y.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, zt, mt;
    mt = {};
    function ir(i) {
      if (Je.call(i, "ref")) {
        var m = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function cr(i) {
      if (Je.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function lr(i, m) {
      if (typeof i.ref == "string" && We.current && m && We.current.stateNode !== m) {
        var w = z(We.current.type);
        mt[w] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(We.current.type), i.ref), mt[w] = !0);
      }
    }
    function ur(i, m) {
      {
        var w = function() {
          $t || ($t = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function fr(i, m) {
      {
        var w = function() {
          zt || (zt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var dr = function(i, m, w, T, W, q, F) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: m,
        ref: w,
        props: F,
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
    function pr(i, m, w, T, W) {
      {
        var q, F = {}, I = null, re = null;
        w !== void 0 && (Ut(w), I = "" + w), cr(m) && (Ut(m.key), I = "" + m.key), ir(m) && (re = m.ref, lr(m, W));
        for (q in m)
          Je.call(m, q) && !sr.hasOwnProperty(q) && (F[q] = m[q]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (q in ee)
            F[q] === void 0 && (F[q] = ee[q]);
        }
        if (I || re) {
          var te = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          I && ur(F, te), re && fr(F, te);
        }
        return dr(i, I, re, W, T, We.current, F);
      }
    }
    var ht = y.ReactCurrentOwner, Yt = y.ReactDebugCurrentFrame;
    function Ae(i) {
      if (i) {
        var m = i._owner, w = Xe(i.type, i._source, m ? m.type : null);
        Yt.setExtraStackFrame(w);
      } else
        Yt.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function gt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Ht() {
      {
        if (ht.current) {
          var i = z(ht.current.type);
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
          var m = i.fileName.replace(/^.*[\\\/]/, ""), w = i.lineNumber;
          return `

Check your code at ` + m + ":" + w + ".";
        }
        return "";
      }
    }
    var Kt = {};
    function hr(i) {
      {
        var m = Ht();
        if (!m) {
          var w = typeof i == "string" ? i : i.displayName || i.name;
          w && (m = `

Check the top-level render call using <` + w + ">.");
        }
        return m;
      }
    }
    function qt(i, m) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var w = hr(m);
        if (Kt[w])
          return;
        Kt[w] = !0;
        var T = "";
        i && i._owner && i._owner !== ht.current && (T = " It was passed a child from " + z(i._owner.type) + "."), Ae(i), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, T), Ae(null);
      }
    }
    function Gt(i, m) {
      {
        if (typeof i != "object")
          return;
        if (pt(i))
          for (var w = 0; w < i.length; w++) {
            var T = i[w];
            gt(T) && qt(T, m);
          }
        else if (gt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var W = k(i);
          if (typeof W == "function" && W !== i.entries)
            for (var q = W.call(i), F; !(F = q.next()).done; )
              gt(F.value) && qt(F.value, m);
        }
      }
    }
    function br(i) {
      {
        var m = i.type;
        if (m == null || typeof m == "string")
          return;
        var w;
        if (typeof m == "function")
          w = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === d))
          w = m.propTypes;
        else
          return;
        if (w) {
          var T = z(m);
          nr(w, i.props, "prop", T, i);
        } else if (m.PropTypes !== void 0 && !bt) {
          bt = !0;
          var W = z(m);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(i) {
      {
        for (var m = Object.keys(i.props), w = 0; w < m.length; w++) {
          var T = m[w];
          if (T !== "children" && T !== "key") {
            Ae(i), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Ae(null);
            break;
          }
        }
        i.ref !== null && (Ae(i), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    function vr(i, m, w, T, W, q) {
      {
        var F = X(i);
        if (!F) {
          var I = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = mr(W);
          re ? I += re : I += Ht();
          var ee;
          i === null ? ee = "null" : pt(i) ? ee = "array" : i !== void 0 && i.$$typeof === t ? (ee = "<" + (z(i.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, I);
        }
        var te = pr(i, m, w, W, q);
        if (te == null)
          return te;
        if (F) {
          var de = m.children;
          if (de !== void 0)
            if (T)
              if (pt(de)) {
                for (var Oe = 0; Oe < de.length; Oe++)
                  Gt(de[Oe], i);
                Object.freeze && Object.freeze(de);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gt(de, i);
        }
        return i === r ? gr(te) : br(te), te;
      }
    }
    var yr = vr;
    et.Fragment = r, et.jsxDEV = yr;
  }()), et;
}
process.env.NODE_ENV === "production" ? Nt.exports = kr() : Nt.exports = Tr();
var N = Nt.exports;
const jt = (e) => {
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
}, Nn = (e) => {
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
}, Ke = () => ({ omitKeys: (o, a) => Object.entries(a).reduce((s, [c, u]) => o.includes(c) ? { ...s } : { ...s, [c]: u }, {}), getObject: (o, a, s = null) => {
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
}, zeroPad: (o, a = 2) => String(o).padStart(a, "0") }), xe = () => {
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
}, De = (
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
), Dn = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = "AD"), this.dateType = "AD", this.date = { year: 0, month: 0, day: 0 }, t ? this.setDate(t, n) : this.setDate(/* @__PURE__ */ new Date());
    }
    return e.prototype.setDate = function(t, n) {
      if (n === void 0 && (n = "AD"), De.dateType(n), n === "BS") {
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
      return De.adYear(n), De.adMonth(r), De.adDay(o), { year: n, month: r, day: o };
    }, e.prototype.splitBsDate = function(t) {
      var n = this.splitDate(t), r = n.year, o = n.month, a = n.day;
      return De.bsYear(r), De.bsMonth(o), De.bsDay(a), { year: r, month: o, day: a };
    }, e.prototype.format = function(t) {
      var n = se.outputSeparator, r = t.year, o = t.month, a = t.day;
      return "" + r + n + this.zeroPad(o) + n + this.zeroPad(a);
    }, e.prototype.zeroPad = function(t) {
      return t > 9 ? "" + t : "0" + t;
    }, e;
  }()
), Qt = function(e) {
  return new Dn().setDate(e, "BS").toAD();
}, Dt = function(e) {
  return new Dn().setDate(e, "AD").toBS();
}, at = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(at || {}), Ue = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(Ue || {}), kt = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(kt || {}), oe = /* @__PURE__ */ ((e) => (e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(oe || {});
const Sr = () => {
  const { state: e } = xe(), t = (l, p) => {
    const d = p || e.options.dateSeparator, h = `^[0-9]{4}${d}(0?[1-9]|1[0-2])${d}(0?[1-9]|[1-2][0-9]|3[0-2])$`, f = new RegExp(h);
    if (!l.match(f))
      throw new TypeError(`${l} is invalid date format.`);
  }, n = (l) => {
    const p = e.calendarData.minBsYear, d = e.calendarData.maxBsYear;
    if (l < p || l > d)
      throw new RangeError(`Date between ${p} BS to ${d} BS is only supported.`);
  }, r = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("BS month should be in range of 1 to 12");
  }, o = (l) => {
    if (l < 1 || l > 32)
      throw new RangeError("BS day should be in range of 1 to 32");
  }, a = (l) => {
    const p = e.calendarData.minBsYear - 57, d = e.calendarData.maxBsYear - 57;
    if (l < p || l > d)
      throw new RangeError(`Date between ${p} AD to ${d} AD is only supported.`);
  }, s = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("AD month should be in range of 1 to 12");
  }, c = (l) => {
    if (l < 1 || l > 31)
      throw new RangeError("AD day should be in range of 1 to 31");
  };
  return {
    validateInputDate: t,
    validateDateObject: (l, p = kt.BS) => {
      const { year: d, month: h, day: f } = l;
      if (p === kt.BS) {
        n(d), r(h), o(f);
        return;
      }
      a(d), s(h), c(f);
    },
    validateBsYear: n,
    validateAdYear: a,
    validateBsMonth: r,
    validateAdMonth: s,
    validateBsDay: o,
    validateAdDay: c
  };
}, kn = () => {
  const e = Sr(), t = Ke(), { state: n } = xe(), r = (c, u) => {
    e.validateInputDate(c, u);
    const [l, p, d] = c.split(u || n.options.dateSeparator);
    return {
      year: parseInt(l),
      month: parseInt(p),
      day: parseInt(d)
    };
  }, o = (c, u) => {
    const l = u || n.options.dateSeparator;
    return `${c.year}${l}${t.zeroPad(c.month)}${l}${t.zeroPad(c.day)}${l}`;
  }, a = (c, u) => {
    e.validateBsYear(c), e.validateBsMonth(u);
    let l = 0;
    const p = c + 1 - n.calendarData.minBsYear;
    return n.calendarData.bsMonthCalculatedData[u - 1].reduce((h, f, v) => {
      if (f === 0 || h !== 0)
        return h;
      const x = v % 2;
      return l += f, p > l ? h : c === 2085 && u === 5 || c === 2088 && u === 5 ? n.calendarData.bsMonthMaxDays[u - 1][x] - 2 : n.calendarData.bsMonthMaxDays[u - 1][x];
    }, 0);
  };
  return {
    splitDate: r,
    parseBsDate: (c, u) => {
      const { year: l, month: p, day: d } = r(c, u);
      e.validateDateObject({ year: l, month: p, day: d });
      const h = o({ year: l, month: p, day: 1 }), f = Qt(h), v = new Date(f), x = a(l, p), k = new Date(Qt(c));
      return {
        bsDay: d,
        bsMonth: p,
        bsYear: l,
        weekDay: k.getDay(),
        adDate: k,
        firstAdDayInBsMonth: v,
        numberOfDaysInBsMonth: x
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
  const { state: e } = xe(), { getObject: t } = Ke();
  return {
    trans: (n, r) => t(Qr[r || e.options.currentLocale], n, n),
    numberTrans: (n, r) => Ue.ENGLISH === `${r || e.options.currentLocale}` ? jr(n) : Rr(n)
  };
}, Pr = () => {
  const { trans: e } = ge();
  return /* @__PURE__ */ N.jsxDEV(jt, { className: "ndp-font-medium ndp-border hover:ndp-text-red-500", title: e("labels.clear"), children: [
    /* @__PURE__ */ N.jsxDEV(Yr, { className: "ndp-w-4 ndp-h-4" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.clear") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/clear-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Cr = () => {
  const { numberTrans: e } = ge(), { range: t } = Ke(), { state: n } = xe(), r = kn(), o = me(() => n.date.calendar || r.parseBsDate(Dt(/* @__PURE__ */ new Date())), [n.date.calendar]), a = me(() => n.date.selected, [n.date.selected]), s = me(() => Math.ceil((o.firstAdDayInBsMonth.getDay() + o.numberOfDaysInBsMonth) / 7) - 1, [o]), c = me(() => o.bsMonth - 1 === 0 ? 12 : o.bsMonth - 1, [o]), u = me(() => c === 12 ? o.bsYear - 1 : o.bsYear, [c, o]), l = me(() => u >= n.calendarData.minBsYear ? r.getNumberOfDaysInBSMonth(u, c) : 30, [u, c]), p = ze((d, h) => {
    let f = d * 7 + h - o.firstAdDayInBsMonth.getDay();
    const v = o.bsMonth, x = o.bsYear;
    let k = !0;
    f <= 0 ? (f = l + f, k = !1) : f > o.numberOfDaysInBsMonth && (f -= o.numberOfDaysInBsMonth, k = !1);
    const y = r.splitDate(Dt(/* @__PURE__ */ new Date())), b = k ? y.day === f && y.month === v && y.year === x : !1, P = k ? (a == null ? void 0 : a.bsDay) === f && (a == null ? void 0 : a.bsMonth) === v && (a == null ? void 0 : a.bsYear) === x : !1;
    return { day: f, month: v, year: x, isCurrentMonth: k, isToday: b, isSelected: P };
  }, [o, a, l]);
  return /* @__PURE__ */ N.jsxDEV("tbody", { children: t(0, s).map((d) => /* @__PURE__ */ N.jsxDEV("tr", { className: "ndp-border-0", children: t(1, 7).map((h) => {
    const f = p(d, h);
    return /* @__PURE__ */ N.jsxDEV(
      "td",
      {
        className: `
                  ndp-border-0 ndp-h-10 ndp-w-10  ndp-rounded-full
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${f.isSelected ? `
                    ndp-bg-primary ndp-text-secondary ndp-m-2
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}

                  ${!f.isCurrentMonth && `
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `}
                `,
        title: e(f.day),
        children: [
          e(f.day),
          f.isToday && /* @__PURE__ */ N.jsxDEV("div", { className: `
                  ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                  ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                ` }, void 0, !1, {
            fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, globalThis)
        ]
      },
      h,
      !0,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
        lineNumber: 82,
        columnNumber: 15
      },
      globalThis
    );
  }) }, d, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, globalThis);
}, Sn = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const [s, c] = wn(!1), u = me(() => e.find((d) => d.value === n), [n]), l = ze(() => {
    c((d) => !d);
  }, []), p = ze((d) => {
    c(!1), t(d);
  }, [t]);
  return /* @__PURE__ */ N.jsxDEV("div", { className: "ndp-relative", children: [
    /* @__PURE__ */ N.jsxDEV(
      jt,
      {
        onClick: l,
        onKeyDown: l,
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
    s && /* @__PURE__ */ N.jsxDEV("ul", { className: `
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
          ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          ${a || ""}
        `, children: e.map((d) => /* @__PURE__ */ N.jsxDEV(
      "li",
      {
        onClick: () => p(d),
        onKeyDown: () => p(d),
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
  var o;
  const { trans: e } = ge(), { state: t } = xe(), n = me(() => Ar.map((a, s) => ({
    label: e(`months.${a}`),
    value: s
  })), []), r = ze((a) => {
    console.log(a);
  }, []);
  return /* @__PURE__ */ N.jsxDEV(
    Sn,
    {
      options: n,
      value: (((o = t.date.calendar) == null ? void 0 : o.bsMonth) || 1) - 1,
      onSelect: r,
      className: "ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center",
      dropdownClass: "ndp-rounded-r-sm ndp-rounded-bl-sm",
      title: e("labels.select-month")
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/month-picker.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    globalThis
  );
}, Mr = () => {
  const { trans: e } = ge();
  return /* @__PURE__ */ N.jsxDEV(Nn, { title: e("labels.next"), children: /* @__PURE__ */ N.jsxDEV(Kr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Ir = () => {
  const { trans: e } = ge();
  return /* @__PURE__ */ N.jsxDEV(Nn, { title: e("labels.previous"), children: /* @__PURE__ */ N.jsxDEV(Hr, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Lr = () => {
  const { trans: e, numberTrans: t } = ge();
  return /* @__PURE__ */ N.jsxDEV(jt, { className: "ndp-font-medium ndp-border hover:ndp-text-primary ndp-group", title: e("labels.today"), children: [
    /* @__PURE__ */ N.jsxDEV(qr, { date: t(20) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV("span", { className: "ndp-ml-2", children: e("labels.today") }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/today-btn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, globalThis);
}, Fr = () => {
  const { trans: e } = ge(), t = me(() => Or.map((n, r) => ({
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
      lineNumber: 21,
      columnNumber: 11
    },
    globalThis
  )) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/week-days.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, globalThis);
}, Vr = () => {
  var s;
  const { state: e } = xe(), { numberTrans: t, trans: n } = ge(), { range: r } = Ke(), o = me(() => r(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((c) => ({
    label: t(c),
    value: c
  })), []), a = ze((c) => {
    console.log(c);
  }, []);
  return /* @__PURE__ */ N.jsxDEV(
    Sn,
    {
      options: o,
      value: ((s = e.date.calendar) == null ? void 0 : s.bsYear) || 0,
      onSelect: a,
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
}, Br = () => /* @__PURE__ */ N.jsxDEV("div", { className: `
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
    /* @__PURE__ */ N.jsxDEV(Fr, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ N.jsxDEV(Cr, {}, void 0, !1, {
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
    /* @__PURE__ */ N.jsxDEV(Pr, {}, void 0, !1, {
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
  theme: at.LIGHT,
  value: "",
  events: {
    onChange: void 0,
    onSelect: void 0
  },
  locale: {
    calendar: Ue.NEPALI,
    value: Ue.NEPALI
  },
  options: {
    colors: {
      primary: "#2096f5",
      secondary: "#fff"
    },
    dateSeparator: "-",
    currentLocale: Ue.NEPALI
  },
  calendarData: {
    minBsYear: 1970,
    maxBsYear: 2100,
    bsMonthMaxDays: Wr,
    bsMonthCalculatedData: Ur
  },
  date: {
    calendar: void 0,
    selected: void 0
  }
}, $r = (e = Pt, t) => t.type === oe.SET_VALUE ? { ...e, value: t.value } : t.type === oe.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === oe.SET_THEME ? { ...e, theme: t.theme } : t.type === oe.SET_EVENTS ? { ...e, events: t.events } : t.type === oe.SET_OPTIONS ? { ...e, options: t.options } : t.type === oe.SET_CALENDAR_DATE ? { ...e, date: { ...e.date, calendar: t.date } } : t.type === oe.SET_SELECTED_DATE ? { ...e, date: { ...e.date, selected: t.date } } : e, Rn = xr({
  state: Pt,
  dispatch: () => null
}), zr = ({ children: e }) => {
  const [t, n] = Nr($r, Pt);
  return /* @__PURE__ */ N.jsxDEV(Rn.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, Yr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
), Hr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
), Kr = ({ className: e }) => /* @__PURE__ */ N.jsxDEV(
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
  const { state: t } = xe(), { numberTrans: n } = ge(), { omitKeys: r } = Ke(), o = r([...Gr, "type", "readOnly"], e);
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
function we(e) {
  return jn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (jn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function jn(e) {
  return e instanceof Node || e instanceof le(e).Node;
}
function ne(e) {
  return e instanceof Element || e instanceof le(e).Element;
}
function ae(e) {
  return e instanceof HTMLElement || e instanceof le(e).HTMLElement;
}
function Tt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot;
}
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eo(e) {
  return ["table", "td", "th"].includes(we(e));
}
function Ct(e) {
  const t = At(), n = ue(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function to(e) {
  let t = Pe(e);
  for (; ae(t) && !Ge(t); ) {
    if (Ct(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function At() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ge(e) {
  return ["html", "body", "#document"].includes(we(e));
}
function ue(e) {
  return le(e).getComputedStyle(e);
}
function ft(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Pe(e) {
  if (we(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tt(e) && e.host || // Fallback.
    ve(e)
  );
  return Tt(t) ? t.host : t;
}
function Pn(e) {
  const t = Pe(e);
  return Ge(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && qe(t) ? t : Pn(t);
}
function ye(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Pn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = le(o);
  return a ? t.concat(s, s.visualViewport || [], qe(o) ? o : [], s.frameElement && n ? ye(s.frameElement) : []) : t.concat(o, ye(o, [], n));
}
function Ie(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ce(e, t) {
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
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Cn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ao(e) {
  return !Cn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function so() {
  return /apple/i.test(navigator.vendor);
}
function Cn() {
  const e = /android/i;
  return e.test(no()) || e.test(ro());
}
function en(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function io(e) {
  return "nativeEvent" in e;
}
function co(e) {
  return e.matches("html,body");
}
function he(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function vt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Le(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const lo = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function An(e) {
  return ae(e) && e.matches(lo);
}
function yt(e) {
  e.preventDefault(), e.stopPropagation();
}
const Be = Math.min, je = Math.max, st = Math.round, tt = Math.floor, Ee = (e) => ({
  x: e,
  y: e
});
function uo(e, t, n) {
  return je(e, Be(t, n));
}
function On(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ot(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function fo(e) {
  return e === "x" ? "y" : "x";
}
function _n(e) {
  return e === "y" ? "height" : "width";
}
function Mt(e) {
  return ["top", "bottom"].includes(Ot(e)) ? "y" : "x";
}
function Mn(e) {
  return fo(Mt(e));
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
function tn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Mt(t), s = Mn(t), c = _n(s), u = Ot(t), l = a === "y", p = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[c] / 2 - o[c] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (_t(t)) {
    case "start":
      f[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[s] += h * (n && l ? -1 : 1);
      break;
  }
  return f;
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
    y: d
  } = tn(l, r, u), h = r, f = {}, v = 0;
  for (let x = 0; x < c.length; x++) {
    const {
      name: k,
      fn: y
    } = c[x], {
      x: b,
      y: P,
      data: j,
      reset: D
    } = await y({
      x: p,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (p = b ?? p, d = P ?? d, f = {
      ...f,
      [k]: {
        ...f[k],
        ...j
      }
    }, D && v <= 50) {
      v++, typeof D == "object" && (D.placement && (h = D.placement), D.rects && (l = D.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : D.rects), {
        x: p,
        y: d
      } = tn(l, h, u)), x = -1;
      continue;
    }
  }
  return {
    x: p,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: f
  };
}, nn = (e) => ({
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
    const d = mo(p), h = {
      x: n,
      y: r
    }, f = Mn(o), v = _n(f), x = await s.getDimensions(l), k = f === "y", y = k ? "top" : "left", b = k ? "bottom" : "right", P = k ? "clientHeight" : "clientWidth", j = a.reference[v] + a.reference[f] - h[f] - a.floating[v], D = h[f] - a.reference[f], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let E = A ? A[P] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(A))) && (E = c.floating[P] || a.floating[v]);
    const H = j / 2 - D / 2, G = E / 2 - x[v] / 2 - 1, X = Be(d[y], G), S = Be(d[b], G), Z = X, z = E - x[v] - S, _ = E / 2 - x[v] / 2 + H, J = uo(Z, _, z), U = !u.arrow && _t(o) != null && _ != J && a.reference[v] / 2 - (_ < Z ? X : S) - x[v] / 2 < 0, R = U ? _ < Z ? _ - Z : _ - z : 0;
    return {
      [f]: h[f] + R,
      data: {
        [f]: J,
        centerOffset: _ - J - R,
        ...U && {
          alignmentOffset: R
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
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ot(n), c = _t(n), u = Mt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, p = a && u ? -1 : 1, d = On(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
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
  return c && typeof v == "number" && (f = c === "end" ? v * -1 : v), u ? {
    x: f * p,
    y: h * l
  } : {
    x: h * l,
    y: f * p
  };
}
const go = function(e) {
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
  const t = ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ae(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = st(n) !== a || st(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function It(e) {
  return ne(e) ? e : e.contextElement;
}
function Ve(e) {
  const t = It(e);
  if (!ae(t))
    return Ee(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ln(t);
  let s = (a ? st(n.width) : n.width) / r, c = (a ? st(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const vo = /* @__PURE__ */ Ee(0);
function Fn(e) {
  const t = le(e);
  return !At() || !t.visualViewport ? vo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== le(e) ? !1 : t;
}
function Ce(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = It(e);
  let s = Ee(1);
  t && (r ? ne(r) && (s = Ve(r)) : s = Ve(e));
  const c = yo(a, n, r) ? Fn(a) : Ee(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, p = o.width / s.x, d = o.height / s.y;
  if (a) {
    const h = le(a), f = r && ne(r) ? le(r) : r;
    let v = h.frameElement;
    for (; v && r && f !== h; ) {
      const x = Ve(v), k = v.getBoundingClientRect(), y = ue(v), b = k.left + (v.clientLeft + parseFloat(y.paddingLeft)) * x.x, P = k.top + (v.clientTop + parseFloat(y.paddingTop)) * x.y;
      u *= x.x, l *= x.y, p *= x.x, d *= x.y, u += b, l += P, v = le(v).frameElement;
    }
  }
  return In({
    width: p,
    height: d,
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
  const o = ae(n), a = ve(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ee(1);
  const u = Ee(0);
  if ((o || !o && r !== "fixed") && ((we(n) !== "body" || qe(a)) && (s = ft(n)), ae(n))) {
    const l = Ce(n);
    c = Ve(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
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
  return Ce(ve(e)).left + ft(e).scrollLeft;
}
function xo(e) {
  const t = ve(e), n = ft(e), r = e.ownerDocument.body, o = je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vn(e);
  const c = -n.scrollTop;
  return ue(r).direction === "rtl" && (s += je(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function No(e, t) {
  const n = le(e), r = ve(e), o = n.visualViewport;
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
function Do(e, t) {
  const n = Ce(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ae(e) ? Ve(e) : Ee(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function rn(e, t, n) {
  let r;
  if (t === "viewport")
    r = No(e, n);
  else if (t === "document")
    r = xo(ve(e));
  else if (ne(t))
    r = Do(t, n);
  else {
    const o = Fn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return In(r);
}
function Bn(e, t) {
  const n = Pe(e);
  return n === t || !ne(n) || Ge(n) ? !1 : ue(n).position === "fixed" || Bn(n, t);
}
function ko(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ye(e, [], !1).filter((c) => ne(c) && we(c) !== "body"), o = null;
  const a = ue(e).position === "fixed";
  let s = a ? Pe(e) : e;
  for (; ne(s) && !Ge(s); ) {
    const c = ue(s), u = Ct(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qe(s) && !u && Bn(e, s)) ? r = r.filter((p) => p !== s) : o = c, s = Pe(s);
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
    const d = rn(t, p, o);
    return l.top = je(d.top, l.top), l.right = Be(d.right, l.right), l.bottom = Be(d.bottom, l.bottom), l.left = je(d.left, l.left), l;
  }, rn(t, c, o));
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
  const r = ae(t), o = ve(t), a = n === "fixed", s = Ce(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ee(0);
  if (r || !r && !a)
    if ((we(t) !== "body" || qe(o)) && (c = ft(t)), r) {
      const l = Ce(t, !0, a, t);
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
function on(e, t) {
  return !ae(e) || ue(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wn(e, t) {
  const n = le(e);
  if (!ae(e))
    return n;
  let r = on(e, t);
  for (; r && eo(r) && ue(r).position === "static"; )
    r = on(r, t);
  return r && (we(r) === "html" || we(r) === "body" && ue(r).position === "static" && !Ct(r)) ? n : r || to(e) || n;
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
function Po(e) {
  return ue(e).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wo,
  getDocumentElement: ve,
  getClippingRect: To,
  getOffsetParent: Wn,
  getElementRects: jo,
  getClientRects: Eo,
  getDimensions: So,
  getScale: Ve,
  isElement: ne,
  isRTL: Po
};
function Co(e, t) {
  let n = null, r;
  const o = ve(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const {
      left: l,
      top: p,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !d || !h)
      return;
    const f = tt(p), v = tt(o.clientWidth - (l + d)), x = tt(o.clientHeight - (p + h)), k = tt(l), b = {
      rootMargin: -f + "px " + -v + "px " + -x + "px " + -k + "px",
      threshold: je(0, Be(1, u)) || 1
    };
    let P = !0;
    function j(D) {
      const A = D[0].intersectionRatio;
      if (A !== u) {
        if (!P)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      P = !1;
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
  } = r, l = It(e), p = o || a ? [...l ? ye(l) : [], ...ye(t)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = l && c ? Co(l, n) : null;
  let h = -1, f = null;
  s && (f = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === l && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      f && f.observe(t);
    })), n();
  }), l && !u && f.observe(l), f.observe(t));
  let v, x = u ? Ce(e) : null;
  u && k();
  function k() {
    const y = Ce(e);
    x && (y.x !== x.x || y.y !== x.y || y.width !== x.width || y.height !== x.height) && n(), x = y, v = requestAnimationFrame(k);
  }
  return n(), () => {
    p.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, u && cancelAnimationFrame(v);
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
      return r && t(r) ? r.current != null ? nn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? nn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var ot = typeof document < "u" ? En : Se;
function it(e, t) {
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
        if (!it(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !it(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $n(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function an(e, t) {
  const n = $n(e);
  return Math.round(t * n) / n;
}
function sn(e) {
  const t = g.useRef(e);
  return ot(() => {
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
  } = e, [p, d] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, f] = g.useState(r);
  it(h, r) || f(r);
  const [v, x] = g.useState(null), [k, y] = g.useState(null), b = g.useCallback((U) => {
    U != A.current && (A.current = U, x(U));
  }, [x]), P = g.useCallback((U) => {
    U !== E.current && (E.current = U, y(U));
  }, [y]), j = a || v, D = s || k, A = g.useRef(null), E = g.useRef(null), H = g.useRef(p), G = sn(u), X = sn(o), S = g.useCallback(() => {
    if (!A.current || !E.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: h
    };
    X.current && (U.platform = X.current), Oo(A.current, E.current, U).then((R) => {
      const V = {
        ...R,
        isPositioned: !0
      };
      Z.current && !it(H.current, V) && (H.current = V, Dr.flushSync(() => {
        d(V);
      }));
    });
  }, [h, t, n, X]);
  ot(() => {
    l === !1 && H.current.isPositioned && (H.current.isPositioned = !1, d((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [l]);
  const Z = g.useRef(!1);
  ot(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), ot(() => {
    if (j && (A.current = j), D && (E.current = D), j && D) {
      if (G.current)
        return G.current(j, D, S);
      S();
    }
  }, [j, D, S, G]);
  const z = g.useMemo(() => ({
    reference: A,
    floating: E,
    setReference: b,
    setFloating: P
  }), [b, P]), _ = g.useMemo(() => ({
    reference: j,
    floating: D
  }), [j, D]), J = g.useMemo(() => {
    const U = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return U;
    const R = an(_.floating, p.x), V = an(_.floating, p.y);
    return c ? {
      ...U,
      transform: "translate(" + R + "px, " + V + "px)",
      ...$n(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: V
    };
  }, [n, c, _.floating, p.x, p.y]);
  return g.useMemo(() => ({
    ...p,
    update: S,
    refs: z,
    elements: _,
    floatingStyles: J
  }), [p, S, z, _, J]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Io = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], St = /* @__PURE__ */ Io.join(","), zn = typeof Element > "u", Ye = zn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ct = !zn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, lt = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = o === "" || o === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Lo = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Fo = function(t, n, r) {
  if (lt(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(St));
  return n && Ye.call(t, St) && o.unshift(t), o = o.filter(r), o;
}, Vo = function e(t, n, r) {
  for (var o = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!lt(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, l = e(u, !0, r);
        r.flatten ? o.push.apply(o, l) : o.push({
          scopeParent: s,
          candidates: l
        });
      } else {
        var p = Ye.call(s, St);
        p && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var d = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), h = !lt(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (d && h) {
          var f = e(d === !0 ? s.children : d.children, !0, r);
          r.flatten ? o.push.apply(o, f) : o.push({
            scopeParent: s,
            candidates: f
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return o;
}, Yn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Hn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Lo(t)) && !Yn(t) ? 0 : t.tabIndex;
}, Bo = function(t, n) {
  var r = Hn(t);
  return r < 0 && n && !Yn(t) ? 0 : r;
}, Wo = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Kn = function(t) {
  return t.tagName === "INPUT";
}, Uo = function(t) {
  return Kn(t) && t.type === "hidden";
}, $o = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, zo = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Yo = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ct(t), r = function(c) {
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
  var a = zo(o, t.form);
  return !a || a === t;
}, Ho = function(t) {
  return Kn(t) && t.type === "radio";
}, Ko = function(t) {
  return Ho(t) && !Yo(t);
}, qo = function(t) {
  var n, r = t && ct(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (r && r !== t) {
    var s, c, u;
    for (a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !a && o; ) {
      var l, p, d;
      r = ct(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((p = o) !== null && p !== void 0 && (d = p.ownerDocument) !== null && d !== void 0 && d.contains(o));
    }
  }
  return a;
}, cn = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Go = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = Ye.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (Ye.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = ct(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return cn(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (qo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return cn(t);
  return !1;
}, Xo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Ye.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
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
  lt(n) || Uo(n) || Go(n, t) || // For a details element with a summary, the summary element gets the focus
  $o(n) || Xo(n));
}, ln = function(t, n) {
  return !(Ko(n) || Hn(n) < 0 || !Jo(t, n));
}, Zo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Qo = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, a) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = Bo(c, s), l = s ? e(o.candidates) : c;
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
    filter: ln.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zo
  }) : r = Fo(t, n.includeContainer, ln.bind(null, n)), Qo(r);
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
let un = 0;
function ke(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(un);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? a() : un = requestAnimationFrame(a);
}
var pe = typeof document < "u" ? En : Se;
function He() {
  return He = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, He.apply(this, arguments);
}
let wt = !1, na = 0;
const fn = () => "floating-ui-" + na++;
function ra() {
  const [e, t] = g.useState(() => wt ? fn() : void 0);
  return pe(() => {
    e == null && t(fn());
  }, []), g.useEffect(() => {
    wt || (wt = !0);
  }, []), e;
}
const oa = g[/* @__PURE__ */ "useId".toString()], dt = oa || ra, aa = /* @__PURE__ */ g.forwardRef(function(t, n) {
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
    stroke: d,
    d: h,
    style: {
      transform: f,
      ...v
    } = {},
    ...x
  } = t;
  process.env.NODE_ENV !== "production" && (n || console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component."));
  const k = dt();
  if (!o)
    return null;
  l *= 2;
  const y = l / 2, b = s / 2 * (u / -8 + 1), P = c / 2 * u / 4, [j, D] = r.split("-"), A = Un.isRTL(o), E = !!h, H = j === "top" || j === "bottom", G = p && D === "end" ? "bottom" : "top";
  let X = p && D === "end" ? "right" : "left";
  p && A && (X = D === "end" ? "left" : "right");
  const S = (a == null ? void 0 : a.x) != null ? p || a.x : "", Z = (a == null ? void 0 : a.y) != null ? p || a.y : "", z = h || "M0,0" + (" H" + s) + (" L" + (s - b) + "," + (c - P)) + (" Q" + s / 2 + "," + c + " " + b + "," + (c - P)) + " Z", _ = {
    top: E ? "rotate(180deg)" : "",
    left: E ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: E ? "" : "rotate(180deg)",
    right: E ? "rotate(-90deg)" : "rotate(90deg)"
  }[j];
  return /* @__PURE__ */ g.createElement("svg", He({}, x, {
    "aria-hidden": !0,
    ref: n,
    width: E ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [X]: S,
      [G]: Z,
      [j]: H || E ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + _ + (f ?? ""),
      ...v
    }
  }), l > 0 && /* @__PURE__ */ g.createElement("path", {
    clipPath: "url(#" + k + ")",
    fill: "none",
    stroke: d,
    strokeWidth: l + (h ? 0 : 1),
    d: z
  }), /* @__PURE__ */ g.createElement("path", {
    stroke: l && !h ? x.fill : "none",
    d: z
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
}, Lt = () => g.useContext(ca);
function ut(e) {
  return "data-floating-ui-" + e;
}
function Re(e) {
  const t = xn(e);
  return pe(() => {
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
function $e(e, t) {
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
let _e = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakSet(), rt = {}, Et = 0;
const fa = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Gn = (e) => e && (e.host || Gn(e.parentNode)), da = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Gn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function pa(e, t, n, r) {
  const o = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = da(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), l = [];
  rt[o] || (rt[o] = /* @__PURE__ */ new WeakMap());
  const p = rt[o];
  s.forEach(d), h(t), c.clear();
  function d(f) {
    !f || c.has(f) || (c.add(f), f.parentNode && d(f.parentNode));
  }
  function h(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, (v) => {
      if (c.has(v))
        h(v);
      else {
        const x = a ? v.getAttribute(a) : null, k = x !== null && x !== "false", y = (_e.get(v) || 0) + 1, b = (p.get(v) || 0) + 1;
        _e.set(v, y), p.set(v, b), l.push(v), y === 1 && k && nt.add(v), b === 1 && v.setAttribute(o, ""), !k && a && v.setAttribute(a, "true");
      }
    });
  }
  return Et++, () => {
    l.forEach((f) => {
      const v = (_e.get(f) || 0) - 1, x = (p.get(f) || 0) - 1;
      _e.set(f, v), p.set(f, x), v || (!nt.has(f) && a && f.removeAttribute(a), nt.delete(f)), x || f.removeAttribute(o);
    }), Et--, Et || (_e = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakSet(), rt = {});
  };
}
function dn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = he(e[0]).body;
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
  const r = n.indexOf(Ie(he(e)));
  return n.slice(r + 1)[0];
}
function ma() {
  return Jn(document.body, "next");
}
function ha() {
  return Jn(document.body, "prev");
}
function pn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !ce(n, r);
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
function mn(e) {
  e.key === "Tab" && (e.target, clearTimeout(ba));
}
const hn = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const [r, o] = g.useState();
  pe(() => (so() && o("button"), document.addEventListener("keydown", mn), () => {
    document.removeEventListener("keydown", mn);
  }), []);
  const a = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [ut("focus-guard")]: "",
    style: Zn
  };
  return /* @__PURE__ */ g.createElement("span", He({}, t, a));
}), ga = /* @__PURE__ */ g.createContext(null), va = () => g.useContext(ga), ya = /* @__PURE__ */ g.forwardRef(function(t, n) {
  return /* @__PURE__ */ g.createElement("button", He({}, t, {
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
    open: d,
    refs: h,
    nodeId: f,
    onOpenChange: v,
    events: x,
    dataRef: k,
    elements: {
      domReference: y,
      floating: b
    }
  } = t, P = typeof s == "number" && s < 0, j = (y == null ? void 0 : y.getAttribute("role")) === "combobox" && An(y) && P, D = j ? !1 : u, A = fa() ? a : !0, E = Re(o), H = Re(s), G = Re(c), X = Lt(), S = va(), Z = g.useRef(null), z = g.useRef(null), _ = g.useRef(!1), J = g.useRef(null), U = g.useRef(!1), R = S != null, V = g.useCallback(function(L) {
    return L === void 0 && (L = b), L ? qn(L, Xn()) : [];
  }, [b]), $ = g.useCallback((L) => {
    const M = V(L);
    return E.current.map((O) => y && O === "reference" ? y : b && O === "floating" ? b : M).filter(Boolean).flat();
  }, [y, b, E, V]);
  g.useEffect(() => {
    if (r || !D)
      return;
    function L(O) {
      if (O.key === "Tab") {
        ce(b, Ie(he(b))) && V().length === 0 && !j && yt(O);
        const B = $(), Y = Le(O);
        E.current[0] === "reference" && Y === y && (yt(O), O.shiftKey ? ke(B[B.length - 1]) : ke(B[1])), E.current[1] === "floating" && Y === b && O.shiftKey && (yt(O), ke(B[0]));
      }
    }
    const M = he(b);
    return M.addEventListener("keydown", L), () => {
      M.removeEventListener("keydown", L);
    };
  }, [r, y, b, D, E, h, j, V, $]), g.useEffect(() => {
    if (r || !p)
      return;
    function L() {
      U.current = !0, setTimeout(() => {
        U.current = !1;
      });
    }
    function M(O) {
      const B = O.relatedTarget;
      queueMicrotask(() => {
        const Y = !(ce(y, B) || ce(b, B) || ce(B, b) || ce(S == null ? void 0 : S.portalNode, B) || B != null && B.hasAttribute(ut("focus-guard")) || X && ($e(X.nodesRef.current, f).find((K) => {
          var Q, fe;
          return ce((Q = K.context) == null ? void 0 : Q.elements.floating, B) || ce((fe = K.context) == null ? void 0 : fe.elements.domReference, B);
        }) || ua(X.nodesRef.current, f).find((K) => {
          var Q, fe;
          return ((Q = K.context) == null ? void 0 : Q.elements.floating) === B || ((fe = K.context) == null ? void 0 : fe.elements.domReference) === B;
        })));
        B && Y && !U.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        B !== J.current && (_.current = !0, v(!1, O));
      });
    }
    if (b && ae(y))
      return y.addEventListener("focusout", M), y.addEventListener("pointerdown", L), !D && b.addEventListener("focusout", M), () => {
        y.removeEventListener("focusout", M), y.removeEventListener("pointerdown", L), !D && b.removeEventListener("focusout", M);
      };
  }, [r, y, b, D, f, X, S, v, p]), g.useEffect(() => {
    var L;
    if (r)
      return;
    const M = Array.from((S == null || (L = S.portalNode) == null ? void 0 : L.querySelectorAll("[" + ut("portal") + "]")) || []);
    if (b) {
      const O = [b, ...M, Z.current, z.current, E.current.includes("reference") || j ? y : null].filter((Y) => Y != null), B = u || j ? dn(O, A, !A) : dn(O);
      return () => {
        B();
      };
    }
  }, [r, y, b, u, E, S, j, A]), pe(() => {
    if (r || !b)
      return;
    const L = he(b), M = Ie(L);
    queueMicrotask(() => {
      const O = $(b), B = H.current, Y = (typeof B == "number" ? O[B] : B.current) || b, K = ce(b, M);
      !P && !K && d && ke(Y, {
        preventScroll: Y === b
      });
    });
  }, [r, d, b, P, $, H]), pe(() => {
    if (r || !b)
      return;
    let L = !1;
    const M = he(b), O = Ie(M), B = k.current;
    J.current = O;
    function Y(K) {
      if (K.type === "escapeKey" && h.domReference.current && (J.current = h.domReference.current), ["referencePress", "escapeKey"].includes(K.type))
        return;
      const Q = K.data.returnFocus;
      typeof Q == "object" ? (_.current = !1, L = Q.preventScroll) : _.current = !Q;
    }
    return x.on("dismiss", Y), () => {
      x.off("dismiss", Y);
      const K = Ie(M);
      (ce(b, K) || X && $e(X.nodesRef.current, f).some((fe) => {
        var Ne;
        return ce((Ne = fe.context) == null ? void 0 : Ne.elements.floating, K);
      }) || B.openEvent && ["click", "mousedown"].includes(B.openEvent.type)) && h.domReference.current && (J.current = h.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      G.current && ae(J.current) && !_.current && ke(J.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: L
      });
    };
  }, [r, b, G, k, h, x, X, f]), pe(() => {
    if (!(r || !S))
      return S.setFocusManagerState({
        modal: D,
        closeOnFocusOut: p,
        open: d,
        onOpenChange: v,
        refs: h
      }), () => {
        S.setFocusManagerState(null);
      };
  }, [r, S, D, d, v, h, p]), pe(() => {
    if (r || !b || typeof MutationObserver != "function" || P)
      return;
    const L = () => {
      const O = b.getAttribute("tabindex");
      E.current.includes("floating") || Ie(he(b)) !== h.domReference.current && V().length === 0 ? O !== "0" && b.setAttribute("tabindex", "0") : O !== "-1" && b.setAttribute("tabindex", "-1");
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
  }, [r, b, h, E, V, P]);
  function C(L) {
    return r || !l || !D ? null : /* @__PURE__ */ g.createElement(ya, {
      ref: L === "start" ? Z : z,
      onClick: (M) => v(!1, M.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const ie = !r && A && (R || D);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, ie && /* @__PURE__ */ g.createElement(hn, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.beforeInsideRef,
    onFocus: (L) => {
      if (D) {
        const O = $();
        ke(o[0] === "reference" ? O[0] : O[O.length - 1]);
      } else if (S != null && S.preserveTabOrder && S.portalNode)
        if (_.current = !1, pn(L, S.portalNode)) {
          const O = ma() || y;
          O == null || O.focus();
        } else {
          var M;
          (M = S.beforeOutsideRef.current) == null || M.focus();
        }
    }
  }), !j && C("start"), n, C("end"), ie && /* @__PURE__ */ g.createElement(hn, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.afterInsideRef,
    onFocus: (L) => {
      if (D)
        ke($()[0]);
      else if (S != null && S.preserveTabOrder && S.portalNode)
        if (p && (_.current = !0), pn(L, S.portalNode)) {
          const O = ha() || y;
          O == null || O.focus();
        } else {
          var M;
          (M = S.afterOutsideRef.current) == null || M.focus();
        }
    }
  }));
}
function bn(e) {
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
  } = t, d = g.useRef(), h = g.useRef(!1);
  return g.useMemo(() => s ? {
    reference: {
      onPointerDown(f) {
        d.current = f.pointerType;
      },
      onMouseDown(f) {
        f.button === 0 && (en(d.current, !0) && l || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, f.nativeEvent) : (f.preventDefault(), r(!0, f.nativeEvent))));
      },
      onClick(f) {
        if (c === "mousedown" && d.current) {
          d.current = void 0;
          return;
        }
        en(d.current, !0) && l || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, f.nativeEvent) : r(!0, f.nativeEvent));
      },
      onKeyDown(f) {
        d.current = void 0, !(f.defaultPrevented || !p || bn(f)) && (f.key === " " && !gn(a) && (f.preventDefault(), h.current = !0), f.key === "Enter" && r(!(n && u), f.nativeEvent));
      },
      onKeyUp(f) {
        f.defaultPrevented || !p || bn(f) || gn(a) || f.key === " " && h.current && (h.current = !1, r(!(n && u), f.nativeEvent));
      }
    }
  } : {}, [s, o, c, l, p, a, u, n, r]);
}
const xa = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Na = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, vn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Da(e, t) {
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
    escapeKey: d = !0,
    outsidePress: h = !0,
    outsidePressEvent: f = "pointerdown",
    referencePress: v = !1,
    referencePressEvent: x = "pointerdown",
    ancestorScroll: k = !1,
    bubbles: y,
    capture: b
  } = t, P = Lt(), j = la() != null, D = Fe(typeof h == "function" ? h : () => !1), A = typeof h == "function" ? D : h, E = g.useRef(!1), H = g.useRef(!1), {
    escapeKey: G,
    outsidePress: X
  } = vn(y), {
    escapeKey: S,
    outsidePress: Z
  } = vn(b), z = Fe((R) => {
    if (!n || !p || !d || R.key !== "Escape")
      return;
    const V = P ? $e(P.nodesRef.current, a) : [];
    if (!G && (R.stopPropagation(), V.length > 0)) {
      let $ = !0;
      if (V.forEach((C) => {
        var ie;
        if ((ie = C.context) != null && ie.open && !C.context.dataRef.current.__escapeKeyBubbles) {
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
    }), r(!1, io(R) ? R.nativeEvent : R);
  }), _ = Fe((R) => {
    var V;
    const $ = () => {
      var C;
      z(R), (C = Le(R)) == null || C.removeEventListener("keydown", $);
    };
    (V = Le(R)) == null || V.addEventListener("keydown", $);
  }), J = Fe((R) => {
    const V = E.current;
    E.current = !1;
    const $ = H.current;
    if (H.current = !1, f === "click" && $ || V || typeof A == "function" && !A(R))
      return;
    const C = Le(R), ie = "[" + ut("inert") + "]", L = he(u).querySelectorAll(ie);
    let M = ne(C) ? C : null;
    for (; M && !Ge(M); ) {
      const Y = Pe(M);
      if (Y === he(u).body || !ne(Y))
        break;
      M = Y;
    }
    if (L.length && ne(C) && !co(C) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ce(C, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(L).every((Y) => !ce(M, Y)))
      return;
    if (ae(C) && u) {
      const Y = C.clientWidth > 0 && C.scrollWidth > C.clientWidth, K = C.clientHeight > 0 && C.scrollHeight > C.clientHeight;
      let Q = K && R.offsetX > C.clientWidth;
      if (K && ue(C).direction === "rtl" && (Q = R.offsetX <= C.offsetWidth - C.clientWidth), Q || Y && R.offsetY > C.clientHeight)
        return;
    }
    const O = P && $e(P.nodesRef.current, a).some((Y) => {
      var K;
      return vt(R, (K = Y.context) == null ? void 0 : K.elements.floating);
    });
    if (vt(R, u) || vt(R, c) || O)
      return;
    const B = P ? $e(P.nodesRef.current, a) : [];
    if (B.length > 0) {
      let Y = !0;
      if (B.forEach((K) => {
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
        } : oo(R) || ao(R)
      }
    }), r(!1, R);
  }), U = Fe((R) => {
    var V;
    const $ = () => {
      var C;
      J(R), (C = Le(R)) == null || C.removeEventListener(f, $);
    };
    (V = Le(R)) == null || V.addEventListener(f, $);
  });
  return g.useEffect(() => {
    if (!n || !p)
      return;
    l.current.__escapeKeyBubbles = G, l.current.__outsidePressBubbles = X;
    function R(C) {
      r(!1, C);
    }
    const V = he(u);
    d && V.addEventListener("keydown", S ? _ : z, S), A && V.addEventListener(f, Z ? U : J, Z);
    let $ = [];
    return k && (ne(c) && ($ = ye(c)), ne(u) && ($ = $.concat(ye(u))), !ne(s) && s && s.contextElement && ($ = $.concat(ye(s.contextElement)))), $ = $.filter((C) => {
      var ie;
      return C !== ((ie = V.defaultView) == null ? void 0 : ie.visualViewport);
    }), $.forEach((C) => {
      C.addEventListener("scroll", R, {
        passive: !0
      });
    }), () => {
      d && V.removeEventListener("keydown", S ? _ : z, S), A && V.removeEventListener(f, Z ? U : J, Z), $.forEach((C) => {
        C.removeEventListener("scroll", R);
      });
    };
  }, [l, u, c, s, d, A, f, n, r, k, p, G, X, z, S, _, J, Z, U]), g.useEffect(() => {
    E.current = !1;
  }, [A, f]), g.useMemo(() => p ? {
    reference: {
      onKeyDown: z,
      [xa[x]]: (R) => {
        v && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, R.nativeEvent));
      }
    },
    floating: {
      onKeyDown: z,
      onMouseDown() {
        H.current = !0;
      },
      onMouseUp() {
        H.current = !0;
      },
      [Na[f]]: () => {
        E.current = !0;
      }
    }
  } : {}, [p, o, v, f, x, r, z]);
}
let Rt;
process.env.NODE_ENV !== "production" && (Rt = /* @__PURE__ */ new Set());
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
      if (!((s = Rt) != null && s.has(E))) {
        var c;
        (c = Rt) == null || c.add(E), console.error(E);
      }
    }
  }
  const [u, l] = g.useState(null), p = ((t = e.elements) == null ? void 0 : t.reference) || u, d = Mo(e), h = Lt(), f = Fe((E, H) => {
    E && (x.current.openEvent = H), r == null || r(E, H);
  }), v = g.useRef(null), x = g.useRef({}), k = g.useState(() => sa())[0], y = dt(), b = g.useCallback((E) => {
    const H = ne(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      contextElement: E
    } : E;
    d.refs.setReference(H);
  }, [d.refs]), P = g.useCallback((E) => {
    (ne(E) || E === null) && (v.current = E, l(E)), (ne(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !ne(E)) && d.refs.setReference(E);
  }, [d.refs]), j = g.useMemo(() => ({
    ...d.refs,
    setReference: P,
    setPositionReference: b,
    domReference: v
  }), [d.refs, P, b]), D = g.useMemo(() => ({
    ...d.elements,
    domReference: p
  }), [d.elements, p]), A = g.useMemo(() => ({
    ...d,
    refs: j,
    elements: D,
    dataRef: x,
    nodeId: o,
    floatingId: y,
    events: k,
    open: n,
    onOpenChange: f
  }), [d, o, y, k, n, f, j, D]);
  return pe(() => {
    const E = h == null ? void 0 : h.nodesRef.current.find((H) => H.id === o);
    E && (E.context = A);
  }), g.useMemo(() => ({
    ...d,
    context: A,
    refs: j,
    elements: D
  }), [d, j, D, A]);
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
            for (var p, d = arguments.length, h = new Array(d), f = 0; f < d; f++)
              h[f] = arguments[f];
            return (p = r.get(c)) == null ? void 0 : p.map((v) => v(...h)).find((v) => v !== void 0);
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
  } = t, s = dt();
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
const yn = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function Me(e, t) {
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
  } = t, s = (typeof o == "number" ? o : o.close) || 0, [c, u] = g.useState(!1), [l, p] = g.useState("unmounted"), d = Ra(n, s);
  return pe(() => {
    c && !d && p("unmounted");
  }, [c, d]), pe(() => {
    if (r)
      if (n) {
        p("initial");
        const h = requestAnimationFrame(() => {
          p("open");
        });
        return () => {
          cancelAnimationFrame(h);
        };
      } else
        u(!0), p("close");
  }, [n, r]), {
    isMounted: d,
    status: l
  };
}
function Pa(e, t) {
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
  }), [u, c]), p = typeof s == "number", d = (p ? s : s.open) || 0, h = (p ? s : s.close) || 0, [f, v] = g.useState(() => ({
    ...Me(a, l),
    ...Me(n, l)
  })), {
    isMounted: x,
    status: k
  } = ja(e, {
    duration: s
  }), y = Re(n), b = Re(r), P = Re(o), j = Re(a);
  return pe(() => {
    const D = Me(y.current, l), A = Me(P.current, l), E = Me(j.current, l), H = Me(b.current, l) || Object.keys(D).reduce((G, X) => (G[X] = "", G), {});
    if (k === "initial" && v((G) => ({
      transitionProperty: G.transitionProperty,
      ...E,
      ...D
    })), k === "open" && v({
      transitionProperty: Object.keys(H).map(yn).join(","),
      transitionDuration: d + "ms",
      ...E,
      ...H
    }), k === "close") {
      const G = A || D;
      v({
        transitionProperty: Object.keys(G).map(yn).join(","),
        transitionDuration: h + "ms",
        ...E,
        ...G
      });
    }
  }, [h, P, y, b, j, d, k, l]), {
    isMounted: x,
    styles: f
  };
}
const Te = 7, Ca = 2, Aa = (e) => {
  var j, D;
  const [t, n] = wn(!0), r = xn(null), {
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
      go(Te + Ca)
    ],
    whileElementsMounted: Ao
  }), u = ((j = c.arrow) == null ? void 0 : j.x) ?? 0, l = ((D = c.arrow) == null ? void 0 : D.y) ?? 0, p = u + Te / 2, d = l + Te, { isMounted: h, styles: f } = Pa(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: A }) => ({
      transformOrigin: {
        top: `${p}px calc(100% + ${Te}px)`,
        bottom: `${p}px ${-Te}px`,
        left: `calc(100% + ${Te}px) ${d}px`,
        right: `${-Te}px ${d}px`
      }[A]
    })
  }), v = Ea(a), x = Da(a), k = Sa(a), { getReferenceProps: y, getFloatingProps: b } = Ta([v, x, k]), P = dt();
  return /* @__PURE__ */ N.jsxDEV(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxDEV("div", { ref: o.setReference, ...y(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, globalThis),
    t && /* @__PURE__ */ N.jsxDEV(wa, { context: a, modal: !1, children: h ? /* @__PURE__ */ N.jsxDEV("div", { ref: o.setFloating, style: s, "aria-labelledby": P, ...b(), children: /* @__PURE__ */ N.jsxDEV("div", { style: f, children: [
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
}, Oa = ({ ...e }) => {
  const { state: t, setData: n } = xe(), { parseBsDate: r } = kn();
  return Se(() => {
    n({ type: oe.SET_VALUE, value: e.value || "" });
    const o = e.value ? r(e.value) : void 0, a = r(e.value || Dt(/* @__PURE__ */ new Date()));
    n({ type: oe.SET_CALENDAR_DATE, date: a }), n({ type: oe.SET_SELECTED_DATE, date: o });
  }, [e.value]), Se(() => {
    n({
      type: oe.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), Se(() => {
    n({
      type: oe.SET_THEME,
      theme: e.dark ? at.DARK : at.LIGHT
    });
  }, [e.dark]), Se(() => {
    n({
      type: oe.SET_EVENTS,
      events: {
        onChange: e.onChange || void 0,
        onSelect: e.onSelect || void 0
      }
    });
  }, [e.onChange, e.onSelect]), Se(() => {
    var o, a, s, c, u;
    n({
      type: oe.SET_OPTIONS,
      options: {
        colors: {
          primary: ((a = (o = e.options) == null ? void 0 : o.colors) == null ? void 0 : a.primary) || t.options.colors.primary,
          secondary: ((c = (s = e.options) == null ? void 0 : s.colors) == null ? void 0 : c.secondary) || t.options.colors.secondary
        },
        dateSeparator: ((u = e.options) == null ? void 0 : u.dateSeparator) || t.options.dateSeparator,
        currentLocale: t.options.currentLocale
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
      children: /* @__PURE__ */ N.jsxDEV(Aa, { input: /* @__PURE__ */ N.jsxDEV(Xr, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 74,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ N.jsxDEV(Br, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 74,
        columnNumber: 69
      }, globalThis) }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, globalThis)
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    globalThis
  );
}, Ma = (e) => /* @__PURE__ */ N.jsxDEV(zr, { children: /* @__PURE__ */ N.jsxDEV(Oa, { ...e }, void 0, !1, {
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
