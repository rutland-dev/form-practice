(()=>{"use strict";var n,e,t,r,o,A,a,i,s,c,d,l,u,f,p={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(537),o=t.n(r),A=t(645),a=t.n(A)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* End reset styles */\n\n:root {\n    font-family: 'Exo 2', sans-serif;\n}\n\n* {\n    font-family: 'Exo 2', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    color: blanchedalmond;\n    justify-content: space-between;\n    align-items: center;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 4rem;\n    font-weight: 600;\n    height: 10%;\n    width: 40%;\n    border-radius: 0 0 3rem 3rem;\n    background-color: rgba(255, 255, 255, .1);\n}\n\nh2 {\n    font-size: 3rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    color:blanchedalmond;\n    background-color: rgba(255, 255, 255, .1);\n    height: 60%;\n    width: 70;\n}\n\n.form {\n    height: 85%;\n    width: 100%;\n    padding: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nform div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\nform label {\n    font-size: 2rem;\n}\n\n.outer-password-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\nform input {\n    background-color: rgba(255, 255, 255, .9);\n    border-radius: 1rem;\n    padding: 1% 3%;\n    font-size: 1.1rem;\n    border: none;\n}\n\nform input:focus, form input:hover {\n    background-color: rgba(255, 255, 255, 1);\n}\n\nform input:invalid {\n    border: 2px solid red;\n}\n\nform input:valid {\n    border: 2px solid green;\n}\n\n.buttons {\n    width: 100%;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\nbutton {\n    border: none;\n    border-radius: 1rem;\n    width: 20%;\n    height: 100%;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0), 0 6px 20px 0 rgba(0,0,0);\n}\n\nbutton:hover {\n    box-shadow: 0 8px 16px 0 rgba(255,255,255, .3), 0 6px 20px 0 rgba(0,0,0);\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA,qBAAqB;;AAErB;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;IACrB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,4BAA4B;IAC5B,yCAAyC;AAC7C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,oBAAoB;IACpB,yCAAyC;IACzC,WAAW;IACX,SAAS;AACb;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yCAAyC;IACzC,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,8DAA8D;AAClE;;AAEA;IACI,wEAAwE;AAC5E",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* End reset styles */\n\n:root {\n    font-family: 'Exo 2', sans-serif;\n}\n\n* {\n    font-family: 'Exo 2', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    color: blanchedalmond;\n    justify-content: space-between;\n    align-items: center;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 4rem;\n    font-weight: 600;\n    height: 10%;\n    width: 40%;\n    border-radius: 0 0 3rem 3rem;\n    background-color: rgba(255, 255, 255, .1);\n}\n\nh2 {\n    font-size: 3rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    color:blanchedalmond;\n    background-color: rgba(255, 255, 255, .1);\n    height: 60%;\n    width: 70;\n}\n\n.form {\n    height: 85%;\n    width: 100%;\n    padding: 2rem;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\nform div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\nform label {\n    font-size: 2rem;\n}\n\n.outer-password-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\nform input {\n    background-color: rgba(255, 255, 255, .9);\n    border-radius: 1rem;\n    padding: 1% 3%;\n    font-size: 1.1rem;\n    border: none;\n}\n\nform input:focus, form input:hover {\n    background-color: rgba(255, 255, 255, 1);\n}\n\nform input:invalid {\n    border: 2px solid red;\n}\n\nform input:valid {\n    border: 2px solid green;\n}\n\n.buttons {\n    width: 100%;\n    height: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n}\n\nbutton {\n    border: none;\n    border-radius: 1rem;\n    width: 20%;\n    height: 100%;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0), 0 6px 20px 0 rgba(0,0,0);\n}\n\nbutton:hover {\n    box-shadow: 0 8px 16px 0 rgba(255,255,255, .3), 0 6px 20px 0 rgba(0,0,0);\n}"],sourceRoot:""}]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},a=[],i=0;i<n.length;i++){var s=n[i],c=r.base?s[0]+r.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var p=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:p,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=t(A[a]);e[i].references--}for(var s=r(n,o),c=0;c<A.length;c++){var d=t(A[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function C(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return p[n](t,t.exports,C),t.exports}C.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return C.d(e,{a:e}),e},C.d=(n,e)=>{for(var t in e)C.o(e,t)&&!C.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},C.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),C.nc=void 0,n=C(379),e=C.n(n),t=C(795),r=C.n(t),o=C(569),A=C.n(o),a=C(565),i=C.n(a),s=C(216),c=C.n(s),d=C(589),l=C.n(d),u=C(426),(f={}).styleTagTransform=l(),f.setAttributes=i(),f.insert=A().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();
//# sourceMappingURL=index.bundle.js.map