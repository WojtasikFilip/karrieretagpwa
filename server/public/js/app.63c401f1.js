(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],v=0,m=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t.items.length&&0!=t.items.length||"Firma"==this.$route.name||"Favoriten"==this.$route.name?t._e():r("v-app-bar",{attrs:{dark:"",app:"",color:"red darken-4"}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"text-h5"},[t._v(" Karrieretag ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),r("v-navigation-drawer",{attrs:{statless:"",app:"",width:"50%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"red darken-4 white--text"}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-home")])],1),r("v-list-item-title",[t._v("Home")])],1),r("v-list-item",{attrs:{to:"/favoriten"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-star")])],1),r("v-list-item-title",[t._v("Favoriten")])],1)],1)],1)],1),r("v-main",[r("router-view",{attrs:{firmen:t.firmen,vortraege:t.vortraege},on:{hideBar:t.setSelected}})],1)],1)},a=[],o=r("1da1"),s=(r("96cf"),r("1d25")),c=r("6cba"),l=r.n(c),u={name:"App",data:function(){return{items:!1,drawer:!1,db:null,firmen:[],vortraege:[],serverAddress:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])("favoriteFirmaDB",1,{upgrade:function(t){t.createObjectStore("favorite",{keyPath:"firmen_id"})}});case 2:return t.db=e.sent,e.next=5,t.getFirmen();case 5:return e.next=7,t.getVorträge();case 7:case"end":return e.stop()}}),e)})))()},methods:{getFirmen:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l()({url:t.serverAddress+"/firmen",method:"GET"});case 2:r=e.sent,n=r.data,t.firmen=n;case 5:case"end":return e.stop()}}),e)})))()},"getVorträge":function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l()({url:t.serverAddress+"/vortraege",method:"GET"});case 2:r=e.sent,n=r.data,t.vortraege=n;case 5:case"end":return e.stop()}}),e)})))()},setSelected:function(t){this.items=t}}},v=u,m=r("2877"),d=r("6544"),f=r.n(d),p=r("7496"),h=r("40dc"),g=r("5bc1"),b=r("8336"),_=r("132d"),w=r("8860"),x=r("da13"),V=r("1baa"),k=r("34c3"),C=r("5d23"),y=r("f6c4"),F=r("f774"),j=r("2fa4"),O=r("2a7f"),R=Object(m["a"])(v,i,a,!1,null,null,null),I=R.exports;f()(R,{VApp:p["a"],VAppBar:h["a"],VAppBarNavIcon:g["a"],VBtn:b["a"],VIcon:_["a"],VList:w["a"],VListItem:x["a"],VListItemGroup:V["a"],VListItemIcon:k["a"],VListItemTitle:C["c"],VMain:y["a"],VNavigationDrawer:F["a"],VSpacer:j["a"],VToolbarTitle:O["a"]});var A=r("f309");n["a"].use(A["a"]);var B=new A["a"]({}),z=r("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var S=r("8c4f"),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[t.selected.length?r("v-app-bar",{attrs:{color:"grey darken-4",dark:"",app:""}},[t.selected.length?r("v-btn",{attrs:{icon:""},on:{click:function(e){t.selected=[],t.$emit("hideBar",t.selected)}}},[r("v-icon",[t._v("mdi-close")])],1):r("v-app-bar-nav-icon"),r("v-toolbar-title",[t._v(" "+t._s(t.selected.length)+" selected ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1):t._e(),r("v-container",[r("v-text-field",{staticClass:"text-h6",attrs:{"single-line":"","prepend-inner-icon":"mdi-magnify","hide-details":"",filled:"",rounded:""},model:{value:t.searchFirma,callback:function(e){t.searchFirma=e},expression:"searchFirma"}})],1),r("v-card",{staticClass:"elevation-0"},[r("v-list-item-group",{attrs:{"active-class":"pink--text",multiple:""},on:{change:function(e){return t.$emit("hideBar",t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.searchCompany,(function(e){return[r("v-list-item",{key:e.firmen_id},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h5 font-weight-bold",domProps:{textContent:t._s(e.firmen_name)}}),r("v-list-item-subtitle",{staticClass:"text-h6"},[t._v(t._s(e.fachrichtung))]),r("v-list-item-subtitle",{staticClass:"text-h6"},[t._v(t._s(e.platz))])],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:"",to:"/firma/"+e.firmen_id}},[r("v-icon",[t._v(" mdi-forwardburger ")])],1)],1)],1)]}))],2)],1)],1)},N=[],L=(r("4de4"),r("d3b7"),r("caad"),r("2532"),{props:{firmen:{type:Array}},data:function(){return{selected:[],searchFirma:""}},computed:{searchCompany:function(){var t=this;return this.firmen.filter((function(e){return e.firmen_name.includes(t.searchFirma)}))}}}),D=L,$=r("b0af"),P=r("a523"),E=r("1800"),M=r("8654"),G=Object(m["a"])(D,T,N,!1,null,"2bc60ad0",null),H=G.exports;f()(G,{VAppBar:h["a"],VAppBarNavIcon:g["a"],VBtn:b["a"],VCard:$["a"],VContainer:P["a"],VIcon:_["a"],VListItem:x["a"],VListItemAction:E["a"],VListItemContent:C["a"],VListItemGroup:V["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VSpacer:j["a"],VTextField:M["a"],VToolbarTitle:O["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},t._l(t.firma,(function(e){return r("v-card",{key:e.firmen_id,staticClass:"elevation-0"},[r("v-card-title",{staticClass:"black"},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-left")])],1),r("span",{staticClass:"text-h5 white--text ml-2"},[t._v(t._s(e.firmen_name))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.clicked=!t.clicked}}},[t.clicked?t._e():r("v-icon",{attrs:{color:"grey lighten-1"},on:{click:function(e){return t.addFavorit()}}},[t._v(" mdi-star-outline ")]),t.clicked?r("v-icon",{attrs:{color:"yellow darken-3"},on:{click:function(e){return t.removeFavorit()}}},[t._v(" mdi-star ")]):t._e()],1)],1),r("v-list",[r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-email-plus-outline")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.firmen_mail))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-lan")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.fachrichtung))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-map-marker")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.platz))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-web")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.url)+"https://www.htlwienwest.at/")])],1)],1),r("v-divider",{attrs:{inset:""}}),0==t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-human-male-board")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Hält keinen Vortrag")])],1)],1):t._e(),0!=t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-human-male-board")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Hält einen Vortrag")])],1)],1):t._e(),0!=t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-calendar-clock")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Von: "+t._s(t.thisVortrag.map((function(t){return t.anfangvortrag.substr(0,5)})).toString())+" bis: "+t._s(t.thisVortrag.map((function(t){return t.endevortrag.substr(0,5)})).toString())+" Uhr ")])],1)],1):t._e(),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-pencil-box-multiple")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6 font-weight-normal"},[t._v("Notizen zur Firma: ")])],1)],1)],1),r("v-container",[r("v-textarea",{staticClass:"pa-3 text-h6",attrs:{color:"red darken-4",label:"Notizen",maxlength:"150"},model:{value:t.firmenNotiz,callback:function(e){t.firmenNotiz=e},expression:"firmenNotiz"}})],1)],1)})),1),t.showButton?r("v-btn",{attrs:{text:""},on:{click:function(e){return t.updateFirma()}}},[t._v("Speichern")]):t._e()],1)},q=[],K=(r("a9e3"),r("d81d"),{data:function(){return{clicked:!1,firmenNotiz:"",db:null,showButton:!1,indexFirma:{}}},props:{firmen:{type:Array},vortraege:{type:Array},id:{type:String}},methods:{addFavorit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.firma[0].notiz=t.firmenNotiz,e.next=3,t.db.put("favorite",t.firma[0]);case 3:t.setData(),navigator.vibrate(400);case 5:case"end":return e.stop()}}),e)})))()},addNotiz:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},removeFavorit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.delete("favorite",t.firma[0].firmen_id);case 2:t.setData();case 3:case"end":return e.stop()}}),e)})))()},updateFirma:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.db.transaction("favorite","readwrite"),e.next=3,t.db.get("favorite",Number(t.id));case 3:return n=e.sent,n.notiz=t.firmenNotiz,e.next=7,t.db.put("favorite",n);case 7:return e.next=9,r.done;case 9:t.setData();case 10:case"end":return e.stop()}}),e)})))()},setData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.get("favorite",Number(t.id));case 2:r=e.sent,r?(t.clicked=!0,t.firmenNotiz=r.notiz,t.showButton=!0):(t.clicked=!1,t.showButton=!1);case 4:case"end":return e.stop()}}),e)})))()}},computed:{firma:function(){var t=this;return this.firmen.filter((function(e){return e.firmen_id==t.id}))},thisVortrag:function(){var t=this;return this.vortraege.filter((function(e){return e.firma==t.firma.map((function(t){return t.firmen_name}))}))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])("favoriteFirmaDB");case 2:t.db=e.sent,t.setData();case 4:case"end":return e.stop()}}),e)})))()}}),U=K,Q=r("99d9"),W=r("62ad"),X=r("ce7e"),Y=r("0fd9"),Z=r("a844"),tt=Object(m["a"])(U,J,q,!1,null,"5824f5f4",null),et=tt.exports;f()(tt,{VBtn:b["a"],VCard:$["a"],VCardTitle:Q["c"],VCol:W["a"],VContainer:P["a"],VDivider:X["a"],VIcon:_["a"],VList:w["a"],VListItem:x["a"],VListItemAction:E["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VRow:Y["a"],VSpacer:j["a"],VTextarea:Z["a"]});var rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{dark:"",color:"red darken-4"}},[r("v-btn",{attrs:{to:"/",icon:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1),r("v-toolbar-title",{staticClass:"text-h5"},[t._v("Favoriten")]),r("v-spacer")],1),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},t._l(t.allFavorites,(function(e){return r("v-card",{key:e.firmen_id,staticClass:"mt-5",attrs:{color:"blue-grey lighten-5 "}},[r("v-card-title",{staticClass:"text-h5 black--text font-weight-black pb-0"},[t._v(" "+t._s(e.firmen_name)+" "),r("v-chip",{staticClass:"ma-2 font-weight-medium",attrs:{color:"red darken-4","text-color":"white"}},[t._v(" "+t._s(e.fachrichtung)+" ")])],1),r("v-card-text",{staticStyle:{"font-size":"large"}},[t._v(" "+t._s(e.notiz)+" ")]),r("v-card-actions",{staticClass:"mt-0 pl-0 pt-0"},[r("v-card-text",{staticClass:"text-h6 black--text"},[r("v-icon",{staticClass:"mr-2 mb-1",attrs:{large:""}},[t._v("mdi-home-map-marker")]),t._v(t._s(e.platz))],1),r("v-btn",{staticClass:"mr-2",attrs:{icon:"",to:"/firma/"+e.firmen_id}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-eye")])],1)],1)],1)})),1)],1)],1)],1)},nt=[],it={data:function(){return{db:null,allFavorites:[]}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])("favoriteFirmaDB");case 2:return t.db=e.sent,e.next=5,t.db.getAll("favorite");case 5:t.allFavorites=e.sent,console.log(t.allFavorites);case 7:case"end":return e.stop()}}),e)})))()}},at=it,ot=r("cc20"),st=Object(m["a"])(at,rt,nt,!1,null,"7430bc48",null),ct=st.exports;f()(st,{VAppBar:h["a"],VBtn:b["a"],VCard:$["a"],VCardActions:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VChip:ot["a"],VCol:W["a"],VContainer:P["a"],VIcon:_["a"],VRow:Y["a"],VSpacer:j["a"],VToolbarTitle:O["a"]}),n["a"].use(S["a"]);var lt=[{path:"/",name:"Home",component:H},{path:"/firma/:id",name:"Firma",component:et,props:!0},{path:"/favoriten",name:"Favoriten",component:ct}],ut=new S["a"]({mode:"history",base:"/",routes:lt}),vt=ut;n["a"].config.productionTip=!1,new n["a"]({vuetify:B,router:vt,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=app.63c401f1.js.map