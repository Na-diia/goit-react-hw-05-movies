"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{7100:function(A,n,e){e.d(n,{Z:function(){return c}});var t,r,o=e(168),C=e(6444),g=C.ZP.div(t||(t=(0,o.Z)(["\n    display: flex;\n    margin-left: 28px;\n"]))),a=C.ZP.button(r||(r=(0,o.Z)(["\n    background-color: #fff;\n    color:  #432A68 ;\n    font-size: 16px;\n    padding: 10px 20px;\n    display: inline-block;\n    border-radius: 100px;\n    border-color: transparent;\n    transition: all .2s;\n    margin-right: 12px;\n    margin-bottom: 20px;\n\n    &:hover, &:focus {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    color: #8E0E00;\n    font-weight: bold;\n    }\n    &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n    color:  #432A68 ;\n    font-weight: 400;\n    }\n"]))),i=e(184),c=function(A){var n=A.page,e=A.totalPages,t=A.onClick;return(0,i.jsxs)(g,{children:[n>=2&&(0,i.jsx)(a,{type:"button",disabled:1===n,onClick:function(){return t(n-1)},children:"Prev page"}),(0,i.jsx)(a,{type:"button",onClick:function(){return t(n+1)},disabled:n===e,children:"Next page"})]})}},6061:function(A,n,e){e.d(n,{Z:function(){return f}});var t,r,o,C=e(7689),g=e(168),a=e(6444),i=e(1087),c=e(2776),s=a.ZP.li(t||(t=(0,g.Z)(['\n    padding: 5px;\n    margin-left: 10px;\n    position: relative;\n    display: flex;\n\n    &::before{\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    left: -25px;}\n\n    @media screen and (max-width: 480px) {\n        &::before{\n            width: 15px;\n            height: 15px;\n        }\n    }\n"])),c),u=a.ZP.ul(r||(r=(0,g.Z)(["\n    list-style: none;\n    margin-left: 25px;\n"]))),Q=(0,a.ZP)(i.rU)(o||(o=(0,g.Z)(["\n    text-decoration: none;\n    color: #22211B  ;\n    font-size: 20px;\n    font-weight: 500;\n\n    &:hover, &:focus{\n    transform: translateX(20px); \n   };\n\n   @media screen and (max-width: 767px) {\n    font-size: 16px;\n\n    &:hover, &:focus{\n    transform: translateX(16px); };\n   };\n"]))),k=e(184),p=function(A){var n=A.movies,e=(0,C.TH)(),t=n.map((function(A){var n=A.title,t=A.id;return(0,k.jsx)(s,{children:(0,k.jsx)(Q,{state:{from:e},to:"/movies/".concat(t),children:n})},t)}));return(0,k.jsx)(u,{children:t})},f=p;p.defaultProps={movies:[]}},5545:function(A,n,e){e.d(n,{U:function(){return i},W:function(){return a}});var t,r,o=e(168),C=e(6444),g=e(875),a=C.ZP.div(t||(t=(0,o.Z)(['\n  max-width: 1200px;\n  height: 100vh;\n  margin: 0px 0px;\n  padding: 0px 0px;\n\n  &::before {\n    content: "";\n    background-image: url(',");\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: -10;\n    opacity: 0.7;\n}"])),g),i=C.ZP.h2(r||(r=(0,o.Z)(['\n  font-family: \'Gambetta\', serif;\n  transition: 700ms ease;\n  font-variation-settings: "wght" 311;\n  margin-bottom: 0.8rem;\n  font-weight: bold;\n  margin-left: 20px;\n  font-size: 28px;\n  text-transform: uppercase;\n  transition: 700ms ease;\n   color: #090907 ;\n\n  &:hover {\n    font-variation-settings: "wght" 582; \n    letter-spacing: 1px;\n    }\n'])))},5200:function(A,n,e){e.r(n),e.d(n,{default:function(){return B}});var t,r,o=e(5861),C=e(9439),g=e(7757),a=e.n(g),i=e(2791),c=e(9085),s=e(1087),u=e(7118),Q=e(3628),k=e(168),p=e(6444),f=e(2184),I=p.ZP.div(t||(t=(0,k.Z)(["\n    margin-top: 24px;\n    margin-bottom: 20px;\n    margin-left: 28px;\n\n    input {\n        background-color: #fff;\n    color:  #432A68 ;\n    font-size: 16px;\n    padding: 10px 24px;\n    border-color: transparent;\n    transition: all .2s;\n    display: inline-block;\n    border: 0;\n    outline: 0;\n    border-radius: 5em;\n    position: absolute;\n    }\n"]))),d=(0,p.ZP)(f.a4h)(r||(r=(0,k.Z)(["\n    width: 20px;\n    height: 20px;\n    position: relative;\n    z-index: 1;\n    opacity: 0.7;\n    left: 210px;\n    top: 10px;\n"]))),l=e(184),J=function(A){var n=A.onChange,e=A.search;return(0,l.jsxs)(I,{children:[(0,l.jsx)(Q.DebounceInput,{type:"text",debounceTimeout:500,name:"search",value:e,placeholder:"Search movie",onChange:function(A){return n(A.target.value)},autoComplete:"off",autoFocus:!0,required:!0}),(0,l.jsx)(d,{})]})},K=e(6061),x=e(7100),h=e(5545),B=function(){var A=(0,i.useState)([]),n=(0,C.Z)(A,2),e=n[0],t=n[1],r=(0,i.useState)(null),g=(0,C.Z)(r,2),Q=g[0],k=g[1],p=(0,i.useState)(1),f=(0,C.Z)(p,2),I=f[0],d=f[1],B=(0,s.lr)(),v=(0,C.Z)(B,2),b=v[0],m=v[1],E=b.get("query")||"";(0,i.useEffect)((function(){if(E){var A=function(){var A=(0,o.Z)(a().mark((function A(){var n,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,n=E.trim().toLowerCase(),A.next=4,(0,u.V0)(n,I);case 4:if(0!==(e=A.sent).length){A.next=8;break}return c.Am.warn("Sorry! We didn't find anything, change your request!"),A.abrupt("return");case 8:return t(e),d(I),A.abrupt("return");case 13:A.prev=13,A.t0=A.catch(0),t(null),c.Am.error("Ops! Something went wrong!"),k({error:Q.status});case 18:case 19:case"end":return A.stop()}}),A,null,[[0,13]])})));return function(){return A.apply(this,arguments)}}();A()}}),[Q,I,E]);var w=(0,i.useCallback)((function(A){d(A)}),[d]);return(0,l.jsxs)(h.W,{children:[106===Q&&(0,l.jsx)("h2",{children:"Something went wrong. Try again later."}),(0,l.jsx)(J,{search:E,onChange:function(A){m(""!==A&&{query:A})}}),(0,l.jsx)(K.Z,{movies:e}),I&&0!==e.length&&(0,l.jsx)(x.Z,{onClick:w,page:I,totalPages:e.total_pages})]})}},7118:function(A,n,e){e.d(n,{M1:function(){return u},TP:function(){return s},V0:function(){return c},WJ:function(){return i},_p:function(){return a},tx:function(){return Q}});var t=e(5861),r=e(7757),o=e.n(r),C=e(1912);C.Z.defaults.baseURL="https://api.themoviedb.org/3/";var g="0d4113c4d386d0ed78ee145d93be1c52",a="https://image.tmdb.org/t/p/w500",i=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("trending/movie/day?api_key=".concat(g,"&page=").concat(n));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),c=function(){var A=(0,t.Z)(o().mark((function A(n,e){var t;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("search/movie?api_key=".concat(g,"&language=en-US&query=").concat(n,"&page=").concat(e,"&include_adult=false"));case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n,e){return A.apply(this,arguments)}}(),s=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"?api_key=").concat(g,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),u=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"/credits?api_key=").concat(g,"&language=en-US"));case 2:return e=A.sent,A.abrupt("return",e.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),Q=function(){var A=(0,t.Z)(o().mark((function A(n){var e;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get("movie/".concat(n,"/reviews?api_key=").concat(g,"&language=en-US&page=1"));case 2:return e=A.sent,A.abrupt("return",e.data.results);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},875:function(A,n,e){A.exports=e.p+"static/media/background-img.615afe74c2ea1340004c.jpg"},2776:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=200.67bbfcc3.chunk.js.map