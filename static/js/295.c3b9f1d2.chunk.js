"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{295:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(434),a=t(413),i=t(505),l=t(279),o=t(517),u={email:"",password:""},s={email:{label:"User email",name:"email",type:"email",required:!0,placeholder:"User email"},password:{label:"User password",name:"password",type:"password",required:!0,placeholder:"User password"}},c=t(184),d=function(e){var n=e.onSubmit,t=(0,o.Z)({initialState:u,onSubmit:n}),r=t.state,d=t.handleChange,p=t.handleSubmit,f=r.email,m=r.password;return(0,c.jsxs)("form",{onSubmit:p,children:[(0,c.jsx)(i.Z,(0,a.Z)({value:f,onChange:d},s.email)),(0,c.jsx)(i.Z,(0,a.Z)({value:m,onChange:d},s.password)),(0,c.jsx)(l.Z,{children:"Log in"})]})},p=t(724),f=function(){var e=(0,r.I0)();return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h1",{className:"page-title",children:"Login page"}),(0,c.jsx)(d,{onSubmit:function(n){e((0,p.x4)(n))}})]})}},279:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.type,t=void 0===n?"submit":n,a=e.children;return(0,r.jsx)("button",{type:t,children:a})}},505:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(184),l=["label"],o=function(e){var n=e.label,t=a(e,l);return(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:n}),(0,i.jsx)("input",(0,r.Z)({},t))]})}},517:function(e,n,t){var r=t(942),a=t(413),i=t(439),l=t(791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,l.useState)((0,a.Z)({},n)),u=(0,i.Z)(o,2),s=u[0],c=u[1];return{state:s,setState:c,handleChange:function(e){var n=e.target;c((function(e){var t=n.name,i=n.value,l=n.checked,o="checkbox"===n.type?l:i;return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,o))}))},handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=295.c3b9f1d2.chunk.js.map