(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{16:function(e,t,n){},20:function(e,t){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r,a,c,s=n(3),i=n.n(s),o=n(8),u=n.n(o),l=(n(16),n(5)),d=n(1),j=n.n(d),p=n(9),f=n(2),b=n(4),h=n(25),x=n(11),O=function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.addEventListener("error",(function(){console.error("error",t.error)})),t.addEventListener("success",(function(t){console.log("success");var n=t.target;e(n.result)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e},y=function(){return Object(h.a)()},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v,r=Object(s.useState)(n(localStorage.getItem(e)||t)),a=Object(b.a)(r,2),c=a[0],i=a[1];return[c,function(t){localStorage.setItem(e,t),i(t)}]},w=n(10),g=n.n(w),k="work-log",C="shareable-urls",S=[],N=function(e){console.log("add upgrade handler"),S.push(e)},T=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return",Promise.resolve(a));case 2:if(!c){e.next=4;break}return e.abrupt("return",c);case 4:return c=new Promise((function(e){(r=indexedDB.open("time-tracker.",1)).addEventListener("upgradeneeded",(function(){console.log("upgradeneeded"),S.forEach((function(e){return e(r.result)}))})),r.addEventListener("success",(function(){e(r.result),a=r.result}))})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){return g()(JSON.stringify(e)).toString()};N(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.createObjectStore(k,{autoIncrement:!1}).createIndex("dateCreation","dateCreation",{unique:!1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var P=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,n=t.transaction(k,"readwrite"),n.objectStore(k).clear(),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function E(e){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise(function(){var e=Object(f.a)(j.a.mark((function e(n){var r,a,c,s,i,o,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return c=e.sent,s=c.transaction(k,"readonly"),a=s.objectStore(k),i=a.index("dateCreation"),e.next=8,O(i.getAllKeys());case 8:return r=e.sent,o=r.map((function(e){return O(a.get(e))})),e.next=12,Promise.all(o);case 12:u=e.sent,d=r.map((function(e,t){return Object(l.a)({key:e},u[t])})).filter((function(e){return e.linkKey===t||!e.linkKey})),n(d);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return L.apply(this,arguments)}function L(){return(L=Object(f.a)(j.a.mark((function e(t){var n,r,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=new Promise(function(){var e=Object(f.a)(j.a.mark((function e(r){var a,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,c=a.transaction(k,"readwrite"),s=c.objectStore(k),i=n||y(),s.put(Object(l.a)(Object(l.a)({},t),{},{dateCreation:t.dateCreation||(new Date).toJSON(),key:i}),i).addEventListener("success",(function(){return r()}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return H.apply(this,arguments)}function H(){return(H=Object(f.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Promise(function(){var e=Object(f.a)(j.a.mark((function e(r){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,c=a.transaction(k,"readwrite"),c.objectStore(k).put(t,n).onsuccess=r;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I="https://shareble-url-service.fatih-erikli.workers.dev/";N(function(){var e=Object(f.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.createObjectStore(C,{autoIncrement:!1}).createIndex("dateCreation","dateCreation",{unique:!1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var R=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I).concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(j.a.mark((function e(t,n,r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I).concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({contentHash:r,worklog:n,key:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:return a=a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"metadata"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({urlKeys:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=(n=e.sent).urlKeys,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(j.a.mark((function e(t,n,r){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r,e.prev=1,e.next=4,fetch(I,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({contentHash:n,worklog:t,key:r})});case 4:a=e.sent,e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(1),new Error("Failed.");case 10:if(400!==a.status){e.next=15;break}return e.next=13,a.json();case 13:(a=e.sent)["existing-document"]&&(c=a["existing-document"]);case 15:return e.next=17,fetch("".concat(I).concat(c));case 17:return a=e.sent,e.next=20,a.json();case 20:return a=e.sent,e.abrupt("return",{worklog:a.worklog,key:a.key,contentHash:a.contentHash,isCreated:c===r,dateCreation:a.dateCreation,dateModification:a.dateModification,viewCount:a.viewCount});case 22:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,r){return e.apply(this,arguments)}}();function B(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readonly"),a=r.objectStore(C),e.next=7,O(a.get(t));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,n,r){return z.apply(this,arguments)}function z(){return(z=Object(f.a)(j.a.mark((function e(t,n,r,a){var c,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return c=e.sent,s=c.transaction(C,"readwrite"),i=s.objectStore(C),e.next=7,O(i.get(t));case 7:return o=e.sent,e.abrupt("return",O(i.put(Object(l.a)(Object(l.a)({},o),{},{contentHash:n,dateModification:r,viewCount:a}),t)));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(f.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readwrite"),a=r.objectStore(C),e.next=7,O(a.delete(t));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,n,r,a,c){return W.apply(this,arguments)}function W(){return(W=Object(f.a)(j.a.mark((function e(t,n,r,a,c,s){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Promise(function(){var e=Object(f.a)(j.a.mark((function e(i){var o,u,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:o=e.sent,u=o.transaction(C,"readwrite"),l=u.objectStore(C),l.put({key:n,worklog:t,dateModification:c,dateCreation:a,contentHash:r,viewCount:s},n).addEventListener("success",Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",i);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return $.apply(this,arguments)}function $(){return($=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise(function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r,a,c,s,i,o,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,r=n.transaction(C,"readonly"),a=r.objectStore(C),c=a.index("dateCreation"),e.next=8,O(c.getAllKeys());case 8:return s=e.sent,i=s.map((function(e){return O(a.get(e))})),e.next=12,Promise.all(i);case 12:return o=e.sent,u=s.map((function(e,t){return Object(l.a)({key:e},o[t])})),e.next=16,U(s);case 16:d=e.sent,u=u.map((function(e){var t=d.find((function(t){return t.key===e.key}));return t?Object(l.a)(Object(l.a)({},e),{},{viewCount:t.viewCount,dateModification:t.dateModification,contentHash:t.contentHash}):e})),t(u);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _,Q=n(0),X=function(e){var t=e.seconds;return Object(Q.jsxs)("div",{className:"time",children:[Object(Q.jsxs)("div",{className:"hours",children:[Object(Q.jsx)("div",{className:"digits",children:Math.floor(t/60/60)}),Object(Q.jsx)("div",{className:"text",children:"hours"})]}),Object(Q.jsxs)("div",{className:"minutes",children:[Object(Q.jsx)("div",{className:"digits",children:Math.floor(t/60)%60}),Object(Q.jsx)("div",{className:"text",children:"minutes"})]}),Object(Q.jsxs)("div",{className:"seconds",children:[Object(Q.jsx)("div",{className:"digits",children:t%60}),Object(Q.jsx)("div",{className:"text",children:"seconds"})]})]})},ee=function(){var e=new Date,t=Object(s.useState)(e.getFullYear()),n=Object(b.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(e.getMonth()),i=Object(b.a)(c,2),o=i[0],u=i[1],l=Object(s.useState)(e.getDay()),d=Object(b.a)(l,2),j=d[0],p=d[1];return Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[Object(Q.jsxs)("select",{value:r,onChange:function(e){return a(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Year"}),new Array(100).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:r-t})}))]}),Object(Q.jsxs)("select",{value:o,onChange:function(e){return u(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Month"}),new Array(11).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:o-t})}))]}),Object(Q.jsxs)("select",{value:j,onChange:function(e){return p(Number(e.target.value))},children:[Object(Q.jsx)("option",{children:"Day"}),new Array(30).fill(0).map((function(e,t){return Object(Q.jsx)("option",{children:j-t})}))]})]})},te=function(e){var t=e.value,n=e.onChange,r=Object(s.useRef)(null);return Object(s.useEffect)((function(){r.current&&(r.current.focus(),r.current.select())}),[]),Object(Q.jsx)("textarea",{ref:r,value:t,onChange:n})};n(22);var ne=function(e){var t=e.workLogEntriesFetcher,n=e.shareableUrlsFetcher,r=Object(s.useState)(!1),a=Object(b.a)(r,2),c=a[0],i=a[1],o=m("seconds",0,Number),u=Object(b.a)(o,2),d=u[0],h=u[1],O=m("isRunning",!1,Boolean),v=Object(b.a)(O,2),w=v[0],g=v[1],k=m("projectName",""),C=Object(b.a)(k,2),S=C[0],N=C[1],T=Object(s.useState)([]),A=Object(b.a)(T,2),L=A[0],H=A[1],I=Object(s.useState)(null),U=Object(b.a)(I,2),B=U[0],Y=U[1],z=Object(s.useState)(null),W=Object(b.a)(z,2),$=W[0],ne=W[1],re=Object(s.useState)([]),ae=Object(b.a)(re,2),ce=ae[0],se=ae[1],ie=m("notes",""),oe=Object(b.a)(ie,2),ue=oe[0],le=oe[1],de=m("ratePerHour",0,Number),je=Object(b.a)(de,2),pe=je[0],fe=je[1],be=m("currency","USD"),he=Object(b.a)(be,2),xe=he[0],Oe=he[1],ve=Object(s.useState)(null),ye=Object(b.a)(ve,2),me=ye[0],we=ye[1],ge=Object(s.useState)(null),ke=Object(b.a)(ge,2),Ce=ke[0],Se=ke[1],Ne=Object(s.useState)(!1),Te=Object(b.a)(Ne,2),De=Te[0],Pe=Te[1],Ee=Object(s.useState)(null),Ae=Object(b.a)(Ee,2),Me=Ae[0],Le=Ae[1],Fe=Object(s.useState)(null),He=Object(b.a)(Fe,2),Ie=He[0],Re=He[1],Je=Object(s.useState)(!1),Ue=Object(b.a)(Je,2),Ke=Ue[0],Be=Ue[1],Ye=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,n=JSON.stringify({entries:t}),(r=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),r.setAttribute("download","work-log-database.json"),document.body.appendChild(r),r.click(),document.body.removeChild(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=Object(s.useMemo)((function(){return t||function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),!t){e.next=8;break}return e.next=4,R(t);case 4:n=e.sent,H(n.worklog),e.next=12;break;case 8:return e.next=10,E(t);case 10:r=e.sent,H(r);case 12:i(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[t]),ze=Object(s.useMemo)((function(){return n||Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:t=e.sent,se(t);case 4:case"end":return e.stop()}}),e)})))}),[n]);Object(s.useEffect)((function(){Y(D(L))}),[L]),Object(s.useEffect)((function(){var e;w?(localStorage.setItem("seconds",d),localStorage.setItem("isRunning",w)):localStorage.removeItem("isRunning"),0===d&&localStorage.removeItem("seconds"),null===(e=document.querySelector("link[rel='icon']"))||void 0===e||e.setAttribute("href",w&&d>0?"favicon-animated.ico":"favicon.ico")}),[w,d]),Object(s.useEffect)((function(){return w&&(_=setTimeout((function(){h(d+1)}),1e3)),function(){_&&clearTimeout(_)}}));var Ge=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.next=3,M({key:y(),dateCreation:(new Date).toJSON(),projectName:S,seconds:d,notes:ue,date:[t.getFullYear(),t.getMonth(),t.getDate()]});case 3:return le(""),g(!1),h(0),_&&clearTimeout(_),e.next=9,qe();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=L.find((function(e){return e.key===me})))||!me){e.next=4;break}return e.next=4,F(t,me);case 4:we(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){var e=Object(f.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.next=4,qe();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=L.reduce((function(e,t){return e+t.seconds}),0),$e=function(){var e=Object(f.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D(L),n=y(),Be(!0),e.next=5,K(L,t,n);case 5:(r=e.sent).isCreated?V(r.worklog,r.key,r.contentHash,r.dateCreation,r.dateModification,r.viewCount):Re("A link for the current state of the work log already exists."),ze(),Be(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e,t=window.location.hash.slice(1),n=(e=t,Object(x.a)(e));n&&ne(t),qe&&(n?qe(t):qe()),ze&&ze()}),[ze,qe]);var _e,Qe=function(){var e=Object(f.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t,L,B);case 2:return n=e.sent,e.next=5,q(t,n.contentHash,n.dateModification,n.viewCount);case 5:ze();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Xe=function(e){!function(e){G.apply(this,arguments)}(e),ze()};return Object(Q.jsxs)("div",{id:"container",children:[Object(Q.jsx)("h3",{id:"logo",children:Object(Q.jsx)("a",{href:"/",children:"Time tracker"})}),$&&Object(Q.jsxs)("h2",{children:["Currently viewing the work log with the key ",$]}),Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(Q.jsxs)("div",{style:{},children:[Object(Q.jsx)("label",{htmlFor:"project-id",children:"Project"}),Object(Q.jsx)("input",{id:"project-id",type:"text",value:S,onChange:function(e){return N(e.target.value)}})]}),Object(Q.jsx)(X,{seconds:d})]}),Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(Q.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(Q.jsx)("textarea",{id:"notes",value:ue,onChange:function(e){return le(e.target.value)},rows:4})]}),Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left",gap:5,marginTop:5},children:[Object(Q.jsx)("button",{onClick:function(){_&&clearTimeout(_),g(!w)},children:w?"Pause":0===d?"Start":"Continue"}),d>0&&!w&&Object(Q.jsx)("button",{onClick:function(){h(0)},children:"Reset"}),d>0&&Object(Q.jsx)("button",{onClick:function(){return Ge()},children:"Save"})]}),Object(Q.jsx)("h3",{children:"Work log"}),Object(Q.jsxs)("table",{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{className:"table-header-project",children:"Project"}),Object(Q.jsx)("th",{className:"table-header-time",children:"Time"}),Object(Q.jsxs)("th",{className:"table-header-date",children:[Object(Q.jsx)("a",{href:"#filter-bar",onClick:function(e){e.preventDefault(),Pe(!De)},children:"Date"}),De&&Object(Q.jsx)(ee,{})]}),Object(Q.jsx)("th",{className:"table-header-description",children:"Description"})]})}),Object(Q.jsxs)("tbody",{children:[c&&Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{colSpan:4,children:"Loading."})}),!c&&0===L.length&&Object(Q.jsx)("tr",{children:Object(Q.jsx)("td",{colSpan:4,children:"No data."})}),L.map((function(e){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{style:{verticalAlign:"top"},children:e.projectName}),Object(Q.jsx)("td",{style:{verticalAlign:"top"},children:Object(Q.jsx)(X,{seconds:e.seconds})}),Object(Q.jsx)("td",{className:"date-cell",onClick:function(){we(e.key),Se("date")},style:{cursor:"pointer"},children:me&&me===e.key&&"date"===Ce?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{style:{display:"flex",justifyContent:"space-between",gap:2},children:e.date.map((function(e,t){return Object(Q.jsx)("input",{onChange:function(e){H(L.map((function(n){return n.key===me?Object(l.a)(Object(l.a)({},n),{},{date:n.date.map((function(n,r){return t===r?Number(e.target.value):n}))}):n})))},style:{width:0===t?"60%":"20%"},value:e},t)}))}),Object(Q.jsx)("button",{onClick:Ve,style:{width:"60%",marginTop:3},children:"Save"})]}):function(e){var t=Object(b.a)(e,3),n=t[0],r=t[1],a=t[2];return Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(Q.jsx)("span",{className:"date-separator",children:n}),"/",Object(Q.jsx)("span",{className:"date-separator",children:r+1}),"/",Object(Q.jsx)("span",{className:"date-separator",children:a})]})}(e.date)}),Object(Q.jsx)("td",{onClick:function(){we(e.key),Se("notes")},style:{verticalAlign:"top",cursor:"pointer"},children:me&&me===e.key&&"notes"===Ce?Object(Q.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(Q.jsx)(te,{onChange:function(e){H(L.map((function(t){return t.key===me?Object(l.a)(Object(l.a)({},t),{},{notes:e.target.value}):t})))},value:e.notes}),Object(Q.jsx)("button",{onClick:Ve,style:{width:"20%",marginTop:3},children:"Save"})]}):Object(Q.jsx)("div",{style:{whiteSpace:"break-spaces"},children:e.notes})})]},e.key)})),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("tr",{className:"total",children:[Object(Q.jsx)("td",{children:"Total"}),Object(Q.jsx)("td",{children:Object(Q.jsx)(X,{seconds:Ze})}),Object(Q.jsxs)("td",{rowSpan:2,style:{verticalAlign:"bottom",textAlign:"center"},children:["Todays date",(_e=new Date,Object(Q.jsxs)("div",{style:{display:"flex",width:"200",justifyContent:"space-around"},children:[Object(Q.jsx)("span",{className:"date-separator",children:_e.getFullYear()}),"/",Object(Q.jsx)("span",{className:"date-separator",children:_e.getMonth()+1}),"/",Object(Q.jsx)("span",{className:"date-separator",children:_e.getDate()})]}))]}),Object(Q.jsx)("td",{style:{verticalAlign:"top"}})]}),Object(Q.jsxs)("tr",{className:"total-payment",children:[Object(Q.jsx)("td",{}),Object(Q.jsxs)("td",{children:["Rate per hour",Object(Q.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:3,marginTop:3},children:[Object(Q.jsx)("input",{type:"number",value:pe,style:{width:"60%"},onChange:function(e){return fe(e.target.value)}}),Object(Q.jsx)("select",{style:{width:"40%"},onChange:function(e){return Oe(e.target.value)},value:xe,name:"currency",children:["USD","TL","EUR"].map((function(e){return Object(Q.jsx)("option",{children:e},e)}))})]})]}),Object(Q.jsxs)("td",{colSpan:1,style:{},children:["Payment in total",Object(Q.jsxs)("div",{style:{fontSize:"2rem"},children:[Number(Ze/60/60*pe).toFixed(2),{USD:"$",EUR:"\u20ac",TL:"TL"}[xe]]})]})]})]})]})]}),Object(Q.jsx)("h3",{children:"Load a database"}),Object(Q.jsx)("p",{children:Object(Q.jsx)("input",{onChange:function(e){if(Le(null),e.target){var t=e.target.files;if(t){var n=new FileReader;n.onload=function(){var e=Object(f.a)(j.a.mark((function e(t){var n,r,a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target){e.next=2;break}return e.abrupt("return");case 2:e.prev=2,n=JSON.parse(t.target.result),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(2),Le("Provide a valid JSON file."),e.abrupt("return");case 10:r=n.entries,a=Object(p.a)(r),e.prev=12,a.s();case 14:if((c=a.n()).done){e.next=20;break}return s=c.value,e.next=18,M(s,s.key);case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(12),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return Re("Database loaded successfully."),e.next=31,qe();case 31:case"end":return e.stop()}}),e,null,[[2,6],[12,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),n.readAsText(t[0])}}},type:"file"})}),Object(Q.jsx)("h3",{children:"Export current database"}),Object(Q.jsxs)("p",{style:{display:"flex",gap:5},children:[Object(Q.jsx)("button",{onClick:function(e){e.preventDefault(),Ye()},children:Object(Q.jsx)("span",{children:"Export"})}),Object(Q.jsx)("button",{disabled:Ke,onClick:function(){return $e()},children:Ke?"Creating a shareable url...":"Create a shareable URL of database"})]}),ce.length>0&&Object(Q.jsxs)("table",{children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{style:{width:"25%"},children:"Key"}),Object(Q.jsx)("th",{style:{width:"25%"},children:"Hash"}),Object(Q.jsx)("th",{style:{width:"25%"},children:"Last modification"}),Object(Q.jsx)("th",{style:{width:"10%"},children:"Views"}),Object(Q.jsx)("th",{style:{width:"15%"}})]})}),Object(Q.jsx)("tbody",{children:ce.map((function(e){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{children:Object(Q.jsx)("a",{target:"_blank",rel:"noreferrer",href:"#".concat(e.key),children:"Open link in new window"})}),Object(Q.jsx)("td",{children:Object(Q.jsx)("div",{style:{display:"flex",padding:0},children:Object(Q.jsx)("span",{title:e.contentHash,className:"long-hash",children:e.contentHash})})}),Object(Q.jsx)("td",{children:new Date(e.dateModification||e.dateCreation).toLocaleString("en-US",{timeZone:"UTC"})}),Object(Q.jsx)("td",{children:e.viewCount}),Object(Q.jsx)("td",{children:Object(Q.jsxs)("div",{style:{display:"flex",gap:3},children:[Object(Q.jsx)("button",{disabled:e.contentHash===B,onClick:function(){return Qe(e.key)},title:"Push changes to the shared link",children:"Sync..."}),Object(Q.jsx)("button",{onClick:function(){return Xe(e.key)},title:"Delete the current link",children:"Delete"})]})})]},e.key)}))})]}),Me&&Object(Q.jsx)("p",{className:"error",children:Me}),Ie&&Object(Q.jsx)("p",{className:"info",children:Ie}),Object(Q.jsx)("h3",{children:"Reset current database"}),Object(Q.jsx)("p",{children:Object(Q.jsx)("button",{onClick:function(){window.confirm("Are you really sure to reset the current database?")&&We()},children:Object(Q.jsx)("span",{children:"Reset"})})}),Object(Q.jsxs)("footer",{children:["Fatih Erikli, MIT Licensed, 2021.",Object(Q.jsx)("br",{}),"Source code available on"," ",Object(Q.jsx)("a",{style:{color:"gray"},target:"blank",href:"https://github.com/fatih-erikli/time-tracker",children:"github"}),"."]})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};u.a.render(Object(Q.jsx)(i.a.StrictMode,{children:Object(Q.jsx)(ne,{})}),document.getElementById("root")),re()}},[[23,1,2]]]);
//# sourceMappingURL=main.1381f0f8.chunk.js.map