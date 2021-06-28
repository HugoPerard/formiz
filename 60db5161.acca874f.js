(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(83)),i={id:"formiz-step",title:"<FormizStep> component"},p={unversionedId:"core/formiz-step",id:"core/formiz-step",isDocsHomePage:!1,title:"<FormizStep> component",description:"Import",source:"@site/docs/core/FormizStep-component.mdx",slug:"/core/formiz-step",permalink:"/docs/core/formiz-step",editUrl:"https://github.com/ivan-dalmet/formiz/edit/master/documentation/docs/core/FormizStep-component.mdx",version:"current",sidebar:"docs",previous:{title:"<Formiz> component",permalink:"/docs/core/formiz"},next:{title:"useForm() hook",permalink:"/docs/core/use-form"}},l=[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[{value:"name *",id:"name-",children:[]},{value:"as",id:"as",children:[]},{value:"label",id:"label",children:[]},{value:"isEnabled",id:"isenabled",children:[]},{value:"order",id:"order",children:[]},{value:"autoHide",id:"autohide",children:[]}]}],c={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { FormizStep } from '@formiz/core'\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"name-"},"name *"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Required")),Object(a.b)("p",null,"The name is required to register the step in the form."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"as"},"as"),Object(a.b)("p",null,"You can pass the tag for the step container. Default is ",Object(a.b)("inlineCode",{parentName:"p"},"'div'"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" as={View}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"label"},"label"),Object(a.b)("p",null,"A label can be passed to the step and then used for display when getting the steps with the ",Object(a.b)("inlineCode",{parentName:"p"},"useForm()")," hook."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Formiz>\n  <FormizStep name="step1" label="First step">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" label="Second step">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"isenabled"},"isEnabled"),Object(a.b)("p",null,"Set if the step should be enabled or not (default is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{/* Display: `step1` > `step3`. */}\n<Formiz>\n  <FormizStep name="step1">\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" isEnabled={false}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3">\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"order"},"order"),Object(a.b)("p",null,"Order is a number to display the steps in the correct order. (default is ",Object(a.b)("inlineCode",{parentName:"p"},"0"),")",Object(a.b)("br",null),"\nIf you use order, all steps should get an order property to prevent unexpected behavior."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{/* Display order: `step2` > `step3` > `step1`. */}\n<Formiz>\n  <FormizStep name="step1" order={3}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step2" order={1}>\n    {/* Your fields here */}\n  </FormizStep>\n  <FormizStep name="step3" order={2}>\n    {/* Your fields here */}\n  </FormizStep>\n</Formiz>\n')),Object(a.b)("h3",{id:"autohide"},"autoHide"),Object(a.b)("p",null,"autoHide is a boolean that allows you to toggle the default style to display the step.\nDefault value is ",Object(a.b)("inlineCode",{parentName:"p"},"true")," and will apply a ",Object(a.b)("inlineCode",{parentName:"p"},"display: none")," on inactive steps."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// Example with Collapse from Chakra UI\nimport {\xa0Collapse } from '@chakra-ui/react'\n\nconst MyExample = () => {\n  const form = useForm();\n\n  return (\n    <Formiz connect={form}>\n      <Collapse in={form?.currentStep?.name === 'step1'}>\n        <FormizStep autoHide={false} name=\"step1\" order={3}>\n          {/* Your fields here */}\n        </FormizStep>\n      </Collapse>\n      <Collapse in={form?.currentStep?.name === 'step2'}>\n        <FormizStep autoHide={false} name=\"step2\" order={1}>\n          {/* Your fields here */}\n        </FormizStep>\n      </Collapse>\n    </Formiz>\n  )\n}\n")))}s.isMDXComponent=!0},83:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.a.createElement(b,p(p({ref:t},c),{},{components:r})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);