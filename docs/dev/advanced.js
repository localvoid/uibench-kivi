(function(){'use strict';var q;function t(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function u(a,b,d){this.a=a;this.h=b;this.f=null;this.c=d;this.s=this.b=this.g=this.l=this.m=this.j=null}q=u.prototype;q.key=function(a){this.f=a;return this};q.props=function(a){this.c=a;return this};
q.data=function(a){this.c=a;return this};q.style=function(a){this.m=a;return this};q.className=function(a){this.l=a;return this};q.children=function(a){this.a|=16;this.g=a;return this};function v(a,b){a.a|=48;a.g=b;return a}q.value=function(a){this.a|=128;this.g=a;return this};q.checked=function(a){this.a|=256;this.g=a;return this};function w(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)w(a[b])}else x(a.s)}
function y(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)y(a[b])}else a.s.detach()}function A(a){if(0===(a.a&512))if(0!==(a.a&4)){a=a.s;a.i|=1;null!==a.u&&0===(a.i&65536)&&A(a.u);0!==(a.i&2)&&B(a);var b=a.v.M;null!==b&&b(a,a.props,a.state)}else{if(null!==a.g&&(a=a.g,"string"!==typeof a))for(b=0;b<a.length;b++)A(a[b])}else y(a)}
function C(a,b){var d=a.a;0!==(d&1)?a.b=document.createTextNode(a.c):0!==(d&2)?a.b=0===(d&131072)?0===(d&32768)?document.createElement(a.h):document.createElementNS("http://www.w3.org/2000/svg",a.h):a.h.createElement():0===(d&512)&&(b=D(a.h,b,a.c),a.b=b.element,a.s=b)}
function F(a,b){var d,c,e,l,f=a.a,k;if(0!==(f&10)){k=a.b;if(0===(f&262144)){var h=a.c;if(null!==h)for(l=Object.keys(h),d=0,c=l.length;d<c;d++)e=l[d],k[e]=h[e];if(null!==a.j)for(l=Object.keys(a.j),d=0,c=l.length;d<c;d++)e=l[d],t(k,e,a.j[e]);null!==a.m&&(0===(f&32768)?k.style.cssText=a.m:k.setAttribute("style",a.m));null!==a.l&&(0===(f&32768)?k.className=a.l:k.setAttribute("class",a.l))}else 0===(f&8)?a.h.w(k,void 0,a.c):b.v.h.w(k,void 0,a.c);e=a.g;if(null!==e)if(0===(f&4096))if(0===(f&384))if(0===
(f&16))"string"===typeof e?k.textContent=e:G(a,e,null,b);else for(d=0,c=e.length;d<c;d++)G(a,e[d],null,b);else 0!==(a.a&128)?a.b.value=a.g:a.b.checked=a.g;else k.innerHTML=e}else 0!==(f&4)&&H(a.s)}function G(a,b,d,c){a=a.b;null===b.b?(C(b,c),0!==(b.a&4)&&x(b.s),F(b,c),a.insertBefore(b.b,d)):(a.insertBefore(b.b,d),w(b),H(b.s,0===(b.a&1024)?b.c:null))}
function I(a,b,d,c){a=a.b;null===b.b?(C(b,c),0!==(b.a&4)&&x(b.s),F(b,c),a.replaceChild(b.b,d.b)):(a.replaceChild(b.b,d.b),w(b),H(b.s,0===(b.a&1024)?b.c:null));A(d)}function J(a,b){a.b.removeChild(b.b);A(b)}function K(a,b){a.b.textContent="";for(a=0;a<b.length;a++)A(b[a])}
function L(a,b,d){var c=a.b,e=a.a,l;b.b=a.b;if(0!==(e&1))a.c!==b.c&&(a.b.nodeValue=b.c);else if(0!==(e&10)){if(0===(e&262144)){if(a.c!==b.c){l=a.c;var f=b.c,k=Object.keys(l),h,m;for(m=0;m<k.length;m++){h=k[m];var g=f[h];l[h]!==g&&(c[h]=g)}}if(a.j!==b.j)if(0===(a.a&64))for(l=a.j,f=b.j,k=Object.keys(l),m=0;m<k.length;m++)h=k[m],g=f[h],l[h]!==g&&t(c,h,g);else if(l=a.j,f=b.j,null!==l)if(null===f)for(h=Object.keys(l),k=0;k<h.length;k++)c.removeAttribute(h[k]);else{h=Object.keys(l);for(k=0;k<h.length;k++)m=
h[k],f.hasOwnProperty(m)?(g=f[m],l[m]!==g&&t(c,m,g)):c.removeAttribute(m);h=Object.keys(f);for(k=0;k<h.length;k++)m=h[k],l.hasOwnProperty(m)||t(c,m,f[m])}else if(null!==f)for(h=Object.keys(f),k=0;k<h.length;k++)m=h[k],t(c,m,f[m]);a.m!==b.m&&(l=null===b.m?"":b.m,0===(e&32768)?c.style.cssText=l:c.setAttribute("style",l));a.l!==b.l&&(l=null===b.l?"":b.l,0===(e&32768)?c.className=l:c.setAttribute("class",l))}else a.c!==b.c&&(0===(e&8)?a.h.w(c,a.c,b.c):d.v.h.w(c,a.c,b.c));if(0===(a.a&384)){if(a.g!==b.g)if(0===
(a.a&4096))if(c=a.g,b=b.g,0===(a.a&16))null===c?"string"===typeof b?a.b.textContent=b:G(a,b,null,d):null===b?"string"===typeof c?a.b.textContent="":J(a,c):"string"===typeof c?"string"===typeof b?(d=a.b.firstChild)?d.nodeValue=b:a.b.textContent=b:(a.b.textContent="",G(a,b,null,d)):"string"===typeof b?(a.b.textContent=b,A(c)):M(c,b)&&c.f===b.f?L(c,b,d):I(a,b,c,d);else if(null!==c&&0!==c.length)if(null===b||0===b.length)K(a,c);else if(1===c.length&&1===b.length)e=c[0],b=b[0],M(e,b)&&e.f===b.f?L(e,b,
d):I(a,b,e,d);else if(0===(a.a&32)){e=f=0;k=c.length-1;for(l=b.length-1;f<=k&&e<=l;){h=c[f];m=b[e];if(!M(h,m)||h.f!==m.f)break;f++;e++;L(h,m,d)}for(;f<=k&&e<=l;){h=c[k];m=b[l];if(!M(h,m)||h.f!==m.f)break;k--;l--;L(h,m,d)}for(;f<=k&&e<=l;)h=c[f++],m=b[e++],M(h,m)&&h.f===m.f?L(h,m,d):I(a,m,h,d);if(f<=k){do J(a,c[f++]);while(f<=k)}else if(e<=l){c=l+1;c=c<b.length?b[c].b:null;do G(a,b[e++],c,d);while(e<=l)}}else{e=k=0;h=c.length-1;m=b.length-1;f=c[k];l=b[e];var g=c[h],n=b[m],p,z;a:for(;;){for(;f.f===
l.f;){M(f,l)?L(f,l,d):I(a,l,f,d);k++;e++;if(k>h||e>m)break a;f=c[k];l=b[e]}for(;g.f===n.f;){M(g,n)?L(g,n,d):I(a,n,g,d);h--;m--;if(k>h||e>m)break a;g=c[h];n=b[m]}if(g.f===l.f){M(g,l)?L(g,l,d):I(a,l,g,d);a.b.insertBefore(l.b,f.b);h--;e++;if(k>h||e>m)break;g=c[h];l=b[e]}else if(f.f===n.f){M(f,n)?L(f,n,d):I(a,n,f,d);f=m+1;f=f<b.length?b[f].b:null;a.b.insertBefore(n.b,f);k++;m--;if(k>h||e>m)break;f=c[k];n=b[m]}else break}if(k>h)for(f=m+1,f=f<b.length?b[f].b:null;e<=m;)G(a,b[e++],f,d);else if(e>m)for(;k<=
h;)J(a,c[k++]);else{var R=h-k+1,f=m-e+1;l=Array(f).fill(-1);var S=!1,r=0,E=0;if(4>=f||16>=R*f)for(g=k;g<=h;g++){if(p=c[g],E<f)for(n=e;n<=m;n++)if(z=b[n],p.f===z.f){l[n-e]=g;r>n?S=!0:r=n;M(p,z)?L(p,z,d):I(a,z,p,d);E++;c[g]=null;break}}else{for(var aa=new Map,g=e;g<=m;g++)p=b[g],aa.set(p.f,g);for(g=k;g<=h;g++)p=c[g],E<f&&(n=aa.get(p.f),void 0!==n&&(z=b[n],l[n-e]=g,r>n?S=!0:r=n,M(p,z)?L(p,z,d):I(a,z,p,d),E++,c[g]=null))}if(R===c.length&&0===E)for(K(a,c);e<f;)G(a,b[e++],null,d);else{for(g=R-E;0<g;)p=
c[k++],null!==p&&(J(a,p),g--);if(S){k=l.slice(0);c=[];c.push(0);h=0;for(m=l.length;h<m;h++)if(-1!==l[h])if(g=c[c.length-1],l[g]<l[h])k[h]=g,c.push(h);else{g=0;for(n=c.length-1;g<n;)p=(g+n)/2|0,l[c[p]]<l[h]?g=p+1:n=p;l[h]<l[c[g]]&&(0<g&&(k[h]=c[g-1]),c[g]=h)}g=c.length;for(n=c[g-1];0<g--;)c[g]=n,n=k[n];n=c.length-1;for(g=f-1;0<=g;g--)-1===l[g]?(r=g+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,G(a,p,f,d)):0>n||g!==c[n]?(r=g+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,a.b.insertBefore(p.b,f)):n--}else if(E!==
f)for(g=f-1;0<=g;g--)-1===l[g]&&(r=g+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,G(a,p,f,d))}}}else{if(null!==b)for(e=0;e<b.length;e++)G(a,b[e],null,d)}else c.innerHTML=b.g}else 0!==(e&128)?c.value!==b.g&&(c.value=b.g):c.checked!==b.g&&(c.checked=b.g)}else d=b.s=a.s,0!==(e&2048)&&a.c===b.c||H(d,0===(e&1024)?b.c:void 0)}function M(a,b){return a.a===b.a&&a.h===b.h}function N(){this.o=4;this.B=8;this.a=0;this.h="div";this.M=this.L=this.I=this.A=this.w=this.N=null}q=N.prototype;
q.tagName=function(a){this.h=a;"string"!==typeof a&&(this.o|=a.o,this.B|=a.o,this.a|=a.o);return this};q.canvas=function(){this.o|=65536;this.a|=65536;this.h="canvas";return this};q.init=function(a){this.A=a;return this};q.update=function(a){this.w=a;return this};q.H=function(a){return new u(4,this,void 0===a?null:a)};function O(a,b){return new u(2052,a,void 0===b?null:b)}
function D(a,b,d){var c;c=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.h):document.createElementNS("http://www.w3.org/2000/svg",a.h):a.h.createElement();b=new P(a.o,a,c,b,d);0!==(a.a&1)&&(c.O=b);null!==a.A&&a.A(b,b.props);return b}function P(a,b,d,c,e){this.i=a;this.P=0;this.v=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.u=0===(a&65536)?null:d.getContext("2d");this.G=this.D=null}function Q(a){return new u(a.v.B,a.v.h,null)}
P.prototype.update=function(a){H(this,a)};function T(a,b){null===a.u?(b.s=a,b.b=a.element,F(b,a)):L(a.u,b,a);a.u=b}function x(a){ba(a);null!==a.u&&0===(a.i&65536)&&w(a.u)}P.prototype.detach=function(){null!==this.u&&0===(this.i&65536)&&y(this.u);B(this)};P.prototype.subscribe=function(a){return a.S(this)};function H(a,b){if(void 0!==b&&0===(a.i&512)){var d=a.props,c=a.v.N;null!==c?c(a,d,b):0===(a.i&4)&&(a.i|=4,ca(a));a.props=b}6===(a.i&6)&&(a.v.w(a,a.props,a.state),a.P=U,a.i&=-133)}
function ba(a){a.i|=2;var b=a.v.I;null!==b&&b(a,a.props,a.state)}function B(a){a.i&=-19;for(var b=a.D;null!==b;)b.J(),b=b.K;a.D=null;ca(a);b=a.v.L;null!==b&&b(a,a.props,a.state)}function ca(a){for(var b=a.G;null!==b;)b.J(),b=b.K;a.G=null}function da(a){var b=D(ea,void 0,null);a.appendChild(b.element);ba(b);H(b);return b}var U=0,V=[],fa=[],ga=document.createTextNode(""),ha="__kivi"+Math.random();(new MutationObserver(ia)).observe(ga,{characterData:!0});window.addEventListener("message",ja);
function ja(a){if(a.source===window&&a.data===ha){a=fa;fa=[];for(var b=0;b<a.length;b++)a[b]();U++}}function ia(){for(;0<V.length;){var a=V;V=[];for(var b=0;b<a.length;b++)a[b]();U++}}function W(a){this.o=131072;this.a=0;this.F=a;this.C=this.w=this.l=this.m=this.j=this.c=null}q=W.prototype;q.props=function(a){this.c=a;return this};q.style=function(a){this.m=a;return this};q.className=function(a){this.l=a;return this};function X(a){a.a|=1;return a}q.update=function(a){this.o|=262144;this.w=a;return this};
q.H=function(a){return new u(2|this.o,this,void 0===a?null:a)};
q.createElement=function(){var a,b,d,c=this.C;if(null===c){c=0===(this.a&32768)?document.createElement(this.F):document.createElementNS("http://www.w3.org/2000/svg",this.F);if(null!==this.c)for(b=Object.keys(this.c),a=0;a<b.length;a++)d=b[a],c[d]=this.c[d];if(null!==this.j)for(b=Object.keys(this.j),a=0;a<b.length;a++)d=b[a],t(c,d,this.j[d]);null!==this.m&&(0===(this.a&32768)?c.style.cssText=this.m:c.setAttribute("style",this.m));null!==this.l&&(0===(this.a&32768)?c.className=this.l:c.setAttribute("class",
this.l));return 0!==(this.a&1)?(this.C=c,c.cloneNode(!1)):c}return c.cloneNode(!1)};var Y=new N;Y.a|=1;
var Z=Y.tagName(X(new W("td")).className("TableCell")).update(function(a,b){var d=Q(a);d.g=b;T(a,d)}),ka=function(a){Z.a|=1;return function(b,d){if(void 0===d||!d.R()){var c;a:{c=b.target;for(var e=b.currentTarget,e=void 0===e?null:e;c!==e;){if(c.matches(".TableCell"))break a;c=c.parentNode}c=null}null!==c&&(e=c.O,a(b,e,e.props,e.state,c,d))}}}(function(a,b,d){console.log("Click",d);a.stopPropagation()}),la=(new N).tagName(X(new W("tr")).update(function(a,b,d){void 0===b?(a.className=d.active?"TableRow active":
"TableRow",a.setAttribute("data-id",""+d.id)):b.active!==d.active&&(a.className=d.active?"TableRow active":"TableRow")})).init(function(a){a.element.onclick=ka}).update(function(a,b){var d=b.props,c=Array(d.length+1);c[0]=Z.H("#"+b.id);for(var e=0;e<d.length;e++)c[e+1]=O(Z,d[e]);T(a,Q(a).data(b).children(c))}),ma=(new N).tagName(X(new W("table")).className("Table")).update(function(a,b){b=b.items;for(var d=Array(b.length),c=0;c<b.length;c++){var e=b[c];d[c]=O(la,e).key(e.id)}T(a,Q(a).children([v(new u(2,
"tbody",null),d)]))});function na(a){return"border-radius:"+a%10+"px;background:rgba(0,0,0,"+(.5+a%10/10)+")"}
var oa=(new N).tagName(X(new W("div")).className("AnimBox").update(function(a,b,d){void 0===b?(a.setAttribute("data-id",""+d.id),a.style.cssText=na(d.time)):b.time!==d.time&&(a.style.cssText=na(d.time))})).update(function(a,b){T(a,Q(a).data(b))}),pa=(new N).tagName(X(new W("div")).className("Anim")).update(function(a,b){b=b.items;for(var d=Array(b.length),c=0;c<b.length;c++){var e=b[c];d[c]=O(oa,e).key(e.id)}T(a,v(Q(a),d))}),qa=(new N).tagName(X(new W("li")).className("TreeLeaf")).update(function(a,
b){var d=Q(a);d.g=""+b.id;T(a,d)}),ra=(new N).tagName(X(new W("ul")).className("TreeNode")).update(function(a,b){for(var d=Array(b.children.length),c=0;c<b.children.length;c++){var e=b.children[c];d[c]=(e.container?O(ra,e):O(qa,e)).key(e.id)}T(a,v(Q(a),d))}),sa=(new N).tagName(X(new W("div")).className("Tree")).update(function(a,b){T(a,Q(a).children([O(ra,b.root)]))}),ea=(new N).tagName((new W("div")).className("Main")).update(function(a,b){var d=b&&b.location,c=null;"table"===d?c=[O(ma,b.table)]:
"anim"===d?c=[O(pa,b.anim)]:"tree"===d&&(c=[O(sa,b.tree)]);T(a,Q(a).children(c))});uibench.init("kivi[adv]","1.0.0");document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App"),b=da(a);uibench.run(function(a){b.update(a)},function(d){a.innerHTML="<pre>"+JSON.stringify(d,null," ")+"</pre>";b=null})});}).call(window);
