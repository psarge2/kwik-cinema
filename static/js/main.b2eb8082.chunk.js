(this.webpackJsonpkwik=this.webpackJsonpkwik||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(6),r=c(10),s=c(9),i=c(0),l=c(1),o=c.n(l),u=c(7),j=c.n(u),b=c(3),d=c.n(b),h=c(8),m=c(4);function p(e){var t=e.movie;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(i.jsxs)("div",{className:"card--content",children:[Object(i.jsx)("h3",{className:"card--title",children:t.title}),Object(i.jsx)("p",{children:Object(i.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(i.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function O(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(l.useState)([]),r=Object(m.a)(n,2),s=r[0],o=r[1],u=function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=b8b3082a03a5dc1c3cc80df3ebd33450&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,o(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{className:"form",onSubmit:u,children:[Object(i.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(i.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. The Wizard of Oz",value:c,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(i.jsx)("div",{className:"card-list",children:s.filter((function(e){return e.poster_path})).map((function(e){return Object(i.jsx)(p,{movie:e},e.id)}))})]})}c(17);var v=function(e){Object(r.a)(c,e);var t=Object(s.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Kwik Cinema Search"}),Object(i.jsx)(O,{})]})}}]),c}(o.a.Component);j.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b2eb8082.chunk.js.map