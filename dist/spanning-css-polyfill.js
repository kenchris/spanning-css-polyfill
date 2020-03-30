var spanningCssPolyfill=function(e){var n="spanning",t="single-fold-horizontal",o="single-fold-vertical",r="none",i="fold-top",a="fold-left",d="fold-height",l="fold-width",u="__foldables_env_vars__",s="(@media.*?\\b"+n+"\\b[^{]+)\\{([\\s\\S]+?\\})\\s*\\}",c=/\((.*?)\)/gi,f=/@media[^\(]+/gi,h=function(e){return new RegExp("env\\(\\s*"+e+"\\s*\\)","gi")};function p(e,n){return e.replace(new RegExp(s,"gi"),n)}function w(e){var i=function(e){var n,t=new RegExp(s,"gi");if("function"==typeof e.matchAll)n=Array.from(e.matchAll(t));else{for(n=[];n[n.length]=t.exec(e););n.length--}return n}(e),a={};return a[t]="",a[o]="",a[r]="",i.forEach(function(e){var i=e[1],d=e[2],l=r;i.indexOf(t)>-1&&(l=t),i.indexOf(o)>-1&&(l=o);var u=i.match(f)||[],s=i.match(c)||[];s=s.filter(function(e){return!e.includes(n)}).join(" and "),a[l]+="\n      "+u+" "+s+" {\n        "+d+"\n      }"}),a}function g(e,n){var t;return function(){var o=arguments,r=this;clearTimeout(t),t=setTimeout(function(){return e.apply(r,o)},n)}}if(void 0===window[u]){var v=sessionStorage.getItem(u+"-spanning")||r,m=+sessionStorage.getItem(u+"-foldSize")||0,S=+sessionStorage.getItem(u+"-browserShellSize")||0;Object.defineProperty(window,u,{value:{spanning:v,foldSize:m,browserShellSize:S,update:function(e){Object.keys(e).forEach(function(n){C.has(n)&&(window[u][n]=e[n],sessionStorage.setItem(u+"-"+n,window[u][n]))}),window[u].onupdate.forEach(function(e){return e()})},onupdate:[z]}}),window.addEventListener("message",function(e){"update"===(e.data.action||"")&&window[u].update(e.data.value||{})})}else window[u].onupdate.push(z);var y,E=Array.from(document.querySelectorAll('link[rel="stylesheet"], style')),b={};function z(e){e?Array.from(e.shadowRoot.querySelectorAll("."+u)).forEach(function(e){return e.parentNode.removeChild(e)}):Array.from(document.querySelectorAll("."+u)).forEach(function(e){return e.parentElement.removeChild(e)});var n=window[u];if(n.spanning!==r){var s=e?b[e.nodeName.toLowerCase()][n.spanning]:b[n.spanning],c=e?b[e.nodeName.toLowerCase()]["non-spanning"]:null,f=function(e){var n,r=0,u=0,s=0,c=0;return e.spanning===o&&(s=e.foldSize,c=window.innerHeight,r=window.innerWidth/2-e.foldSize/2),e.spanning===t&&(s=window.innerWidth,c=e.foldSize,u=(window.innerHeight-e.browserShellSize)/2-e.foldSize/2),(n={})[i]=u,n[a]=r,n[d]=c,n[l]=s,n}(n);Object.keys(f).forEach(function(e){var n;n=f[e]+"px",s=s.replace(h(e),n)});var p=document.createElement("style");if(p.className=u,p.textContent=s,e){var w=e.shadowRoot;"adoptedStyleSheets"in w&&w.adoptedStyleSheets.length>0?w.adoptedStyleSheets[0].replace(c+s):w.appendChild(p)}else document.head.appendChild(p)}}b[t]="",b[o]="",b[r]="",(y=E,Promise.all(y.map(function(e){var n=e.href;return n?fetch(n).then(function(e){return e.text()}):e.textContent}))).then(function(e){var n=new DocumentFragment;e.forEach(function(e,t){var o,r,i,a=p(e,""),d=w(e),l=E[t].href||"inline";Object.keys(d).forEach(function(e){void 0!==b[e]&&(b[e]+="\n          /* origin:  "+l+" */\n          "+d[e])}),n.appendChild((o={"data-css-origin":l},r=a,i=document.createElement("style"),Object.keys(o).forEach(function(e){i.setAttribute(e,o[e])}),void 0!==r&&(i.textContent=r),i))}),E.forEach(function(e){return e.parentElement.removeChild(e)}),document.head.appendChild(n),z(),window.addEventListener("resize",function(){return g(z,150)})});var C=new Set(["foldSize","browserShellSize","spanning"]);return e.adjustCSS=function(e,n){var i,a=p(n,""),d=w(n);return b[e]=((i={})[t]="",i[o]="",i[r]="",i),Object.keys(d).forEach(function(n){void 0!==b[e][n]&&(b[e][n]+="\n        /* origin: "+e+" */\n        "+d[n])}),b[e]["non-spanning"]=a,a},e.observe=function(e){z(e),window.addEventListener("resize",function(e){return g(function(e){return z(e)},150)}),window[u].onupdate.push(function(){return z(e)})},e}({});
//# sourceMappingURL=spanning-css-polyfill.js.map
