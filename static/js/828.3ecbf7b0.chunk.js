"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{906:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(689),a=n(87),i=n(223),o=n(184),u=function(e){var t=e.movies,n=(0,r.TH)();return(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},className:i.Z.homepage__link,children:e.title})},e.id)}))})}},828:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),i=n(757),o=n.n(i),u=n(791),s=n(87),c=n(350),p=n(223),l=n(184),f=function(e){var t=e.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),i=r[0],o=r[1];return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),o("")},className:p.Z.form,children:[(0,l.jsx)("input",{type:"text",placeholder:"Enter movie name",value:i,onChange:function(e){return o(e.target.value)},className:p.Z.form__input}),(0,l.jsx)("button",{type:"submit",className:p.Z.form__btn,children:"Search"})]})})},h=n(906),v=function(){var e,t=(0,u.useState)([]),n=(0,a.Z)(t,2),i=n[0],v=n[1],m=(0,s.lr)(),d=(0,a.Z)(m,2),g=d[0],y=d[1],w=g.get(null!==(e="query")?e:"");return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.XT)(w);case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:p.Z.movies__title,children:"Search movies"}),(0,l.jsx)(f,{onSubmit:function(e){y({query:e})}}),i&&(0,l.jsx)(h.e,{movies:i})]})}},350:function(e,t,n){n.d(t,{M1:function(){return d},XT:function(){return p},p_:function(){return v},tx:function(){return y},z5:function(){return f}});var r=n(861),a=n(757),i=n.n(a),o=n(243),u=n(264),s=n(742),c="48efdd88d1650cc055b0f5a157a41228";function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie?",e.prev=1,s.Loading.pulse(),e.next=5,o.Z.get("https://api.themoviedb.org/3/search/movie?",{params:{api_key:c,query:t,page:1,include_adult:!1}});case 5:if(n=e.sent,console.log(n.data.total_results),!t||0!==n.data.total_results){e.next=9;break}return e.abrupt("return",u.Notify.failure("No movies with name ".concat(t)));case 9:return e.abrupt("return",n.data.results);case 12:e.prev=12,e.t0=e.catch(1),u.Notify.failure("Something went wrong..."),console.log(e.t0);case 16:return e.prev=16,s.Loading.remove(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e.prev=1,s.Loading.pulse(),e.next=5,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:c}});case 5:return t=e.sent,e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(1),u.Notify.failure("Something went wrong..."),console.log(e.t0);case 13:return e.prev=13,s.Loading.remove(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.Loading.pulse(),e.next=4,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),u.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,s.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.Loading.pulse(),e.next=4,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),u.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,s.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.Loading.pulse(),e.next=4,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),u.Notify.failure("Something went wrong..."),console.log(e.t0);case 12:return e.prev=12,s.Loading.remove(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=828.3ecbf7b0.chunk.js.map