(this.webpackJsonpvirtuslab=this.webpackJsonpvirtuslab||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),o=(n(69),n(70),n(12)),s=n.n(o),i=n(42),u=n(17),l=n(11),p=n(119),d=n(129),b=n(124),j=n(19),h=n.n(j),f=n(125),O=n(122),m=n(126),g=n(121),x=n(58),v=n.n(x),w=n(127),y=n(3),k=Object(p.a)((function(e){return Object(d.a)({heading:{fontSize:e.typography.pxToRem(15),fontFamily:"Della Respira, sans-serif",flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),fontFamily:"Della Respira, sans-serif",color:e.palette.text.secondary},desc:{fontFamily:"Della Respira, sans-serif"},accordion:{background:"rgba(125,122,115,0.3)",borderRadius:"0.3rem",padding:"10px",margin:"10px 0",color:"white"}})}));var E=function(e){var t,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)([]),p=Object(l.a)(i,2),d=p[0],b=p[1],j=e.fellow,x=e.idx,E=e.border,S=k();return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[],j.films.map(function(){var e=Object(u.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(n);case 2:a=e.sent,t.push(a.data.title);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b(t),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(y.jsxs)(f.a,{style:"blue"===E?{border:"1px solid #0190de"}:{},className:S.accordion,expanded:r==="panel".concat(x),onChange:(t="panel".concat(x),function(e,n){o(!!n&&t)}),children:[Object(y.jsxs)(m.a,{expandIcon:Object(y.jsx)(v.a,{}),"aria-controls":"panel".concat(x,"bh-content"),id:"panel".concat(x,"bh-header"),children:[Object(y.jsx)(g.a,{className:S.heading,children:j.name}),Object(y.jsxs)(g.a,{className:S.secondaryHeading,children:["Birth Year: ",j.birth_year,", Gender: ",j.gender]})]}),Object(y.jsx)(O.a,{children:Object(y.jsxs)(g.a,{className:S.desc,children:["Height: ",j.height,", Mass: ",j.mass,", Movies:"," ",d.map((function(e){return e===d[d.length-1]?Object(y.jsx)("span",{children:e},Object(w.a)()):Object(y.jsxs)("span",{children:[e,", "]},Object(w.a)())}))]})})]})},S=n(41),N=n(14),R=n(128),C=n(59),F=n.n(C),I=n(123),T=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];t&&clearInterval(t),t=setTimeout((function(){e.apply(null,c)}),n)}},D=Object(p.a)((function(e){return Object(d.a)({search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)}},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(2,2,2,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),divider:{marginTop:"30px"},noresults:{fontSize:"25px",padding:"20px 0"}})})),H=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),p=i[0],d=i[1],j=Object(a.useState)([]),f=Object(l.a)(j,2),O=f[0],m=f[1],g=D();Object(a.useEffect)((function(){c.length>1?function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,h.a.get("https://swapi.dev/api/people/?search=".concat(c));case 4:t=e.sent,m(t.data.results),console.log("Debounced"),d(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()():c.length<=1&&m([])}),[c]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:g.search,children:[Object(y.jsx)("div",{className:g.searchIcon,children:Object(y.jsx)(F.a,{})}),Object(y.jsx)(R.a,{fullWidth:!0,placeholder:"Search character",classes:{root:g.inputRoot,input:g.inputInput},onChange:T((function(e){r(e.target.value)}),500),inputProps:{"aria-label":"search"}})]}),O.map((function(e,t){return Object(y.jsx)(E,{border:"blue",fellow:e,idx:t},e.name)})),c.length>1&&0===O.length&&!p?Object(y.jsx)("div",{className:g.noresults,children:"No Results"}):null,Object(y.jsx)(I.a,{className:g.divider}),p&&Object(y.jsx)(b.a,{color:"primary"})]})},L=Object(p.a)((function(e){return Object(d.a)({root:{width:"100%"},btn:{margin:"40px 0",fontFamily:"Della Respira, sans-serif",backgroundColor:"orange",color:"#000",transition:"opacity 0.4s ease","&:hover":{backgroundColor:"orange",opacity:.7}}})})),B=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(l.a)(r,2),p=o[0],d=o[1],j=Object(a.useState)(!0),f=Object(l.a)(j,2),O=f[0],m=f[1],g=Object(a.useState)(!1),x=Object(l.a)(g,2),v=x[0],w=x[1],k=L();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,h.a.get("https://swapi.dev/api/people/?page=".concat(n));case 4:t=e.sent,w(!1),d([].concat(Object(i.a)(p),Object(i.a)(t.data.results))),m(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(a.useEffect)((function(){return window.addEventListener("scroll",S),function(){return window.removeEventListener("scroll",S)}}),[]),Object(a.useEffect)((function(){v&&9!==n&&N()}),[v]);var S=function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;e+window.innerHeight+50>=t&&w(!0)},N=function(){c(n+1)};return Object(y.jsxs)("div",{className:k.root,children:[Object(y.jsx)(H,{}),p.map((function(e,t){return Object(y.jsx)(E,{fellow:e,idx:t},e.name)})),O&&Object(y.jsx)(b.a,{color:"secondary"})]})},z=n.p+"static/media/starwars.e1b844c6.png";var P=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("img",{className:"logo",src:z,alt:"logo"}),Object(y.jsx)(B,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};r.a.render(Object(y.jsx)(P,{}),document.getElementById("root")),A()}},[[95,1,2]]]);
//# sourceMappingURL=main.ba8640e7.chunk.js.map