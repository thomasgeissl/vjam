(this.webpackJsonpvjam=this.webpackJsonpvjam||[]).push([[0],{122:function(e,t,n){e.exports=n.p+"static/media/bonecrack.c37d9ccf.wav"},123:function(e,t,n){e.exports=n.p+"static/media/footsteps.3497fc94.wav"},124:function(e,t,n){e.exports=n.p+"static/media/windandchimes.4a6e1b51.wav"},125:function(e,t,n){e.exports=n.p+"static/media/fireworks.23af77c2.wav"},137:function(e,t,n){e.exports=n(245)},142:function(e,t,n){},150:function(e,t){},152:function(e,t){},237:function(e,t){},238:function(e,t){},245:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(142),n(7)),u=n(6),l=n(64),s=n(37),f=n(8),m=n(15),g=n(279),d=n(282),b=n(14),v=n.n(b);function p(){var e=Object(o.a)(["\n  margin-top: 92px;\n  text-align: center;\n"]);return p=function(){return e},e}function O(){var e=Object(o.a)(["\n  p {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n"]);return O=function(){return e},e}function h(){var e=Object(o.a)([""]);return h=function(){return e},e}function y(){var e=Object(o.a)(["\n  max-width: 768px;\n  margin: auto;\n  margin-top: 100px;\n"]);return y=function(){return e},e}var E=f.a.div(y()),j=f.a.section(h()),S=f.a.section(O()),w=f.a.div(p()),x=function(){var e=Object(a.useState)(function(e){for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789",a=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*a));return t}(4)),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(s.f)();return r.a.createElement(E,null,r.a.createElement(j,null,"Welcome to vjam,",r.a.createElement("br",null),"a virtual jam session for everyone."),r.a.createElement(S,null,r.a.createElement("p",null,"Please enter a valid room id provided by your jam session partners. You can also open a new one by using any random id, which is hopefully not yet taken - good luck."),r.a.createElement(w,null,r.a.createElement(d.a,{value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(g.a,{onClick:function(){"running"!==v.a.context.state&&v.a.context.resume(),i.push("rooms/".concat(n))}},"enter"))))},k=n(280);function M(){var e=Object(o.a)(["\n  width: 100%;\n  background-color: lightyellow;\n"]);return M=function(){return e},e}function N(){var e=Object(o.a)(["\n  height: 200px;\n  width: 100%;\n  ","\n"]);return N=function(){return e},e}var C=f.a.div(N(),(function(e){return e.active&&"\n    border: solid darkgreen 3px;\n  "})),R=f.a.div(M()),J=function(e){var t=e.type,n=e.user,a=e.children,c=Object(u.c)((function(e){return e.system.name})),i=Object(u.c)((function(e){return e.band.instruments}))[t];return r.a.createElement(k.a,{item:!0,xs:12,sm:3},r.a.createElement(R,null,t,": ",n),r.a.createElement(C,{active:c==i.user},a))},D=n(121),P=n.n(D).a.connect("wss://try:try@broker.shiftr.io"),B=n(19),A="TRIGGERATTACK",T="TRIGGERRELEASE",U="SETUSER",H={JUNO:"JUNO",RHODES:"RHODES",MPC:"MPC"},W={instruments:{JUNO:{user:"",note:null,velocity:0},RHODES:{user:"",note:null,velocity:0},MPC:{user:"",note:null,velocity:0}}},F=function(e,t,n){return{type:A,payload:{instrument:e,note:t,velocity:n}}},I=function(e){return{type:T,payload:{instrument:e}}};function G(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightskyblue;\n"]);return G=function(){return e},e}var X=f.a.div(G());var Y=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],_=function(e){var t=e.prefix,n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(null),s=Object(m.a)(l,2),f=s[0],g=s[1],d=Object(a.useState)(!1),v=Object(m.a)(d,2),p=v[0],O=v[1],h=Object(u.c)((function(e){return e.band.instruments.JUNO.note})),y=Object(u.c)((function(e){return e.band.instruments.JUNO.velocity})),E=Object(u.c)((function(e){return e.band.instruments.JUNO.user})),j=Object(u.c)((function(e){return e.system.name})),S=function(){return E===j};return Object(a.useEffect)((function(){if(!i){var e=new b.Synth({oscillator:{type:"sine"},envelope:{attack:.05,decay:.1,sustain:.3,release:1}}),t=new b.Freeverb(.4,1e3),n=new b.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(b.Master),n.connect(t),t.connect(b.Master),g(e),o(!0)}f&&(h?f.triggerAttack(h,0,y):f.triggerRelease())})),r.a.createElement(J,{type:"JUNO",user:E},r.a.createElement(X,{onMouseDown:function(e){if(S()){O(!0);var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,r=Y[Math.floor(n*Y.length)];P.publish(t,JSON.stringify(F(H.JUNO,r,a/2+.5)))}},onMouseMove:function(e){if(S()&&p){var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;P.publish(t,JSON.stringify(F(H.JUNO,Y[Math.floor(n*Y.length)],a/2+.5)))}},onMouseUp:function(e){S()&&(O(!1),P.publish(t,JSON.stringify(I(H.JUNO))))}}))};function K(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightgreen;\n"]);return K=function(){return e},e}var q=f.a.div(K());var L=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],z=function(e){var t=e.prefix,n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(null),s=Object(m.a)(l,2),f=s[0],g=s[1],d=Object(a.useState)(!1),v=Object(m.a)(d,2),p=v[0],O=v[1],h=Object(u.c)((function(e){return e.band.instruments.RHODES.note})),y=Object(u.c)((function(e){return e.band.instruments.RHODES.velocity})),E=Object(u.c)((function(e){return e.band.instruments.RHODES.user})),j=Object(u.c)((function(e){return e.system.name})),S=function(){return E===j};return Object(a.useEffect)((function(){if(!i){var e=new b.Synth({frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5}),t=new b.Freeverb(.4,1e3),n=new b.PingPongDelay({delayTime:"8n",feedback:.4,wet:.5});e.connect(b.Master),n.connect(t),t.connect(b.Master),g(e),o(!0)}f&&(h?f.triggerAttack(h,0,y):f.triggerRelease())})),r.a.createElement(J,{type:"RHODES",user:E},r.a.createElement(q,{onMouseDown:function(e){if(S()){O(!0);var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,r=L[Math.floor(n*L.length)];P.publish(t,JSON.stringify(F(H.RHODES,r,a/2+.5)))}},onMouseMove:function(e){if(S()&&p){var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;P.publish(t,JSON.stringify(F(H.RHODES,L[Math.floor(n*L.length)],a/2+.5)))}},onMouseUp:function(e){S()&&(O(!1),P.publish(t,JSON.stringify(I(H.RHODES))))}}))},V=n(122),$=n.n(V),Q=n(123),Z=n.n(Q),ee=n(124),te=n.n(ee),ne=n(125),ae=n.n(ne);function re(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: lightgoldenrodyellow;\n"]);return re=function(){return e},e}var ce=f.a.div(re());var ie=["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"],oe=function(e){var t=e.prefix,n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(null),s=Object(m.a)(l,2),f=s[0],g=s[1],d=Object(a.useState)(!1),v=Object(m.a)(d,2),p=v[0],O=v[1],h=Object(u.c)((function(e){return e.band.instruments.MPC.note})),y=(Object(u.c)((function(e){return e.band.instruments.MPC.velocity})),Object(u.c)((function(e){return e.band.instruments.MPC.user}))),E=Object(u.c)((function(e){return e.system.name})),j=function(){return y===E};return Object(a.useEffect)((function(){if(!i){var e=new b.Sampler({C3:$.a,F3:Z.a,C4:te.a,F4:ae.a});e.volume.value=-6;var t=new b.Freeverb(.6,5e3),n=new b.PingPongDelay({delayTime:"32n",feedback:.7,wet:.25});e.connect(n),n.connect(t),t.connect(b.Master),g(e),o(!0)}f&&(h?f.triggerAttack(h):f.triggerRelease())})),r.a.createElement(J,{type:"MPC",user:y},r.a.createElement(ce,{onMouseDown:function(e){if(j()){O(!0);var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight,r=ie[Math.floor(n*ie.length)];P.publish(t,JSON.stringify(F(H.MPC,r,a/2+.5)))}},onMouseMove:function(e){if(j()&&p){var n=(e.clientX-e.target.getBoundingClientRect().left)/e.target.offsetWidth,a=1-(e.clientY-e.target.getBoundingClientRect().top)/e.target.offsetHeight;P.publish(t,JSON.stringify(F(H.MPC,ie[Math.floor(n*ie.length)],a/2+.5)))}},onMouseUp:function(e){j()&&(O(!1),P.publish(t,JSON.stringify(I(H.MPC))))}}))},ue=n(70),le="ADDUSER",se="SETUSERS",fe="SETNAME",me={name:"",users:[]};function ge(){var e=Object(o.a)(["\n  background-color: lightpink;\n  padding: 25px;\n  list-style-type: none;\n  li {\n    display: inline-block;\n    margin-right: 15px;\n  }\n"]);return ge=function(){return e},e}var de=f.a.ul(ge()),be=function(){var e=Object(u.c)((function(e){return e.system.users})),t=Object(u.c)((function(e){return e.system.name}));return r.a.createElement(de,null,e.map((function(e,n){return r.a.createElement("li",{key:n},e!==t&&r.a.createElement("span",null,e),e===t&&r.a.createElement("b",null,e))})))},ve=n(45),pe="ADDMESSAGE",Oe={messages:[]},he=n(35),ye=Object(he.c)({system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(B.a)({},e,{users:t.payload.value});case le:var n=Object(ue.a)(e.users);return n.includes(t.payload.value)||n.push(t.payload.value),Object(B.a)({},e,{users:n});case fe:if(!e.users.includes(t.payload.value))return Object(B.a)({},e,{name:t.payload.value});default:return e}},band:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=Object(B.a)({},e);return n.instruments[t.payload.instrument].note=t.payload.note,n.instruments[t.payload.instrument].velocity=t.payload.velocity,Object(B.a)({},n);case T:var a=Object(B.a)({},e);return a.instruments[t.payload.instrument].note=null,a.instruments[t.payload.instrument].velocity=0,Object(B.a)({},a);case U:var r=Object(B.a)({},e);return Object.keys(r.instruments).forEach((function(e){r.instruments[e].user===t.payload.user&&(r.instruments[e].user="")})),"NONE"!==t.payload.instrument&&(r.instruments[t.payload.instrument].user=t.payload.user),Object(B.a)({},r);default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:var n=Object(ue.a)(e.messages);return n.unshift(t.payload.message),n=n.splice(0,100),Object(B.a)({},e,{messages:n});default:return e}}}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,je=Object(he.e)((function(e,t){return"RESET"===t.type?ye(void 0,t):"SETSTATE"===t.type?ye(t.payload,{type:"IGNORE"}):ye(e,t)}),Ee(Object(he.a)()));je.dispatch({type:"INIT"});var Se=je;function we(){var e=Object(o.a)([""]);return we=function(){return e},e}function xe(){var e=Object(o.a)(["\n  height: 100px;\n  overflow-y: scroll;\n"]);return xe=function(){return e},e}function ke(){var e=Object(o.a)(["\n  background-color: lightcoral;\n  padding: 25px;\n"]);return ke=function(){return e},e}var Me=f.a.div(ke()),Ne=f.a.ul(xe()),Ce=(f.a.section(we()),function(e){var t,n=e.prefix,c=Object(a.useState)(""),i=Object(m.a)(c,2),o=i[0],l=i[1],s=Object(u.c)((function(e){return e.chat.messages})),f=Object(u.c)((function(e){return e.system.name}));return r.a.createElement(Me,null,r.a.createElement(d.a,(t={fullWidth:!0,value:o},Object(ve.a)(t,"fullWidth",!0),Object(ve.a)(t,"placeholder","something nice you wanna say to your friends"),Object(ve.a)(t,"onChange",(function(e){return l(e.target.value)})),Object(ve.a)(t,"onKeyPress",(function(e){"Enter"===e.key&&(P.publish(n,JSON.stringify(function(e,t){return{type:pe,payload:{message:{sender:e,text:t}}}}(f,o))),l(""))})),t)),r.a.createElement(Ne,null,s.map((function(e,t){return r.a.createElement("li",{key:t},e.sender," > ",e.text)}))))}),Re=n(278),Je=n(283),De=n(281),Pe=n(284);function Be(){var e=Object(o.a)(["\n  width: 100%;\n  margin-top: 25px;\n  margin-bottom: 25px;\n"]);return Be=function(){return e},e}var Ae=f.a.div(Be()),Te=function(e){var t,n=e.prefix,a=Object(u.c)((function(e){return e.system.name})),c=Object(u.c)((function(e){return e.band.instruments})),i=Object(u.c)((t=a,function(e){var n="NONE";return Object.keys(e.band.instruments).forEach((function(a){e.band.instruments[a].user===t&&(n=a)})),n}));return r.a.createElement(Ae,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:4},r.a.createElement(Re.a,{fullWidth:!0},r.a.createElement(Je.a,null,"Pick an instrument"),r.a.createElement(De.a,{value:i,onChange:function(e){Object.keys(c).forEach((function(e){""!==c[e].user&&!0})),P.publish(n,JSON.stringify(function(e,t){return{type:U,payload:{instrument:e,user:t}}}(e.target.value,a)))},fullWidth:!0},r.a.createElement(Pe.a,{value:"NONE"},"none"),";",Object.keys(H).map((function(e,t){return r.a.createElement(Pe.a,{value:H[e],key:t},H[e])})))))))};function Ue(){var e=Object(o.a)(["\n  margin-top: 128px;\n"]);return Ue=function(){return e},e}var He=f.a.div(Ue()),We=function(){var e=Object(s.g)().id,t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),l=Object(m.a)(o,2),f=l[0],g=l[1],b=Object(u.c)((function(e){return e.system.name})),v=Object(u.b)();return Object(a.useEffect)((function(){e&&!c&&(P.subscribe("vjam/".concat(e),(function(t){t||console.log("subscribed to vjam/".concat(e))})),P.subscribe("vjam/".concat(e,"/users/#"),(function(t){t||console.log("subscribed to vjam/".concat(e,"/users/#"))})),P.on("message",(function(t,n){var a;if(t==="vjam/".concat(e))try{a=JSON.parse(n.toString()),Se.dispatch(a)}catch(c){}t==="vjam/".concat(e,"/users/get")&&(JSON.parse(n.toString()).id!==P.options.clientId&&P.publish("vjam/".concat(e,"/users/set"),JSON.stringify(Se.getState().system.users)));if(t==="vjam/".concat(e,"/users/set")){var r=JSON.parse(n.toString());Se.dispatch({type:se,payload:{value:r}})}})),i(!0),P.publish("vjam/".concat(e,"/users/get"),JSON.stringify({id:P.options.clientId})))})),r.a.createElement(r.a.Fragment,null,""===b&&r.a.createElement(He,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:8,sm:6},"Please let the others know your name. If it is not yet taken, then you will automatically enter the jam session. Submit by pressing return. There will be a button later, do not worry."),r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:2,sm:3}),r.a.createElement(k.a,{item:!0,xs:8,sm:6},r.a.createElement(d.a,{fullWidth:!0,value:f,onChange:function(e){g(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(P.publish("vjam/".concat(e),JSON.stringify({type:le,payload:{value:f}})),v(function(e){return{type:fe,payload:{value:e}}}(f)))}})))),""!==b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(be,null)),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(Ce,{prefix:"vjam/".concat(e)}))),r.a.createElement("h2",null,"Instruments"),r.a.createElement("p",null,"Instrumentes are controlled via the 2d pad, where the x axis is mapped to the pitch and the y axis to the velocity. More instruments and controllable effect parameters, as well as better interactions, will hopefully follow soon."),r.a.createElement(Te,{prefix:"vjam/".concat(e)}),r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(_,{prefix:"vjam/".concat(e)}),r.a.createElement(z,{prefix:"vjam/".concat(e)}),r.a.createElement(oe,{prefix:"vjam/".concat(e)}))))};function Fe(){var e=Object(o.a)(["\n  margin-left: 15px;\n  margin-right: 15px;\n"]);return Fe=function(){return e},e}var Ie=f.a.div(Fe());var Ge=function(){return r.a.createElement(Ie,null,r.a.createElement(u.a,{store:Se},r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/rooms/:id"},r.a.createElement(We,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(x,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.5fc6c33d.chunk.js.map