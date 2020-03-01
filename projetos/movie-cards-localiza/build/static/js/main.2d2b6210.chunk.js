(this["webpackJsonpmovie-database-crud"]=this["webpackJsonpmovie-database-crud"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),c=(a(30),a(9)),l=a(12),s=a(2),u=a(3),m=a(5),d=a(4),h=a(6),v=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.imagePath,r=e.id;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card movie-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:n}),i.a.createElement("span",{className:"card-title"},t)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card-action"},i.a.createElement(c.b,{to:"/movies/".concat(r)},"VER DETALHES")))))}}]),t}(i.a.Component),p=a(24),b=a(15),f=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}localStorage.setItem("movies",JSON.stringify(f));var E=function(){return JSON.parse(localStorage.getItem("movies"))},O=function(e){return localStorage.setItem("movies",JSON.stringify(e))},j=function(e){var t=E().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))},S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),t}(n.Component),N=a(10);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(b.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_title"},"T\xedtulo")))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_subtitle"},"Subt\xedtulo")))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_image"},"Imagem")))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("textarea",{id:"movie_storyline",className:"materialize-textarea",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_storyline"},"Sinopse")))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"row col"},i.a.createElement("label",{htmlFor:"movie_genre"},"Genre Select"),i.a.createElement("select",{className:"browser-default",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",className:"form-control",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),i.a.createElement("label",{className:"active",htmlFor:"movie_rating"},"Avalia\xe7\xe3o")))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("button",{className:"btn waves-effect waves-light",type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"movie-form"},i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"col s12"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton())))}}]),t}(i.a.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={movies:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){setTimeout((function(){var t=E();e(t)}),2e3)})).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return e?i.a.createElement("div",null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(c.b,{to:"/movies/new",className:"card-action"},"ADICIONAR CART\xc3O")),i.a.createElement("div",{className:"movie-list"},e.map((function(e){return i.a.createElement(v,{key:e.title,movie:e})})))):i.a.createElement(S,null)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={movie:"",isShouldRedirect:!1},a.onChangeRedirect=a.onChangeRedirect.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;j(this.props.match.params.id).then((function(t){return e.setState({movie:t})}))}},{key:"onChangeRedirect",value:function(){!function(e){var t=E();t=t.filter((function(t){return t.id!==parseInt(e,10)})),O(t),new Promise((function(e){setTimeout((function(){e({status:"OK"})}),1e3)}))}(this.state.movie.id),this.setState({isShouldRedirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.isShouldRedirect,n=t.title,r=t.storyline,o=t.imagePath,s=t.genre,u=t.rating,m=t.subtitle,d=t.id;return a?i.a.createElement(l.a,{to:"/"}):t?i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m7"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o)}),i.a.createElement("span",{className:"card-title"},n)),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,"Subtitle: ".concat(m)),i.a.createElement("p",null,"Storyline: ".concat(r)),i.a.createElement("p",null,"Genre: ".concat(s)),i.a.createElement("p",null,"Rating: ".concat(u))),i.a.createElement("div",{className:"card-action"},i.a.createElement(c.b,{to:"/movies/".concat(d,"/edit")},"EDITAR"),i.a.createElement(c.b,{to:"/"},"VOLTAR"),i.a.createElement("button",{type:"button",onClick:this.onChangeRedirect},"APAGAR"))))):i.a.createElement(S,null)}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a.state={shouldRedirect:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){!function(e){var t=E(),a=y({},e,{id:t[t.length-1].id+1});t=[].concat(Object(p.a)(t),[a]),O(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))}(e),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(l.a,{to:"/"}):i.a.createElement(w,{onSubmit:this.handleSubmit})}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={status:"loading",shouldRedirect:"",movie:""},a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;j(this.props.match.params.id).then((function(t){return e.setState({status:"",shouldRedirect:"",movie:t})}))}},{key:"componentDidUpdate",value:function(){return i.a.createElement(l.a,{to:"/"})}},{key:"handleSubmit",value:function(e){!function(e){var t=E().map((function(t){return t.id===parseInt(e.id,10)?y({},t,{},e):t}));O(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))}(e),this.setState({status:"",shouldRedirect:!0,movie:e})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(l.a,{to:"/"}):"loading"===t?i.a.createElement(S,null):i.a.createElement(w,{movie:n,onSubmit:this.handleSubmit})}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"not-found header"},"P\xe1gina n\xe3o encontrada")}}]),t}(n.Component);a(36);var A=function(){return i.a.createElement(c.a,null,i.a.createElement("main",null,i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:"/",component:P}),i.a.createElement(l.b,{exact:!0,path:"/movies/new",component:I}),i.a.createElement(l.b,{exact:!0,path:"/movies/:id/edit",component:R}),i.a.createElement(l.b,{exact:!0,path:"/movies/:id",component:C}),i.a.createElement(l.b,{component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2d2b6210.chunk.js.map