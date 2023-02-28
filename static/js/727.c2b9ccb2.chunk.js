"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{89:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),i=r(757),s=r.n(i),o=r(223),c=r(184),u=function(e){var t=e.movieDetails,n=t.poster_path,a=t.title,i=t.vote_average,s=t.overview,u=t.genres;return(0,c.jsxs)("div",{className:o.Z.movieCard,children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{alt:a,src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"".concat(r(362)),width:"240",className:o.Z.movieCard__img})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{className:o.Z.movieCard__title,children:a}),(0,c.jsxs)("p",{children:["Score: ",(0,c.jsx)("span",{children:i})]}),(0,c.jsx)("h3",{children:"Overview: "}),(0,c.jsx)("span",{children:s}),(0,c.jsx)("h3",{children:"Genres: "}),(0,c.jsx)("span",{children:u&&u.map((function(e){return(0,c.jsx)("li",{children:e.name},e.id)}))})]})]})},p=r(791),l=r(689),d=r(87),h=function(e){var t=e.path;return(0,c.jsx)(d.rU,{to:t,className:o.Z.goBackBtn,children:"Go back"})},v=r(350),f=function(){var e,t,r=null!==(e=null===(t=(0,l.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:o.Z.additional__title,children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(d.rU,{to:"cast",state:{from:r},className:o.Z.additional__link,children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(d.rU,{to:"reviews",state:{from:r},className:o.Z.additional__link,children:"Reviews"})})]})]})},m=function(){var e,t,r=(0,l.UO)().movieId,i=(0,p.useState)({}),o=(0,a.Z)(i,2),d=o[0],m=o[1],g=(0,l.TH)();return(0,p.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.p_)(r);case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),(0,c.jsxs)("div",{children:[(0,c.jsx)(h,{path:null!==(e=null===g||void 0===g||null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"}),(0,c.jsx)(u,{movieDetails:d}),(0,c.jsx)(f,{}),(0,c.jsx)(l.j3,{})]})}},350:function(e,t,r){r.d(t,{M1:function(){return m},XT:function(){return p},p_:function(){return v},tx:function(){return x},z5:function(){return d}});var n=r(861),a=r(757),i=r.n(a),s=r(243),o=r(264),c=r(742),u="48efdd88d1650cc055b0f5a157a41228";function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie?",e.prev=1,c.Loading.pulse(),e.next=5,s.Z.get("https://api.themoviedb.org/3/search/movie?",{params:{api_key:u,query:t,page:1,include_adult:!1}});case 5:if(r=e.sent,console.log(r.data.total_results),!t||0!==r.data.total_results){e.next=9;break}return e.abrupt("return",o.Notify.failure("No movies with name ".concat(t)));case 9:return e.abrupt("return",r.data.results);case 12:e.prev=12,e.t0=e.catch(1),o.Notify.failure("Something went wrong..."),console.log(e.t0);case 16:return e.prev=16,c.Loading.remove(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e.prev=1,c.Loading.pulse(),e.next=5,s.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:u}});case 5:return t=e.sent,e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(1),o.Notify.failure("Something went wrong..."),console.log(e.t0);case 13:return e.prev=13,c.Loading.remove(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.Loading.pulse(),e.next=4,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:u}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),o.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,c.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.Loading.pulse(),e.next=4,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:u}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),o.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,c.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}function x(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.Loading.pulse(),e.next=4,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:u}});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),o.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,c.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}},362:function(e,t,r){e.exports=r.p+"static/media/no-picture.4a82f1c2b75ce4701fa6.jpg"}}]);
//# sourceMappingURL=727.c2b9ccb2.chunk.js.map