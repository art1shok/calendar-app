(this["webpackJsonpwerdevs-test"]=this["webpackJsonpwerdevs-test"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/logo.c1b22935.jpg"},25:function(e,a,t){e.exports=t(44)},34:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),s=t.n(c),l=t(7),o=(t(34),t(11)),m=t(2),i=(t(35),t(22)),d=t.n(i),u=function(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"page-header__container"},r.a.createElement("img",{src:d.a,className:"page-header__logo",alt:"logo"}),r.a.createElement("nav",{className:"page-header__nav"},r.a.createElement("ul",{className:"page-header__nav-list"},r.a.createElement("li",{className:"page-header__nav-item"},r.a.createElement(o.b,{to:"/home",className:"page-header__nav-link"},"Home")),r.a.createElement("li",{className:"page-header__nav-item"},r.a.createElement(o.b,{to:"/about-us",className:"page-header__nav-link"},"About Us"))))))},h=(t(37),function(){return r.a.createElement("div",{className:"about-us"},r.a.createElement("div",{className:"about-us__container"},r.a.createElement("div",{className:"about-us__text-container"},r.a.createElement("h3",{className:"about-us__title"},"Lorem ipsum creating timelines"),r.a.createElement("p",{className:"about-us__text"},"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."),r.a.createElement("p",{className:"about-us__text"},"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."),r.a.createElement("p",{className:"about-us__text"},"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."),r.a.createElement("p",{className:"about-us__text"},"McClintock wrote to Before & After to explain his discovery: \u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d)."))))}),_=t(24),p=t(23),E=t.n(p),y=(t(39),t(40),"OPEN_MODAL"),b="CLOSE_MODAL",f=function(e){var a=e.dayData,t=a.date,n=a.isCurrentMonth,c=a.isToday,s=a.number,o=e.month,m=Object(l.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t.toString(),className:"day".concat(c?" day--active":"","\n      ").concat(n?"":" day--another-month"),onClick:function(){var e;m((e={month:o,day:t.format("Do dddd")},{type:y,payload:e}))}},s))},N=(t(41),function(e){for(var a=e.date,t=e.month,n=[],c=a.clone(),s=0;s<7;s++){var l={number:c.format("DD"),isCurrentMonth:c.month()===t,isToday:c.isSame(new Date,"day"),date:c};n.push(r.a.createElement(f,{key:s,dayData:l,month:c.format("MMMM")})),(c=c.clone()).add(1,"day")}return r.a.createElement("div",{className:"week__row",key:n[0]},n)}),v=(t(42),function(e){return e.isOpened}),g=function(e){return{month:e.month,day:e.day}},k=function(){var e=Object(l.c)(v),a=Object(l.c)(g),t=a.month,n=a.day,s=Object(l.b)(),o=function(){s({type:b})};return e&&Object(c.createPortal)(r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__background",onClick:o}),r.a.createElement("div",{className:"modal__container"},r.a.createElement("button",{type:"button",className:"modal__close",onClick:o},"close"),r.a.createElement("div",{className:"modal__input-container"},r.a.createElement("label",{className:"modal__label",htmlFor:"month"},"Month",r.a.createElement("input",{type:"text",id:"month",className:"modal__input",value:t}))),r.a.createElement("div",{className:"modal__input-container"},r.a.createElement("label",{htmlFor:"day",className:"modal__label"},"Day",r.a.createElement("input",{type:"text",id:"day",value:n,className:"modal__input"}))))),document.getElementById("modal"))},w=function(){var e=Object(n.useState)(E()()),a=Object(_.a)(e,2),t=a[0],c=a[1];return r.a.createElement("section",{className:"calendar"},r.a.createElement("div",{className:"calendar__container"},r.a.createElement("div",{className:"calendar__title"},r.a.createElement("div",{className:"calendar__arrow calendar__arrow-left",onClick:function(){c(t.clone().subtract(1,"month"))}}),r.a.createElement("span",{className:"calendar__month-label"},t.format("MMMM YYYY")),r.a.createElement("div",{className:"calendar__arrow calendar__arrow-right",onClick:function(){c(t.clone().add(1,"month"))}})),r.a.createElement("div",{className:"calendar__month"},function(){for(var e=[],a=!1,n=t.clone().startOf("month").add(NaN).day("Sunday"),c=0,s=n.month();!a;)e.push(r.a.createElement(N,{key:c,date:n.clone(),month:t.month()})),n.add(1,"w"),a=c++>2&&s!==n.month(),s=n.month();return e}()),r.a.createElement("div",{className:"calendar__day-rows"},r.a.createElement("span",{className:"calendar__days-names"},"S"),r.a.createElement("span",{className:"calendar__days-names"},"M"),r.a.createElement("span",{className:"calendar__days-names"},"T"),r.a.createElement("span",{className:"calendar__days-names"},"W"),r.a.createElement("span",{className:"calendar__days-names"},"T"),r.a.createElement("span",{className:"calendar__days-names"},"F"),r.a.createElement("span",{className:"calendar__days-names"},"S"))),r.a.createElement(k,null))},O=(t(43),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"home-page__container"},r.a.createElement("div",{className:"home-page__left"},r.a.createElement("div",{className:"home-page__text-container"},r.a.createElement("h1",{className:"home-page__title"},"Choose the day",r.a.createElement("br",null),"for the meeting"),r.a.createElement("p",{className:"home-page__text"},"We encourage you to book your",r.a.createElement("br",null),"appointment online.",r.a.createElement("br",null),"This will save you time."))),r.a.createElement(w,null)))});var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(u,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/home",exact:!0,component:O}),r.a.createElement(m.b,{path:"/about-us",component:h}),r.a.createElement(m.a,{from:"*",to:"home"}))))},M=t(14),C=t(12),D={month:"",day:"",isOpened:!1},S=Object(M.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:var t=a.payload;return Object(C.a)(Object(C.a)({},e),{},{month:t.month,day:t.day,isOpened:!0});case b:return Object(C.a)(Object(C.a)({},e),{},{month:"",day:"",isOpened:!1});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:S},r.a.createElement(x,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ad918416.chunk.js.map