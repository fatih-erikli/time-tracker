(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{18:function(e,t,n){},22:function(e,t){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r,a,c,s=n(3),i=n.n(s),o=n(9),u=n.n(o),l=(n(18),n(5)),j=n(10),d=n(2),p=n(4),f=n(1),b=n.n(f),h=n(27),x=n(13),O=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.addEventListener("error",(function(){console.error("error",t.error)})),t.addEventListener("success",(function(t){var n=t.target;e(n.result)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e},y=function(){return Object(h.a)()},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,r=Object(s.useState)(n(localStorage.getItem(e)||t)),a=Object(p.a)(r,2),c=a[0],i=a[1];return[c,function(t){localStorage.setItem(e,t),i(t)}]},w=n(11),g=n.n(w),k="work-log",C="shareable-urls",S=[],N=function(e){S.push(e)},T=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return",Promise.resolve(a));case 2:if(!c){e.next=4;break}return e.abrupt("return",c);case 4:return c=new Promise((function(e){(r=indexedDB.open("time-tracker.",1)).addEventListener("upgradeneeded",(function(){console.log("upgradeneeded"),S.forEach((function(e){return e(r.result)}))})),r.addEventListener("success",(function(){e(r.result),a=r.result}))})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){return g()(JSON.stringify(e)).toString()};N(function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.createObjectStore(k,{autoIncrement:!1}).createIndex("dateCreation","dateCreation",{unique:!1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var E=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,n=t.transaction(k,"readwrite"),n.objectStore(k).clear(),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function P(e){return A.apply(this,arguments)}function A(){return A=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise(function(){var e=Object(d.a)(b.a.mark((function e(n){var r,a,c,s,i,o,u,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return c=e.sent,s=c.transaction(k,"readonly"),a=s.objectStore(k),i=a.index("dateCreation"),e.next=8,O(i.getAllKeys());case 8:return r=e.sent,o=r.map((function(e){return O(a.get(e))})),e.next=12,Promise.all(o);case 12:u=e.sent,j=r.map((function(e,t){return Object(l.a)({key:e},u[t])})).filter((function(e){return e.linkKey===t||!e.linkKey})),n(j);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return M=Object(d.a)(b.a.mark((function e(t){var n,r,a=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=new Promise(function(){var e=Object(d.a)(b.a.mark((function e(r){var a,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,c=a.transaction(k,"readwrite"),s=c.objectStore(k),i=n||y(),s.put(Object(l.a)(Object(l.a)({},t),{},{dateCreation:t.dateCreation||(new Date).toJSON(),key:i}),i).addEventListener("success",(function(){return r()}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function F(e,t){return H.apply(this,arguments)}function H(){return H=Object(d.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Promise(function(){var e=Object(d.a)(b.a.mark((function e(r){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,c=a.transaction(k,"readwrite"),c.objectStore(k).put(t,n).onsuccess=r;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var I="https://shareble-url-service.fatih-erikli.workers.dev/";N(function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.createObjectStore(C,{autoIncrement:!1}).createIndex("dateCreation","dateCreation",{unique:!1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var R=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I).concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(b.a.mark((function e(t,n,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I).concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({contentHash:r,worklog:n,key:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:return a=a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"metadata"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({urlKeys:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=(n=e.sent).urlKeys,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(d.a)(b.a.mark((function e(t,n,r){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r,e.prev=1,e.next=4,fetch(I,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({contentHash:n,worklog:t,key:r})});case 4:a=e.sent,e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(1),new Error("Failed.");case 10:if(400!==a.status){e.next=15;break}return e.next=13,a.json();case 13:(a=e.sent)["existing-document"]&&(c=a["existing-document"]);case 15:return e.next=17,U([c]);case 17:return a=(a=e.sent)[0],e.abrupt("return",{worklog:[],key:a.key,contentHash:a.contentHash,isCreated:c===r,dateCreation:a.dateCreation,dateModification:a.dateModification,viewCount:a.viewCount});case 20:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,r){return e.apply(this,arguments)}}();function B(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(b.a.mark((function e(t){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readonly"),a=r.objectStore(C),e.next=7,O(a.get(t));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,n,r){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(b.a.mark((function e(t,n,r,a){var c,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return c=e.sent,s=c.transaction(C,"readwrite"),i=s.objectStore(C),e.next=7,O(i.get(t));case 7:return o=e.sent,e.abrupt("return",O(i.put(Object(l.a)(Object(l.a)({},o),{},{contentHash:n,dateModification:r,viewCount:a}),t)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(d.a)(b.a.mark((function e(t){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readwrite"),a=r.objectStore(C),e.next=7,O(a.delete(t));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,n,r,a,c){return W.apply(this,arguments)}function W(){return W=Object(d.a)(b.a.mark((function e(t,n,r,a,c,s){var i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Promise(function(){var e=Object(d.a)(b.a.mark((function e(i){var o,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:o=e.sent,u=o.transaction(C,"readwrite"),l=u.objectStore(C),l.put({key:n,worklog:t,dateModification:c,dateCreation:a,contentHash:r,viewCount:s},n).addEventListener("success",Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",i);case 2:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function Z(){return $.apply(this,arguments)}function $(){return $=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise(function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,a,c,s,i,o,u,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readonly"),a=r.objectStore(C),c=a.index("dateCreation"),e.next=8,O(c.getAllKeys());case 8:return s=e.sent,i=s.map((function(e){return O(a.get(e))})),e.next=12,Promise.all(i);case 12:return o=e.sent,u=s.map((function(e,t){return Object(l.a)({key:e},o[t])})),e.next=16,U(s);case 16:j=e.sent,u=u.map((function(e){var t=j.find((function(t){return t.key===e.key}));return t?Object(l.a)(Object(l.a)({},e),{},{viewCount:t.viewCount,dateModification:t.dateModification,contentHash:t.contentHash}):e})),t(u);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}var _,Q=n(0),X=function(e){var t=e.seconds;return Object(Q.jsxs)("div",{className:"time",children:[Object(Q.jsxs)("div",{className:"hours",children:[Object(Q.jsx)("div",{className:"digits",children:Math.floor(t/60/60)}),Object(Q.jsx)("div",{className:"text",children:"hours"})]}),Object(Q.jsxs)("div",{className:"minutes",children:[Object(Q.jsx)("div",{className:"digits",children:Math.floor(t/60)%60}),Object(Q.jsx)("div",{className:"text",children:"minutes"})]}),Object(Q.jsxs)("div",{className:"seconds",children:[Object(Q.jsx)("div",{className:"digits",children:t%60}),Object(Q.jsx)("div",{className:"text",children:"seconds"})]})]})},ee=function(){var e=new Date,t=Object(s.useState)(e.getFullYear()),n=Object(p.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(e.getMonth()),i=Object(p.a)(c,2),o=i[0],u=i[1],l=Object(s.useState)(e.getDay()),j=Object(p.a)(l,2),d=j[0],f=j[1];return Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[Object(Q.jsxs)("select",{value:r,onChange:function(e){return a(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Year"}),new Array(100).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:r-t})}))]}),Object(Q.jsxs)("select",{value:o,onChange:function(e){return u(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Month"}),new Array(11).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:t+1})}))]}),Object(Q.jsxs)("select",{value:d,onChange:function(e){return f(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Day"}),new Array(30).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:t+1})}))]})]})},te=function(e){var t=e.value,n=e.onChange,r=Object(s.useRef)(null);return Object(s.useEffect)((function(){r.current&&(r.current.focus(),r.current.select())}),[]),Object(Q.jsx)("textarea",{ref:r,value:t,onChange:n})},ne=(n(24),n(12)),re=function(e){var t=e.workLogEntries,n=e.onChange,r=e.value,a=new Set(Object(ne.a)(t.map((function(e){return e.projectName}))));return Object(Q.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:Object(Q.jsxs)("select",{value:r||"",onChange:function(e){n(e.target.value)},children:[Object(Q.jsx)("option",{value:"",children:"Select..."}),Array.from(a).map((function(e){return Object(Q.jsx)("option",{value:e,children:e},e)}))]})})};var ae=function(e){var t=e.workLogEntriesFetcher,n=e.shareableUrlsFetcher,r=Object(s.useState)(!1),a=Object(p.a)(r,2),c=a[0],i=a[1],o=m("seconds",0,Number),u=Object(p.a)(o,2),f=u[0],h=u[1],O=m("isRunning",!1,Boolean),v=Object(p.a)(O,2),w=v[0],g=v[1],k=m("projectName",""),C=Object(p.a)(k,2),S=C[0],N=C[1],T=Object(s.useState)([]),A=Object(p.a)(T,2),M=A[0],H=A[1],I=Object(s.useState)(null),U=Object(p.a)(I,2),Y=U[0],z=U[1],W=Object(s.useState)(null),$=Object(p.a)(W,2),ne=$[0],ae=$[1],ce=Object(s.useState)([]),se=Object(p.a)(ce,2),ie=se[0],oe=se[1],ue=m("notes",""),le=Object(p.a)(ue,2),je=le[0],de=le[1],pe=m("ratePerHour",0,Number),fe=Object(p.a)(pe,2),be=fe[0],he=fe[1],xe=m("currency","USD"),Oe=Object(p.a)(xe,2),ve=Oe[0],ye=Oe[1],me=Object(s.useState)(null),we=Object(p.a)(me,2),ge=we[0],ke=we[1],Ce=Object(s.useState)(null),Se=Object(p.a)(Ce,2),Ne=Se[0],Te=Se[1],De=Object(s.useState)(!1),Ee=Object(p.a)(De,2),Pe=Ee[0],Ae=Ee[1],Le=Object(s.useState)(!1),Me=Object(p.a)(Le,2),Fe=Me[0],He=Me[1],Ie=Object(s.useState)(null),Re=Object(p.a)(Ie,2),Je=Re[0],Ue=Re[1],Ke=Object(s.useState)(null),Be=Object(p.a)(Ke,2),Ye=Be[0],qe=Be[1],ze=Object(s.useState)(null),Ge=Object(p.a)(ze,2),Ve=Ge[0],We=Ge[1],Ze=Object(s.useState)(!1),$e=Object(p.a)(Ze,2),_e=$e[0],Qe=$e[1],Xe=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,n=JSON.stringify({entries:t}),(r=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),r.setAttribute("download","work-log-database.json"),document.body.appendChild(r),r.click(),document.body.removeChild(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),et=Object(s.useMemo)((function(){return t||function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),!t){e.next=8;break}return e.next=4,R(t);case 4:n=e.sent,H(n.worklog),e.next=12;break;case 8:return e.next=10,P(t);case 10:r=e.sent,H(r);case 12:i(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[t]),tt=Object(s.useMemo)((function(){return n||Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:t=e.sent,oe(t);case 4:case"end":return e.stop()}}),e)})))}),[n]);Object(s.useEffect)((function(){z(D(M))}),[M]),Object(s.useEffect)((function(){var e;w?(localStorage.setItem("seconds",f),localStorage.setItem("isRunning",w)):localStorage.removeItem("isRunning"),0===f&&localStorage.removeItem("seconds"),null===(e=document.querySelector("link[rel='icon']"))||void 0===e||e.setAttribute("href",w&&f>0?"favicon-animated.ico":"favicon.ico")}),[w,f]),Object(s.useEffect)((function(){return w&&(_=setTimeout((function(){h(f+1)}),1e3)),function(){_&&clearTimeout(_)}}));var nt=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.next=3,L({key:y(),dateCreation:(new Date).toJSON(),projectName:S,seconds:f,notes:je,date:[t.getFullYear(),t.getMonth(),t.getDate()]});case 3:return de(""),g(!1),h(0),_&&clearTimeout(_),e.next=9,et();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=M.find((function(e){return e.key===ge})))||!ge){e.next=4;break}return e.next=4,F(t,ge);case 4:ke(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),at=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return e.next=4,et();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ct=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D(M),n=y(),Qe(!0),e.next=5,K(M,t,n);case 5:if(!(r=e.sent).isCreated){e.next=10;break}V(r.worklog,r.key,r.contentHash,r.dateCreation,r.dateModification,r.viewCount),e.next=15;break;case 10:return We("A link for the current state of the work log already exists."),e.next=13,B(r.key);case 13:e.sent||V(r.worklog,r.key,r.contentHash,r.dateCreation,r.dateModification,r.viewCount);case 15:tt(),Qe(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e,t=window.location.hash.slice(1).split("+"),n=Object(p.a)(t,2),r=n[0],a=n[1],c=(e=r,Object(x.a)(e));c&&ae(r),a&&Ue(a),et&&(c?et(r):et()),tt&&tt()}),[tt,et]);var st,it,ot=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t,M,Y);case 2:return n=e.sent,e.next=5,q(t,n.contentHash,n.dateModification,n.viewCount);case 5:tt();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ut=function(e){!function(e){G.apply(this,arguments)}(e),tt()},lt=(st=Je?M.filter((function(e){return e.projectName===Je})):M).reduce((function(e,t){return e+t.seconds}),0);return Object(Q.jsxs)("div",{id:"container",children:[Object(Q.jsx)("h3",{id:"logo",children:Object(Q.jsx)("a",{href:"/",children:"Time tracker"})}),ne&&Object(Q.jsxs)("h2",{children:["Currently viewing the work log with the key ",ne]}),Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(Q.jsxs)("div",{style:{},children:[Object(Q.jsx)("label",{htmlFor:"project-id",children:"Project"}),Object(Q.jsx)("input",{id:"project-id",type:"text",value:S,onChange:function(e){return N(e.target.value)}})]}),Object(Q.jsx)(X,{seconds:f})]}),Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(Q.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(Q.jsx)("textarea",{id:"notes",value:je,onChange:function(e){return de(e.target.value)},rows:4})]}),Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left",gap:5,marginTop:5},children:[Object(Q.jsx)("button",{onClick:function(){_&&clearTimeout(_),g(!w)},children:w?"Pause":0===f?"Start":"Continue"}),f>0&&!w&&Object(Q.jsx)("button",{onClick:function(){h(0)},children:"Reset"}),f>0&&Object(Q.jsx)("button",{onClick:function(){return nt()},children:"Save"})]}),Object(Q.jsx)("h3",{children:"Work log"}),Object(Q.jsxs)("table",{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsxs)("th",{className:"table-header-project",children:[Object(Q.jsx)("a",{href:"#filter-project-name",onClick:function(e){e.preventDefault(),He(!Fe)},children:"Project"}),Fe&&Object(Q.jsx)(re,{value:Je,onChange:function(e){return Ue(e)},workLogEntries:M})]}),Object(Q.jsx)("th",{className:"table-header-time",children:"Duration"}),Object(Q.jsxs)("th",{className:"table-header-date",children:[Object(Q.jsx)("a",{href:"#filter-bar",style:{textDecoration:"none"},onClick:function(e){e.preventDefault(),Ae(!Pe)},children:"Date"}),Pe&&Object(Q.jsx)(ee,{})]}),Object(Q.jsx)("th",{className:"table-header-description",children:"Description"})]})}),Object(Q.jsxs)("tbody",{children:[c&&Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{colSpan:4,children:"Loading."})}),!c&&0===M.length&&Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{colSpan:4,children:"No data."})}),st.map((function(e){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{style:{verticalAlign:"top",cursor:"pointer"},onClick:function(){ke(e.key),Te("projectName")},children:ge&&ge===e.key&&"projectName"===Ne?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("input",{type:"text",onChange:function(e){H(M.map((function(t){return t.key===ge?Object(l.a)(Object(l.a)({},t),{},{projectName:e.target.value}):t})))},value:e.projectName}),Object(Q.jsx)("button",{onClick:rt,style:{width:"40%",marginTop:3},children:"Save"})]}):e.projectName}),Object(Q.jsx)("td",{style:{verticalAlign:"top"},children:Object(Q.jsx)(X,{seconds:e.seconds})}),Object(Q.jsx)("td",{className:"date-cell",onClick:function(){ke(e.key),Te("date")},style:{cursor:"pointer"},children:ge&&ge===e.key&&"date"===Ne?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{style:{display:"flex",justifyContent:"space-between",gap:2},children:e.date.map((function(e,t){return Object(Q.jsx)("input",{onChange:function(e){H(M.map((function(n){return n.key===ge?Object(l.a)(Object(l.a)({},n),{},{date:n.date.map((function(n,r){return t===r?Number(e.target.value):n}))}):n})))},style:{width:0===t?"60%":"20%"},value:e+1},t)}))}),Object(Q.jsx)("button",{onClick:rt,style:{width:"60%",marginTop:3},children:"Save"})]}):function(e){var t=Object(p.a)(e,3),n=t[0],r=t[1],a=t[2];return Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(Q.jsx)("span",{className:"date-separator",children:n}),"/",Object(Q.jsx)("span",{className:"date-separator",children:r+1}),"/",Object(Q.jsx)("span",{className:"date-separator",children:a})]})}(e.date)}),Object(Q.jsx)("td",{onClick:function(){ke(e.key),Te("notes")},style:{verticalAlign:"top",cursor:"pointer"},children:ge&&ge===e.key&&"notes"===Ne?Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(Q.jsx)(te,{onChange:function(e){H(M.map((function(t){return t.key===ge?Object(l.a)(Object(l.a)({},t),{},{notes:e.target.value}):t})))},value:e.notes}),Object(Q.jsx)("button",{onClick:rt,style:{width:"20%",marginTop:3},children:"Save"})]}):Object(Q.jsx)("div",{style:{whiteSpace:"break-spaces"},children:e.notes})})]},e.key)})),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("tr",{className:"total",children:[Object(Q.jsx)("td",{children:"Total"}),Object(Q.jsx)("td",{children:Object(Q.jsx)(X,{seconds:lt})}),Object(Q.jsxs)("td",{rowSpan:2,style:{verticalAlign:"bottom",textAlign:"center"},children:["Todays date",(it=new Date,Object(Q.jsxs)("div",{style:{display:"flex",width:"200",justifyContent:"space-around"},children:[Object(Q.jsx)("span",{className:"date-separator",children:it.getFullYear()}),"/",Object(Q.jsx)("span",{className:"date-separator",children:it.getMonth()+1}),"/",Object(Q.jsx)("span",{className:"date-separator",children:it.getDate()})]}))]}),Object(Q.jsx)("td",{style:{verticalAlign:"top"}})]}),Object(Q.jsxs)("tr",{className:"total-payment",children:[Object(Q.jsx)("td",{}),Object(Q.jsxs)("td",{children:["Rate per hour",Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:3,marginTop:3},children:[Object(Q.jsx)("input",{type:"number",value:be,style:{width:"60%"},onChange:function(e){return he(e.target.value)}}),Object(Q.jsx)("select",{style:{width:"40%"},onChange:function(e){return ye(e.target.value)},value:ve,name:"currency",children:["USD","TL","EUR"].map((function(e){return Object(Q.jsx)("option",{children:e},e)}))})]})]}),Object(Q.jsxs)("td",{colSpan:1,style:{},children:["Payment in total",Object(Q.jsxs)("div",{style:{fontSize:"2rem"},children:[Number(lt/60/60*be).toFixed(2),{USD:"$",EUR:"\u20ac",TL:"TL"}[ve]]})]})]})]})]})]}),Object(Q.jsx)("h3",{children:"Load a database"}),Object(Q.jsx)("p",{children:Object(Q.jsx)("input",{onChange:function(e){if(qe(null),e.target){var t=e.target.files;if(t){var n=new FileReader;n.onload=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target){e.next=2;break}return e.abrupt("return");case 2:e.prev=2,n=JSON.parse(t.target.result),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(2),qe("Provide a valid JSON file."),e.abrupt("return");case 10:r=n.entries,a=Object(j.a)(r),e.prev=12,a.s();case 14:if((c=a.n()).done){e.next=20;break}return s=c.value,e.next=18,L(s,s.key);case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(12),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return We("Database loaded successfully."),e.next=31,et();case 31:case"end":return e.stop()}}),e,null,[[2,6],[12,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),n.readAsText(t[0])}}},type:"file"})}),Object(Q.jsx)("h3",{children:"Export current database"}),Object(Q.jsxs)("p",{style:{display:"flex",gap:5},children:[Object(Q.jsx)("button",{onClick:function(e){e.preventDefault(),Xe()},children:Object(Q.jsx)("span",{children:"Export"})}),Object(Q.jsx)("button",{disabled:_e,onClick:function(){return ct()},children:_e?"Creating a shareable url...":"Create a shareable URL of database"})]}),ie.length>0&&Object(Q.jsxs)("table",{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{style:{width:"25%"},children:"Key"}),Object(Q.jsx)("th",{style:{width:"25%"},children:"Hash"}),Object(Q.jsx)("th",{style:{width:"25%"},children:"Last modification"}),Object(Q.jsx)("th",{style:{width:"10%"},children:"Views"}),Object(Q.jsx)("th",{style:{width:"15%"}})]})}),Object(Q.jsx)("tbody",{children:ie.map((function(e){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{children:Object(Q.jsx)("a",{target:"_blank",rel:"noreferrer",href:"#".concat(e.key),children:"Open link in new window"})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("div",{style:{display:"flex",padding:0},children:Object(Q.jsx)("span",{title:e.contentHash,className:"long-hash",children:e.contentHash})})}),Object(Q.jsx)("td",{children:new Date(e.dateModification||e.dateCreation).toLocaleString("en-US",{timeZone:"UTC"})}),Object(Q.jsx)("td",{children:e.viewCount||0}),Object(Q.jsx)("td",{children:Object(Q.jsxs)("div",{style:{display:"flex",gap:3},children:[Object(Q.jsx)("button",{disabled:e.contentHash===Y,onClick:function(){return ot(e.key)},title:"Push changes to the shared link",children:"Sync..."}),Object(Q.jsx)("button",{onClick:function(){return ut(e.key)},title:"Delete the current link",children:"Delete"})]})})]},e.key)}))})]}),Ye&&Object(Q.jsx)("p",{className:"error",children:Ye}),Ve&&Object(Q.jsx)("p",{className:"info",children:Ve}),Object(Q.jsx)("h3",{children:"Reset current database"}),Object(Q.jsx)("p",{children:Object(Q.jsx)("button",{onClick:function(){window.confirm("Are you really sure to reset the current database?")&&at()},children:Object(Q.jsx)("span",{children:"Reset"})})}),Object(Q.jsxs)("footer",{children:["Fatih Erikli, MIT Licensed, 2021-2022.",Object(Q.jsx)("br",{}),"Source code available on"," ",Object(Q.jsx)("a",{style:{color:"gray"},target:"blank",href:"https://github.com/fatih-erikli/time-tracker",children:"github"}),"."]})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};u.a.render(Object(Q.jsx)(i.a.StrictMode,{children:Object(Q.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[25,1,2]]]);
//# sourceMappingURL=main.ce1ecc34.chunk.js.map