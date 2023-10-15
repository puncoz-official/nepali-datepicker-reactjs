import * as m from "react";
import qn, { createContext as Gn, useReducer as Xn, useContext as Jn, useLayoutEffect as tn, useEffect as Ne, useRef as Zn, useState as Qn } from "react";
import * as er from "react-dom";
var ft = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function tr() {
  if (jt)
    return We;
  jt = 1;
  var e = Symbol.for("react.fragment");
  return We.Fragment = e, We.jsxDEV = void 0, We;
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
var Lt;
function nr() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), E = Symbol.iterator, x = "@@iterator";
    function B(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = E && o[E] || o[x];
      return typeof f == "function" ? f : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(o) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), R = 1; R < f; R++)
          g[R - 1] = arguments[R];
        V("error", o, g);
      }
    }
    function V(o, f, g) {
      {
        var R = b.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (f += "%s", g = g.concat([F]));
        var U = g.map(function(_) {
          return String(_);
        });
        U.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, U);
      }
    }
    var L = !1, C = !1, W = !1, w = !1, z = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Q(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || z || o === i || o === d || o === h || w || o === u || L || C || W || typeof o == "object" && o !== null && (o.$$typeof === y || o.$$typeof === p || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === oe || o.getModuleId !== void 0));
    }
    function k(o, f, g) {
      var R = o.displayName;
      if (R)
        return R;
      var F = f.displayName || f.name || "";
      return F !== "" ? g + "(" + F + ")" : g;
    }
    function ee(o) {
      return o.displayName || "Context";
    }
    function Y(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var f = o;
            return ee(f) + ".Consumer";
          case s:
            var g = o;
            return ee(g._context) + ".Provider";
          case l:
            return k(o, o.render, "ForwardRef");
          case p:
            var R = o.displayName || null;
            return R !== null ? R : Y(o.type) || "Memo";
          case y: {
            var F = o, U = F._payload, _ = F._init;
            try {
              return Y(_(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, X = 0, K, T, A, j, S, ie, O;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function D() {
      {
        if (X === 0) {
          K = console.log, T = console.info, A = console.warn, j = console.error, S = console.group, ie = console.groupCollapsed, O = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: N,
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
        X++;
      }
    }
    function I() {
      {
        if (X--, X === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, o, {
              value: K
            }),
            info: H({}, o, {
              value: T
            }),
            warn: H({}, o, {
              value: A
            }),
            error: H({}, o, {
              value: j
            }),
            group: H({}, o, {
              value: S
            }),
            groupCollapsed: H({}, o, {
              value: ie
            }),
            groupEnd: H({}, o, {
              value: O
            })
          });
        }
        X < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = b.ReactCurrentDispatcher, $;
    function q(o, f, g) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            $ = R && R[1] || "";
          }
        return `
` + $ + o;
      }
    }
    var ue = !1, ye;
    {
      var kn = typeof WeakMap == "function" ? WeakMap : Map;
      ye = new kn();
    }
    function xt(o, f) {
      if (!o || ue)
        return "";
      {
        var g = ye.get(o);
        if (g !== void 0)
          return g;
      }
      var R;
      ue = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = M.current, M.current = null, D();
      try {
        if (f) {
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
            } catch (de) {
              R = de;
            }
            Reflect.construct(o, [], _);
          } else {
            try {
              _.call();
            } catch (de) {
              R = de;
            }
            o.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            R = de;
          }
          o();
        }
      } catch (de) {
        if (de && R && typeof de.stack == "string") {
          for (var P = de.stack.split(`
`), te = R.stack.split(`
`), G = P.length - 1, J = te.length - 1; G >= 1 && J >= 0 && P[G] !== te[J]; )
            J--;
          for (; G >= 1 && J >= 0; G--, J--)
            if (P[G] !== te[J]) {
              if (G !== 1 || J !== 1)
                do
                  if (G--, J--, J < 0 || P[G] !== te[J]) {
                    var le = `
` + P[G].replace(" at new ", " at ");
                    return o.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", o.displayName)), typeof o == "function" && ye.set(o, le), le;
                  }
                while (G >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        ue = !1, M.current = U, I(), Error.prepareStackTrace = F;
      }
      var Te = o ? o.displayName || o.name : "", Ft = Te ? q(Te) : "";
      return typeof o == "function" && ye.set(o, Ft), Ft;
    }
    function Dn(o, f, g) {
      return xt(o, !1);
    }
    function Nn(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function Le(o, f, g) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return xt(o, Nn(o));
      if (typeof o == "string")
        return q(o);
      switch (o) {
        case d:
          return q("Suspense");
        case h:
          return q("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return Dn(o.render);
          case p:
            return Le(o.type, f, g);
          case y: {
            var R = o, F = R._payload, U = R._init;
            try {
              return Le(U(F), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, Tt = {}, St = b.ReactDebugCurrentFrame;
    function Ve(o) {
      if (o) {
        var f = o._owner, g = Le(o.type, o._source, f ? f.type : null);
        St.setExtraStackFrame(g);
      } else
        St.setExtraStackFrame(null);
    }
    function Pn(o, f, g, R, F) {
      {
        var U = Function.call.bind(Me);
        for (var _ in o)
          if (U(o, _)) {
            var P = void 0;
            try {
              if (typeof o[_] != "function") {
                var te = Error((R || "React class") + ": " + g + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              P = o[_](f, _, R, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              P = G;
            }
            P && !(P instanceof Error) && (Ve(F), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", g, _, typeof P), Ve(null)), P instanceof Error && !(P.message in Tt) && (Tt[P.message] = !0, Ve(F), v("Failed %s type: %s", g, P.message), Ve(null));
          }
      }
    }
    var On = Array.isArray;
    function et(o) {
      return On(o);
    }
    function _n(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return g;
      }
    }
    function An(o) {
      try {
        return Ct(o), !1;
      } catch {
        return !0;
      }
    }
    function Ct(o) {
      return "" + o;
    }
    function kt(o) {
      if (An(o))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _n(o)), Ct(o);
    }
    var _e = b.ReactCurrentOwner, In = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dt, Nt, tt;
    tt = {};
    function Fn(o) {
      if (Me.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function jn(o) {
      if (Me.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ln(o, f) {
      if (typeof o.ref == "string" && _e.current && f && _e.current.stateNode !== f) {
        var g = Y(_e.current.type);
        tt[g] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(_e.current.type), o.ref), tt[g] = !0);
      }
    }
    function Mn(o, f) {
      {
        var g = function() {
          Dt || (Dt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Vn(o, f) {
      {
        var g = function() {
          Nt || (Nt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Wn = function(o, f, g, R, F, U, _) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: g,
        props: _,
        // Record the component responsible for creating this element.
        _owner: U
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
        value: R
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function $n(o, f, g, R, F) {
      {
        var U, _ = {}, P = null, te = null;
        g !== void 0 && (kt(g), P = "" + g), jn(f) && (kt(f.key), P = "" + f.key), Fn(f) && (te = f.ref, Ln(f, F));
        for (U in f)
          Me.call(f, U) && !In.hasOwnProperty(U) && (_[U] = f[U]);
        if (o && o.defaultProps) {
          var G = o.defaultProps;
          for (U in G)
            _[U] === void 0 && (_[U] = G[U]);
        }
        if (P || te) {
          var J = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          P && Mn(_, J), te && Vn(_, J);
        }
        return Wn(o, P, te, F, R, _e.current, _);
      }
    }
    var nt = b.ReactCurrentOwner, Pt = b.ReactDebugCurrentFrame;
    function xe(o) {
      if (o) {
        var f = o._owner, g = Le(o.type, o._source, f ? f.type : null);
        Pt.setExtraStackFrame(g);
      } else
        Pt.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function ot(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Ot() {
      {
        if (nt.current) {
          var o = Y(nt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Un(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), g = o.lineNumber;
          return `

Check your code at ` + f + ":" + g + ".";
        }
        return "";
      }
    }
    var _t = {};
    function Bn(o) {
      {
        var f = Ot();
        if (!f) {
          var g = typeof o == "string" ? o : o.displayName || o.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function At(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var g = Bn(f);
        if (_t[g])
          return;
        _t[g] = !0;
        var R = "";
        o && o._owner && o._owner !== nt.current && (R = " It was passed a child from " + Y(o._owner.type) + "."), xe(o), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, R), xe(null);
      }
    }
    function It(o, f) {
      {
        if (typeof o != "object")
          return;
        if (et(o))
          for (var g = 0; g < o.length; g++) {
            var R = o[g];
            ot(R) && At(R, f);
          }
        else if (ot(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = B(o);
          if (typeof F == "function" && F !== o.entries)
            for (var U = F.call(o), _; !(_ = U.next()).done; )
              ot(_.value) && At(_.value, f);
        }
      }
    }
    function Hn(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          g = f.propTypes;
        else
          return;
        if (g) {
          var R = Y(f);
          Pn(g, o.props, "prop", R, o);
        } else if (f.PropTypes !== void 0 && !rt) {
          rt = !0;
          var F = Y(f);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kn(o) {
      {
        for (var f = Object.keys(o.props), g = 0; g < f.length; g++) {
          var R = f[g];
          if (R !== "children" && R !== "key") {
            xe(o), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), xe(null);
            break;
          }
        }
        o.ref !== null && (xe(o), v("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    function Yn(o, f, g, R, F, U) {
      {
        var _ = Q(o);
        if (!_) {
          var P = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Un(F);
          te ? P += te : P += Ot();
          var G;
          o === null ? G = "null" : et(o) ? G = "array" : o !== void 0 && o.$$typeof === t ? (G = "<" + (Y(o.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : G = typeof o, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, P);
        }
        var J = $n(o, f, g, F, U);
        if (J == null)
          return J;
        if (_) {
          var le = f.children;
          if (le !== void 0)
            if (R)
              if (et(le)) {
                for (var Te = 0; Te < le.length; Te++)
                  It(le[Te], o);
                Object.freeze && Object.freeze(le);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(le, o);
        }
        return o === r ? Kn(J) : Hn(J), J;
      }
    }
    var zn = Yn;
    $e.Fragment = r, $e.jsxDEV = zn;
  }()), $e;
}
process.env.NODE_ENV === "production" ? ft.exports = tr() : ft.exports = nr();
var re = ft.exports;
const rr = () => /* @__PURE__ */ re.jsxDEV("div", { children: "Calendar" }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/calendar/calendar.tsx",
  lineNumber: 5,
  columnNumber: 5
}, globalThis);
var Ye = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(Ye || {}), dt = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(dt || {}), pe = /* @__PURE__ */ ((e) => (e.SET_VALUE = "SET_VALUE", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e))(pe || {});
const ht = {
  classNames: {
    wrapper: "",
    input: ""
  },
  theme: Ye.LIGHT,
  value: "",
  events: {
    onChange: void 0,
    onSelect: void 0
  },
  locale: {
    calendar: dt.NEPALI,
    value: dt.NEPALI
  }
}, or = (e = ht, t) => t.type === pe.SET_VALUE ? { ...e, value: t.value } : t.type === pe.SET_CLASSES ? { ...e, classNames: t.classNames } : t.type === pe.SET_THEME ? { ...e, theme: t.theme } : t.type === pe.SET_EVENTS ? { ...e, events: t.events } : e, nn = Gn({
  state: ht,
  dispatch: () => null
}), ir = ({ children: e }) => {
  const [t, n] = Xn(or, ht);
  return /* @__PURE__ */ re.jsxDEV(nn.Provider, { value: { state: t, dispatch: n }, children: e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/data/provider.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, globalThis);
}, rn = () => {
  const { state: e, dispatch: t } = Jn(nn);
  return { setData: (r) => {
    t(r);
  }, state: e };
}, ar = (e, t) => Object.entries(t).reduce((n, [r, i]) => e.includes(r) ? { ...n, [r]: i } : { ...n }, {}), sr = [
  "value",
  "className",
  "wrapperClassName",
  "dark",
  "onChange",
  "onSelect",
  "options"
], cr = (e) => {
  const t = ar([...sr, "type", "readOnly"], e), { state: n } = rn();
  return /* @__PURE__ */ re.jsxDEV(
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
function he(e) {
  return on(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (on(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function on(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function Z(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ne(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function pt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function Fe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function ur(e) {
  return ["table", "td", "th"].includes(he(e));
}
function bt(e) {
  const t = yt(), n = ce(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function lr(e) {
  let t = we(e);
  for (; ne(t) && !je(t); ) {
    if (bt(t))
      return t;
    t = we(t);
  }
  return null;
}
function yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(he(e));
}
function ce(e) {
  return se(e).getComputedStyle(e);
}
function Qe(e) {
  return Z(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function we(e) {
  if (he(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pt(e) && e.host || // Fallback.
    ve(e)
  );
  return pt(t) ? t.host : t;
}
function an(e) {
  const t = we(e);
  return je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ne(t) && Fe(t) ? t : an(t);
}
function ge(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = an(e), a = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = se(i);
  return a ? t.concat(s, s.visualViewport || [], Fe(i) ? i : [], s.frameElement && n ? ge(s.frameElement) : []) : t.concat(i, ge(i, [], n));
}
function Ce(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ae(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pt(n)) {
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
  return e.mozInputSource === 0 && e.isTrusted ? !0 : sn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function vr(e) {
  return !sn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function mr() {
  return /apple/i.test(navigator.vendor);
}
function sn() {
  const e = /android/i;
  return e.test(fr()) || e.test(dr());
}
function Mt(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function gr(e) {
  return "nativeEvent" in e;
}
function hr(e) {
  return e.matches("html,body");
}
function fe(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function it(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ke(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const br = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function cn(e) {
  return ne(e) && e.matches(br);
}
function at(e) {
  e.preventDefault(), e.stopPropagation();
}
const vt = Math.min, Pe = Math.max, ze = Math.round, Ue = Math.floor, be = (e) => ({
  x: e,
  y: e
});
function un(e) {
  return e.split("-")[0];
}
function yr(e) {
  return e.split("-")[1];
}
function Er(e) {
  return e === "x" ? "y" : "x";
}
function wr(e) {
  return e === "y" ? "height" : "width";
}
function ln(e) {
  return ["top", "bottom"].includes(un(e)) ? "y" : "x";
}
function Rr(e) {
  return Er(ln(e));
}
function fn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Vt(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const a = ln(t), s = Rr(t), c = wr(s), l = un(t), d = a === "y", h = r.x + r.width / 2 - i.width / 2, p = r.y + r.height / 2 - i.height / 2, y = r[c] / 2 - i[c] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: h,
        y: r.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: h,
        y: r.y + r.height
      };
      break;
    case "right":
      u = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      u = {
        x: r.x - i.width,
        y: p
      };
      break;
    default:
      u = {
        x: r.x,
        y: r.y
      };
  }
  switch (yr(t)) {
    case "start":
      u[s] -= y * (n && d ? -1 : 1);
      break;
    case "end":
      u[s] += y * (n && d ? -1 : 1);
      break;
  }
  return u;
}
const xr = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: h,
    y: p
  } = Vt(d, r, l), y = r, u = {}, E = 0;
  for (let x = 0; x < c.length; x++) {
    const {
      name: B,
      fn: b
    } = c[x], {
      x: v,
      y: V,
      data: L,
      reset: C
    } = await b({
      x: h,
      y: p,
      initialPlacement: r,
      placement: y,
      strategy: i,
      middlewareData: u,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (h = v ?? h, p = V ?? p, u = {
      ...u,
      [B]: {
        ...u[B],
        ...L
      }
    }, C && E <= 50) {
      E++, typeof C == "object" && (C.placement && (y = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: h,
        y: p
      } = Vt(d, y, l)), x = -1;
      continue;
    }
  }
  return {
    x: h,
    y: p,
    placement: y,
    strategy: i,
    middlewareData: u
  };
};
function dn(e) {
  const t = ce(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = ne(e), a = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, c = ze(n) !== a || ze(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Et(e) {
  return Z(e) ? e : e.contextElement;
}
function Oe(e) {
  const t = Et(e);
  if (!ne(t))
    return be(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: a
  } = dn(t);
  let s = (a ? ze(n.width) : n.width) / r, c = (a ? ze(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Tr = /* @__PURE__ */ be(0);
function pn(e) {
  const t = se(e);
  return !yt() || !t.visualViewport ? Tr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function Re(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = Et(e);
  let s = be(1);
  t && (r ? Z(r) && (s = Oe(r)) : s = Oe(e));
  const c = Sr(a, n, r) ? pn(a) : be(0);
  let l = (i.left + c.x) / s.x, d = (i.top + c.y) / s.y, h = i.width / s.x, p = i.height / s.y;
  if (a) {
    const y = se(a), u = r && Z(r) ? se(r) : r;
    let E = y.frameElement;
    for (; E && r && u !== y; ) {
      const x = Oe(E), B = E.getBoundingClientRect(), b = ce(E), v = B.left + (E.clientLeft + parseFloat(b.paddingLeft)) * x.x, V = B.top + (E.clientTop + parseFloat(b.paddingTop)) * x.y;
      l *= x.x, d *= x.y, h *= x.x, p *= x.y, l += v, d += V, E = se(E).frameElement;
    }
  }
  return fn({
    width: h,
    height: p,
    x: l,
    y: d
  });
}
function Cr(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const i = ne(n), a = ve(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = be(1);
  const l = be(0);
  if ((i || !i && r !== "fixed") && ((he(n) !== "body" || Fe(a)) && (s = Qe(n)), ne(n))) {
    const d = Re(n);
    c = Oe(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + l.x,
    y: t.y * c.y - s.scrollTop * c.y + l.y
  };
}
function kr(e) {
  return Array.from(e.getClientRects());
}
function vn(e) {
  return Re(ve(e)).left + Qe(e).scrollLeft;
}
function Dr(e) {
  const t = ve(e), n = Qe(e), r = e.ownerDocument.body, i = Pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + vn(e);
  const c = -n.scrollTop;
  return ce(r).direction === "rtl" && (s += Pe(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Nr(e, t) {
  const n = se(e), r = ve(e), i = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    const d = yt();
    (!d || d && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Pr(e, t) {
  const n = Re(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ne(e) ? Oe(e) : be(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, l = i * a.x, d = r * a.y;
  return {
    width: s,
    height: c,
    x: l,
    y: d
  };
}
function Wt(e, t, n) {
  let r;
  if (t === "viewport")
    r = Nr(e, n);
  else if (t === "document")
    r = Dr(ve(e));
  else if (Z(t))
    r = Pr(t, n);
  else {
    const i = pn(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return fn(r);
}
function mn(e, t) {
  const n = we(e);
  return n === t || !Z(n) || je(n) ? !1 : ce(n).position === "fixed" || mn(n, t);
}
function Or(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ge(e, [], !1).filter((c) => Z(c) && he(c) !== "body"), i = null;
  const a = ce(e).position === "fixed";
  let s = a ? we(e) : e;
  for (; Z(s) && !je(s); ) {
    const c = ce(s), l = bt(s);
    !l && c.position === "fixed" && (i = null), (a ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Fe(s) && !l && mn(e, s)) ? r = r.filter((h) => h !== s) : i = c, s = we(s);
  }
  return t.set(e, r), r;
}
function _r(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? Or(t, this._c) : [].concat(n), r], c = s[0], l = s.reduce((d, h) => {
    const p = Wt(t, h, i);
    return d.top = Pe(p.top, d.top), d.right = vt(p.right, d.right), d.bottom = vt(p.bottom, d.bottom), d.left = Pe(p.left, d.left), d;
  }, Wt(t, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ar(e) {
  return dn(e);
}
function Ir(e, t, n) {
  const r = ne(t), i = ve(t), a = n === "fixed", s = Re(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = be(0);
  if (r || !r && !a)
    if ((he(t) !== "body" || Fe(i)) && (c = Qe(t)), r) {
      const d = Re(t, !0, a, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      i && (l.x = vn(i));
  return {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function $t(e, t) {
  return !ne(e) || ce(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function gn(e, t) {
  const n = se(e);
  if (!ne(e))
    return n;
  let r = $t(e, t);
  for (; r && ur(r) && ce(r).position === "static"; )
    r = $t(r, t);
  return r && (he(r) === "html" || he(r) === "body" && ce(r).position === "static" && !bt(r)) ? n : r || lr(e) || n;
}
const Fr = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const i = this.getOffsetParent || gn, a = this.getDimensions;
  return {
    reference: Ir(t, await i(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function jr(e) {
  return ce(e).direction === "rtl";
}
const Lr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cr,
  getDocumentElement: ve,
  getClippingRect: _r,
  getOffsetParent: gn,
  getElementRects: Fr,
  getClientRects: kr,
  getDimensions: Ar,
  getScale: Oe,
  isElement: Z,
  isRTL: jr
};
function Mr(e, t) {
  let n = null, r;
  const i = ve(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const {
      left: d,
      top: h,
      width: p,
      height: y
    } = e.getBoundingClientRect();
    if (c || t(), !p || !y)
      return;
    const u = Ue(h), E = Ue(i.clientWidth - (d + p)), x = Ue(i.clientHeight - (h + y)), B = Ue(d), v = {
      rootMargin: -u + "px " + -E + "px " + -x + "px " + -B + "px",
      threshold: Pe(0, vt(1, l)) || 1
    };
    let V = !0;
    function L(C) {
      const W = C[0].intersectionRatio;
      if (W !== l) {
        if (!V)
          return s();
        W ? s(!1, W) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      V = !1;
    }
    try {
      n = new IntersectionObserver(L, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(L, v);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Vr(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Et(e), h = i || a ? [...d ? ge(d) : [], ...ge(t)] : [];
  h.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const p = d && c ? Mr(d, n) : null;
  let y = -1, u = null;
  s && (u = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === d && u && (u.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      u && u.observe(t);
    })), n();
  }), d && !l && u.observe(d), u.observe(t));
  let E, x = l ? Re(e) : null;
  l && B();
  function B() {
    const b = Re(e);
    x && (b.x !== x.x || b.y !== x.y || b.width !== x.width || b.height !== x.height) && n(), x = b, E = requestAnimationFrame(B);
  }
  return n(), () => {
    h.forEach((b) => {
      i && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), p && p(), u && u.disconnect(), u = null, l && cancelAnimationFrame(E);
  };
}
const Wr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Lr,
    ...n
  }, a = {
    ...i.platform,
    _c: r
  };
  return xr(e, t, {
    ...i,
    platform: a
  });
};
var Ke = typeof document < "u" ? tn : Ne;
function qe(e, t) {
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
        if (!qe(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = i[r];
      if (!(a === "_owner" && e.$$typeof) && !qe(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ut(e, t) {
  const n = hn(e);
  return Math.round(t * n) / n;
}
function Bt(e) {
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
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: d
  } = e, [h, p] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, u] = m.useState(r);
  qe(y, r) || u(r);
  const [E, x] = m.useState(null), [B, b] = m.useState(null), v = m.useCallback((K) => {
    K != W.current && (W.current = K, x(K));
  }, [x]), V = m.useCallback((K) => {
    K !== w.current && (w.current = K, b(K));
  }, [b]), L = a || E, C = s || B, W = m.useRef(null), w = m.useRef(null), z = m.useRef(h), oe = Bt(l), Q = Bt(i), k = m.useCallback(() => {
    if (!W.current || !w.current)
      return;
    const K = {
      placement: t,
      strategy: n,
      middleware: y
    };
    Q.current && (K.platform = Q.current), Wr(W.current, w.current, K).then((T) => {
      const A = {
        ...T,
        isPositioned: !0
      };
      ee.current && !qe(z.current, A) && (z.current = A, er.flushSync(() => {
        p(A);
      }));
    });
  }, [y, t, n, Q]);
  Ke(() => {
    d === !1 && z.current.isPositioned && (z.current.isPositioned = !1, p((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [d]);
  const ee = m.useRef(!1);
  Ke(() => (ee.current = !0, () => {
    ee.current = !1;
  }), []), Ke(() => {
    if (L && (W.current = L), C && (w.current = C), L && C) {
      if (oe.current)
        return oe.current(L, C, k);
      k();
    }
  }, [L, C, k, oe]);
  const Y = m.useMemo(() => ({
    reference: W,
    floating: w,
    setReference: v,
    setFloating: V
  }), [v, V]), H = m.useMemo(() => ({
    reference: L,
    floating: C
  }), [L, C]), X = m.useMemo(() => {
    const K = {
      position: n,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return K;
    const T = Ut(H.floating, h.x), A = Ut(H.floating, h.y);
    return c ? {
      ...K,
      transform: "translate(" + T + "px, " + A + "px)",
      ...hn(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: A
    };
  }, [n, c, H.floating, h.x, h.y]);
  return m.useMemo(() => ({
    ...h,
    update: k,
    refs: Y,
    elements: H,
    floatingStyles: X
  }), [h, k, Y, H, X]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Ur = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], mt = /* @__PURE__ */ Ur.join(","), bn = typeof Element > "u", Ie = bn ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ge = !bn && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Xe = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), a = i === "" || i === "true", s = a || n && t && e(t.parentNode);
  return s;
}, Br = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Hr = function(t, n, r) {
  if (Xe(t))
    return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(mt));
  return n && Ie.call(t, mt) && i.unshift(t), i = i.filter(r), i;
}, Kr = function e(t, n, r) {
  for (var i = [], a = Array.from(t); a.length; ) {
    var s = a.shift();
    if (!Xe(s, !1))
      if (s.tagName === "SLOT") {
        var c = s.assignedElements(), l = c.length ? c : s.children, d = e(l, !0, r);
        r.flatten ? i.push.apply(i, d) : i.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var h = Ie.call(s, mt);
        h && r.filter(s) && (n || !t.includes(s)) && i.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), y = !Xe(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (p && y) {
          var u = e(p === !0 ? s.children : p.children, !0, r);
          r.flatten ? i.push.apply(i, u) : i.push({
            scopeParent: s,
            candidates: u
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return i;
}, yn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, En = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Br(t)) && !yn(t) ? 0 : t.tabIndex;
}, Yr = function(t, n) {
  var r = En(t);
  return r < 0 && n && !yn(t) ? 0 : r;
}, zr = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, wn = function(t) {
  return t.tagName === "INPUT";
}, qr = function(t) {
  return wn(t) && t.type === "hidden";
}, Gr = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Xr = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Jr = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ge(t), r = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(t.name));
  else
    try {
      i = r(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var a = Xr(i, t.form);
  return !a || a === t;
}, Zr = function(t) {
  return wn(t) && t.type === "radio";
}, Qr = function(t) {
  return Zr(t) && !Jr(t);
}, eo = function(t) {
  var n, r = t && Ge(t), i = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (r && r !== t) {
    var s, c, l;
    for (a = !!((s = i) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(i) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !a && i; ) {
      var d, h, p;
      r = Ge(i), i = (d = r) === null || d === void 0 ? void 0 : d.host, a = !!((h = i) !== null && h !== void 0 && (p = h.ownerDocument) !== null && p !== void 0 && p.contains(i));
    }
  }
  return a;
}, Ht = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, to = function(t, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = Ie.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (Ie.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var c = t; t; ) {
        var l = t.parentElement, d = Ge(t);
        if (l && !l.shadowRoot && i(l) === !0)
          return Ht(t);
        t.assignedSlot ? t = t.assignedSlot : !l && d !== t.ownerDocument ? t = d.host : t = l;
      }
      t = c;
    }
    if (eo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ht(t);
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
  Xe(n) || qr(n) || to(n, t) || // For a details element with a summary, the summary element gets the focus
  Gr(n) || no(n));
}, Kt = function(t, n) {
  return !(Qr(n) || En(n) < 0 || !ro(t, n));
}, oo = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, io = function e(t) {
  var n = [], r = [];
  return t.forEach(function(i, a) {
    var s = !!i.scopeParent, c = s ? i.scopeParent : i, l = Yr(c, s), d = s ? e(i.candidates) : c;
    l === 0 ? s ? n.push.apply(n, d) : n.push(c) : r.push({
      documentOrder: a,
      tabIndex: l,
      item: i,
      isScope: s,
      content: d
    });
  }), r.sort(zr).reduce(function(i, a) {
    return a.isScope ? i.push.apply(i, a.content) : i.push(a.content), i;
  }, []).concat(n);
}, Rn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Kr([t], n.includeContainer, {
    filter: Kt.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: oo
  }) : r = Hr(t, n.includeContainer, Kt.bind(null, n)), io(r);
};
const ao = m[/* @__PURE__ */ "useInsertionEffect".toString()], so = ao || ((e) => e());
function De(e) {
  const t = m.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return so(() => {
    t.current = e;
  }), m.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
let Yt = 0;
function Ee(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: i = !1
  } = t;
  r && cancelAnimationFrame(Yt);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  i ? a() : Yt = requestAnimationFrame(a);
}
var me = typeof document < "u" ? tn : Ne;
function Je() {
  return Je = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Je.apply(this, arguments);
}
let st = !1, co = 0;
const zt = () => "floating-ui-" + co++;
function uo() {
  const [e, t] = m.useState(() => st ? zt() : void 0);
  return me(() => {
    e == null && t(zt());
  }, []), m.useEffect(() => {
    st || (st = !0);
  }, []), e;
}
const lo = m[/* @__PURE__ */ "useId".toString()], wt = lo || uo;
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
const po = /* @__PURE__ */ m.createContext(null), vo = /* @__PURE__ */ m.createContext(null), mo = () => {
  var e;
  return ((e = m.useContext(po)) == null ? void 0 : e.id) || null;
}, Rt = () => m.useContext(vo);
function Ze(e) {
  return "data-floating-ui-" + e;
}
function ct(e) {
  const t = Zn(e);
  return me(() => {
    t.current = e;
  }), t;
}
function go(e, t) {
  var n;
  let r = [], i = (n = e.find((a) => a.id === t)) == null ? void 0 : n.parentId;
  for (; i; ) {
    const a = e.find((s) => s.id === i);
    i = a == null ? void 0 : a.parentId, a && (r = r.concat(a));
  }
  return r;
}
function Ae(e, t) {
  let n = e.filter((i) => {
    var a;
    return i.parentId === t && ((a = i.context) == null ? void 0 : a.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((i) => {
      var a;
      return (a = r) == null ? void 0 : a.some((s) => {
        var c;
        return i.parentId === s.id && ((c = i.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(r);
  return n;
}
let Se = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakSet(), He = {}, ut = 0;
const ho = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, xn = (e) => e && (e.host || xn(e.parentNode)), bo = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = xn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function yo(e, t, n, r) {
  const i = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = bo(t, e), c = /* @__PURE__ */ new Set(), l = new Set(s), d = [];
  He[i] || (He[i] = /* @__PURE__ */ new WeakMap());
  const h = He[i];
  s.forEach(p), y(t), c.clear();
  function p(u) {
    !u || c.has(u) || (c.add(u), u.parentNode && p(u.parentNode));
  }
  function y(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, (E) => {
      if (c.has(E))
        y(E);
      else {
        const x = a ? E.getAttribute(a) : null, B = x !== null && x !== "false", b = (Se.get(E) || 0) + 1, v = (h.get(E) || 0) + 1;
        Se.set(E, b), h.set(E, v), d.push(E), b === 1 && B && Be.add(E), v === 1 && E.setAttribute(i, ""), !B && a && E.setAttribute(a, "true");
      }
    });
  }
  return ut++, () => {
    d.forEach((u) => {
      const E = (Se.get(u) || 0) - 1, x = (h.get(u) || 0) - 1;
      Se.set(u, E), h.set(u, x), E || (!Be.has(u) && a && u.removeAttribute(a), Be.delete(u)), x || u.removeAttribute(i);
    }), ut--, ut || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakSet(), He = {});
  };
}
function qt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = fe(e[0]).body;
  return yo(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Tn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Sn(e, t) {
  const n = Rn(e, Tn());
  t === "prev" && n.reverse();
  const r = n.indexOf(Ce(fe(e)));
  return n.slice(r + 1)[0];
}
function Eo() {
  return Sn(document.body, "next");
}
function wo() {
  return Sn(document.body, "prev");
}
function Gt(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !ae(n, r);
}
const Cn = {
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
let Ro;
function Xt(e) {
  e.key === "Tab" && (e.target, clearTimeout(Ro));
}
const Jt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const [r, i] = m.useState();
  me(() => (mr() && i("button"), document.addEventListener("keydown", Xt), () => {
    document.removeEventListener("keydown", Xt);
  }), []);
  const a = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Ze("focus-guard")]: "",
    style: Cn
  };
  return /* @__PURE__ */ m.createElement("span", Je({}, t, a));
}), xo = /* @__PURE__ */ m.createContext(null), To = () => m.useContext(xo), So = /* @__PURE__ */ m.forwardRef(function(t, n) {
  return /* @__PURE__ */ m.createElement("button", Je({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: Cn
  }));
});
function Co(e) {
  const {
    context: t,
    children: n,
    disabled: r = !1,
    order: i = ["content"],
    guards: a = !0,
    initialFocus: s = 0,
    returnFocus: c = !0,
    modal: l = !0,
    visuallyHiddenDismiss: d = !1,
    closeOnFocusOut: h = !0
  } = e, {
    open: p,
    refs: y,
    nodeId: u,
    onOpenChange: E,
    events: x,
    dataRef: B,
    elements: {
      domReference: b,
      floating: v
    }
  } = t, V = typeof s == "number" && s < 0, L = (b == null ? void 0 : b.getAttribute("role")) === "combobox" && cn(b) && V, C = L ? !1 : l, W = ho() ? a : !0, w = ct(i), z = ct(s), oe = ct(c), Q = Rt(), k = To(), ee = m.useRef(null), Y = m.useRef(null), H = m.useRef(!1), X = m.useRef(null), K = m.useRef(!1), T = k != null, A = m.useCallback(function(O) {
    return O === void 0 && (O = v), O ? Rn(O, Tn()) : [];
  }, [v]), j = m.useCallback((O) => {
    const N = A(O);
    return w.current.map((D) => b && D === "reference" ? b : v && D === "floating" ? v : N).filter(Boolean).flat();
  }, [b, v, w, A]);
  m.useEffect(() => {
    if (r || !C)
      return;
    function O(D) {
      if (D.key === "Tab") {
        ae(v, Ce(fe(v))) && A().length === 0 && !L && at(D);
        const I = j(), M = ke(D);
        w.current[0] === "reference" && M === b && (at(D), D.shiftKey ? Ee(I[I.length - 1]) : Ee(I[1])), w.current[1] === "floating" && M === v && D.shiftKey && (at(D), Ee(I[0]));
      }
    }
    const N = fe(v);
    return N.addEventListener("keydown", O), () => {
      N.removeEventListener("keydown", O);
    };
  }, [r, b, v, C, w, y, L, A, j]), m.useEffect(() => {
    if (r || !h)
      return;
    function O() {
      K.current = !0, setTimeout(() => {
        K.current = !1;
      });
    }
    function N(D) {
      const I = D.relatedTarget;
      queueMicrotask(() => {
        const M = !(ae(b, I) || ae(v, I) || ae(I, v) || ae(k == null ? void 0 : k.portalNode, I) || I != null && I.hasAttribute(Ze("focus-guard")) || Q && (Ae(Q.nodesRef.current, u).find(($) => {
          var q, ue;
          return ae((q = $.context) == null ? void 0 : q.elements.floating, I) || ae((ue = $.context) == null ? void 0 : ue.elements.domReference, I);
        }) || go(Q.nodesRef.current, u).find(($) => {
          var q, ue;
          return ((q = $.context) == null ? void 0 : q.elements.floating) === I || ((ue = $.context) == null ? void 0 : ue.elements.domReference) === I;
        })));
        I && M && !K.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        I !== X.current && (H.current = !0, E(!1, D));
      });
    }
    if (v && ne(b))
      return b.addEventListener("focusout", N), b.addEventListener("pointerdown", O), !C && v.addEventListener("focusout", N), () => {
        b.removeEventListener("focusout", N), b.removeEventListener("pointerdown", O), !C && v.removeEventListener("focusout", N);
      };
  }, [r, b, v, C, u, Q, k, E, h]), m.useEffect(() => {
    var O;
    if (r)
      return;
    const N = Array.from((k == null || (O = k.portalNode) == null ? void 0 : O.querySelectorAll("[" + Ze("portal") + "]")) || []);
    if (v) {
      const D = [v, ...N, ee.current, Y.current, w.current.includes("reference") || L ? b : null].filter((M) => M != null), I = l || L ? qt(D, W, !W) : qt(D);
      return () => {
        I();
      };
    }
  }, [r, b, v, l, w, k, L, W]), me(() => {
    if (r || !v)
      return;
    const O = fe(v), N = Ce(O);
    queueMicrotask(() => {
      const D = j(v), I = z.current, M = (typeof I == "number" ? D[I] : I.current) || v, $ = ae(v, N);
      !V && !$ && p && Ee(M, {
        preventScroll: M === v
      });
    });
  }, [r, p, v, V, j, z]), me(() => {
    if (r || !v)
      return;
    let O = !1;
    const N = fe(v), D = Ce(N), I = B.current;
    X.current = D;
    function M($) {
      if ($.type === "escapeKey" && y.domReference.current && (X.current = y.domReference.current), ["referencePress", "escapeKey"].includes($.type))
        return;
      const q = $.data.returnFocus;
      typeof q == "object" ? (H.current = !1, O = q.preventScroll) : H.current = !q;
    }
    return x.on("dismiss", M), () => {
      x.off("dismiss", M);
      const $ = Ce(N);
      (ae(v, $) || Q && Ae(Q.nodesRef.current, u).some((ue) => {
        var ye;
        return ae((ye = ue.context) == null ? void 0 : ye.elements.floating, $);
      }) || I.openEvent && ["click", "mousedown"].includes(I.openEvent.type)) && y.domReference.current && (X.current = y.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      oe.current && ne(X.current) && !H.current && Ee(X.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: O
      });
    };
  }, [r, v, oe, B, y, x, Q, u]), me(() => {
    if (!(r || !k))
      return k.setFocusManagerState({
        modal: C,
        closeOnFocusOut: h,
        open: p,
        onOpenChange: E,
        refs: y
      }), () => {
        k.setFocusManagerState(null);
      };
  }, [r, k, C, p, E, y, h]), me(() => {
    if (r || !v || typeof MutationObserver != "function" || V)
      return;
    const O = () => {
      const D = v.getAttribute("tabindex");
      w.current.includes("floating") || Ce(fe(v)) !== y.domReference.current && A().length === 0 ? D !== "0" && v.setAttribute("tabindex", "0") : D !== "-1" && v.setAttribute("tabindex", "-1");
    };
    O();
    const N = new MutationObserver(O);
    return N.observe(v, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      N.disconnect();
    };
  }, [r, v, y, w, A, V]);
  function S(O) {
    return r || !d || !C ? null : /* @__PURE__ */ m.createElement(So, {
      ref: O === "start" ? ee : Y,
      onClick: (N) => E(!1, N.nativeEvent)
    }, typeof d == "string" ? d : "Dismiss");
  }
  const ie = !r && W && (T || C);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, ie && /* @__PURE__ */ m.createElement(Jt, {
    "data-type": "inside",
    ref: k == null ? void 0 : k.beforeInsideRef,
    onFocus: (O) => {
      if (C) {
        const D = j();
        Ee(i[0] === "reference" ? D[0] : D[D.length - 1]);
      } else if (k != null && k.preserveTabOrder && k.portalNode)
        if (H.current = !1, Gt(O, k.portalNode)) {
          const D = Eo() || b;
          D == null || D.focus();
        } else {
          var N;
          (N = k.beforeOutsideRef.current) == null || N.focus();
        }
    }
  }), !L && S("start"), n, S("end"), ie && /* @__PURE__ */ m.createElement(Jt, {
    "data-type": "inside",
    ref: k == null ? void 0 : k.afterInsideRef,
    onFocus: (O) => {
      if (C)
        Ee(j()[0]);
      else if (k != null && k.preserveTabOrder && k.portalNode)
        if (h && (H.current = !0), Gt(O, k.portalNode)) {
          const D = wo() || b;
          D == null || D.focus();
        } else {
          var N;
          (N = k.afterOutsideRef.current) == null || N.focus();
        }
    }
  }));
}
function Zt(e) {
  return ne(e.target) && e.target.tagName === "BUTTON";
}
function Qt(e) {
  return cn(e);
}
function ko(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: i,
    elements: {
      domReference: a
    }
  } = e, {
    enabled: s = !0,
    event: c = "click",
    toggle: l = !0,
    ignoreMouse: d = !1,
    keyboardHandlers: h = !0
  } = t, p = m.useRef(), y = m.useRef(!1);
  return m.useMemo(() => s ? {
    reference: {
      onPointerDown(u) {
        p.current = u.pointerType;
      },
      onMouseDown(u) {
        u.button === 0 && (Mt(p.current, !0) && d || c !== "click" && (n && l && (!i.current.openEvent || i.current.openEvent.type === "mousedown") ? r(!1, u.nativeEvent) : (u.preventDefault(), r(!0, u.nativeEvent))));
      },
      onClick(u) {
        if (c === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        Mt(p.current, !0) && d || (n && l && (!i.current.openEvent || i.current.openEvent.type === "click") ? r(!1, u.nativeEvent) : r(!0, u.nativeEvent));
      },
      onKeyDown(u) {
        p.current = void 0, !(u.defaultPrevented || !h || Zt(u)) && (u.key === " " && !Qt(a) && (u.preventDefault(), y.current = !0), u.key === "Enter" && r(!(n && l), u.nativeEvent));
      },
      onKeyUp(u) {
        u.defaultPrevented || !h || Zt(u) || Qt(a) || u.key === " " && y.current && (y.current = !1, r(!(n && l), u.nativeEvent));
      }
    }
  } : {}, [s, i, c, d, h, a, l, n, r]);
}
const Do = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, No = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, en = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Po(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: i,
    nodeId: a,
    elements: {
      reference: s,
      domReference: c,
      floating: l
    },
    dataRef: d
  } = e, {
    enabled: h = !0,
    escapeKey: p = !0,
    outsidePress: y = !0,
    outsidePressEvent: u = "pointerdown",
    referencePress: E = !1,
    referencePressEvent: x = "pointerdown",
    ancestorScroll: B = !1,
    bubbles: b,
    capture: v
  } = t, V = Rt(), L = mo() != null, C = De(typeof y == "function" ? y : () => !1), W = typeof y == "function" ? C : y, w = m.useRef(!1), z = m.useRef(!1), {
    escapeKey: oe,
    outsidePress: Q
  } = en(b), {
    escapeKey: k,
    outsidePress: ee
  } = en(v), Y = De((T) => {
    if (!n || !h || !p || T.key !== "Escape")
      return;
    const A = V ? Ae(V.nodesRef.current, a) : [];
    if (!oe && (T.stopPropagation(), A.length > 0)) {
      let j = !0;
      if (A.forEach((S) => {
        var ie;
        if ((ie = S.context) != null && ie.open && !S.context.dataRef.current.__escapeKeyBubbles) {
          j = !1;
          return;
        }
      }), !j)
        return;
    }
    i.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, gr(T) ? T.nativeEvent : T);
  }), H = De((T) => {
    var A;
    const j = () => {
      var S;
      Y(T), (S = ke(T)) == null || S.removeEventListener("keydown", j);
    };
    (A = ke(T)) == null || A.addEventListener("keydown", j);
  }), X = De((T) => {
    const A = w.current;
    w.current = !1;
    const j = z.current;
    if (z.current = !1, u === "click" && j || A || typeof W == "function" && !W(T))
      return;
    const S = ke(T), ie = "[" + Ze("inert") + "]", O = fe(l).querySelectorAll(ie);
    let N = Z(S) ? S : null;
    for (; N && !je(N); ) {
      const M = we(N);
      if (M === fe(l).body || !Z(M))
        break;
      N = M;
    }
    if (O.length && Z(S) && !hr(S) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !ae(S, l) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(O).every((M) => !ae(N, M)))
      return;
    if (ne(S) && l) {
      const M = S.clientWidth > 0 && S.scrollWidth > S.clientWidth, $ = S.clientHeight > 0 && S.scrollHeight > S.clientHeight;
      let q = $ && T.offsetX > S.clientWidth;
      if ($ && ce(S).direction === "rtl" && (q = T.offsetX <= S.offsetWidth - S.clientWidth), q || M && T.offsetY > S.clientHeight)
        return;
    }
    const D = V && Ae(V.nodesRef.current, a).some((M) => {
      var $;
      return it(T, ($ = M.context) == null ? void 0 : $.elements.floating);
    });
    if (it(T, l) || it(T, c) || D)
      return;
    const I = V ? Ae(V.nodesRef.current, a) : [];
    if (I.length > 0) {
      let M = !0;
      if (I.forEach(($) => {
        var q;
        if ((q = $.context) != null && q.open && !$.context.dataRef.current.__outsidePressBubbles) {
          M = !1;
          return;
        }
      }), !M)
        return;
    }
    i.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: L ? {
          preventScroll: !0
        } : pr(T) || vr(T)
      }
    }), r(!1, T);
  }), K = De((T) => {
    var A;
    const j = () => {
      var S;
      X(T), (S = ke(T)) == null || S.removeEventListener(u, j);
    };
    (A = ke(T)) == null || A.addEventListener(u, j);
  });
  return m.useEffect(() => {
    if (!n || !h)
      return;
    d.current.__escapeKeyBubbles = oe, d.current.__outsidePressBubbles = Q;
    function T(S) {
      r(!1, S);
    }
    const A = fe(l);
    p && A.addEventListener("keydown", k ? H : Y, k), W && A.addEventListener(u, ee ? K : X, ee);
    let j = [];
    return B && (Z(c) && (j = ge(c)), Z(l) && (j = j.concat(ge(l))), !Z(s) && s && s.contextElement && (j = j.concat(ge(s.contextElement)))), j = j.filter((S) => {
      var ie;
      return S !== ((ie = A.defaultView) == null ? void 0 : ie.visualViewport);
    }), j.forEach((S) => {
      S.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      p && A.removeEventListener("keydown", k ? H : Y, k), W && A.removeEventListener(u, ee ? K : X, ee), j.forEach((S) => {
        S.removeEventListener("scroll", T);
      });
    };
  }, [d, l, c, s, p, W, u, n, r, B, h, oe, Q, Y, k, H, X, ee, K]), m.useEffect(() => {
    w.current = !1;
  }, [W, u]), m.useMemo(() => h ? {
    reference: {
      onKeyDown: Y,
      [Do[x]]: (T) => {
        E && (i.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, T.nativeEvent));
      }
    },
    floating: {
      onKeyDown: Y,
      onMouseDown() {
        z.current = !0;
      },
      onMouseUp() {
        z.current = !0;
      },
      [No[u]]: () => {
        w.current = !0;
      }
    }
  } : {}, [h, i, E, u, x, r, Y]);
}
let gt;
process.env.NODE_ENV !== "production" && (gt = /* @__PURE__ */ new Set());
function Oo(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: i
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var a;
    const w = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !Z(e.elements.reference)) {
      var s;
      if (!((s = gt) != null && s.has(w))) {
        var c;
        (c = gt) == null || c.add(w), console.error(w);
      }
    }
  }
  const [l, d] = m.useState(null), h = ((t = e.elements) == null ? void 0 : t.reference) || l, p = $r(e), y = Rt(), u = De((w, z) => {
    w && (x.current.openEvent = z), r == null || r(w, z);
  }), E = m.useRef(null), x = m.useRef({}), B = m.useState(() => fo())[0], b = wt(), v = m.useCallback((w) => {
    const z = Z(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    p.refs.setReference(z);
  }, [p.refs]), V = m.useCallback((w) => {
    (Z(w) || w === null) && (E.current = w, d(w)), (Z(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !Z(w)) && p.refs.setReference(w);
  }, [p.refs]), L = m.useMemo(() => ({
    ...p.refs,
    setReference: V,
    setPositionReference: v,
    domReference: E
  }), [p.refs, V, v]), C = m.useMemo(() => ({
    ...p.elements,
    domReference: h
  }), [p.elements, h]), W = m.useMemo(() => ({
    ...p,
    refs: L,
    elements: C,
    dataRef: x,
    nodeId: i,
    floatingId: b,
    events: B,
    open: n,
    onOpenChange: u
  }), [p, i, b, B, n, u, L, C]);
  return me(() => {
    const w = y == null ? void 0 : y.nodesRef.current.find((z) => z.id === i);
    w && (w.context = W);
  }), m.useMemo(() => ({
    ...p,
    context: W,
    refs: L,
    elements: C
  }), [p, L, C, W]);
}
function lt(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((i) => i ? i[n] : null).concat(e).reduce((i, a) => (a && Object.entries(a).forEach((s) => {
      let [c, l] = s;
      if (c.indexOf("on") === 0) {
        if (r.has(c) || r.set(c, []), typeof l == "function") {
          var d;
          (d = r.get(c)) == null || d.push(l), i[c] = function() {
            for (var h, p = arguments.length, y = new Array(p), u = 0; u < p; u++)
              y[u] = arguments[u];
            return (h = r.get(c)) == null ? void 0 : h.map((E) => E(...y)).find((E) => E !== void 0);
          };
        }
      } else
        i[c] = l;
    }), i), {})
  };
}
function _o(e) {
  e === void 0 && (e = []);
  const t = e, n = m.useCallback(
    (a) => lt(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = m.useCallback(
    (a) => lt(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = m.useCallback(
    (a) => lt(a, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((a) => a == null ? void 0 : a.item)
  );
  return m.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: i
  }), [n, r, i]);
}
function Ao(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: i = !0,
    role: a = "dialog"
  } = t, s = wt();
  return m.useMemo(() => {
    const c = {
      id: r,
      role: a
    };
    return i ? a === "tooltip" ? {
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
  }, [i, a, n, r, s]);
}
const Io = (e) => {
  const [t, n] = Qn(!1), { refs: r, context: i, floatingStyles: a } = Oo({
    open: t,
    onOpenChange: n,
    middleware: [],
    whileElementsMounted: Vr
  }), s = ko(i), c = Po(i), l = Ao(i), { getReferenceProps: d, getFloatingProps: h } = _o([s, c, l]), p = wt();
  return /* @__PURE__ */ re.jsxDEV(re.Fragment, { children: [
    /* @__PURE__ */ re.jsxDEV("div", { ref: r.setReference, ...d(), children: e.input }, void 0, !1, {
      fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/floating-container.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, globalThis),
    t && /* @__PURE__ */ re.jsxDEV(Co, { context: i, modal: !1, children: /* @__PURE__ */ re.jsxDEV("div", { ref: r.setFloating, style: a, "aria-labelledby": p, ...h(), children: e.calendar }, void 0, !1, {
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
}, Fo = ({ ...e }) => {
  const { state: t, setData: n } = rn();
  return Ne(() => {
    n({ type: pe.SET_VALUE, value: e.value || "" });
  }, [e.value]), Ne(() => {
    n({
      type: pe.SET_CLASSES,
      classNames: {
        wrapper: e.wrapperClassName,
        input: e.className
      }
    });
  }, [e.className, e.wrapperClassName]), Ne(() => {
    n({
      type: pe.SET_THEME,
      theme: e.dark ? Ye.DARK : Ye.LIGHT
    });
  }, [e.dark]), Ne(() => {
    n({
      type: pe.SET_EVENTS,
      events: {
        onChange: e.onChange || void 0,
        onSelect: e.onSelect || void 0
      }
    });
  }, [e.onChange, e.onSelect]), /* @__PURE__ */ re.jsxDEV("div", { className: `nepali-datepicker ${t.classNames.wrapper || ""}`, "data-theme": t.theme, children: /* @__PURE__ */ re.jsxDEV(Io, { input: /* @__PURE__ */ re.jsxDEV(cr, { ...e }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
    lineNumber: 47,
    columnNumber: 33
  }, globalThis), calendar: /* @__PURE__ */ re.jsxDEV(rr, {}, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
    lineNumber: 47,
    columnNumber: 69
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, globalThis) }, void 0, !1, {
    fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/components/wrapper/wrapper.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, globalThis);
}, Lo = (e) => /* @__PURE__ */ re.jsxDEV(ir, { children: /* @__PURE__ */ re.jsxDEV(Fo, { ...e }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 13,
  columnNumber: 7
}, globalThis) }, void 0, !1, {
  fileName: "/Users/puncoz/Workspace/web/projects/nepali-datepicker-reactjs/NepaliDatePicker/src/nepali-date-picker.tsx",
  lineNumber: 12,
  columnNumber: 5
}, globalThis);
export {
  Lo as NepaliDatePicker
};
