(function(){'use strict';var p;function r(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function u(a,b,d){this.a=a;this.h=b;this.g=null;this.c=d;this.s=this.b=this.f=this.l=this.m=this.j=null}p=u.prototype;p.key=function(a){this.g=a;return this};p.props=function(a){this.c=a;return this};
p.data=function(a){this.c=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};p.children=function(a){this.f=a;return this};function v(a,b){a.a|=16;a.f=b;return a}p.value=function(a){this.a|=64;this.f=a;return this};p.checked=function(a){this.a|=128;this.f=a;return this};function w(a){if(0===(a.a&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)w(a[b])}else x(a.s)}
function y(a){if(0===(a.a&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)y(a[b])}else a.s.detach()}function z(a){if(0===(a.a&256))if(0!==(a.a&4)){a=a.s;a.i|=1;null!==a.u&&0===(a.i&65536)&&z(a.u);0!==(a.i&2)&&A(a);var b=a.v.M;null!==b&&b(a,a.props,a.state)}else{if(null!==a.f&&(a=a.f,"string"!==typeof a))for(b=0;b<a.length;b++)z(a[b])}else y(a)}
function C(a,b){var d=a.a;0!==(d&1)?a.b=document.createTextNode(a.c):0!==(d&2)?a.b=0===(d&131072)?0===(d&32768)?document.createElement(a.h):document.createElementNS("http://www.w3.org/2000/svg",a.h):a.h.createElement():0===(d&256)&&(b=D(a.h,b,a.c),a.b=b.element,a.s=b)}
function E(a,b){var d,c,e,g,f=a.a,h;if(0!==(f&10)){h=a.b;if(0===(f&262144)){var l=a.c;if(null!==l)for(g=Object.keys(l),d=0,c=g.length;d<c;d++)e=g[d],h[e]=l[e];if(null!==a.j)for(g=Object.keys(a.j),d=0,c=g.length;d<c;d++)e=g[d],r(h,e,a.j[e]);null!==a.m&&(0===(f&32768)?h.style.cssText=a.m:h.setAttribute("style",a.m));null!==a.l&&(0===(f&32768)?h.className=a.l:h.setAttribute("class",a.l))}else 0===(f&8)?a.h.w(h,void 0,a.c):b.v.h.w(h,void 0,a.c);e=a.f;if(null!==e)if(0===(a.a&2048))if(0===(a.a&192))if("string"===
typeof e)h.textContent=e;else for(d=0,c=e.length;d<c;d++)F(a,e[d],null,b);else 0!==(a.a&64)?a.b.value=a.f:a.b.checked=a.f;else h.innerHTML=e}else 0!==(f&4)&&G(a.s)}function F(a,b,d,c){a=a.b;null===b.b?(C(b,c),0!==(b.a&4)&&x(b.s),E(b,c),a.insertBefore(b.b,d)):(a.insertBefore(b.b,d),w(b),G(b.s,0===(b.a&512)?b.c:null))}function H(a,b,d,c){a=a.b;null===b.b?(C(b,c),0!==(b.a&4)&&x(b.s),E(b,c),a.replaceChild(b.b,d.b)):(a.replaceChild(b.b,d.b),w(b),G(b.s,0===(b.a&512)?b.c:null));z(d)}
function J(a,b){a.b.removeChild(b.b);z(b)}function K(a,b){a.b.textContent="";for(a=0;a<b.length;a++)z(b[a])}
function L(a,b,d){var c=a.b,e=a.a,g;b.b=a.b;if(0!==(e&1))a.c!==b.c&&(a.b.nodeValue=b.c);else if(0!==(e&10)){if(0===(e&262144)){if(a.c!==b.c){g=a.c;var f=b.c,h=Object.keys(g),l,m;for(m=0;m<h.length;m++){l=h[m];var k=f[l];g[l]!==k&&(c[l]=k)}}if(a.j!==b.j)if(0===(a.a&32))for(g=a.j,f=b.j,h=Object.keys(g),m=0;m<h.length;m++)l=h[m],k=f[l],g[l]!==k&&r(c,l,k);else if(g=a.j,f=b.j,null!==g)if(null===f)for(l=Object.keys(g),h=0;h<l.length;h++)c.removeAttribute(l[h]);else{l=Object.keys(g);for(h=0;h<l.length;h++)m=
l[h],f.hasOwnProperty(m)?(k=f[m],g[m]!==k&&r(c,m,k)):c.removeAttribute(m);l=Object.keys(f);for(h=0;h<l.length;h++)m=l[h],g.hasOwnProperty(m)||r(c,m,f[m])}else if(null!==f)for(l=Object.keys(f),h=0;h<l.length;h++)m=l[h],r(c,m,f[m]);a.m!==b.m&&(g=null===b.m?"":b.m,0===(e&32768)?c.style.cssText=g:c.setAttribute("style",g));a.l!==b.l&&(g=null===b.l?"":b.l,0===(e&32768)?c.className=g:c.setAttribute("class",g))}else a.c!==b.c&&(0===(e&8)?a.h.w(c,a.c,b.c):d.v.h.w(c,a.c,b.c));if(0===(a.a&192)){if(a.f!==b.f)if(0===
(a.a&2048))if(e=a.f,b=b.f,c=0,h=!1,"string"===typeof e)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)(d=a.b.firstChild)?d.nodeValue=b:a.b.textContent=b;else for(a.b.removeChild(a.b.firstChild);c<b.length;)F(a,b[c++],null,d);else if("string"===typeof b){if(null!==e)for(;c<e.length;)z(e[c++]);a.b.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)K(a,e);else if(1===e.length&&1===b.length)g=e[0],f=b[0],M(g,f)?L(g,f,d):H(a,f,g,d);else if(1===e.length){g=e[0];
if(0===(a.a&16))for(;c<b.length;){f=b[c++];if(M(g,f)){L(g,f,d);h=!0;break}F(a,f,g.b,d)}else for(;c<b.length;){f=b[c++];if(g.g===f.g){L(g,f,d);h=!0;break}F(a,f,g.b,d)}if(h)for(;c<b.length;)F(a,b[c++],null,d);else J(a,g)}else if(1===b.length){f=b[0];if(0===(a.a&16))for(;c<e.length;){if(g=e[c++],M(g,f)){L(g,f,d);h=!0;break}}else for(;c<e.length;)if(g=e[c++],g.g===f.g){L(g,f,d);h=!0;break}if(h){d=0;for(c--;d<c;)J(a,e[d++]);for(c++;c<e.length;)J(a,e[c++])}else K(a,e),F(a,f,null,d)}else if(0===(a.a&16)){c=
f=0;h=e.length-1;for(g=b.length-1;f<=h&&c<=g;){l=e[f];m=b[c];if(!M(l,m))break;f++;c++;L(l,m,d)}for(;f<=h&&c<=g;){l=e[h];m=b[g];if(!M(l,m))break;h--;g--;L(l,m,d)}for(;f<=h&&c<=g;)l=e[f++],m=b[c++],M(l,m)?L(l,m,d):H(a,m,l,d);if(f<=h){do J(a,e[f++]);while(f<=h)}else if(c<=g){e=g+1;e=e<b.length?b[e].b:null;do F(a,b[c++],e,d);while(c<=g)}}else{c=h=0;l=e.length-1;m=b.length-1;f=e[h];g=b[c];var k=e[l],n=b[m],q,I;a:for(;;){for(;f.g===g.g;){L(f,g,d);h++;c++;if(h>l||c>m)break a;f=e[h];g=b[c]}for(;k.g===n.g;){L(k,
n,d);l--;m--;if(h>l||c>m)break a;k=e[l];n=b[m]}if(k.g===g.g){L(k,g,d);a.b.insertBefore(g.b,f.b);l--;c++;if(h>l||c>m)break;k=e[l];g=b[c]}else if(f.g===n.g){L(f,n,d);f=m+1;f=f<b.length?b[f].b:null;a.b.insertBefore(n.b,f);h++;m--;if(h>l||c>m)break;f=e[h];n=b[m]}else break}if(h>l)for(f=m+1,f=f<b.length?b[f].b:null;c<=m;)F(a,b[c++],f,d);else if(c>m)for(;h<=l;)J(a,e[h++]);else{var R=l-h+1,f=m-c+1;g=Array(f);for(k=0;k<f;k++)g[k]=-1;var S=!1,t=0,B=0;if(4>=f||16>=R*f)for(k=h;k<=l;k++){if(q=e[k],B<f)for(n=
c;n<=m;n++)if(I=b[n],q.g===I.g){g[n-c]=k;t>n?S=!0:t=n;L(q,I,d);B++;e[k]=null;break}}else{for(var aa=new Map,k=c;k<=m;k++)q=b[k],aa.set(q.g,k);for(k=h;k<=l;k++)q=e[k],B<f&&(n=aa.get(q.g),void 0!==n&&(I=b[n],g[n-c]=k,t>n?S=!0:t=n,L(q,I,d),B++,e[k]=null))}if(R===e.length&&0===B)for(K(a,e);c<f;)F(a,b[c++],null,d);else{for(k=R-B;0<k;)q=e[h++],null!==q&&(J(a,q),k--);if(S){h=g.slice(0);e=[];e.push(0);l=0;for(m=g.length;l<m;l++)if(-1!==g[l])if(k=e[e.length-1],g[k]<g[l])h[l]=k,e.push(l);else{k=0;for(n=e.length-
1;k<n;)q=(k+n)/2|0,g[e[q]]<g[l]?k=q+1:n=q;g[l]<g[e[k]]&&(0<k&&(h[l]=e[k-1]),e[k]=l)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=h[n];n=e.length-1;for(k=f-1;0<=k;k--)-1===g[k]?(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].b:null,F(a,q,f,d)):0>n||k!==e[n]?(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].b:null,a.b.insertBefore(q.b,f)):n--}else if(B!==f)for(k=f-1;0<=k;k--)-1===g[k]&&(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].b:null,F(a,q,f,d))}}}else{if(null!==b&&0<b.length)for(c=0;c<b.length;c++)F(a,b[c],null,d)}else c.innerHTML=
b.f}else 0!==(e&64)?c.value!==b.f&&(c.value=b.f):c.checked!==b.f&&(c.checked=b.f)}else d=b.s=a.s,0!==(e&1024)&&a.c===b.c||G(d,0===(e&512)?b.c:void 0)}function M(a,b){return a.a===b.a&&a.h===b.h&&a.g===b.g}function N(){this.o=4;this.B=8;this.a=0;this.h="div";this.M=this.L=this.I=this.A=this.w=this.N=null}p=N.prototype;p.tagName=function(a){this.h=a;"string"!==typeof a&&(this.o|=a.o,this.B|=a.o,this.a|=a.o);return this};p.canvas=function(){this.o|=65536;this.a|=65536;this.h="canvas";return this};
p.init=function(a){this.A=a;return this};p.update=function(a){this.w=a;return this};p.H=function(a){return new u(4,this,void 0===a?null:a)};function O(a,b){return new u(1028,a,void 0===b?null:b)}function D(a,b,d){var c;c=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.h):document.createElementNS("http://www.w3.org/2000/svg",a.h):a.h.createElement();b=new P(a.o,a,c,b,d);0!==(a.a&1)&&(c.O=b);null!==a.A&&a.A(b,b.props);return b}
function P(a,b,d,c,e){this.i=a;this.P=0;this.v=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.u=0===(a&65536)?null:d.getContext("2d");this.G=this.D=null}function Q(a){return new u(a.v.B,a.v.h,null)}P.prototype.update=function(a){G(this,a)};function T(a,b){null===a.u?(b.s=a,b.b=a.element,E(b,a)):L(a.u,b,a);a.u=b}function x(a){ba(a);null!==a.u&&0===(a.i&65536)&&w(a.u)}P.prototype.detach=function(){null!==this.u&&0===(this.i&65536)&&y(this.u);A(this)};
P.prototype.subscribe=function(a){return a.R(this)};function G(a,b){if(void 0!==b&&0===(a.i&512)){var d=a.props,c=a.v.N;null!==c?c(a,d,b):0===(a.i&4)&&(a.i|=4,ca(a));a.props=b}6===(a.i&6)&&(a.v.w(a,a.props,a.state),a.P=U,a.i&=-133)}function ba(a){a.i|=2;var b=a.v.I;null!==b&&b(a,a.props,a.state)}function A(a){a.i&=-19;for(var b=a.D;null!==b;)b.J(),b=b.K;a.D=null;ca(a);b=a.v.L;null!==b&&b(a,a.props,a.state)}function ca(a){for(var b=a.G;null!==b;)b.J(),b=b.K;a.G=null}
function da(a){var b=D(ea,void 0,null);a.appendChild(b.element);ba(b);G(b);return b}var U=0,V=[],fa=[],ga=document.createTextNode(""),ha="__kivi"+Math.random();(new MutationObserver(ia)).observe(ga,{characterData:!0});window.addEventListener("message",ja);function ja(a){if(a.source===window&&a.data===ha){a=fa;fa=[];for(var b=0;b<a.length;b++)a[b]();U++}}function ia(){for(;0<V.length;){var a=V;V=[];for(var b=0;b<a.length;b++)a[b]();U++}}
function W(a){this.o=131072;this.a=0;this.F=a;this.C=this.w=this.l=this.m=this.j=this.c=null}p=W.prototype;p.props=function(a){this.c=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};function X(a){a.a|=1;return a}p.update=function(a){this.o|=262144;this.w=a;return this};p.H=function(a){return new u(2|this.o,this,void 0===a?null:a)};
p.createElement=function(){var a,b,d,c=this.C;if(null===c){c=0===(this.a&32768)?document.createElement(this.F):document.createElementNS("http://www.w3.org/2000/svg",this.F);if(null!==this.c)for(b=Object.keys(this.c),a=0;a<b.length;a++)d=b[a],c[d]=this.c[d];if(null!==this.j)for(b=Object.keys(this.j),a=0;a<b.length;a++)d=b[a],r(c,d,this.j[d]);null!==this.m&&(0===(this.a&32768)?c.style.cssText=this.m:c.setAttribute("style",this.m));null!==this.l&&(0===(this.a&32768)?c.className=this.l:c.setAttribute("class",
this.l));return 0!==(this.a&1)?(this.C=c,c.cloneNode(!1)):c}return c.cloneNode(!1)};var Y=new N;Y.a|=1;
var Z=Y.tagName(X(new W("td")).className("TableCell")).update(function(a,b){T(a,Q(a).children(b))}),ka=function(a){Z.a|=1;return function(b){var d;a:{d=b.target;for(var c=b.currentTarget,c=void 0===c?null:c;d!==c;){if(d.matches(".TableCell"))break a;d=d.parentNode}d=null}null!==d&&(c=d.O,a(b,c,c.props,c.state,d))}}(function(a,b,d){console.log("Click",d);a.stopPropagation()}),la=(new N).tagName(X(new W("tr")).update(function(a,b,d){void 0===b?(a.className=d.active?"TableRow active":"TableRow",a.setAttribute("data-id",
""+d.id)):b.active!==d.active&&(a.className=d.active?"TableRow active":"TableRow")})).init(function(a){a.element.onclick=ka}).update(function(a,b){var d=b.props,c=Array(d.length+1);c[0]=Z.H("#"+b.id);for(var e=0;e<d.length;e++)c[e+1]=O(Z,d[e]);T(a,Q(a).data(b).children(c))}),ma=(new N).tagName(X(new W("table")).className("Table")).update(function(a,b){b=b.items;for(var d=Array(b.length),c=0;c<b.length;c++){var e=b[c];d[c]=O(la,e).key(e.id)}T(a,Q(a).children([v(new u(2,"tbody",null),d)]))});
function na(a){return"border-radius:"+a%10+"px;background:rgba(0,0,0,"+(.5+a%10/10)+")"}
var oa=(new N).tagName(X(new W("div")).className("AnimBox").update(function(a,b,d){void 0===b?(a.setAttribute("data-id",""+d.id),a.style.cssText=na(d.time)):b.time!==d.time&&(a.style.cssText=na(d.time))})).update(function(a,b){T(a,Q(a).data(b))}),pa=(new N).tagName(X(new W("div")).className("Anim")).update(function(a,b){b=b.items;for(var d=Array(b.length),c=0;c<b.length;c++){var e=b[c];d[c]=O(oa,e).key(e.id)}T(a,v(Q(a),d))}),qa=(new N).tagName(X(new W("li")).className("TreeLeaf")).update(function(a,
b){T(a,Q(a).children(""+b.id))}),ra=(new N).tagName(X(new W("ul")).className("TreeNode")).update(function(a,b){for(var d=Array(b.children.length),c=0;c<b.children.length;c++){var e=b.children[c];d[c]=(e.container?O(ra,e):O(qa,e)).key(e.id)}T(a,v(Q(a),d))}),sa=(new N).tagName(X(new W("div")).className("Tree")).update(function(a,b){T(a,Q(a).children([O(ra,b.root)]))}),ea=(new N).tagName((new W("div")).className("Main")).update(function(a,b){var d=b&&b.location,c=null;"table"===d?c=[O(ma,b.table)]:"anim"===
d?c=[O(pa,b.anim)]:"tree"===d&&(c=[O(sa,b.tree)]);T(a,Q(a).children(c))});uibench.init("kivi[adv]","1.0.0");document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App"),b=da(a);uibench.run(function(a){b.update(a)},function(d){a.innerHTML="<pre>"+JSON.stringify(d,null," ")+"</pre>";b=null})});}).call();
