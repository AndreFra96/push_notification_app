(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0d9d":function(t,e,r){},"0e95":function(t,e,r){"use strict";r("0d9d")},1182:function(t,e,r){},"34ba":function(t,e,r){"use strict";r("1182")},3523:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("Notifiche")])},a=[]},"4d72":function(t,e,r){"use strict";var i=r("c74d"),a=r.n(i);e["default"]=a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("14c6"),r("08c1"),r("4842"),r("d9fc");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[r("nav-bar"),r("div",{staticClass:"container flex-grow-1"},[r("error"),r("div",{staticClass:"mt-1"},[r("router-view")],1)],1),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-light text-center p-3 mt-4"},[r("div",{staticClass:"logo"}),r("p",[t._v(" Design basato sul progetto di prova fornito da "),r("a",{attrs:{href:"https://auth0.com"}},[t._v("Auth0")])])])}],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container mb-3"},[r("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-brand logo"}),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("Home")])],1),t.$auth.isAuthenticated?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/groups"}},[t._v("Notifiche di gruppo")])],1):t._e(),t.$auth.isAuthenticated?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/notification"}},[t._v("Direct message")])],1):t._e()]),r("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.$auth.isAuthenticated||t.$auth.loading?t._e():r("li",{staticClass:"nav-item"},[r("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")])]),t.$auth.isAuthenticated?r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[r("img",{staticClass:"nav-user-profile rounded-circle",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}})]),r("div",{staticClass:"dropdown-menu dropdown-menu-right"},[r("div",{staticClass:"dropdown-header"},[t._v(t._s(t.$auth.user.name))]),r("router-link",{staticClass:"dropdown-item dropdown-profile",attrs:{to:"/profile"}},[r("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),t._v("Profilo ")],1),r("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[r("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),t._v("Log out ")],1)],1)]):t._e()]),t.$auth.isAuthenticated||t.$auth.loading?t._e():r("ul",{staticClass:"navbar-nav d-md-none"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"qsLoginBtn"},on:{click:t.login}},[t._v(" Log in ")])]),t.$auth.isAuthenticated?r("ul",{staticClass:"navbar-nav d-md-none d-flex",attrs:{id:"mobileAuthNavBar"}},[r("li",{staticClass:"nav-item"},[r("span",{staticClass:"user-info"},[r("img",{staticClass:"nav-user-profile d-inline-block rounded-circle mr-3",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}}),r("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.$auth.user.name))])])]),r("li",[r("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}}),r("router-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),r("li",[r("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),r("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log out")])],1)]):t._e()])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"NavBar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout(),this.$router.push({path:"/"})}}},l=c,u=(r("34ba"),r("2877")),p=Object(u["a"])(l,s,o,!1,null,null,null),d=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.msg?r("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),t._m(0)]):t._e()},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],m={name:"Error",computed:{msg:function(){return this.$auth.error}}},v=m,g=Object(u["a"])(v,h,f,!1,null,null,null),b=g.exports,_={components:{NavBar:d,Error:b}},C=_,y=Object(u["a"])(C,a,n,!1,null,null,null),w=y.exports,x=r("bc3a"),k=r.n(x),$={install:function(){i["a"].prototype.$http=k.a}},O=r("8c4f"),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hero"),r("hr"),r("home-content")],1)},j=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center hero"},[r("img",{staticClass:"mb-3 app-logo",attrs:{src:"/logo.png",alt:"app logo",width:"120"}}),t.$auth.isAuthenticated?r("h1",[t._v("Benvenuto "+t._s(t.$auth.user.nickname))]):r("h1",[t._v("Push Notification APP")]),t.$auth.isAuthenticated?r("p",{staticClass:"lead"},[t._v(" Inizia subito ad utilizzare il servizio, oppure scopri le API per integrare il servizio all'interno della tua applicazione "),r("br"),r("router-link",{staticClass:"btn btn-primary rounded m-3 p-3 text-white pointer",attrs:{to:"/groups"}},[t._v("Notifica di Gruppo")]),r("router-link",{staticClass:"btn btn-primary rounded m-3 p-3 text-white pointer",attrs:{to:"/notification"}},[t._v("Messaggio diretto")]),r("a",{staticClass:"btn rounded m-3 p-3 text-white pointer",staticStyle:{"background-color":"#ffbd1f"},attrs:{target:"_blank",href:"https://push-api.herokuapp.com/docs"}},[t._v("Documentazione API")])],1):r("p",{staticClass:"lead"},[t._v(" Invia notifiche push personalizzate agli utenti della tua applicazione utilizzando i dati presenti in un database SQL "),r("br"),r("button",{staticClass:"btn btn-primary rounded p-3 m-3",on:{click:t.login}},[t._v(" Login ")]),r("a",{staticClass:"btn btn-primary rounded pointer p-3 m-3 text-white",attrs:{href:"#more"}},[t._v(" Scopri di più ")])])])},R=[],G={name:"Hero",methods:{login:function(){this.$auth.loginWithRedirect()}}},P=G,N=Object(u["a"])(P,E,R,!1,null,null,null),S=N.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"next-steps",attrs:{id:"more"}},[r("h2",{staticClass:"my-5 text-center"},[t._v("Scopri di più")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 mb-4"},[r("h6",{staticClass:"mb-3"},[r("a",{attrs:{href:"https://firebase.google.com/docs/cloud-messaging"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Firebase Cloud Messaging ")],1)]),r("p",[t._v(" SQL Notification App utilizza il servizio Firebase Cloud Messaging per l'invio delle notifiche, in fase di configurazione sarà richiesta la chiave privata dell'account di servizio Firebase che verrà utilizzata per indirizzare le notifiche agli utenti della tua applicazione. ")])]),r("div",{staticClass:"col-md"}),r("div",{staticClass:"col-md-5 mb-4"},[r("h6",{staticClass:"mb-3"},[r("a",{attrs:{href:"https://auth0.com/docs/multifactor-authentication"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Database ")],1)]),t._m(0)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 mb-4"},[r("h6",{staticClass:"mb-3"},[r("a",{attrs:{href:"https://auth0.com/docs/anomaly-detection"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Notifiche come messaggi ")],1)]),t._m(1)]),r("div",{staticClass:"col-md"}),r("div",{staticClass:"col-md-5 mb-4"},[r("h6",{staticClass:"mb-3"},[r("a",{attrs:{href:"https://auth0.com/docs/rules"}},[r("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Sicurezza ")],1)]),r("p",[t._v(" Scopri di più sui sistemi di sicurezza adottati, i tuoi dati sono al sicuro. ")])])])])},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Connetti un database SQL e utilizza i dati presenti per personalizzare le notifiche. "),r("br"),t._v(" Per utilizzare il database è necessario che all'interno sia presente una tabella contenente i token di indirizzamento ai dispositivi di Firebase Cloud Messaging. ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Invia una notifica push mirata ad un dispositivo utilizzando il suo token FCM. "),r("br")])}],L={name:"HomeContent"},B=L,q=Object(u["a"])(B,A,I,!1,null,null,null),T=q.exports,D={name:"home",components:{Hero:S,HomeContent:T}},M=D,F=(r("0e95"),Object(u["a"])(M,z,j,!1,null,"7a563414",null)),U=F.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center profile-header"},[r("div",{staticClass:"col-md-2 mb-3"},[r("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),r("div",{staticClass:"col-md text-center text-md-left"},[r("h2",[t._v(t._s(t.$auth.user.name))]),r("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),r("div",{staticClass:"row"},[r("highlightjs",{staticClass:"rounded w-100",attrs:{autodetect:"",code:JSON.stringify(t.$auth.user,null,2)}})],1)])},H=[],J={},K=Object(u["a"])(J,W,H,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumb",{attrs:{active:"Lista Gruppi",previous:[{title:"Gruppi",link:"/groups"}]}}),r("h1",[t._v("Lista Gruppi")]),r("GroupsList")],1)},X=[],Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.componentKey,attrs:{id:"GroupsList"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Nome del gruppo.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t.loading?r("div",{staticClass:"text-center pt-5"},[r("h5",[t._v("Caricamento lista gruppi")]),t._m(0)]):t._e(),t.error?r("div"):t._e(),r("div",{staticClass:"card-group"},t._l(t.filteredList,(function(e){return r("div",{key:e.id,staticClass:"card border shadow rounded",staticStyle:{"min-width":"18rem",margin:"10px"}},[r("div",{staticClass:"card-body d-flex flex-column justify-content-between"},[r("div",{staticClass:"d-flex justify-content-between"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),r("font-awesome-icon",{staticClass:"text-danger pointer",attrs:{icon:"times"},on:{click:function(r){return t.deleteGroup(e.id)}}})],1),r("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),r("div",{staticClass:"d-flex justify-content-between"},[r("router-link",{staticClass:"card-link",attrs:{to:"/groups/edit/"+e.id}},[t._v("Modifica")]),r("router-link",{staticClass:"card-link btn btn-primary btn-sm",attrs:{to:"/groups/notification/"+e.id}},[t._v("Invia Notifica "),r("font-awesome-icon",{staticClass:"ml-1",attrs:{icon:"chevron-right"}})],1)],1)])])})),0)])},Z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner-grow text-secondary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],tt=(r("386d"),r("6762"),r("2fdb"),r("96cf"),r("3b8d")),et={name:"GroupsList",data:function(){return{groups:[],loading:!0,search:"",error:null,componentKey:0}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.prev=3,t.next=6,this.$http.get("https://push-api.herokuapp.com/groups",{headers:{Authorization:"Bearer ".concat(e)}});case 6:r=t.sent,i=r.data,this.groups=i["response"],this.loading=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](3),this.loading=!1,this.error=t.t0,console.error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[3,12]])})));function e(){return t.apply(this,arguments)}return e}(),computed:{filteredList:function(){var t=this;return this.groups.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}))}},methods:{deleteGroup:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!confirm("Cancellare il gruppo?\nNon sarà possibile recuperarlo in seguito")){t.next=15;break}return t.next=3,this.$auth.getTokenSilently();case 3:return r=t.sent,t.prev=4,t.next=7,this.$http.delete("https://push-api.herokuapp.com/groups/"+e,{headers:{Authorization:"Bearer ".concat(r)}});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](4),console.error(t.t0);case 12:for(i in this.groups)this.groups[i]["id"]===e&&(delete this.groups[i],this.forceRerender());this.search=" ",this.search="";case 15:case"end":return t.stop()}}),t,this,[[4,9]])})));function e(e){return t.apply(this,arguments)}return e}(),forceRerender:function(){this.componentKey+=1}}},rt=et,it=Object(u["a"])(rt,Y,Z,!1,null,null,null),at=it.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky-top p-0"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[t._l(t.previous,(function(e){return r("li",{key:e.title,staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:e.link}},[t._v(t._s(e.title))])],1)})),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))])],2)])])},st=[],ot={name:"Breadcrumb",props:["active","previous"]},ct=ot,lt=Object(u["a"])(ct,nt,st,!1,null,null,null),ut=lt.exports,pt={name:"groups",components:{Breadcrumb:ut,GroupsList:at}},dt=pt,ht=Object(u["a"])(dt,V,X,!1,null,null,null),ft=ht.exports,mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Notifiche di Gruppo")]),t._m(0),r("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-around"},[r("RoutingButton",{attrs:{title:"Crea Gruppo",description:"Analizza il database e crea nuovi gruppi di utenti.",link:"/groups/create"}}),r("RoutingButton",{attrs:{title:"Lista Gruppi",description:"Visualizza, modifica e invia notifiche ai gruppi creati.",link:"/groups/list"}})],1)])},vt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Raggruppa e collega i token dei dispositivi FCM ai dati presenti nel database creando dei gruppi, un gruppo è una combinazione di titolo, descrizione e query. "),r("br"),t._v(" I campi estratti nella query del gruppo possono essere utilizzati come placeholder per la costruzione del testo della notifica. ")])}],gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.link}},[r("div",{staticClass:"btn btn-primary text-white rounded p-2 m-3 pointer",staticStyle:{"min-width":"18rem",width:"20rem"},attrs:{id:"RoutingButton"}},[r("h4",[t._v(t._s(t.title))]),r("p",[t._v(t._s(t.description))])])])},bt=[],_t={name:"RoutingButton",props:["title","description","link"]},Ct=_t,yt=Object(u["a"])(Ct,gt,bt,!1,null,null,null),wt=yt.exports,xt={name:"index",components:{RoutingButton:wt}},kt=xt,$t=Object(u["a"])(kt,mt,vt,!1,null,null,null),Ot=$t.exports,zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumb",{attrs:{active:"Modifica Gruppo",previous:[{title:"Gruppi",link:"/groups"},{title:"Lista Gruppi",link:"/groups/list"}]}}),r("h1",[t._v("Modifica Gruppo")]),r("p",[t._v(" Modifica titolo, descrizione e query del gruppo, premi salva modifiche per rendere effettivo il cambiamento. ")]),r("hr"),r("div",{staticClass:"card shadow p-4"},[r("GroupEditForm",{attrs:{groupId:this.$route.params.id}})],1)],1)},jt=[],Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{id:"GroupEditForm"}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"group-title"}},[t._v("Titolo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"group-title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"group-description"}},[t._v("Descrizione")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",id:"group-description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"group-query"}},[t._v("Query")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"group-query"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary rounded",attrs:{type:"button"},on:{click:t.editGroup}},[t._v(" Salva Modifiche ")])])},Rt=[],Gt={name:"GroupEditForm",props:["groupId"],data:function(){return{id:this.groupId,title:"",description:"",query:"",loading:!0}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.prev=3,t.next=6,this.$http.get("https://push-api.herokuapp.com/groups/"+this.groupId,{headers:{Authorization:"Bearer ".concat(e)}});case 6:r=t.sent,i=r.data,this.title=i["response"][0]["title"],this.description=i["response"][0]["description"],this.query=i["response"][0]["query"],this.loading=!1,t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](3),this.error=t.t0,this.loading=!1,console.error(t.t0);case 19:case"end":return t.stop()}}),t,this,[[3,14]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{editGroup:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:alert("DA IMPLEMENTARE");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},Pt=Gt,Nt=Object(u["a"])(Pt,Et,Rt,!1,null,null,null),St=Nt.exports,At={name:"groups-edit",components:{Breadcrumb:ut,GroupEditForm:St}},It=At,Lt=Object(u["a"])(It,zt,jt,!1,null,null,null),Bt=Lt.exports,qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumb",{attrs:{active:"Notifica di Gruppo",previous:[{title:"Gruppi",link:"/groups"},{title:"Lista Gruppi",link:"/groups/list"}]}}),r("h1",[t._v("Notifica di Gruppo")]),r("p",[t._v(" Inserisci testo e corpo della notifica utilizzando la sintassi [[keyword]], dove keyword è ogni campo estratto dalla query, e premi invio. ")]),r("hr"),r("div",{staticClass:"card shadow p-4"},[r("label",[t._v("Gruppo")]),r("GroupInfo",{attrs:{groupId:this.$route.params.id}}),r("GroupNotificationForm",{attrs:{groupId:this.$route.params.id}})],1)],1)},Tt=[],Dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card p-2 mb-2",attrs:{id:"GroupsInfo"}},[t.loading?r("div",{staticClass:"text-center"},[t._m(0)]):r("table",[r("tr",[r("td",{staticClass:"align-top"},[t._v("Titolo:")]),r("td",[r("b",[t._v(t._s(t.title))])])]),r("tr",[r("td",[t._v("Descrizione:")]),r("td",[t._v(t._s(t.description))])]),r("tr",[r("td",{staticClass:"align-top"},[t._v("Keywords:")]),r("td",t._l(t.keywords,(function(e){return r("span",{key:e},[t._v(" "+t._s(e)+", ")])})),0)]),r("tr",[r("td",{staticClass:"align-top"},[t._v("Destinatari:")]),r("td",[t._v(t._s(t.destinatari)+" dispositivi")])])])])},Mt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner-grow text-secondary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],Ft={name:"GroupsInfo",props:["groupId"],data:function(){return{id:this.groupId,title:"",description:"",keywords:[],destinatari:0,query:"",loading:!0}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.prev=3,t.next=6,this.$http.get("https://push-api.herokuapp.com/groups/info/"+this.groupId,{headers:{Authorization:"Bearer ".concat(e)}});case 6:r=t.sent,i=r.data,this.title=i["response"]["title"],this.description=i["response"]["description"],this.query=i["response"]["query"],this.keywords=i["response"]["keywords"],this.destinatari=i["response"]["destinatari"],this.loading=!1,t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](3),this.error=t.t0,this.loading=!1,console.error(t.t0);case 21:case"end":return t.stop()}}),t,this,[[3,16]])})));function e(){return t.apply(this,arguments)}return e}()},Ut=Ft,Wt=(r("df23"),Object(u["a"])(Ut,Dt,Mt,!1,null,null,null)),Ht=Wt.exports,Jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{id:"GroupNotificationForm"}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message-title"}},[t._v("Titolo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"message-title","aria-describedby":"title-hint",placeholder:"Titolo della notifica"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"title-hint"}},[t._v("E' possibile utilizzare le keywords sia nel titolo che nel corpo della notifica.")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message-body"}},[t._v("Corpo")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{type:"text",id:"message-body",placeholder:"Corpo della notifica"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary rounded",attrs:{type:"button"},on:{click:t.sendNotification}},[t._v(" Invia Notifica ")])])},Kt=[],Qt={name:"GrousNotificationFrom",props:["groupId"],data:function(){return{id:this.groupId,title:"",body:""}},methods:{sendNotification:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.prev=3,t.next=6,this.$http.post("https://push-api.herokuapp.com/messages/group",{group:this.id,title:this.title,body:this.body},{headers:{Authorization:"Bearer ".concat(e)}});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[3,8]])})));function e(){return t.apply(this,arguments)}return e}()}},Vt=Qt,Xt=Object(u["a"])(Vt,Jt,Kt,!1,null,null,null),Yt=Xt.exports,Zt={name:"groups-notification",components:{Breadcrumb:ut,GroupInfo:Ht,GroupNotificationForm:Yt}},te=Zt,ee=Object(u["a"])(te,qt,Tt,!1,null,null,null),re=ee.exports,ie=r("fda7"),ae=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),ne=r("a8db"),se=r("9767");function oe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function ce(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?oe(Object(r),!0).forEach((function(e){Object(ae["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var le,ue=function(){return window.history.replaceState({},document.title,window.location.pathname)},pe=function(){return le},de=function(t){var e=t.onRedirectCallback,r=void 0===e?ue:e,a=t.redirectUri,n=void 0===a?window.location.origin:a,s=Object(ne["a"])(t,["onRedirectCallback","redirectUri"]);return le||(le=new i["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e,r);case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.isAuthenticated();case 9:this.isAuthenticated=t.sent,this.error=null,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),this.error=t.t0;case 17:return t.prev=17,this.popupOpen=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[1,13,17,20]])})));function e(e,r){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,this.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(tt["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(se["a"])(ce(ce({},s),{},{client_id:s.clientId,redirect_uri:n}));case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,i=e.appState,this.error=null,r(i);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),this.error=t.t0;case 16:return t.prev=16,t.next=19,this.auth0Client.isAuthenticated();case 19:return this.isAuthenticated=t.sent,t.next=22,this.auth0Client.getUser();case 22:return this.user=t.sent,this.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,this,[[3,13,16,25]])})));function e(){return t.apply(this,arguments)}return e}()}),le)},he={install:function(t,e){t.prototype.$auth=de(e)}},fe=function(t,e,r){var i=pe(),a=function(){if(i.isAuthenticated)return r();i.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!i.loading)return a();i.$watch("loading",(function(t){if(!1===t)return a()}))};i["a"].use(O["a"]);var me=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:U},{path:"/profile",name:"profile",component:Q,beforeEnter:fe},{path:"/groups",component:Ot,beforeEnter:fe},{path:"/groups/list",component:ft,beforeEnter:fe},{path:"/groups/edit/:id",component:Bt,beforeEnter:fe},{path:"/groups/notification/:id",component:re,beforeEnter:fe},{path:"/notification",component:ie["default"],beforeEnter:fe}]}),ve=me,ge=r("1020"),be=r.n(ge),_e=(r("2c43"),r("ecee")),Ce=r("c074"),ye=r("ad3d"),we=r("8160");i["a"].config.productionTip=!1,i["a"].use(be.a.vuePlugin),i["a"].use(he,{domain:we["c"],clientId:we["b"],audience:we["a"],onRedirectCallback:function(t){ve.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),i["a"].use($),_e["c"].add(Ce["b"],Ce["f"],Ce["c"],Ce["e"],Ce["a"],Ce["d"]),i["a"].component("font-awesome-icon",ye["a"]),new i["a"]({router:ve,render:function(t){return t(w)}}).$mount("#app")},8160:function(t){t.exports=JSON.parse('{"c":"push-api.us.auth0.com","a":"https://push-api","b":"xCSEWKDOBq2jSbn5zmqQnnlJwoPuyDGA"}')},"8e81":function(t,e,r){},c74d:function(t,e){},df23:function(t,e,r){"use strict";r("8e81")},fda7:function(t,e,r){"use strict";var i=r("3523"),a=r("4d72"),n=r("2877"),s=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}});
//# sourceMappingURL=app.d8fe8a80.js.map