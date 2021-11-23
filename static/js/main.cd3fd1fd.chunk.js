(this["webpackJsonpgoit-react-hw-07--phonebook"]=this["webpackJsonpgoit-react-hw-07--phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={item:"PhoneBook_item__ynRyE",deleteButton:"PhoneBook_deleteButton__1Boee",centr:"PhoneBook_centr__Raejf",itemContainer:"PhoneBook_itemContainer__2MiyP"}},22:function(t,e,n){t.exports={FilterInput:"Filter_FilterInput__1mIRU",FilterContainer:"Filter_FilterContainer__aFSoQ"}},39:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(10),s=n.n(o),u=(n(39),n(2)),i=n(6),l=n(34),b=n(5),d={fetchContactsRequest:Object(u.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(u.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(u.b)("contacts/fetchContactsError"),addContactRequest:Object(u.b)("contacts/addContactRequest"),addContactSuccess:Object(u.b)("contacts/addContactSuccess"),addContactError:Object(u.b)("contacts/addContactError"),deleteContactRequest:Object(u.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(u.b)("contacts/deleteContactSuccess"),deleteContactError:Object(u.b)("contacts/deleteContactError"),changeFilter:Object(u.b)("contacts/changeFilter")},j=Object(u.c)([],(c={},Object(i.a)(c,d.fetchContactsSuccess,(function(t,e){return e.payload})),Object(i.a)(c,d.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(i.a)(c,d.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),f=Object(u.c)("",Object(i.a)({},d.changeFilter,(function(t,e){return e.payload}))),h=Object(u.c)(null,{}),p=Object(b.b)({items:j,filter:f,error:h}),m=Object(u.a)({reducer:{contacts:p},devTools:!1}),O=n(4),C=n(7),x=(n(46),n(23)),v=n(17),F=function(t){return t.contacts.items},_=Object(v.a)([F,function(t){return t.contacts.filter}],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),k=n(8),w=n.n(k),y=n(19),g=n(12),I=n.n(g),S=n(33),N=n.n(S);I.a.defaults.baseURL="http://localhost:4040";var R={fetchContact:function(){return function(){var t=Object(y.a)(w.a.mark((function t(e){var n,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d.fetchContactsRequest()),t.prev=1,t.next=4,I.a.get("/contacts");case 4:n=t.sent,c=n.data,e(d.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(d.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(y.a)(w.a.mark((function n(c){var a,r,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={id:N.a.generate(),name:t,number:e},c(d.addContactRequest()),n.prev=2,n.next=5,I.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(d.addContactSuccess(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(d.addContactError(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.deleteContactRequest()),e.prev=1,e.next=4,I.a.delete("/contacts/".concat(t));case 4:n(d.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(d.deleteContactError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},B=R,E=n(9),q=n.n(E),P=n(1);var A=function(){var t=Object(a.useState)(""),e=Object(x.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(x.a)(r,2),s=o[0],u=o[1],i=Object(O.b)(),l=Object(O.c)(F),b=function(){c(""),u("")},d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}};return Object(P.jsxs)("form",{className:q.a.Form,onSubmit:function(t){t.preventDefault(),function(t,e){if(""!==t)if(""!==e){if(l.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return C.b.warn("".concat(t," is already in contacts.")),void b();i(B.addContact(t,e)),C.b.success("Contact has been added to your phonebook!"),b()}else C.b.warn("Please enter the contact's phone number!");else C.b.warn("Please enter the contact's name!")}(n,s),b()},children:[Object(P.jsxs)("div",{className:q.a.InputForm,children:[Object(P.jsx)("label",{children:"\u0418\u043c\u044f"}),Object(P.jsx)("input",{className:q.a.FormInput,value:n,onChange:d,type:"tex",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(P.jsxs)("div",{className:q.a.InputForm,children:[Object(P.jsx)("label",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(P.jsx)("input",{className:q.a.FormInput,value:s,onChange:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(P.jsx)("button",{className:q.a.button,type:"submit",children:"Add contact"})]})},z=n(13),L=n.n(z),J=function(t){t.id;var e=Object(O.c)(_),n=Object(O.b)();return Object(P.jsx)("div",{className:L.a.itemContainer,children:Object(P.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(P.jsxs)("li",{className:L.a.item,children:[Object(P.jsxs)("span",{children:[e,": "]}),Object(P.jsxs)("span",{children:[c," "]}),Object(P.jsx)("button",{className:L.a.deleteButton,type:"button",onClick:function(){return n(B.deleteContact(a))},children:Object(P.jsx)("p",{className:L.a.centr,children:"\u274c"})})]},a)}))})})},M=n(22),Z=n.n(M),T=function(t){var e=t.value,n=t.onChange;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:Z.a.FilterContainer,children:[Object(P.jsx)("label",{children:"Find contacts by name"}),Object(P.jsx)("input",{className:Z.a.FilterInput,type:"text",value:e,onChange:n})]})})};n(75);var U=function(){var t=Object(O.b)(),e=Object(O.c)(F);return Object(a.useEffect)((function(){t(B.fetchContact())}),[t]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("h1",{className:"title",children:" PhoneBook "}),Object(P.jsx)(A,{}),Object(P.jsx)(C.a,{autoClose:3e3,position:"top-center",theme:"colored"}),Object(P.jsx)(T,{}),e&&Object(P.jsx)(J,{})]})})};s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(O.a,{store:m,children:Object(P.jsx)(U,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={Form:"InputForm_Form__12wPg",InputForm:"InputForm_InputForm__2fB8z",FormInput:"InputForm_FormInput__3XN-R",button:"InputForm_button__CCp35"}}},[[76,1,2]]]);
//# sourceMappingURL=main.cd3fd1fd.chunk.js.map