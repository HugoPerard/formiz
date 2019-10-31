(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(n,t,e){"use strict";e.r(t);e(167),e(170),e(169),e(171),e(172),e(0);var r=e(178),i=e(195),s=e(191),a=e(207),o=e(192),c=e(193),u='\n// 2. Create a form with multi steps & fields\nconst MyForm = () => {\n  const myForm = useForm()\n  const [isLoading, setIsLoading] = React.useState(false)\n  const submitForm = (values) => {\n    setIsLoading(true)\n\n    setTimeout(() => {\n      setIsLoading(false)\n      alert(JSON.stringify(values))\n      myForm.invalidateFields({\n        email: \'You can display an error after an API call\',\n      })\n      const step = myForm.getFieldStepName(\'email\')\n      myForm.goToStep(step)\n    }, 1000)\n  }\n  return (\n    <Formiz onValidSubmit={submitForm} connect={myForm}>\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n        className="demo-form"\n        style={{ minHeight: \'16rem\' }}\n      >\n        <div className="demo-form__tabs">\n          {myForm.steps.map(step => (\n            <button\n              key={step.name}\n              className={`demo-form__tab ${step.name === myForm.currentStep.name ? \'is-active\' : \'\'}`}\n              type="button"\n              onClick={() => myForm.goToStep(step.name)}\n            >\n              {!step.isValid && step.isSubmitted && (\n                <small className="mr-2">\u26a0\ufe0f</small>\n              )}\n              { step.label }\n            </button>\n          ))}\n        </div>\n\n        <div className="demo-form__content">\n          <FormizStep name="step1" label="Step A">\n            '+Object(a.a)(!0)+'\n          </FormizStep>\n          <FormizStep name="step2" label="Step B">\n            '+Object(o.a)(!0)+'\n          </FormizStep>\n          <FormizStep name="step3" label="Step C">\n            '+Object(c.a)(!0)+'\n          </FormizStep>\n        </div>\n\n        <div className="demo-form__footer">\n          <div\n            className="ml-auto"\n            style={{ minWidth: \'6rem\' }}\n          >\n            <button\n              className="demo-button is-full is-primary"\n              type="submit"\n              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}\n            >\n              {isLoading ? \'Loading...\' : \'Submit\'}\n            </button>\n          </div>\n        </div>\n      </form>\n    </Formiz>\n  )\n}\n',p="\n"+s.a+"\n"+u+"\nrender(\n  <MyForm />\n)\n";function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,"frontMatter",(function(){return S})),e.d(t,"rightToc",(function(){return d})),e.d(t,"default",(function(){return _}));var S={id:"multi-tabs",title:"Multi Tabs Form"},d=[],j={rightToc:d},f="wrapper";function _(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["components"]);return Object(r.b)(f,l({},j,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{code:p,mdxType:"CodePreview"}))}_.isMDXComponent=!0},191:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="\n// 1. Create a reusable field\nconst MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, isRequired } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {isRequired && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        value={value || ''}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n"},192:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){return'\n            <MyField\n              name="email"\n              label="Email"\n              type="email"\n              isRequired="Email is required"\n              validations={[\n                {\n                  rule: validations.isEmail(),\n                  message: \'Not a valid email\',\n                }\n              ]}\n              '+(n?'defaultValue="hailey@company.com"':"")+"\n            />\n"}},193:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){return'\n            <MyField\n              name="password"\n              label="Password"\n              type="password"\n            />\n            <MyField\n              name="passwordConfirm"\n              label="Confirm password"\n              type="password"\n              validations={[\n                {\n                  rule: (value, values) => values.password === value,\n                  message: \'Passwords do not match\',\n                }\n              ]}\n            />\n'}},195:function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"isEmail",(function(){return fn})),e.d(r,"isNotEmptyArray",(function(){return jn})),e.d(r,"isNotEmptyString",(function(){return dn})),e.d(r,"isRequired",(function(){return Sn}));var i=e(0),s=e.n(i),a=e(13),o=e.n(a),c=e(632),u=e(219),p=e.n(u);e(220),e(221),e(222),e(223),e(186),e(224),e(225),e(228),e(229),e(230),e(231),e(170),e(169),e(171),e(172),e(167),e(232),e(233);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function S(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function j(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(e,!0).forEach((function(t){S(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):j(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function _(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function m(n,t){return b(n)||function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],r=!0,i=!1,s=void 0;try{for(var a,o=n[Symbol.iterator]();!(r=(a=o.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){i=!0,s=n}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return e}}(n,t)||E()}function y(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||g(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(n){if(Array.isArray(n))return n}function g(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(n){var t=function(n,t){if("object"!=typeof n||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n,"string");return"symbol"==typeof t?t:String(t)}var v=function(n){return n&&"object"===l(n)&&n.constructor===Object},x=function(n){return Object.keys(n).reduce((function(n,t){return P(t,n)}),n)},P=function(n,t){if(n.indexOf(".")<0&&n.indexOf("[")<0)return t;var e,r=t[n],i=t||{},s=(i[n],_(i,[n].map(h))),a=b(e=n.split("."))||g(e)||E(),o=a[0],c=a.slice(1);if(o.match(/\[([0-9]*)\]$/g)){var u=m(o.split(/(\[|\])/g),3),p=u[0],l=u[2],d=t[p]||[];if(c.length){var j=f({},t[p]&&v(t[p][l])?t[p][l]:{},S({},c.join("."),r));d[l]=x(j)}else d[l]=r;return f({},s,S({},p,d))}var y=f({},v(t[o])?t[o]:{},S({},c.join("."),r));return f({},s,S({},o,x(y)))},O=function(n){var t=(n||[]).filter((function(n){return n.isEnabled})).reduce((function(n,t){return f({},n,S({},t.name,t.value))}),{});return x(t)},C=function(n,t){return(t||[]).filter((function(n){return n.isEnabled})).filter((function(t){return t.step===n}))},B=function(n,t){var e=function(n,t){return(t||[]).find((function(t){return t.name===n}))}(n,t);if(!e)return[];var r=(e.validations||[]).map((function(n){return n.rule&&!n.rule(e.value,O(t))?n.message:"___FIELD_IS_VALID___"})).filter((function(n){return"___FIELD_IS_VALID___"!==n}));return e.externalError?[e.externalError].concat(y(r)):r},M=function(n){return(n||[]).filter((function(n){return n.isEnabled}))},w=function(n){return(n||[]).sort((function(n,t){return n.index-t.index})).sort((function(n,t){return n.order-t.order})).map((function(n,t){return f({},n,{index:t})}))},T=function(n){return n.navigatedStepName||n.initialStepName},N=function(n,t){return(t||[]).filter((function(n){return n.isEnabled})).findIndex((function(t){return t.name===n}))||0},F=function(n,t){var e=M(t);return w(e).find((function(t){return t.name===n}))||{}},G=function(n){return"formiz-".concat(n,"-id-").concat(Math.random().toString(36).substr(2,9))},V=s.a.createContext(),k=function(){return Object(i.useContext)(V)},I=function(n){var t=n.children,e=n.onStateChange,r=n.onSubmit,a=n.onValidSubmit,o=n.onInvalidSubmit,c=Object(i.useMemo)((function(){return G("form")}),[]),u=m(Object(i.useState)({id:c,resetKey:1,isValid:!0,isSubmitted:!1,initialStepName:null,navigatedStepName:null,steps:[],fields:[]}),2),p=u[0],l=u[1],S=Object(i.useCallback)((function(n){l((function(t){return n(t)}))}),[]);return Object(i.useEffect)((function(){e(p)}),[p]),s.a.createElement(V.Provider,{value:{state:p,dispatch:S,onSubmit:r,onValidSubmit:a,onInvalidSubmit:o}},t)};I.propTypes={children:o.a.node.isRequired,onStateChange:o.a.func,onSubmit:o.a.func,onValidSubmit:o.a.func,onInvalidSubmit:o.a.func},I.defaultProps={onStateChange:function(){},onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){}};var L=function(){return function(n){var t=(n.fields||[]).map((function(t){return f({},t,{errors:B(t.name,n.fields)})})),e=t.filter((function(n){return n.isEnabled})).every((function(n){return!n.errors.length})),r=(n.steps||[]).map((function(n){return f({},n,{isValid:C(n.name,t).every((function(n){return!n.errors.length}))})}));return f({},n,{fields:t,steps:r,isValid:e})}},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return function(r){var i=(r.steps||[]).map((function(n){return f({},n,{isSubmitted:!0})})),s=O(r.fields);n(s);var a=f({},r,{steps:i,isSubmitted:!0});return(a=L()(a)).isValid?t(s):e(s),a}},D=function(n){return function(t){var e=t.steps,r=M(e).find((function(t){return t.name===n}));if(!r||!r.name)return t;var i=f({},t,{navigatedStepName:r.name});return L()(i)}},H=function(n){return function(t){var e=t.steps,r=M(e)[n]||{};return D(r.name)(t)}},K=function(){return function(n){var t=n.steps,e=M(t).length,r=T(n),i=N(r,t),s=e>0?i+1:0;return H(s=s>e-1?i:s)(n)}},R=function(){return function(n){var t=n.steps,e=T(n),r=N(e,t)-1;return H(r=r<0?0:r)(n)}},z=function(n,t){return function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),s=(r.externalError,_(r,["externalError"])),a=[].concat(y(i),[f({},s,{value:t,isPristine:!1})]),o=f({},e,{fields:a});return L()(o)}},W={id:null,submit:function(){},isValid:!0,isSubmitted:!1,values:{},invalidateFields:function(){},reset:function(){},resetKey:0,currentStep:{},steps:[],isStepValid:!0,isStepSubmitted:!1,isFirstStep:!0,isLastStep:!0,submitStep:function(){},getFieldStepName:function(){},nextStep:function(){},prevStep:function(){},goToStep:function(){}},q=function(){var n=k();if(!n)return null;var t=n.state,e=n.dispatch,r=n.onSubmit,i=n.onValidSubmit,s=n.onInvalidSubmit,a=t.id,o=t.fields,c=t.isValid,u=t.isSubmitted,p=t.steps,l=t.resetKey,S=O(o),d=function(n){return{name:n.name,label:n.label,isValid:n.isValid,isVisited:n.isVisited,isSubmitted:n.isSubmitted,index:n.index}},j=M(p),m=j.length,b=T(t),g=F(b,j),E=N(b,j);return{id:a,submit:function(n){n&&n.preventDefault(),e(A(r,i,s))},isValid:c,isSubmitted:u,values:S,invalidateFields:function(n){e(function(n){return function(t){var e=t.fields.map((function(t){var e=n[t.name];return e?f({},t,{externalError:e}):t})),r=f({},t,{fields:e});return L()(r)}}(n))},reset:function(){e((function(n){var t=(n.fields||[]).map((function(n){n.externalError;var t=_(n,["externalError"]);return f({},t,{isPristine:!0,value:t.defaultValue})})),e=(n.steps||[]).map((function(n){return f({},n,{isSubmitted:!1,isVisited:!1})})),r=f({},n,{fields:t,steps:e,isSubmitted:!1,navigatedStepName:n.initialStepName,resetKey:n.resetKey+1});return L()(r)}))},resetKey:l,currentStep:d(g),steps:j.map(d),isStepValid:g.isValid,isStepSubmitted:g.isSubmitted,isFirstStep:0===E,isLastStep:E===m-1,submitStep:function(n){n&&n.preventDefault(),e(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return function(i){var s=i.steps.find((function(t){return t.name===n}))||{},a=i.steps.filter((function(t){return t.name!==n})),o=w([].concat(y(a),[f({},s,{isSubmitted:!0})])),c=f({},i,{steps:o});return s.isValid?(c.navigatedStepName===(c=K()(c)).navigatedStepName&&(c=A(t,e,r)(c)),c):c}}(b,r,i,s))},getFieldStepName:function(n){return function(n,t){var e=t.find((function(t){return t.name===n}));if(e&&e.isEnabled)return e.step}(n,o)},nextStep:function(){e(K())},prevStep:function(){e(R())},goToStep:function(n){e(D(n))}}},$={children:o.a.node,autoForm:o.a.bool,onValid:o.a.func,onInvalid:o.a.func,onChange:o.a.func,connect:o.a.shape({__connect__:o.a.func})},J={children:"",autoForm:!1,onValid:function(){},onInvalid:function(){},onChange:function(){},connect:{__connect__:function(){}}},U=function(n){var t=n.children,e=n.autoForm,r=n.onValid,a=n.onInvalid,o=n.onChange,c=n.connect,u=k().dispatch,p=q();return o(p.values),p.isValid?r():a(),Object(i.useEffect)((function(){c.__connect__(p)}),[u,JSON.stringify(c.__connect__),JSON.stringify(p)]),e?s.a.createElement("form",{noValidate:!0,onSubmit:p.submit},t):t};U.propTypes=$,U.defaultProps=J;var X=new Error("A <FormizStep> always needs a `name` attribute."),Y={as:o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),children:o.a.oneOfType([o.a.node,o.a.func]),isEnabled:o.a.bool,name:o.a.string.isRequired,label:o.a.node,order:o.a.number,style:o.a.oneOfType([o.a.object,o.a.array])},Z={as:"div",children:"",isEnabled:!0,label:"",order:0,style:{}},Q=function(n){var t=n.as,e=n.children,r=n.isEnabled,a=n.name,o=n.label,c=n.order,u=n.style,p=_(n,["as","children","isEnabled","name","label","order","style"]);if(!a)throw X;var l=k().dispatch,S=q().currentStep,j=S.name===a;return Object(i.useEffect)((function(){var n;S.name&&!S.isVisited&&j&&l((n=S.name,function(t){var e=t.steps.find((function(t){return t.name===n}))||{},r=t.steps.filter((function(t){return t.name!==n})),i=w([].concat(y(r),[f({},e,{isVisited:!0})]));return f({},t,{steps:i})}))})),Object(i.useEffect)((function(){j&&!r&&l(R())}),[r,j]),Object(i.useEffect)((function(){return l(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.order,r=void 0===e?0:e,i=t.label,s=void 0===i?"":i,a=t.isEnabled,o=void 0===a||a;return function(t){var e=t.steps.find((function(t){return t.name===n}))||{},i=t.steps.filter((function(t){return t.name!==n})),a=w([].concat(y(i),[f({},e,{name:n,label:s,order:r,isValid:!0,isVisited:!1,isSubmitted:!1,isEnabled:o})])),c=f({},t,{steps:a,initialStepName:a.length?a[0].name:null});return L()(c)}}(a,{order:c})),function(){var n;l((n=a,function(t){var e=t.steps.filter((function(t){return t.name!==n})),r=f({},t,{steps:w(e)});return L()(r)}))}}),[a,c]),Object(i.useEffect)((function(){l(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.label,r=t.isEnabled;return function(t){var i=t.steps.find((function(t){return t.name===n}))||{},s=t.steps.filter((function(t){return t.name!==n})),a=w([].concat(y(s),[f({},i,{label:e,isEnabled:r})]));return f({},t,{steps:a})}}(a,{label:o,isEnabled:!!r}))}),[r,o]),"function"==typeof e?e({isActive:j}):s.a.createElement(t,d({style:f({},u,{display:j?null:"none"})},p),r&&e)};Q.propTypes=Y,Q.defaultProps=Z;var nn=s.a.createContext(),tn=function(n){var t=n.children,e=n.name;return s.a.createElement(nn.Provider,{value:e},t)};tn.propTypes={children:o.a.node.isRequired,name:o.a.string},tn.defaultProps={name:null};var en=function(){var n=m(Object(i.useState)(W),2),t=n[0],e=n[1],r=q();return r||f({},t,{__connect__:function(n){e(n)}})},rn=new Error("A Formiz field always needs to be in a `<Formiz>` component."),sn=new Error("A Formiz field always needs a `name` attribute."),an=(o.a.number,o.a.any,o.a.string,o.a.bool,o.a.string,o.a.func,o.a.arrayOf(o.a.shape({rule:o.a.func,message:o.a.string})),function(n){return n||""===n?{rule:function(n){return!!n||0===n},message:!0!==n?n:""}:{}}),on=function(n){var t=n.debounce,e=void 0===t?100:t,r=n.defaultValue,s=n.isRequired,a=n.keepValue,o=n.name,c=n.onChange,u=n.validations,p=void 0===u?[]:u,l=Object(i.useMemo)((function(){return G("field")}),[]);if(!o)throw sn;var S=k(),d=Object(i.useContext)(nn);if(!S)throw rn;var j=S.state,_=S.dispatch,b=j.fields.find((function(n){return n.name===o}))||{},g=(b.errors||[]).filter((function(n){return!!n})),E=F(d,j.steps),h=E.name?E.isSubmitted:j.isSubmitted,v=m(Object(i.useState)(b.value||r),2),x=v[0],P=v[1],O=Object(i.useRef)(e);O.current=e;var C=Object(i.useRef)();C.current=r;var B=Object(i.useRef)();B.current=x;var M=Object(i.useRef)();return M.current=a,Object(i.useEffect)((function(){M.current||P(C.current)}),[j.resetKey]),Object(i.useEffect)((function(){if(x===C.current)return function(){};if(!O.current)return _(z(l,x)),function(){};var n=setTimeout((function(){_(z(l,x))}),O.current);return function(){clearTimeout(n)}}),[x,l]),Object(i.useEffect)((function(){return _(function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.value,i=void 0===r?null:r,s=e.step,a=void 0===s?null:s,o=e.validations,c=void 0===o?[]:o;return function(e){var r=e.fields.find((function(n){return n.name===t}))||{},s=e.fields.filter((function(n){return n.name!==t})),o=[].concat(y(s),[f({},r,{id:n,name:t,value:r.value||i,defaultValue:i,isEnabled:!0,isPristine:!0,step:a,validations:c,errors:[]})]),u=f({},e,{fields:o});return L()(u)}}(l,o,{value:B.current||C.current,step:d})),function(){var n,t;_((n=l,t=M.current,function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),s=t?[].concat(y(i),[f({},r,{isEnabled:!1})]):i,a=f({},e,{fields:s});return L()(a)}))}}),[l,o,d]),Object(i.useEffect)((function(){var n=[an(s)];_(function(n,t){return function(e){var r=e.fields.find((function(t){return t.id===n}));if(!r)return e;var i=e.fields.filter((function(t){return t.id!==n})),s=[].concat(y(i),[f({},r,{validations:t})]),a=f({},e,{fields:s});return L()(a)}}(l,[].concat(n,y(p))))}),[l,JSON.stringify(p),JSON.stringify(s)]),{id:l,resetKey:j.resetKey,value:x||"",errorMessages:g,errorMessage:g[0],isValid:!b.errors||!b.errors.length,isPristine:!!b.isPristine,isSubmitted:h,setValue:function(n){P(n),c&&c(n)}}},cn=function(n){return s.a.createElement(I,n,s.a.createElement(U,n))};cn.propTypes=f({},$,{onSubmit:o.a.func,onValidSubmit:o.a.func,onInvalidSubmit:o.a.func}),cn.defaultProps=f({},J,{onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){}});var un=function(n){var t=n.name,e=n.order,r=_(n,["name","order"]);return s.a.createElement(tn,{name:t},s.a.createElement(Q,d({},r,{name:t,order:e})))};un.propTypes=Y,un.defaultProps=Z;var pn=function(n){return"string"==typeof n||n instanceof String},ln=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,Sn=function(){return function(n){return!!n||0===n}},dn=function(){return function(n){return!!pn(n)&&!!(n||"").match(/^(?!\s*$).+/)}},jn=function(){return function(n){return t=n,!!Array.isArray(t)&&!!(n||[]).length;var t}},fn=function(){return function(n){return null==n||!!pn(n)&&(!n||ln.test(n))}};e.d(t,"a",(function(){return _n}));var _n=function(n){var t=n.code;return s.a.createElement(c.d,{code:t.trim(),scope:{React:s.a,Formiz:cn,FormizStep:un,useForm:en,useField:on,validations:r},theme:p.a,noInline:!0},s.a.createElement("div",{className:"relative mx-4 xxl:mx-0 z-20 shadow-lg rounded-lg overflow-hidden bg-white"},s.a.createElement(c.c,null)),s.a.createElement(c.b,null),s.a.createElement("div",{className:"relative z-10 xxl:-mx-20 -mt-6 px-2 pb-2 pt-10 rounded-lg overflow-hidden",style:{background:"#011627"}},s.a.createElement(c.a,null)))};_n.propTypes={code:o.a.string.isRequired}},207:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){return'\n            <MyField\n              name="name"\n              label="Name"\n              isRequired="Name is required"\n              '+(n?'defaultValue="Hailey Terry"':"")+'\n            />\n\n            <MyField\n              name="nickname"\n              label="Nickname"\n              '+(n?'defaultValue="hailey"':"")+"\n            />\n"}},234:function(n,t,e){var r={"./Binary_Property/ASCII.js":235,"./Binary_Property/ASCII_Hex_Digit.js":236,"./Binary_Property/Alphabetic.js":237,"./Binary_Property/Any.js":238,"./Binary_Property/Assigned.js":239,"./Binary_Property/Bidi_Control.js":240,"./Binary_Property/Bidi_Mirrored.js":241,"./Binary_Property/Case_Ignorable.js":242,"./Binary_Property/Cased.js":243,"./Binary_Property/Changes_When_Casefolded.js":244,"./Binary_Property/Changes_When_Casemapped.js":245,"./Binary_Property/Changes_When_Lowercased.js":246,"./Binary_Property/Changes_When_NFKC_Casefolded.js":247,"./Binary_Property/Changes_When_Titlecased.js":248,"./Binary_Property/Changes_When_Uppercased.js":249,"./Binary_Property/Dash.js":250,"./Binary_Property/Default_Ignorable_Code_Point.js":251,"./Binary_Property/Deprecated.js":252,"./Binary_Property/Diacritic.js":253,"./Binary_Property/Emoji.js":254,"./Binary_Property/Emoji_Component.js":255,"./Binary_Property/Emoji_Modifier.js":256,"./Binary_Property/Emoji_Modifier_Base.js":257,"./Binary_Property/Emoji_Presentation.js":258,"./Binary_Property/Extended_Pictographic.js":259,"./Binary_Property/Extender.js":260,"./Binary_Property/Grapheme_Base.js":261,"./Binary_Property/Grapheme_Extend.js":262,"./Binary_Property/Hex_Digit.js":263,"./Binary_Property/IDS_Binary_Operator.js":264,"./Binary_Property/IDS_Trinary_Operator.js":265,"./Binary_Property/ID_Continue.js":266,"./Binary_Property/ID_Start.js":267,"./Binary_Property/Ideographic.js":268,"./Binary_Property/Join_Control.js":269,"./Binary_Property/Logical_Order_Exception.js":270,"./Binary_Property/Lowercase.js":271,"./Binary_Property/Math.js":272,"./Binary_Property/Noncharacter_Code_Point.js":273,"./Binary_Property/Pattern_Syntax.js":274,"./Binary_Property/Pattern_White_Space.js":275,"./Binary_Property/Quotation_Mark.js":276,"./Binary_Property/Radical.js":277,"./Binary_Property/Regional_Indicator.js":278,"./Binary_Property/Sentence_Terminal.js":279,"./Binary_Property/Soft_Dotted.js":280,"./Binary_Property/Terminal_Punctuation.js":281,"./Binary_Property/Unified_Ideograph.js":282,"./Binary_Property/Uppercase.js":283,"./Binary_Property/Variation_Selector.js":284,"./Binary_Property/White_Space.js":285,"./Binary_Property/XID_Continue.js":286,"./Binary_Property/XID_Start.js":287,"./General_Category/Cased_Letter.js":288,"./General_Category/Close_Punctuation.js":289,"./General_Category/Connector_Punctuation.js":290,"./General_Category/Control.js":291,"./General_Category/Currency_Symbol.js":292,"./General_Category/Dash_Punctuation.js":293,"./General_Category/Decimal_Number.js":294,"./General_Category/Enclosing_Mark.js":295,"./General_Category/Final_Punctuation.js":296,"./General_Category/Format.js":297,"./General_Category/Initial_Punctuation.js":298,"./General_Category/Letter.js":299,"./General_Category/Letter_Number.js":300,"./General_Category/Line_Separator.js":301,"./General_Category/Lowercase_Letter.js":302,"./General_Category/Mark.js":303,"./General_Category/Math_Symbol.js":304,"./General_Category/Modifier_Letter.js":305,"./General_Category/Modifier_Symbol.js":306,"./General_Category/Nonspacing_Mark.js":307,"./General_Category/Number.js":308,"./General_Category/Open_Punctuation.js":309,"./General_Category/Other.js":310,"./General_Category/Other_Letter.js":311,"./General_Category/Other_Number.js":312,"./General_Category/Other_Punctuation.js":313,"./General_Category/Other_Symbol.js":314,"./General_Category/Paragraph_Separator.js":315,"./General_Category/Private_Use.js":316,"./General_Category/Punctuation.js":317,"./General_Category/Separator.js":318,"./General_Category/Space_Separator.js":319,"./General_Category/Spacing_Mark.js":320,"./General_Category/Surrogate.js":321,"./General_Category/Symbol.js":322,"./General_Category/Titlecase_Letter.js":323,"./General_Category/Unassigned.js":324,"./General_Category/Uppercase_Letter.js":325,"./Script/Adlam.js":326,"./Script/Ahom.js":327,"./Script/Anatolian_Hieroglyphs.js":328,"./Script/Arabic.js":329,"./Script/Armenian.js":330,"./Script/Avestan.js":331,"./Script/Balinese.js":332,"./Script/Bamum.js":333,"./Script/Bassa_Vah.js":334,"./Script/Batak.js":335,"./Script/Bengali.js":336,"./Script/Bhaiksuki.js":337,"./Script/Bopomofo.js":338,"./Script/Brahmi.js":339,"./Script/Braille.js":340,"./Script/Buginese.js":341,"./Script/Buhid.js":342,"./Script/Canadian_Aboriginal.js":343,"./Script/Carian.js":344,"./Script/Caucasian_Albanian.js":345,"./Script/Chakma.js":346,"./Script/Cham.js":347,"./Script/Cherokee.js":348,"./Script/Common.js":349,"./Script/Coptic.js":350,"./Script/Cuneiform.js":351,"./Script/Cypriot.js":352,"./Script/Cyrillic.js":353,"./Script/Deseret.js":354,"./Script/Devanagari.js":355,"./Script/Dogra.js":356,"./Script/Duployan.js":357,"./Script/Egyptian_Hieroglyphs.js":358,"./Script/Elbasan.js":359,"./Script/Elymaic.js":360,"./Script/Ethiopic.js":361,"./Script/Georgian.js":362,"./Script/Glagolitic.js":363,"./Script/Gothic.js":364,"./Script/Grantha.js":365,"./Script/Greek.js":366,"./Script/Gujarati.js":367,"./Script/Gunjala_Gondi.js":368,"./Script/Gurmukhi.js":369,"./Script/Han.js":370,"./Script/Hangul.js":371,"./Script/Hanifi_Rohingya.js":372,"./Script/Hanunoo.js":373,"./Script/Hatran.js":374,"./Script/Hebrew.js":375,"./Script/Hiragana.js":376,"./Script/Imperial_Aramaic.js":377,"./Script/Inherited.js":378,"./Script/Inscriptional_Pahlavi.js":379,"./Script/Inscriptional_Parthian.js":380,"./Script/Javanese.js":381,"./Script/Kaithi.js":382,"./Script/Kannada.js":383,"./Script/Katakana.js":384,"./Script/Kayah_Li.js":385,"./Script/Kharoshthi.js":386,"./Script/Khmer.js":387,"./Script/Khojki.js":388,"./Script/Khudawadi.js":389,"./Script/Lao.js":390,"./Script/Latin.js":391,"./Script/Lepcha.js":392,"./Script/Limbu.js":393,"./Script/Linear_A.js":394,"./Script/Linear_B.js":395,"./Script/Lisu.js":396,"./Script/Lycian.js":397,"./Script/Lydian.js":398,"./Script/Mahajani.js":399,"./Script/Makasar.js":400,"./Script/Malayalam.js":401,"./Script/Mandaic.js":402,"./Script/Manichaean.js":403,"./Script/Marchen.js":404,"./Script/Masaram_Gondi.js":405,"./Script/Medefaidrin.js":406,"./Script/Meetei_Mayek.js":407,"./Script/Mende_Kikakui.js":408,"./Script/Meroitic_Cursive.js":409,"./Script/Meroitic_Hieroglyphs.js":410,"./Script/Miao.js":411,"./Script/Modi.js":412,"./Script/Mongolian.js":413,"./Script/Mro.js":414,"./Script/Multani.js":415,"./Script/Myanmar.js":416,"./Script/Nabataean.js":417,"./Script/Nandinagari.js":418,"./Script/New_Tai_Lue.js":419,"./Script/Newa.js":420,"./Script/Nko.js":421,"./Script/Nushu.js":422,"./Script/Nyiakeng_Puachue_Hmong.js":423,"./Script/Ogham.js":424,"./Script/Ol_Chiki.js":425,"./Script/Old_Hungarian.js":426,"./Script/Old_Italic.js":427,"./Script/Old_North_Arabian.js":428,"./Script/Old_Permic.js":429,"./Script/Old_Persian.js":430,"./Script/Old_Sogdian.js":431,"./Script/Old_South_Arabian.js":432,"./Script/Old_Turkic.js":433,"./Script/Oriya.js":434,"./Script/Osage.js":435,"./Script/Osmanya.js":436,"./Script/Pahawh_Hmong.js":437,"./Script/Palmyrene.js":438,"./Script/Pau_Cin_Hau.js":439,"./Script/Phags_Pa.js":440,"./Script/Phoenician.js":441,"./Script/Psalter_Pahlavi.js":442,"./Script/Rejang.js":443,"./Script/Runic.js":444,"./Script/Samaritan.js":445,"./Script/Saurashtra.js":446,"./Script/Sharada.js":447,"./Script/Shavian.js":448,"./Script/Siddham.js":449,"./Script/SignWriting.js":450,"./Script/Sinhala.js":451,"./Script/Sogdian.js":452,"./Script/Sora_Sompeng.js":453,"./Script/Soyombo.js":454,"./Script/Sundanese.js":455,"./Script/Syloti_Nagri.js":456,"./Script/Syriac.js":457,"./Script/Tagalog.js":458,"./Script/Tagbanwa.js":459,"./Script/Tai_Le.js":460,"./Script/Tai_Tham.js":461,"./Script/Tai_Viet.js":462,"./Script/Takri.js":463,"./Script/Tamil.js":464,"./Script/Tangut.js":465,"./Script/Telugu.js":466,"./Script/Thaana.js":467,"./Script/Thai.js":468,"./Script/Tibetan.js":469,"./Script/Tifinagh.js":470,"./Script/Tirhuta.js":471,"./Script/Ugaritic.js":472,"./Script/Vai.js":473,"./Script/Wancho.js":474,"./Script/Warang_Citi.js":475,"./Script/Yi.js":476,"./Script/Zanabazar_Square.js":477,"./Script_Extensions/Adlam.js":478,"./Script_Extensions/Ahom.js":479,"./Script_Extensions/Anatolian_Hieroglyphs.js":480,"./Script_Extensions/Arabic.js":481,"./Script_Extensions/Armenian.js":482,"./Script_Extensions/Avestan.js":483,"./Script_Extensions/Balinese.js":484,"./Script_Extensions/Bamum.js":485,"./Script_Extensions/Bassa_Vah.js":486,"./Script_Extensions/Batak.js":487,"./Script_Extensions/Bengali.js":488,"./Script_Extensions/Bhaiksuki.js":489,"./Script_Extensions/Bopomofo.js":490,"./Script_Extensions/Brahmi.js":491,"./Script_Extensions/Braille.js":492,"./Script_Extensions/Buginese.js":493,"./Script_Extensions/Buhid.js":494,"./Script_Extensions/Canadian_Aboriginal.js":495,"./Script_Extensions/Carian.js":496,"./Script_Extensions/Caucasian_Albanian.js":497,"./Script_Extensions/Chakma.js":498,"./Script_Extensions/Cham.js":499,"./Script_Extensions/Cherokee.js":500,"./Script_Extensions/Common.js":501,"./Script_Extensions/Coptic.js":502,"./Script_Extensions/Cuneiform.js":503,"./Script_Extensions/Cypriot.js":504,"./Script_Extensions/Cyrillic.js":505,"./Script_Extensions/Deseret.js":506,"./Script_Extensions/Devanagari.js":507,"./Script_Extensions/Dogra.js":508,"./Script_Extensions/Duployan.js":509,"./Script_Extensions/Egyptian_Hieroglyphs.js":510,"./Script_Extensions/Elbasan.js":511,"./Script_Extensions/Elymaic.js":512,"./Script_Extensions/Ethiopic.js":513,"./Script_Extensions/Georgian.js":514,"./Script_Extensions/Glagolitic.js":515,"./Script_Extensions/Gothic.js":516,"./Script_Extensions/Grantha.js":517,"./Script_Extensions/Greek.js":518,"./Script_Extensions/Gujarati.js":519,"./Script_Extensions/Gunjala_Gondi.js":520,"./Script_Extensions/Gurmukhi.js":521,"./Script_Extensions/Han.js":522,"./Script_Extensions/Hangul.js":523,"./Script_Extensions/Hanifi_Rohingya.js":524,"./Script_Extensions/Hanunoo.js":525,"./Script_Extensions/Hatran.js":526,"./Script_Extensions/Hebrew.js":527,"./Script_Extensions/Hiragana.js":528,"./Script_Extensions/Imperial_Aramaic.js":529,"./Script_Extensions/Inherited.js":530,"./Script_Extensions/Inscriptional_Pahlavi.js":531,"./Script_Extensions/Inscriptional_Parthian.js":532,"./Script_Extensions/Javanese.js":533,"./Script_Extensions/Kaithi.js":534,"./Script_Extensions/Kannada.js":535,"./Script_Extensions/Katakana.js":536,"./Script_Extensions/Kayah_Li.js":537,"./Script_Extensions/Kharoshthi.js":538,"./Script_Extensions/Khmer.js":539,"./Script_Extensions/Khojki.js":540,"./Script_Extensions/Khudawadi.js":541,"./Script_Extensions/Lao.js":542,"./Script_Extensions/Latin.js":543,"./Script_Extensions/Lepcha.js":544,"./Script_Extensions/Limbu.js":545,"./Script_Extensions/Linear_A.js":546,"./Script_Extensions/Linear_B.js":547,"./Script_Extensions/Lisu.js":548,"./Script_Extensions/Lycian.js":549,"./Script_Extensions/Lydian.js":550,"./Script_Extensions/Mahajani.js":551,"./Script_Extensions/Makasar.js":552,"./Script_Extensions/Malayalam.js":553,"./Script_Extensions/Mandaic.js":554,"./Script_Extensions/Manichaean.js":555,"./Script_Extensions/Marchen.js":556,"./Script_Extensions/Masaram_Gondi.js":557,"./Script_Extensions/Medefaidrin.js":558,"./Script_Extensions/Meetei_Mayek.js":559,"./Script_Extensions/Mende_Kikakui.js":560,"./Script_Extensions/Meroitic_Cursive.js":561,"./Script_Extensions/Meroitic_Hieroglyphs.js":562,"./Script_Extensions/Miao.js":563,"./Script_Extensions/Modi.js":564,"./Script_Extensions/Mongolian.js":565,"./Script_Extensions/Mro.js":566,"./Script_Extensions/Multani.js":567,"./Script_Extensions/Myanmar.js":568,"./Script_Extensions/Nabataean.js":569,"./Script_Extensions/Nandinagari.js":570,"./Script_Extensions/New_Tai_Lue.js":571,"./Script_Extensions/Newa.js":572,"./Script_Extensions/Nko.js":573,"./Script_Extensions/Nushu.js":574,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":575,"./Script_Extensions/Ogham.js":576,"./Script_Extensions/Ol_Chiki.js":577,"./Script_Extensions/Old_Hungarian.js":578,"./Script_Extensions/Old_Italic.js":579,"./Script_Extensions/Old_North_Arabian.js":580,"./Script_Extensions/Old_Permic.js":581,"./Script_Extensions/Old_Persian.js":582,"./Script_Extensions/Old_Sogdian.js":583,"./Script_Extensions/Old_South_Arabian.js":584,"./Script_Extensions/Old_Turkic.js":585,"./Script_Extensions/Oriya.js":586,"./Script_Extensions/Osage.js":587,"./Script_Extensions/Osmanya.js":588,"./Script_Extensions/Pahawh_Hmong.js":589,"./Script_Extensions/Palmyrene.js":590,"./Script_Extensions/Pau_Cin_Hau.js":591,"./Script_Extensions/Phags_Pa.js":592,"./Script_Extensions/Phoenician.js":593,"./Script_Extensions/Psalter_Pahlavi.js":594,"./Script_Extensions/Rejang.js":595,"./Script_Extensions/Runic.js":596,"./Script_Extensions/Samaritan.js":597,"./Script_Extensions/Saurashtra.js":598,"./Script_Extensions/Sharada.js":599,"./Script_Extensions/Shavian.js":600,"./Script_Extensions/Siddham.js":601,"./Script_Extensions/SignWriting.js":602,"./Script_Extensions/Sinhala.js":603,"./Script_Extensions/Sogdian.js":604,"./Script_Extensions/Sora_Sompeng.js":605,"./Script_Extensions/Soyombo.js":606,"./Script_Extensions/Sundanese.js":607,"./Script_Extensions/Syloti_Nagri.js":608,"./Script_Extensions/Syriac.js":609,"./Script_Extensions/Tagalog.js":610,"./Script_Extensions/Tagbanwa.js":611,"./Script_Extensions/Tai_Le.js":612,"./Script_Extensions/Tai_Tham.js":613,"./Script_Extensions/Tai_Viet.js":614,"./Script_Extensions/Takri.js":615,"./Script_Extensions/Tamil.js":616,"./Script_Extensions/Tangut.js":617,"./Script_Extensions/Telugu.js":618,"./Script_Extensions/Thaana.js":619,"./Script_Extensions/Thai.js":620,"./Script_Extensions/Tibetan.js":621,"./Script_Extensions/Tifinagh.js":622,"./Script_Extensions/Tirhuta.js":623,"./Script_Extensions/Ugaritic.js":624,"./Script_Extensions/Vai.js":625,"./Script_Extensions/Wancho.js":626,"./Script_Extensions/Warang_Citi.js":627,"./Script_Extensions/Yi.js":628,"./Script_Extensions/Zanabazar_Square.js":629,"./index.js":630,"./unicode-version.js":631};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=234}}]);