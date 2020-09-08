(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a(71),o=a(72),c=a(73),l=a(6),u=a(7),h=a(13),m=a(8),p=a(9);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["people","cows","children","teeth","feet","eggs","leaves","mice","geese","halves","knives","chickens","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","kittens","theses","crises","phenomena","criteria","data"]))}var g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).myInput=r.a.createRef(),e.goToStore=e.goToStore.bind(Object(h.a)(e)),e}return Object(u.a)(a,[{key:"goToStore",value:function(e){e.preventDefault();var t=this.myInput.current.value;this.props.history.push("/store/".concat(t))}},{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please enter a store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store!"))}}]),a}(r.a.Component),b=a(12),y=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"}," of "),r.a.createElement("span",{className:"the"}," the ")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},E=a(15),O=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props.fishes[t],n=e.props.order[t],s=a&&"available"===a.status;return a?s?r.a.createElement(E.CSSTransition,{classNames:"order",key:t,timeout:{enter:500,exit:500}},r.a.createElement("li",{key:t},r.a.createElement("span",{className:"order-text"},r.a.createElement("span",{className:"order-details"},r.a.createElement(E.TransitionGroup,{component:"span",className:"count"},r.a.createElement(E.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"lbs ",a.name),r.a.createElement("span",{id:"price"},d(n*a.price))),r.a.createElement("button",{id:"button",onClick:function(){return e.props.removeFromOrder(t)}},"x"))):r.a.createElement(E.CSSTransition,{classNames:"order",key:t,timeout:{enter:500,exit:500}},r.a.createElement("li",{key:t},"Sorry, ",a?a.name:"fish"," is no longer available.",r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"x"))):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(E.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},r.a.createElement("strong",null,"Total: ",d(a))))}}]),a}(r.a.Component),S=a(17),k=a.n(S),j=a(22),w=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Description"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),a}(r.a.Component),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){console.log(t.currentTarget.value),console.log("".concat(t.currentTarget.name," successfully updated."));var a=Object(b.a)({},e.props.fish,{[t.currentTarget.name]:t.currentTarget.value});e.props.updateFish(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),a}(r.a.Component),N=a(14),C=a.n(N),x=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log in with Github"),r.a.createElement("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")}},"Log in with Twitter"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log in with Facebook"))},T=a(30),R=a.n(T),I=C.a.initializeApp({apiKey:"AIzaSyAB2NN4LdHicSmannZWlOLnbvRfdozNdJk",authDomain:"catch-of-the-day-marissa.firebaseapp.com",databaseURL:"https://catch-of-the-day-marissa.firebaseio.com"}),A=R.a.createClass(I.database()),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(j.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.fetch(e.props.StoreId,{context:Object(h.a)(e)});case 2:if(n=t.sent,console.log(n),n.owner){t.next=7;break}return t.next=7,A.post("".concat(e.props.StoreId,"/owner"),{data:a.user.uid});case 7:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid}),console.log(a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(C.a.auth["".concat(t,"AuthProvider")]);I.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(j.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging out"),t.next=3,C.a.auth().signOut();case 3:e.setState({uid:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, you are not the owner."),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map((function(t){return r.a.createElement(F,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})})),r.a.createElement(w,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(x,{authenticate:this.authenticate})}}]),a}(r.a.Component),D={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska.",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.addToOrder(e.props.index)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.name,n=e.price,s=e.desc,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a),r.a.createElement("span",{className:"price"},d(n)),r.a.createElement("p",null,s),r.a.createElement("button",{onClick:this.handleClick,disabled:!i},i?"Add to Order":"Sold Out!"))}}]),a}(r.a.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(b.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var n=Object(b.a)({},e.state.fishes);n[t]=a,e.setState({fishes:n})},e.deleteFish=function(t){var a=Object(b.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:D})},e.addToOrder=function(t){var a=Object(b.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(b.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.StoreId);e&&this.setState({order:JSON.parse(e)}),console.log(e),this.ref=A.syncState("".concat(this.props.match.params.StoreId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.StoreId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(y,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return r.a.createElement(M,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder,removeFromOrder:e.removeFromOrder})})))),r.a.createElement(O,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(L,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,StoreId:this.props.match.params.StoreId}))}}]),a}(r.a.Component),J=function(){return r.a.createElement("div",{className:"not-found"},"Not found!!!!! Super super so so so sorry")},z=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:g}),r.a.createElement(c.a,{path:"/Store/:StoreId",component:P}),r.a.createElement(c.a,{component:J})))};a(65);Object(s.render)(r.a.createElement(z,null),document.querySelector("#main"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d1e67298.chunk.js.map