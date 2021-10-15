(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={list:"ContactList_list__3wIz_",item:"ContactList_item__wmeUX",btnForm:"ContactList_btnForm__3Dhqs"}},20:function(t,e,n){t.exports={form:"ContactForm_form__1zEy-",btnForm:"ContactForm_btnForm__2RhGh"}},41:function(t,e,n){},42:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,r,a,o=n(0),u=n.n(o),i=n(12),s=n.n(i),b=n(6),j=n(14),l=n(2),f=n(30),O=n.n(f),d=n(3),m=n(5),h=Object(l.b)("cont/fetchContRequest"),p=Object(l.b)("cont/fetchContSuccess"),C=Object(l.b)("cont/fetchContError"),v=Object(l.b)("cont/addContRequest"),x=Object(l.b)("cont/addContSuccess"),g=Object(l.b)("cont/addContError"),y=Object(l.b)("cont/deleteContRequest"),_=Object(l.b)("cont/deleteContSuccess"),w=Object(l.b)("cont/deleteContError"),F=Object(l.b)("contacts.filter"),S=Object(l.c)([],(c={},Object(d.a)(c,p,(function(t,e){return e.payload})),Object(d.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(d.a)(c,_,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),k=Object(l.c)(!1,(r={},Object(d.a)(r,h,(function(){return!0})),Object(d.a)(r,p,(function(){return!1})),Object(d.a)(r,C,(function(){return!1})),Object(d.a)(r,v,(function(){return!0})),Object(d.a)(r,x,(function(){return!1})),Object(d.a)(r,g,(function(){return!1})),Object(d.a)(r,y,(function(){return!0})),Object(d.a)(r,_,(function(){return!1})),Object(d.a)(r,w,(function(){return!1})),r)),L=Object(l.c)("",Object(d.a)({},F,(function(t,e){return e.payload}))),N=Object(l.c)(null,(a={},Object(d.a)(a,C,(function(t,e){return e.payload})),Object(d.a)(a,g,(function(t,e){return e.payload})),Object(d.a)(a,w,(function(t,e){return e.payload})),a)),q=Object(m.b)({items:S,filter:L,loading:k,error:N}),z=[].concat(Object(j.a)(Object(l.d)()),[O.a]),A=Object(l.a)({reducer:{contacts:q},middleware:z}),E=(n(41),n(42),n(21)),D=n(7),R=function(t){return t.contacts.filter},J=function(t){return t.contacts},Z=Object(D.a)([function(t){return J(t).items},R],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return Object.values(t)[0].toLowerCase().includes(n)}))})),B={getConactsForm:J,getFilter:R,getVisibleContact:Z},H=n(19),I=n.n(H),M=n(31),T=n(9),U=n.n(T);U.a.defaults.baseURL="http://localhost:3000";var V=function(){return function(){var t=Object(M.a)(I.a.mark((function t(e){var n,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h()),t.prev=1,t.next=4,U.a.get("/contacts");case 4:n=t.sent,c=n.data,e(p(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t){return function(e){var n=t;e(v),U.a.post("/contacts",n).then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(g(t))}))}},P=function(t){return function(e){e(y()),U.a.delete("/contacts/".concat(t)).then((function(){return e(_(t))})).catch((function(t){return e(w(t))}))}},X=n(20),$=n.n(X),K=n(1);var Q=Object(b.b)((function(t){return{value:B.getConactsForm(t)}}),(function(t){return{formSubmitHandler:function(e){return t(G(e))}}}))((function(t){var e=Object(o.useState)(""),n=Object(E.a)(e,2),c=n[0],r=n[1],a=Object(o.useState)(""),u=Object(E.a)(a,2),i=u[0],s=u[1],b=function(t){var e=t.currentTarget,n=e.name,c=e.value;"name"!==n?"number"===n&&s(c):r(c)},j=function(){r(""),s("")};return Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.toLowerCase();t.value.items.some((function(t){return t.name.toLowerCase()==="".concat(n)}))?alert("".concat(c," is already in contacts")):(t.formSubmitHandler({name:c,number:i}),j())},className:$.a.form,children:["Name",Object(K.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:b}),"Number",Object(K.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:b}),Object(K.jsx)("button",{type:"submit",className:$.a.btnForm,children:"Add contact"})]})})),W=Object(b.b)((function(t){return{value:B.getFilter(t)}}),(function(t){return{onChange:function(e){return t(F(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(K.jsxs)("label",{children:["Find contacts by name",Object(K.jsx)("br",{}),Object(K.jsx)("input",{type:"text",value:e,onChange:n})]})})),Y=n(15),tt=n.n(Y),et=Object(b.b)((function(t){return{visibleContact:B.getVisibleContact(t)}}),(function(t){return{fetchContacts:function(){return t(V)},onDeleteCont:function(e){return t(P(e))}}}))((function(t){var e=t.visibleContact,n=t.onDeleteCont,c=t.fetchContacts,r=Object(b.c)();return Object(o.useEffect)((function(){return r(c())}),[r]),Object(K.jsx)("ul",{className:tt.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(K.jsxs)("li",{className:tt.a.item,children:[c,":",Object(K.jsx)("span",{children:r}),Object(K.jsx)("button",{type:"button",onClick:function(){return n(e)},className:tt.a.btnForm,children:"Delete"})]},e)}))})}));var nt=function(){return Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h1",{children:"Phonebook"}),Object(K.jsx)(Q,{}),Object(K.jsx)("h2",{children:"Contacts"}),Object(K.jsx)(W,{}),Object(K.jsx)(et,{})]})};console.log(A),s.a.render(Object(K.jsx)(u.a.StrictMode,{children:Object(K.jsx)(b.a,{store:A,children:Object(K.jsx)(nt,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ba298e60.chunk.js.map