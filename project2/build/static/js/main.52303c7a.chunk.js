(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),s=c(14),r=c.n(s);c(32),c(33);function o(e){var t=e.movie;return t.poster_path?Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:t.original_title}),Object(n.jsx)("p",{className:"title",children:t.original_title}),Object(n.jsx)("p",{className:"vote",children:Object(n.jsx)("strong",{children:t.vote_average})})]}):Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png",alt:t.original_title}),Object(n.jsx)("p",{className:"title",children:t.original_title}),Object(n.jsx)("p",{className:"vote",children:Object(n.jsx)("strong",{children:t.vote_average})})]})}var l=c(5),d="32a683d6e47d7bf3d66fbb4c7b83c854",j=Object.freeze({LoadReviews:"LoadReviews",LoadTrending:"LoadTrending",LoadLatest:"LoadLatest",LoadTopRated:"LoadTopRated",LoadSearch:"LoadSearch",FinishAddingReview:"FinishAddingReview"});function h(e){var t="https://express-backend.347kush.me:8442/reviews/".concat(e),c={method:"GET"};return function(e){fetch(t,c).then(O).then((function(e){return e.json()})).then((function(t){t.ok&&e(v(t.reviews))})).catch((function(e){return console.error(e)}))}}function b(e){var t="https://api.themoviedb.org/3/search/movie?api_key=".concat(d,"&query=").concat(e,"&page=1");return function(e){fetch(t,{"content-type":"application/json"}).then(O).then((function(e){return e.json()})).then((function(t){console.log(t),e(function(e){return{type:j.LoadSearch,payload:e}}(t.results))})).catch((function(e){return console.error(e)}))}}function m(){var e="https://api.themoviedb.org/3/movie/popular?api_key=".concat(d,"&language=en-US&page=1");return function(t){fetch(e,{"content-type":"application/json"}).then(O).then((function(e){return e.json()})).then((function(e){var c;t((c=e.results,{type:j.LoadTrending,payload:c}))})).catch((function(e){return console.error(e)}))}}function p(){var e="https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(d,"&language=en-US&page=1");return function(t){fetch(e,{"content-type":"application/json"}).then(O).then((function(e){return e.json()})).then((function(e){var c;t((c=e.results,{type:j.LoadLatest,payload:c}))})).catch((function(e){return console.error(e)}))}}function u(){var e="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(d,"&language=en-US&page=1");return function(t){fetch(e,{"content-type":"application/json"}).then(O).then((function(e){return e.json()})).then((function(e){var c;t((c=e.results,{type:j.LoadTopRated,payload:c}))})).catch((function(e){return console.error(e)}))}}function v(e){return{type:j.FinishAddingReview,payload:e}}function O(e){if(!e.ok)throw Error("".concat(e.status,": ").concat(e.statusText));return e}var x=c(6);function g(e){var t=e.review;return Object(n.jsxs)("div",{className:"review-item",children:[Object(n.jsxs)("div",{className:"review-left",children:[Object(n.jsxs)("div",{className:"review-name",children:["Name: ",t.username]}),Object(n.jsxs)("div",{className:"review-rating",children:["Rating: ",t.rating]})]}),Object(n.jsx)("div",{className:"review-right",children:Object(n.jsx)("div",{className:"review-message",children:t.message})})]})}function f(e){var t=e.movie,c=Object(l.c)((function(e){return e.reviews}));console.log(c);var s=[];void 0!==c[0]&&(s=c[0]);var r=Object(l.b)(),o=function(){r(b(document.getElementById("textbox").value))};void 0===t?t=JSON.parse(localStorage.getItem("movie")):localStorage.setItem("movie",JSON.stringify(t));var d=t.original_title;Object(i.useEffect)((function(){r(h(d))}),[r,d]);return t.poster_path?Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png",alt:"Movies2Watch"})}),Object(n.jsx)("div",{className:"searchbar",children:Object(n.jsxs)("form",{action:"/action_page.php",children:[Object(n.jsx)("input",{type:"text",id:"textbox",placeholder:"Search...",name:"search"}),Object(n.jsx)(x.b,{to:"/search/",children:Object(n.jsx)("input",{type:"image",alt:"search",id:"search-button",onClick:o,src:"/search.png"})})]})})]}),Object(n.jsx)("div",{className:"body",id:"movie-body",children:Object(n.jsxs)("div",{className:"inner-body",children:[Object(n.jsx)("h1",{className:"movie_title",children:d}),Object(n.jsxs)("div",{className:"movie-container",children:[Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsxs)("div",{className:"left-info",children:[Object(n.jsx)("img",{className:"movie_image",alt:t.original_title,src:"https://image.tmdb.org/t/p/original"+t.poster_path}),Object(n.jsxs)("p",{className:"movie_date",children:["Release Date: ",t.release_date]}),Object(n.jsxs)("p",{className:"movie_date",children:["Average User Rating: ",t.vote_average]})]}),Object(n.jsx)("div",{className:"right-info",children:Object(n.jsx)("p",{className:"movie_description",children:Object(n.jsx)("strong",{children:t.overview})})})]}),Object(n.jsxs)("div",{className:"reviews",children:[Object(n.jsx)("h1",{children:"User Reviews"}),Object(n.jsxs)("div",{className:"review-list",children:[Object(n.jsxs)("form",{id:"add-review",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(n.jsx)("input",{type:"text",id:"name",name:"name"}),Object(n.jsx)("label",{htmlFor:"rating",children:"Rating (0-10):"}),Object(n.jsx)("input",{type:"number",id:"rating",name:"rating",min:"0",max:"10"}),Object(n.jsx)("label",{htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{id:"message",name:"message",placeholder:"Type your review.."}),Object(n.jsx)("button",{type:"button",onClick:function(){r(function(e,t,c,n){var i={username:e,movie_name:t,rating:document.getElementById("rating").value,message:document.getElementById("message").value};console.log(JSON.stringify(i));var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)};return function(e){fetch("https://express-backend.347kush.me:8442/reviews/",a).then(O).then((function(e){return e.json()})).then((function(t){t.ok&&e(v(i))})).catch((function(e){return console.error(e)}))}}(document.getElementById("name").value,t.original_title)),r(h(t.original_title))},children:"Create Review"})]}),s.map((function(e){return Object(n.jsx)(g,{review:e},e.id)}))]})]})]})]})}),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("p",{children:["Made using ",Object(n.jsx)("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",children:"The Movie Database"})]}),Object(n.jsx)("p",{children:"Developed by Kyle Vinsand and Kushal Gupta"})]})]}):Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png",alt:"Movies2Watch"})}),Object(n.jsx)("div",{className:"searchbar",children:Object(n.jsxs)("form",{action:"/action_page.php",children:[Object(n.jsx)("input",{type:"text",id:"textbox",placeholder:"Search...",name:"search"}),Object(n.jsx)(x.b,{to:"/search/",children:Object(n.jsx)("input",{type:"image",alt:"search",id:"search-button",onClick:o,src:"/search.png"})})]})})]}),Object(n.jsx)("div",{className:"body",id:"movie-body",children:Object(n.jsxs)("div",{className:"inner-body",children:[Object(n.jsx)("h1",{className:"movie_title",children:d}),Object(n.jsxs)("div",{className:"movie-container",children:[Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsxs)("div",{className:"left-info",children:[Object(n.jsx)("img",{className:"movie_image",alt:t.original_title,src:"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png"}),Object(n.jsxs)("p",{className:"movie_date",children:["Release Date: ",t.release_date]}),Object(n.jsxs)("p",{className:"movie_date",children:["Average User Rating: ",t.vote_average]})]}),Object(n.jsx)("div",{className:"right-info",children:Object(n.jsx)("p",{className:"movie_description",children:Object(n.jsx)("strong",{children:t.overview})})})]}),Object(n.jsxs)("div",{className:"reviews",children:[Object(n.jsx)("h1",{children:"User Reviews"}),Object(n.jsxs)("div",{className:"review-list",children:[Object(n.jsxs)("form",{id:"add-review",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(n.jsx)("input",{type:"text",id:"name",name:"name"}),Object(n.jsx)("label",{htmlFor:"rating",children:"Rating (0-10):"}),Object(n.jsx)("input",{type:"number",id:"rating",name:"rating",min:"0",max:"10"}),Object(n.jsx)("label",{htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{id:"messageUn",name:"message",placeholder:"Type your review.."}),Object(n.jsx)("button",{type:"button",children:"Create Review"})]}),s.map((function(e){return Object(n.jsx)(g,{review:e},e.id)}))]})]})]})]})}),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("p",{children:["Made using ",Object(n.jsx)("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",children:"The Movie Database"})]}),Object(n.jsx)("p",{children:"Developed by Kyle Vinsand and Kushal Gupta"})]})]})}c(39);function y(e){var t=Object(l.b)(),c=e.search;return void 0===c?c=JSON.parse(localStorage.getItem("search")):localStorage.setItem("search",JSON.stringify(c)),Object(n.jsxs)("div",{className:"searchResults",children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png",alt:"Movies2Watch"})}),Object(n.jsx)("div",{className:"searchbar",children:Object(n.jsxs)("form",{action:"/search",children:[Object(n.jsx)("input",{type:"text",id:"textbox",placeholder:"Search...",name:"search"}),Object(n.jsx)(x.b,{to:"/search/",children:Object(n.jsx)("input",{type:"image",alt:"search",id:"search-button",onClick:function(){t(b(document.getElementById("textbox").value))},src:"/search.png"})})]})})]}),Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("h1",{id:"search-title",children:"Search Results"}),Object(n.jsx)("div",{className:"search-list",children:c.map((function(e){return Object(n.jsx)(x.b,{to:"/search/".concat(e.original_title),children:Object(n.jsx)(o,{movie:e},e.id)})}))})]}),Object(n.jsxs)("footer",{id:"search-footer",children:[Object(n.jsxs)("p",{children:["Made using ",Object(n.jsx)("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",children:"The Movie Database"})]}),Object(n.jsx)("p",{children:"Developed by Kyle Vinsand and Kushal Gupta"})]})]})}var N=c(3),w=c(26);function _(e){return e.load?Object(n.jsx)(w.a,{className:"loadingspin",animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})}):null}var T=function(){var e=Object(l.c)((function(e){return e.trendings})),t=Object(l.c)((function(e){return e.latests})),c=Object(l.c)((function(e){return e.rated})),a=Object(l.c)((function(e){return e.search})),s=Object(l.b)();Object(i.useEffect)((function(){s(m()),s(p()),s(u())}),[s]);var r=Object(l.c)((function(e){return e.loadingTop})),d=Object(l.c)((function(e){return e.loadingTrending})),j=Object(l.c)((function(e){return e.loadingUpcoming}));return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(N.d,{children:[Object(n.jsx)(N.b,{exact:!0,path:"/search",children:Object(n.jsx)(y,{search:a})}),Object(n.jsx)(N.b,{exact:!0,path:"/trending/:title",children:function(t){var c=t.match.params.title,i=e.find((function(e){return e.original_title===c}));return Object(n.jsx)(f,{movie:i})}}),Object(n.jsx)(N.b,{exact:!0,path:"/toprated/:title",children:function(e){var t=e.match.params.title,i=c.find((function(e){return e.original_title===t}));return Object(n.jsx)(f,{movie:i})}}),Object(n.jsx)(N.b,{exact:!0,path:"/upcoming/:title",children:function(e){var c=e.match.params.title,i=t.find((function(e){return e.original_title===c}));return Object(n.jsx)(f,{movie:i})}}),Object(n.jsx)(N.b,{exact:!0,path:"/search/:title",children:function(e){var t=e.match.params.title,c=a.find((function(e){return e.original_title===t}));return Object(n.jsx)(f,{movie:c})}}),Object(n.jsxs)(N.b,{to:"",children:[Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)("img",{src:"https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png",alt:"Movies2Watch"}),Object(n.jsx)("div",{className:"searchbar",children:Object(n.jsxs)("form",{action:"/search",children:[Object(n.jsx)("input",{type:"text",id:"textbox",placeholder:"Search...",name:"search"}),Object(n.jsx)(x.b,{to:"/search/",children:Object(n.jsx)("input",{type:"image",alt:"Picture of movie poster",id:"search-button",onClick:function(){s(b(document.getElementById("textbox").value))},src:"/search.png"})})]})})]}),Object(n.jsxs)("div",{className:"body",children:[Object(n.jsxs)("div",{className:"movies-display",children:[Object(n.jsx)("h2",{children:"Trending"}),Object(n.jsx)(_,{load:d}),Object(n.jsx)("div",{className:"movie-list",children:e.map((function(e){return Object(n.jsx)(x.b,{to:"/trending/".concat(e.original_title),children:Object(n.jsx)(o,{movie:e},e.id)})}))})]}),Object(n.jsxs)("div",{className:"movies-display",children:[Object(n.jsx)("h2",{children:"Top Rated"}),Object(n.jsx)(_,{load:r}),Object(n.jsx)("div",{className:"movie-list",children:c.map((function(e){return Object(n.jsx)(x.b,{to:"/toprated/".concat(e.original_title),children:Object(n.jsx)(o,{movie:e},e.id)})}))})]}),Object(n.jsxs)("div",{className:"movies-display",children:[Object(n.jsx)("h2",{children:"Upcoming"}),Object(n.jsx)(_,{load:j}),Object(n.jsx)("div",{className:"movie-list",children:t.map((function(e){return Object(n.jsx)(x.b,{to:"/upcoming/".concat(e.original_title),children:Object(n.jsx)(o,{movie:e},e.id)})}))})]})]}),Object(n.jsxs)("footer",{children:[Object(n.jsxs)("p",{children:["Made using ",Object(n.jsx)("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",children:"The Movie Database"})]}),Object(n.jsx)("p",{children:"Developed by Kyle Vinsand and Kushal Gupta"})]})]}),Object(n.jsx)(N.a,{to:""})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},S=c(13),L=c(24),k=c(25),F=c(9),M={isWaiting:!1,reviews:[],trendings:[],latests:[],rated:[],search:[],loadingTop:!0,loadingTrending:!0,loadingUpcoming:!0,loadingSearch:!0,loadingReviews:!0};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.LoadReviews:return Object(F.a)(Object(F.a)({},e),{},{reviews:t.payload,loadingReviews:!1});case j.LoadTrending:return Object(F.a)(Object(F.a)({},e),{},{trendings:t.payload,loadingTrending:!1});case j.LoadLatest:return Object(F.a)(Object(F.a)({},e),{},{latests:t.payload,loadingUpcoming:!1});case j.LoadTopRated:return Object(F.a)(Object(F.a)({},e),{},{rated:t.payload,loadingTop:!1});case j.LoadSearch:return Object(F.a)(Object(F.a)({},e),{},{search:t.payload,loadingSearch:!1});case j.FinishAddingReview:return console.log(e.reviews),Object(F.a)(Object(F.a)({},e),{},{reviews:[t.payload].concat(Object(k.a)(e.reviews))});default:return e}},U=Object(S.c)(I,Object(S.a)(L.a));c(40);r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(l.a,{store:U,children:Object(n.jsx)(T,{})})})}),document.getElementById("root")),R()}},[[41,1,2]]]);
//# sourceMappingURL=main.52303c7a.chunk.js.map