(this.webpackJsonpvjam=this.webpackJsonpvjam||[]).push([[0],{122:function(e,t,n){e.exports=n.p+"static/media/bonecrack.c37d9ccf.wav"},123:function(e,t,n){e.exports=n.p+"static/media/footsteps.3497fc94.wav"},124:function(e,t,n){e.exports=n.p+"static/media/windandchimes.4a6e1b51.wav"},125:function(e,t,n){e.exports=n.p+"static/media/fireworks.23af77c2.wav"},126:function(e,t,n){e.exports=n.p+"static/media/Roland-GR-1-Steel-Drum-C4.777ed87c.wav"},138:function(e,t,n){e.exports=n(247)},143:function(e,t,n){},151:function(e,t){},153:function(e,t){},238:function(e,t){},239:function(e,t){},246:function(e,t,n){e.exports=n.p+"static/media/Kawai-K5000W-Cello-C2.cfbbcfae.wav"},247:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),u=(n(143),n(13)),o=n(6),l=n(64),s=n(37),m=n(7),f=n(11),p=n(281),b=n(284),v=n(9),d=n.n(v);function y(){var e=Object(u.a)(["\n  margin-top: 92px;\n  text-align: center;\n"]);return y=function(){return e},e}function O(){var e=Object(u.a)(["\n  p {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n"]);return O=function(){return e},e}function g(){var e=Object(u.a)([""]);return g=function(){return e},e}function j(){var e=Object(u.a)(["\n  max-width: 768px;\n  margin: auto;\n  margin-top: 100px;\n"]);return j=function(){return e},e}var E=m.a.div(j()),h=m.a.section(g()),x=m.a.section(O()),S=m.a.div(y()),w=function(){var e=Object(a.useState)(function(e){for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}(4)),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(s.f)();return r.a.createElement(E,null,r.a.createElement(h,null,"Welcome to vjam,",r.a.createElement("br",null),"a virtual jam session for everyone."),r.a.createElement(x,null,r.a.createElement("p",null,"Please enter a valid room id provided by your jam session partners. You can also open a new one by using any random id, which is hopefully not yet taken - good luck."),r.a.createElement(S,null,r.a.createElement(b.a,{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(p.a,{onClick:function(){"running"!==d.a.context.state&&d.a.context.resume(),i.push("rooms/".concat(n))}},"enter"))))},k=n(282),R=n(121),M=n.n(R).a.connect("wss://try:try@broker.shiftr.io"),N=n(19),C="TRIGGERATTACK",P="TRIGGERRELEASE",D="SETUSER",T={JUNO:"JUNO",RHODES:"RHODES",MPC:"MPC",STEELDRUM:"STEELDRUM"},J={instruments:{JUNO:{user:"",note:null,velocity:0},RHODES:{user:"",note:null,velocity:0},MPC:{user:"",note:null,velocity:0},STEELDRUM:{user:"",note:null,velocity:0}}},A=function(e){return function(t){return t.band.instruments[e].note}},I=function(e){return function(t){return t.band.instruments[e].velocity}},U=function(e){return function(t){return t.band.instruments[e].user}},W=function(e,t,n){return{type:C,payload:{instrument:e,note:t,velocity:n}}};function F(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightskyblue;\n"]);return F=function(){return e},e}var G=m.a.div(F()),B=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],_=function(e){var t=e.active,n=e.type,c=e.prefix,i=Object(a.useState)(!1),u=Object(f.a)(i,2),o=u[0],l=u[1];return r.a.createElement(G,{onMouseDown:function(e){if(t){l(!0);var a=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,r=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,i=B[Math.floor(a*B.length)];M.publish(c,JSON.stringify(W(n,i,r/2+.5)))}},onMouseMove:function(e){if(t&&o){var a=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,r=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;M.publish(c,JSON.stringify(W(n,B[Math.floor(a*B.length)],r/2+.5)))}},onMouseUp:function(e){t&&(l(!1),M.publish(c,JSON.stringify({type:P,payload:{instrument:n}})))}})};function H(){var e=Object(u.a)(["\n  width: 100%;\n  background-color: lightyellow;\n"]);return H=function(){return e},e}function L(){var e=Object(u.a)(["\n  height: 200px;\n  width: 100%;\n  ","\n"]);return L=function(){return e},e}var K=m.a.div(L(),(function(e){return e.active&&"\n    border: solid darkgreen 3px;\n  "})),X=m.a.div(H()),Y=function(e){var t=e.type,n=e.user,a=e.children,c=e.inputPad,i=e.prefix,u=Object(o.c)((function(e){return e.system.name})),l=Object(o.c)((function(e){return e.band.instruments}))[t];return r.a.createElement(k.a,{item:!0,xs:12,sm:3},r.a.createElement(X,null,t,": ",n),r.a.createElement(K,{active:u==l.user},c&&r.a.createElement(_,{type:t,active:n===u,prefix:i}),a))},q=function(e){var t=e.type,n=e.prefix,c=Object(a.useState)(!1),i=Object(f.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(null),m=Object(f.a)(s,2),p=m[0],b=m[1],d=Object(o.c)(A(t)),y=Object(o.c)(I(t)),O=Object(o.c)(U(t));return Object(a.useEffect)((function(){if(!u){var e=new v.Synth({oscillator:{type:"sine"},envelope:{attack:.05,decay:.1,sustain:.3,release:1}}),t=new v.Freeverb(.4,1e3),n=new v.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(v.Master),n.connect(t),t.connect(v.Master),b(e),l(!0)}p&&(d?p.triggerAttack(d,0,y):p.triggerRelease())})),r.a.createElement(Y,{type:t,user:O,inputPad:!0,prefix:n})},z=function(e){var t=e.type,n=e.prefix,c=Object(a.useState)(!1),i=Object(f.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(null),m=Object(f.a)(s,2),p=m[0],b=m[1],d=Object(a.useState)(!1),y=Object(f.a)(d,2),O=(y[0],y[1],Object(o.c)(A(t))),g=Object(o.c)(I(t)),j=Object(o.c)(U(t));Object(o.c)((function(e){return e.system.name}));return Object(a.useEffect)((function(){if(!u){var e=new v.Synth({frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5}),t=new v.Freeverb(.4,1e3),n=new v.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(v.Master),n.connect(t),t.connect(v.Master),b(e),l(!0)}p&&(O?p.triggerAttack(O,0,g):p.triggerRelease())})),r.a.createElement(Y,{type:t,user:j,inputPad:!0,prefix:n})},V=n(122),$=n.n(V),Q=n(123),Z=n.n(Q),ee=n(124),te=n.n(ee),ne=n(125),ae=n.n(ne),re=function(e){var t=e.type,n=e.prefix,c=Object(a.useState)(!1),i=Object(f.a)(c,2),u=i[0],l=i[1],s=Object(a.useState)(null),m=Object(f.a)(s,2),p=m[0],b=m[1],d=Object(a.useState)(!1),y=Object(f.a)(d,2),O=(y[0],y[1],Object(o.c)(A(t))),g=(Object(o.c)(I(t)),Object(o.c)(U(t)));return Object(a.useEffect)((function(){if(!u){var e=new v.Sampler({C3:$.a,F3:Z.a,C4:te.a,F4:ae.a});e.volume.value=-6;var t=new v.Freeverb(.6,5e3),n=new v.PingPongDelay({delayTime:"32n",feedback:.7,wet:.25});e.connect(n),n.connect(t),t.connect(v.Master),b(e),l(!0)}p&&(O?p.triggerAttack(O):p.triggerRelease())})),r.a.createElement(Y,{type:t,user:g,inputPad:!0,prefix:n})},ce=function(e){var t=e.prefix,n=e.type,c=e.samples,i=Object(a.useState)(!1),u=Object(f.a)(i,2),l=u[0],s=u[1],m=Object(a.useState)(null),p=Object(f.a)(m,2),b=p[0],d=p[1],y=Object(o.c)(A(n)),O=(Object(o.c)(I(n)),Object(o.c)(U(n)));Object(o.c)((function(e){return e.system.name}));return Object(a.useEffect)((function(){if(!l){var e=new v.Sampler(c);e.volume.value=-6;var t=new v.Freeverb(.6,5e3),n=new v.PingPongDelay({delayTime:"32n",feedback:.7,wet:.25});e.volume.value=-24,e.connect(n),n.connect(t),t.connect(v.Master),d(e),s(!0)}b&&(y?b.triggerAttack(y):b.triggerRelease())})),r.a.createElement(Y,{type:n,user:O,inputPad:!0,prefix:t})},ie=n(70),ue="ADDUSER",oe="SETUSERS",le="SETNAME",se={name:"",users:[]};function me(){var e=Object(u.a)(["\n  background-color: lightpink;\n  padding: 25px;\n  list-style-type: none;\n  li {\n    display: inline-block;\n    margin-right: 15px;\n  }\n"]);return me=function(){return e},e}var fe=m.a.ul(me()),pe=function(){var e=Object(o.c)((function(e){return e.system.users})),t=Object(o.c)((function(e){return e.system.name}));return r.a.createElement(fe,null,e.map((function(e,n){return r.a.createElement("li",{key:n},e!==t&&r.a.createElement("span",null,e),e===t&&r.a.createElement("b",null,e))})))},be=n(45),ve="ADDMESSAGE",de={messages:[]},ye=n(35),Oe=Object(ye.c)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(N.a)({},e,{users:t.payload.value});case ue:var n=Object(ie.a)(e.users);return n.includes(t.payload.value)||n.push(t.payload.value),Object(N.a)({},e,{users:n});case le:if(!e.users.includes(t.payload.value))return Object(N.a)({},e,{name:t.payload.value});default:return e}},band:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var n=Object(N.a)({},e);return n.instruments[t.payload.instrument].note=t.payload.note,n.instruments[t.payload.instrument].velocity=t.payload.velocity,Object(N.a)({},n);case P:var a=Object(N.a)({},e);return a.instruments[t.payload.instrument].note=null,a.instruments[t.payload.instrument].velocity=0,Object(N.a)({},a);case D:var r=Object(N.a)({},e);return Object.keys(r.instruments).forEach((function(e){r.instruments[e].user===t.payload.user&&(r.instruments[e].user="")})),"NONE"!==t.payload.instrument&&(r.instruments[t.payload.instrument].user=t.payload.user),Object(N.a)({},r);default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:var n=Object(ie.a)(e.messages);return n.unshift(t.payload.message),n=n.splice(0,100),Object(N.a)({},e,{messages:n});default:return e}}}),ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,je=Object(ye.e)((function(e,t){return"RESET"===t.type?Oe(void 0,t):"SETSTATE"===t.type?Oe(t.payload,{type:"IGNORE"}):Oe(e,t)}),ge(Object(ye.a)()));je.dispatch({type:"INIT"});var Ee=je;function he(){var e=Object(u.a)([""]);return he=function(){return e},e}function xe(){var e=Object(u.a)(["\n  height: 100px;\n  overflow-y: scroll;\n"]);return xe=function(){return e},e}function Se(){var e=Object(u.a)(["\n  background-color: lightcoral;\n  padding: 25px;\n"]);return Se=function(){return e},e}var we=m.a.div(Se()),ke=m.a.ul(xe()),Re=(m.a.section(he()),function(e){var t,n=e.prefix,c=Object(a.useState)(""),i=Object(f.a)(c,2),u=i[0],l=i[1],s=Object(o.c)((function(e){return e.chat.messages})),m=Object(o.c)((function(e){return e.system.name}));return r.a.createElement(we,null,r.a.createElement(b.a,(t={fullWidth:!0,value:u},Object(be.a)(t,"fullWidth",!0),Object(be.a)(t,"placeholder","something nice you wanna say to your friends"),Object(be.a)(t,"onChange",(function(e){return l(e.target.value)})),Object(be.a)(t,"onKeyPress",(function(e){"Enter"===e.key&&(M.publish(n,JSON.stringify(function(e,t){return{type:ve,payload:{message:{sender:e,text:t}}}}(m,u))),l(""))})),t)),r.a.createElement(ke,null,s.map((function(e,t){return r.a.createElement("li",{key:t},e.sender," > ",e.text)}))))}),Me=n(280),Ne=n(285),Ce=n(283),Pe=n(286);function De(){var e=Object(u.a)(["\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 25px;\n"]);return De=function(){return e},e}var Te=m.a.div(De()),Je=function(e){var t,n=e.prefix,a=Object(o.c)((function(e){return e.system.name})),c=Object(o.c)((function(e){return e.band.instruments})),i=Object(o.c)((t=a,function(e){var n="NONE";return Object.keys(e.band.instruments).forEach((function(a){e.band.instruments[a].user===t&&(n=a)})),n}));return r.a.createElement(Te,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:4},r.a.createElement(Me.a,{fullWidth:!0},r.a.createElement(Ne.a,null,"Pick an instrument"),r.a.createElement(Ce.a,{value:i,onChange:function(e){Object.keys(c).forEach((function(e){""!==c[e].user&&!0})),M.publish(n,JSON.stringify(function(e,t){return{type:D,payload:{instrument:e,user:t}}}(e.target.value,a)))},fullWidth:!0},r.a.createElement(Pe.a,{value:"NONE"},"none"),";",Object.keys(T).map((function(e,t){return r.a.createElement(Pe.a,{value:T[e],key:t},T[e])})))))))},Ae=(n(246),n(126));function Ie(){var e=Object(u.a)(["\n  margin-top: 128px;\n"]);return Ie=function(){return e},e}var Ue={C4:n.n(Ae).a},We=m.a.div(Ie()),Fe=function(){var e=Object(s.g)().id,t=Object(a.useState)(!1),n=Object(f.a)(t,2),c=n[0],i=n[1],u=Object(a.useState)(""),l=Object(f.a)(u,2),m=l[0],p=l[1],v=Object(o.c)((function(e){return e.system.name})),d=Object(o.b)();return Object(a.useEffect)((function(){e&&!c&&(M.subscribe("vjam/".concat(e),(function(t){t||console.log("subscribed to vjam/".concat(e))})),M.subscribe("vjam/".concat(e,"/users/#"),(function(t){t||console.log("subscribed to vjam/".concat(e,"/users/#"))})),M.on("message",(function(t,n){var a;if(t==="vjam/".concat(e))try{a=JSON.parse(n.toString()),Ee.dispatch(a)}catch(c){}t==="vjam/".concat(e,"/users/get")&&(JSON.parse(n.toString()).id!==M.options.clientId&&M.publish("vjam/".concat(e,"/users/set"),JSON.stringify(Ee.getState().system.users)));if(t==="vjam/".concat(e,"/users/set")){var r=JSON.parse(n.toString());Ee.dispatch({type:oe,payload:{value:r}})}})),i(!0),M.publish("vjam/".concat(e,"/users/get"),JSON.stringify({id:M.options.clientId})))})),r.a.createElement(r.a.Fragment,null,""===v&&r.a.createElement(We,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:8,sm:6},"Please let the others know your name. If it is not yet taken, then you will automatically enter the jam session. Submit by pressing return."),r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:8,sm:6},r.a.createElement(b.a,{fullWidth:!0,value:m,onChange:function(e){p(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(M.publish("vjam/".concat(e),JSON.stringify({type:ue,payload:{value:m}})),d(function(e){return{type:le,payload:{value:e}}}(m)))}})))),""!==v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(pe,null)),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(Re,{prefix:"vjam/".concat(e)}))),r.a.createElement("h2",null,"Instruments"),r.a.createElement("p",null,"Instrumentes are controlled via the 2d pad, where the x axis is mapped to the pitch and the y axis to the velocity. More instruments and controllable effect parameters, as well as better interactions, will hopefully follow soon."),r.a.createElement(Je,{prefix:"vjam/".concat(e)}),r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(q,{type:T.JUNO,prefix:"vjam/".concat(e)}),r.a.createElement(z,{type:T.RHODES,prefix:"vjam/".concat(e)}),r.a.createElement(re,{type:T.MPC,prefix:"vjam/".concat(e)}),r.a.createElement(ce,{type:T.STEELDRUM,samples:Ue,prefix:"vjam/".concat(e)}))))};function Ge(){var e=Object(u.a)(["\n  margin-left: 15px;\n  margin-right: 15px;\n"]);return Ge=function(){return e},e}var Be=m.a.div(Ge());var _e=function(){return r.a.createElement(Be,null,r.a.createElement(o.a,{store:Ee},r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/rooms/:id"},r.a.createElement(Fe,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(w,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[138,1,2]]]);
//# sourceMappingURL=main.f9002528.chunk.js.map