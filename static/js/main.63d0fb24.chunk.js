(this["webpackJsonpnpl-direct"]=this["webpackJsonpnpl-direct"]||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){},43:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r=t(4),i=t(3),a=t(25),c=t.n(a),o=(t(35),t(13)),s=(t(36),t(11)),u=t.n(s),d=t(14),l=t(15);t(40),t(41);l.a.initializeApp({apiKey:"AIzaSyDIyBC0oWZlE1TlVO7j5OJi40A9lKBJqrc",authDomain:"npl-direct.firebaseapp.com",databaseURL:"https://npl-direct.firebaseio.com",projectId:"npl-direct",storageBucket:"npl-direct.appspot.com",messagingSenderId:"301740645078",appId:"1:301740645078:web:07f8f35678910e15300777",measurementId:"G-XDKY9H4MQL"});var f=l.a.auth,p=l.a.firestore(),g={getMessages:function(){return Object(d.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p.collection("messages").then((function(n){var e=[];return n.forEach((function(n){e.push(n.data())})),e})));case 1:case"end":return n.stop()}}),n)})))()},observeMessages:function(n){p.collection("messages").onSnapshot(n)},sendMessage:function(n){return Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f().currentUser,p.collection("messages").add({user:{uid:t.uid,photo:t.photoURL,name:t.displayName,email:t.email},message:n,created:l.a.firestore.FieldValue.serverTimestamp()});case 2:case"end":return e.stop()}}),e)})))()}},x=t(9),b=t(10);function h(){var n=Object(x.a)(["\n  display: flex;\n  padding: 14px;\n  input {\n    flex-grow: 1;\n    border-radius: 0;\n    border: 1px solid #c2c2c2;\n    border-radius: 7px;\n    transition: 0.25s ease;\n    outline: none;\n    padding: 8px;\n    color: #1e94d2;\n    margin-right: 5px;\n  }\n\n  button {\n    background-color: #1e94d2;\n    color: #fff;\n    border: none;\n    text-transform: uppercase;\n    letter-spacing: 0.75px;\n    font-size: 12px;\n    padding: 0 16px;\n    border-radius: 7px;\n  }\n"]);return h=function(){return n},n}var j=b.a.div(h());var m=function(){var n=Object(i.useState)(""),e=Object(o.a)(n,2),t=e[0],a=e[1];function c(){g.sendMessage(t),a("")}return Object(r.jsxs)(j,{children:[Object(r.jsx)("input",{type:"text",value:t,placeholder:"Mensagem...",onChange:function(n){return a(n.target.value)},onSubmit:c}),""!=t&&Object(r.jsx)("button",{onClick:c,children:"Enviar"})]})};t(43);var v=function(n){var e=n.messages,t=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current.scrollTop=t.current.scrollHeight}),[e]),Object(r.jsx)("div",{className:"Messages",ref:t,children:e.map((function(n){var e=f().currentUser,t=n.user.uid===e.uid?"outgoing":"incoming";return Object(r.jsx)("div",{className:"Message ".concat(t),children:Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)("img",{src:n.user.photo,alt:n.user.displayName}),Object(r.jsx)("span",{children:n.message})]})},n.key)}))})},O=t(21),w=t(29);var y=function(){var n=Object(i.useState)([]),e=Object(o.a)(n,2),t=e[0],r=e[1],a=Object(w.a)(p.collection("messages").orderBy("created","desc").limit(500)),c=Object(o.a)(a,3),s=c[0],u=c[1],d=c[2];return Object(i.useEffect)((function(){var n=(null===s||void 0===s?void 0:s.docs.map((function(n){return Object(O.a)(Object(O.a)({},n.data()),{},{key:n.id})})).reverse())||[];r(n)}),[s]),{messages:t,loadingMessages:u,error:d}},k=t.p+"static/media/ig_text.9fa093ac.png";function S(){var n=Object(x.a)(["\n  width: 640px;\n  background-color: #fff;\n  position: sticky;\n  bottom: 0;\n\n  @media screen and (max-width: 768px){\n    width: 100%;\n  }\n"]);return S=function(){return n},n}function I(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  width: 640px;\n  min-height: 480px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    height: 100vh;\n    img {\n      width: 30%;\n    }\n  }\n"]);return I=function(){return n},n}function L(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\nbackground-color: #fff;\nposition: sticky;\ntop: 0;\nborder: 1px solid #EFEFEF;\n#logo {\n    width: 20%;\n    top: 0;\n    transition: 0.25s ease;\n    align-self: center;\n    :hover {\n      transform: scale(1.8);\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n   \n    #logo {\n      width: 30%;\n    }\n  }\n"]);return L=function(){return n},n}var E=b.a.div(L()),M=b.a.div(I()),G=b.a.div(S());var A=function(){var n=y().messages;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(M,{children:[Object(r.jsx)(E,{children:Object(r.jsx)("img",{id:"logo",src:k,alt:"logo"})}),Object(r.jsx)(v,{messages:n})]}),Object(r.jsx)(G,{children:Object(r.jsx)(m,{})})]})};function N(){var n=Object(x.a)(['\n  width: 220px;\n  height: 220px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid #c8d6e5;\n\n  button {\n    color: #fff;\n    background-color: #3498db;\n    width: 70%;\n    padding: 4px;\n    border-radius: 7px;\n    border: none;\n    cursor: pointer;\n\n    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\n      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;\n  }\n  #text {\n    width: 50%;\n  }\n  #logo {\n    width: 55px;\n    height: 55px;\n  }\n  @media (max-width: 768px) {\n    border: none;\n    height: 100%;\n    background-color: #fafafa;\n\n    width: 100%;\n    justify-content: center;\n\n    #text {\n      width: 75%;\n      margin-bottom: 30px;\n    }\n\n    button {\n      font-size: 16px;\n      width: 75%;\n      height: 50px;\n      margin-top: 30px;\n    }\n  }\n']);return N=function(){return n},n}function U(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 15px;\n  background-color: red;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n  }\n"]);return U=function(){return n},n}function B(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n\n  #initial {\n    height: 420px;\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return B=function(){return n},n}function C(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    height: 100%;\n  }\n"]);return C=function(){return n},n}function F(){var n=Object(x.a)(["\n  background-color: #fafafa;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    background-color: #fafafa;\n  }\n"]);return F=function(){return n},n}var z=b.a.div(F()),J=b.a.div(C()),R=b.a.div(B()),T=b.a.div(U()),W=b.a.div(N()),D=t.p+"static/media/ig_initial.9c6581ff.png",K=t.p+"static/media/ig_logo.d82a0f32.png",V={isLoggedIn:function(){return Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f().currentUser;case 2:return e=n.sent,n.abrupt("return",!!e);case 4:case"end":return n.stop()}}),n)})))()},observeStatus:function(n){f().onAuthStateChanged(n)},loginWithGoogle:function(){return Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new f.GoogleAuthProvider,n.abrupt("return",f().signInWithPopup(e).then((function(n){return{token:n.credential.accessToken,user:n.user}})));case 2:case"end":return n.stop()}}),n)})))()}};function _(){return Object(r.jsx)(z,{children:Object(r.jsxs)(J,{children:[Object(r.jsx)(R,{children:Object(r.jsx)("img",{id:"initial",src:D,alt:"logo"})}),Object(r.jsx)(T,{children:Object(r.jsxs)(W,{children:[Object(r.jsx)("img",{id:"text",src:k,alt:"logo"}),Object(r.jsx)("img",{id:"logo",src:K,alt:"logo"}),Object(r.jsx)("button",{onClick:function(){V.loginWithGoogle()},children:"Login com Google"})]})})]})})}var H=function(){var n=Object(i.useState)(V.isLoggedIn()),e=Object(o.a)(n,2),t=e[0],a=e[1];return V.observeStatus((function(n){a(!!n)})),Object(r.jsx)("div",{className:"App",children:t?Object(r.jsx)(A,{}):Object(r.jsx)(_,{})})};c.a.render(Object(r.jsx)(H,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.63d0fb24.chunk.js.map