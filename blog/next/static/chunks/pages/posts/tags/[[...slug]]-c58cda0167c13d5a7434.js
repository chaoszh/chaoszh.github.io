_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{B3Qr:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var s=e("nKUr"),a=e("MX0m"),r=e.n(a),i=e("8zuE"),c=e("YFqc"),l=e.n(c),o=e("4+6U");function u(t){var n=t.post;return Object(s.jsx)(l.a,{href:"/posts/"+n.slug,children:Object(s.jsxs)("a",{className:"jsx-3864894440",children:[Object(s.jsx)(i.a,{date:Object(o.a)(n.date)}),Object(s.jsx)("h2",{className:"jsx-3864894440",children:n.title}),Object(s.jsx)(r.a,{id:"3864894440",children:["a.jsx-3864894440{color:#222;display:inline-block;}","h2.jsx-3864894440{margin:0;font-weight:500;}"]})]})})}},"DFJ/":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/tags/[[...slug]]",function(){return e("WfN/")}])},"WfN/":function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return d})),e.d(n,"default",(function(){return p}));var s=e("nKUr"),a=e("soUV"),r=e("Q8u6"),i=e("9ZpP"),c=e("CFO4"),l=e("MX0m"),o=e.n(l),u=(e("q1tI"),e("B3Qr")),j=e("rksZ");function x(t){var n=t.posts,e=t.tag,a=t.pagination;return Object(s.jsxs)("div",{className:"jsx-641782968 container",children:[Object(s.jsxs)("h1",{className:"jsx-641782968",children:["All posts / ",Object(s.jsx)("span",{className:"jsx-641782968",children:e.name})]}),Object(s.jsx)("ul",{className:"jsx-641782968",children:n.map((function(t,n){return Object(s.jsx)("li",{className:"jsx-641782968",children:Object(s.jsx)(u.a,{post:t})},n)}))}),Object(s.jsx)(j.a,{current:a.current,pages:a.pages,link:{href:function(){return"/posts/tags/[[...slug]]"},as:function(t){return 1===t?"/posts/tags/"+e.slug:"/posts/tags/".concat(e.slug,"/").concat(t)}}}),Object(s.jsx)(o.a,{id:"641782968",children:[".container.jsx-641782968{margin:0 auto;max-width:1200px;width:100%;padding:0 1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","h1.jsx-641782968{margin:0 0 2rem;padding:0;font-weight:100;font-size:1.75rem;color:#9b9b9b;}","h1.jsx-641782968 span.jsx-641782968{font-weight:bold;color:#222;}","ul.jsx-641782968{margin:0;padding:0;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}","li.jsx-641782968{list-style:none;margin-bottom:1.5rem;}","@media (min-width:769px){h1.jsx-641782968{font-size:2rem;}}"]})]})}var d=!0;function p(t){var n=t.posts,e=t.tag,l=t.pagination,o=t.page,u="/posts/tags/".concat(e.name)+(o?"/".concat(o):""),j=e.name;return Object(s.jsxs)(a.a,{children:[Object(s.jsx)(r.a,{url:u,title:j}),Object(s.jsx)(i.a,{url:u,title:j}),Object(s.jsx)(c.a,{url:u,title:j}),Object(s.jsx)(x,{posts:n,tag:e,pagination:l})]})}},rksZ:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var s=e("nKUr"),a=e("MX0m"),r=e.n(a);var i=e("YFqc"),c=e.n(i);function l(t){var n=t.current,e=t.pages,a=t.link,i=function(t,n){return Array.from(Array(n).keys()).map((function(t){return t+1})).filter((function(e){return 1===e||e===n||Math.abs(t-e)<=2})).map((function(e){return{page:2===Math.abs(t-e)&&1!==e&&e!==n?null:e,current:e===t,excerpt:2===Math.abs(t-e)&&1!==e&&e!==n}}))}(n,e);return Object(s.jsxs)("ul",{className:"jsx-1443704391",children:[i.map((function(t,e){return Object(s.jsx)("li",{className:"jsx-1443704391",children:t.excerpt?"...":Object(s.jsx)(c.a,{href:a.href(t.page),as:a.as(t.page),children:Object(s.jsx)("a",{className:"jsx-1443704391 "+((t.page===n?"active":null)||""),children:t.page})})},e)})),Object(s.jsx)(r.a,{id:"1443704391",children:["ul.jsx-1443704391{list-style:none;margin:3rem 0 0 0;padding:0;}","li.jsx-1443704391{display:inline-block;margin-right:1em;color:#9b9b9b;font-size:1.25rem;}","a.active.jsx-1443704391{color:#222;font-weight:bold;}"]})]})}}},[["DFJ/",0,2,1,3,4]]]);