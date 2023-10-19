import * as h from "react";
import en, { useMemo as Fe, useState as ar, useCallback as qe, createContext as tn, useReducer as rn, useContext as nn, useLayoutEffect as sr, useEffect as Ee, useRef as on } from "react";
import * as an from "react-dom";
var bt = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function sn() {
  if (Ut)
    return ze;
  Ut = 1;
  var e = Symbol.for("react.fragment");
  return ze.Fragment = e, ze.jsxDEV = void 0, ze;
}
var $e = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function cn() {
  return zt || (zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = en, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), w = Symbol.iterator, k = "@@iterator";
    function B(i) {
      if (i === null || typeof i != "object")
        return null;
      var d = w && i[w] || i[k];
      return typeof d == "function" ? d : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(i) {
      {
        for (var d = arguments.length, b = new Array(d > 1 ? d - 1 : 0), N = 1; N < d; N++)
          b[N - 1] = arguments[N];
        M("error", i, b);
      }
    }
    function M(i, d, b) {
      {
        var N = g.ReactDebugCurrentFrame, F = N.getStackAddendum();
        F !== "" && (d += "%s", b = b.concat([F]));
        var $ = b.map(function(_) {
          return String(_);
        });
        $.unshift("Warning: " + d), Function.prototype.apply.call(console[i], console, $);
      }
    }
    var V = !1, D = !1, U = !1, x = !1, q = !1, oe;
    oe = Symbol.for("react.module.reference");
    function ee(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || q || i === o || i === f || i === v || x || i === l || V || D || U || typeof i == "object" && i !== null && (i.$$typeof === y || i.$$typeof === p || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === oe || i.getModuleId !== void 0));
    }
    function S(i, d, b) {
      var N = i.displayName;
      if (N)
        return N;
      var F = d.displayName || d.name || "";
      return F !== "" ? b + "(" + F + ")" : b;
    }
    function te(i) {
      return i.displayName || "Context";
    }
    function K(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var d = i;
            return te(d) + ".Consumer";
          case s:
            var b = i;
            return te(b._context) + ".Provider";
          case u:
            return S(i, i.render, "ForwardRef");
          case p:
            var N = i.displayName || null;
            return N !== null ? N : K(i.type) || "Memo";
          case y: {
            var F = i, $ = F._payload, _ = F._init;
            try {
              return K(_($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, J = 0, H, T, A, L, R, ie, O;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function j() {
      {
        if (J === 0) {
          H = console.log, T = console.info, A = console.warn, L = console.error, R = console.group, ie = console.groupCollapsed, O = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: C,
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
    function I() {
      {
        if (J--, J === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, i, {
              value: H
            }),
            info: Y({}, i, {
              value: T
            }),
            warn: Y({}, i, {
              value: A
            }),
            error: Y({}, i, {
              value: L
            }),
            group: Y({}, i, {
              value: R
            }),
            groupCollapsed: Y({}, i, {
              value: ie
            }),
            groupEnd: Y({}, i, {
              value: O
            })
          });
        }
        J < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = g.ReactCurrentDispatcher, z;
    function G(i, d, b) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (F) {
            var N = F.stack.trim().match(/\n( *(at )?)/);
            z = N && N[1] || "";
          }
        return `
` + z + i;
      }
    }
    var le = !1, ye;
    {
      var _r = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new _r();
    }
    function St(i, d) {
      if (!i || le)
        return "";
      {
        var b = ye.get(i);
        if (b !== void 0)
          return b;
      }
      var N;
      le = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = W.current, W.current = null, j();
      try {
        if (d) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (pe) {
              N = pe;
            }
            Reflect.construct(i, [], _);
          } else {
            try {
              _.call();
            } catch (pe) {
              N = pe;
            }
            i.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            N = pe;
          }
          i();
        }
      } catch (pe) {
        if (pe && N && typeof pe.stack == "string") {
          for (var P = pe.stack.split(`
`), re = N.stack.split(`
`), X = P.length - 1, Z = re.length - 1; X >= 1 && Z >= 0 && P[X] !== re[Z]; )
            Z--;
          for (; X >= 1 && Z >= 0; X--, Z--)
            if (P[X] !== re[Z]) {
              if (X !== 1 || Z !== 1)
                do
                  if (X--, Z--, Z < 0 || P[X] !== re[Z]) {
                    var ue = `
` + P[X].replace(" at new ", " at ");
                    return i.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", i.displayName)), typeof i == "function" && ye.set(i, ue), ue;
                  }
                while (X >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        le = !1, W.current = $, I(), Error.prepareStackTrace = F;
      }
      var Te = i ? i.displayName || i.name : "", Mt = Te ? G(Te) : "";
      return typeof i == "function" && ye.set(i, Mt), Mt;
    }
    function Ar(i, d, b) {
      return St(i, !1);
    }
    function Ir(i) {
      var d = i.prototype;
      return !!(d && d.isReactComponent);
    }
    function We(i, d, b) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return St(i, Ir(i));
      if (typeof i == "string")
        return G(i);
      switch (i) {
        case f:
          return G("Suspense");
        case v:
          return G("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return Ar(i.render);
          case p:
            return We(i.type, d, b);
          case y: {
            var N = i, F = N._payload, $ = N._init;
            try {
              return We($(F), d, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, jt = {}, Ct = g.ReactDebugCurrentFrame;
    function Ue(i) {
      if (i) {
        var d = i._owner, b = We(i.type, i._source, d ? d.type : null);
        Ct.setExtraStackFrame(b);
      } else
        Ct.setExtraStackFrame(null);
    }
    function Fr(i, d, b, N, F) {
      {
        var $ = Function.call.bind(Me);
        for (var _ in i)
          if ($(i, _)) {
            var P = void 0;
            try {
              if (typeof i[_] != "function") {
                var re = Error((N || "React class") + ": " + b + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              P = i[_](d, _, N, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              P = X;
            }
            P && !(P instanceof Error) && (Ue(F), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", b, _, typeof P), Ue(null)), P instanceof Error && !(P.message in jt) && (jt[P.message] = !0, Ue(F), m("Failed %s type: %s", b, P.message), Ue(null));
          }
      }
    }
    var Lr = Array.isArray;
    function it(i) {
      return Lr(i);
    }
    function Vr(i) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, b = d && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b;
      }
    }
    function Wr(i) {
      try {
        return Pt(i), !1;
      } catch {
        return !0;
      }
    }
    function Pt(i) {
      return "" + i;
    }
    function Ot(i) {
      if (Wr(i))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(i)), Pt(i);
    }
    var Oe = g.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _t, At, at;
    at = {};
    function Ur(i) {
      if (Me.call(i, "ref")) {
        var d = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function zr(i) {
      if (Me.call(i, "key")) {
        var d = Object.getOwnPropertyDescriptor(i, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function $r(i, d) {
      if (typeof i.ref == "string" && Oe.current && d && Oe.current.stateNode !== d) {
        var b = K(Oe.current.type);
        at[b] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Oe.current.type), i.ref), at[b] = !0);
      }
    }
    function Br(i, d) {
      {
        var b = function() {
          _t || (_t = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Yr(i, d) {
      {
        var b = function() {
          At || (At = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        b.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Hr = function(i, d, b, N, F, $, _) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: d,
        ref: b,
        props: _,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Kr(i, d, b, N, F) {
      {
        var $, _ = {}, P = null, re = null;
        b !== void 0 && (Ot(b), P = "" + b), zr(d) && (Ot(d.key), P = "" + d.key), Ur(d) && (re = d.ref, $r(d, F));
        for ($ in d)
          Me.call(d, $) && !Mr.hasOwnProperty($) && (_[$] = d[$]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for ($ in X)
            _[$] === void 0 && (_[$] = X[$]);
        }
        if (P || re) {
          var Z = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          P && Br(_, Z), re && Yr(_, Z);
        }
        return Hr(i, P, re, F, N, Oe.current, _);
      }
    }
    var st = g.ReactCurrentOwner, It = g.ReactDebugCurrentFrame;
    function ke(i) {
      if (i) {
        var d = i._owner, b = We(i.type, i._source, d ? d.type : null);
        It.setExtraStackFrame(b);
      } else
        It.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function lt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Ft() {
      {
        if (st.current) {
          var i = K(st.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function qr(i) {
      {
        if (i !== void 0) {
          var d = i.fileName.replace(/^.*[\\\/]/, ""), b = i.lineNumber;
          return `

Check your code at ` + d + ":" + b + ".";
        }
        return "";
      }
    }
    var Lt = {};
    function Gr(i) {
      {
        var d = Ft();
        if (!d) {
          var b = typeof i == "string" ? i : i.displayName || i.name;
          b && (d = `

Check the top-level render call using <` + b + ">.");
        }
        return d;
      }
    }
    function Vt(i, d) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var b = Gr(d);
        if (Lt[b])
          return;
        Lt[b] = !0;
        var N = "";
        i && i._owner && i._owner !== st.current && (N = " It was passed a child from " + K(i._owner.type) + "."), ke(i), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, N), ke(null);
      }
    }
    function Wt(i, d) {
      {
        if (typeof i != "object")
          return;
        if (it(i))
          for (var b = 0; b < i.length; b++) {
            var N = i[b];
            lt(N) && Vt(N, d);
          }
        else if (lt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var F = B(i);
          if (typeof F == "function" && F !== i.entries)
            for (var $ = F.call(i), _; !(_ = $.next()).done; )
              lt(_.value) && Vt(_.value, d);
        }
      }
    }
    function Xr(i) {
      {
        var d = i.type;
        if (d == null || typeof d == "string")
          return;
        var b;
        if (typeof d == "function")
          b = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === p))
          b = d.propTypes;
        else
          return;
        if (b) {
          var N = K(d);
          Fr(b, i.props, "prop", N, i);
        } else if (d.PropTypes !== void 0 && !ct) {
          ct = !0;
          var F = K(d);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(i) {
      {
        for (var d = Object.keys(i.props), b = 0; b < d.length; b++) {
          var N = d[b];
          if (N !== "children" && N !== "key") {
            ke(i), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), ke(null);
            break;
          }
        }
        i.ref !== null && (ke(i), m("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    function Zr(i, d, b, N, F, $) {
      {
        var _ = ee(i);
        if (!_) {
          var P = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = qr(F);
          re ? P += re : P += Ft();
          var X;
          i === null ? X = "null" : it(i) ? X = "array" : i !== void 0 && i.$$typeof === t ? (X = "<" + (K(i.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, P);
        }
        var Z = Kr(i, d, b, F, $);
        if (Z == null)
          return Z;
        if (_) {
          var ue = d.children;
          if (ue !== void 0)
            if (N)
              if (it(ue)) {
                for (var Te = 0; Te < ue.length; Te++)
                  Wt(ue[Te], i);
                Object.freeze && Object.freeze(ue);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(ue, i);
        }
        return i === n ? Jr(Z) : Xr(Z), Z;
      }
    }
    var Qr = Zr;
    $e.Fragment = n, $e.jsxDEV = Qr;
  }()), $e;
}
process.env.NODE_ENV === "production" ? bt.exports = sn() : bt.exports = cn();
var E = bt.exports;
const ln = () => /* @__PURE__ */ E.jsxDEV("button", { children: /* @__PURE__ */ E.jsxDEV(Nn, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
  lineNumber: 8,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/next-btn.tsx",
  lineNumber: 7,
  columnNumber: 5
}, globalThis), un = (e, t) => Object.entries(t).reduce((r, [n, o]) => e.includes(n) ? { ...r } : { ...r, [n]: o }, {}), fn = (e, t, r = null) => {
  let n = { ...e };
  try {
    t.split(".").forEach((o) => {
      if (!Object.keys(n).includes(o))
        throw new Error(`No property ${o} found in the object. Please define defaultValue.`);
      n = n[o];
    });
  } catch (o) {
    if (r)
      return r;
    throw o;
  }
  return n;
}, vt = (e, t, r = 1) => {
  const n = [];
  for (let o = e; o <= t; o += r)
    n.push(o);
  return n;
}, dn = () => {
  const { numberTrans: e } = nt(), t = Fe(() => 5, []);
  return /* @__PURE__ */ E.jsxDEV("tbody", { children: vt(0, t).map((r) => /* @__PURE__ */ E.jsxDEV("tr", { className: "ndp-border-0", children: vt(1, 7).map((n) => /* @__PURE__ */ E.jsxDEV(
    "td",
    {
      className: `
                  ndp-border-0 ndp-h-10 ndp-w-10  ndp-rounded-full
                  ndp-relative ndp-cursor-pointer hover-transition
                  ${r === 2 && n === 3 ? `
                    ndp-bg-primary ndp-text-secondary ndp-m-2
                    hover:ndp-opacity-80
                  ` : `
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}
                `,
      children: [
        e(n * (r + 1)),
        r === 3 && n === 5 && /* @__PURE__ */ E.jsxDEV("div", { className: `
                  ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                  ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                ` }, void 0, !1, {
          fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, globalThis)
      ]
    },
    n,
    !0,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
      lineNumber: 15,
      columnNumber: 13
    },
    globalThis
  )) }, r, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, globalThis)) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/day-picker.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, globalThis);
}, cr = ({ options: e, onSelect: t, value: r, className: n }) => {
  const [o, a] = ar(!1), s = Fe(() => e.find((f) => f.value === r), [r]), c = qe(() => {
    a((f) => !f);
  }, []), u = qe((f) => {
    a(!1), t(f);
  }, [t]);
  return /* @__PURE__ */ E.jsxDEV("div", { className: "ndp-relative", children: [
    /* @__PURE__ */ E.jsxDEV(
      "button",
      {
        onClick: c,
        onKeyDown: c,
        className: `
                ndp-border-gray-300
                ndp-px-3 ndp-py-2
                ndp-leading-tight ndp-tracking-normal
                ${n || ""}
              `,
        children: s == null ? void 0 : s.label
      },
      void 0,
      !1,
      {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      globalThis
    ),
    o && /* @__PURE__ */ E.jsxDEV("ul", { className: `
          ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
          ndp-absolute ndp-w-full
          ndp-bg-white dark:ndp-bg-slate-900
          ndp-top-0 ndp-z-10
        `, children: e.map((f) => /* @__PURE__ */ E.jsxDEV(
      "li",
      {
        onClick: () => u(f),
        onKeyDown: () => u(f),
        role: "button",
        className: `
                  ndp-px-3 ndp-py-2 hover-transition
                  ${f.value === r ? `
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
        lineNumber: 53,
        columnNumber: 13
      },
      globalThis
    )) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/dropdown/dropdown.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, globalThis);
}, pn = [
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
], mn = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], hn = () => {
  const { trans: e } = nt(), t = Fe(() => pn.map((n, o) => ({
    label: e(`months.${n}`),
    value: o
  })), []), r = qe((n) => {
    console.log(n);
  }, []);
  return /* @__PURE__ */ E.jsxDEV(
    cr,
    {
      options: t,
      value: 6,
      onSelect: r,
      className: "ndp-border"
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
}, bn = () => /* @__PURE__ */ E.jsxDEV("button", { children: /* @__PURE__ */ E.jsxDEV(xn, { className: "ndp-w-5 ndp-h-5" }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
  lineNumber: 8,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/previous-btn.tsx",
  lineNumber: 7,
  columnNumber: 5
}, globalThis), vn = () => {
  const { trans: e } = nt(), t = Fe(() => mn.map((r, n) => ({
    label: e(`weeks.${r}`),
    value: n
  })), []);
  return /* @__PURE__ */ E.jsxDEV("thead", { children: /* @__PURE__ */ E.jsxDEV("tr", { className: "ndp-border-0", children: t.map((r) => /* @__PURE__ */ E.jsxDEV(
    "td",
    {
      className: "ndp-border-0 ndp-h-10 ndp-w-10",
      children: r.label
    },
    r.value,
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
}, gn = () => {
  const { state: e } = rt(), { numberTrans: t } = nt(), r = Fe(() => vt(e.config.minYear, e.config.maxYear).reverse().map((o) => ({
    label: t(o),
    value: o
  })), []), n = qe((o) => {
    console.log(o);
  }, []);
  return /* @__PURE__ */ E.jsxDEV(
    cr,
    {
      options: r,
      value: 2080,
      onSelect: n,
      className: "ndp-border-y ndp-border-l"
    },
    void 0,
    !1,
    {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/year-picker.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    globalThis
  );
}, yn = () => /* @__PURE__ */ E.jsxDEV("div", { className: `
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
  /* @__PURE__ */ E.jsxDEV("div", { className: "ndp-flex ndp-items-center ndp-justify-between", children: [
    /* @__PURE__ */ E.jsxDEV(bn, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ E.jsxDEV("div", { className: "ndp-flex", children: [
      /* @__PURE__ */ E.jsxDEV(gn, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, globalThis),
      /* @__PURE__ */ E.jsxDEV(hn, {}, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, globalThis)
    ] }, void 0, !0, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ E.jsxDEV(ln, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ E.jsxDEV("table", { className: "ndp-text-center ndp-w-full ndp-border-0", children: [
    /* @__PURE__ */ E.jsxDEV(vn, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ E.jsxDEV(dn, {}, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, globalThis),
  /* @__PURE__ */ E.jsxDEV("div", { className: "", children: [
    /* @__PURE__ */ E.jsxDEV("button", { children: "Today" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, globalThis),
    /* @__PURE__ */ E.jsxDEV("button", { children: "Clear" }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, globalThis)
] }, void 0, !0, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
  lineNumber: 13,
  columnNumber: 5
}, globalThis);
var Ge = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(Ge || {}), _e = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(_e || {}), fe = /* @__PURE__ */ ((e) => (e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_OPTIONS = "SET_OPTIONS", e))(fe || {});
const xt = {
  classNames: {
    wrapper: "",
    input: ""
  },
  theme: Ge.LIGHT,
  value: "",
  events: {
    onChange: void 0,
    onSelect: void 0
  },
  locale: {
    calendar: _e.NEPALI,
    value: _e.NEPALI
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
    currentLocale: _e.NEPALI
  }
}, wn = (e = xt, t) => t.type === fe.SET_VALUE ? { ...e, value: t.value } : t.type === fe.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === fe.SET_THEME ? { ...e, theme: t.theme } : t.type === fe.SET_EVENTS ? { ...e, events: t.events } : t.type === fe.SET_OPTIONS ? { ...e, options: t.options } : e, lr = tn({
  state: xt,
  dispatch: () => null
}), En = ({ children: e }) => {
  const [t, r] = rn(wn, xt);
  return /* @__PURE__ */ E.jsxDEV(lr.Provider, { value: { state: t, dispatch: r }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, rt = () => {
  const { state: e, dispatch: t } = nn(lr);
  return { setData: (n) => {
    t(n);
  }, state: e };
}, xn = ({ className: e }) => /* @__PURE__ */ E.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ E.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }, void 0, !1, {
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
), Nn = ({ className: e }) => /* @__PURE__ */ E.jsxDEV(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e || "",
    children: /* @__PURE__ */ E.jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }, void 0, !1, {
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
), kn = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options"
], Tn = (e) => {
  const t = un([...kn, "type", "readOnly"], e), { state: r } = rt();
  return /* @__PURE__ */ E.jsxDEV(
    "input",
    {
      type: "text",
      className: r.classNames.input || `
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
      value: r.value,
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
var ur = (
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
      var r = this;
      return t = t || this.numberString, t ? t.toString().split("").map(function(n) {
        return isNaN(parseInt(n)) ? n : r.digitMapping[n] || n;
      }).join("") : "";
    }, e.prototype.toEnglish = function(t) {
      var r = this;
      return t = t || this.numberString, t ? t.toString().split("").map(function(n) {
        var o = r.digitMapping.findIndex(function(a) {
          return a === n;
        });
        return o === -1 ? n : "" + o;
      }).join("") : "";
    }, e.prototype.formatNumber = function(t) {
      if (!this.supportedNumberType.includes(t))
        throw new TypeError("Currently 'en-US' and 'en-IN' only supported as a `type` parameter.");
      var r = parseFloat(this.toEnglish());
      if (isNaN(r))
        return this.numberString;
      var n = new Intl.NumberFormat(t).format(r);
      return this.outputLocale === "en" ? this.toEnglish(n) : this.toNepali(n);
    }, e.prototype.formatAmount = function(t, r) {
      if (r === void 0 && (r = 2), !this.supportedNumberType.includes(t))
        throw new TypeError("Currently 'en-US' and 'en-IN' only supported as a `type` parameter.");
      var n = parseFloat(this.toEnglish());
      if (isNaN(n))
        return this.numberString;
      var o = new Intl.NumberFormat(t, {
        maximumFractionDigits: r,
        minimumFractionDigits: r
      }).format(n);
      return this.outputLocale === "en" ? this.toEnglish(o) : this.toNepali(o);
    }, e;
  }()
), Rn = function(e) {
  return new ur().setNumber(e).toNepali();
}, Dn = function(e) {
  return new ur().setNumber(e).toEnglish();
};
const Sn = {
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
    previous: "Previous",
    next: "Next",
    today: "Today"
  }
}, jn = {
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
    previous: "अघिल्लो",
    next: "अर्को",
    today: "आज"
  }
}, Cn = {
  en: Sn,
  ne: jn
}, nt = () => {
  const { state: e } = rt();
  return {
    trans: (t, r) => fn(Cn[r || e.config.currentLocale], t, t),
    numberTrans: (t, r) => _e.ENGLISH === `${r || e.config.currentLocale}` ? Dn(t) : Rn(t)
  };
};
function ve(e) {
  return fr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function me(e) {
  var t;
  return (t = (fr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fr(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function Q(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ne(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function gt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function Le(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function Pn(e) {
  return ["table", "td", "th"].includes(ve(e));
}
function Nt(e) {
  const t = kt(), r = ce(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function On(e) {
  let t = xe(e);
  for (; ne(t) && !Ve(t); ) {
    if (Nt(t))
      return t;
    t = xe(t);
  }
  return null;
}
function kt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ve(e) {
  return ["html", "body", "#document"].includes(ve(e));
}
function ce(e) {
  return se(e).getComputedStyle(e);
}
function ot(e) {
  return Q(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function xe(e) {
  if (ve(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gt(e) && e.host || // Fallback.
    me(e)
  );
  return gt(t) ? t.host : t;
}
function dr(e) {
  const t = xe(e);
  return Ve(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ne(t) && Le(t) ? t : dr(t);
}
function be(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = dr(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = se(o);
  return a ? t.concat(s, s.visualViewport || [], Le(o) ? o : [], s.frameElement && r ? be(s.frameElement) : []) : t.concat(o, be(o, [], r));
}
function De(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (n = r.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var r, n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ae(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && gt(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function _n() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function An() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: r,
      version: n
    } = t;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
function In(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : pr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Fn(e) {
  return !pr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Ln() {
  return /apple/i.test(navigator.vendor);
}
function pr() {
  const e = /android/i;
  return e.test(_n()) || e.test(An());
}
function $t(e, t) {
  const r = ["mouse", "pen"];
  return t || r.push("", void 0), r.includes(e);
}
function Vn(e) {
  return "nativeEvent" in e;
}
function Wn(e) {
  return e.matches("html,body");
}
function de(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function ut(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
function Se(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Mn = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function mr(e) {
  return ne(e) && e.matches(Mn);
}
function ft(e) {
  e.preventDefault(), e.stopPropagation();
}
const yt = Math.min, Ce = Math.max, Xe = Math.round, Be = Math.floor, ge = (e) => ({
  x: e,
  y: e
});
function hr(e) {
  return e.split("-")[0];
}
function Un(e) {
  return e.split("-")[1];
}
function zn(e) {
  return e === "x" ? "y" : "x";
}
function $n(e) {
  return e === "y" ? "height" : "width";
}
function br(e) {
  return ["top", "bottom"].includes(hr(e)) ? "y" : "x";
}
function Bn(e) {
  return zn(br(e));
}
function vr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Bt(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = br(t), s = Bn(t), c = $n(s), u = hr(t), f = a === "y", v = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, y = n[c] / 2 - o[c] / 2;
  let l;
  switch (u) {
    case "top":
      l = {
        x: v,
        y: n.y - o.height
      };
      break;
    case "bottom":
      l = {
        x: v,
        y: n.y + n.height
      };
      break;
    case "right":
      l = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      l = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      l = {
        x: n.x,
        y: n.y
      };
  }
  switch (Un(t)) {
    case "start":
      l[s] -= y * (r && f ? -1 : 1);
      break;
    case "end":
      l[s] += y * (r && f ? -1 : 1);
      break;
  }
  return l;
}
const Yn = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = r, c = a.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: v,
    y: p
  } = Bt(f, n, u), y = n, l = {}, w = 0;
  for (let k = 0; k < c.length; k++) {
    const {
      name: B,
      fn: g
    } = c[k], {
      x: m,
      y: M,
      data: V,
      reset: D
    } = await g({
      x: v,
      y: p,
      initialPlacement: n,
      placement: y,
      strategy: o,
      middlewareData: l,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (v = m ?? v, p = M ?? p, l = {
      ...l,
      [B]: {
        ...l[B],
        ...V
      }
    }, D && w <= 50) {
      w++, typeof D == "object" && (D.placement && (y = D.placement), D.rects && (f = D.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : D.rects), {
        x: v,
        y: p
      } = Bt(f, y, u)), k = -1;
      continue;
    }
  }
  return {
    x: v,
    y: p,
    placement: y,
    strategy: o,
    middlewareData: l
  };
};
function gr(e) {
  const t = ce(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = ne(e), a = o ? e.offsetWidth : r, s = o ? e.offsetHeight : n, c = Xe(r) !== a || Xe(n) !== s;
  return c && (r = a, n = s), {
    width: r,
    height: n,
    $: c
  };
}
function Tt(e) {
  return Q(e) ? e : e.contextElement;
}
function Pe(e) {
  const t = Tt(e);
  if (!ne(t))
    return ge(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = gr(t);
  let s = (a ? Xe(r.width) : r.width) / n, c = (a ? Xe(r.height) : r.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Hn = /* @__PURE__ */ ge(0);
function yr(e) {
  const t = se(e);
  return !kt() || !t.visualViewport ? Hn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kn(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== se(e) ? !1 : t;
}
function Ne(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = Tt(e);
  let s = ge(1);
  t && (n ? Q(n) && (s = Pe(n)) : s = Pe(e));
  const c = Kn(a, r, n) ? yr(a) : ge(0);
  let u = (o.left + c.x) / s.x, f = (o.top + c.y) / s.y, v = o.width / s.x, p = o.height / s.y;
  if (a) {
    const y = se(a), l = n && Q(n) ? se(n) : n;
    let w = y.frameElement;
    for (; w && n && l !== y; ) {
      const k = Pe(w), B = w.getBoundingClientRect(), g = ce(w), m = B.left + (w.clientLeft + parseFloat(g.paddingLeft)) * k.x, M = B.top + (w.clientTop + parseFloat(g.paddingTop)) * k.y;
      u *= k.x, f *= k.y, v *= k.x, p *= k.y, u += m, f += M, w = se(w).frameElement;
    }
  }
  return vr({
    width: v,
    height: p,
    x: u,
    y: f
  });
}
function qn(e) {
  let {
    rect: t,
    offsetParent: r,
    strategy: n
  } = e;
  const o = ne(r), a = me(r);
  if (r === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ge(1);
  const u = ge(0);
  if ((o || !o && n !== "fixed") && ((ve(r) !== "body" || Le(a)) && (s = ot(r)), ne(r))) {
    const f = Ne(r);
    c = Pe(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + u.x,
    y: t.y * c.y - s.scrollTop * c.y + u.y
  };
}
function Gn(e) {
  return Array.from(e.getClientRects());
}
function wr(e) {
  return Ne(me(e)).left + ot(e).scrollLeft;
}
function Xn(e) {
  const t = me(e), r = ot(e), n = e.ownerDocument.body, o = Ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + wr(e);
  const c = -r.scrollTop;
  return ce(n).direction === "rtl" && (s += Ce(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function Jn(e, t) {
  const r = se(e), n = me(e), o = r.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = kt();
    (!f || f && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function Zn(e, t) {
  const r = Ne(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = ne(e) ? Pe(e) : ge(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, f = n * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: f
  };
}
function Yt(e, t, r) {
  let n;
  if (t === "viewport")
    n = Jn(e, r);
  else if (t === "document")
    n = Xn(me(e));
  else if (Q(t))
    n = Zn(t, r);
  else {
    const o = yr(e);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vr(n);
}
function Er(e, t) {
  const r = xe(e);
  return r === t || !Q(r) || Ve(r) ? !1 : ce(r).position === "fixed" || Er(r, t);
}
function Qn(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = be(e, [], !1).filter((c) => Q(c) && ve(c) !== "body"), o = null;
  const a = ce(e).position === "fixed";
  let s = a ? xe(e) : e;
  for (; Q(s) && !Ve(s); ) {
    const c = ce(s), u = Nt(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Le(s) && !u && Er(e, s)) ? n = n.filter((v) => v !== s) : o = c, s = xe(s);
  }
  return t.set(e, n), n;
}
function eo(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const s = [...r === "clippingAncestors" ? Qn(t, this._c) : [].concat(r), n], c = s[0], u = s.reduce((f, v) => {
    const p = Yt(t, v, o);
    return f.top = Ce(p.top, f.top), f.right = yt(p.right, f.right), f.bottom = yt(p.bottom, f.bottom), f.left = Ce(p.left, f.left), f;
  }, Yt(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function to(e) {
  return gr(e);
}
function ro(e, t, r) {
  const n = ne(t), o = me(t), a = r === "fixed", s = Ne(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ge(0);
  if (n || !n && !a)
    if ((ve(t) !== "body" || Le(o)) && (c = ot(t)), n) {
      const f = Ne(t, !0, a, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else
      o && (u.x = wr(o));
  return {
    x: s.left + c.scrollLeft - u.x,
    y: s.top + c.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Ht(e, t) {
  return !ne(e) || ce(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function xr(e, t) {
  const r = se(e);
  if (!ne(e))
    return r;
  let n = Ht(e, t);
  for (; n && Pn(n) && ce(n).position === "static"; )
    n = Ht(n, t);
  return n && (ve(n) === "html" || ve(n) === "body" && ce(n).position === "static" && !Nt(n)) ? r : n || On(e) || r;
}
const no = async function(e) {
  let {
    reference: t,
    floating: r,
    strategy: n
  } = e;
  const o = this.getOffsetParent || xr, a = this.getDimensions;
  return {
    reference: ro(t, await o(r), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(r)
    }
  };
};
function oo(e) {
  return ce(e).direction === "rtl";
}
const io = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qn,
  getDocumentElement: me,
  getClippingRect: eo,
  getOffsetParent: xr,
  getElementRects: no,
  getClientRects: Gn,
  getDimensions: to,
  getScale: Pe,
  isElement: Q,
  isRTL: oo
};
function ao(e, t) {
  let r = null, n;
  const o = me(e);
  function a() {
    clearTimeout(n), r && r.disconnect(), r = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const {
      left: f,
      top: v,
      width: p,
      height: y
    } = e.getBoundingClientRect();
    if (c || t(), !p || !y)
      return;
    const l = Be(v), w = Be(o.clientWidth - (f + p)), k = Be(o.clientHeight - (v + y)), B = Be(f), m = {
      rootMargin: -l + "px " + -w + "px " + -k + "px " + -B + "px",
      threshold: Ce(0, yt(1, u)) || 1
    };
    let M = !0;
    function V(D) {
      const U = D[0].intersectionRatio;
      if (U !== u) {
        if (!M)
          return s();
        U ? s(!1, U) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      M = !1;
    }
    try {
      r = new IntersectionObserver(V, {
        ...m,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(V, m);
    }
    r.observe(e);
  }
  return s(!0), a;
}
function so(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, f = Tt(e), v = o || a ? [...f ? be(f) : [], ...be(t)] : [];
  v.forEach((g) => {
    o && g.addEventListener("scroll", r, {
      passive: !0
    }), a && g.addEventListener("resize", r);
  });
  const p = f && c ? ao(f, r) : null;
  let y = -1, l = null;
  s && (l = new ResizeObserver((g) => {
    let [m] = g;
    m && m.target === f && l && (l.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      l && l.observe(t);
    })), r();
  }), f && !u && l.observe(f), l.observe(t));
  let w, k = u ? Ne(e) : null;
  u && B();
  function B() {
    const g = Ne(e);
    k && (g.x !== k.x || g.y !== k.y || g.width !== k.width || g.height !== k.height) && r(), k = g, w = requestAnimationFrame(B);
  }
  return r(), () => {
    v.forEach((g) => {
      o && g.removeEventListener("scroll", r), a && g.removeEventListener("resize", r);
    }), p && p(), l && l.disconnect(), l = null, u && cancelAnimationFrame(w);
  };
}
const co = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: io,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return Yn(e, t, {
    ...o,
    platform: a
  });
};
var Ke = typeof document < "u" ? sr : Ee;
function Je(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Je(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !Je(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Nr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kt(e, t) {
  const r = Nr(e);
  return Math.round(t * r) / r;
}
function qt(e) {
  const t = h.useRef(e);
  return Ke(() => {
    t.current = e;
  }), t;
}
function lo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: f
  } = e, [v, p] = h.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, l] = h.useState(n);
  Je(y, n) || l(n);
  const [w, k] = h.useState(null), [B, g] = h.useState(null), m = h.useCallback((H) => {
    H != U.current && (U.current = H, k(H));
  }, [k]), M = h.useCallback((H) => {
    H !== x.current && (x.current = H, g(H));
  }, [g]), V = a || w, D = s || B, U = h.useRef(null), x = h.useRef(null), q = h.useRef(v), oe = qt(u), ee = qt(o), S = h.useCallback(() => {
    if (!U.current || !x.current)
      return;
    const H = {
      placement: t,
      strategy: r,
      middleware: y
    };
    ee.current && (H.platform = ee.current), co(U.current, x.current, H).then((T) => {
      const A = {
        ...T,
        isPositioned: !0
      };
      te.current && !Je(q.current, A) && (q.current = A, an.flushSync(() => {
        p(A);
      }));
    });
  }, [y, t, r, ee]);
  Ke(() => {
    f === !1 && q.current.isPositioned && (q.current.isPositioned = !1, p((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [f]);
  const te = h.useRef(!1);
  Ke(() => (te.current = !0, () => {
    te.current = !1;
  }), []), Ke(() => {
    if (V && (U.current = V), D && (x.current = D), V && D) {
      if (oe.current)
        return oe.current(V, D, S);
      S();
    }
  }, [V, D, S, oe]);
  const K = h.useMemo(() => ({
    reference: U,
    floating: x,
    setReference: m,
    setFloating: M
  }), [m, M]), Y = h.useMemo(() => ({
    reference: V,
    floating: D
  }), [V, D]), J = h.useMemo(() => {
    const H = {
      position: r,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return H;
    const T = Kt(Y.floating, v.x), A = Kt(Y.floating, v.y);
    return c ? {
      ...H,
      transform: "translate(" + T + "px, " + A + "px)",
      ...Nr(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: T,
      top: A
    };
  }, [r, c, Y.floating, v.x, v.y]);
  return h.useMemo(() => ({
    ...v,
    update: S,
    refs: K,
    elements: Y,
    floatingStyles: J
  }), [v, S, K, Y, J]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var uo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], wt = /* @__PURE__ */ uo.join(","), kr = typeof Element > "u", Ie = kr ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ze = !kr && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Qe = function e(t, r) {
  var n;
  r === void 0 && (r = !0);
  var o = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), a = o === "" || o === "true", s = a || r && t && e(t.parentNode);
  return s;
}, fo = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, po = function(t, r, n) {
  if (Qe(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(wt));
  return r && Ie.call(t, wt) && o.unshift(t), o = o.filter(n), o;
}, mo = function e(t, r, n) {
  for (var o = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!Qe(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), u = c.length ? c : s.children, f = e(u, !0, n);
        n.flatten ? o.push.apply(o, f) : o.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var v = Ie.call(s, wt);
        v && n.filter(s) && (r || !t.includes(s)) && o.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), y = !Qe(p, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (p && y) {
          var l = e(p === !0 ? s.children : p.children, !0, n);
          n.flatten ? o.push.apply(o, l) : o.push({
            scopeParent: s,
            candidates: l
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return o;
}, Tr = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Rr = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || fo(t)) && !Tr(t) ? 0 : t.tabIndex;
}, ho = function(t, r) {
  var n = Rr(t);
  return n < 0 && r && !Tr(t) ? 0 : n;
}, bo = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, Dr = function(t) {
  return t.tagName === "INPUT";
}, vo = function(t) {
  return Dr(t) && t.type === "hidden";
}, go = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, yo = function(t, r) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === r)
      return t[n];
}, wo = function(t) {
  if (!t.name)
    return !0;
  var r = t.form || Ze(t), n = function(c) {
    return r.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(t.name));
  else
    try {
      o = n(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var a = yo(o, t.form);
  return !a || a === t;
}, Eo = function(t) {
  return Dr(t) && t.type === "radio";
}, xo = function(t) {
  return Eo(t) && !wo(t);
}, No = function(t) {
  var r, n = t && Ze(t), o = (r = n) === null || r === void 0 ? void 0 : r.host, a = !1;
  if (n && n !== t) {
    var s, c, u;
    for (a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !a && o; ) {
      var f, v, p;
      n = Ze(o), o = (f = n) === null || f === void 0 ? void 0 : f.host, a = !!((v = o) !== null && v !== void 0 && (p = v.ownerDocument) !== null && p !== void 0 && p.contains(o));
    }
  }
  return a;
}, Gt = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, ko = function(t, r) {
  var n = r.displayCheck, o = r.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = Ie.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (Ie.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, f = Ze(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return Gt(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = c;
    }
    if (No(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Gt(t);
  return !1;
}, To = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var r = t.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return Ie.call(r, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Ro = function(t, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Qe(r) || vo(r) || ko(r, t) || // For a details element with a summary, the summary element gets the focus
  go(r) || To(r));
}, Xt = function(t, r) {
  return !(xo(r) || Rr(r) < 0 || !Ro(t, r));
}, Do = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, So = function e(t) {
  var r = [], n = [];
  return t.forEach(function(o, a) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = ho(c, s), f = s ? e(o.candidates) : c;
    u === 0 ? s ? r.push.apply(r, f) : r.push(c) : n.push({
      documentOrder: a,
      tabIndex: u,
      item: o,
      isScope: s,
      content: f
    });
  }), n.sort(bo).reduce(function(o, a) {
    return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o;
  }, []).concat(r);
}, Sr = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = mo([t], r.includeContainer, {
    filter: Xt.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Do
  }) : n = po(t, r.includeContainer, Xt.bind(null, r)), So(n);
};
const jo = h[/* @__PURE__ */ "useInsertionEffect".toString()], Co = jo || ((e) => e());
function je(e) {
  const t = h.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Co(() => {
    t.current = e;
  }), h.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
let Jt = 0;
function we(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: r = !1,
    cancelPrevious: n = !0,
    sync: o = !1
  } = t;
  n && cancelAnimationFrame(Jt);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: r
  });
  o ? a() : Jt = requestAnimationFrame(a);
}
var he = typeof document < "u" ? sr : Ee;
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, et.apply(this, arguments);
}
let dt = !1, Po = 0;
const Zt = () => "floating-ui-" + Po++;
function Oo() {
  const [e, t] = h.useState(() => dt ? Zt() : void 0);
  return he(() => {
    e == null && t(Zt());
  }, []), h.useEffect(() => {
    dt || (dt = !0);
  }, []), e;
}
const _o = h[/* @__PURE__ */ "useId".toString()], Rt = _o || Oo;
function Ao() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...e.get(t) || [], r]);
    },
    off(t, r) {
      var n;
      e.set(t, ((n = e.get(t)) == null ? void 0 : n.filter((o) => o !== r)) || []);
    }
  };
}
const Io = /* @__PURE__ */ h.createContext(null), Fo = /* @__PURE__ */ h.createContext(null), Lo = () => {
  var e;
  return ((e = h.useContext(Io)) == null ? void 0 : e.id) || null;
}, Dt = () => h.useContext(Fo);
function tt(e) {
  return "data-floating-ui-" + e;
}
function pt(e) {
  const t = on(e);
  return he(() => {
    t.current = e;
  }), t;
}
function Vo(e, t) {
  var r;
  let n = [], o = (r = e.find((a) => a.id === t)) == null ? void 0 : r.parentId;
  for (; o; ) {
    const a = e.find((s) => s.id === o);
    o = a == null ? void 0 : a.parentId, a && (n = n.concat(a));
  }
  return n;
}
function Ae(e, t) {
  let r = e.filter((o) => {
    var a;
    return o.parentId === t && ((a = o.context) == null ? void 0 : a.open);
  }), n = r;
  for (; n.length; )
    n = e.filter((o) => {
      var a;
      return (a = n) == null ? void 0 : a.some((s) => {
        var c;
        return o.parentId === s.id && ((c = o.context) == null ? void 0 : c.open);
      });
    }), r = r.concat(n);
  return r;
}
let Re = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakSet(), He = {}, mt = 0;
const Wo = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, jr = (e) => e && (e.host || jr(e.parentNode)), Mo = (e, t) => t.map((r) => {
  if (e.contains(r))
    return r;
  const n = jr(r);
  return e.contains(n) ? n : null;
}).filter((r) => r != null);
function Uo(e, t, r, n) {
  const o = "data-floating-ui-inert", a = n ? "inert" : r ? "aria-hidden" : null, s = Mo(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), f = [];
  He[o] || (He[o] = /* @__PURE__ */ new WeakMap());
  const v = He[o];
  s.forEach(p), y(t), c.clear();
  function p(l) {
    !l || c.has(l) || (c.add(l), l.parentNode && p(l.parentNode));
  }
  function y(l) {
    !l || u.has(l) || Array.prototype.forEach.call(l.children, (w) => {
      if (c.has(w))
        y(w);
      else {
        const k = a ? w.getAttribute(a) : null, B = k !== null && k !== "false", g = (Re.get(w) || 0) + 1, m = (v.get(w) || 0) + 1;
        Re.set(w, g), v.set(w, m), f.push(w), g === 1 && B && Ye.add(w), m === 1 && w.setAttribute(o, ""), !B && a && w.setAttribute(a, "true");
      }
    });
  }
  return mt++, () => {
    f.forEach((l) => {
      const w = (Re.get(l) || 0) - 1, k = (v.get(l) || 0) - 1;
      Re.set(l, w), v.set(l, k), w || (!Ye.has(l) && a && l.removeAttribute(a), Ye.delete(l)), k || l.removeAttribute(o);
    }), mt--, mt || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakSet(), He = {});
  };
}
function Qt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = de(e[0]).body;
  return Uo(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r);
}
const Cr = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Pr(e, t) {
  const r = Sr(e, Cr());
  t === "prev" && r.reverse();
  const n = r.indexOf(De(de(e)));
  return r.slice(n + 1)[0];
}
function zo() {
  return Pr(document.body, "next");
}
function $o() {
  return Pr(document.body, "prev");
}
function er(e, t) {
  const r = t || e.currentTarget, n = e.relatedTarget;
  return !n || !ae(r, n);
}
const Or = {
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
let Bo;
function tr(e) {
  e.key === "Tab" && (e.target, clearTimeout(Bo));
}
const rr = /* @__PURE__ */ h.forwardRef(function(t, r) {
  const [n, o] = h.useState();
  he(() => (Ln() && o("button"), document.addEventListener("keydown", tr), () => {
    document.removeEventListener("keydown", tr);
  }), []);
  const a = {
    ref: r,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: n,
    "aria-hidden": n ? void 0 : !0,
    [tt("focus-guard")]: "",
    style: Or
  };
  return /* @__PURE__ */ h.createElement("span", et({}, t, a));
}), Yo = /* @__PURE__ */ h.createContext(null), Ho = () => h.useContext(Yo), Ko = /* @__PURE__ */ h.forwardRef(function(t, r) {
  return /* @__PURE__ */ h.createElement("button", et({}, t, {
    type: "button",
    ref: r,
    tabIndex: -1,
    style: Or
  }));
});
function qo(e) {
  const {
    context: t,
    children: r,
    disabled: n = !1,
    order: o = ["content"],
    guards: a = !0,
    initialFocus: s = 0,
    returnFocus: c = !0,
    modal: u = !0,
    visuallyHiddenDismiss: f = !1,
    closeOnFocusOut: v = !0
  } = e, {
    open: p,
    refs: y,
    nodeId: l,
    onOpenChange: w,
    events: k,
    dataRef: B,
    elements: {
      domReference: g,
      floating: m
    }
  } = t, M = typeof s == "number" && s < 0, V = (g == null ? void 0 : g.getAttribute("role")) === "combobox" && mr(g) && M, D = V ? !1 : u, U = Wo() ? a : !0, x = pt(o), q = pt(s), oe = pt(c), ee = Dt(), S = Ho(), te = h.useRef(null), K = h.useRef(null), Y = h.useRef(!1), J = h.useRef(null), H = h.useRef(!1), T = S != null, A = h.useCallback(function(O) {
    return O === void 0 && (O = m), O ? Sr(O, Cr()) : [];
  }, [m]), L = h.useCallback((O) => {
    const C = A(O);
    return x.current.map((j) => g && j === "reference" ? g : m && j === "floating" ? m : C).filter(Boolean).flat();
  }, [g, m, x, A]);
  h.useEffect(() => {
    if (n || !D)
      return;
    function O(j) {
      if (j.key === "Tab") {
        ae(m, De(de(m))) && A().length === 0 && !V && ft(j);
        const I = L(), W = Se(j);
        x.current[0] === "reference" && W === g && (ft(j), j.shiftKey ? we(I[I.length - 1]) : we(I[1])), x.current[1] === "floating" && W === m && j.shiftKey && (ft(j), we(I[0]));
      }
    }
    const C = de(m);
    return C.addEventListener("keydown", O), () => {
      C.removeEventListener("keydown", O);
    };
  }, [n, g, m, D, x, y, V, A, L]), h.useEffect(() => {
    if (n || !v)
      return;
    function O() {
      H.current = !0, setTimeout(() => {
        H.current = !1;
      });
    }
    function C(j) {
      const I = j.relatedTarget;
      queueMicrotask(() => {
        const W = !(ae(g, I) || ae(m, I) || ae(I, m) || ae(S == null ? void 0 : S.portalNode, I) || I != null && I.hasAttribute(tt("focus-guard")) || ee && (Ae(ee.nodesRef.current, l).find((z) => {
          var G, le;
          return ae((G = z.context) == null ? void 0 : G.elements.floating, I) || ae((le = z.context) == null ? void 0 : le.elements.domReference, I);
        }) || Vo(ee.nodesRef.current, l).find((z) => {
          var G, le;
          return ((G = z.context) == null ? void 0 : G.elements.floating) === I || ((le = z.context) == null ? void 0 : le.elements.domReference) === I;
        })));
        I && W && !H.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        I !== J.current && (Y.current = !0, w(!1, j));
      });
    }
    if (m && ne(g))
      return g.addEventListener("focusout", C), g.addEventListener("pointerdown", O), !D && m.addEventListener("focusout", C), () => {
        g.removeEventListener("focusout", C), g.removeEventListener("pointerdown", O), !D && m.removeEventListener("focusout", C);
      };
  }, [n, g, m, D, l, ee, S, w, v]), h.useEffect(() => {
    var O;
    if (n)
      return;
    const C = Array.from((S == null || (O = S.portalNode) == null ? void 0 : O.querySelectorAll("[" + tt("portal") + "]")) || []);
    if (m) {
      const j = [m, ...C, te.current, K.current, x.current.includes("reference") || V ? g : null].filter((W) => W != null), I = u || V ? Qt(j, U, !U) : Qt(j);
      return () => {
        I();
      };
    }
  }, [n, g, m, u, x, S, V, U]), he(() => {
    if (n || !m)
      return;
    const O = de(m), C = De(O);
    queueMicrotask(() => {
      const j = L(m), I = q.current, W = (typeof I == "number" ? j[I] : I.current) || m, z = ae(m, C);
      !M && !z && p && we(W, {
        preventScroll: W === m
      });
    });
  }, [n, p, m, M, L, q]), he(() => {
    if (n || !m)
      return;
    let O = !1;
    const C = de(m), j = De(C), I = B.current;
    J.current = j;
    function W(z) {
      if (z.type === "escapeKey" && y.domReference.current && (J.current = y.domReference.current), ["referencePress", "escapeKey"].includes(z.type))
        return;
      const G = z.data.returnFocus;
      typeof G == "object" ? (Y.current = !1, O = G.preventScroll) : Y.current = !G;
    }
    return k.on("dismiss", W), () => {
      k.off("dismiss", W);
      const z = De(C);
      (ae(m, z) || ee && Ae(ee.nodesRef.current, l).some((le) => {
        var ye;
        return ae((ye = le.context) == null ? void 0 : ye.elements.floating, z);
      }) || I.openEvent && ["click", "mousedown"].includes(I.openEvent.type)) && y.domReference.current && (J.current = y.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      oe.current && ne(J.current) && !Y.current && we(J.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: O
      });
    };
  }, [n, m, oe, B, y, k, ee, l]), he(() => {
    if (!(n || !S))
      return S.setFocusManagerState({
        modal: D,
        closeOnFocusOut: v,
        open: p,
        onOpenChange: w,
        refs: y
      }), () => {
        S.setFocusManagerState(null);
      };
  }, [n, S, D, p, w, y, v]), he(() => {
    if (n || !m || typeof MutationObserver != "function" || M)
      return;
    const O = () => {
      const j = m.getAttribute("tabindex");
      x.current.includes("floating") || De(de(m)) !== y.domReference.current && A().length === 0 ? j !== "0" && m.setAttribute("tabindex", "0") : j !== "-1" && m.setAttribute("tabindex", "-1");
    };
    O();
    const C = new MutationObserver(O);
    return C.observe(m, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      C.disconnect();
    };
  }, [n, m, y, x, A, M]);
  function R(O) {
    return n || !f || !D ? null : /* @__PURE__ */ h.createElement(Ko, {
      ref: O === "start" ? te : K,
      onClick: (C) => w(!1, C.nativeEvent)
    }, typeof f == "string" ? f : "Dismiss");
  }
  const ie = !n && U && (T || D);
  return /* @__PURE__ */ h.createElement(h.Fragment, null, ie && /* @__PURE__ */ h.createElement(rr, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.beforeInsideRef,
    onFocus: (O) => {
      if (D) {
        const j = L();
        we(o[0] === "reference" ? j[0] : j[j.length - 1]);
      } else if (S != null && S.preserveTabOrder && S.portalNode)
        if (Y.current = !1, er(O, S.portalNode)) {
          const j = zo() || g;
          j == null || j.focus();
        } else {
          var C;
          (C = S.beforeOutsideRef.current) == null || C.focus();
        }
    }
  }), !V && R("start"), r, R("end"), ie && /* @__PURE__ */ h.createElement(rr, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.afterInsideRef,
    onFocus: (O) => {
      if (D)
        we(L()[0]);
      else if (S != null && S.preserveTabOrder && S.portalNode)
        if (v && (Y.current = !0), er(O, S.portalNode)) {
          const j = $o() || g;
          j == null || j.focus();
        } else {
          var C;
          (C = S.afterOutsideRef.current) == null || C.focus();
        }
    }
  }));
}
function nr(e) {
  return ne(e.target) && e.target.tagName === "BUTTON";
}
function or(e) {
  return mr(e);
}
function Go(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: o,
    elements: {
      domReference: a
    }
  } = e, {
    enabled: s = !0,
    event: c = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: v = !0
  } = t, p = h.useRef(), y = h.useRef(!1);
  return h.useMemo(() => s ? {
    reference: {
      onPointerDown(l) {
        p.current = l.pointerType;
      },
      onMouseDown(l) {
        l.button === 0 && ($t(p.current, !0) && f || c !== "click" && (r && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? n(!1, l.nativeEvent) : (l.preventDefault(), n(!0, l.nativeEvent))));
      },
      onClick(l) {
        if (c === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        $t(p.current, !0) && f || (r && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? n(!1, l.nativeEvent) : n(!0, l.nativeEvent));
      },
      onKeyDown(l) {
        p.current = void 0, !(l.defaultPrevented || !v || nr(l)) && (l.key === " " && !or(a) && (l.preventDefault(), y.current = !0), l.key === "Enter" && n(!(r && u), l.nativeEvent));
      },
      onKeyUp(l) {
        l.defaultPrevented || !v || nr(l) || or(a) || l.key === " " && y.current && (y.current = !1, n(!(r && u), l.nativeEvent));
      }
    }
  } : {}, [s, o, c, f, v, a, u, r, n]);
}
const Xo = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Jo = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ir = (e) => {
  var t, r;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (r = e == null ? void 0 : e.outsidePress) != null ? r : !0
  };
};
function Zo(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    events: o,
    nodeId: a,
    elements: {
      reference: s,
      domReference: c,
      floating: u
    },
    dataRef: f
  } = e, {
    enabled: v = !0,
    escapeKey: p = !0,
    outsidePress: y = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: w = !1,
    referencePressEvent: k = "pointerdown",
    ancestorScroll: B = !1,
    bubbles: g,
    capture: m
  } = t, M = Dt(), V = Lo() != null, D = je(typeof y == "function" ? y : () => !1), U = typeof y == "function" ? D : y, x = h.useRef(!1), q = h.useRef(!1), {
    escapeKey: oe,
    outsidePress: ee
  } = ir(g), {
    escapeKey: S,
    outsidePress: te
  } = ir(m), K = je((T) => {
    if (!r || !v || !p || T.key !== "Escape")
      return;
    const A = M ? Ae(M.nodesRef.current, a) : [];
    if (!oe && (T.stopPropagation(), A.length > 0)) {
      let L = !0;
      if (A.forEach((R) => {
        var ie;
        if ((ie = R.context) != null && ie.open && !R.context.dataRef.current.__escapeKeyBubbles) {
          L = !1;
          return;
        }
      }), !L)
        return;
    }
    o.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), n(!1, Vn(T) ? T.nativeEvent : T);
  }), Y = je((T) => {
    var A;
    const L = () => {
      var R;
      K(T), (R = Se(T)) == null || R.removeEventListener("keydown", L);
    };
    (A = Se(T)) == null || A.addEventListener("keydown", L);
  }), J = je((T) => {
    const A = x.current;
    x.current = !1;
    const L = q.current;
    if (q.current = !1, l === "click" && L || A || typeof U == "function" && !U(T))
      return;
    const R = Se(T), ie = "[" + tt("inert") + "]", O = de(u).querySelectorAll(ie);
    let C = Q(R) ? R : null;
    for (; C && !Ve(C); ) {
      const W = xe(C);
      if (W === de(u).body || !Q(W))
        break;
      C = W;
    }
    if (O.length && Q(R) && !Wn(R) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ae(R, u) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(O).every((W) => !ae(C, W)))
      return;
    if (ne(R) && u) {
      const W = R.clientWidth > 0 && R.scrollWidth > R.clientWidth, z = R.clientHeight > 0 && R.scrollHeight > R.clientHeight;
      let G = z && T.offsetX > R.clientWidth;
      if (z && ce(R).direction === "rtl" && (G = T.offsetX <= R.offsetWidth - R.clientWidth), G || W && T.offsetY > R.clientHeight)
        return;
    }
    const j = M && Ae(M.nodesRef.current, a).some((W) => {
      var z;
      return ut(T, (z = W.context) == null ? void 0 : z.elements.floating);
    });
    if (ut(T, u) || ut(T, c) || j)
      return;
    const I = M ? Ae(M.nodesRef.current, a) : [];
    if (I.length > 0) {
      let W = !0;
      if (I.forEach((z) => {
        var G;
        if ((G = z.context) != null && G.open && !z.context.dataRef.current.__outsidePressBubbles) {
          W = !1;
          return;
        }
      }), !W)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: V ? {
          preventScroll: !0
        } : In(T) || Fn(T)
      }
    }), n(!1, T);
  }), H = je((T) => {
    var A;
    const L = () => {
      var R;
      J(T), (R = Se(T)) == null || R.removeEventListener(l, L);
    };
    (A = Se(T)) == null || A.addEventListener(l, L);
  });
  return h.useEffect(() => {
    if (!r || !v)
      return;
    f.current.__escapeKeyBubbles = oe, f.current.__outsidePressBubbles = ee;
    function T(R) {
      n(!1, R);
    }
    const A = de(u);
    p && A.addEventListener("keydown", S ? Y : K, S), U && A.addEventListener(l, te ? H : J, te);
    let L = [];
    return B && (Q(c) && (L = be(c)), Q(u) && (L = L.concat(be(u))), !Q(s) && s && s.contextElement && (L = L.concat(be(s.contextElement)))), L = L.filter((R) => {
      var ie;
      return R !== ((ie = A.defaultView) == null ? void 0 : ie.visualViewport);
    }), L.forEach((R) => {
      R.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      p && A.removeEventListener("keydown", S ? Y : K, S), U && A.removeEventListener(l, te ? H : J, te), L.forEach((R) => {
        R.removeEventListener("scroll", T);
      });
    };
  }, [f, u, c, s, p, U, l, r, n, B, v, oe, ee, K, S, Y, J, te, H]), h.useEffect(() => {
    x.current = !1;
  }, [U, l]), h.useMemo(() => v ? {
    reference: {
      onKeyDown: K,
      [Xo[k]]: (T) => {
        w && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), n(!1, T.nativeEvent));
      }
    },
    floating: {
      onKeyDown: K,
      onMouseDown() {
        q.current = !0;
      },
      onMouseUp() {
        q.current = !0;
      },
      [Jo[l]]: () => {
        x.current = !0;
      }
    }
  } : {}, [v, o, w, l, k, n, K]);
}
let Et;
process.env.NODE_ENV !== "production" && (Et = /* @__PURE__ */ new Set());
function Qo(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: r = !1,
    onOpenChange: n,
    nodeId: o
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var a;
    const x = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !Q(e.elements.reference)) {
      var s;
      if (!((s = Et) != null && s.has(x))) {
        var c;
        (c = Et) == null || c.add(x), console.error(x);
      }
    }
  }
  const [u, f] = h.useState(null), v = ((t = e.elements) == null ? void 0 : t.reference) || u, p = lo(e), y = Dt(), l = je((x, q) => {
    x && (k.current.openEvent = q), n == null || n(x, q);
  }), w = h.useRef(null), k = h.useRef({}), B = h.useState(() => Ao())[0], g = Rt(), m = h.useCallback((x) => {
    const q = Q(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    p.refs.setReference(q);
  }, [p.refs]), M = h.useCallback((x) => {
    (Q(x) || x === null) && (w.current = x, f(x)), (Q(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !Q(x)) && p.refs.setReference(x);
  }, [p.refs]), V = h.useMemo(() => ({
    ...p.refs,
    setReference: M,
    setPositionReference: m,
    domReference: w
  }), [p.refs, M, m]), D = h.useMemo(() => ({
    ...p.elements,
    domReference: v
  }), [p.elements, v]), U = h.useMemo(() => ({
    ...p,
    refs: V,
    elements: D,
    dataRef: k,
    nodeId: o,
    floatingId: g,
    events: B,
    open: r,
    onOpenChange: l
  }), [p, o, g, B, r, l, V, D]);
  return he(() => {
    const x = y == null ? void 0 : y.nodesRef.current.find((q) => q.id === o);
    x && (x.context = U);
  }), h.useMemo(() => ({
    ...p,
    context: U,
    refs: V,
    elements: D
  }), [p, V, D, U]);
}
function ht(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  return {
    ...r === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[r] : null).concat(e).reduce((o, a) => (a && Object.entries(a).forEach((s) => {
      let [c, u] = s;
      if (c.indexOf("on") === 0) {
        if (n.has(c) || n.set(c, []), typeof u == "function") {
          var f;
          (f = n.get(c)) == null || f.push(u), o[c] = function() {
            for (var v, p = arguments.length, y = new Array(p), l = 0; l < p; l++)
              y[l] = arguments[l];
            return (v = n.get(c)) == null ? void 0 : v.map((w) => w(...y)).find((w) => w !== void 0);
          };
        }
      } else
        o[c] = u;
    }), o), {})
  };
}
function ei(e) {
  e === void 0 && (e = []);
  const t = e, r = h.useCallback(
    (a) => ht(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), n = h.useCallback(
    (a) => ht(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = h.useCallback(
    (a) => ht(a, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((a) => a == null ? void 0 : a.item)
  );
  return h.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: o
  }), [r, n, o]);
}
function ti(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: n
  } = e, {
    enabled: o = !0,
    role: a = "dialog"
  } = t, s = Rt();
  return h.useMemo(() => {
    const c = {
      id: n,
      role: a
    };
    return o ? a === "tooltip" ? {
      reference: {
        "aria-describedby": r ? n : void 0
      },
      floating: c
    } : {
      reference: {
        "aria-expanded": r ? "true" : "false",
        "aria-haspopup": a === "alertdialog" ? "dialog" : a,
        "aria-controls": r ? n : void 0,
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
  }, [o, a, r, n, s]);
}
const ri = (e) => {
  const [t, r] = ar(!0), { refs: n, context: o, floatingStyles: a } = Qo({
    open: t,
    onOpenChange: r,
    middleware: [],
    whileElementsMounted: so
  }), s = Go(o), c = Zo(o), u = ti(o), { getReferenceProps: f, getFloatingProps: v } = ei([s, c, u]), p = Rt();
  return /* @__PURE__ */ E.jsxDEV(E.Fragment, { children: [
    /* @__PURE__ */ E.jsxDEV("div", { ref: n.setReference, ...f(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, globalThis),
    t && /* @__PURE__ */ E.jsxDEV(qo, { context: o, modal: !1, children: /* @__PURE__ */ E.jsxDEV("div", { ref: n.setFloating, style: a, "aria-labelledby": p, ...v(), children: e.calendar }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, globalThis) }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, globalThis)
  ] }, void 0, !0, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, globalThis);
}, ni = ({ ...e }) => {
  const { state: t, setData: r } = rt();
  return Ee(() => {
    r({ type: fe.SET_VALUE, value: e.value || "" });
  }, [e.value]), Ee(() => {
    r({
      type: fe.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), Ee(() => {
    r({
      type: fe.SET_THEME,
      theme: e.dark ? Ge.DARK : Ge.LIGHT
    });
  }, [e.dark]), Ee(() => {
    r({
      type: fe.SET_EVENTS,
      events: {
        onChange: e.onChange || void 0,
        onSelect: e.onSelect || void 0
      }
    });
  }, [e.onChange, e.onSelect]), Ee(() => {
    var n, o, a, s;
    r({
      type: fe.SET_OPTIONS,
      options: {
        colors: {
          primary: ((o = (n = e.options) == null ? void 0 : n.colors) == null ? void 0 : o.primary) || t.options.colors.primary,
          secondary: ((s = (a = e.options) == null ? void 0 : a.colors) == null ? void 0 : s.secondary) || t.options.colors.secondary
        }
      }
    });
  }, [e.options]), /* @__PURE__ */ E.jsxDEV(
    "div",
    {
      className: `nepali-datepicker ${t.classNames.wrapper || ""}`,
      "data-theme": t.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ E.jsxDEV(ri, { input: /* @__PURE__ */ E.jsxDEV(Tn, { ...e }, void 0, !1, {
        fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
        lineNumber: 64,
        columnNumber: 33
      }, globalThis), calendar: /* @__PURE__ */ E.jsxDEV(yn, {}, void 0, !1, {
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
}, ii = (e) => /* @__PURE__ */ E.jsxDEV(En, { children: /* @__PURE__ */ E.jsxDEV(ni, { ...e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 13,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 12,
  columnNumber: 5
}, globalThis);
export {
  ii as NepaliDatePicker
};
