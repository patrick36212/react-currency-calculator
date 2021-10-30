(this["webpackJsonpreact-currency-calculator"]=this["webpackJsonpreact-currency-calculator"]||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,u,d,s,l,b,x,j,h,m,f,p,g,O,w,y,v,k=t(1),C=t.n(k),S=t(22),I=t.n(S),F=t(3),E=t(2),M=E.d.main(r||(r=Object(F.a)(["\n    width: 100%;\n    max-width: ","px;\n    padding: 8px;\n\n    @media (max-width: ","px) {\n        margin: auto;\n    }\n"])),(function(n){return n.theme.breakpoint.maxWidth}),(function(n){return n.theme.breakpoint.mobileMax})),N=t(0),z=function(n){var e=n.children;return Object(N.jsx)(M,{children:e})},B=t(5),A=t(11),D=t.n(A),L=t(26),q=t(27),T=t.n(q),P=function(){var n=Object(k.useState)({state:"loading"}),e=Object(B.a)(n,2),t=e[0],r=e[1];return Object(k.useEffect)((function(){setTimeout(function(){var n=Object(L.a)(D.a.mark((function n(){var e,t,a,c;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.a.get("https://api.exchangerate.host/latest");case 3:return e=n.sent,n.next=6,e.data;case 6:t=n.sent,a=t.rates,c=t.date,r({state:"success",rates:a,date:c}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r({state:"error"});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),1e3)}),[]),t},R=E.d.label(a||(a=Object(F.a)(["\n    margin-bottom: 15px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),W=E.d.span(c||(c=Object(F.a)(["\n    font-weight: bold;\n    padding: 10px;\n    max-width: 350px;\n\n    @media (max-width: ","px) {\n        width: 100%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),_=E.d.input(o||(o=Object(F.a)(["\n    text-align: center;\n    padding: 10px;\n    border-radius: 30px;\n    border: none;\n    background: ",";\n    box-shadow: 20px 20px 60px ",";\n\n    @media (max-width: ","px) {\n        width: 100%;\n        border: 1px solid ",";\n        text-align: center;\n    }\n\n    &:required {\n        border: 1px solid ",";\n        background: ",";\n    }\n    &:required:hover {\n        border: 1px solid ",";\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.gray}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.pink}),(function(n){return n.theme.color.pink}),(function(n){return n.theme.color.black})),J=function(n){var e=n.fieldName,t=n.name,r=n.value,a=n.onChange,c=P();return Object(N.jsxs)(R,{children:[Object(N.jsx)(W,{children:e}),Object(N.jsx)(_,{as:"select",name:t,value:r,onChange:a,children:!!c.rates&&Object.keys(c.rates).map((function(n){return Object(N.jsx)("option",{value:n,children:n},n)}))})]})},U=function(n){var e=n.fieldName,t=n.value,r=n.onChange;return Object(N.jsxs)(R,{children:[Object(N.jsx)(W,{children:e}),Object(N.jsx)(_,{min:"0.01",value:t,onChange:r,type:"number",step:"0.01",required:!0,placeholder:"Write your amount"})]})},G=E.d.fieldset(i||(i=Object(F.a)(["\n    border-radius: 20px;\n    background: ",";\n    border: none;\n"])),(function(n){return n.theme.color.white})),K=E.d.h1(u||(u=Object(F.a)(["\n    color: ",";\n    padding: 10px;\n    text-align: center;\n    margin: 0;\n"])),(function(n){return n.theme.color.blue})),Y=E.d.p(d||(d=Object(F.a)(["\n    text-align: right;\n    padding: 5px;\n    color: ",";\n\n    ","\n"])),(function(n){return n.theme.color.red}),(function(n){return n.date&&Object(E.c)(s||(s=Object(F.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.color.black}))})),H=E.d.div(l||(l=Object(F.a)(["\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-gap: 10px;\nmargin: 10px 0;\n\n    ","\n\n    ","\n\n@media(max-width: 767px) {\n    grid-auto-flow: row;\n}\n"])),(function(n){return n.button&&Object(E.c)(b||(b=Object(F.a)(["\n        justify-items: end;\n    "])))}),(function(n){return n.result&&Object(E.c)(x||(x=Object(F.a)(["\n        max-width: fit-content;\n        margin: 5px auto;\n    "])))})),Q=E.d.button(j||(j=Object(F.a)(["\npadding: 10px;\nmax-width: 163px;\nwidth: 100%;\ncolor: ",";\nbackground: transparent;\ncursor: pointer;\ntransition: ease-out 0.5s;\nborder-radius: 30px;\nborder: 2px solid ",";\n\n@media(max-width: ","px) {\n    margin-bottom: 10px;\n}\n\n    &:hover {\n    color: ",";\n    box-shadow: inset 0-100px 0 0 ",";\n}\n\n    &:active {\n    transform: scale(0.9);\n}\n"])),(function(n){return n.theme.color.blue}),(function(n){return n.theme.color.blue}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.blue})),V=E.d.p(h||(h=Object(F.a)(["\n    margin: 0;\n    color: hsl(0, 0%, 100%);\n    padding: 10px;\n    font-size: 20px;\n    background: ",";\n    border-radius: 30px;\n    box-shadow: 20px 20px 60px ",";\n"])),(function(n){return n.theme.color.blue}),(function(n){return n.theme.color.gray})),X=function(n){var e=n.result;return!!e&&Object(N.jsxs)(V,{className:"result__text",children:[e.sourceAmount.toFixed(2),"\xa0",e.ownedCurrency,"\xa0="," ",Object(N.jsxs)("strong",{children:[e.targetResult.toFixed(2),"\xa0",e.targetCurrency]})]})},Z=E.d.footer(m||(m=Object(F.a)(["\n    padding: 5px;\n    text-align: center;\n"]))),$=function(n){var e=n.name,t=n.year;return Object(N.jsx)(Z,{className:"footer",children:Object(N.jsxs)("p",{children:["Coded by"," ",e," \xa9 ",t]})})},nn=E.d.p(f||(f=Object(F.a)(["\n    padding: 5px;\n    font-weight: bold;\n    margin: 0;\n    text-align: right;\n"]))),en=function(n){return n.toLocaleString("en-GB",{weekday:"long",hour:"numeric",minute:"numeric",second:"numeric",day:"numeric",month:"short",year:"numeric"})},tn=function(){var n=function(){var n=Object(k.useState)(new Date),e=Object(B.a)(n,2),t=e[0],r=e[1];return Object(k.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(N.jsx)(nn,{children:en(n)})},rn=E.d.div(p||(p=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    background-color: ",";\n    border-radius: 30px;\n    padding: 10px;\n"])),(function(n){return n.theme.color.white})),an=E.d.p(g||(g=Object(F.a)(["\n    text-align: center;\n    font-weight: bold;\n    word-spacing: 3px;\n    line-height: 1.5;\n\n    ","\n\n    @media (max-width: ","px){\n        word-spacing: normal;\n        margin: 0.5em;\n    }\n"])),(function(n){return n.error&&Object(E.c)(O||(O=Object(F.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.color.red}))}),(function(n){return n.theme.breakpoint.mobileMax})),cn=function(n){var e=n.textInfo,t=n.loading,r=n.error,a=n.failed,c=n.additionalInfo;return Object(N.jsxs)(rn,{children:[Object(N.jsxs)(an,{error:r,children:[e,Object(N.jsx)("br",{}),c]}),t,a]})},on=E.d.div(w||(w=Object(F.a)(["\n    width: 3.5em;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n\n    @keyframes fade {\n    from {\n        opacity: 1;\n        }\n    to {\n        opacity: 0;\n        }\n    }\n"]))),un=E.d.div(y||(y=Object(F.a)(["\n    width: 0.8em;\n    height: 0.8em;\n    border-radius: 50%;\n    background-color: ",";\n    animation: fade 0.8s ease-in-out alternate infinite;\n\n    &:nth-of-type(1) {\n        animation-delay: -0.4s;\n    }\n\n    &:nth-of-type(2) {\n        animation-delay: -0.2s;\n    }\n"])),(function(n){return n.theme.color.red})),dn=function(){return Object(N.jsxs)(on,{children:[Object(N.jsx)(un,{}),Object(N.jsx)(un,{}),Object(N.jsx)(un,{})]})},sn=E.d.span(v||(v=Object(F.a)(["\n    font-size: 50px;\n    color: ",";\n"])),(function(n){return n.theme.color.red})),ln=function(){return Object(N.jsx)(sn,{className:"material-icons",children:"report_problem"})},bn=function(){var n=P(),e=Object(k.useState)(""),t=Object(B.a)(e,2),r=t[0],a=t[1],c=Object(k.useState)(),o=Object(B.a)(c,2),i=o[0],u=o[1],d=Object(k.useState)("EUR"),s=Object(B.a)(d,2),l=s[0],b=s[1],x=Object(k.useState)("USD"),j=Object(B.a)(x,2),h=j[0],m=j[1];Object(k.useEffect)((function(){document.title="Calculate from ".concat(l," to ").concat(h)}),[l,h]);return Object(N.jsx)("form",{onSubmit:function(e,t,c){e.preventDefault(),function(e){var t=n.rates[l],r=n.rates[h];u({sourceAmount:+e,targetResult:e*(t/r),ownedCurrency:l,targetCurrency:h})}(r),a("")},children:Object(N.jsxs)(G,{children:[Object(N.jsx)(tn,{}),Object(N.jsx)(K,{children:"Currency calculator"}),"loading"===n.state&&Object(N.jsx)(cn,{textInfo:"Loadnig current exchange rates from European Central Bank.",loading:Object(N.jsx)(dn,{})}),"error"===n.state&&Object(N.jsx)(cn,{textInfo:"Sorry, something went wrong. Check you Internet connection. If it's ok, the error in on our side.",additionalInfo:"You may refresh the page or try again later.",error:!0,failed:Object(N.jsx)(ln,{})}),"success"===n.state&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Y,{children:"*Fields required"}),Object(N.jsxs)(H,{children:[Object(N.jsx)(J,{fieldName:"From*: ",name:"currency",value:l,onChange:function(n){var e=n.target;return b(e.value)}}),Object(N.jsx)(J,{fieldName:"To*: ",name:"currency",value:h,onChange:function(n){var e=n.target;return m(e.value)}}),Object(N.jsx)(U,{fieldName:"".concat(l," Amount*: "),value:r,onChange:function(n){var e=n.target;return a(e.value)}})]}),Object(N.jsx)(H,{button:!0,children:Object(N.jsx)(Q,{children:"Calculate"})}),Object(N.jsx)(H,{result:!0,children:Object(N.jsx)(X,{result:i})}),Object(N.jsxs)(Y,{date:!0,children:["Exchange rates valid as of:",Object(N.jsx)("br",{}),Object(N.jsx)("strong",{children:n.date})]})]}),Object(N.jsx)($,{name:"Patryk Krawczyk",year:"2021"})]})})};var xn,jn=function(){return Object(N.jsx)(z,{children:Object(N.jsx)(bn,{})})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))},mn=t.p+"static/media/currency-background.9aad8888.png",fn=Object(E.b)(xn||(xn=Object(F.a)(['\n        *, ::after, ::before {\n            box-sizing: inherit;\n        }\n\n        #root {\n            background: url("',"\");\n            background-repeat: no-repeat;\n            background-size: cover;\n            box-sizing: border-box; \n            min-height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        body {\n            font-family: 'Lato', sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n}\n"])),mn);I.a.render(Object(N.jsx)(C.a.StrictMode,{children:Object(N.jsxs)(E.a,{theme:{color:{black:"#000",gray:"#6A6262",white:"#fff",red:"#FE4A49",blue:"#0353A4",pink:"#E5B4BB"},breakpoint:{mobileMax:767,maxWidth:1024}},children:[Object(N.jsx)(fn,{}),Object(N.jsx)(jn,{})]})}),document.getElementById("root")),hn()}},[[52,1,2]]]);
//# sourceMappingURL=main.0f03bad5.chunk.js.map