(this.webpackJsonprobofriends2=this.webpackJsonprobofriends2||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),o=(n(12),n(4)),a=n(5),i=n(7),h=n(6),l=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"460px"},children:e.children})},f=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(d,{robots:r})})]})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.8120961d.chunk.js.map