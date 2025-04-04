import{j as e,W as r,b as i}from"./app-BUM7dQX4.js";import{P as d}from"./PrimaryButton-SGUKEJjw.js";import x from"./Wrapper-Dd3PHURv.js";import{A as t}from"./ActionButton-ZlKGhLKJ.js";import"./Layout-BHHFUwb0.js";import"./Flash-D5nu2mG9.js";import"./Nav-Dvx4tGYW.js";import"./Aside-C8KLjGte.js";function N({users:a}){return e.jsx(x,{title:"Menus",children:e.jsxs("section",{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Staff users"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Manage your staff users and login credentials."})]}),e.jsx("div",{className:"mt-4 sm:mt-0",children:e.jsx(r,{href:route("admin.users.create"),children:e.jsx(d,{children:"Create new staff"})})})]}),e.jsx("div",{className:"mt-6 space-y-6",children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Email"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Phone"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Actions"})]})}),e.jsx("tbody",{children:a&&a.length>0?a.map((s,l)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200",children:[e.jsx("td",{className:"px-6 py-4",children:s.name}),e.jsx("td",{className:"px-6 py-4",children:s.email}),e.jsx("td",{className:"px-6 py-4",children:s.phone}),e.jsx("td",{className:"px-6 py-4 capitalize",children:s.role_names}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(r,{href:route("admin.users.edit",s.id),children:e.jsx(t,{children:e.jsx("i",{className:"bi bi-pencil m-auto text-lg"})})}),e.jsx("a",{onClick:c=>{c.preventDefault(),i.delete(route("admin.users.destroy",s.id))},children:e.jsx(t,{children:e.jsx("i",{className:"bi bi-trash m-auto text-lg"})})})]})})]},l)):e.jsx("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200",children:e.jsx("td",{colSpan:"10",className:"px-6 py-4 text-center text-gray-500",children:"No records found"})})})]})})})]})})}export{N as default};
