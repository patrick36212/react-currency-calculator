(this["webpackJsonpreact-currency-calculator"]=this["webpackJsonpreact-currency-calculator"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),l=(n(9),n(10),n(0)),o=function(e){var t=e.children;return Object(l.jsx)("main",{className:"container",children:t})},u=n(2),i=(n(12),[{name:"Euro",short:"EUR",value:4.4278},{name:"Franc",short:"CHF",value:4.2525},{name:"Dollar",short:"USD",value:3.9012},{name:"Pound",short:"GBP",value:5.3782}]),j=(n(13),function(e){var t=e.result;return Object(l.jsx)("p",{className:"result",children:void 0!==t&&Object(l.jsxs)(l.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(l.jsxs)("strong",{children:[t.targetResult.toFixed(2),"\xa0",t.currency]})]})})}),m=(n(14),function(e){var t=e.name,n=e.year;return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("p",{className:"footer__paragraph",children:["Coded by ",t," \xa9 ",n]})})}),b=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(i[0].short),s=Object(u.a)(a,2),o=s[0],b=s[1],d=Object(r.useState)(),f=Object(u.a)(d,2),h=f[0],O=f[1],x=function(e,t){var n=i.find((function(e){return e.short===t})).value;O({sourceAmount:+e,targetResult:e/n,currency:t})};return Object(l.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),x(n,o),c("")},children:Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{className:"form__legend",children:"Currency calculator"}),Object(l.jsx)("p",{className:"form__adnotation",children:"Required fields mark *."}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"PLN Amount*: "}),Object(l.jsx)("input",{value:n,onChange:function(e){var t=e.target;return c(t.value)},className:"form__field",type:"number",step:"0.01",required:!0})]}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Exchange currency*: "}),Object(l.jsx)("select",{className:"form__field",name:"currency",value:o,onChange:function(e){var t=e.target;return b(t.value)},children:i.map((function(e){return Object(l.jsx)("option",{value:e.short,children:e.short},e.short)}))})]}),Object(l.jsx)("div",{className:"form__buttonContainer",children:Object(l.jsx)("button",{className:"form__button",children:"Count"})}),Object(l.jsx)("div",{className:"result",children:Object(l.jsx)(j,{calculateResult:x,result:h})}),Object(l.jsx)(m,{name:"Patryk Krawczyk",year:"2021"})]})})};var d=function(){return Object(l.jsx)(o,{children:Object(l.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.772f8ac8.chunk.js.map