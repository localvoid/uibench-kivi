(function(){'use strict';var q;function t(a,b,f){120!==b.charCodeAt(0)?a.setAttribute(b,f):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,f):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,f):a.setAttribute(b,f)}function u(a,b,f){this.b=a;this.i=b;this.g=null;this.c=f;this.j=this.a=this.f=this.o=this.s=this.l=null}q=u.prototype;q.key=function(a){this.g=a;return this};q.props=function(a){this.c=a;return this};
q.data=function(a){this.c=a;return this};q.style=function(a){this.s=a;return this};q.className=function(a){this.o=a;return this};q.children=function(a){this.f=a;return this};function v(a,b){a.b|=16;a.f=b;return a}q.value=function(a){this.b|=64;this.f=a;return this};q.checked=function(a){this.b|=128;this.f=a;return this};function w(a){if(0===(a.b&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)w(a[b])}else x(a.j)}
function y(a){if(0===(a.b&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)y(a[b])}else a.j.detach()}function A(a){if(0===(a.b&256))if(0!==(a.b&4)){a=a.j;a.h|=1;null!==a.m&&0===(a.h&65536)&&A(a.m);0!==(a.h&2)&&B(a);var b=a.u.I;null!==b&&b(a,a.props,a.state)}else{if(null!==a.f&&(a=a.f,"string"!==typeof a))for(b=0;b<a.length;b++)A(a[b])}else y(a)}
function C(a,b){var f=a.b;0!==(f&1)?a.a=document.createTextNode(a.c):0!==(f&2)?a.a=0===(f&131072)?0===(f&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(f&256)&&(b=D(a.i,b,a.c),a.a=b.element,a.j=b)}
function E(a,b){var f,c,e,g,d=a.b,h;if(0!==(d&10)){h=a.a;if(0===(d&262144)){var l=a.c;if(null!==l)for(g=Object.keys(l),f=0,c=g.length;f<c;f++)e=g[f],h[e]=l[e];if(null!==a.l)for(g=Object.keys(a.l),f=0,c=g.length;f<c;f++)e=g[f],t(h,e,a.l[e]);null!==a.s&&(0===(d&32768)?h.style.cssText=a.s:h.setAttribute("style",a.s));null!==a.o&&(0===(d&32768)?h.className=a.o:h.setAttribute("class",a.o))}else 0===(d&8)?a.i.w(h,void 0,a.c):b.u.i.w(h,void 0,a.c);e=a.f;if(null!==e)if(0===(a.b&2048))if(0===(a.b&192))if("string"===
typeof e)h.textContent=e;else for(f=0,c=e.length;f<c;f++)F(a,e[f],null,b);else 0!==(a.b&64)?a.a.value=a.f:a.a.checked=a.f;else h.innerHTML=e}else 0!==(d&4)&&H(a.j)}function F(a,b,f,c){a=a.a;null===b.a?(C(b,c),0!==(b.b&4)&&x(b.j),E(b,c),a.insertBefore(b.a,f)):(a.insertBefore(b.a,f),w(b),H(b.j,0===(b.b&512)?b.c:null))}function I(a,b,f,c){a=a.a;null===b.a?(C(b,c),0!==(b.b&4)&&x(b.j),E(b,c),a.replaceChild(b.a,f.a)):(a.replaceChild(b.a,f.a),w(b),H(b.j,0===(b.b&512)?b.c:null));A(f)}
function J(a,b){a.a.removeChild(b.a);A(b)}function K(a,b){a.a.textContent="";for(a=0;a<b.length;a++)A(b[a])}
function L(a,b,f){var c=a.a,e=a.b,g;b.a=a.a;if(0!==(e&1))a.c!==b.c&&(a.a.nodeValue=b.c);else if(0!==(e&10)){if(0===(e&262144)){if(a.c!==b.c){g=a.c;var d=b.c,h=Object.keys(g),l,m;for(m=0;m<h.length;m++){l=h[m];var k=d[l];g[l]!==k&&(c[l]=k)}}if(a.l!==b.l)if(0===(a.b&32))for(g=a.l,d=b.l,h=Object.keys(g),m=0;m<h.length;m++)l=h[m],k=d[l],g[l]!==k&&t(c,l,k);else if(g=a.l,d=b.l,null!==g)if(null===d)for(l=Object.keys(g),h=0;h<l.length;h++)c.removeAttribute(l[h]);else{l=Object.keys(g);for(h=0;h<l.length;h++)m=
l[h],d.hasOwnProperty(m)?(k=d[m],g[m]!==k&&t(c,m,k)):c.removeAttribute(m);l=Object.keys(d);for(h=0;h<l.length;h++)m=l[h],g.hasOwnProperty(m)||t(c,m,d[m])}else if(null!==d)for(l=Object.keys(d),h=0;h<l.length;h++)m=l[h],t(c,m,d[m]);a.s!==b.s&&(g=null===b.s?"":b.s,0===(e&32768)?c.style.cssText=g:c.setAttribute("style",g));a.o!==b.o&&(g=null===b.o?"":b.o,0===(e&32768)?c.className=g:c.setAttribute("class",g))}else a.c!==b.c&&(0===(e&8)?a.i.w(c,a.c,b.c):f.u.i.w(c,a.c,b.c));if(0===(a.b&192)){if(a.f!==b.f)if(0===
(a.b&2048))if(e=a.f,b=b.f,c=0,h=!1,"string"===typeof e)if(null===b)a.a.removeChild(a.a.firstChild);else if("string"===typeof b)(f=a.a.firstChild)?f.nodeValue=b:a.a.textContent=b;else for(a.a.removeChild(a.a.firstChild);c<b.length;)F(a,b[c++],null,f);else if("string"===typeof b){if(null!==e)for(;c<e.length;)A(e[c++]);a.a.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)K(a,e);else if(1===e.length&&1===b.length)g=e[0],d=b[0],M(g,d)?L(g,d,f):I(a,d,g,f);else if(1===e.length){g=e[0];
if(0===(a.b&16))for(;c<b.length;){d=b[c++];if(M(g,d)){L(g,d,f);h=!0;break}F(a,d,g.a,f)}else for(;c<b.length;){d=b[c++];if(g.g===d.g){L(g,d,f);h=!0;break}F(a,d,g.a,f)}if(h)for(;c<b.length;)F(a,b[c++],null,f);else J(a,g)}else if(1===b.length){d=b[0];if(0===(a.b&16))for(;c<e.length;){if(g=e[c++],M(g,d)){L(g,d,f);h=!0;break}}else for(;c<e.length;)if(g=e[c++],g.g===d.g){L(g,d,f);h=!0;break}if(h){f=0;for(c--;f<c;)J(a,e[f++]);for(c++;c<e.length;)J(a,e[c++])}else K(a,e),F(a,d,null,f)}else if(0===(a.b&16)){c=
d=0;h=e.length-1;for(g=b.length-1;d<=h&&c<=g;){l=e[d];m=b[c];if(!M(l,m))break;d++;c++;L(l,m,f)}for(;d<=h&&c<=g;){l=e[h];m=b[g];if(!M(l,m))break;h--;g--;L(l,m,f)}for(;d<=h&&c<=g;)l=e[d++],m=b[c++],M(l,m)?L(l,m,f):I(a,m,l,f);if(d<=h){do J(a,e[d++]);while(d<=h)}else if(c<=g){e=g+1;e=e<b.length?b[e].a:null;do F(a,b[c++],e,f);while(c<=g)}}else{c=h=0;l=e.length-1;m=b.length-1;d=e[h];g=b[c];var k=e[l],n=b[m],p,G;a:for(;;){for(;d.g===g.g;){L(d,g,f);h++;c++;if(h>l||c>m)break a;d=e[h];g=b[c]}for(;k.g===n.g;){L(k,
n,f);l--;m--;if(h>l||c>m)break a;k=e[l];n=b[m]}if(d.g===n.g){L(d,n,f);d=m+1;d=d<b.length?b[d].a:null;a.a.insertBefore(n.a,d);h++;m--;if(h>l||c>m)break;d=e[h];n=b[m]}else if(k.g===g.g){L(k,g,f);a.a.insertBefore(g.a,d.a);l--;c++;if(h>l||c>m)break;k=e[l];g=b[c]}else break}if(h>l)for(d=m+1,d=d<b.length?b[d].a:null;c<=m;)F(a,b[c++],d,f);else if(c>m)for(;h<=l;)J(a,e[h++]);else{var O=l-h+1,d=m-c+1;g=Array(d);for(k=0;k<d;k++)g[k]=-1;var P=!1,r=0,z=0;if(4>=d||16>=O*d)for(k=h;k<=l;k++){if(p=e[k],z<d)for(n=
c;n<=m;n++)if(G=b[n],p.g===G.g){g[n-c]=k;r>n?P=!0:r=n;L(p,G,f);z++;e[k]=null;break}}else{for(var W=new Map,k=c;k<=m;k++)p=b[k],W.set(p.g,k);for(k=h;k<=l;k++)p=e[k],z<d&&(n=W.get(p.g),void 0!==n&&(G=b[n],g[n-c]=k,r>n?P=!0:r=n,L(p,G,f),z++,e[k]=null))}if(O===e.length&&0===z)for(K(a,e);c<d;)F(a,b[c++],null,f);else{for(k=O-z;0<k;)p=e[h++],null!==p&&(J(a,p),k--);if(P){h=g.slice(0);e=[];e.push(0);l=0;for(m=g.length;l<m;l++)if(-1!==g[l])if(k=e[e.length-1],g[k]<g[l])h[l]=k,e.push(l);else{k=0;for(n=e.length-
1;k<n;)p=(k+n)/2|0,g[e[p]]<g[l]?k=p+1:n=p;g[l]<g[e[k]]&&(0<k&&(h[l]=e[k-1]),e[k]=l)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=h[n];n=e.length-1;for(k=d-1;0<=k;k--)-1===g[k]?(r=k+c,p=b[r],d=r+1,d=d<b.length?b[d].a:null,F(a,p,d,f)):0>n||k!==e[n]?(r=k+c,p=b[r],d=r+1,d=d<b.length?b[d].a:null,a.a.insertBefore(p.a,d)):n--}else if(z!==d)for(k=d-1;0<=k;k--)-1===g[k]&&(r=k+c,p=b[r],d=r+1,d=d<b.length?b[d].a:null,F(a,p,d,f))}}}else{if(null!==b&&0<b.length)for(c=0;c<b.length;c++)F(a,b[c],null,f)}else c.innerHTML=
b.f}else 0!==(e&64)?c.value!==b.f&&(c.value=b.f):c.checked!==b.f&&(c.checked=b.f)}else f=b.j=a.j,0!==(e&1024)&&a.c===b.c||H(f,0===(e&512)?b.c:void 0)}function M(a,b){return a.b===b.b&&a.i===b.i&&a.g===b.g}function N(){this.v=4;this.b=0;this.i="div";this.I=this.H=this.D=this.A=this.w=this.J=null}N.prototype.tagName=function(a){this.i=a;"string"!==typeof a&&(this.v|=a.v,this.b|=a.v);return this};N.prototype.canvas=function(){this.v|=65536;this.b|=65536;this.i="canvas";return this};
N.prototype.init=function(a){this.A=a;return this};N.prototype.update=function(a){this.w=a;return this};function Q(a,b){return new u(1028,a,void 0===b?null:b)}function D(a,b,f){var c;c=0===(a.b&131072)?0===(a.b&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new R(a.v,a,c,b,f);0!==(a.b&1)&&(c.L=b);null!==a.A&&a.A(b,b.props);return b}
function R(a,b,f,c,e){this.h=a;this.K=0;this.u=b;this.element=f;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.m=0===(a&65536)?null:f.getContext("2d");this.C=this.B=null}function S(a){return 0===(a.h&131072)?new u(8,null,null):S(a.u.i)}R.prototype.update=function(a){H(this,a)};function T(a,b){null===a.m?(b.j=a,b.a=a.element,E(b,a)):L(a.m,b,a);a.m=b}function x(a){U(a);null!==a.m&&0===(a.h&65536)&&w(a.m)}
R.prototype.detach=function(){null!==this.m&&0===(this.h&65536)&&y(this.m);B(this)};R.prototype.subscribe=function(a){return a.M(this)};function H(a,b){if(void 0!==b&&0===(a.h&512)){var f=a.props,c=a.u.J;null!==c?c(a,f,b):0===(a.h&4)&&(a.h|=4,V(a));a.props=b}6===(a.h&6)&&(a.u.w(a,a.props,a.state),a.K=X,a.h&=-133)}function U(a){a.h|=2;var b=a.u.D;null!==b&&b(a,a.props,a.state)}function B(a){a.h&=-19;for(var b=a.B;null!==b;)b.F(),b=b.G;a.B=null;V(a);b=a.u.H;null!==b&&b(a,a.props,a.state)}
function V(a){for(var b=a.C;null!==b;)b.F(),b=b.G;a.C=null}function aa(){var a=document.querySelector("#App"),b=D(ba,void 0,null);a.appendChild(b.element);U(b);H(b);return b}var X=0,Y=[],Z=[],ca=document.createTextNode(""),da="__kivi"+Math.random();(new MutationObserver(ea)).observe(ca,{characterData:!0});window.addEventListener("message",fa);function fa(a){if(a.source===window&&a.data===da){a=Z;Z=[];for(var b=0;b<a.length;b++)a[b]();X++}}
function ea(){for(;0<Y.length;){var a=Y;Y=[];for(var b=0;b<a.length;b++)a[b]();X++}}
var ga=(new N).tagName("td").init(function(a,b){a.element.addEventListener("click",function(a){console.log("Click",b);a.stopPropagation()})}).update(function(a,b){T(a,S(a).className("TableCell").children(b))}),ha=(new N).tagName("tr").update(function(a,b){for(var f=b.props,c="#"+b.id,c=[new u(4,ga,void 0===c?null:c)],e=0;e<f.length;e++)c.push(Q(ga,f[e]));f=S(a);f.l={"data-id":b.id};T(a,f.className(b.active?"TableRow active":"TableRow").children(c))}),ia=(new N).tagName("table").update(function(a,
b){T(a,S(a).className("Table").children([v(new u(2,"tbody",null),b.items.map(function(a){return Q(ha,a).key(a.id)}))]))}),ja=(new N).update(function(a,b){var f=b.time,c=S(a).className("AnimBox");c.l={"data-id":""+b.id};T(a,c.style("border-radius:"+f%10+"px;background:rgba(0,0,0,"+(.5+f%10/10)+")"))}),ka=(new N).update(function(a,b){T(a,v(S(a).className("Anim"),b.items.map(function(a){return Q(ja,a).key(a.id)})))}),la=(new N).tagName("li").update(function(a,b){T(a,S(a).className("TreeLeaf").children(""+
b.id))}),ma=(new N).tagName("ul").update(function(a,b){T(a,v(S(a).className("TreeNode"),b.children.map(function(a){return a.container?Q(ma,a).key(a.id):Q(la,a).key(a.id)})))}),na=(new N).update(function(a,b){T(a,S(a).className("Tree").children([Q(ma,b.root)]))}),ba=(new N).update(function(a,b){var f=b&&b.location,c=null;"table"===f?c=[Q(ia,b.table)]:"anim"===f?c=[Q(ka,b.anim)]:"tree"===f&&(c=[Q(na,b.tree)]);T(a,S(a).className("Main").children(c))});uibench.init("kivi[simple]","1.0.0");
document.addEventListener("DOMContentLoaded",function(){var a=aa();uibench.run(function(b){a.update(b)},function(b){document.body.innerHTML="<pre>"+JSON.stringify(b,null," ")+"</pre>";a=null})});}).call();