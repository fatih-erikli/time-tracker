(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(8),s=n.n(a),i=(n(14),n(5)),o=n(1),u=n.n(o),l=n(9),j=n(4),d=n(3),b=n(20),p=function(e){return e},f=function(){return Object(b.a)()},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p,c=Object(r.useState)(n(localStorage.getItem(e)||t)),a=Object(d.a)(c,2),s=a[0],i=a[1];return[s,function(t){localStorage.setItem(e,t),i(t)}]},x="work-log",O=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.addEventListener("success",(function(t){var n=t.target;e(n.result)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=indexedDB.open("time-tracker",1)).addEventListener("upgradeneeded",(function(){n.result.createObjectStore(x,{autoIncrement:!1}).createIndex("dateCreation","dateCreation",{unique:!1})})),n.addEventListener("success",(function(){t(n.result)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,n=t.transaction(x,"readwrite"),n.objectStore(x).clear(),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function y(){return g.apply(this,arguments)}function g(){return g=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,c,a,s,o,l,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,r=n.transaction(x,"readonly"),c=r.objectStore(x),a=c.index("dateCreation"),e.next=8,O(a.getAllKeys());case 8:return s=e.sent,o=s.map((function(e){return O(c.get(e))})),e.next=12,Promise.all(o);case 12:l=e.sent,j=s.map((function(e,t){return Object(i.a)({key:e},l[t])})),t(j);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return k=Object(j.a)(u.a.mark((function e(t){var n,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"",r=new Promise(function(){var e=Object(j.a)(u.a.mark((function e(r){var c,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:c=e.sent,a=c.transaction(x,"readwrite"),s=a.objectStore(x),o=n||f(),s.put(Object(i.a)(Object(i.a)({},t),{},{dateCreation:t.dateCreation||(new Date).toJSON(),key:o}),o).addEventListener("success",(function(){return r()}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function C(e,t){return N.apply(this,arguments)}function N(){return N=Object(j.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Promise(function(){var e=Object(j.a)(u.a.mark((function e(r){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:c=e.sent,a=c.transaction(x,"readwrite"),a.objectStore(x).put(t,n).onsuccess=r;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}var S,D=n(0),T=function(e){var t=e.seconds;return Object(D.jsxs)("div",{className:"time",children:[Object(D.jsxs)("div",{className:"hours",children:[Object(D.jsx)("div",{className:"digits",children:Math.floor(t/60/60)}),Object(D.jsx)("div",{className:"text",children:"hours"})]}),Object(D.jsxs)("div",{className:"minutes",children:[Object(D.jsx)("div",{className:"digits",children:Math.floor(t/60)%60}),Object(D.jsx)("div",{className:"text",children:"minutes"})]}),Object(D.jsxs)("div",{className:"seconds",children:[Object(D.jsx)("div",{className:"digits",children:t%60}),Object(D.jsx)("div",{className:"text",children:"seconds"})]})]})},E=function(){var e=new Date,t=Object(r.useState)(e.getFullYear()),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(e.getMonth()),i=Object(d.a)(s,2),o=i[0],u=i[1],l=Object(r.useState)(e.getDay()),j=Object(d.a)(l,2),b=j[0],p=j[1];return Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:3},children:[Object(D.jsxs)("select",{value:c,onChange:function(e){return a(Number(e.target.value))},children:[Object(D.jsx)("option",{children:"Year"}),new Array(100).fill(0).map((function(e,t){return Object(D.jsx)("option",{children:c-t})}))]}),Object(D.jsxs)("select",{value:o,onChange:function(e){return u(Number(e.target.value))},children:[Object(D.jsx)("option",{children:"Month"}),new Array(11).fill(0).map((function(e,t){return Object(D.jsx)("option",{children:o-t})}))]}),Object(D.jsxs)("select",{value:b,onChange:function(e){return p(Number(e.target.value))},children:[Object(D.jsx)("option",{children:"Day"}),new Array(30).fill(0).map((function(e,t){return Object(D.jsx)("option",{children:b-t})}))]})]})},A=function(e){var t=e.value,n=e.onChange,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.focus(),c.current.select())}),[]),Object(D.jsx)("textarea",{ref:c,value:t,onChange:n})};n(17);var F=function(e){var t=e.workLogEntriesFetcher,n=h("seconds",0,Number),c=Object(d.a)(n,2),a=c[0],s=c[1],o=h("isRunning",!1,Boolean),b=Object(d.a)(o,2),p=b[0],x=b[1],O=h("projectName",""),v=Object(d.a)(O,2),g=v[0],k=v[1],N=Object(r.useState)([]),F=Object(d.a)(N,2),P=F[0],I=F[1],L=h("notes",""),R=Object(d.a)(L,2),M=R[0],J=R[1],U=h("ratePerHour",0,Number),B=Object(d.a)(U,2),Y=B[0],q=B[1],z=h("currency","USD"),H=Object(d.a)(z,2),K=H[0],W=H[1],$=Object(r.useState)(null),G=Object(d.a)($,2),Q=G[0],V=G[1],X=Object(r.useState)(null),Z=Object(d.a)(X,2),_=Z[0],ee=Z[1],te=Object(r.useState)(!1),ne=Object(d.a)(te,2),re=ne[0],ce=ne[1],ae=Object(r.useState)(null),se=Object(d.a)(ae,2),ie=se[0],oe=se[1],ue=Object(r.useState)(null),le=Object(d.a)(ue,2),je=le[0],de=le[1],be=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,n=JSON.stringify({entries:t}),(r=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),r.setAttribute("download","work-log-database.json"),document.body.appendChild(r),r.click(),document.body.removeChild(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=t||Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,I(t);case 4:case"end":return e.stop()}}),e)})));Object(r.useEffect)((function(){t&&t()}),[t]),Object(r.useEffect)((function(){var e;p?(localStorage.setItem("seconds",a),localStorage.setItem("isRunning",p)):localStorage.removeItem("isRunning"),0===a&&localStorage.removeItem("seconds"),null===(e=document.querySelector("link[rel='icon']"))||void 0===e||e.setAttribute("href",p?"/favicon-animated.ico":"/favicon.ico")}),[p,a]),Object(r.useEffect)((function(){return p&&(S=setTimeout((function(){s(a+1)}),1e3)),function(){S&&clearTimeout(S)}}));var fe,he=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.next=3,w({key:f(),dateCreation:new Date,projectName:g,seconds:a,notes:M,date:[t.getFullYear(),t.getMonth(),t.getDate()]});case 3:return J(""),x(!1),s(0),S&&clearTimeout(S),e.next=9,pe();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=P.find((function(e){return e.key===Q})))||!Q){e.next=4;break}return e.next=4,C(t,Q);case 4:V(null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.next=4,pe();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=P.reduce((function(e,t){return e+t.seconds}),0);return Object(D.jsxs)("div",{id:"container",children:[Object(D.jsx)("h3",{id:"logo",children:"Time tracker"}),Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(D.jsxs)("div",{style:{},children:[Object(D.jsx)("label",{htmlFor:"project-id",children:"Project"}),Object(D.jsx)("input",{id:"project-id",type:"text",value:g,onChange:function(e){return k(e.target.value)}})]}),Object(D.jsx)(T,{seconds:a})]}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(D.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(D.jsx)("textarea",{id:"notes",value:M,onChange:function(e){return J(e.target.value)},rows:4})]}),Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left",gap:5,marginTop:5},children:[Object(D.jsx)("button",{onClick:function(){S&&clearTimeout(S),x(!p)},children:p?"Pause":0===a?"Start":"Continue"}),a>0&&!p&&Object(D.jsx)("button",{onClick:function(){s(0)},children:"Reset"}),a>0&&Object(D.jsx)("button",{onClick:function(){return he()},children:"Save"})]}),Object(D.jsx)("h3",{children:"Work log"}),Object(D.jsxs)("table",{children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{className:"table-header-project",children:"Project"}),Object(D.jsx)("th",{className:"table-header-time",children:"Time"}),Object(D.jsxs)("th",{className:"table-header-date",children:[Object(D.jsx)("a",{href:"#filter-bar",onClick:function(e){e.preventDefault(),ce(!re)},children:"Date"}),re&&Object(D.jsx)(E,{})]}),Object(D.jsx)("th",{className:"table-header-description",children:"Description"})]})}),Object(D.jsxs)("tbody",{children:[0===P.length&&Object(D.jsx)("tr",{children:Object(D.jsx)("td",{colSpan:4,children:"No data."})}),P.map((function(e){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{style:{verticalAlign:"top"},children:e.projectName}),Object(D.jsx)("td",{style:{verticalAlign:"top"},children:Object(D.jsx)(T,{seconds:e.seconds})}),Object(D.jsx)("td",{className:"date-cell",onClick:function(){V(e.key),ee("date")},style:{cursor:"pointer"},children:Q&&Q===e.key&&"date"===_?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{style:{display:"flex",justifyContent:"space-between",gap:2},children:e.date.map((function(e,t){return Object(D.jsx)("input",{onChange:function(e){I(P.map((function(n){return n.key===Q?Object(i.a)(Object(i.a)({},n),{},{date:n.date.map((function(n,r){return t===r?Number(e.target.value):n}))}):n})))},style:{width:0===t?"60%":"20%"},value:e},t)}))}),Object(D.jsx)("button",{onClick:xe,style:{width:"60%",marginTop:3},children:"Save"})]}):function(e){var t=Object(d.a)(e,3),n=t[0],r=t[1],c=t[2];return Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(D.jsx)("span",{className:"date-separator",children:n}),"/",Object(D.jsx)("span",{className:"date-separator",children:r+1}),"/",Object(D.jsx)("span",{className:"date-separator",children:c})]})}(e.date)}),Object(D.jsx)("td",{onClick:function(){V(e.key),ee("notes")},style:{verticalAlign:"top",cursor:"pointer"},children:Q&&Q===e.key&&"notes"===_?Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(D.jsx)(A,{onChange:function(e){I(P.map((function(t){return t.key===Q?Object(i.a)(Object(i.a)({},t),{},{notes:e.target.value}):t})))},value:e.notes}),Object(D.jsx)("button",{onClick:xe,style:{width:"20%",marginTop:3},children:"Save"})]}):Object(D.jsx)("div",{style:{whiteSpace:"break-spaces"},children:e.notes})})]},e.key)})),P.length>0&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("tr",{className:"total",children:[Object(D.jsx)("td",{children:"Total"}),Object(D.jsx)("td",{children:Object(D.jsx)(T,{seconds:ve})}),Object(D.jsxs)("td",{rowSpan:2,style:{verticalAlign:"bottom",textAlign:"center"},children:["Todays date",(fe=new Date,Object(D.jsxs)("div",{style:{display:"flex",width:"200",justifyContent:"space-around"},children:[Object(D.jsx)("span",{className:"date-separator",children:fe.getFullYear()}),"/",Object(D.jsx)("span",{className:"date-separator",children:fe.getMonth()+1}),"/",Object(D.jsx)("span",{className:"date-separator",children:fe.getDate()})]}))]}),Object(D.jsx)("td",{style:{verticalAlign:"top"}})]}),Object(D.jsxs)("tr",{className:"total-payment",children:[Object(D.jsx)("td",{}),Object(D.jsxs)("td",{children:["Rate per hour",Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:3,marginTop:3},children:[Object(D.jsx)("input",{type:"number",value:Y,style:{width:"60%"},onChange:function(e){return q(e.target.value)}}),Object(D.jsx)("select",{style:{width:"40%"},onChange:function(e){return W(e.target.value)},value:K,name:"currency",children:["USD","TL","EUR"].map((function(e){return Object(D.jsx)("option",{children:e},e)}))})]})]}),Object(D.jsxs)("td",{colSpan:1,style:{},children:["Payment in total",Object(D.jsxs)("div",{style:{fontSize:"2rem"},children:[Number(ve/60/60*Y).toFixed(2),{USD:"$",EUR:"\u20ac",TL:"TL"}[K]]})]})]})]})]})]}),Object(D.jsx)("h3",{children:"Load a database"}),Object(D.jsx)("p",{children:Object(D.jsx)("input",{onChange:function(e){if(oe(null),e.target){var t=e.target.files;if(t){var n=new FileReader;n.onload=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target){e.next=2;break}return e.abrupt("return");case 2:e.prev=2,n=JSON.parse(t.target.result),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(2),oe("Provide a valid JSON file."),e.abrupt("return");case 10:r=n.entries,c=Object(l.a)(r),e.prev=12,c.s();case 14:if((a=c.n()).done){e.next=20;break}return s=a.value,e.next=18,w(s,s.key);case 18:e.next=14;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(12),c.e(e.t1);case 25:return e.prev=25,c.f(),e.finish(25);case 28:return de("Database loaded successfully."),e.next=31,pe();case 31:case"end":return e.stop()}}),e,null,[[2,6],[12,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),n.readAsText(t[0])}}},type:"file"})}),Object(D.jsx)("h3",{children:"Export current database"}),Object(D.jsx)("p",{children:Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),be()},children:Object(D.jsx)("span",{children:"Export"})})}),Object(D.jsx)("h3",{children:"Reset current database"}),Object(D.jsx)("p",{children:Object(D.jsx)("button",{onClick:function(){window.confirm("Are you really sure to reset the current database?")&&Oe()},children:Object(D.jsx)("span",{children:"Reset"})})}),ie&&Object(D.jsx)("p",{className:"error",children:ie}),je&&Object(D.jsx)("p",{className:"info",children:je}),Object(D.jsxs)("footer",{children:["Fatih Erikli, MIT Licensed, 2021.",Object(D.jsx)("br",{}),"Source code available on"," ",Object(D.jsx)("a",{style:{color:"gray"},target:"blank",href:"https://github.com/fatih-erikli/time-tracker",children:"github"}),"."]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root")),P()}},[[18,1,2]]]);
//# sourceMappingURL=main.65fab098.chunk.js.map