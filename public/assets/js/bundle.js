!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){var t=e(1);"string"==typeof t&&(t=[[n.i,t,""]]);var o={insert:"head",singleton:!1};e(3)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(2)(!1)).push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.progress-bar {\r\n    width: 0;\r\n    height: 5px;\r\n    background-color: rgb(43, 255, 0);\r\n    transition: all ease 1s;\r\n}\r\n\r\nbody {\r\n    background-color: #333;\r\n}\r\n\r\n.main {\r\n    padding: 0 15px;\r\n    margin-top: 200px;\r\n}\r\n.content {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n    width: 600PX;\r\n    padding: 20px;\r\n    border: 1px dotted white;\r\n}\r\n\r\n.ask-title {\r\n    width: 100%;\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n\r\n.answer-area {\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.answer--box {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n    background-color: rgb(32, 32, 32);\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n.answer--box:hover {\r\n    background-color: rgb(14, 12, 12);\r\n}\r\n\r\n\r\n.result {\r\n    color: white\r\n}\r\n.result span {\r\n    text-decoration: underline;\r\n}\r\n\r\n.btt-result {\r\n    margin-top: 10px;\r\n    padding: 10px 20px;\r\n    font-size: 17px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: #666;\r\n    border-radius: 5px;\r\n    border: 0;\r\n}\r\n@media (max-width: 650px) {\r\n    .content {\r\n        width: 100%;\r\n    }\r\n}\r\n@media (max-width: 450px) {\r\n    .result {\r\n        font-size: 25px;\r\n    }\r\n}\r\n/* JoaoZanardo */",""])},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,s,c;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(e,"}"):e})).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(t[a]=!0)}for(var i=0;i<n.length;i++){var s=n[i];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),r.push(s))}},r}},function(n,r,e){"use strict";var t,o={},a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}();function s(n,r){for(var e=[],t={},o=0;o<n.length;o++){var a=n[o],i=r.base?a[0]+r.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};t[i]?t[i].parts.push(s):e.push(t[i]={id:i,parts:[s]})}return e}function c(n,r){for(var e=0;e<n.length;e++){var t=n[e],a=o[t.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](t.parts[i]);for(;i<t.parts.length;i++)a.parts.push(g(t.parts[i],r))}else{for(var s=[];i<t.parts.length;i++)s.push(g(t.parts[i],r));o[t.id]={id:t.id,refs:1,parts:s}}}}function l(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var t=e.nc;t&&(n.attributes.nonce=t)}if(Object.keys(n.attributes).forEach((function(e){r.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(r);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var u,f=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function d(n,r,e,t){var o=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=f(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function p(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o&&n.setAttribute("media",o),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,b=0;function g(n,r){var e,t,o;if(r.singleton){var a=b++;e=h||(h=l(r)),t=d.bind(null,e,a,!1),o=d.bind(null,e,a,!0)}else e=l(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a());var e=s(n,r);return c(e,r),function(n){for(var t=[],a=0;a<e.length;a++){var i=e[a],l=o[i.id];l&&(l.refs--,t.push(l))}n&&c(s(n,r),r);for(var u=0;u<t.length;u++){var f=t[u];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(n,r,e){"use strict";e.r(r);e(0);var t=[{title:"How to tag javascript in HTML ?",correctAnswer:"tag script",answers:["tag js","tag script","tag scripting","tag javascript"]},{title:"Who is the CEO of facebook ?",correctAnswer:"Mark zuckerberg",answers:["Mark zuckerberg","Elon Musk","Uncle Bob","Linux"]},{title:"Who is the CEO of Tesla and SpaceX ?",correctAnswer:"Elon Musk",answers:["Elon Musk","Jeff Bezos","Warrent Buffet","Nicola Tesla"]},{title:"What is the best language to make a AI ?",correctAnswer:"PYTHON",answers:["RUBY","PYTHON","JAVA","C"]},{title:"What can you do with javascript ?",correctAnswer:"All above",answers:["Front-end","Back-nd","Mobile App","All above"]},{title:"How to declare a function in javascript ?",correctAnswer:"function myFunction()",answers:["function: myFunction()","function myFunction()","var myFunction = function","None of these"]},{title:"What is the difference between var and let ?",correctAnswer:"Their scopes",answers:["Var is not interable","No difference","Their scopes","Let is constant"]},{title:"To code, you need to know a lot of math !",correctAnswer:"False",answers:["True","False"]},{title:"There is no var in HTML !",correctAnswer:"True",answers:["True","False"]},{title:"Frameworks are the same as libraries !",correctAnswer:"False",answers:["True","False"]}],o=0,a=0,i=document.querySelector(".ask-title"),s=document.querySelector(".answer-area"),c=document.querySelector(".progress-bar"),l=t[a],u=[];function f(){if(l=t[a],c.style.width="".concat(Math.floor(a/t.length*100),"%"),void 0!==l){i.innerHTML=l.title,s.innerHTML="";var n="",r=!0,e=!1,u=void 0;try{for(var f,p=l.answers[Symbol.iterator]();!(r=(f=p.next()).done);r=!0){var h=f.value;n+='<div class="answer--box">'.concat(h,"</div>")}}catch(n){e=!0,u=n}finally{try{r||null==p.return||p.return()}finally{if(e)throw u}}s.innerHTML=n,document.querySelectorAll(".answer--box").forEach((function(n){n.addEventListener("click",d)}))}else b=Math.floor(o/t.length*100),i.innerHTML="",s.innerHTML="",s.innerHTML+='<h1 class="result">You got it right '.concat(b," % !</h1><br/>"),s.innerHTML+='<button class="btt-result">Try Again !</button>';var b}function d(n){var r=n.target.innerHTML;u.push(l.title+" = "+r),r===l.correctAnswer&&o++,a++,f()}document.addEventListener("click",(function(n){n.target.classList.contains("btt-result")&&(o=0,a=0,u=[],f())})),f()}]);
//# sourceMappingURL=bundle.js.map