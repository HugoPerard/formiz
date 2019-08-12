(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{38:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return i}),n.d(t,"rightToc",function(){return b}),n.d(t,"default",function(){return u});n(0);var o=n(56);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"formiz",title:"<Formiz> component"},b=[{value:"Props",id:"props",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Handle API errors",id:"handle-api-errors",children:[]}],c={rightToc:b},l="wrapper";function u(e){var t=e.components,n=r(e,["components"]);return Object(o.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h4",{id:"onsubmitvalues-actions"},Object(o.b)("inlineCode",{parentName:"h4"},"onSubmit(values, actions)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(o.b)("strong",{parentName:"p"},"submitted"),".")),Object(o.b)("h4",{id:"onvalidsubmitvalues-actions"},Object(o.b)("inlineCode",{parentName:"h4"},"onValidSubmit(values, actions)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(o.b)("strong",{parentName:"p"},"valid")," and ",Object(o.b)("strong",{parentName:"p"},"submitted"),".")),Object(o.b)("h4",{id:"oninvalidsubmitvalues-actions"},Object(o.b)("inlineCode",{parentName:"h4"},"onInvalidSubmit(values, actions)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(o.b)("strong",{parentName:"p"},"invalid")," and ",Object(o.b)("strong",{parentName:"p"},"submitted"),".")),Object(o.b)("h4",{id:"onchangevalues-actions"},Object(o.b)("inlineCode",{parentName:"h4"},"onChange(values, actions)")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered every time the form change.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"⚠️ This is triggered when each field is mounted.\nℹ️ You can get ",Object(o.b)("inlineCode",{parentName:"p"},"values")," of the form with the useForm() hook.")),Object(o.b)("h4",{id:"onvalid"},Object(o.b)("inlineCode",{parentName:"h4"},"onValid()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(o.b)("strong",{parentName:"p"},"valid"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"ℹ️ You can get ",Object(o.b)("inlineCode",{parentName:"p"},"isValid")," value with the useForm() hook.")),Object(o.b)("h4",{id:"oninvalid"},Object(o.b)("inlineCode",{parentName:"h4"},"onInvalid()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Triggered when the form is ",Object(o.b)("strong",{parentName:"p"},"invalid"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"ℹ️ You can get ",Object(o.b)("inlineCode",{parentName:"p"},"isValid")," value with the useForm() hook.")),Object(o.b)("h4",{id:"autoform"},Object(o.b)("inlineCode",{parentName:"h4"},"autoForm")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to auto add a ",Object(o.b)("inlineCode",{parentName:"p"},"<form>")," element with auto onSubmit.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"ℹ️ You can get the ",Object(o.b)("inlineCode",{parentName:"p"},"submit()")," method with the useForm() hook.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"onSubmit()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onValidSubmit()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"onInvalidSubmit()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"onChange()")," props get a second argument of ",Object(o.b)("inlineCode",{parentName:"p"},"actions")," which is an object of actions that you can apply to the form."),Object(o.b)("h4",{id:"actionsinvalidatefields"},Object(o.b)("inlineCode",{parentName:"h4"},"actions.invalidateFields()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"// TODO")),Object(o.b)("h4",{id:"actionsresetform"},Object(o.b)("inlineCode",{parentName:"h4"},"actions.resetForm()")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"// TODO")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"handle-api-errors"},"Handle API errors"),Object(o.b)("p",null,"// TODO"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"<Formiz\n  onValidSubmit={(values, { invalidateFields }) => {\n    invalidateFields({\n      fieldName: 'Error message',\n    })\n  }}\n/>\n  // Put your fields here\n</Formiz>\n")))}u.isMDXComponent=!0},56:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return p});var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){return a.a.createElement(a.a.Fragment,{},e.children)}},u=function(e){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(t);return a.a.createElement(c[r+"."+n]||c[n]||l[n]||o,t?Object.assign({},b,{components:t}):b)};function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b[c]="string"==typeof e?e:o,i[1]=b;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);