(this["webpackJsonpreact-currency-calculator"]=this["webpackJsonpreact-currency-calculator"]||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,u,d,s,l,b,j,x,h,m,f,p,g,O,w,y,v,k=t(1),C=t.n(k),S=t(22),I=t.n(S),E=t(3),F=t(2),A=F.d.main(r||(r=Object(E.a)(["\n    width: 100%;\n    max-width: ","px;\n    padding: 8px;\n\n    @media (max-width: ","px) {\n        margin: auto;\n    }\n"])),(function(n){return n.theme.breakpoint.maxWidth}),(function(n){return n.theme.breakpoint.mobileMax})),M=t(0),N=function(n){var e=n.children;return Object(M.jsx)(A,{children:e})},z=t(5),B=F.d.label(o||(o=Object(E.a)(["\n    margin-bottom: 15px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),D=F.d.span(a||(a=Object(E.a)(["\n    font-weight: bold;\n    padding: 10px;\n    max-width: 350px;\n\n    @media (max-width: ","px) {\n        width: 100%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),L=F.d.input(c||(c=Object(E.a)(["\n    text-align: center;\n    padding: 10px;\n    border-radius: 30px;\n    border: none;\n    background: ",";\n    box-shadow: 20px 20px 60px ",";\n\n    @media (max-width: ","px) {\n        width: 100%;\n        border: 1px solid ",";\n    }\n\n    &:required {\n        border: 1px solid ",";\n        background: ",";\n    }\n    &:required:hover {\n        border: 1px solid ",";\n    }\n    &:invalid{\n        background: ","\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.gray}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.pink})),q=function(n){var e=n.fieldName,t=n.name,r=n.value,o=n.onChange,a=n.option;return Object(M.jsxs)(B,{children:[Object(M.jsx)(D,{children:e}),Object(M.jsx)(L,{as:"select",name:t,value:r,onChange:o,children:a})]})},P=function(n){var e=n.fieldName,t=n.value,r=n.onChange;return Object(M.jsxs)(B,{children:[Object(M.jsx)(D,{children:e}),Object(M.jsx)(L,{min:"0.01",value:t,onChange:r,type:"number",step:"0.01",required:!0,placeholder:"Write your amount"})]})},T=F.d.fieldset(i||(i=Object(E.a)(["\n    border-radius: 20px;\n    background: ",";\n    border: none;\n"])),(function(n){return n.theme.color.white})),R=F.d.h1(u||(u=Object(E.a)(["\n    color: ",";\n    padding: 10px;\n    text-align: center;\n    margin: 0;\n"])),(function(n){return n.theme.color.blue})),W=F.d.p(d||(d=Object(E.a)(["\n    text-align: right;\n    padding: 5px;\n    color: ",";\n\n    ","\n"])),(function(n){return n.theme.color.red}),(function(n){return n.date&&Object(F.c)(s||(s=Object(E.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.color.black}))})),_=F.d.div(l||(l=Object(E.a)(["\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-gap: 10px;\nmargin: 10px 0;\n\n    ","\n\n    ","\n\n@media(max-width: 767px) {\n    grid-auto-flow: row;\n}\n"])),(function(n){return n.button&&Object(F.c)(b||(b=Object(E.a)(["\n        justify-items: end;\n    "])))}),(function(n){return n.result&&Object(F.c)(j||(j=Object(E.a)(["\n        max-width: fit-content;\n        margin: 5px auto;\n    "])))})),J=F.d.button(x||(x=Object(E.a)(["\npadding: 10px;\nmax-width: 163px;\nwidth: 100%;\ncolor: ",";\nbackground: transparent;\ncursor: pointer;\ntransition: ease-out 0.5s;\nborder-radius: 30px;\nborder: 2px solid ",";\n\n@media(max-width: ","px) {\n    margin-bottom: 10px;\n}\n\n    &:hover {\n    color: ",";\n    box-shadow: inset 0-100px 0 0 ",";\n}\n\n    &:active {\n    transform: scale(0.9);\n}\n"])),(function(n){return n.theme.color.blue}),(function(n){return n.theme.color.blue}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.blue})),U=F.d.p(h||(h=Object(E.a)(["\n    margin: 0;\n    color: hsl(0, 0%, 100%);\n    padding: 10px;\n    font-size: 20px;\n    background: ",";\n    border-radius: 30px;\n    box-shadow: 20px 20px 60px ",";\n"])),(function(n){return n.theme.color.blue}),(function(n){return n.theme.color.gray})),G=function(n){var e=n.result;return!!e&&Object(M.jsxs)(U,{className:"result__text",children:[e.sourceAmount.toFixed(2),"\xa0",e.ownedCurrency,"\xa0="," ",Object(M.jsxs)("strong",{children:[e.targetResult.toFixed(2),"\xa0",e.targetCurrency]})]})},K=F.d.footer(m||(m=Object(E.a)(["\n    padding: 5px;\n    text-align: center;\n"]))),Y=function(n){var e=n.name,t=n.year;return Object(M.jsx)(K,{className:"footer",children:Object(M.jsxs)("p",{children:["Coded by"," ",e," \xa9 ",t]})})},H=F.d.p(f||(f=Object(E.a)(["\n    padding: 5px;\n    font-weight: bold;\n    margin: 0;\n    text-align: right;\n"]))),Q=function(n){return n.toLocaleString("en-GB",{weekday:"long",hour:"numeric",minute:"numeric",second:"numeric",day:"numeric",month:"short",year:"numeric"})},V=function(){var n=function(){var n=Object(k.useState)(new Date),e=Object(z.a)(n,2),t=e[0],r=e[1];return Object(k.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(M.jsx)(H,{children:Q(n)})},X=t(11),Z=t.n(X),$=t(26),nn=t(27),en=t.n(nn),tn=F.d.div(p||(p=Object(E.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    background-color: ",";\n    border-radius: 30px;\n    padding: 10px;\n"])),(function(n){return n.theme.color.white})),rn=F.d.p(g||(g=Object(E.a)(["\n    text-align: center;\n    font-weight: bold;\n    word-spacing: 3px;\n    line-height: 1.5;\n\n    ","\n\n    @media (max-width: ","px){\n        word-spacing: normal;\n        margin: 0.5em;\n    }\n"])),(function(n){return n.error&&Object(F.c)(O||(O=Object(E.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.color.red}))}),(function(n){return n.theme.breakpoint.mobileMax})),on=function(n){var e=n.textInfo,t=n.loading,r=n.error,o=n.failed,a=n.additionalInfo;return Object(M.jsxs)(tn,{children:[Object(M.jsxs)(rn,{error:r,children:[e,Object(M.jsx)("br",{}),a]}),t,o]})},an=F.d.div(w||(w=Object(E.a)(["\n    width: 3.5em;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n\n    @keyframes fade {\n    from {\n        opacity: 1;\n        }\n    to {\n        opacity: 0;\n        }\n    }\n"]))),cn=F.d.div(y||(y=Object(E.a)(["\n    width: 0.8em;\n    height: 0.8em;\n    border-radius: 50%;\n    background-color: ",";\n    animation: fade 0.8s ease-in-out alternate infinite;\n\n    &:nth-of-type(1) {\n        animation-delay: -0.4s;\n    }\n\n    &:nth-of-type(2) {\n        animation-delay: -0.2s;\n    }\n"])),(function(n){return n.theme.color.red})),un=function(){return Object(M.jsxs)(an,{children:[Object(M.jsx)(cn,{}),Object(M.jsx)(cn,{}),Object(M.jsx)(cn,{})]})},dn=F.d.span(v||(v=Object(E.a)(["\n    font-size: 50px;\n    color: ",";\n"])),(function(n){return n.theme.color.red})),sn=function(){return Object(M.jsx)(dn,{className:"material-icons",children:"report_problem"})},ln=function(){var n=function(){caches.keys();var n=Object(k.useState)({state:"loading"}),e=Object(z.a)(n,2),t=e[0],r=e[1];return Object(k.useEffect)((function(){setTimeout(function(){var n=Object($.a)(Z.a.mark((function n(){var e,t,o,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,en.a.get("https://api.exchangerate.host/latest",{headers:{"Access-Control-Allow-Origin":"*","Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"}});case 3:return e=n.sent,n.next=6,e.data;case 6:t=n.sent,o=t.rates,a=t.date,r({state:"success",rates:o,date:a}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({state:"error"});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),2e3)}),[]),t}(),e=Object(k.useState)(""),t=Object(z.a)(e,2),r=t[0],o=t[1],a=Object(k.useState)(),c=Object(z.a)(a,2),i=c[0],u=c[1],d=Object(k.useState)("EUR"),s=Object(z.a)(d,2),l=s[0],b=s[1],j=Object(k.useState)("USD"),x=Object(z.a)(j,2),h=x[0],m=x[1];Object(k.useEffect)((function(){document.title="Calculate from ".concat(l," to ").concat(h)}),[l,h]);return Object(M.jsx)("form",{onSubmit:function(e,t,a){e.preventDefault(),function(e){var t=n.rates[l],r=n.rates[h];u({sourceAmount:+e,targetResult:e*(t/r),ownedCurrency:l,targetCurrency:h})}(r),o("")},children:Object(M.jsxs)(T,{children:[Object(M.jsx)(V,{}),Object(M.jsx)(R,{children:"Currency calculator"}),"loading"===n.state&&Object(M.jsx)(on,{textInfo:"Loadnig current exchange rates from European Central Bank.",loading:Object(M.jsx)(un,{})}),"error"===n.state&&Object(M.jsx)(on,{textInfo:"Sorry, something went wrong. Check you Internet connection. If it's ok, the error in on our side.",additionalInfo:"You may refresh the page or try again later.",error:!0,failed:Object(M.jsx)(sn,{})}),"success"===n.state&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(W,{children:"*Fields required"}),Object(M.jsxs)(_,{children:[Object(M.jsx)(q,{fieldName:"From*: ",name:"currency",value:l,onChange:function(n){var e=n.target;return b(e.value)},option:!!n.rates&&Object.keys(n.rates).map((function(n){return Object(M.jsx)("option",{value:n,children:n},n)}))}),Object(M.jsx)(q,{fieldName:"To*: ",name:"currency",value:h,onChange:function(n){var e=n.target;return m(e.value)},option:!!n.rates&&Object.keys(n.rates).map((function(n){return Object(M.jsx)("option",{value:n,children:n},n)}))}),Object(M.jsx)(P,{fieldName:"".concat(l," Amount*: "),value:r,onChange:function(n){var e=n.target;return o(e.value)}})]}),Object(M.jsx)(_,{button:!0,children:Object(M.jsx)(J,{children:"Calculate"})}),Object(M.jsx)(_,{result:!0,children:Object(M.jsx)(G,{result:i})}),Object(M.jsxs)(W,{date:!0,children:["Exchange rates valid as of:",Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:n.date})]})]}),Object(M.jsx)(Y,{name:"Patryk Krawczyk",year:"2021"})]})})};var bn,jn=function(){return Object(M.jsx)(N,{children:Object(M.jsx)(ln,{})})},xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))},hn=t.p+"static/media/currency-background.9aad8888.png",mn=Object(F.b)(bn||(bn=Object(E.a)(['\n        *, ::after, ::before {\n            box-sizing: inherit;\n        }\n\n        #root {\n            background: url("',"\");\n            background-repeat: no-repeat;\n            background-size: cover;\n            box-sizing: border-box; \n            min-height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        body {\n            font-family: 'Lato', sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n}\n"])),hn);I.a.render(Object(M.jsx)(C.a.StrictMode,{children:Object(M.jsxs)(F.a,{theme:{color:{black:"#000",gray:"#6A6262",white:"#fff",red:"#FE4A49",blue:"#0353A4",pink:"#E5B4BB"},breakpoint:{mobileMax:767,maxWidth:1024}},children:[Object(M.jsx)(mn,{}),Object(M.jsx)(jn,{})]})}),document.getElementById("root")),xn()}},[[52,1,2]]]);
//# sourceMappingURL=main.19021063.chunk.js.map