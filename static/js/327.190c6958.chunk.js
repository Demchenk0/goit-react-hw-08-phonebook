"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[327],{6327:function(n,t,e){e.r(t),e.d(t,{PagesContact:function(){return X}});var r,a,i,o,c,s,l,d,u,p,f,m,x,b=e(168),h=e(3842),g=h.Z.div(r||(r=(0,b.Z)(["\n\twidth: 700px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder-radius: 5em;\n\n\tbox-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n"]))),y=e(1403),j=e(9434),Z=e(5536),v=e(2791),w=h.Z.label(a||(a=(0,b.Z)(["\n\tcolor: #b4886b;\n\tfont-weight: bold;\n\tdisplay: block;\n\tmargin-top: 20px;\n\ttext-align: center;\n"]))),k=h.Z.input(i||(i=(0,b.Z)(["\n\tborder: 1px solid #cccccc;\n\tborder-radius: 3px;\n\tbackground: #ffffff !important;\n\toutline: none;\n\theight: 24px;\n\tcolor: #cccccc;\n\tfont-size: 11px;\n\tfont-family: Tahoma;\n\twidth: 69%;\n"]))),C=e(184),z=function(n){var t=n.onChange;return(0,C.jsxs)(w,{children:["Find contacts by name",(0,C.jsx)(k,{onChange:t,type:"email",name:"filter",placeholder:"name"})]})},_=h.Z.li(o||(o=(0,b.Z)(["\n\tcolor: #b4886b;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tlist-style: none;\n\tmargin-bottom: 10px;\n\tjustify-content: space-between;\n\talign-items: baseline;\n"]))),F=h.Z.button(c||(c=(0,b.Z)(["\n\tmargin-top: 10px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tcolor: white;\n\tpadding: 10px 20px;\n\tborder-radius: 10px;\n\tfont-family: 'Montserrat', sans-serif;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\t#9eefe1 0%,\n\t\t#4830f0 51%,\n\t\t#9eefe1 100%\n\t);\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n\tborder: none;\n\tcursor: pointer;\n"]))),M=function(n){var t=n.id,e=n.name,r=n.number,a=n.deleteContact;return(0,C.jsxs)(_,{children:[e,": ",r,(0,C.jsx)(F,{type:"button",onClick:function(){a(t)},children:"Delete"})]})},q=h.Z.ul(s||(s=(0,b.Z)(["\n\tdisplay: flex;\n\tgap: 20px;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmargin-top: 20px;\n"]))),N=function(n){var t=n.contacts,e=n.deleteContact;return(0,C.jsx)(q,{children:t.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,C.jsx)(M,{id:t,name:r,number:a,deleteContact:e},t)}))})},U=e(5705),A=(0,h.Z)(U.l0)(l||(l=(0,b.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tjustify-content: center;\n"]))),P=h.Z.label(d||(d=(0,b.Z)(["\n\tcolor: #b4886b;\n\tfont-weight: bold;\n\tdisplay: block;\n\tmargin-top: 20px;\n"]))),S=h.Z.button(u||(u=(0,b.Z)(["\n\tmargin-top: 10px;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tcolor: white;\n\tpadding: 10px 20px;\n\tborder-radius: 10px;\n\tfont-family: 'Montserrat', sans-serif;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tbackground-image: linear-gradient(\n\t\tto right,\n\t\t#9eefe1 0%,\n\t\t#4830f0 51%,\n\t\t#9eefe1 100%\n\t);\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n\tborder: none;\n\tcursor: pointer;\n"]))),T=(0,h.Z)(U.gN)(p||(p=(0,b.Z)(["\n\tborder: 1px solid #cccccc;\n\tborder-radius: 3px;\n\tbackground: #ffffff !important;\n\toutline: none;\n\theight: 24px;\n\tcolor: #cccccc;\n\tfont-size: 11px;\n\tfont-family: Tahoma;\n\twidth: 100%;\n"]))),B=h.Z.p(f||(f=(0,b.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tfont-size: 12px;\n\twidth: 200px;\n"]))),J=e(7103),K=function(n){return n.contacts.items},L=function(n){return n.contacts.isLoading},D=function(n){return n.contacts.error},E=function(n){return n.contacts.filter},G=J.Ry().shape({name:J.Z_().required(),number:J.Z_().required()}),I=function(n){var t=n.name;return(0,C.jsx)(U.Bc,{name:t,render:function(n){return(0,C.jsx)(B,{children:n})}})};function R(n){var t=n.submitForm,e=(0,j.v9)(L);return(0,C.jsx)(U.J9,{initialValues:{name:"",number:""},validationSchema:G,onSubmit:function(n,e){var r=n.name,a=n.number,i=e.resetForm;t({name:r,number:a}),i()},children:(0,C.jsxs)(A,{children:[(0,C.jsxs)(P,{children:["Name",(0,C.jsx)(T,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)(I,{name:"name",title:"title"})]}),(0,C.jsxs)(P,{children:["Number",(0,C.jsx)(T,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(I,{name:"number",title:"title"})]}),(0,C.jsx)(S,{type:"submit",disabled:e,children:e?"...Loading":"Add contact"})]})})}var V=h.Z.section(m||(m=(0,b.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n"]))),H=h.Z.h1(x||(x=(0,b.Z)(["\n\tfont-style: italic;\n\t/* font-size: -webkit-xxx-large; */\n\tfont-size: 2em;\n\tbackground: linear-gradient(135deg, #12bcb0 20%, #fabe0e 70%);\n\tbackground-clip: text;\n\tcolor: transparent;\n\tdisplay: inline-block;\n\tpadding: 0.3em 0.6em;\n\tborder-image-slice: 1;\n"]))),O=function(n){var t=n.title,e=n.children;return(0,C.jsxs)(V,{children:[(0,C.jsx)(H,{children:t}),e]})},Q=e(306),W=e(7689);function X(){var n=(0,j.v9)(K),t=(0,j.v9)(E),e=(0,j.v9)(D),r=(0,j.v9)(Q.M7),a=(0,j.I0)(),i=(0,W.s0)();e&&alert("\u0414\u0435\u0441\u044c \u0442\u0443\u0442 \u043f\u043e\u043c\u0438\u043b\u043e\u0447\u043a\u0430)))"),(0,v.useEffect)((function(){a((0,Z.vS)())}),[a,r,i]);var o=function(t){return n.find((function(n){return n.name.toUpperCase()===t.toUpperCase()}))};return(0,C.jsxs)(g,{children:[(0,C.jsx)(O,{title:"Phonebook",children:(0,C.jsx)(R,{submitForm:function(n){if(o(n.name))return alert("".concat(n.name," is already in contacts"));a((0,Z.uK)(n))}})}),(0,C.jsxs)(O,{title:"Contact",children:[(0,C.jsx)(z,{onChange:function(n){return a((0,y.M6)(n.currentTarget.value))}}),(0,C.jsx)(N,{contacts:function(){var e=t.toUpperCase();return n.filter((function(n){return n.name.toUpperCase().includes(e)}))}(),deleteContact:function(n){return a((0,Z.GK)(n))}})]})]})}}}]);
//# sourceMappingURL=327.190c6958.chunk.js.map