(function(){'use strict';var q;function r(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function t(a,b,d){this.a=a;this.i=b;this.h=null;this.f=d;this.l=this.b=this.g=this.j=this.s=this.m=null}q=t.prototype;q.key=function(a){this.h=a;return this};q.props=function(a){this.f=a;return this};
q.data=function(a){this.f=a;return this};q.style=function(a){this.s=a;return this};q.className=function(a){this.j=a;return this};q.children=function(a){this.g=a;return this};function u(a,b){a.a|=16;a.g=b;return a}q.value=function(a){this.a|=64;this.g=a;return this};q.checked=function(a){this.a|=128;this.g=a;return this};function v(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)v(a[b])}else w(a.l)}
function x(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)x(a[b])}else a.l.detach()}function y(a){if(0===(a.a&256))if(0!==(a.a&4)){a=a.l;a.c|=1;null!==a.o&&0===(a.c&65536)&&y(a.o);0!==(a.c&2)&&z(a);var b=a.u.O;null!==b&&b(a,a.props,a.state)}else{if(null!==a.g&&(a=a.g,"string"!==typeof a))for(b=0;b<a.length;b++)y(a[b])}else x(a)}
function aa(a,b){var d=a.a;0!==(d&1)?a.b=document.createTextNode(a.f):0!==(d&2)?a.b=0===(d&131072)?0===(d&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(d&256)&&(b=ba(a.i,b,a.f),a.b=b.element,a.l=b)}
function A(a,b){var d,c,f,g,e=a.a,k;if(0!==(e&10)){k=a.b;if(0===(e&262144)){var l=a.f;if(null!==l)for(g=Object.keys(l),d=0,c=g.length;d<c;d++)f=g[d],k[f]=l[f];if(null!==a.m)for(g=Object.keys(a.m),d=0,c=g.length;d<c;d++)f=g[d],r(k,f,a.m[f]);null!==a.s&&(0===(e&32768)?k.style.cssText=a.s:k.setAttribute("style",a.s));null!==a.j&&(0===(e&32768)?k.className=a.j:k.setAttribute("class",a.j))}else 0===(e&8)?a.i.update(k,void 0,a.f):b.u.i.update(k,void 0,a.f);f=a.g;if(null!==f)if(0===(a.a&2048))if(0===(a.a&
192))if("string"===typeof f)k.textContent=f;else for(d=0,c=f.length;d<c;d++)B(a,f[d],null,b);else 0!==(a.a&64)?a.b.value=a.g:a.b.checked=a.g;else k.innerHTML=f}else 0!==(e&4)&&(k=a.b,null!==a.j&&(0===(e&32768)?k.className=a.j:k.setAttribute("class",a.j)),C(a.l))}function B(a,b,d,c){a=a.b;null===b.b?(aa(b,c),0!==(b.a&4)&&w(b.l),A(b,c),a.insertBefore(b.b,d)):(a.insertBefore(b.b,d),v(b),C(b.l,0===(b.a&512)?b.f:null))}
function ca(a,b,d,c){a=a.b;null===b.b?(aa(b,c),a.replaceChild(b.b,d.b),0!==(b.a&4)&&w(b.l),A(b,c)):(a.replaceChild(b.b,d.b),v(b),C(b.l,0===(b.a&512)?b.f:null));y(d)}function D(a,b){a.b.removeChild(b.b);y(b)}
function E(a,b,d){var c=a.b,f=a.a,g;b.b=a.b;if(0!==(f&1))a.f!==b.f&&(a.b.nodeValue=b.f);else if(0!==(f&10)){if(0===(f&262144)){if(a.f!==b.f){g=a.f;var e=b.f,k=Object.keys(g),l,h;for(h=0;h<k.length;h++){l=k[h];var m=e[l];g[l]!==m&&(c[l]=m)}}if(a.m!==b.m)if(0===(a.a&32))for(g=a.m,e=b.m,k=Object.keys(g),h=0;h<k.length;h++)l=k[h],m=e[l],g[l]!==m&&r(c,l,m);else if(g=a.m,e=b.m,null!==g)if(null===e)for(l=Object.keys(g),k=0;k<l.length;k++)c.removeAttribute(l[k]);else{l=Object.keys(g);for(k=0;k<l.length;k++)h=
l[k],e.hasOwnProperty(h)?(m=e[h],g[h]!==m&&r(c,h,m)):c.removeAttribute(h);l=Object.keys(e);for(k=0;k<l.length;k++)h=l[k],g.hasOwnProperty(h)||r(c,h,e[h])}else if(null!==e)for(l=Object.keys(e),k=0;k<l.length;k++)h=l[k],r(c,h,e[h]);a.s!==b.s&&(g=null===b.s?"":b.s,0===(f&32768)?c.style.cssText=g:c.setAttribute("style",g));a.j!==b.j&&(g=null===b.j?"":b.j,0===(f&32768)?c.className=g:c.setAttribute("class",g))}else a.f!==b.f&&(0===(f&8)?a.i.update(c,a.f,b.f):d.u.i.update(c,a.f,b.f));if(0===(a.a&192)){if(a.g!==
b.g)if(0===(a.a&2048))if(c=a.g,b=b.g,e=0,k=!1,"string"===typeof c)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)(d=a.b.firstChild)?d.nodeValue=b:a.b.textContent=b;else for(a.b.removeChild(a.b.firstChild);e<b.length;)B(a,b[e++],null,d);else if("string"===typeof b){if(null!==c)for(a.b.textContent="";e<c.length;)y(c[e++]);a.b.textContent=b}else if(null!==c&&0!==c.length)if(null===b||0===b.length)for(a.b.textContent="";e<c.length;)y(c[e++]);else if(1===c.length&&1===b.length)f=
c[0],g=b[0],F(f,g)?E(f,g,d):ca(a,g,f,d);else if(1===c.length){f=c[0];if(0===(a.a&16))for(;e<b.length;){g=b[e++];if(F(f,g)){E(f,g,d);k=!0;break}B(a,g,f.b,d)}else for(;e<b.length;){g=b[e++];if(f.h===g.h){E(f,g,d);k=!0;break}B(a,g,f.b,d)}if(k)for(;e<b.length;)B(a,b[e++],null,d);else D(a,f)}else if(1===b.length){g=b[0];if(0===(a.a&16))for(;e<c.length;){f=c[e++];if(F(f,g)){E(f,g,d);k=!0;break}D(a,f)}else for(;e<c.length;){f=c[e++];if(f.h===g.h){E(f,g,d);k=!0;break}D(a,f)}if(k)for(;e<c.length;)D(a,c[e++]);
else B(a,g,null,d)}else if(0===(a.a&16)){f=e=0;k=c.length-1;for(g=b.length-1;e<=k&&f<=g;){l=c[e];h=b[f];if(!F(l,h))break;e++;f++;E(l,h,d)}for(;e<=k&&f<=g;){l=c[k];h=b[g];if(!F(l,h))break;k--;g--;E(l,h,d)}for(;e<=k&&f<=g;)l=c[e++],h=b[f++],F(l,h)?E(l,h,d):ca(a,h,l,d);if(e<=k){do D(a,c[e++]);while(e<=k)}else if(f<=g){c=g+1;c=c<b.length?b[c].b:null;do B(a,b[f++],c,d);while(f<=g)}}else{f=m=0;k=c.length-1;l=b.length-1;e=c[m];g=b[f];h=c[k];var n=b[l],p,I;a:do{for(;e.h===g.h;){E(e,g,d);m++;f++;if(m>k||f>
l)break a;e=c[m];g=b[f]}for(;h.h===n.h;){E(h,n,d);k--;l--;if(m>k||f>l)break a;h=c[k];n=b[l]}if(e.h===n.h){E(e,n,d);e=l+1;e=e<b.length?b[e].b:null;a.b.insertBefore(n.b,e);m++;l--;if(m>k||f>l)break a;e=c[m];n=b[l];continue a}if(h.h===g.h){E(h,g,d);a.b.insertBefore(g.b,e.b);k--;f++;if(m>k||f>l)break a;h=c[k];g=b[f]}}while(0);if(m>k)for(e=l+1,e=e<b.length?b[e].b:null;f<=l;)B(a,b[f++],e,d);else if(f>l)for(;m<=k;)D(a,c[m++]);else{var da=k-m+1,e=l-f+1;g=Array(e);for(h=0;h<e;h++)g[h]=-1;var T=!1,G,U=n=0,
M=0;if(4>=e||16>=da*e)for(h=m;h<=k;h++){G=!0;p=c[h];if(M<e)for(m=f;m<=l;m++)if(I=b[m],p.h===I.h){g[m-f]=h;n>m?T=!0:n=m;E(p,I,d);M++;G=!1;break}G&&(D(a,p),U++)}else{var ea=new Map;for(h=f;h<=l;h++)p=b[h],ea.set(p.h,h);for(h=m;h<=k;h++)G=!0,p=c[h],M<e&&(m=ea.get(p.h),void 0!==m&&(I=b[m],g[m-f]=h,n>m?T=!0:n=m,E(p,I,d),M++,G=!1)),G&&(D(a,p),U++)}if(T){k=g.slice(0);c=[];c.push(0);l=0;for(h=g.length;l<h;l++)if(-1!==g[l])if(m=c[c.length-1],g[m]<g[l])k[l]=m,c.push(l);else{m=0;for(n=c.length-1;m<n;)p=(m+n)/
2|0,g[c[p]]<g[l]?m=p+1:n=p;g[l]<g[c[m]]&&(0<m&&(k[l]=c[m-1]),c[m]=l)}m=c.length;for(n=c[m-1];0<m--;)c[m]=n,n=k[n];m=c.length-1;for(h=e-1;0<=h;h--)-1===g[h]?(n=h+f,p=b[n],e=n+1,e=e<b.length?b[e].b:null,B(a,p,e,d)):0>m||h!==c[m]?(n=h+f,p=b[n],e=n+1,e=e<b.length?b[e].b:null,a.b.insertBefore(p.b,e)):m--}else if(da-U!==e)for(h=e-1;0<=h;h--)-1===g[h]&&(n=h+f,p=b[n],e=n+1,e=e<b.length?b[e].b:null,B(a,p,e,d))}}else{if(null!==b&&0<b.length)for(e=0;e<b.length;e++)B(a,b[e],null,d)}else c.innerHTML=b.g}else 0!==
(f&64)?c.value!==b.g&&(c.value=b.g):c.checked!==b.g&&(c.checked=b.g)}else d=b.l=a.l,a.j!==b.j&&(g=null===b.j?"":b.j,0===(f&32768)?c.className=g:c.setAttribute("class",g)),0!==(f&1024)&&a.f===b.f||C(d,0===(f&512)?b.f:void 0)}function F(a,b){return a.a===b.a&&a.i===b.i&&a.h===b.h}function H(){this.D=4;this.a=0;this.i="div";this.O=this.N=this.K=this.C=this.G=this.J=this.P=null}H.prototype.tagName=function(a){this.i=a;return this};
H.prototype.canvas=function(){this.D|=65536;this.a|=65536;this.i="canvas";return this};H.prototype.init=function(a){this.C=a;return this};H.prototype.update=function(a){this.J=a;return this};function J(a,b){return new t(1028,a,void 0===b?null:b)}
function ba(a,b,d){var c;c=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new K(a.D,a,c,b,d);0!==(a.a&1)&&(c.T=b);null!==a.G&&(b.state=a.G(b,b.props));null!==a.C&&a.C(b,b.props,b.state);return b}function K(a,b,d,c,f){this.c=a;this.R=0;this.u=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===f?null:f;this.state=null;this.o=0===(a&65536)?null:d.getContext("2d");this.I=this.H=null}
function L(a){return 0===(a.c&131072)?new t(8,null,null):L(a.u.i)}K.prototype.update=function(a){C(this,a)};function N(a,b){null===a.o?(b.l=a,b.b=a.element,A(b,a)):E(a.o,b,a);a.o=b}function w(a){fa(a);null!==a.o&&0===(a.c&65536)&&v(a.o)}K.prototype.detach=function(){null!==this.o&&0===(this.c&65536)&&x(this.o);z(this)};K.prototype.subscribe=function(a){return a.S(this)};
function C(a,b){var d=a.c;if(void 0!==b&&0===(d&1024)){var c=a.props,f=a.u.P;null!==f?f(a,c,b):0===(a.c&4)&&(a.c|=4,ga(a));a.props=b}if(6===(a.c&6))if(0===(O&8)||0!==(O&32)||0!==(d&256)||0<ha())a.u.J(a,a.props,a.state),a.R=P,a.c&=-133;else if(ia(),b=Q,0===(a.c&128)){a.c|=128;d=a.depth;for(b.a|=1;d>=b.w.length;)b.w.push(null);c=b.w[d];null===c?b.w[d]=[a]:c.push(a)}}function fa(a){a.c|=2;var b=a.u.K;null!==b&&b(a,a.props,a.state)}
function z(a){0!==(a.c&512)&&(ja--,0===ja&&(O&=-9));a.c&=-531;for(var b=a.H;null!==b;)b.L(),b=b.M;a.H=null;ga(a);b=a.u.N;null!==b&&b(a,a.props,a.state)}function ga(a){for(var b=a.I;null!==b;)b.L(),b=b.M;a.I=null}function ka(){var a=document.querySelector("#App"),b=ba(la,void 0,null);a.appendChild(b.element);fa(b);C(b);return b}function R(){this.a=0;this.w=[];this.v=this.F=this.A=this.B=null}R.prototype.write=function(a){this.a|=2;null===this.B&&(this.B=[]);this.B.push(a)};
R.prototype.read=function(a){this.a|=4;null===this.A&&(this.A=[]);this.A.push(a)};R.prototype.focus=function(a){this.v=a};var O=0,P=0,S=[],V=[],ma=new R,Q=new R,W=[],na=document.createTextNode(""),oa="__kivi"+Math.random(),ja=0,X=6,Y=60,Z=0,pa=0;(new MutationObserver(qa)).observe(na,{characterData:!0});window.addEventListener("message",ra);function ia(){0===(O&4)&&(O|=4,requestAnimationFrame(sa))}
function ra(a){if(a.source===window&&a.data===oa){O&=-3;a=V;V=[];for(var b=0;b<a.length;b++)a[b]();P++}}
function sa(a){var b,d;O&=-21;0!==(O&8)&&(ta(function(){Y=Math.round((Y+1/((window.performance.now()-a)/1E3))/2);Z+=45>Y?-1:1;5<Z?(Z=0,X+=.1):-5>Z&&(Z=0,X*=.66);6<X?X=6:2>X&&(X=2)}),pa=a+X);var c=Q;Q=ma;ma=c;for(d=0;d<W.length;d++)W[d].c|=4;do{for(;0!==(c.a&4);)for(c.a&=-5,b=c.A,c.A=null,d=0;d<b.length;d++)b[d]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var f=c.w;for(d=0;d<f.length;d++){var g=f[d];if(null!==g)for(f[d]=null,b=0;b<g.length;b++)C(g[b])}}if(0!==(c.a&2))for(c.a&=-3,b=c.B,c.B=null,d=
0;d<b.length;d++)b[d]()}d=0;for(b=W.length;d<b;)f=W[d++],0===(f.c&16)?(f.c&=-33,d===b?W.pop():W[--d]=W.pop()):C(f)}while(0!==(c.a&7));for(;0!==(c.a&8);)for(c.a&=-9,b=c.F,c.F=null,d=0;d<b.length;d++)b[d]();null!==c.v&&(c.v.constructor===t?c.v.b.focus():c.v.focus(),c.v=null);0<W.length&&ia();P++}function qa(){for(;0<S.length;){var a=S;S=[];for(var b=0;b<a.length;b++)a[b]();P++}O&=-2}function ta(a){0===(O&2)&&(O|=2,window.postMessage(oa,"*"));V.push(a)}
function ha(){if(0!==(O&16))return 0;var a=pa-performance.now();return 0>=a?(O|=16,0):a}
var ua=(new H).tagName("td").init(function(a,b){a.element.addEventListener("click",function(a){console.log("Click",b);a.stopPropagation()})}).update(function(a,b){N(a,L(a).className("TableCell").children(b))}),va=(new H).tagName("tr").update(function(a,b){for(var d=b.props,c="#"+b.id,c=[new t(4,ua,void 0===c?null:c)],f=0;f<d.length;f++)c.push(J(ua,d[f]));d=L(a);d.m={"data-id":b.id};N(a,d.className(b.active?"TableRow active":"TableRow").children(c))}),wa=(new H).tagName("table").update(function(a,
b){N(a,L(a).className("Table").children([u(new t(2,"tbody",null),b.items.map(function(a){return J(va,a).key(a.id)}))]))}),xa=(new H).update(function(a,b){var d=b.time,c=L(a).className("AnimBox");c.m={"data-id":""+b.id};N(a,c.style("border-radius:"+d%10+"px;background:rgba(0,0,0,"+(.5+d%10/10)+")"))}),ya=(new H).update(function(a,b){N(a,u(L(a).className("Anim"),b.items.map(function(a){return J(xa,a).key(a.id)})))}),za=(new H).tagName("li").update(function(a,b){N(a,L(a).className("TreeLeaf").children(""+
b.id))}),Aa=(new H).tagName("ul").update(function(a,b){N(a,u(L(a).className("TreeNode"),b.children.map(function(a){return a.container?J(Aa,a).key(a.id):J(za,a).key(a.id)})))}),Ba=(new H).update(function(a,b){N(a,L(a).className("Tree").children([J(Aa,b.root)]))}),la=(new H).update(function(a,b){var d=b&&b.location,c=null;"table"===d?c=[J(wa,b.table)]:"anim"===d?c=[J(ya,b.anim)]:"tree"===d&&(c=[J(Ba,b.tree)]);N(a,L(a).className("Main").children(c))});uibench.init("kivi[simple]","0.11.0-alpha.2");
document.addEventListener("DOMContentLoaded",function(){var a=ka();uibench.run(function(b){a.update(b)},function(b){document.body.innerHTML="<pre>"+JSON.stringify(b,null," ")+"</pre>";a=null})});}).call();
