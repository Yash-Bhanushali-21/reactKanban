(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{129:function(e,n,t){"use strict";t.r(n);var a,i,r,c,o,l=t(0),s=t(9),d=t.n(s),p=t(19),b=t(12),j=t(162),x=t(158),h=t(163),u=t(164),f=t(25),g=t(22),m=t(76),O=t.n(m),v=t(47),y=t.n(v),w=t(3),D=g.a.div(a||(a=Object(p.a)(["\n  .card{\n    padding : 0px;\n    width: 100%;\n    margin-bottom : 10px;\n    height: auto;\n    \n  }\n  \n  .heading {\n    text-align:center;\n    font-weight : bold;\n    color : black;\n  }\n  .content {\n    display:flex;\n    flex-direction : row;\n    align-items :center;\n    height: 60px;\n    margin: 10px 0 10px;\n  }\n  .img {\n    flex : 0 0 50px;\n    height:50px;\n    border-radius : 50%;\n    \n  }\n  .wrapper{\n    padding : 10px;\n  }\n  .title {\n    font-size : 15px;\n    color : black;\n    line-height : 5px;\n    font-weight :bold;\n  }\n  .paragraph{\n    display : flex;\n    color : black;\n    flex-direction : column;\n    line-height : 15px;\n    font-size : 12px;\n    overflow : hidden;\n    text-overflow : ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp : 2;\n    -webkit-box-orient:vertical;\n  }\n  .footer{\n    display:flex;\n    align-items:center;\n    line-height : 15px;\n    font-size : 12px;\n    \n\n    \n  }\n  \n\n  \n"]))),E=function(e){var n=e.designation,t=e.title,a=e.about,i=e.image,r=e.id,c=e.index,o=e.listTitle;return Object(w.jsx)(f.b,{draggableId:String(r),index:c,children:function(e){return Object(w.jsx)(D,Object(b.a)(Object(b.a)(Object(b.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(w.jsx)(x.a,{className:"card",children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(h.a,{color:"textSecondary",className:"heading",gutterBottom:!0,children:n}),Object(w.jsx)(u.a,{style:{marginBottom:"10px"}}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("img",{className:"img",src:i}),Object(w.jsx)(h.a,{color:"textSecondary",component:"span",children:Object(w.jsxs)("div",{className:"wrapper",children:[Object(w.jsx)("h2",{className:"title",children:t}),Object(w.jsx)("p",{className:"paragraph",children:a})]})})]}),Object(w.jsxs)("div",{className:"footer",children:["Review"===o?Object(w.jsxs)(h.a,{color:"error",className:"footer",children:[Object(w.jsx)(O.a,{}),"Under Review"]}):null,"Shortlisted"===o?Object(w.jsxs)(h.a,{color:"textPrimary",className:"footer",children:[Object(w.jsx)(y.a,{}),"Shortlisted"]}):null]})]})})}))}})},S=t(23),A=t(165),I=t(166),N=t(167),R=t(18),B=[{title:"Applicants",id:"list-".concat(0),cards:[{id:"card-".concat(0),designation:"React Developer,B.E.",title:"Yash Bhanushali",about:"Bachelors in Engineering, Information Technology",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"},{id:"card-".concat(1),designation:"Node Developer,B.E.",title:"Harsh Bhanushali",about:"Bachelors in Engineering, Information Technology",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]},{title:"Review",id:"list-".concat(1),cards:[]},{title:"Shortlisted",id:"list-".concat(2),cards:[]}],T=(t(55),{STORE_DATA:"STORE_DATA",ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",RESET:"RESET"}),P=g.a.div(i||(i=Object(p.a)(["\n\n.form{\n    display : flex;\n    align-items : center;\n    flex-direction : column;\n\n}\n.formElements{\n    margin-bottom : 10px;\n   \n}\n.heading {\n    font-weight : bold;\n}\n.button {\n    color:white;\n    background-color : #dfe3e6;\n    height:30px;\n    margin-left:20px;\n}\n.buttonGroup {\n    display : flex;\n    flex-direction : row;\n    align-items : center;\n    margin-top : 5px;\n    \n}\n.icon {\n    cursor : pointer;\n    margin-left : 5px;\n}\n\n"]))),C=Object(R.b)()((function(e){var n=Object(l.useState)(""),t=Object(S.a)(n,2),a=t[0],i=t[1],r=Object(l.useState)(""),c=Object(S.a)(r,2),o=c[0],s=c[1],d=Object(l.useState)(""),p=Object(S.a)(d,2),b=p[0],u=p[1];return Object(w.jsx)(P,{children:Object(w.jsx)(x.a,{className:"card",children:Object(w.jsxs)(j.a,{children:[Object(w.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",children:[Object(w.jsx)(h.a,{color:"textSecondary",className:"heading",gutterBottom:!0,children:"New Card"}),Object(w.jsx)(I.a,{className:"formElements",inputProps:{style:{fontSize:"15px"}},onChange:function(e){i(e.target.value)},variant:"outlined",size:"small",label:"designation"}),Object(w.jsx)(I.a,{className:"formElements",onChange:function(e){u(e.target.value)},variant:"outlined",inputProps:{style:{fontSize:"15px"}},size:"small",label:"name"}),Object(w.jsx)(I.a,{className:"formElements",onChange:function(e){s(e.target.value)},variant:"outlined",inputProps:{style:{fontSize:"15px"}},size:"small",label:"about"})]}),Object(w.jsxs)("div",{className:"buttonGroup",children:[Object(w.jsx)(N.a,{className:"button",onMouseDown:function(){var n,t,r,c,l,d=e.dispatch,p=e.listID;a&&o&&b&&(console.log("dispatched"),d((n=p,t=a,r=o,c=b,l="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",{type:T.ADD_CARD,payload:{listId:n,d:t,a:r,t:c,i:l}})),i(""),u(""),s("")),e.closeForm()},children:"Submit"}),Object(w.jsx)(A.a,{className:"icon",onMouseDown:e.closeForm,children:"close"})]})]})})})})),_=t(84),k=g.a.div(r||(r=Object(p.a)(["\n\n.button {\n    color:white;\n    background-color : #dfe3e6;\n    height:30px;\n}\n.buttonGroup {\n    display : flex;\n    flex-direction : row;\n    align-items : center;\n    margin-top : 5px;\n}\n.icon {\n    cursor : pointer;\n    margin-left:  5px;\n}\n.card{\n    min-height:35px;\n    min-width:272px;\n    padding : 6px 8px 2px;\n}\n.textArea{\n    resize : none;\n    width: 100%;\n    overflow : hidden;\n    outline : none;\n    border:none;\n}\n"]))),G=function(e){var n=Object(l.useState)(""),t=Object(S.a)(n,2),a=t[0],i=t[1];return Object(w.jsxs)(k,{children:[Object(w.jsx)("div",{className:"container",children:Object(w.jsx)(x.a,{className:"card",children:Object(w.jsx)(_.a,{placeholder:"Enter List Title",className:"textArea",autoFocus:!0,onBlur:e.closeListForm,onChange:function(e){i(e.target.value)}})})}),Object(w.jsxs)("div",{className:"buttonGroup",children:[Object(w.jsx)(N.a,{className:"button",onMouseDown:function(n){var t,r=e.dispatch;a&&(r((t=a,{type:T.ADD_LIST,payload:t})),i(""))},variant:"contained",children:"Submit"}),Object(w.jsx)(A.a,{className:"icon",onMouseDown:e.closeListForm,children:"close"})]})]})},H={openForButtonGroup:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:"3",height:36,width:272,paddingLeft:10},form:{display:"flex",alignItems:"center",flexDirection:"column"},formElements:{marginBottom:10},heading:{fontWeight:"bold"}},M=Object(R.b)()((function(e){var n=Object(l.useState)(!1),t=Object(S.a)(n,2),a=t[0],i=t[1],r=Object(l.useState)(!1),c=Object(S.a)(r,2),o=c[0],s=c[1],d=function(){return i(!1)},p=function(){return s(!1)};return a||o?function(){var n=e.list,t=e.dispatch,a=e.listID;return n?Object(w.jsx)(G,{dispatch:t,closeListForm:p}):Object(w.jsx)(C,{dispatch:t,listID:a,closeForm:d})}():function(){var n=e.list,t=n?"Add another list":"Add another card",a=n?1:.5,r=n?"white":"inherit",c=n?"rgba(0,0,0,.15)":"inherit";return Object(w.jsxs)("div",{style:Object(b.a)(Object(b.a)({},H.openForButtonGroup),{},{opacity:a,color:r,backgroundColor:c}),onClick:function(){return n?s(!0):i(!0)},children:[Object(w.jsx)(A.a,{children:"add"}),Object(w.jsx)("p",{children:t})]})}()})),z=g.a.div(c||(c=Object(p.a)(["\n    .container{\n        background-color : #dfe3e6;\n        border-radius : 3px;\n        width : 270px;\n        padding : 8px;\n        margin-right : 10px;\n        overflow:hidden;\n        \n    }\n    .text{\n        display : flex;\n        align-items: center;\n        flex-direction : row;\n        font-weight : bold;\n        color : #6E6E6E;\n        margin-bottom : 20px;\n    }\n   .numberWrapper{\n       width : 20px;\n       height:20px;\n       margin-left : 10px;\n   }\n    .CardsInList {\n        width: auto;\n        line-height: 20px;\n        color : white;\n        text-align: center;\n        border-radius : 2px;\n        border: 2px solid #B4BBC4;\n       \n    }\n  \n\n   \n"]))),L=function(e){var n=e.title,t=e.cards,a=e.listID,i=e.index;return Object(w.jsx)(f.b,{draggableId:String(a),index:i,children:function(e){return Object(w.jsx)(z,Object(b.a)(Object(b.a)(Object(b.a)({},e.draggableProps),{},{ref:e.innerRef},e.dragHandleProps),{},{children:Object(w.jsx)(f.c,{droppableId:String(a),children:function(e){return Object(w.jsxs)("div",Object(b.a)(Object(b.a)({className:"container"},e.droppableProps),{},{ref:e.innerRef,children:[Object(w.jsxs)("div",{className:"text",children:[Object(w.jsxs)(h.a,{children:[Object(w.jsx)(y.a,{fontSize:"small"}),n]}),Object(w.jsx)("div",{className:"numberWrapper",children:Object(w.jsx)(h.a,{className:"CardsInList",children:t.length})})]}),t.map((function(e,t){return Object(w.jsx)(E,{listTitle:n,index:t,id:e.id,designation:e.designation,title:e.title,about:e.about,image:e.image},e.id)})),Object(w.jsx)(M,{listID:a}),e.placeholder]}))}})}))}})};var F={button:{color:"white",backgroundColor:"#dfe3e6",height:"30px",marginBottom:"20px"}},W=g.a.div(o||(o=Object(p.a)(["\ndisplay : flex;\nflexDirection : row;\nmarginRight : 10;\n"]))),V=Object(R.b)((function(e){return{lists:e.lists}}))((function(e){var n=e.lists,t=e.dispatch;return Object(w.jsx)(f.a,{onDragEnd:function(n){var t=n.destination,a=n.source,i=n.draggableId,r=n.type;t&&e.dispatch(function(e,n,t,a,i,r){return{type:T.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:n,droppableIndexStart:a,droppableIndexEnd:t,draggableId:i,type:r}}}(a.droppableId,t.droppableId,a.index,t.index,i,r))},children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h2",{children:Object(w.jsx)(h.a,{children:"Trello Kanban Board"})}),Object(w.jsx)(N.a,{style:F.button,onClick:function(){var e;t((e=B,{type:T.RESET,payload:e}))},children:"RESET"}),Object(w.jsx)(f.c,{droppableId:"all-list",direction:"horizontal",type:"list",children:function(e){return Object(w.jsxs)(W,Object(b.a)(Object(b.a)({},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,n){return Object(w.jsx)(L,{listID:e.id,index:n,title:e.title,cards:e.cards},e.id)})),Object(w.jsx)(M,{list:!0})]}))}})]})})})),Y=t(14),q=t(80),J=(t(56),t(30)),K=(t(81),3),U=2;var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T.RESET:var t=n.payload;return K=4,U=3,t;case T.STORE_DATA:var a=n.payload;K=a.length+1;var i=0;return a.map((function(e){e.cards.length.card_count&&(i=e.cards.length)})),U=i+1,a;case T.ADD_LIST:var r={title:n.payload,cards:[],id:"list-".concat(K)};K=e.length+1;var c=[].concat(Object(J.a)(e),[r]);return c;case T.ADD_CARD:console.log("new card id is "+U);var o={id:"card-".concat(U),designation:n.payload.d,title:n.payload.t,about:n.payload.a,image:n.payload.i},l=0,s=e.map((function(e){return e.cards.length>l&&(l=e.cards.length),e.id===n.payload.listId?(U=l+1,Object(b.a)(Object(b.a)({},e),{},{cards:[].concat(Object(J.a)(e.cards),[o])})):e}));return s;case T.DRAG_HAPPENED:var d=n.payload,p=d.droppableIdStart,j=d.droppableIdEnd,x=d.droppableIndexEnd,h=d.droppableIndexStart,u=(d.draggableId,d.type),f=Object(J.a)(e);if("list"===u){var g=f.splice(h,1);return f.splice.apply(f,[x,0].concat(Object(J.a)(g))),f}if(p===j){var m,O=e.find((function(e){return p===e.id})),v=O.cards.splice(h,1);(m=O.cards).splice.apply(m,[x,0].concat(Object(J.a)(v)))}if(p!==j){var y,w=e.find((function(e){return p===e.id})),D=w.cards.splice(h,1),E=e.find((function(e){return j===e.id}));(y=E.cards).splice.apply(y,[x,0].concat(Object(J.a)(D)))}return f;default:return e}},X=t(50),Z=t(82),$={key:"root",storage:t.n(Z).a,whitelist:["lists"]},ee=Object(Y.c)({lists:Q}),ne=Object(X.a)($,ee),te=Object(Y.e)(ne,Object(Y.a)(q.a));te.dispatch({type:T.STORE_DATA,payload:B});var ae=Object(X.b)(te),ie=t(83);t(128);d.a.render(Object(w.jsx)(R.a,{store:te,children:Object(w.jsx)(ie.a,{persistor:ae,children:Object(w.jsx)(V,{})})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.76748fae.chunk.js.map