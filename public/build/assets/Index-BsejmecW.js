import{m as x,j as e}from"./app-KmZ8R3i5.js";import{T as r,I as i}from"./TextInput-zw1Mo_JB.js";import{I as n}from"./InputLabel-DzU57gd1.js";import{P as d}from"./PrimaryButton-Dvl67aEV.js";import p from"./Wrapper-8FEL9CsT.js";import"./Layout-D3YAsZrP.js";import"./Flash-DMGG1oFF.js";import"./Nav-DSAxPJku.js";import"./Aside-B7_h3sXL.js";function I({user:s}){const{data:t,setData:m,put:o,errors:l,processing:u}=x({first_name:s.first_name,last_name:s.last_name,phone:s.phone,email:s.email}),c=a=>{a.preventDefault(),o(route("admin.profile.update"))};return e.jsx(p,{title:"Profile",children:e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:c,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{value:"First Name"}),e.jsx(r,{className:"mt-1 block w-full",value:t.first_name,onChange:a=>m("first_name",a.target.value),required:!0,isFocused:!0}),e.jsx(i,{className:"mt-2",message:l.first_name})]}),e.jsxs("div",{children:[e.jsx(n,{value:"Last Name"}),e.jsx(r,{className:"mt-1 block w-full",value:t.last_name,onChange:a=>m("last_name",a.target.value),required:!0}),e.jsx(i,{className:"mt-2",message:l.last_name})]}),e.jsxs("div",{children:[e.jsx(n,{value:"Phone"}),e.jsx(r,{className:"mt-1 block w-full",value:t.phone,onChange:a=>m("phone",a.target.value)}),e.jsx(i,{className:"mt-2",message:l.phone})]}),e.jsxs("div",{children:[e.jsx(n,{value:"Email"}),e.jsx(r,{type:"email",className:"mt-1 block w-full",value:t.email,onChange:a=>m("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(i,{className:"mt-2",message:l.email})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(d,{disabled:u,children:"Save"})})]})]})})}export{I as default};
