(this["webpackJsonpreact-currency-calculator"]=this["webpackJsonpreact-currency-calculator"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),l=(c(9),c(10),c(0)),o=function(e){var t=e.children;return Object(l.jsx)("main",{className:"container",children:t})},u=c(2),i=(c(12),[{EUR:4.4278},{CHF:4.2525},{USD:3.9012},{GBP:5.3782}]),j=(c(13),function(e){var t=e.result;return Object(l.jsx)("p",{className:"result",children:void 0!==t&&Object(l.jsxs)(l.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(l.jsxs)("strong",{children:[t.targetResult.toFixed(2),"\xa0",t.currency]})]})})}),b=(c(14),function(e){var t=e.name,c=e.year;return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("p",{className:"footer__paragraph",children:["Coded by ",t," \xa9 ",c]})})}),d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(i[0].short),s=Object(u.a)(a,2),o=s[0],d=s[1],m=Object(n.useState)(),f=Object(u.a)(m,2),h=f[0],O=f[1],x=function(e,t){var c=i.find((function(e){return e.short===t})).value;O({sourceAmount:+e,targetResult:e/c,currency:t})};return Object(l.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),x(c,o),r("")},children:Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{className:"form__legend",children:"Currency calculator"}),Object(l.jsx)("p",{className:"form__adnotation",children:"Required fields mark *."}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"PLN Amount*: "}),Object(l.jsx)("input",{value:c,onChange:function(e){var t=e.target;return r(t.value)},className:"form__field",type:"number",step:"0.01",required:!0})]}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Exchange currency*: "}),Object(l.jsx)("select",{className:"form__field",name:"currency",value:o,onChange:function(e){var t=e.target;return d(t.value)},children:i.map((function(e){return Object(l.jsx)("option",{value:e.short,children:e.short},e.short)}))})]}),Object(l.jsx)("div",{className:"form__buttonContainer",children:Object(l.jsx)("button",{className:"form__button",children:"Count"})}),Object(l.jsx)("div",{className:"result",children:Object(l.jsx)(j,{calculateResult:x,result:h})}),Object(l.jsx)(b,{name:"Patryk Krawczyk",year:"2021"})]})})};var m=function(){return Object(l.jsx)(o,{children:Object(l.jsx)(d,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.684e252c.chunk.js.map