(function(){'use strict';var q;function t(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function u(a,b,d){this.a=a;this.i=b;this.h=null;this.f=d;this.j=this.b=this.g=this.o=this.s=this.l=null}q=u.prototype;q.key=function(a){this.h=a;return this};q.props=function(a){this.f=a;return this};
q.data=function(a){this.f=a;return this};q.style=function(a){this.s=a;return this};q.className=function(a){this.o=a;return this};q.children=function(a){this.g=a;return this};function v(a,b){a.a|=16;a.g=b;return a}q.value=function(a){this.a|=64;this.g=a;return this};q.checked=function(a){this.a|=128;this.g=a;return this};function w(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)w(a[b])}else x(a.j)}
function y(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)y(a[b])}else a.j.detach()}function z(a){if(0===(a.a&256))if(0!==(a.a&4)){a=a.j;a.c|=1;null!==a.m&&0===(a.c&65536)&&z(a.m);0!==(a.c&2)&&aa(a);var b=a.u.O;null!==b&&b(a,a.props,a.state)}else{if(null!==a.g&&(a=a.g,"string"!==typeof a))for(b=0;b<a.length;b++)z(a[b])}else y(a)}
function ba(a,b){var d=a.a;0!==(d&1)?a.b=document.createTextNode(a.f):0!==(d&2)?a.b=0===(d&131072)?0===(d&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(d&256)&&(b=ca(a.i,b,a.f),a.b=b.element,a.j=b)}
function A(a,b){var d,c,e,g,f=a.a,h;if(0!==(f&10)){h=a.b;if(0===(f&262144)){var l=a.f;if(null!==l)for(g=Object.keys(l),d=0,c=g.length;d<c;d++)e=g[d],h[e]=l[e];if(null!==a.l)for(g=Object.keys(a.l),d=0,c=g.length;d<c;d++)e=g[d],t(h,e,a.l[e]);null!==a.s&&(0===(f&32768)?h.style.cssText=a.s:h.setAttribute("style",a.s));null!==a.o&&(0===(f&32768)?h.className=a.o:h.setAttribute("class",a.o))}else 0===(f&8)?a.i.A(h,void 0,a.f):b.u.i.A(h,void 0,a.f);e=a.g;if(null!==e)if(0===(a.a&2048))if(0===(a.a&192))if("string"===
typeof e)h.textContent=e;else for(d=0,c=e.length;d<c;d++)B(a,e[d],null,b);else 0!==(a.a&64)?a.b.value=a.g:a.b.checked=a.g;else h.innerHTML=e}else 0!==(f&4)&&D(a.j)}function B(a,b,d,c){a=a.b;null===b.b?(ba(b,c),0!==(b.a&4)&&x(b.j),A(b,c),a.insertBefore(b.b,d)):(a.insertBefore(b.b,d),w(b),D(b.j,0===(b.a&512)?b.f:null))}function da(a,b,d,c){a=a.b;null===b.b?(ba(b,c),0!==(b.a&4)&&x(b.j),A(b,c),a.replaceChild(b.b,d.b)):(a.replaceChild(b.b,d.b),w(b),D(b.j,0===(b.a&512)?b.f:null));z(d)}
function E(a,b){a.b.removeChild(b.b);z(b)}function F(a,b){a.b.textContent="";for(a=0;a<b.length;a++)z(b[a])}
function G(a,b,d){var c=a.b,e=a.a,g;b.b=a.b;if(0!==(e&1))a.f!==b.f&&(a.b.nodeValue=b.f);else if(0!==(e&10)){if(0===(e&262144)){if(a.f!==b.f){g=a.f;var f=b.f,h=Object.keys(g),l,m;for(m=0;m<h.length;m++){l=h[m];var k=f[l];g[l]!==k&&(c[l]=k)}}if(a.l!==b.l)if(0===(a.a&32))for(g=a.l,f=b.l,h=Object.keys(g),m=0;m<h.length;m++)l=h[m],k=f[l],g[l]!==k&&t(c,l,k);else if(g=a.l,f=b.l,null!==g)if(null===f)for(l=Object.keys(g),h=0;h<l.length;h++)c.removeAttribute(l[h]);else{l=Object.keys(g);for(h=0;h<l.length;h++)m=
l[h],f.hasOwnProperty(m)?(k=f[m],g[m]!==k&&t(c,m,k)):c.removeAttribute(m);l=Object.keys(f);for(h=0;h<l.length;h++)m=l[h],g.hasOwnProperty(m)||t(c,m,f[m])}else if(null!==f)for(l=Object.keys(f),h=0;h<l.length;h++)m=l[h],t(c,m,f[m]);a.s!==b.s&&(g=null===b.s?"":b.s,0===(e&32768)?c.style.cssText=g:c.setAttribute("style",g));a.o!==b.o&&(g=null===b.o?"":b.o,0===(e&32768)?c.className=g:c.setAttribute("class",g))}else a.f!==b.f&&(0===(e&8)?a.i.A(c,a.f,b.f):d.u.i.A(c,a.f,b.f));if(0===(a.a&192)){if(a.g!==b.g)if(0===
(a.a&2048))if(e=a.g,b=b.g,c=0,h=!1,"string"===typeof e)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)(d=a.b.firstChild)?d.nodeValue=b:a.b.textContent=b;else for(a.b.removeChild(a.b.firstChild);c<b.length;)B(a,b[c++],null,d);else if("string"===typeof b){if(null!==e)for(;c<e.length;)z(e[c++]);a.b.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)F(a,e);else if(1===e.length&&1===b.length)g=e[0],f=b[0],H(g,f)?G(g,f,d):da(a,f,g,d);else if(1===e.length){g=
e[0];if(0===(a.a&16))for(;c<b.length;){f=b[c++];if(H(g,f)){G(g,f,d);h=!0;break}B(a,f,g.b,d)}else for(;c<b.length;){f=b[c++];if(g.h===f.h){G(g,f,d);h=!0;break}B(a,f,g.b,d)}if(h)for(;c<b.length;)B(a,b[c++],null,d);else E(a,g)}else if(1===b.length){f=b[0];if(0===(a.a&16))for(;c<e.length;){if(g=e[c++],H(g,f)){G(g,f,d);h=!0;break}}else for(;c<e.length;)if(g=e[c++],g.h===f.h){G(g,f,d);h=!0;break}if(h){d=0;for(c--;d<c;)E(a,e[d++]);for(c++;c<e.length;)E(a,e[c++])}else F(a,e),B(a,f,null,d)}else if(0===(a.a&
16)){c=f=0;h=e.length-1;for(g=b.length-1;f<=h&&c<=g;){l=e[f];m=b[c];if(!H(l,m))break;f++;c++;G(l,m,d)}for(;f<=h&&c<=g;){l=e[h];m=b[g];if(!H(l,m))break;h--;g--;G(l,m,d)}for(;f<=h&&c<=g;)l=e[f++],m=b[c++],H(l,m)?G(l,m,d):da(a,m,l,d);if(f<=h){do E(a,e[f++]);while(f<=h)}else if(c<=g){e=g+1;e=e<b.length?b[e].b:null;do B(a,b[c++],e,d);while(c<=g)}}else{c=h=0;l=e.length-1;m=b.length-1;f=e[h];g=b[c];var k=e[l],n=b[m],p,J;a:do{for(;f.h===g.h;){G(f,g,d);h++;c++;if(h>l||c>m)break a;f=e[h];g=b[c]}for(;k.h===
n.h;){G(k,n,d);l--;m--;if(h>l||c>m)break a;k=e[l];n=b[m]}if(f.h===n.h){G(f,n,d);f=m+1;f=f<b.length?b[f].b:null;a.b.insertBefore(n.b,f);h++;m--;if(h>l||c>m)break a;f=e[h];n=b[m];continue a}if(k.h===g.h){G(k,g,d);a.b.insertBefore(g.b,f.b);l--;c++;if(h>l||c>m)break a;k=e[l];g=b[c]}}while(0);if(h>l)for(f=m+1,f=f<b.length?b[f].b:null;c<=m;)B(a,b[c++],f,d);else if(c>m)for(;h<=l;)E(a,e[h++]);else{var V=l-h+1,f=m-c+1;g=Array(f);for(k=0;k<f;k++)g[k]=-1;var W=!1,r=0,C=0;if(4>=f||16>=V*f)for(k=h;k<=l;k++){if(p=
e[k],C<f)for(n=c;n<=m;n++)if(J=b[n],p.h===J.h){g[n-c]=k;r>n?W=!0:r=n;G(p,J,d);C++;e[k]=null;break}}else{for(var fa=new Map,k=c;k<=m;k++)p=b[k],fa.set(p.h,k);for(k=h;k<=l;k++)p=e[k],C<f&&(n=fa.get(p.h),void 0!==n&&(J=b[n],g[n-c]=k,r>n?W=!0:r=n,G(p,J,d),C++,e[k]=null))}if(V===e.length&&0===C)for(F(a,e);c<f;)B(a,b[c++],null,d);else{for(k=V-C;0<k;)p=e[h++],null!==p&&(E(a,p),k--);if(W){h=g.slice(0);e=[];e.push(0);l=0;for(m=g.length;l<m;l++)if(-1!==g[l])if(k=e[e.length-1],g[k]<g[l])h[l]=k,e.push(l);else{k=
0;for(n=e.length-1;k<n;)p=(k+n)/2|0,g[e[p]]<g[l]?k=p+1:n=p;g[l]<g[e[k]]&&(0<k&&(h[l]=e[k-1]),e[k]=l)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=h[n];n=e.length-1;for(k=f-1;0<=k;k--)-1===g[k]?(r=k+c,p=b[r],f=r+1,f=f<b.length?b[f].b:null,B(a,p,f,d)):0>n||k!==e[n]?(r=k+c,p=b[r],f=r+1,f=f<b.length?b[f].b:null,a.b.insertBefore(p.b,f)):n--}else if(C!==f)for(k=f-1;0<=k;k--)-1===g[k]&&(r=k+c,p=b[r],f=r+1,f=f<b.length?b[f].b:null,B(a,p,f,d))}}}else{if(null!==b&&0<b.length)for(c=0;c<b.length;c++)B(a,b[c],null,
d)}else c.innerHTML=b.g}else 0!==(e&64)?c.value!==b.g&&(c.value=b.g):c.checked!==b.g&&(c.checked=b.g)}else d=b.j=a.j,0!==(e&1024)&&a.f===b.f||D(d,0===(e&512)?b.f:void 0)}function H(a,b){return a.a===b.a&&a.i===b.i&&a.h===b.h}function I(){this.v=4;this.a=0;this.i="div";this.O=this.N=this.K=this.F=this.H=this.A=this.P=null}I.prototype.tagName=function(a){this.i=a;"string"!==typeof a&&(this.v|=a.v,this.a|=a.v);return this};I.prototype.canvas=function(){this.v|=65536;this.a|=65536;this.i="canvas";return this};
I.prototype.init=function(a){this.F=a;return this};I.prototype.update=function(a){this.A=a;return this};function K(a,b){return new u(1028,a,void 0===b?null:b)}function ca(a,b,d){var c;c=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new L(a.v,a,c,b,d);0!==(a.a&1)&&(c.T=b);null!==a.H&&(b.state=a.H(b,b.props));null!==a.F&&a.F(b,b.props,b.state);return b}
function L(a,b,d,c,e){this.c=a;this.R=0;this.u=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.m=0===(a&65536)?null:d.getContext("2d");this.J=this.I=null}function M(a){return 0===(a.c&131072)?new u(8,null,null):M(a.u.i)}L.prototype.update=function(a){D(this,a)};function N(a,b){null===a.m?(b.j=a,b.b=a.element,A(b,a)):G(a.m,b,a);a.m=b}function x(a){ea(a);null!==a.m&&0===(a.c&65536)&&w(a.m)}
L.prototype.detach=function(){null!==this.m&&0===(this.c&65536)&&y(this.m);aa(this)};L.prototype.subscribe=function(a){return a.S(this)};function D(a,b){if(void 0!==b&&0===(a.c&1024)){var d=a.props,c=a.u.P;null!==c?c(a,d,b):0===(a.c&4)&&(a.c|=4,ga(a));a.props=b}if(6===(a.c&6))if(0===(O&8)||0!==(O&32)||0!==(a.c&256)||0<ha())a.u.A(a,a.props,a.state),a.R=P,a.c&=-133;else if(Q(),b=R,0===(a.c&128)){a.c|=128;d=a.depth;for(b.a|=1;d>=b.B.length;)b.B.push(null);c=b.B[d];null===c?b.B[d]=[a]:c.push(a)}}
function ea(a){a.c|=2;var b=a.u.K;null!==b&&b(a,a.props,a.state)}function aa(a){0!==(a.c&512)&&(ia--,0===ia&&(O&=-9,S=0));a.c&=-531;for(var b=a.I;null!==b;)b.L(),b=b.M;a.I=null;ga(a);b=a.u.N;null!==b&&b(a,a.props,a.state)}function ga(a){for(var b=a.J;null!==b;)b.L(),b=b.M;a.J=null}function ja(){var a=document.querySelector("#App"),b=ca(ka,void 0,null);a.appendChild(b.element);ea(b);D(b);return b}function T(){this.a=0;this.B=[];this.w=this.G=this.C=this.D=null}
T.prototype.write=function(a){this.a|=2;null===this.D&&(this.D=[]);this.D.push(a)};T.prototype.read=function(a){this.a|=4;null===this.C&&(this.C=[]);this.C.push(a)};T.prototype.focus=function(a){this.w=a};var O=0,P=0,U=[],la=[],ma=new T,R=new T,X=[],na=document.createTextNode(""),oa="__kivi"+Math.random(),ia=0,Y=6,pa=60,Z=0,qa=0,S=0;(new MutationObserver(ra)).observe(na,{characterData:!0});window.addEventListener("message",sa);function Q(){0===(O&4)&&(O|=4,requestAnimationFrame(ta))}
function sa(a){if(a.source===window&&a.data===oa){O&=-3;a=la;la=[];for(var b=0;b<a.length;b++)a[b]();P++}}
function ta(a){var b;O&=-21;0!==(O&8)&&(0<S&&(pa+=.0165*(1E3/(a-S)-pa),Z+=55>pa?-1:1,5<Z?(Z=0,Y+=.1):-5>Z&&(Z=0,Y*=.66),6<Y?Y=6:2>Y&&(Y=2)),S=a,qa=a+Y,Q());var d=R;R=ma;ma=d;for(a=0;a<X.length;a++)X[a].c|=4;do{for(;0!==(d.a&4);)for(d.a&=-5,b=d.C,d.C=null,a=0;a<b.length;a++)b[a]();for(;0!==(d.a&3);){if(0!==(d.a&1)){d.a&=-2;var c=d.B;for(a=0;a<c.length;a++){var e=c[a];if(null!==e)for(c[a]=null,b=0;b<e.length;b++)D(e[b])}}if(0!==(d.a&2))for(d.a&=-3,b=d.D,d.D=null,a=0;a<b.length;a++)b[a]()}a=0;for(b=
X.length;a<b;)c=X[a++],0===(c.c&16)?(c.c&=-33,a===b?X.pop():X[--a]=X.pop()):D(c)}while(0!==(d.a&7));for(;0!==(d.a&8);)for(d.a&=-9,b=d.G,d.G=null,a=0;a<b.length;a++)b[a]();null!==d.w&&(d.w.constructor===u?d.w.b.focus():d.w.focus(),d.w=null);0<X.length&&Q();P++}function ra(){for(;0<U.length;){var a=U;U=[];for(var b=0;b<a.length;b++)a[b]();P++}O&=-2}function ha(){if(0!==(O&16))return 0;var a=qa-performance.now();return 0>=a?(O|=16,0):a}
var ua=(new I).tagName("td").init(function(a,b){a.element.addEventListener("click",function(a){console.log("Click",b);a.stopPropagation()})}).update(function(a,b){N(a,M(a).className("TableCell").children(b))}),va=(new I).tagName("tr").update(function(a,b){for(var d=b.props,c="#"+b.id,c=[new u(4,ua,void 0===c?null:c)],e=0;e<d.length;e++)c.push(K(ua,d[e]));d=M(a);d.l={"data-id":b.id};N(a,d.className(b.active?"TableRow active":"TableRow").children(c))}),wa=(new I).tagName("table").update(function(a,
b){N(a,M(a).className("Table").children([v(new u(2,"tbody",null),b.items.map(function(a){return K(va,a).key(a.id)}))]))}),xa=(new I).update(function(a,b){var d=b.time,c=M(a).className("AnimBox");c.l={"data-id":""+b.id};N(a,c.style("border-radius:"+d%10+"px;background:rgba(0,0,0,"+(.5+d%10/10)+")"))}),ya=(new I).update(function(a,b){N(a,v(M(a).className("Anim"),b.items.map(function(a){return K(xa,a).key(a.id)})))}),za=(new I).tagName("li").update(function(a,b){N(a,M(a).className("TreeLeaf").children(""+
b.id))}),Aa=(new I).tagName("ul").update(function(a,b){N(a,v(M(a).className("TreeNode"),b.children.map(function(a){return a.container?K(Aa,a).key(a.id):K(za,a).key(a.id)})))}),Ba=(new I).update(function(a,b){N(a,M(a).className("Tree").children([K(Aa,b.root)]))}),ka=(new I).update(function(a,b){var d=b&&b.location,c=null;"table"===d?c=[K(wa,b.table)]:"anim"===d?c=[K(ya,b.anim)]:"tree"===d&&(c=[K(Ba,b.tree)]);N(a,M(a).className("Main").children(c))});uibench.init("kivi[simple]","0.11.0");
document.addEventListener("DOMContentLoaded",function(){var a=ja();uibench.run(function(b){a.update(b)},function(b){document.body.innerHTML="<pre>"+JSON.stringify(b,null," ")+"</pre>";a=null})});}).call();