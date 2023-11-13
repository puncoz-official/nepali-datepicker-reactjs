import * as b from "react";
import Sn, { useContext as Dr, useCallback as ye, useMemo as oe, useState as Rr, createContext as _r, useReducer as Tr, useLayoutEffect as Dn, useEffect as he, useRef as Rn } from "react";
import * as Cr from "react-dom";
var _t = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function kr() {
  if (en)
    return Ke;
  en = 1;
  var e = Sn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, l) {
    var d, p = {}, h = null, f = null;
    l !== void 0 && (h = "" + l), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (f = u.ref);
    for (d in u)
      r.call(u, d) && !a.hasOwnProperty(d) && (p[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        p[d] === void 0 && (p[d] = u[d]);
    return { $$typeof: t, type: c, key: h, ref: f, props: p, _owner: o.current };
  }
  return Ke.Fragment = n, Ke.jsx = s, Ke.jsxs = s, Ke;
}
var ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Or() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Sn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function T(i) {
      if (i === null || typeof i != "object")
        return null;
      var v = y && i[y] || i[g];
      return typeof v == "function" ? v : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(i) {
      {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
          w[O - 1] = arguments[O];
        I("error", i, w);
      }
    }
    function I(i, v, w) {
      {
        var O = E.ReactDebugCurrentFrame, H = O.getStackAddendum();
        H !== "" && (v += "%s", w = w.concat([H]));
        var z = w.map(function(V) {
          return String(V);
        });
        z.unshift("Warning: " + v), Function.prototype.apply.call(console[i], console, z);
      }
    }
    var C = !1, S = !1, M = !1, N = !1, A = !1, j;
    j = Symbol.for("react.module.reference");
    function K(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === a || A || i === o || i === l || i === d || N || i === f || C || S || M || typeof i == "object" && i !== null && (i.$$typeof === h || i.$$typeof === p || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === j || i.getModuleId !== void 0));
    }
    function k(i, v, w) {
      var O = i.displayName;
      if (O)
        return O;
      var H = v.displayName || v.name || "";
      return H !== "" ? w + "(" + H + ")" : w;
    }
    function J(i) {
      return i.displayName || "Context";
    }
    function q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
        case d:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var v = i;
            return J(v) + ".Consumer";
          case s:
            var w = i;
            return J(w._context) + ".Provider";
          case u:
            return k(i, i.render, "ForwardRef");
          case p:
            var O = i.displayName || null;
            return O !== null ? O : q(i.type) || "Memo";
          case h: {
            var H = i, z = H._payload, V = H._init;
            try {
              return q(V(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, _ = 0, P, $, D, ne, we, pe, Y;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function R() {
      {
        if (_ === 0) {
          P = console.log, $ = console.info, D = console.warn, ne = console.error, we = console.group, pe = console.groupCollapsed, Y = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: W,
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
        _++;
      }
    }
    function B() {
      {
        if (_--, _ === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, i, {
              value: P
            }),
            info: L({}, i, {
              value: $
            }),
            warn: L({}, i, {
              value: D
            }),
            error: L({}, i, {
              value: ne
            }),
            group: L({}, i, {
              value: we
            }),
            groupCollapsed: L({}, i, {
              value: pe
            }),
            groupEnd: L({}, i, {
              value: Y
            })
          });
        }
        _ < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = E.ReactCurrentDispatcher, ee;
    function re(i, v, w) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (H) {
            var O = H.stack.trim().match(/\n( *(at )?)/);
            ee = O && O[1] || "";
          }
        return `
` + ee + i;
      }
    }
    var ie = !1, xe;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new Qe();
    }
    function $t(i, v) {
      if (!i || ie)
        return "";
      {
        var w = xe.get(i);
        if (w !== void 0)
          return w;
      }
      var O;
      ie = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = G.current, G.current = null, R();
      try {
        if (v) {
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
            } catch (ge) {
              O = ge;
            }
            Reflect.construct(i, [], V);
          } else {
            try {
              V.call();
            } catch (ge) {
              O = ge;
            }
            i.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            O = ge;
          }
          i();
        }
      } catch (ge) {
        if (ge && O && typeof ge.stack == "string") {
          for (var F = ge.stack.split(`
`), ae = O.stack.split(`
`), X = F.length - 1, Z = ae.length - 1; X >= 1 && Z >= 0 && F[X] !== ae[Z]; )
            Z--;
          for (; X >= 1 && Z >= 0; X--, Z--)
            if (F[X] !== ae[Z]) {
              if (X !== 1 || Z !== 1)
                do
                  if (X--, Z--, Z < 0 || F[X] !== ae[Z]) {
                    var fe = `
` + F[X].replace(" at new ", " at ");
                    return i.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", i.displayName)), typeof i == "function" && xe.set(i, fe), fe;
                  }
                while (X >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        ie = !1, G.current = z, B(), Error.prepareStackTrace = H;
      }
      var Le = i ? i.displayName || i.name : "", Qt = Le ? re(Le) : "";
      return typeof i == "function" && xe.set(i, Qt), Qt;
    }
    function nr(i, v, w) {
      return $t(i, !1);
    }
    function rr(i) {
      var v = i.prototype;
      return !!(v && v.isReactComponent);
    }
    function et(i, v, w) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return $t(i, rr(i));
      if (typeof i == "string")
        return re(i);
      switch (i) {
        case l:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return nr(i.render);
          case p:
            return et(i.type, v, w);
          case h: {
            var O = i, H = O._payload, z = O._init;
            try {
              return et(z(H), v, w);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, Yt = {}, Wt = E.ReactDebugCurrentFrame;
    function nt(i) {
      if (i) {
        var v = i._owner, w = et(i.type, i._source, v ? v.type : null);
        Wt.setExtraStackFrame(w);
      } else
        Wt.setExtraStackFrame(null);
    }
    function or(i, v, w, O, H) {
      {
        var z = Function.call.bind(tt);
        for (var V in i)
          if (z(i, V)) {
            var F = void 0;
            try {
              if (typeof i[V] != "function") {
                var ae = Error((O || "React class") + ": " + w + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              F = i[V](v, V, O, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              F = X;
            }
            F && !(F instanceof Error) && (nt(H), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", w, V, typeof F), nt(null)), F instanceof Error && !(F.message in Yt) && (Yt[F.message] = !0, nt(H), m("Failed %s type: %s", w, F.message), nt(null));
          }
      }
    }
    var ar = Array.isArray;
    function vt(i) {
      return ar(i);
    }
    function sr(i) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, w = v && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return w;
      }
    }
    function ir(i) {
      try {
        return Vt(i), !1;
      } catch {
        return !0;
      }
    }
    function Vt(i) {
      return "" + i;
    }
    function Ht(i) {
      if (ir(i))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(i)), Vt(i);
    }
    var Ue = E.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ut, Kt, yt;
    yt = {};
    function lr(i) {
      if (tt.call(i, "ref")) {
        var v = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function ur(i) {
      if (tt.call(i, "key")) {
        var v = Object.getOwnPropertyDescriptor(i, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function dr(i, v) {
      if (typeof i.ref == "string" && Ue.current && v && Ue.current.stateNode !== v) {
        var w = q(Ue.current.type);
        yt[w] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Ue.current.type), i.ref), yt[w] = !0);
      }
    }
    function fr(i, v) {
      {
        var w = function() {
          Ut || (Ut = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function pr(i, v) {
      {
        var w = function() {
          Kt || (Kt = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var hr = function(i, v, w, O, H, z, V) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: v,
        ref: w,
        props: V,
        // Record the component responsible for creating this element.
        _owner: z
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
        value: O
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function mr(i, v, w, O, H) {
      {
        var z, V = {}, F = null, ae = null;
        w !== void 0 && (Ht(w), F = "" + w), ur(v) && (Ht(v.key), F = "" + v.key), lr(v) && (ae = v.ref, dr(v, H));
        for (z in v)
          tt.call(v, z) && !cr.hasOwnProperty(z) && (V[z] = v[z]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for (z in X)
            V[z] === void 0 && (V[z] = X[z]);
        }
        if (F || ae) {
          var Z = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && fr(V, Z), ae && pr(V, Z);
        }
        return hr(i, F, ae, H, O, Ue.current, V);
      }
    }
    var gt = E.ReactCurrentOwner, zt = E.ReactDebugCurrentFrame;
    function Ie(i) {
      if (i) {
        var v = i._owner, w = et(i.type, i._source, v ? v.type : null);
        zt.setExtraStackFrame(w);
      } else
        zt.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function Et(i) {
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
    function vr(i) {
      {
        if (i !== void 0) {
          var v = i.fileName.replace(/^.*[\\\/]/, ""), w = i.lineNumber;
          return `

Check your code at ` + v + ":" + w + ".";
        }
        return "";
      }
    }
    var Gt = {};
    function yr(i) {
      {
        var v = qt();
        if (!v) {
          var w = typeof i == "string" ? i : i.displayName || i.name;
          w && (v = `

Check the top-level render call using <` + w + ">.");
        }
        return v;
      }
    }
    function Xt(i, v) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var w = yr(v);
        if (Gt[w])
          return;
        Gt[w] = !0;
        var O = "";
        i && i._owner && i._owner !== gt.current && (O = " It was passed a child from " + q(i._owner.type) + "."), Ie(i), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, O), Ie(null);
      }
    }
    function Jt(i, v) {
      {
        if (typeof i != "object")
          return;
        if (vt(i))
          for (var w = 0; w < i.length; w++) {
            var O = i[w];
            Et(O) && Xt(O, v);
          }
        else if (Et(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = T(i);
          if (typeof H == "function" && H !== i.entries)
            for (var z = H.call(i), V; !(V = z.next()).done; )
              Et(V.value) && Xt(V.value, v);
        }
      }
    }
    function gr(i) {
      {
        var v = i.type;
        if (v == null || typeof v == "string")
          return;
        var w;
        if (typeof v == "function")
          w = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === p))
          w = v.propTypes;
        else
          return;
        if (w) {
          var O = q(v);
          or(w, i.props, "prop", O, i);
        } else if (v.PropTypes !== void 0 && !bt) {
          bt = !0;
          var H = q(v);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(i) {
      {
        for (var v = Object.keys(i.props), w = 0; w < v.length; w++) {
          var O = v[w];
          if (O !== "children" && O !== "key") {
            Ie(i), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Ie(null);
            break;
          }
        }
        i.ref !== null && (Ie(i), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function Zt(i, v, w, O, H, z) {
      {
        var V = K(i);
        if (!V) {
          var F = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = vr(H);
          ae ? F += ae : F += qt();
          var X;
          i === null ? X = "null" : vt(i) ? X = "array" : i !== void 0 && i.$$typeof === t ? (X = "<" + (q(i.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, F);
        }
        var Z = mr(i, v, w, H, z);
        if (Z == null)
          return Z;
        if (V) {
          var fe = v.children;
          if (fe !== void 0)
            if (O)
              if (vt(fe)) {
                for (var Le = 0; Le < fe.length; Le++)
                  Jt(fe[Le], i);
                Object.freeze && Object.freeze(fe);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(fe, i);
        }
        return i === r ? br(Z) : gr(Z), Z;
      }
    }
    function Er(i, v, w) {
      return Zt(i, v, w, !0);
    }
    function wr(i, v, w) {
      return Zt(i, v, w, !1);
    }
    var xr = wr, Sr = Er;
    ze.Fragment = r, ze.jsx = xr, ze.jsxs = Sr;
  }()), ze;
}
process.env.NODE_ENV === "production" ? _t.exports = kr() : _t.exports = Or();
var x = _t.exports;
const He = () => ({ omitKeys: (o, a) => Object.entries(a).reduce((s, [c, u]) => o.includes(c) ? { ...s } : { ...s, [c]: u }, {}), getObject: (o, a, s = null) => {
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
  const { state: e, dispatch: t } = Dr(Nn);
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
), _n = (
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
        var d = this.daysInBsMonth(a, s);
        c = d - (l.getDate() - o) + 1;
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
), nn = function(e) {
  return new _n().setDate(e, "BS").toAD();
}, De = function(e) {
  return new _n().setDate(e, "AD").toBS();
}, it = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(it || {}), ct = /* @__PURE__ */ ((e) => (e.ENGLISH = "en", e.NEPALI = "ne", e))(ct || {}), Tt = /* @__PURE__ */ ((e) => (e.BS = "bs", e.AD = "ad", e))(Tt || {}), U = /* @__PURE__ */ ((e) => (e.SET_CALENDAR_OPEN = "SET_CALENDAR_OPEN", e.SET_CLASSES = "SET_CLASSES", e.SET_THEME = "SET_THEME", e.SET_EVENTS = "SET_EVENTS", e.SET_MODIFIERS = "SET_MODIFIERS", e.SET_LOCALE = "SET_LOCALE", e.SET_COLORS = "SET_COLORS", e.SET_SEPARATOR = "SET_SEPARATOR", e.SET_CLOSE_ON_SELECT = "SET_CLOSE_ON_SELECT", e.SET_OPTIONS = "SET_OPTIONS", e.SET_CALENDAR_DATE = "SET_CALENDAR_DATE", e.SET_SELECTED_DATE = "SET_SELECTED_DATE", e))(U || {});
const Nr = () => {
  const { state: e } = te(), t = (l, d) => {
    const p = (d ?? e.options.dateSeparator).replace(/[[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&"), h = `^[0-9]{4}${p}(0?[1-9]|1[0-2])${p}(0?[1-9]|[1-2][0-9]|3[0-2])$`, f = new RegExp(h);
    if (!l.match(f))
      throw new TypeError(`${l} is invalid date format.`);
  }, n = (l) => {
    const d = e.calendarData.minBsYear, p = e.calendarData.maxBsYear;
    if (l < d || l > p)
      throw new RangeError(`Date between ${d} BS to ${p} BS is only supported.`);
  }, r = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("BS month should be in range of 1 to 12");
  }, o = (l) => {
    if (l < 1 || l > 32)
      throw new RangeError("BS day should be in range of 1 to 32");
  }, a = (l) => {
    const d = e.calendarData.minBsYear, p = e.calendarData.maxBsYear, h = d - 57, f = p - 57;
    if (l < h || l > f)
      throw new RangeError(`Date between ${h} AD (${d} BS) to ${f} AD (${p} BS) is only supported.`);
  }, s = (l) => {
    if (l < 1 || l > 12)
      throw new RangeError("AD month should be in range of 1 to 12");
  }, c = (l) => {
    if (l < 1 || l > 31)
      throw new RangeError("AD day should be in range of 1 to 31");
  };
  return {
    validateInputDate: t,
    validateDateObject: (l, d = Tt.BS) => {
      const { year: p, month: h, day: f } = l;
      if (d === Tt.BS) {
        n(p), r(h), o(f);
        return;
      }
      a(p), s(h), c(f);
    },
    validateBsYear: n,
    validateAdYear: a,
    validateBsMonth: r,
    validateAdMonth: s,
    validateBsDay: o,
    validateAdDay: c
  };
}, Me = () => {
  const e = Nr(), t = He(), { state: n } = te(), r = (c, u) => {
    e.validateInputDate(c, u);
    const [l, d, p] = c.split(u ?? n.options.dateSeparator);
    return {
      year: parseInt(l),
      month: parseInt(d),
      day: parseInt(p)
    };
  }, o = (c, u) => {
    const l = u ?? n.options.dateSeparator;
    return `${c.year}${l}${t.zeroPad(c.month)}${l}${t.zeroPad(c.day)}`;
  }, a = (c, u) => {
    e.validateBsYear(c), e.validateBsMonth(u);
    let l = 0;
    const d = c + 1 - n.calendarData.minBsYear;
    return n.calendarData.bsMonthCalculatedData[u - 1].reduce((h, f, y) => {
      if (f === 0 || h !== 0)
        return h;
      const g = y % 2;
      return l += f, d > l ? h : c === 2085 && u === 5 || c === 2088 && u === 5 ? n.calendarData.bsMonthMaxDays[u - 1][g] - 2 : n.calendarData.bsMonthMaxDays[u - 1][g];
    }, 0);
  };
  return {
    splitDate: r,
    stitchDate: o,
    parseBsDate: (c, u) => {
      const { year: l, month: d, day: p } = r(c, u);
      e.validateDateObject({ year: l, month: d, day: p });
      const h = o({ year: l, month: d, day: 1 }), f = nn(h), y = new Date(f), g = a(l, d), T = new Date(nn(c));
      return {
        bsDay: p,
        bsMonth: d,
        bsYear: l,
        weekDay: T.getDay(),
        adDate: T,
        firstAdDayInBsMonth: y,
        numberOfDaysInBsMonth: g,
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
), Ar = function(e) {
  return new Tn().setNumber(e).toNepali();
}, Cn = function(e) {
  return new Tn().setNumber(e).toEnglish();
};
const be = () => {
  const { state: e } = te(), { getObject: t } = He();
  return {
    trans: (n, r) => t(no[r ?? e.locale.calendar], n, n),
    numberTrans: (n, r) => ct.ENGLISH === (r ?? e.locale.calendar) ? Cn(n) : Ar(n)
  };
}, Nt = (e) => {
  const { children: t, className: n, type: r = "button", isDisabled: o, ...a } = e, { state: s } = te();
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      className: `
          ${s.options.classNames.actionBtn ?? `
            ndp__action_btn
            ndp-bg-white dark:ndp-bg-slate-800
            hover:ndp-bg-gray-100 dark:hover:ndp-bg-gray-700
            ndp-border-gray-300 dark:ndp-border-gray-600
            dark:hover:ndp-border-gray-600
            focus:ndp-outline-none focus:ndp-ring-0
            ndp-text-sm ndp-px-3 ndp-py-1.5 hover-transition
            ndp-flex ndp-items-center
          `}
          ${e.isDisabled && (s.options.classNames.actionBtnDisabled ?? `
            ndp__action_btn-disabled
            ndp-cursor-not-allowed ndp-select-none
          `)}
          ${n ?? ""}
        `,
      disabled: o,
      type: r,
      ...a,
      children: t
    }
  );
}, kn = (e) => {
  const { children: t, className: n, type: r = "button", ...o } = e, { state: a } = te();
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      className: `
              ${a.options.classNames.navBtn ?? `
                ndp__nav_button
                ndp-flex ndp-justify-center ndp-items-center hover-transition
                ndp-border-0 ndp-h-10 ndp-w-10 ndp-rounded-full
                hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
              `}
              ${n ?? ""}
            `,
      type: r,
      ...o,
      children: t
    }
  );
}, Pr = () => {
  const { trans: e } = be(), { state: t, setData: n } = te(), r = ye(() => {
    t.events.onChange(""), t.options.closeOnSelect && n({ type: U.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [t.events.onChange, t.options.closeOnSelect]);
  return t.date.selected ? /* @__PURE__ */ x.jsxs(
    Nt,
    {
      className: t.options.classNames.clearBtn ?? `
                ndp__clear_btn ndp-font-medium ndp-border hover:ndp-text-red-500
               `,
      title: e("labels.clear"),
      onClick: r,
      onKeyDown: r,
      children: [
        /* @__PURE__ */ x.jsx(qr, { className: t.options.classNames.clearBtnIcon ?? "ndp__today_btn-icon ndp-w-4 ndp-h-4" }),
        /* @__PURE__ */ x.jsx("span", { className: t.options.classNames.clearBtnText ?? "ndp__today_btn-text ndp-ml-2", children: e("labels.clear") })
      ]
    }
  ) : null;
}, Mr = () => {
  const { numberTrans: e } = be(), { range: t } = He(), { state: n, setData: r } = te(), o = Me(), a = oe(() => n.date.calendar ?? o.parseBsDate(De(/* @__PURE__ */ new Date())), [n.date.calendar]), s = oe(() => n.date.selected, [n.date.selected]), c = oe(() => Math.ceil((a.firstAdDayInBsMonth.getDay() + a.numberOfDaysInBsMonth) / 7) - 1, [a]), u = oe(() => a.bsMonth - 1 === 0 ? 12 : a.bsMonth - 1, [a]), l = oe(() => u === 12 ? a.bsYear - 1 : a.bsYear, [u, a]), d = oe(() => l >= n.calendarData.minBsYear ? o.getNumberOfDaysInBSMonth(l, u) : 30, [l, u]), p = ye((f, y) => {
    let g = f * 7 + y - a.firstAdDayInBsMonth.getDay();
    const T = a.bsMonth, E = a.bsYear;
    let m = !0;
    g <= 0 ? (g = d + g, m = !1) : g > a.numberOfDaysInBsMonth && (g -= a.numberOfDaysInBsMonth, m = !1);
    const I = o.splitDate(De(/* @__PURE__ */ new Date())), C = m ? I.day === g && I.month === T && I.year === E : !1, S = m ? (s == null ? void 0 : s.bsDay) === g && s.bsMonth === T && s.bsYear === E : !1, M = o.stitchDate({ year: E, month: T, day: g });
    return { day: g, month: T, year: E, weekDay: y, isCurrentMonth: m, isToday: C, isSelected: S, dateString: M };
  }, [a, s, d]), h = ye((f) => {
    if (!f.isCurrentMonth || n.modifiers.isDisabled(f))
      return;
    const y = o.stitchDate({
      year: f.year,
      month: f.month,
      day: f.day
    });
    n.events.onSelect(f), n.events.onChange(e(y, n.locale.value)), n.options.closeOnSelect && r({ type: U.SET_CALENDAR_OPEN, isOpen: !1 });
  }, [n.events.onSelect, n.events.onChange, n.modifiers.isDisabled, n.options.closeOnSelect, n.locale.value]);
  return /* @__PURE__ */ x.jsx("tbody", { children: t(0, c).map((f) => /* @__PURE__ */ x.jsx("tr", { className: n.options.classNames.dayPickerTr ?? "ndp__day_picker-tr ndp-border-0", children: t(1, 7).map((y) => {
    const g = p(f, y);
    return /* @__PURE__ */ x.jsx(
      "td",
      {
        className: n.options.classNames.dayPickerTd ?? "ndp__day_picker-td ndp-border-0",
        title: e(g.day),
        children: /* @__PURE__ */ x.jsxs(
          "button",
          {
            className: `
                  ${n.options.classNames.dayPickerDay ?? `
                    ndp__day_picker-day
                    ndp-rounded-full ndp-h-9 ndp-w-9
                    ndp-relative hover-transition
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-900
                  `}
                  ${g.isSelected && (n.options.classNames.dayPickerDaySelected ?? `
                    ndp__day_picker-day-selected
                    ndp-bg-primary ndp-text-secondary
                    hover:ndp-bg-primary hover:ndp-text-secondary
                    dark:hover:ndp-bg-primary dark:hover:ndp-text-secondary
                    hover:ndp-opacity-80
                  `)}

                  ${!g.isCurrentMonth && (n.options.classNames.dayPickerDayOtherMonth ?? `
                    ndp__day_picker-day-other_month
                    ndp-text-gray-200 dark:ndp-text-slate-700
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `)}

                  ${!g.isSelected && g.isCurrentMonth && n.modifiers.isHoliday(g) && (n.options.classNames.dayPickerDayHoliday ?? "ndp__day_picker-day-holiday ndp-text-red-500")}

                  ${!g.isSelected && g.isCurrentMonth && !n.modifiers.isHoliday(g) && n.modifiers.isWeekend(g.weekDay) && (n.options.classNames.dayPickerDayWeekend ?? "ndp__day_picker-day-weekend ndp-text-red-500")}

                  ${n.modifiers.isDisabled(g) && (n.options.classNames.dayPickerDayDisabled ?? `
                    ndp__day_picker-day-disabled
                    ndp-opacity-30
                    hover:ndp-bg-transparent dark:hover:ndp-bg-transparent
                    ndp-cursor-not-allowed ndp-select-none
                  `)}
                `,
            onClick: () => {
              h(g);
            },
            onKeyDown: () => {
              h(g);
            },
            children: [
              e(g.day),
              g.isToday && /* @__PURE__ */ x.jsx("span", { className: n.options.classNames.dayPickerToday ?? `
                      ndp__day_picker-today
                      ndp-inline-block ndp-content-[""] ndp-w-1 ndp-h-1 ndp-bg-primary ndp-rounded-full
                      ndp-absolute ndp-left-[50%] ndp-bottom-1 -ndp-translate-x-[50%]
                    ` })
            ]
          }
        )
      },
      y
    );
  }) }, f)) });
}, On = ({ options: e, onSelect: t, value: n, title: r, className: o, dropdownClass: a }) => {
  const { state: s } = te(), [c, u] = Rr(!1), l = oe(() => e.find((h) => h.value === n) ?? {}, [n]), d = ye(() => {
    u((h) => !h);
  }, []), p = ye((h) => {
    u(!1), t(h.value);
  }, [t]);
  return /* @__PURE__ */ x.jsxs("div", { className: s.options.classNames.dropDownWrapper ?? `
      ndp__dropdown-wrapper ndp-relative
    `, children: [
    /* @__PURE__ */ x.jsx(
      Nt,
      {
        onClick: d,
        onKeyDown: d,
        className: o,
        title: r,
        children: l.label
      }
    ),
    c && /* @__PURE__ */ x.jsx("ul", { className: `
          ${s.options.classNames.dropDown ?? `
            ndp__dropdown
            ndp-max-h-[12rem] ndp-shadow ndp-overflow-y-auto no-scrollbar
            ndp-absolute ndp-w-full
            ndp-bg-white dark:ndp-bg-slate-900
            ndp-top-0 ndp-z-10
            ndp-border ndp-border-gray-300 dark:ndp-border-gray-600
          `}
          ${a ?? ""}
        `, children: e.map((h) => /* @__PURE__ */ x.jsx(
      "li",
      {
        onClick: () => {
          p(h);
        },
        onKeyDown: () => {
          p(h);
        },
        role: "button",
        className: `
                  ${s.options.classNames.dropDownItem ?? `
                    ndp__dropdown-item
                    ndp-px-3 ndp-py-1.5 ndp-text-sm hover-transition
                    hover:ndp-bg-gray-200 dark:hover:ndp-bg-slate-800
                  `}
                  ${h.value === n && (s.options.classNames.dropDownItemActive ?? `
                    ndp__dropdown-item-active
                    ndp-bg-primary ndp-text-secondary
                  `)}
                `,
        children: h.label
      },
      h.value
    )) })
  ] });
}, Ir = [
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
], Lr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Br = () => {
  var c;
  const { trans: e } = be(), { state: t, setData: n } = te(), r = Me(), o = oe(() => t.date.calendar ?? r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = oe(() => Ir.map((u, l) => ({
    label: e(`months.${u}`),
    value: l
  })), [t.locale.calendar]), s = ye((u) => {
    const l = r.stitchDate({
      year: o.bsYear,
      month: u + 1,
      day: 1
    });
    n({ type: U.SET_CALENDAR_DATE, date: r.parseBsDate(l) });
  }, [o]);
  return /* @__PURE__ */ x.jsx(
    On,
    {
      options: a,
      value: (((c = t.date.calendar) == null ? void 0 : c.bsMonth) ?? 1) - 1,
      onSelect: s,
      className: t.options.classNames.monthPicker ?? `
                ndp__month_picker ndp-border ndp-rounded-r-sm ndp-w-20 ndp-justify-center
              `,
      dropdownClass: t.options.classNames.monthPickerDropDown ?? `
                ndp__month_picker-dropdown ndp-rounded-r-sm ndp-rounded-bl-sm
              `,
      title: e("labels.select-month")
    }
  );
}, jr = () => {
  const { trans: e } = be(), { state: t, setData: n } = te(), r = Me(), o = oe(() => t.date.calendar ?? r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ye(() => {
    let s = o.bsYear, c = o.bsMonth + 1;
    if (c > 12 && (c = 1, s++), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: U.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ x.jsx(
    kn,
    {
      title: e("labels.next"),
      onClick: a,
      onKeyDown: a,
      className: t.options.classNames.nextBtn ?? "ndp__nav_button-next",
      children: /* @__PURE__ */ x.jsx(Xr, { className: t.options.classNames.navBtnIcon ?? `
        ndp__nav_btn_icon ndp-w-5 ndp-h-5
      ` })
    }
  );
}, Fr = () => {
  const { trans: e } = be(), { state: t, setData: n } = te(), r = Me(), o = oe(() => t.date.calendar ?? r.parseBsDate(De(/* @__PURE__ */ new Date())), [t.date.calendar]), a = ye(() => {
    let s = o.bsYear, c = o.bsMonth - 1;
    if (c === 0 && (c = 12, s--), s < t.calendarData.minBsYear || s > t.calendarData.maxBsYear)
      return;
    const u = r.stitchDate({ year: s, month: c, day: 1 });
    n({ type: U.SET_CALENDAR_DATE, date: r.parseBsDate(u) });
  }, [o]);
  return /* @__PURE__ */ x.jsx(
    kn,
    {
      title: e("labels.previous"),
      onClick: a,
      onKeyDown: a,
      className: t.options.classNames.previousBtn ?? "ndp__nav_button-previous",
      children: /* @__PURE__ */ x.jsx(Gr, { className: t.options.classNames.navBtnIcon ?? "ndp__nav_btn_icon ndp-w-5 ndp-h-5" })
    }
  );
}, $r = () => {
  const { trans: e, numberTrans: t } = be(), n = Me(), { zeroPad: r } = He(), { state: o, setData: a } = te(), s = oe(() => n.parseBsDate(De(/* @__PURE__ */ new Date())), []), c = oe(() => ({
    day: s.bsDay,
    month: s.bsMonth,
    year: s.bsYear,
    isToday: !0,
    isCurrentMonth: !0,
    isSelected: !0,
    dateString: s.dateString,
    weekDay: s.weekDay
  }), [s]), u = ye(() => {
    o.modifiers.isDisabled(c) || (o.events.onSelect(c), o.events.onChange(t(s.dateString, o.locale.value)), o.options.closeOnSelect && a({ type: U.SET_CALENDAR_OPEN, isOpen: !1 }));
  }, [s, c, o.events.onSelect, o.events.onChange, o.modifiers.isDisabled, o.options.closeOnSelect, o.locale.value]);
  return /* @__PURE__ */ x.jsxs(
    Nt,
    {
      className: o.options.classNames.todayBtn ?? `
                ndp__today_btn ndp-font-medium ndp-border hover:ndp-text-primary ndp-group
              `,
      isDisabled: o.modifiers.isDisabled(c),
      title: e("labels.today"),
      onClick: u,
      onKeyDown: u,
      children: [
        /* @__PURE__ */ x.jsx(Jr, { date: t(r(s.bsDay)) }),
        /* @__PURE__ */ x.jsx("span", { className: o.options.classNames.todayBtnText ?? "ndp__today_btn-text ndp-ml-2", children: e("labels.today") })
      ]
    }
  );
}, Yr = () => {
  const { trans: e } = be(), { state: t } = te(), n = oe(() => Lr.map((r, o) => ({
    label: e(`weeks.${r}`),
    value: o
  })), [t.locale.calendar]);
  return /* @__PURE__ */ x.jsx("thead", { children: /* @__PURE__ */ x.jsx("tr", { className: t.options.classNames.weekDaysTr ?? "ndp__weekdays-tr ndp-border-0", children: n.map((r) => /* @__PURE__ */ x.jsx(
    "td",
    {
      className: `
                ${t.options.classNames.weekDaysTd ?? "ndp__weekdays-td ndp-border-0 ndp-h-10 ndp-w-10"}

                ${t.modifiers.isWeekend(r.value + 1) && (t.options.classNames.weekDaysTdWeekend ?? `
                  ndp__weekdays-td-weekend ndp-text-red-500
                `)}
              `,
      title: r.label,
      children: r.label
    },
    r.value
  )) }) });
}, Wr = () => {
  var l;
  const { state: e, setData: t } = te(), { numberTrans: n, trans: r } = be(), { range: o } = He(), a = Me(), s = oe(() => e.date.calendar ?? a.parseBsDate(De(/* @__PURE__ */ new Date())), [e.date.calendar]), c = oe(() => o(e.calendarData.minBsYear, e.calendarData.maxBsYear).reverse().map((d) => ({
    label: n(d),
    value: d
  })), [e.locale.calendar]), u = ye((d) => {
    const p = a.stitchDate({ year: d, month: s.bsMonth, day: 1 });
    t({ type: U.SET_CALENDAR_DATE, date: a.parseBsDate(p) });
  }, [s]);
  return /* @__PURE__ */ x.jsx(
    On,
    {
      options: c,
      value: ((l = e.date.calendar) == null ? void 0 : l.bsYear) ?? 0,
      onSelect: u,
      className: e.options.classNames.yearPicker ?? `
                ndp__year_picker ndp-border-y ndp-border-l ndp-rounded-l-sm
              `,
      dropdownClass: e.options.classNames.yearPickerDropDown ?? `
                ndp__year_picker-dropdown ndp-rounded-l-sm ndp-rounded-br-sm
              `,
      title: r("labels.select-year")
    }
  );
}, Vr = () => {
  const { state: e } = te();
  return /* @__PURE__ */ x.jsxs("div", { className: e.options.classNames.calendar ?? `
      ndp__calendar
      ndp-bg-white dark:ndp-bg-slate-800
      ndp-rounded ndp-shadow ndp-box-border
      ndp-text-slate-700 dark:ndp-text-white/80 ndp-text-sm ndp-font-normal
      ndp-leading-tight -ndp-tracking-tight
      ndp-p-4
    `, children: [
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: e.options.classNames.calendarHeader ?? `
          ndp__calendar-header ndp-flex ndp-items-center ndp-justify-between
        `,
        children: [
          /* @__PURE__ */ x.jsx(Fr, {}),
          /* @__PURE__ */ x.jsxs("div", { className: e.options.classNames.yearMonthPicker ?? `
          ndp__year_month_picker ndp-flex
        `, children: [
            /* @__PURE__ */ x.jsx(Wr, {}),
            /* @__PURE__ */ x.jsx(Br, {})
          ] }),
          /* @__PURE__ */ x.jsx(jr, {})
        ]
      }
    ),
    /* @__PURE__ */ x.jsxs("table", { className: e.options.classNames.calendarBody ?? `
        ndp__calendar-body ndp-text-center ndp-w-full ndp-border-0
      `, children: [
      /* @__PURE__ */ x.jsx(Yr, {}),
      /* @__PURE__ */ x.jsx(Mr, {})
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: e.options.classNames.calendarFooter ?? `
        ndp__calendar-footer
        ndp-flex ndp-justify-between ndp-border-t ndp-border-gray-100 dark:ndp-border-gray-700 ndp-pt-2
      `, children: [
      /* @__PURE__ */ x.jsx($r, {}),
      /* @__PURE__ */ x.jsx(Pr, {})
    ] })
  ] });
}, Hr = [
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
], At = {
  isCalendarOpen: !1,
  events: {
    onChange: (e) => e,
    onSelect: (e) => e
  },
  modifiers: {
    isHoliday: () => !1,
    isDisabled: () => !1,
    isWeekend: (e) => e === 7
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
    bsMonthMaxDays: Hr,
    bsMonthCalculatedData: Ur
  },
  date: {
    calendar: void 0,
    selected: void 0
  }
}, Kr = (e = At, t) => {
  switch (t.type) {
    case U.SET_CALENDAR_OPEN:
      return { ...e, isCalendarOpen: t.isOpen };
    case U.SET_CLASSES:
      return {
        ...e,
        options: { ...e.options, classNames: { ...e.options.classNames, ...t.classNames } }
      };
    case U.SET_THEME:
      return { ...e, options: { ...e.options, theme: t.theme } };
    case U.SET_EVENTS:
      return { ...e, events: t.events };
    case U.SET_MODIFIERS:
      return { ...e, modifiers: t.modifiers };
    case U.SET_LOCALE:
      return { ...e, locale: { ...e.locale, ...t.locale } };
    case U.SET_COLORS:
      return { ...e, options: { ...e.options, colors: { ...e.options.colors, ...t.colors } } };
    case U.SET_SEPARATOR:
      return { ...e, options: { ...e.options, dateSeparator: t.separator } };
    case U.SET_CLOSE_ON_SELECT:
      return { ...e, options: { ...e.options, closeOnSelect: t.closeOnSelect } };
    case U.SET_OPTIONS:
      return { ...e, options: t.options };
    case U.SET_CALENDAR_DATE:
      return { ...e, date: { ...e.date, calendar: t.date } };
    case U.SET_SELECTED_DATE:
      return { ...e, date: { ...e.date, selected: t.date } };
    default:
      return e;
  }
}, Nn = _r({
  state: At,
  dispatch: () => null
}), zr = ({ children: e }) => {
  const [t, n] = Tr(Kr, At);
  return /* @__PURE__ */ x.jsx(Nn.Provider, { value: { state: t, dispatch: n }, children: e });
}, qr = ({ className: e }) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e ?? "",
    children: /* @__PURE__ */ x.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  }
), Gr = ({ className: e }) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e ?? "",
    children: /* @__PURE__ */ x.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })
  }
), Xr = ({ className: e }) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: e ?? "",
    children: /* @__PURE__ */ x.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })
  }
), Jr = ({ date: e, className: t }) => {
  const { state: n } = te();
  return /* @__PURE__ */ x.jsx("span", { className: `
      ${n.options.classNames.todayBtnIcon ?? `
        ndp__today_btn-icon
        ndp-border ndp-border-gray-200 dark:ndp-border-slate-700
        ndp-px-1 ndp-py-0.5 ndp-text-xs
        ndp-text-gray-400 ndp-inset-2 ndp-rounded-full
        group-hover:ndp-text-primary group-hover:ndp-border-primary group-hover:ndp-opacity-50
      `}
      ${t ?? ""}
    `, children: e });
}, Zr = [
  "dark",
  "value",
  "className",
  "onChange",
  "onSelect",
  "options",
  "isHoliday",
  "isDisabled",
  "isWeekend"
], Qr = (e) => {
  var a;
  const { state: t } = te(), { numberTrans: n } = be(), { omitKeys: r } = He(), o = r([...Zr, "type", "readOnly"], e);
  return /* @__PURE__ */ x.jsx(
    "input",
    {
      type: "text",
      className: t.options.classNames.input ?? `
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
      value: n(((a = t.date.selected) == null ? void 0 : a.dateString) ?? ""),
      ...o
    }
  );
}, eo = {
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
}, to = {
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
}, no = {
  en: eo,
  ne: to
};
function Re(e) {
  return An(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ee(e) {
  var t;
  return (t = (An(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function An(e) {
  return e instanceof Node || e instanceof ue(e).Node;
}
function Q(e) {
  return e instanceof Element || e instanceof ue(e).Element;
}
function se(e) {
  return e instanceof HTMLElement || e instanceof ue(e).HTMLElement;
}
function Ct(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function Je(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = de(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ro(e) {
  return ["table", "td", "th"].includes(Re(e));
}
function Pt(e) {
  const t = Mt(), n = de(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function oo(e) {
  let t = Ae(e);
  for (; se(t) && !Ze(t); ) {
    if (Pt(t))
      return t;
    t = Ae(t);
  }
  return null;
}
function Mt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ze(e) {
  return ["html", "body", "#document"].includes(Re(e));
}
function de(e) {
  return ue(e).getComputedStyle(e);
}
function ht(e) {
  return Q(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ae(e) {
  if (Re(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ct(e) && e.host || // Fallback.
    Ee(e)
  );
  return Ct(t) ? t.host : t;
}
function Pn(e) {
  const t = Ae(e);
  return Ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && Je(t) ? t : Pn(t);
}
function Se(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Pn(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ue(o);
  return a ? t.concat(s, s.visualViewport || [], Je(o) ? o : [], s.frameElement && n ? Se(s.frameElement) : []) : t.concat(o, Se(o, [], n));
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
  if (n && Ct(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function ao() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function so() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function io(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Mn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function co(e) {
  return !Mn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function lo() {
  return /apple/i.test(navigator.vendor);
}
function Mn() {
  const e = /android/i;
  return e.test(ao()) || e.test(so());
}
function rn(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function uo(e) {
  return "nativeEvent" in e;
}
function fo(e) {
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
function $e(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const po = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function In(e) {
  return se(e) && e.matches(po);
}
function xt(e) {
  e.preventDefault(), e.stopPropagation();
}
const Ve = Math.min, Ne = Math.max, lt = Math.round, rt = Math.floor, _e = (e) => ({
  x: e,
  y: e
});
function ho(e, t, n) {
  return Ne(e, Ve(t, n));
}
function Ln(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function It(e) {
  return e.split("-")[0];
}
function Lt(e) {
  return e.split("-")[1];
}
function mo(e) {
  return e === "x" ? "y" : "x";
}
function Bn(e) {
  return e === "y" ? "height" : "width";
}
function Bt(e) {
  return ["top", "bottom"].includes(It(e)) ? "y" : "x";
}
function jn(e) {
  return mo(Bt(e));
}
function vo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yo(e) {
  return typeof e != "number" ? vo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function on(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Bt(t), s = jn(t), c = Bn(s), u = It(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, h = r[c] / 2 - o[c] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Lt(t)) {
    case "start":
      f[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[s] += h * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const go = async (e, t, n) => {
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
    x: d,
    y: p
  } = on(l, r, u), h = r, f = {}, y = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: T,
      fn: E
    } = c[g], {
      x: m,
      y: I,
      data: C,
      reset: S
    } = await E({
      x: d,
      y: p,
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
    if (d = m ?? d, p = I ?? p, f = {
      ...f,
      [T]: {
        ...f[T],
        ...C
      }
    }, S && y <= 50) {
      y++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (l = S.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: d,
        y: p
      } = on(l, h, u)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: f
  };
}, an = (e) => ({
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
      padding: d = 0
    } = Ln(e, t) || {};
    if (l == null)
      return {};
    const p = yo(d), h = {
      x: n,
      y: r
    }, f = jn(o), y = Bn(f), g = await s.getDimensions(l), T = f === "y", E = T ? "top" : "left", m = T ? "bottom" : "right", I = T ? "clientHeight" : "clientWidth", C = a.reference[y] + a.reference[f] - h[f] - a.floating[y], S = h[f] - a.reference[f], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let N = M ? M[I] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(M))) && (N = c.floating[I] || a.floating[y]);
    const A = C / 2 - S / 2, j = N / 2 - g[y] / 2 - 1, K = Ve(p[E], j), k = Ve(p[m], j), J = K, q = N - g[y] - k, L = N / 2 - g[y] / 2 + A, _ = ho(J, L, q), P = !u.arrow && Lt(o) != null && L != _ && a.reference[y] / 2 - (L < J ? K : k) - g[y] / 2 < 0, $ = P ? L < J ? L - J : L - q : 0;
    return {
      [f]: h[f] + $,
      data: {
        [f]: _,
        centerOffset: L - _ - $,
        ...P && {
          alignmentOffset: $
        }
      },
      reset: P
    };
  }
});
async function bo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = It(n), c = Lt(n), u = Bt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && u ? -1 : 1, p = Ln(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: y
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
  return c && typeof y == "number" && (f = c === "end" ? y * -1 : y), u ? {
    x: f * d,
    y: h * l
  } : {
    x: h * l,
    y: f * d
  };
}
const Eo = function(e) {
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
function $n(e) {
  const t = de(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = se(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = lt(n) !== a || lt(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function jt(e) {
  return Q(e) ? e : e.contextElement;
}
function We(e) {
  const t = jt(e);
  if (!se(t))
    return _e(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = $n(t);
  let s = (a ? lt(n.width) : n.width) / r, c = (a ? lt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const wo = /* @__PURE__ */ _e(0);
function Yn(e) {
  const t = ue(e);
  return !Mt() || !t.visualViewport ? wo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ue(e) ? !1 : t;
}
function Pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = jt(e);
  let s = _e(1);
  t && (r ? Q(r) && (s = We(r)) : s = We(e));
  const c = xo(a, n, r) ? Yn(a) : _e(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (a) {
    const h = ue(a), f = r && Q(r) ? ue(r) : r;
    let y = h.frameElement;
    for (; y && r && f !== h; ) {
      const g = We(y), T = y.getBoundingClientRect(), E = de(y), m = T.left + (y.clientLeft + parseFloat(E.paddingLeft)) * g.x, I = T.top + (y.clientTop + parseFloat(E.paddingTop)) * g.y;
      u *= g.x, l *= g.y, d *= g.x, p *= g.y, u += m, l += I, y = ue(y).frameElement;
    }
  }
  return Fn({
    width: d,
    height: p,
    x: u,
    y: l
  });
}
function So(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = se(n), a = Ee(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = _e(1);
  const u = _e(0);
  if ((o || !o && r !== "fixed") && ((Re(n) !== "body" || Je(a)) && (s = ht(n)), se(n))) {
    const l = Pe(n);
    c = We(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + u.x,
    y: t.y * c.y - s.scrollTop * c.y + u.y
  };
}
function Do(e) {
  return Array.from(e.getClientRects());
}
function Wn(e) {
  return Pe(Ee(e)).left + ht(e).scrollLeft;
}
function Ro(e) {
  const t = Ee(e), n = ht(e), r = e.ownerDocument.body, o = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wn(e);
  const c = -n.scrollTop;
  return de(r).direction === "rtl" && (s += Ne(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function _o(e, t) {
  const n = ue(e), r = Ee(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Mt();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function To(e, t) {
  const n = Pe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = se(e) ? We(e) : _e(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function sn(e, t, n) {
  let r;
  if (t === "viewport")
    r = _o(e, n);
  else if (t === "document")
    r = Ro(Ee(e));
  else if (Q(t))
    r = To(t, n);
  else {
    const o = Yn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Fn(r);
}
function Vn(e, t) {
  const n = Ae(e);
  return n === t || !Q(n) || Ze(n) ? !1 : de(n).position === "fixed" || Vn(n, t);
}
function Co(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Se(e, [], !1).filter((c) => Q(c) && Re(c) !== "body"), o = null;
  const a = de(e).position === "fixed";
  let s = a ? Ae(e) : e;
  for (; Q(s) && !Ze(s); ) {
    const c = de(s), u = Pt(s);
    !u && c.position === "fixed" && (o = null), (a ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Je(s) && !u && Vn(e, s)) ? r = r.filter((d) => d !== s) : o = c, s = Ae(s);
  }
  return t.set(e, r), r;
}
function ko(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Co(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((l, d) => {
    const p = sn(t, d, o);
    return l.top = Ne(p.top, l.top), l.right = Ve(p.right, l.right), l.bottom = Ve(p.bottom, l.bottom), l.left = Ne(p.left, l.left), l;
  }, sn(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Oo(e) {
  return $n(e);
}
function No(e, t, n) {
  const r = se(t), o = Ee(t), a = n === "fixed", s = Pe(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = _e(0);
  if (r || !r && !a)
    if ((Re(t) !== "body" || Je(o)) && (c = ht(t)), r) {
      const l = Pe(t, !0, a, t);
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
function cn(e, t) {
  return !se(e) || de(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Hn(e, t) {
  const n = ue(e);
  if (!se(e))
    return n;
  let r = cn(e, t);
  for (; r && ro(r) && de(r).position === "static"; )
    r = cn(r, t);
  return r && (Re(r) === "html" || Re(r) === "body" && de(r).position === "static" && !Pt(r)) ? n : r || oo(e) || n;
}
const Ao = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Hn, a = this.getDimensions;
  return {
    reference: No(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Po(e) {
  return de(e).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: So,
  getDocumentElement: Ee,
  getClippingRect: ko,
  getOffsetParent: Hn,
  getElementRects: Ao,
  getClientRects: Do,
  getDimensions: Oo,
  getScale: We,
  isElement: Q,
  isRTL: Po
};
function Mo(e, t) {
  let n = null, r;
  const o = Ee(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), a();
    const {
      left: l,
      top: d,
      width: p,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !p || !h)
      return;
    const f = rt(d), y = rt(o.clientWidth - (l + p)), g = rt(o.clientHeight - (d + h)), T = rt(l), m = {
      rootMargin: -f + "px " + -y + "px " + -g + "px " + -T + "px",
      threshold: Ne(0, Ve(1, u)) || 1
    };
    let I = !0;
    function C(S) {
      const M = S[0].intersectionRatio;
      if (M !== u) {
        if (!I)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      I = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...m,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, m);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Io(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = jt(e), d = o || a ? [...l ? Se(l) : [], ...Se(t)] : [];
  d.forEach((E) => {
    o && E.addEventListener("scroll", n, {
      passive: !0
    }), a && E.addEventListener("resize", n);
  });
  const p = l && c ? Mo(l, n) : null;
  let h = -1, f = null;
  s && (f = new ResizeObserver((E) => {
    let [m] = E;
    m && m.target === l && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      f && f.observe(t);
    })), n();
  }), l && !u && f.observe(l), f.observe(t));
  let y, g = u ? Pe(e) : null;
  u && T();
  function T() {
    const E = Pe(e);
    g && (E.x !== g.x || E.y !== g.y || E.width !== g.width || E.height !== g.height) && n(), g = E, y = requestAnimationFrame(T);
  }
  return n(), () => {
    d.forEach((E) => {
      o && E.removeEventListener("scroll", n), a && E.removeEventListener("resize", n);
    }), p && p(), f && f.disconnect(), f = null, u && cancelAnimationFrame(y);
  };
}
const Lo = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Un,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return go(e, t, {
    ...o,
    platform: a
  });
}, Bo = (e) => {
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
      return r && t(r) ? r.current != null ? an({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? an({
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
function Kn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ln(e, t) {
  const n = Kn(e);
  return Math.round(t * n) / n;
}
function un(e) {
  const t = b.useRef(e);
  return st(() => {
    t.current = e;
  }), t;
}
function jo(e) {
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
  } = e, [d, p] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, f] = b.useState(r);
  ut(h, r) || f(r);
  const [y, g] = b.useState(null), [T, E] = b.useState(null), m = b.useCallback((P) => {
    P != M.current && (M.current = P, g(P));
  }, [g]), I = b.useCallback((P) => {
    P !== N.current && (N.current = P, E(P));
  }, [E]), C = a || y, S = s || T, M = b.useRef(null), N = b.useRef(null), A = b.useRef(d), j = un(u), K = un(o), k = b.useCallback(() => {
    if (!M.current || !N.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: h
    };
    K.current && (P.platform = K.current), Lo(M.current, N.current, P).then(($) => {
      const D = {
        ...$,
        isPositioned: !0
      };
      J.current && !ut(A.current, D) && (A.current = D, Cr.flushSync(() => {
        p(D);
      }));
    });
  }, [h, t, n, K]);
  st(() => {
    l === !1 && A.current.isPositioned && (A.current.isPositioned = !1, p((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [l]);
  const J = b.useRef(!1);
  st(() => (J.current = !0, () => {
    J.current = !1;
  }), []), st(() => {
    if (C && (M.current = C), S && (N.current = S), C && S) {
      if (j.current)
        return j.current(C, S, k);
      k();
    }
  }, [C, S, k, j]);
  const q = b.useMemo(() => ({
    reference: M,
    floating: N,
    setReference: m,
    setFloating: I
  }), [m, I]), L = b.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), _ = b.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return P;
    const $ = ln(L.floating, d.x), D = ln(L.floating, d.y);
    return c ? {
      ...P,
      transform: "translate(" + $ + "px, " + D + "px)",
      ...Kn(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: D
    };
  }, [n, c, L.floating, d.x, d.y]);
  return b.useMemo(() => ({
    ...d,
    update: k,
    refs: q,
    elements: L,
    floatingStyles: _
  }), [d, k, q, L, _]);
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Fo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], kt = /* @__PURE__ */ Fo.join(","), zn = typeof Element > "u", Ge = zn ? function() {
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
}, $o = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Yo = function(t, n, r) {
  if (ft(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(kt));
  return n && Ge.call(t, kt) && o.unshift(t), o = o.filter(r), o;
}, Wo = function e(t, n, r) {
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
        var d = Ge.call(s, kt);
        d && r.filter(s) && (n || !t.includes(s)) && o.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), h = !ft(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (p && h) {
          var f = e(p === !0 ? s.children : p.children, !0, r);
          r.flatten ? o.push.apply(o, f) : o.push({
            scopeParent: s,
            candidates: f
          });
        } else
          a.unshift.apply(a, s.children);
      }
  }
  return o;
}, qn = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Gn = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || $o(t)) && !qn(t) ? 0 : t.tabIndex;
}, Vo = function(t, n) {
  var r = Gn(t);
  return r < 0 && n && !qn(t) ? 0 : r;
}, Ho = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Xn = function(t) {
  return t.tagName === "INPUT";
}, Uo = function(t) {
  return Xn(t) && t.type === "hidden";
}, Ko = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, zo = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, qo = function(t) {
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
  var a = zo(o, t.form);
  return !a || a === t;
}, Go = function(t) {
  return Xn(t) && t.type === "radio";
}, Xo = function(t) {
  return Go(t) && !qo(t);
}, Jo = function(t) {
  var n, r = t && dt(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, a = !1;
  if (r && r !== t) {
    var s, c, u;
    for (a = !!((s = o) !== null && s !== void 0 && (c = s.ownerDocument) !== null && c !== void 0 && c.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !a && o; ) {
      var l, d, p;
      r = dt(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((d = o) !== null && d !== void 0 && (p = d.ownerDocument) !== null && p !== void 0 && p.contains(o));
    }
  }
  return a;
}, dn = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Zo = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = Ge.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (Ge.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var c = t; t; ) {
        var u = t.parentElement, l = dt(t);
        if (u && !u.shadowRoot && o(u) === !0)
          return dn(t);
        t.assignedSlot ? t = t.assignedSlot : !u && l !== t.ownerDocument ? t = l.host : t = u;
      }
      t = c;
    }
    if (Jo(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return dn(t);
  return !1;
}, Qo = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return Ge.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ea = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ft(n) || Uo(n) || Zo(n, t) || // For a details element with a summary, the summary element gets the focus
  Ko(n) || Qo(n));
}, fn = function(t, n) {
  return !(Xo(n) || Gn(n) < 0 || !ea(t, n));
}, ta = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, na = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, a) {
    var s = !!o.scopeParent, c = s ? o.scopeParent : o, u = Vo(c, s), l = s ? e(o.candidates) : c;
    u === 0 ? s ? n.push.apply(n, l) : n.push(c) : r.push({
      documentOrder: a,
      tabIndex: u,
      item: o,
      isScope: s,
      content: l
    });
  }), r.sort(Ho).reduce(function(o, a) {
    return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o;
  }, []).concat(n);
}, Jn = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Wo([t], n.includeContainer, {
    filter: fn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: ta
  }) : r = Yo(t, n.includeContainer, fn.bind(null, n)), na(r);
};
const ra = b[/* @__PURE__ */ "useInsertionEffect".toString()], oa = ra || ((e) => e());
function Ye(e) {
  const t = b.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return oa(() => {
    t.current = e;
  }), b.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
let pn = 0;
function Ce(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = t;
  r && cancelAnimationFrame(pn);
  const a = () => e == null ? void 0 : e.focus({
    preventScroll: n
  });
  o ? a() : pn = requestAnimationFrame(a);
}
var me = typeof document < "u" ? Dn : he;
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xe.apply(this, arguments);
}
let St = !1, aa = 0;
const hn = () => "floating-ui-" + aa++;
function sa() {
  const [e, t] = b.useState(() => St ? hn() : void 0);
  return me(() => {
    e == null && t(hn());
  }, []), b.useEffect(() => {
    St || (St = !0);
  }, []), e;
}
const ia = b[/* @__PURE__ */ "useId".toString()], mt = ia || sa, ca = /* @__PURE__ */ b.forwardRef(function(t, n) {
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
    staticOffset: d,
    stroke: p,
    d: h,
    style: {
      transform: f,
      ...y
    } = {},
    ...g
  } = t;
  process.env.NODE_ENV !== "production" && (n || console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component."));
  const T = mt();
  if (!o)
    return null;
  l *= 2;
  const E = l / 2, m = s / 2 * (u / -8 + 1), I = c / 2 * u / 4, [C, S] = r.split("-"), M = Un.isRTL(o), N = !!h, A = C === "top" || C === "bottom", j = d && S === "end" ? "bottom" : "top";
  let K = d && S === "end" ? "right" : "left";
  d && M && (K = S === "end" ? "left" : "right");
  const k = (a == null ? void 0 : a.x) != null ? d || a.x : "", J = (a == null ? void 0 : a.y) != null ? d || a.y : "", q = h || "M0,0" + (" H" + s) + (" L" + (s - m) + "," + (c - I)) + (" Q" + s / 2 + "," + c + " " + m + "," + (c - I)) + " Z", L = {
    top: N ? "rotate(180deg)" : "",
    left: N ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: N ? "" : "rotate(180deg)",
    right: N ? "rotate(-90deg)" : "rotate(90deg)"
  }[C];
  return /* @__PURE__ */ b.createElement("svg", Xe({}, g, {
    "aria-hidden": !0,
    ref: n,
    width: N ? s : s + l,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [K]: k,
      [j]: J,
      [C]: A || N ? "100%" : "calc(100% - " + l / 2 + "px)",
      transform: "" + L + (f ?? ""),
      ...y
    }
  }), l > 0 && /* @__PURE__ */ b.createElement("path", {
    clipPath: "url(#" + T + ")",
    fill: "none",
    stroke: p,
    strokeWidth: l + (h ? 0 : 1),
    d: q
  }), /* @__PURE__ */ b.createElement("path", {
    stroke: l && !h ? g.fill : "none",
    d: q
  }), /* @__PURE__ */ b.createElement("clipPath", {
    id: T
  }, /* @__PURE__ */ b.createElement("rect", {
    x: -E,
    y: E * (N ? -1 : 1),
    width: s + l,
    height: s
  })));
});
function la() {
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
const ua = /* @__PURE__ */ b.createContext(null), da = /* @__PURE__ */ b.createContext(null), fa = () => {
  var e;
  return ((e = b.useContext(ua)) == null ? void 0 : e.id) || null;
}, Ft = () => b.useContext(da);
function pt(e) {
  return "data-floating-ui-" + e;
}
function Oe(e) {
  const t = Rn(e);
  return me(() => {
    t.current = e;
  }), t;
}
function pa(e, t) {
  var n;
  let r = [], o = (n = e.find((a) => a.id === t)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const a = e.find((s) => s.id === o);
    o = a == null ? void 0 : a.parentId, a && (r = r.concat(a));
  }
  return r;
}
function qe(e, t) {
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
let Be = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {}, Dt = 0;
const ha = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Zn = (e) => e && (e.host || Zn(e.parentNode)), ma = (e, t) => t.map((n) => {
  if (e.contains(n))
    return n;
  const r = Zn(n);
  return e.contains(r) ? r : null;
}).filter((n) => n != null);
function va(e, t, n, r) {
  const o = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, s = ma(t, e), c = /* @__PURE__ */ new Set(), u = new Set(s), l = [];
  at[o] || (at[o] = /* @__PURE__ */ new WeakMap());
  const d = at[o];
  s.forEach(p), h(t), c.clear();
  function p(f) {
    !f || c.has(f) || (c.add(f), f.parentNode && p(f.parentNode));
  }
  function h(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, (y) => {
      if (c.has(y))
        h(y);
      else {
        const g = a ? y.getAttribute(a) : null, T = g !== null && g !== "false", E = (Be.get(y) || 0) + 1, m = (d.get(y) || 0) + 1;
        Be.set(y, E), d.set(y, m), l.push(y), E === 1 && T && ot.add(y), m === 1 && y.setAttribute(o, ""), !T && a && y.setAttribute(a, "true");
      }
    });
  }
  return Dt++, () => {
    l.forEach((f) => {
      const y = (Be.get(f) || 0) - 1, g = (d.get(f) || 0) - 1;
      Be.set(f, y), d.set(f, g), y || (!ot.has(f) && a && f.removeAttribute(a), ot.delete(f)), g || f.removeAttribute(o);
    }), Dt--, Dt || (Be = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), at = {});
  };
}
function mn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = ve(e[0]).body;
  return va(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const Qn = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function er(e, t) {
  const n = Jn(e, Qn());
  t === "prev" && n.reverse();
  const r = n.indexOf(Fe(ve(e)));
  return n.slice(r + 1)[0];
}
function ya() {
  return er(document.body, "next");
}
function ga() {
  return er(document.body, "prev");
}
function vn(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !le(n, r);
}
const tr = {
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
function yn(e) {
  e.key === "Tab" && (e.target, clearTimeout(ba));
}
const gn = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const [r, o] = b.useState();
  me(() => (lo() && o("button"), document.addEventListener("keydown", yn), () => {
    document.removeEventListener("keydown", yn);
  }), []);
  const a = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [pt("focus-guard")]: "",
    style: tr
  };
  return /* @__PURE__ */ b.createElement("span", Xe({}, t, a));
}), Ea = /* @__PURE__ */ b.createContext(null), wa = () => b.useContext(Ea), xa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  return /* @__PURE__ */ b.createElement("button", Xe({}, t, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: tr
  }));
});
function Sa(e) {
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
    closeOnFocusOut: d = !0
  } = e, {
    open: p,
    refs: h,
    nodeId: f,
    onOpenChange: y,
    events: g,
    dataRef: T,
    elements: {
      domReference: E,
      floating: m
    }
  } = t, I = typeof s == "number" && s < 0, C = (E == null ? void 0 : E.getAttribute("role")) === "combobox" && In(E) && I, S = C ? !1 : u, M = ha() ? a : !0, N = Oe(o), A = Oe(s), j = Oe(c), K = Ft(), k = wa(), J = b.useRef(null), q = b.useRef(null), L = b.useRef(!1), _ = b.useRef(null), P = b.useRef(!1), $ = k != null, D = b.useCallback(function(Y) {
    return Y === void 0 && (Y = m), Y ? Jn(Y, Qn()) : [];
  }, [m]), ne = b.useCallback((Y) => {
    const W = D(Y);
    return N.current.map((R) => E && R === "reference" ? E : m && R === "floating" ? m : W).filter(Boolean).flat();
  }, [E, m, N, D]);
  b.useEffect(() => {
    if (r || !S)
      return;
    function Y(R) {
      if (R.key === "Tab") {
        le(m, Fe(ve(m))) && D().length === 0 && !C && xt(R);
        const B = ne(), G = $e(R);
        N.current[0] === "reference" && G === E && (xt(R), R.shiftKey ? Ce(B[B.length - 1]) : Ce(B[1])), N.current[1] === "floating" && G === m && R.shiftKey && (xt(R), Ce(B[0]));
      }
    }
    const W = ve(m);
    return W.addEventListener("keydown", Y), () => {
      W.removeEventListener("keydown", Y);
    };
  }, [r, E, m, S, N, h, C, D, ne]), b.useEffect(() => {
    if (r || !d)
      return;
    function Y() {
      P.current = !0, setTimeout(() => {
        P.current = !1;
      });
    }
    function W(R) {
      const B = R.relatedTarget;
      queueMicrotask(() => {
        const G = !(le(E, B) || le(m, B) || le(B, m) || le(k == null ? void 0 : k.portalNode, B) || B != null && B.hasAttribute(pt("focus-guard")) || K && (qe(K.nodesRef.current, f).find((ee) => {
          var re, ie;
          return le((re = ee.context) == null ? void 0 : re.elements.floating, B) || le((ie = ee.context) == null ? void 0 : ie.elements.domReference, B);
        }) || pa(K.nodesRef.current, f).find((ee) => {
          var re, ie;
          return ((re = ee.context) == null ? void 0 : re.elements.floating) === B || ((ie = ee.context) == null ? void 0 : ie.elements.domReference) === B;
        })));
        B && G && !P.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        B !== _.current && (L.current = !0, y(!1, R));
      });
    }
    if (m && se(E))
      return E.addEventListener("focusout", W), E.addEventListener("pointerdown", Y), !S && m.addEventListener("focusout", W), () => {
        E.removeEventListener("focusout", W), E.removeEventListener("pointerdown", Y), !S && m.removeEventListener("focusout", W);
      };
  }, [r, E, m, S, f, K, k, y, d]), b.useEffect(() => {
    var Y;
    if (r)
      return;
    const W = Array.from((k == null || (Y = k.portalNode) == null ? void 0 : Y.querySelectorAll("[" + pt("portal") + "]")) || []);
    if (m) {
      const R = [m, ...W, J.current, q.current, N.current.includes("reference") || C ? E : null].filter((G) => G != null), B = u || C ? mn(R, M, !M) : mn(R);
      return () => {
        B();
      };
    }
  }, [r, E, m, u, N, k, C, M]), me(() => {
    if (r || !m)
      return;
    const Y = ve(m), W = Fe(Y);
    queueMicrotask(() => {
      const R = ne(m), B = A.current, G = (typeof B == "number" ? R[B] : B.current) || m, ee = le(m, W);
      !I && !ee && p && Ce(G, {
        preventScroll: G === m
      });
    });
  }, [r, p, m, I, ne, A]), me(() => {
    if (r || !m)
      return;
    let Y = !1;
    const W = ve(m), R = Fe(W), B = T.current;
    _.current = R;
    function G(ee) {
      let {
        reason: re,
        event: ie,
        nested: xe
      } = ee;
      re === "escape-key" && h.domReference.current && (_.current = h.domReference.current), re === "hover" && ie.type === "mouseleave" && (L.current = !0), re === "outside-press" && (xe ? (L.current = !1, Y = !0) : L.current = !(io(ie) || co(ie)));
    }
    return g.on("openchange", G), () => {
      g.off("openchange", G);
      const ee = Fe(W), re = le(m, ee) || K && qe(K.nodesRef.current, f).some((xe) => {
        var Qe;
        return le((Qe = xe.context) == null ? void 0 : Qe.elements.floating, ee);
      });
      (re || B.openEvent && ["click", "mousedown"].includes(B.openEvent.type)) && h.domReference.current && (_.current = h.domReference.current), // eslint-disable-next-line react-hooks/exhaustive-deps
      j.current && se(_.current) && !L.current && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (!(R !== ee && ee !== W.body) || re) && Ce(_.current, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: !1,
        preventScroll: Y
      });
    };
  }, [r, m, j, T, h, g, K, f]), me(() => {
    if (!(r || !k))
      return k.setFocusManagerState({
        modal: S,
        closeOnFocusOut: d,
        open: p,
        onOpenChange: y,
        refs: h
      }), () => {
        k.setFocusManagerState(null);
      };
  }, [r, k, S, p, y, h, d]), me(() => {
    if (r || !m || typeof MutationObserver != "function" || I)
      return;
    const Y = () => {
      const R = m.getAttribute("tabindex");
      N.current.includes("floating") || Fe(ve(m)) !== h.domReference.current && D().length === 0 ? R !== "0" && m.setAttribute("tabindex", "0") : R !== "-1" && m.setAttribute("tabindex", "-1");
    };
    Y();
    const W = new MutationObserver(Y);
    return W.observe(m, {
      childList: !0,
      subtree: !0,
      attributes: !0
    }), () => {
      W.disconnect();
    };
  }, [r, m, h, N, D, I]);
  function we(Y) {
    return r || !l || !S ? null : /* @__PURE__ */ b.createElement(xa, {
      ref: Y === "start" ? J : q,
      onClick: (W) => y(!1, W.nativeEvent)
    }, typeof l == "string" ? l : "Dismiss");
  }
  const pe = !r && M && ($ || S);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, pe && /* @__PURE__ */ b.createElement(gn, {
    "data-type": "inside",
    ref: k == null ? void 0 : k.beforeInsideRef,
    onFocus: (Y) => {
      if (S) {
        const R = ne();
        Ce(o[0] === "reference" ? R[0] : R[R.length - 1]);
      } else if (k != null && k.preserveTabOrder && k.portalNode)
        if (L.current = !1, vn(Y, k.portalNode)) {
          const R = ya() || E;
          R == null || R.focus();
        } else {
          var W;
          (W = k.beforeOutsideRef.current) == null || W.focus();
        }
    }
  }), !C && we("start"), n, we("end"), pe && /* @__PURE__ */ b.createElement(gn, {
    "data-type": "inside",
    ref: k == null ? void 0 : k.afterInsideRef,
    onFocus: (Y) => {
      if (S)
        Ce(ne()[0]);
      else if (k != null && k.preserveTabOrder && k.portalNode)
        if (d && (L.current = !0), vn(Y, k.portalNode)) {
          const R = ga() || E;
          R == null || R.focus();
        } else {
          var W;
          (W = k.afterOutsideRef.current) == null || W.focus();
        }
    }
  }));
}
function bn(e) {
  return se(e.target) && e.target.tagName === "BUTTON";
}
function En(e) {
  return In(e);
}
function Da(e, t) {
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
    keyboardHandlers: d = !0
  } = t, p = b.useRef(), h = b.useRef(!1);
  return b.useMemo(() => s ? {
    reference: {
      onPointerDown(f) {
        p.current = f.pointerType;
      },
      onMouseDown(f) {
        f.button === 0 && (rn(p.current, !0) && l || c !== "click" && (n && u && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(!1, f.nativeEvent, "click") : (f.preventDefault(), r(!0, f.nativeEvent, "click"))));
      },
      onClick(f) {
        if (c === "mousedown" && p.current) {
          p.current = void 0;
          return;
        }
        rn(p.current, !0) && l || (n && u && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(!1, f.nativeEvent, "click") : r(!0, f.nativeEvent, "click"));
      },
      onKeyDown(f) {
        p.current = void 0, !(f.defaultPrevented || !d || bn(f)) && (f.key === " " && !En(a) && (f.preventDefault(), h.current = !0), f.key === "Enter" && r(!(n && u), f.nativeEvent, "click"));
      },
      onKeyUp(f) {
        f.defaultPrevented || !d || bn(f) || En(a) || f.key === " " && h.current && (h.current = !1, r(!(n && u), f.nativeEvent, "click"));
      }
    }
  } : {}, [s, o, c, l, d, a, u, n, r]);
}
const Ra = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, _a = {
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
function Ta(e, t) {
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
    escapeKey: d = !0,
    outsidePress: p = !0,
    outsidePressEvent: h = "pointerdown",
    referencePress: f = !1,
    referencePressEvent: y = "pointerdown",
    ancestorScroll: g = !1,
    bubbles: T,
    capture: E
  } = t, m = Ft(), I = Ye(typeof p == "function" ? p : () => !1), C = typeof p == "function" ? I : p, S = b.useRef(!1), M = b.useRef(!1), {
    escapeKey: N,
    outsidePress: A
  } = wn(T), {
    escapeKey: j,
    outsidePress: K
  } = wn(E), k = Ye((_) => {
    if (!n || !l || !d || _.key !== "Escape")
      return;
    const P = m ? qe(m.nodesRef.current, o) : [];
    if (!N && (_.stopPropagation(), P.length > 0)) {
      let $ = !0;
      if (P.forEach((D) => {
        var ne;
        if ((ne = D.context) != null && ne.open && !D.context.dataRef.current.__escapeKeyBubbles) {
          $ = !1;
          return;
        }
      }), !$)
        return;
    }
    r(!1, uo(_) ? _.nativeEvent : _, "escape-key");
  }), J = Ye((_) => {
    var P;
    const $ = () => {
      var D;
      k(_), (D = $e(_)) == null || D.removeEventListener("keydown", $);
    };
    (P = $e(_)) == null || P.addEventListener("keydown", $);
  }), q = Ye((_) => {
    const P = S.current;
    S.current = !1;
    const $ = M.current;
    if (M.current = !1, h === "click" && $ || P || typeof C == "function" && !C(_))
      return;
    const D = $e(_), ne = "[" + pt("inert") + "]", we = ve(c).querySelectorAll(ne);
    let pe = Q(D) ? D : null;
    for (; pe && !Ze(pe); ) {
      const R = Ae(pe);
      if (R === ve(c).body || !Q(R))
        break;
      pe = R;
    }
    if (we.length && Q(D) && !fo(D) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !le(D, c) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(we).every((R) => !le(pe, R)))
      return;
    if (se(D) && c) {
      const R = D.clientWidth > 0 && D.scrollWidth > D.clientWidth, B = D.clientHeight > 0 && D.scrollHeight > D.clientHeight;
      let G = B && _.offsetX > D.clientWidth;
      if (B && de(D).direction === "rtl" && (G = _.offsetX <= D.offsetWidth - D.clientWidth), G || R && _.offsetY > D.clientHeight)
        return;
    }
    const Y = m && qe(m.nodesRef.current, o).some((R) => {
      var B;
      return wt(_, (B = R.context) == null ? void 0 : B.elements.floating);
    });
    if (wt(_, c) || wt(_, s) || Y)
      return;
    const W = m ? qe(m.nodesRef.current, o) : [];
    if (W.length > 0) {
      let R = !0;
      if (W.forEach((B) => {
        var G;
        if ((G = B.context) != null && G.open && !B.context.dataRef.current.__outsidePressBubbles) {
          R = !1;
          return;
        }
      }), !R)
        return;
    }
    r(!1, _, "outside-press");
  }), L = Ye((_) => {
    var P;
    const $ = () => {
      var D;
      q(_), (D = $e(_)) == null || D.removeEventListener(h, $);
    };
    (P = $e(_)) == null || P.addEventListener(h, $);
  });
  return b.useEffect(() => {
    if (!n || !l)
      return;
    u.current.__escapeKeyBubbles = N, u.current.__outsidePressBubbles = A;
    function _(D) {
      r(!1, D, "ancestor-scroll");
    }
    const P = ve(c);
    d && P.addEventListener("keydown", j ? J : k, j), C && P.addEventListener(h, K ? L : q, K);
    let $ = [];
    return g && (Q(s) && ($ = Se(s)), Q(c) && ($ = $.concat(Se(c))), !Q(a) && a && a.contextElement && ($ = $.concat(Se(a.contextElement)))), $ = $.filter((D) => {
      var ne;
      return D !== ((ne = P.defaultView) == null ? void 0 : ne.visualViewport);
    }), $.forEach((D) => {
      D.addEventListener("scroll", _, {
        passive: !0
      });
    }), () => {
      d && P.removeEventListener("keydown", j ? J : k, j), C && P.removeEventListener(h, K ? L : q, K), $.forEach((D) => {
        D.removeEventListener("scroll", _);
      });
    };
  }, [u, c, s, a, d, C, h, n, r, g, l, N, A, k, j, J, q, K, L]), b.useEffect(() => {
    S.current = !1;
  }, [C, h]), b.useMemo(() => l ? {
    reference: {
      onKeyDown: k,
      [Ra[y]]: (_) => {
        f && r(!1, _.nativeEvent, "reference-press");
      }
    },
    floating: {
      onKeyDown: k,
      onMouseDown() {
        M.current = !0;
      },
      onMouseUp() {
        M.current = !0;
      },
      [_a[h]]: () => {
        S.current = !0;
      }
    }
  } : {}, [l, f, h, y, r, k]);
}
let Ot;
process.env.NODE_ENV !== "production" && (Ot = /* @__PURE__ */ new Set());
function Ca(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e;
  if (process.env.NODE_ENV !== "production") {
    var a;
    const A = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((a = e.elements) != null && a.reference && !Q(e.elements.reference)) {
      var s;
      if (!((s = Ot) != null && s.has(A))) {
        var c;
        (c = Ot) == null || c.add(A), console.error(A);
      }
    }
  }
  const [u, l] = b.useState(null), d = ((t = e.elements) == null ? void 0 : t.reference) || u, p = jo(e), h = Ft(), f = fa() != null, y = Ye((A, j, K) => {
    A && (T.current.openEvent = j), E.emit("openchange", {
      open: A,
      event: j,
      reason: K,
      nested: f
    }), r == null || r(A, j, K);
  }), g = b.useRef(null), T = b.useRef({}), E = b.useState(() => la())[0], m = mt(), I = b.useCallback((A) => {
    const j = Q(A) ? {
      getBoundingClientRect: () => A.getBoundingClientRect(),
      contextElement: A
    } : A;
    p.refs.setReference(j);
  }, [p.refs]), C = b.useCallback((A) => {
    (Q(A) || A === null) && (g.current = A, l(A)), (Q(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    A !== null && !Q(A)) && p.refs.setReference(A);
  }, [p.refs]), S = b.useMemo(() => ({
    ...p.refs,
    setReference: C,
    setPositionReference: I,
    domReference: g
  }), [p.refs, C, I]), M = b.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), N = b.useMemo(() => ({
    ...p,
    refs: S,
    elements: M,
    dataRef: T,
    nodeId: o,
    floatingId: m,
    events: E,
    open: n,
    onOpenChange: y
  }), [p, o, m, E, n, y, S, M]);
  return me(() => {
    const A = h == null ? void 0 : h.nodesRef.current.find((j) => j.id === o);
    A && (A.context = N);
  }), b.useMemo(() => ({
    ...p,
    context: N,
    refs: S,
    elements: M
  }), [p, S, M, N]);
}
function Rt(e, t, n) {
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
            for (var d, p = arguments.length, h = new Array(p), f = 0; f < p; f++)
              h[f] = arguments[f];
            return (d = r.get(c)) == null ? void 0 : d.map((y) => y(...h)).find((y) => y !== void 0);
          };
        }
      } else
        o[c] = u;
    }), o), {})
  };
}
function ka(e) {
  e === void 0 && (e = []);
  const t = e, n = b.useCallback(
    (a) => Rt(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = b.useCallback(
    (a) => Rt(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = b.useCallback(
    (a) => Rt(a, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((a) => a == null ? void 0 : a.item)
  );
  return b.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function Oa(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: a = "dialog"
  } = t, s = mt();
  return b.useMemo(() => {
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
const xn = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());
function je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Na(e, t) {
  const [n, r] = b.useState(e);
  return e && !n && r(!0), b.useEffect(() => {
    if (!e) {
      const o = setTimeout(() => r(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, t]), n;
}
function Aa(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    elements: {
      floating: r
    }
  } = e, {
    duration: o = 250
  } = t, s = (typeof o == "number" ? o : o.close) || 0, [c, u] = b.useState(!1), [l, d] = b.useState("unmounted"), p = Na(n, s);
  return me(() => {
    c && !p && d("unmounted");
  }, [c, p]), me(() => {
    if (r)
      if (n) {
        d("initial");
        const h = requestAnimationFrame(() => {
          d("open");
        });
        return () => {
          cancelAnimationFrame(h);
        };
      } else
        u(!0), d("close");
  }, [n, r]), {
    isMounted: p,
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
  } = t, c = e.placement, u = c.split("-")[0], l = b.useMemo(() => ({
    side: u,
    placement: c
  }), [u, c]), d = typeof s == "number", p = (d ? s : s.open) || 0, h = (d ? s : s.close) || 0, [f, y] = b.useState(() => ({
    ...je(a, l),
    ...je(n, l)
  })), {
    isMounted: g,
    status: T
  } = Aa(e, {
    duration: s
  }), E = Oe(n), m = Oe(r), I = Oe(o), C = Oe(a);
  return me(() => {
    const S = je(E.current, l), M = je(I.current, l), N = je(C.current, l), A = je(m.current, l) || Object.keys(S).reduce((j, K) => (j[K] = "", j), {});
    if (T === "initial" && y((j) => ({
      transitionProperty: j.transitionProperty,
      ...N,
      ...S
    })), T === "open" && y({
      transitionProperty: Object.keys(A).map(xn).join(","),
      transitionDuration: p + "ms",
      ...N,
      ...A
    }), T === "close") {
      const j = M || S;
      y({
        transitionProperty: Object.keys(j).map(xn).join(","),
        transitionDuration: h + "ms",
        ...N,
        ...j
      });
    }
  }, [h, I, E, m, C, p, T, l]), {
    isMounted: g,
    styles: f
  };
}
const ke = 7, Ma = 2, Ia = (e) => {
  var C, S;
  const { state: t, setData: n } = te(), r = Rn(null), {
    refs: o,
    context: a,
    floatingStyles: s,
    middlewareData: c
  } = Ca({
    open: t.isCalendarOpen,
    onOpenChange: (M) => {
      n({ type: U.SET_CALENDAR_OPEN, isOpen: M });
    },
    middleware: [
      Bo({
        element: r
      }),
      Eo(ke + Ma)
    ],
    whileElementsMounted: Io
  }), u = ((C = c.arrow) == null ? void 0 : C.x) ?? 0, l = ((S = c.arrow) == null ? void 0 : S.y) ?? 0, d = u + ke / 2, p = l + ke, { isMounted: h, styles: f } = Pa(a, {
    initial: {
      transform: "scale(0)"
    },
    common: ({ side: M }) => ({
      transformOrigin: {
        top: `${d}px calc(100% + ${ke}px)`,
        bottom: `${d}px ${-ke}px`,
        left: `calc(100% + ${ke}px) ${p}px`,
        right: `${-ke}px ${p}px`
      }[M]
    })
  }), y = Da(a), g = Ta(a), T = Oa(a), { getReferenceProps: E, getFloatingProps: m } = ka([y, g, T]), I = mt();
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { ref: o.setReference, ...E(), children: e.input }),
    t.isCalendarOpen && /* @__PURE__ */ x.jsx(Sa, { context: a, modal: !1, children: h ? /* @__PURE__ */ x.jsx("div", { ref: o.setFloating, style: s, "aria-labelledby": I, ...m(), children: /* @__PURE__ */ x.jsxs("div", { style: f, children: [
      /* @__PURE__ */ x.jsx(
        ca,
        {
          ref: r,
          context: a,
          className: `
                                  ndp-fill-white dark:ndp-fill-slate-800
                               `
        }
      ),
      e.calendar
    ] }) }) : /* @__PURE__ */ x.jsx("div", {}) })
  ] });
}, La = ({ ...e }) => {
  var o, a, s, c, u, l;
  const { state: t, setData: n } = te(), { parseBsDate: r } = Me();
  return he(() => {
    var d;
    n({
      type: U.SET_CLASSES,
      classNames: {
        input: e.className ?? t.options.classNames.input,
        ...(d = e.options) == null ? void 0 : d.classNames
      }
    });
  }, [e.className, (o = e.options) == null ? void 0 : o.classNames]), he(() => {
    n({
      type: U.SET_THEME,
      theme: e.dark ? it.DARK : it.LIGHT
    });
  }, [e.dark]), he(() => {
    n({
      type: U.SET_EVENTS,
      events: {
        onChange: e.onChange ?? t.events.onChange,
        onSelect: e.onSelect ?? t.events.onSelect
      }
    });
  }, [e.onChange, e.onSelect]), he(() => {
    n({
      type: U.SET_MODIFIERS,
      modifiers: {
        isHoliday: e.isHoliday ?? t.modifiers.isHoliday,
        isDisabled: e.isDisabled ?? t.modifiers.isDisabled,
        isWeekend: e.isWeekend ?? t.modifiers.isWeekend
      }
    });
  }, [e.isHoliday, e.isDisabled, e.isWeekend]), he(() => {
    var d, p;
    n({
      type: U.SET_LOCALE,
      locale: {
        calendar: ((d = e.options) == null ? void 0 : d.locale) ?? t.locale.calendar,
        value: ((p = e.options) == null ? void 0 : p.valueLocale) ?? t.locale.value
      }
    });
  }, [(a = e.options) == null ? void 0 : a.locale, (s = e.options) == null ? void 0 : s.valueLocale]), he(() => {
    var d;
    n({
      type: U.SET_COLORS,
      colors: { ...t.options.colors, ...(d = e.options) == null ? void 0 : d.colors }
    });
  }, [(c = e.options) == null ? void 0 : c.colors]), he(() => {
    var d;
    n({
      type: U.SET_SEPARATOR,
      separator: ((d = e.options) == null ? void 0 : d.dateSeparator) ?? t.options.dateSeparator
    });
  }, [(u = e.options) == null ? void 0 : u.dateSeparator]), he(() => {
    var d;
    n({
      type: U.SET_CLOSE_ON_SELECT,
      closeOnSelect: typeof ((d = e.options) == null ? void 0 : d.closeOnSelect) > "u" ? t.options.closeOnSelect : e.options.closeOnSelect
    });
  }, [(l = e.options) == null ? void 0 : l.closeOnSelect]), he(() => {
    const d = Cn(e.value ?? ""), p = d ? r(d) : void 0, h = r(d || De(/* @__PURE__ */ new Date()));
    n({ type: U.SET_CALENDAR_DATE, date: h }), n({ type: U.SET_SELECTED_DATE, date: p });
  }, [e.value]), /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `nepali-datepicker ${t.options.classNames.wrapper ?? ""}`,
      "data-theme": t.options.theme,
      style: {
        "--ndp-primary": t.options.colors.primary,
        "--ndp-secondary": t.options.colors.secondary
      },
      children: /* @__PURE__ */ x.jsx(Ia, { input: /* @__PURE__ */ x.jsx(Qr, { ...e }), calendar: /* @__PURE__ */ x.jsx(Vr, {}) })
    }
  );
}, ja = (e) => /* @__PURE__ */ x.jsx(zr, { children: /* @__PURE__ */ x.jsx(La, { ...e }) });
export {
  ja as NepaliDatePicker
};
