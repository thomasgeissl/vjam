(this.webpackJsonpvjam=this.webpackJsonpvjam||[]).push([[0],{110:function(e,t,n){e.exports=n.p+"static/media/footsteps.3497fc94.wav"},111:function(e,t,n){e.exports=n.p+"static/media/fireworks.23af77c2.wav"},112:function(e,t,n){e.exports=n.p+"static/media/windandchimes.4a6e1b51.wav"},113:function(e,t,n){e.exports=n.p+"static/media/bonecrack.c37d9ccf.wav"},122:function(e,t,n){e.exports=n(230)},127:function(e,t,n){},135:function(e,t){},137:function(e,t){},222:function(e,t){},223:function(e,t){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(127),n(18)),u=n(56),l=n(34),s=n(12),f=n(13),g=n(264),m=n(263),d=n(11),v=n.n(d),b=n(14);function p(){var e=Object(f.a)(["\n  margin-top: 92px;\n  text-align: center;\n"]);return p=function(){return e},e}function h(){var e=Object(f.a)(["\n  p {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n"]);return h=function(){return e},e}function O(){var e=Object(f.a)([""]);return O=function(){return e},e}function E(){var e=Object(f.a)(["\n  max-width: 768px;\n  margin: auto;\n  margin-top: 100px;\n"]);return E=function(){return e},e}var y=b.a.div(E()),j=b.a.section(O()),w=b.a.section(h()),S=b.a.div(p()),R=function(){var e=Object(a.useState)(function(e){for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}(4)),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(l.f)();return r.a.createElement(y,null,r.a.createElement(j,null,"Welcome to vjam,",r.a.createElement("br",null),"a virtual jam session for everyone."),r.a.createElement(w,null,r.a.createElement("p",null,"Please enter a valid room id provided by your jam session partners. You can also open a new one by using any random id, which is hopefully not yet taken - good luck."),r.a.createElement(S,null,r.a.createElement(m.a,{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(g.a,{onClick:function(){"running"!==v.a.context.state&&v.a.context.resume(),o.push("rooms/".concat(n))}},"enter"))))},x=n(262);function k(){var e=Object(f.a)(["\n  height: 200px;\n  width: 100%;\n"]);return k=function(){return e},e}var M=b.a.div(k()),T=function(e){var t=e.children;return r.a.createElement(x.a,{item:!0,xs:12,sm:3},r.a.createElement(M,null,t))},C=n(109),N=n.n(C).a.connect("wss://try:try@broker.shiftr.io"),D=n(26),A="TRIGGERATTACK",J="TRIGGERRELEASE",B="JUNO",G="RHODES",U={instruments:{JUNO:{note:null,velocity:0},RHODES:{note:null,velocity:0}}},H=function(e,t,n){return{type:A,payload:{instrument:e,note:t,velocity:n}}},I=function(e){return{type:J,payload:{instrument:e}}};function P(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: blue;\n"]);return P=function(){return e},e}var F=b.a.div(P());var W=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],_=function(e){var t=e.prefix,n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(null),f=Object(s.a)(l,2),g=f[0],m=f[1],v=Object(a.useState)(!1),b=Object(s.a)(v,2),p=b[0],h=b[1],O=Object(i.b)((function(e){return e.band.instruments.JUNO.note})),E=Object(i.b)((function(e){return e.band.instruments.JUNO.velocity}));return Object(a.useEffect)((function(){if(!o){var e=new d.Synth({oscillator:{type:"sine"},envelope:{attack:.05,decay:.1,sustain:.3,release:1}}),t=new d.Freeverb(.4,1e3),n=new d.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(d.Master),n.connect(t),t.connect(d.Master),m(e),u(!0)}g&&(O?g.triggerAttack(O,0,E):g.triggerRelease())})),r.a.createElement(T,null,r.a.createElement(F,{onMouseDown:function(e){h(!0);var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,r=W[Math.floor(n*W.length)];N.publish(t,JSON.stringify(H(B,r,a/2+.5)))},onMouseMove:function(e){if(p){var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;N.publish(t,JSON.stringify(H(B,W[Math.floor(n*W.length)],a/2+.5)))}},onMouseUp:function(e){h(!1),N.publish(t,JSON.stringify(I(B)))}}))};function X(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightgreen;\n"]);return X=function(){return e},e}var Y=b.a.div(X());var q=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],L=function(e){var t=e.prefix,n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(null),f=Object(s.a)(l,2),g=f[0],m=f[1],v=Object(a.useState)(!1),b=Object(s.a)(v,2),p=b[0],h=b[1],O=Object(i.b)((function(e){return e.band.instruments.RHODES.note})),E=Object(i.b)((function(e){return e.band.instruments.RHODES.velocity}));return Object(a.useEffect)((function(){if(!o){var e=new d.Synth({frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5}),t=new d.Freeverb(.4,1e3),n=new d.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(d.Master),n.connect(t),t.connect(d.Master),m(e),u(!0)}g&&(O?g.triggerAttack(O,0,E):g.triggerRelease())})),r.a.createElement(T,null,r.a.createElement(Y,{onMouseDown:function(e){h(!0);var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,r=q[Math.floor(n*q.length)];N.publish(t,JSON.stringify(H(G,r,a/2+.5)))},onMouseMove:function(e){if(p){var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;N.publish(t,JSON.stringify(H(G,q[Math.floor(n*q.length)],a/2+.5)))}},onMouseUp:function(e){h(!1),N.publish(t,JSON.stringify(I(G)))}}))};n(110),n(111),n(112),n(113);function z(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: red;\n"]);return z=function(){return e},e}b.a.div(z());var K=n(114),V="ADDMESSAGE",$={messages:[]},Q=n(32),Z="SETTEMPERATURE",ee="SETCURRENT",te="SETPROGRAM",ne={},ae=Object(Q.c)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(D.a)({},e,{temperature:t.payload.value});case ee:return Object(D.a)({},e,{current:t.payload.value});case te:return Object(D.a)({},e,{program:t.payload.value});default:return e}},band:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=Object(D.a)({},e);return n.instruments[t.payload.instrument].note=t.payload.note,n.instruments[t.payload.instrument].velocity=t.payload.velocity,n;case J:var a=Object(D.a)({},e);return a.instruments[t.payload.instrument].note=null,a.instruments[t.payload.instrument].velocity=0,Object(D.a)({},a);default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:var n=Object(K.a)(e.messages);return n.unshift(t.payload.message),n=n.splice(0,100),Object(D.a)({},e,{messages:n});default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,ce=Object(Q.e)((function(e,t){return"RESET"===t.type?ae(void 0,t):"SETSTATE"===t.type?ae(t.payload,{type:"IGNORE"}):ae(e,t)}),re(Object(Q.a)()));ce.dispatch({type:"INIT"});var oe=ce;function ie(){var e=Object(f.a)([""]);return ie=function(){return e},e}function ue(){var e=Object(f.a)(["\n  height: 100px;\n  background-color: lightcoral;\n  overflow-y: scroll;\n"]);return ue=function(){return e},e}function le(){var e=Object(f.a)(["\n  width: 100%;\n"]);return le=function(){return e},e}var se=b.a.div(le()),fe=b.a.ul(ue()),ge=(b.a.section(ie()),function(e){var t=e.prefix,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(i.b)((function(e){return e.chat.messages})),f=Object(a.useState)(!1),d=Object(s.a)(f,2),v=d[0],b=d[1];return Object(a.useEffect)((function(){v||(N.subscribe(t,(function(e){e||console.log("subscribed")})),N.on("message",(function(e,n){var a;if(e===t)try{a=JSON.parse(n.toString()),oe.dispatch(a)}catch(r){}})),b(!0))})),r.a.createElement(se,null,r.a.createElement(m.a,{value:o,onChange:function(e){return u(e.target.value)}}),r.a.createElement(g.a,{onClick:function(){N.publish(t,JSON.stringify(function(e,t){return{type:V,payload:{message:{sender:e,text:t}}}}("TODO: name",o)))}},"send"),r.a.createElement(fe,null,l.map((function(e,t){return r.a.createElement("li",{key:t},e.sender," > ",e.text)}))))}),me=function(){var e=Object(l.g)().id,t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){e&&!c&&(N.subscribe("vjam/".concat(e),(function(e){e||console.log("subscribed")})),N.on("message",(function(t,n){var a;if(t==="vjam/".concat(e))try{a=JSON.parse(n.toString()),oe.dispatch(a)}catch(r){}})),o(!0))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{prefix:"vjam/".concat(e,"/chat")}),r.a.createElement(_,{prefix:"vjam/".concat(e)}),r.a.createElement(L,{prefix:"vjam/".concat(e)}))};var de=function(){return r.a.createElement(i.a,{store:oe},r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/rooms/:id"},r.a.createElement(me,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(R,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.d169b562.chunk.js.map