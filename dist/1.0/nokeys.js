(function(){'use strict';var p;function r(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function u(a,b,d){this.b=a;this.i=b;this.g=null;this.c=d;this.s=this.a=this.f=this.l=this.m=this.j=null}p=u.prototype;p.key=function(a){this.g=a;return this};p.props=function(a){this.c=a;return this};
p.data=function(a){this.c=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};p.children=function(a){this.f=a;return this};p.value=function(a){this.b|=64;this.f=a;return this};p.checked=function(a){this.b|=128;this.f=a;return this};function v(a){if(0===(a.b&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)v(a[b])}else w(a.s)}
function x(a){if(0===(a.b&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)x(a[b])}else a.s.detach()}function y(a){if(0===(a.b&256))if(0!==(a.b&4)){a=a.s;a.h|=1;null!==a.v&&0===(a.h&65536)&&y(a.v);0!==(a.h&2)&&z(a);var b=a.A.M;null!==b&&b(a,a.props,a.state)}else{if(null!==a.f&&(a=a.f,"string"!==typeof a))for(b=0;b<a.length;b++)y(a[b])}else x(a)}
function A(a,b){var d=a.b;0!==(d&1)?a.a=document.createTextNode(a.c):0!==(d&2)?a.a=0===(d&131072)?0===(d&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(d&256)&&(b=C(a.i,b,a.c),a.a=b.element,a.s=b)}
function D(a,b){var d,c,e,g,f=a.b,h;if(0!==(f&10)){h=a.a;if(0===(f&262144)){var l=a.c;if(null!==l)for(g=Object.keys(l),d=0,c=g.length;d<c;d++)e=g[d],h[e]=l[e];if(null!==a.j)for(g=Object.keys(a.j),d=0,c=g.length;d<c;d++)e=g[d],r(h,e,a.j[e]);null!==a.m&&(0===(f&32768)?h.style.cssText=a.m:h.setAttribute("style",a.m));null!==a.l&&(0===(f&32768)?h.className=a.l:h.setAttribute("class",a.l))}else 0===(f&8)?a.i.w(h,void 0,a.c):b.A.i.w(h,void 0,a.c);e=a.f;if(null!==e)if(0===(a.b&2048))if(0===(a.b&192))if("string"===
typeof e)h.textContent=e;else for(d=0,c=e.length;d<c;d++)E(a,e[d],null,b);else 0!==(a.b&64)?a.a.value=a.f:a.a.checked=a.f;else h.innerHTML=e}else 0!==(f&4)&&F(a.s)}function E(a,b,d,c){a=a.a;null===b.a?(A(b,c),0!==(b.b&4)&&w(b.s),D(b,c),a.insertBefore(b.a,d)):(a.insertBefore(b.a,d),v(b),F(b.s,0===(b.b&512)?b.c:null))}function G(a,b,d,c){a=a.a;null===b.a?(A(b,c),0!==(b.b&4)&&w(b.s),D(b,c),a.replaceChild(b.a,d.a)):(a.replaceChild(b.a,d.a),v(b),F(b.s,0===(b.b&512)?b.c:null));y(d)}
function I(a,b){a.a.removeChild(b.a);y(b)}function J(a,b){a.a.textContent="";for(a=0;a<b.length;a++)y(b[a])}
function K(a,b,d){var c=a.a,e=a.b,g;b.a=a.a;if(0!==(e&1))a.c!==b.c&&(a.a.nodeValue=b.c);else if(0!==(e&10)){if(0===(e&262144)){if(a.c!==b.c){g=a.c;var f=b.c,h=Object.keys(g),l,m;for(m=0;m<h.length;m++){l=h[m];var k=f[l];g[l]!==k&&(c[l]=k)}}if(a.j!==b.j)if(0===(a.b&32))for(g=a.j,f=b.j,h=Object.keys(g),m=0;m<h.length;m++)l=h[m],k=f[l],g[l]!==k&&r(c,l,k);else if(g=a.j,f=b.j,null!==g)if(null===f)for(l=Object.keys(g),h=0;h<l.length;h++)c.removeAttribute(l[h]);else{l=Object.keys(g);for(h=0;h<l.length;h++)m=
l[h],f.hasOwnProperty(m)?(k=f[m],g[m]!==k&&r(c,m,k)):c.removeAttribute(m);l=Object.keys(f);for(h=0;h<l.length;h++)m=l[h],g.hasOwnProperty(m)||r(c,m,f[m])}else if(null!==f)for(l=Object.keys(f),h=0;h<l.length;h++)m=l[h],r(c,m,f[m]);a.m!==b.m&&(g=null===b.m?"":b.m,0===(e&32768)?c.style.cssText=g:c.setAttribute("style",g));a.l!==b.l&&(g=null===b.l?"":b.l,0===(e&32768)?c.className=g:c.setAttribute("class",g))}else a.c!==b.c&&(0===(e&8)?a.i.w(c,a.c,b.c):d.A.i.w(c,a.c,b.c));if(0===(a.b&192)){if(a.f!==b.f)if(0===
(a.b&2048))if(e=a.f,b=b.f,c=0,h=!1,"string"===typeof e)if(null===b)a.a.removeChild(a.a.firstChild);else if("string"===typeof b)(d=a.a.firstChild)?d.nodeValue=b:a.a.textContent=b;else for(a.a.removeChild(a.a.firstChild);c<b.length;)E(a,b[c++],null,d);else if("string"===typeof b){if(null!==e)for(;c<e.length;)y(e[c++]);a.a.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)J(a,e);else if(1===e.length&&1===b.length)g=e[0],f=b[0],L(g,f)?K(g,f,d):G(a,f,g,d);else if(1===e.length){g=e[0];
if(0===(a.b&16))for(;c<b.length;){f=b[c++];if(L(g,f)){K(g,f,d);h=!0;break}E(a,f,g.a,d)}else for(;c<b.length;){f=b[c++];if(g.g===f.g){K(g,f,d);h=!0;break}E(a,f,g.a,d)}if(h)for(;c<b.length;)E(a,b[c++],null,d);else I(a,g)}else if(1===b.length){f=b[0];if(0===(a.b&16))for(;c<e.length;){if(g=e[c++],L(g,f)){K(g,f,d);h=!0;break}}else for(;c<e.length;)if(g=e[c++],g.g===f.g){K(g,f,d);h=!0;break}if(h){d=0;for(c--;d<c;)I(a,e[d++]);for(c++;c<e.length;)I(a,e[c++])}else J(a,e),E(a,f,null,d)}else if(0===(a.b&16)){c=
f=0;h=e.length-1;for(g=b.length-1;f<=h&&c<=g;){l=e[f];m=b[c];if(!L(l,m))break;f++;c++;K(l,m,d)}for(;f<=h&&c<=g;){l=e[h];m=b[g];if(!L(l,m))break;h--;g--;K(l,m,d)}for(;f<=h&&c<=g;)l=e[f++],m=b[c++],L(l,m)?K(l,m,d):G(a,m,l,d);if(f<=h){do I(a,e[f++]);while(f<=h)}else if(c<=g){e=g+1;e=e<b.length?b[e].a:null;do E(a,b[c++],e,d);while(c<=g)}}else{c=h=0;l=e.length-1;m=b.length-1;f=e[h];g=b[c];var k=e[l],n=b[m],q,H;a:do{for(;f.g===g.g;){K(f,g,d);h++;c++;if(h>l||c>m)break a;f=e[h];g=b[c]}for(;k.g===n.g;){K(k,
n,d);l--;m--;if(h>l||c>m)break a;k=e[l];n=b[m]}if(f.g===n.g){K(f,n,d);f=m+1;f=f<b.length?b[f].a:null;a.a.insertBefore(n.a,f);h++;m--;if(h>l||c>m)break a;f=e[h];n=b[m];continue a}if(k.g===g.g){K(k,g,d);a.a.insertBefore(g.a,f.a);l--;c++;if(h>l||c>m)break a;k=e[l];g=b[c]}}while(0);if(h>l)for(f=m+1,f=f<b.length?b[f].a:null;c<=m;)E(a,b[c++],f,d);else if(c>m)for(;h<=l;)I(a,e[h++]);else{var O=l-h+1,f=m-c+1;g=Array(f);for(k=0;k<f;k++)g[k]=-1;var P=!1,t=0,B=0;if(4>=f||16>=O*f)for(k=h;k<=l;k++){if(q=e[k],B<
f)for(n=c;n<=m;n++)if(H=b[n],q.g===H.g){g[n-c]=k;t>n?P=!0:t=n;K(q,H,d);B++;e[k]=null;break}}else{for(var X=new Map,k=c;k<=m;k++)q=b[k],X.set(q.g,k);for(k=h;k<=l;k++)q=e[k],B<f&&(n=X.get(q.g),void 0!==n&&(H=b[n],g[n-c]=k,t>n?P=!0:t=n,K(q,H,d),B++,e[k]=null))}if(O===e.length&&0===B)for(J(a,e);c<f;)E(a,b[c++],null,d);else{for(k=O-B;0<k;)q=e[h++],null!==q&&(I(a,q),k--);if(P){h=g.slice(0);e=[];e.push(0);l=0;for(m=g.length;l<m;l++)if(-1!==g[l])if(k=e[e.length-1],g[k]<g[l])h[l]=k,e.push(l);else{k=0;for(n=
e.length-1;k<n;)q=(k+n)/2|0,g[e[q]]<g[l]?k=q+1:n=q;g[l]<g[e[k]]&&(0<k&&(h[l]=e[k-1]),e[k]=l)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=h[n];n=e.length-1;for(k=f-1;0<=k;k--)-1===g[k]?(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].a:null,E(a,q,f,d)):0>n||k!==e[n]?(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].a:null,a.a.insertBefore(q.a,f)):n--}else if(B!==f)for(k=f-1;0<=k;k--)-1===g[k]&&(t=k+c,q=b[t],f=t+1,f=f<b.length?b[f].a:null,E(a,q,f,d))}}}else{if(null!==b&&0<b.length)for(c=0;c<b.length;c++)E(a,b[c],null,d)}else c.innerHTML=
b.f}else 0!==(e&64)?c.value!==b.f&&(c.value=b.f):c.checked!==b.f&&(c.checked=b.f)}else d=b.s=a.s,0!==(e&1024)&&a.c===b.c||F(d,0===(e&512)?b.c:void 0)}function L(a,b){return a.b===b.b&&a.i===b.i&&a.g===b.g}function M(){this.o=4;this.b=0;this.i="div";this.M=this.L=this.I=this.B=this.w=this.N=null}p=M.prototype;p.tagName=function(a){this.i=a;"string"!==typeof a&&(this.o|=a.o,this.b|=a.o);return this};p.canvas=function(){this.o|=65536;this.b|=65536;this.i="canvas";return this};
p.init=function(a){this.B=a;return this};p.update=function(a){this.w=a;return this};p.H=function(a){return new u(4,this,void 0===a?null:a)};function N(a,b){return new u(1028,a,void 0===b?null:b)}function C(a,b,d){var c;c=0===(a.b&131072)?0===(a.b&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new Q(a.o,a,c,b,d);0!==(a.b&1)&&(c.O=b);null!==a.B&&a.B(b,b.props);return b}
function Q(a,b,d,c,e){this.h=a;this.P=0;this.A=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.v=0===(a&65536)?null:d.getContext("2d");this.G=this.D=null}Q.prototype.u=function(){return 0===(this.h&131072)?new u(8,null,null):this.A.i.u()};Q.prototype.update=function(a){F(this,a)};function R(a,b){null===a.v?(b.s=a,b.a=a.element,D(b,a)):K(a.v,b,a);a.v=b}function w(a){S(a);null!==a.v&&0===(a.h&65536)&&v(a.v)}
Q.prototype.detach=function(){null!==this.v&&0===(this.h&65536)&&x(this.v);z(this)};Q.prototype.subscribe=function(a){return a.R(this)};function F(a,b){if(void 0!==b&&0===(a.h&512)){var d=a.props,c=a.A.N;null!==c?c(a,d,b):0===(a.h&4)&&(a.h|=4,T(a));a.props=b}6===(a.h&6)&&(a.A.w(a,a.props,a.state),a.P=U,a.h&=-133)}function S(a){a.h|=2;var b=a.A.I;null!==b&&b(a,a.props,a.state)}function z(a){a.h&=-19;for(var b=a.D;null!==b;)b.J(),b=b.K;a.D=null;T(a);b=a.A.L;null!==b&&b(a,a.props,a.state)}
function T(a){for(var b=a.G;null!==b;)b.J(),b=b.K;a.G=null}function aa(a){var b=C(ba,void 0,null);a.appendChild(b.element);S(b);F(b);return b}var U=0,V=[],ca=[],da=document.createTextNode(""),ea="__kivi"+Math.random();(new MutationObserver(fa)).observe(da,{characterData:!0});window.addEventListener("message",ga);function ga(a){if(a.source===window&&a.data===ea){a=ca;ca=[];for(var b=0;b<a.length;b++)a[b]();U++}}function fa(){for(;0<V.length;){var a=V;V=[];for(var b=0;b<a.length;b++)a[b]();U++}}
function W(a){this.o=131072;this.b=0;this.F=a;this.C=this.w=this.l=this.m=this.j=this.c=null}p=W.prototype;p.props=function(a){this.c=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};function Y(a){a.b|=1;return a}p.update=function(a){this.o|=262144;this.w=a;return this};p.H=function(a){return new u(2|this.o,this,void 0===a?null:a)};p.u=function(a){return new u(8|this.o,this,void 0===a?null:a)};
p.createElement=function(){var a,b,d,c=this.C;if(null===c){c=0===(this.b&32768)?document.createElement(this.F):document.createElementNS("http://www.w3.org/2000/svg",this.F);if(null!==this.c)for(b=Object.keys(this.c),a=0;a<b.length;a++)d=b[a],c[d]=this.c[d];if(null!==this.j)for(b=Object.keys(this.j),a=0;a<b.length;a++)d=b[a],r(c,d,this.j[d]);null!==this.m&&(0===(this.b&32768)?c.style.cssText=this.m:c.setAttribute("style",this.m));null!==this.l&&(0===(this.b&32768)?c.className=this.l:c.setAttribute("class",
this.l));return 0!==(this.b&1)?(this.C=c,c.cloneNode(!1)):c}return c.cloneNode(!1)};var Z=new M;Z.b|=1;
var ha=Z.tagName(Y(new W("td")).className("TableCell")).update(function(a,b){R(a,a.u().children(b))}),ia=function(a){return function(b){var d;a:{d=b.currentTarget;d=void 0===d?null:d;for(var c=b.target;c!==d;){if(c.matches(".TableCell")){d=c;break a}c=c.parentNode}d=null}null!==d&&(c=d.O,a(b,c,c.props,c.state,d))}}(function(a,b,d){console.log("Click",d);a.stopPropagation()}),ja=(new M).tagName(Y(new W("tr")).update(function(a,b,d){void 0===b?(a.className=d.active?"TableRow active":"TableRow",a.setAttribute("data-id",
""+d.id)):b.active!==d.active&&(a.className=d.active?"TableRow active":"TableRow")})).init(function(a){a.element.onclick=ia}).update(function(a,b){for(var d=b.props,c=[ha.H("#"+b.id)],e=0;e<d.length;e++)c.push(N(ha,d[e]));R(a,a.u().data(b).children(c))}),ka=(new M).tagName(Y(new W("table")).className("Table")).update(function(a,b){b=b.items;for(var d=[],c=0;c<b.length;c++)d.push(N(ja,b[c]));R(a,a.u().children([(new u(2,"tbody",null)).children(d)]))});
function la(a){return"border-radius:"+a%10+"px;background:rgba(0,0,0,"+(.5+a%10/10)+")"}
var ma=(new M).tagName(Y(new W("div")).className("AnimBox").update(function(a,b,d){void 0===b?(a.setAttribute("data-id",""+d.id),a.style.cssText=la(d.time)):b.time!==d.time&&(a.style.cssText=la(d.time))})).update(function(a,b){R(a,a.u().data(b))}),na=(new M).tagName(Y(new W("div")).className("Anim")).update(function(a,b){b=b.items;for(var d=[],c=0;c<b.length;c++)d.push(N(ma,b[c]));R(a,a.u().children(d))}),oa=(new M).tagName(Y(new W("li")).className("TreeLeaf")).update(function(a,b){R(a,a.u().children(""+
b.id))}),pa=(new M).tagName(Y(new W("ul")).className("TreeNode")).update(function(a,b){for(var d=[],c=0;c<b.children.length;c++){var e=b.children[c];d.push(e.container?N(pa,e):N(oa,e))}R(a,a.u().children(d))}),qa=(new M).tagName(Y(new W("div")).className("Tree")).update(function(a,b){R(a,a.u().children([N(pa,b.root)]))}),ba=(new M).tagName((new W("div")).className("Main")).update(function(a,b){var d=b&&b.location,c=null;"table"===d?c=[N(ka,b.table)]:"anim"===d?c=[N(na,b.anim)]:"tree"===d&&(c=[N(qa,
b.tree)]);R(a,a.u().children(c))});uibench.init("kivi[adv-nk]","1.0.0");document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App"),b=aa(a);uibench.run(function(a){b.update(a)},function(d){a.innerHTML="<pre>"+JSON.stringify(d,null," ")+"</pre>";b=null})});}).call();
