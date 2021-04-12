(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{202:function(e,t,n){"use strict";n.r(t);n(171);var r=n(0),i=n.n(r),s=n(45),a=n.n(s),c=n(13),o=n(59),l=n(156),u=n(11),p=n(12),d=n(15),j=n(14),h=n(24),b=n(16),m=n(30),x=Object(m.a)(),O=n(37),f=n.n(O),y=n(70),g=n(217),v=n(203),I=n(104),k=n.n(I),C="SIGN_IN",T="SIGN_OUT",w="FETCH_ITEMS",S="FILTER_ITEMS",_="ITEMS_SEARCH_INPUT_CHANGE",N="ADD_ITEM_QUANTITY",A="REDUCE_ITEM_QUANTITY",M="TRIGGER_BOX_CALCULATOR",R="TRIGGER_ALLITEMS_MODAL",E="STORE_INVENTORY",L="SUBMIT_INVENTORY",F=function(){return function(){var e=Object(y.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json"}},e.next=3,k.a.get("/getInventoryListing",n);case 3:r=e.sent,console.log(r.data),t({type:w,payload:r.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e,t){return function(){var n=Object(y.a)(f.a.mark((function n(r){var i,s,a,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=e.filter((function(e){return e.quantity>0})),i=[e.map((function(e){return{item_id:Number(e.innerItems?e.innerItems[0].item_id:e.item_ids),item_quantity:e.quantity}}))],s={id:t,inventory:i},a={headers:{Accept:"*/*","Content-Type":"application/json"}},n.next=6,k.a.post("/storeInventory",s,a);case 6:c=n.sent,r({type:E,payload:c.data,token:t});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},U=function(){return{type:R}},q=n(2),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=Object(y.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.signIn(e.props.match.params.id);case 2:return t.next=4,e.props.fetchItems();case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"render",value:function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(g.a,{style:{color:"white"},children:["Welcome, ",this.props.isSignedIn&&this.props.currentUser.first_name,"!"]}),Object(q.jsx)("p",{className:"white-text",children:"YOUR MOVE"}),Object(q.jsxs)(g.a,{style:{color:"white"},children:[this.props.isSignedIn&&this.props.currentUser.size,Object(q.jsx)("br",{}),"From: ",this.props.isSignedIn&&this.props.currentUser.fromZip," | To:"," ",this.props.isSignedIn&&this.props.currentUser.toZip]}),Object(q.jsx)("p",{className:"white-text",children:"Browse our databse of common household items to build your Inventory and get an accurate quote"}),Object(q.jsx)(v.a,{as:h.b,to:"/".concat(this.props.match.params.id,"/items"),className:"ui colorBrightGreen button",children:"Get Started"})]})}}]),n}(r.Component),H=Object(c.b)((function(e){return{isSignedIn:e.auth.isSignedIn,currentUser:e.auth.currentUser}}),{signIn:function(e){return function(){var t=Object(y.a)(f.a.mark((function t(n){var r,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={token:e},i={headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=4,k.a.post("/login",r,i);case 4:s=t.sent,console.log(s.data),n({type:C,payload:s.data,token:e});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchItems:F})(D),Q=n(160),z=n(159),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(q.jsx)(Q.a,{padded:"vertically",verticalAlign:"middle",centered:!0,children:Object(q.jsxs)(Q.a.Row,{columns:2,children:[Object(q.jsx)(Q.a.Column,{floated:"left",children:Object(q.jsx)(z.a,{src:"".concat("","/assets/bvl_logo_with_slogan.svg"),alt:"BudgetVanLines.com"})}),Object(q.jsx)(Q.a.Column,{floated:"right",textAlign:"right",children:Object(q.jsx)("a",{className:"white-text",href:"tel:(800) 611-6001",children:"(800) 611-6001"})})]})})}}]),n}(r.Component),P=Object(c.b)(null,{})(G),Y=n(102),V=n(220),W=n(141),X=n(158),J=n(99),Z=n(215),K=n(216),$=n(46),ee=n(100),te=n(214),ne=n(213),re=function(e){var t=i.a.useState(!1),n=Object(ee.a)(t,2),r=n[0],s=n[1],a=i.a.useState(e.optionsFromInnerItems[0].value),c=Object(ee.a)(a,2),o=c[0],l=c[1];return Object(q.jsxs)(te.a,{closeIcon:!0,onClose:function(){return s(!1)},onOpen:function(){return s(!0)},open:r,trigger:Object(q.jsx)(ne.a,{style:{color:"#57C3F3"},options:e.optionsFromInnerItems,value:o}),children:[Object(q.jsx)(te.a.Header,{children:e.header}),Object(q.jsx)(te.a.Actions,{style:{display:"grid"},children:e.actions.map((function(e){return Object(q.jsx)(v.a,{onClick:function(){s(!1),l(e.id)},children:e.content},e.key)}))})]})},ie=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={activeIndex:null},e.handleClick=function(t,n){var r=n.index,i=e.state.activeIndex===r?-1:r;e.setState({activeIndex:i})},e}return Object(p.a)(n,[{key:"addQuantityHandler",value:function(e){this.props.addItemQuantity(e)}},{key:"reduceQuantityHandler",value:function(e){this.props.reduceItemQuantity(e)}},{key:"renderCategories",value:function(){var e=this;return Object(J.a)(new Set(this.props.items.map((function(e){return e.type_name})))).map((function(t){return Object(q.jsxs)(q.Fragment,{children:[!e.props.isMyItems&&!e.props.isSpecialItems&&Object(q.jsx)(Z.a.Item,{style:{backgroundColor:"#E7E8EC"},children:Object(q.jsx)(g.a,{children:t})},t),e.renderList(e.props.items.filter((function(e){return e.type_name===t})),"Boxes"===t)]})}))}},{key:"renderList",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.state.activeIndex;return e.map((function(e,i){var s=[],a=[];return e.innerItems&&(a=(s=e.innerItems.map((function(e,t){return{key:t,text:e.item,value:e.item_id}}))).map((function(e){return{key:e.key,content:e.text,id:e.value}}))),Object(q.jsx)(Z.a.Item,{children:Object(q.jsxs)(K.a,{children:[Object(q.jsx)(K.a.Title,{active:r===i,index:i,onClick:t.handleClick,children:Object(q.jsx)(Q.a,{container:!0,doubling:!0,divided:"vertically",verticalAlign:"middle",centered:!0,style:{padding:"0px"},children:Object(q.jsxs)(Q.a.Row,{columns:t.props.isSpecialItems?4:2,children:[Object(q.jsx)(Q.a.Column,{children:Object(q.jsxs)("div",{style:{display:"inline-flex",alignItems:"center"},children:[Object(q.jsx)(z.a,{style:{width:"20px",height:"20px",marginRight:"10px"},src:"".concat("","/assets/").concat(e.icon)}),e.parent_name]})}),t.props.isSpecialItems&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q.a.Column,{}),Object(q.jsx)(Q.a.Column,{textAlign:"right"})]}),Object(q.jsx)(Q.a.Column,{textAlign:"right",children:0===e.quantity?n&&!t.props.triggers.isBoxCalcTriggered?Object(q.jsx)(v.a,{style:{borderRadius:"500px",backgroundColor:"inherit",border:"1px solid"},as:h.b,to:"/".concat(t.props.userToken,"/box-calculator"),onClick:t.props.triggerBoxCalculator,children:"ADD"}):Object(q.jsx)(v.a,{style:{borderRadius:"500px",backgroundColor:"inherit",border:"1px solid"},onClick:function(){return t.addQuantityHandler(e.parent_name)},children:"ADD"}):Object(q.jsxs)(X.a,{size:"mini",style:{display:"inline-flex",borderRadius:"500px",backgroundColor:"#3A4B60"},children:[Object(q.jsx)(X.a.Item,{style:{color:"white",paddingRight:"8px",paddingLeft:"8px"},onClick:function(){return t.reduceQuantityHandler(e.parent_name)},children:Object(q.jsx)($.a,{name:"minus"})}),Object(q.jsx)(X.a.Item,{style:{color:"white",paddingRight:"8px",paddingLeft:"8px"},children:e.quantity}),Object(q.jsx)(X.a.Item,{style:{color:"white",paddingRight:"8px",paddingLeft:"8px"},onClick:function(){return t.addQuantityHandler(e.parent_name)},children:Object(q.jsx)($.a,{name:"plus"})})]})})]})})}),e.innerItems&&Object(q.jsx)(K.a.Content,{active:r===i,children:Object(q.jsx)(re,{optionsFromInnerItems:s,header:e.parent_name,actions:a})})]})},e.parent_name)}))}},{key:"render",value:function(){var e=this;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(Z.a,{celled:!0,divided:!0,verticalAlign:"middle",children:[!this.props.isMyItems&&!this.props.isSpecialItems&&Object(q.jsx)(Z.a.Item,{children:Object(q.jsx)(g.a,{children:"COMMON ITEMS"})},"common-items"),!this.props.isMyItems&&this.renderList(this.props.items.filter((function(e){return"1"===e.common_item}))),this.renderCategories(),!this.props.isMyItems&&!this.props.isSpecialItems&&Object(q.jsx)(Z.a.Item,{children:Object(q.jsx)(Q.a,{container:!0,doubling:!0,divided:"vertically",verticalAlign:"middle",centered:!0,style:{padding:"0px",margin:"0px"},children:Object(q.jsxs)(Q.a.Row,{columns:2,children:[Object(q.jsx)(Q.a.Column,{children:"BOXES"}),Object(q.jsx)(Q.a.Column,{textAlign:"right",children:Object(q.jsx)(h.b,{to:"/".concat(this.props.userToken,"/box-calculator"),style:{fontSize:"3vw"},children:"BOX CALCULATOR"})}),Object(q.jsx)("p",{style:{fontSize:"2.6vw"},children:"Don't worry about getting the number of boxes just right. Your final shipment weight will be calculated on the day of your move."})]})})},"boxes-item")]}),!this.props.isSpecialItems&&Object(q.jsx)(Q.a,{children:Object(q.jsx)(Q.a.Row,{stretched:!0,centered:!0,children:Object(q.jsx)(v.a,{style:{margin:"12px"},as:h.b,to:"/".concat(this.props.userToken,"/items/special"),onClick:function(){return e.props.storeInventory(e.props.items,e.props.userToken)},className:"ui colorBrightGreen button",fluid:!0,children:"Confirm Inventory"})})})]})}}]),n}(r.Component),se=Object(c.b)((function(e){return{userToken:e.auth.token,triggers:e.triggers}}),{addItemQuantity:function(e){return{type:N,payload:e}},reduceItemQuantity:function(e){return{type:A,payload:e}},triggerBoxCalculator:function(){return{type:M}},triggerAllItemsModal:U,storeInventory:B})(ie),ae=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderMyItems",value:function(){return this.props.filteredItems.filter((function(e){return e.quantity>0}))}},{key:"renderSpecialItems",value:function(){return this.props.items.filter((function(e){return e.quantity>0&&"0"!==e.sh_price}))}},{key:"render",value:function(){return Object(q.jsx)(se,{isSpecialItems:this.props.isSpecialItems,isMyItems:this.props.isMyItems,items:this.props.isMyItems?this.renderMyItems():this.props.isSpecialItems?this.renderSpecialItems():this.props.filteredItems})}}]),n}(i.a.Component),ce=Object(c.b)((function(e){return{items:e.items,filteredItems:e.filteredItems}}),{})(ae),oe=function(e){var t=i.a.useState(!0),n=Object(ee.a)(t,2),r=n[0],s=n[1];return Object(q.jsx)(te.a,{onClose:function(){return s(!1)},onOpen:function(){return s(!0)},open:r,trigger:Object(q.jsx)(v.a,{style:{display:"none"}}),children:Object(q.jsxs)(te.a.Content,{image:!0,className:"ui centered grid",children:[Object(q.jsxs)(te.a.Description,{children:[Object(q.jsx)(z.a,{size:e.imageSize,src:e.image,wrapped:!0,className:"ui centered grid"}),Object(q.jsx)(g.a,{children:e.header}),Object(q.jsx)("p",{children:e.content})]}),e.buttonText&&Object(q.jsx)(v.a,{as:h.b,to:e.nextPage||"/",content:e.buttonText,onClick:function(){return s(!1)},positive:!0}),e.skipButton&&Object(q.jsx)(h.b,{to:e.skipPage,children:"No thanks, I'll add boxes manually"})]})})},le=n(211),ue=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onInputChangeHandler=function(t){e.props.itemsSearchInputChange(t.target.value),e.props.filterItems(e.props.items,t.target.value)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.filterItems(this.props.items,"")}},{key:"render",value:function(){return Object(q.jsx)(le.a,{className:"searchBox",type:"search",name:"search",icon:"search",iconPosition:"left",placeholder:"Search ".concat(this.props.isMyItems?"my":"all"," items"),onChange:this.onInputChangeHandler,style:{minWidth:"-webkit-fill-available",padding:"0.5rem",outline:"none"}})}}]),n}(r.Component),pe=Object(c.b)((function(e){return{items:e.items,filteredItems:e.filteredItems,itemsSearchInput:e.itemsSearchInput}}),{itemsSearchInputChange:function(e){return{type:_,payload:e}},filterItems:function(e,t){return{type:S,payload:e,input:t}},fetchItems:F})(ue),de=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderItemsTotalQuantity",value:function(){var e=this.props.items.reduce((function(e,t){return e+t.quantity}),0);return Object(q.jsx)(Y.a,{style:{color:"black",backgroundColor:"white",borderRadius:"15px"},children:e})||""}},{key:"componentDidUpdate",value:function(){this.props.triggers.isAllItemsModalTriggered||this.props.triggerAllItemsModal()}},{key:"render",value:function(){var e=this,t="".concat("","/assets/confused.svg");return Object(q.jsxs)(q.Fragment,{children:[!this.props.triggers.isAllItemsModalTriggered&&Object(q.jsx)(oe,{image:t,imageSize:"medium",header:"Don't Sweat the Small Stuff",content:"By selecting your items in the following step,\n      we will be able to give an accurate estimate.\n      However, your final cost will be based on the\n      actual items being transported on the day of\n      the move.",nextPage:"/".concat(this.props.userToken,"/items"),buttonText:"OK, GOT IT!"}),Object(q.jsxs)(Q.a,{verticalAlign:"middle",centered:!0,padded:"vertically",style:{backgroundColor:"#F0F1F3"},children:[Object(q.jsxs)(Q.a.Row,{columns:2,children:[Object(q.jsx)(Q.a.Column,{children:Object(q.jsx)(g.a,{floated:"left",size:"tiny",textAlign:"center",style:{fontSize:"3.5vw"},children:"Moving Inventory List"})}),Object(q.jsx)(Q.a.Column,{children:Object(q.jsx)(h.b,{to:"/".concat(this.props.userToken,"/items/special"),children:Object(q.jsx)(g.a,{size:"tiny",floated:"right",textAlign:"center",style:{color:"#20b118",fontSize:"3vw"},onClick:function(){return e.props.storeInventory(e.props.items,e.props.userToken)},children:"CONFIRM INVENTORY"})})})]}),Object(q.jsx)(Q.a.Row,{style:{padding:"0px"},children:Object(q.jsx)(V.a,{style:{width:"inherit",backgroundColor:"#F0F1F3"},panes:[{menuItem:"ALL ITEMS",render:function(){return Object(q.jsxs)(V.a.Pane,{style:{padding:"0px",backgroundColor:"#F0F1F3"},children:[Object(q.jsx)(pe,{}),Object(q.jsx)(W.a,{style:{overflow:"auto",maxHeight:550,margin:"0px",paddingLeft:"0px",paddingRight:"0px",backgroundColor:"#f0f1f3"},children:Object(q.jsx)(ce,{isSpecialItems:!1,isMyItems:!1})})]})}},{menuItem:Object(q.jsx)(X.a.Item,{children:Object(q.jsx)(Q.a,{verticalAlign:"middle",children:Object(q.jsxs)(Q.a.Row,{children:[Object(q.jsx)(Q.a.Column,{width:10,style:{padding:"0px"},children:"MY ITEMS"}),Object(q.jsx)(Q.a.Column,{width:6,children:this.renderItemsTotalQuantity()})]})})},"my-items"),render:function(){return Object(q.jsxs)(V.a.Pane,{style:{padding:"0px",backgroundColor:"#F0F1F3"},children:[Object(q.jsx)(pe,{isMyItems:!0}),Object(q.jsx)(W.a,{style:{overflow:"auto",maxHeight:550,margin:"0px",paddingLeft:"0px",paddingRight:"0px",backgroundColor:"#f0f1f3"},children:Object(q.jsx)(ce,{isSpecialItems:!1,isMyItems:!0})})]})}}]})})]})]})}}]),n}(r.Component),je=Object(c.b)((function(e){return{userToken:e.auth.token,items:e.items,triggers:e.triggers}}),{fetchItems:F,storeInventory:B,triggerAllItemsModal:U})(de),he=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(q.jsxs)("div",{className:"specialCare-pop",style:{display:"block"},children:[Object(q.jsx)(h.b,{to:"/".concat(this.props.userToken,"/items"),children:Object(q.jsxs)("p",{style:{color:"white",float:"left",marginLeft:"12.5px"},children:[Object(q.jsx)($.a,{style:{margin:"0px"},name:"angle left"}),"Go Back"]})}),Object(q.jsxs)("div",{className:"specialCare-pop-inner",children:[Object(q.jsx)("div",{className:"specialCare-title",children:"Some Items Require Boxing"}),Object(q.jsx)("p",{children:"In addition to the standard blankets provided, the following items require additional protection. Would you like your movers to box the following items for you, at an additional cost?"}),Object(q.jsx)(ce,{isSpecialItems:!0}),Object(q.jsx)(h.b,{className:"skip",to:"/".concat(this.props.userToken,"/confirmation"),onClick:function(){e.props.submitInventory(e.props.items,e.props.userToken)},children:"Skip this, I'll box these myself ?"}),Object(q.jsx)("div",{className:"inv-btn-outer",children:Object(q.jsx)(h.b,{to:"/".concat(this.props.userToken,"/confirmation"),children:Object(q.jsx)("p",{onClick:function(){return e.props.submitInventory(e.props.items,e.props.userToken)},id:"special-care-items-done-btn",className:"btn inv-btn doneInv",children:"Done"})})})]})]})}}]),n}(r.Component),be=Object(c.b)((function(e){return{items:e.items,userToken:e.auth.token}}),{submitInventory:function(e,t){return function(){var n=Object(y.a)(f.a.mark((function n(r){var i,s,a,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=e.filter((function(e){return e.quantity>0})),i=[e.map((function(e){return{item_id:Number(e.innerItems?e.innerItems[0].item_id:e.item_ids),item_quantity:e.quantity}}))],s={id:t,inventory:i},a={headers:{Accept:"*/*","Content-Type":"application/json"}},n.next=6,k.a.post("/submitInventory",s,a);case 6:c=n.sent,console.log(c),r({type:L,payload:c.data,token:t});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(he),me=n(212),xe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(q.jsx)("div",{className:"thanks-pop",style:{display:"table"},children:Object(q.jsx)("div",{className:"thanks-pop-outer",children:Object(q.jsxs)("div",{className:"thanks-pop-inner",children:[Object(q.jsx)("div",{className:"thanks-title",children:"Completed!"}),Object(q.jsxs)("div",{className:"refText",children:["Reference #: ",Object(q.jsx)("span",{id:"referId",children:"5-43-8742"})]}),Object(q.jsxs)("div",{className:"thanksTxt",children:["Thank you, ","Troy","."]}),Object(q.jsx)("div",{className:"refText",children:"Your inventory has been sent to your BudgetVanLines rep."})]})})})}}]),n}(r.Component),Oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e="".concat("","/assets/unified-box-calculator.png");return Object(q.jsx)(oe,{image:e,imageSize:"small",header:"Would you like help calculating\n        how many boxes you need?",content:"By selecting your items in the following step,\n          we will be able to give an accurate estimate.\n          However, your final cost will be based on the\n          actual items being transported on the day of\n          the move.",nextPage:"/".concat(this.props.userToken,"/box-calculator-loader"),buttonText:"Calculate",skipButton:!0,skipPage:"/".concat(this.props.userToken,"/items")})}}]),n}(r.Component),fe=Object(c.b)((function(e){return{userToken:e.auth.token}}),{})(Oe),ye=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e="".concat("","/assets/confused.svg");return Object(q.jsx)(oe,{image:e,header:"Calculating necessary box count",content:"replace me with animation!\n    add relevant boxes according to algorithm"})}}]),n}(r.Component),ge=Object(c.b)((function(e){return{userToken:e.auth.token}}),{})(ye),ve=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(q.jsx)(me.a,{style:{margin:"0px"},children:Object(q.jsxs)(h.a,{basename:"",history:x,children:[Object(q.jsx)(P,{}),Object(q.jsxs)(b.d,{children:[Object(q.jsx)(b.b,{path:"/:id",exact:!0,component:H}),Object(q.jsx)(b.b,{path:"/".concat(this.props.userToken?this.props.userToken:"","/items"),exact:!0,component:je}),Object(q.jsx)(b.b,{path:"/".concat(this.props.userToken?this.props.userToken:"","/box-calculator"),exact:!0,component:fe}),Object(q.jsx)(b.b,{path:"/".concat(this.props.userToken?this.props.userToken:"","/box-calculator-loader"),exact:!0,component:ge}),Object(q.jsx)(b.b,{path:"/:id/items/special",exact:!0,component:be}),Object(q.jsx)(b.b,{path:"/:id/confirmation",exact:!0,component:xe}),Object(q.jsx)(b.a,{to:"/"})]})]})})}}]),n}(r.Component),Ie=Object(c.b)((function(e){return{userToken:e.auth.token}}),{})(ve),ke=n(44),Ce={isSignedIn:null,currentUser:null,token:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(ke.a)(Object(ke.a)({},e),{},{isSignedIn:!0,currentUser:t.payload,token:t.token});case T:return Object(ke.a)(Object(ke.a)({},e),{},{isSignedIn:!1,currentUser:null,token:null});default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload.filter((function(e){return-1!==e.parent_name.toLowerCase().indexOf(t.input.toLowerCase())}));default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;case N:return e.find((function(e){return e.parent_name===t.payload})).quantity++,Object(J.a)(e);case A:return e.find((function(e){return e.parent_name===t.payload&&e.quantity>0})).quantity--,Object(J.a)(e);case E:case L:default:return e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload;default:return e}},Ne={isBoxCalcTriggered:!1,isAllItemsModalTriggered:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(ke.a)(Object(ke.a)({},e),{},{isBoxCalcTriggered:!0});case R:return Object(ke.a)(Object(ke.a)({},e),{},{isAllItemsModalTriggered:!0});default:return e}},Me=Object(o.c)({auth:Te,items:Se,triggers:Ae,filteredItems:we,itemsSearchInput:_e}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Ee=Object(o.e)(Me,Re(Object(o.a)(l.a)));a.a.render(Object(q.jsxs)("div",{className:"ui one column stackable center aligned page grid",children:[Object(q.jsx)("div",{id:"mainWrapper",className:"column twelve wide",children:Object(q.jsx)(c.a,{store:Ee,children:Object(q.jsx)(Ie,{})})}),Object(q.jsx)("p",{className:"white-text",style:{padding:"12px 0px 0px 0px",fontWeight:"bolder"},children:"* Your inventory affects your quote"})]}),document.querySelector("#root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.d22142f6.chunk.js.map