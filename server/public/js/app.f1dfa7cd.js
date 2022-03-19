(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],v=0,d=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t.items.length&&0!=t.items.length||"Firma"==this.$route.name||"Favoriten"==this.$route.name?t._e():r("v-app-bar",{attrs:{dark:"",app:"",color:"red darken-4"}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"text-h5"},[t._v(" Karrieretag ")]),r("v-spacer")],1),r("v-navigation-drawer",{attrs:{app:"","hide-overlay":"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"red darken-4 white--text"}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-home")])],1),r("v-list-item-title",[t._v("Home")])],1),r("v-list-item",{attrs:{to:"/favoriten"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-star")])],1),r("v-list-item-title",[t._v("Favoriten")])],1)],1)],1)],1),r("v-main",[1==this.offline?r("div",{staticClass:"red darken-4 white--text text-center",staticStyle:{width:"100%"},attrs:{role:"alert"}},[t._v(" Sie surfen offline... ")]):t._e(),r("router-view",{attrs:{firmen:t.firmen,vortraege:t.vortraege},on:{hideBar:t.setSelected}})],1)],1)},a=[],o=r("1da1"),c=(r("96cf"),r("1d25")),s=r("6cba"),l=r.n(s),u={name:"App",data:function(){return{items:!1,drawer:!1,offline:!1,db:null,firmen:[],vortraege:[],serverAddress:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.addEventListener("swUpdated",t.updateAvailable,{once:!0}),window.addEventListener("online",(function(){return t.offline=!1})),window.addEventListener("offline",(function(){return t.offline=!0})),e.next=5,Object(c["a"])("favoriteFirmaDB",1,{upgrade:function(t){t.createObjectStore("favorite",{keyPath:"firmen_id"})}});case 5:return t.db=e.sent,e.next=8,t.getFirmen();case 8:return e.next=10,t.getVorträge();case 10:case"end":return e.stop()}}),e)})))()},methods:{updateAvailable:function(){confirm("New content is available!. Click OK to refresh")&&window.location.reload()},getFirmen:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l()({url:"/firmen",method:"GET"});case 2:r=e.sent,n=r.data,t.firmen=n;case 5:case"end":return e.stop()}}),e)})))()},"getVorträge":function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l()({url:"/vortraege",method:"GET"});case 2:r=e.sent,n=r.data,t.vortraege=n;case 5:case"end":return e.stop()}}),e)})))()},setSelected:function(t){this.items=t}}},v=u,d=r("2877"),m=r("6544"),f=r.n(m),p=r("7496"),h=r("40dc"),b=r("5bc1"),g=r("132d"),w=r("8860"),_=r("da13"),k=r("1baa"),x=r("34c3"),V=r("5d23"),C=r("f6c4"),y=r("f774"),F=r("2fa4"),O=r("2a7f"),j=Object(d["a"])(v,i,a,!1,null,null,null),R=j.exports;f()(j,{VApp:p["a"],VAppBar:h["a"],VAppBarNavIcon:b["a"],VIcon:g["a"],VList:w["a"],VListItem:_["a"],VListItemGroup:k["a"],VListItemIcon:x["a"],VListItemTitle:V["c"],VMain:C["a"],VNavigationDrawer:y["a"],VSpacer:F["a"],VToolbarTitle:O["a"]});var S=r("f309");n["a"].use(S["a"]);var z=new S["a"]({}),A=r("9483");Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var B=r("8c4f"),I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[t.selected.length?r("v-app-bar",{attrs:{color:"grey darken-4",dark:"",app:""}},[t.selected.length?r("v-btn",{attrs:{icon:""},on:{click:function(e){t.selected=[],t.$emit("hideBar",t.selected)}}},[r("v-icon",[t._v("mdi-close")])],1):r("v-app-bar-nav-icon"),r("v-toolbar-title",[t._v(" "+t._s(t.selected.length)+" selected ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.clicked=!t.clicked,t.addFavoriten(),t.snackbar=!0}}},[t.clicked?t._e():r("v-icon",{attrs:{color:"grey lighten-1",medium:""}},[t._v("mdi-book-plus-multiple ")])],1)],1):t._e(),r("v-container",[r("v-snackbar",{attrs:{timeout:3e3,rounded:"pill",elevation:"24"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({staticStyle:{"font-size":"16px"},attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("span",{staticStyle:{"font-size":"20px"}},[t._v("Als Favorit markiert.")])]),r("v-text-field",{staticClass:"text-h6",attrs:{"single-line":"","prepend-inner-icon":"mdi-magnify","hide-details":"",filled:"",rounded:""},model:{value:t.searchFirma,callback:function(e){t.searchFirma=e},expression:"searchFirma"}})],1),r("v-card",{staticClass:"elevation-0"},[r("v-list-item-group",{attrs:{"active-class":"pink--text",multiple:""},on:{change:function(e){return t.$emit("hideBar",t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.searchCompany,(function(e){return[r("v-list-item",{key:e.firmen_id,on:{click:function(r){return t.selectedFirma.push(e)}}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h5 font-weight-bold",domProps:{textContent:t._s(e.firmen_name)}}),r("v-list-item-subtitle",{staticClass:"text-h6"},[t._v(t._s(e.fachrichtung))]),r("v-list-item-subtitle",{staticClass:"text-h6"},[t._v(t._s(e.platz))])],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:"",to:"/firma/"+e.firmen_id}},[r("v-icon",[t._v(" mdi-forwardburger ")])],1)],1)],1)]}))],2)],1)],1)},L=[],T=(r("4de4"),r("d3b7"),r("caad"),r("2532"),r("159b"),{props:{firmen:{type:Array}},data:function(){return{clicked:!1,db:null,snackbar:!1,selected:[],selectedFirma:[],searchFirma:""}},computed:{searchCompany:function(){var t=this;return this.firmen.filter((function(e){return e.firmen_name.includes(t.searchFirma)}))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])("favoriteFirmaDB");case 2:t.db=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{addFavoriten:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.selectedFirma.forEach(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.put("favorite",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.selected=[],t.$emit("hideBar",t.selected),t.selectedFirma=[],t.clicked=!t.clicked;case 5:case"end":return e.stop()}}),e)})))()}}}),N=T,E=r("8336"),D=r("b0af"),$=r("a523"),P=r("1800"),M=r("2db4"),G=r("8654"),H=Object(d["a"])(N,I,L,!1,null,"01dadb76",null),U=H.exports;f()(H,{VAppBar:h["a"],VAppBarNavIcon:b["a"],VBtn:E["a"],VCard:D["a"],VContainer:$["a"],VIcon:g["a"],VListItem:_["a"],VListItemAction:P["a"],VListItemContent:V["a"],VListItemGroup:k["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VSnackbar:M["a"],VSpacer:F["a"],VTextField:G["a"],VToolbarTitle:O["a"]});var J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},t._l(t.firma,(function(e){return r("v-card",{key:e.firmen_id,staticClass:"elevation-0"},[r("v-card-title",{staticClass:"black"},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-left")])],1),r("span",{staticClass:"text-h5 white--text ml-2"},[t._v(t._s(e.firmen_name))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.clicked=!t.clicked}}},[t.clicked?t._e():r("v-icon",{attrs:{color:"grey lighten-1"},on:{click:function(e){return t.addFavorit()}}},[t._v(" mdi-star-outline ")]),t.clicked?r("v-icon",{attrs:{color:"yellow darken-3"},on:{click:function(e){return t.removeFavorit()}}},[t._v(" mdi-star ")]):t._e()],1)],1),r("v-list",[r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-email-plus-outline")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.firmen_mail))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-lan")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.fachrichtung))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-map-marker")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.platz))])],1)],1),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-web")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(t._s(e.url)+"https://www.htlwienwest.at/")])],1)],1),r("v-divider",{attrs:{inset:""}}),0==t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-human-male-board")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Hält keinen Vortrag")])],1)],1):t._e(),0!=t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-human-male-board")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Hält einen Vortrag")])],1)],1):t._e(),0!=t.thisVortrag.length?r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-calendar-clock")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Von: "+t._s(t.thisVortrag.map((function(t){return t.anfangvortrag.substr(0,5)})).toString())+" bis: "+t._s(t.thisVortrag.map((function(t){return t.endevortrag.substr(0,5)})).toString())+" Uhr ")])],1)],1):t._e(),r("v-divider",{attrs:{inset:""}}),r("v-list-item",[r("v-list-item-action",[r("v-icon",[t._v("mdi-pencil-box-multiple")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6 font-weight-normal"},[t._v("Notizen zur Firma: ")])],1)],1)],1),r("v-container",[r("v-textarea",{staticClass:"pa-3 text-h6",attrs:{color:"red darken-4",label:"Notizen",maxlength:"150"},model:{value:t.firmenNotiz,callback:function(e){t.firmenNotiz=e},expression:"firmenNotiz"}})],1)],1)})),1),t.showButton?r("v-btn",{attrs:{text:""},on:{click:function(e){return t.updateFirma()}}},[t._v("Speichern")]):t._e()],1)},K=[],q=(r("a9e3"),r("d81d"),{data:function(){return{clicked:!1,firmenNotiz:"",db:null,showButton:!1,indexFirma:{}}},props:{firmen:{type:Array},vortraege:{type:Array},id:{type:String}},methods:{addFavorit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.firma[0].notiz=t.firmenNotiz,e.next=3,t.db.put("favorite",t.firma[0]);case 3:t.setData(),navigator.vibrate(400);case 5:case"end":return e.stop()}}),e)})))()},addNotiz:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},removeFavorit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.delete("favorite",t.firma[0].firmen_id);case 2:t.setData();case 3:case"end":return e.stop()}}),e)})))()},updateFirma:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.db.transaction("favorite","readwrite"),e.next=3,t.db.get("favorite",Number(t.id));case 3:return n=e.sent,n.notiz=t.firmenNotiz,e.next=7,t.db.put("favorite",n);case 7:return e.next=9,r.done;case 9:t.setData();case 10:case"end":return e.stop()}}),e)})))()},setData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.db.get("favorite",Number(t.id));case 2:r=e.sent,r?(t.clicked=!0,t.firmenNotiz=r.notiz,t.showButton=!0):(t.clicked=!1,t.showButton=!1);case 4:case"end":return e.stop()}}),e)})))()}},computed:{firma:function(){var t=this;return this.firmen.filter((function(e){return e.firmen_id==t.id}))},thisVortrag:function(){var t=this;return this.vortraege.filter((function(e){return e.firma==t.firma.map((function(t){return t.firmen_name}))}))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])("favoriteFirmaDB");case 2:t.db=e.sent,t.setData();case 4:case"end":return e.stop()}}),e)})))()}}),Q=q,W=r("99d9"),X=r("62ad"),Y=r("ce7e"),Z=r("0fd9"),tt=r("a844"),et=Object(d["a"])(Q,J,K,!1,null,"5824f5f4",null),rt=et.exports;f()(et,{VBtn:E["a"],VCard:D["a"],VCardTitle:W["c"],VCol:X["a"],VContainer:$["a"],VDivider:Y["a"],VIcon:g["a"],VList:w["a"],VListItem:_["a"],VListItemAction:P["a"],VListItemContent:V["a"],VListItemTitle:V["c"],VRow:Z["a"],VSpacer:F["a"],VTextarea:tt["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{dark:"",color:"red darken-4"}},[r("v-btn",{attrs:{to:"/",icon:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1),r("v-toolbar-title",{staticClass:"text-h5"},[t._v("Favoriten")]),r("v-spacer")],1),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},t._l(t.allFavorites,(function(e){return r("v-card",{key:e.firmen_id,staticClass:"mt-5",attrs:{color:"blue-grey lighten-5 "}},[r("v-card-title",{staticClass:"text-h5 black--text font-weight-black pb-0"},[t._v(" "+t._s(e.firmen_name)+" "),r("v-chip",{staticClass:"ma-2 font-weight-medium",attrs:{color:"red darken-4","text-color":"white"}},[t._v(" "+t._s(e.fachrichtung)+" ")])],1),r("v-card-text",{staticStyle:{"font-size":"large"}},[t._v(" "+t._s(e.notiz)+" ")]),r("v-card-actions",{staticClass:"mt-0 pl-0 pt-0"},[r("v-card-text",{staticClass:"text-h6 black--text"},[r("v-icon",{staticClass:"mr-2 mb-1",attrs:{large:""}},[t._v("mdi-home-map-marker")]),t._v(t._s(e.platz))],1),r("v-btn",{staticClass:"mr-2",attrs:{icon:"",to:"/firma/"+e.firmen_id}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-eye")])],1)],1)],1)})),1)],1)],1)],1)},it=[],at={data:function(){return{db:null,allFavorites:[]}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])("favoriteFirmaDB");case 2:return t.db=e.sent,e.next=5,t.db.getAll("favorite");case 5:t.allFavorites=e.sent,console.log(t.allFavorites);case 7:case"end":return e.stop()}}),e)})))()}},ot=at,ct=r("cc20"),st=Object(d["a"])(ot,nt,it,!1,null,"0ef45f4e",null),lt=st.exports;f()(st,{VAppBar:h["a"],VBtn:E["a"],VCard:D["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VChip:ct["a"],VCol:X["a"],VContainer:$["a"],VIcon:g["a"],VRow:Z["a"],VSpacer:F["a"],VToolbarTitle:O["a"]}),n["a"].use(B["a"]);var ut=[{path:"/",name:"Home",component:U},{path:"/firma/:id",name:"Firma",component:rt,props:!0},{path:"/favoriten",name:"Favoriten",component:lt}],vt=new B["a"]({mode:"history",base:"/",routes:ut}),dt=vt;n["a"].config.productionTip=!1,new n["a"]({vuetify:z,router:dt,render:function(t){return t(R)}}).$mount("#app")}});