(function(){'use strict';var q;function r(a,b,d){120!==b.charCodeAt(0)?a.setAttribute(b,d):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,d):a.setAttribute(b,d)}function t(a,b,d){this.a=a;this.j=b;this.i=null;this.c=d;this.u=this.b=this.h=this.g=this.o=this.m=null}q=t.prototype;q.key=function(a){this.i=a;return this};q.props=function(a){this.c=a;return this};
q.data=function(a){this.c=a;return this};q.style=function(a){this.o=a;return this};q.className=function(a){this.g=a;return this};q.children=function(a){this.h=a;return this};function u(a,b){a.a|=16;a.h=b;return a}q.value=function(a){this.a|=64;this.h=a;return this};q.checked=function(a){this.a|=128;this.h=a;return this};
function ba(a,b){var d=a.a;0!==(d&1)?a.b=document.createTextNode(a.c):0!==(d&2)?a.b=0===(d&131072)?0===(d&32768)?document.createElement(a.j):document.createElementNS("http://www.w3.org/2000/svg",a.j):a.j.createElement():0===(d&256)&&(b=ca(a.j,b,a.c),a.b=b.element,a.u=b)}
function v(a,b){var d,c,e,g,f=a.a,h;if(0!==(f&10)){h=a.b;if(0===(f&262144)){var k=a.c;if(null!==k)for(g=Object.keys(k),d=0,c=g.length;d<c;d++)e=g[d],h[e]=k[e];if(null!==a.m)for(g=Object.keys(a.m),d=0,c=g.length;d<c;d++)e=g[d],r(h,e,a.m[e]);null!==a.o&&(0===(f&32768)?h.style.cssText=a.o:h.setAttribute("style",a.o));null!==a.g&&(0===(f&32768)?h.className=a.g:h.setAttribute("class",a.g))}else 0===(f&8)?a.j.update(h,void 0,a.c):b.s.j.update(h,void 0,a.c);e=a.h;if(null!==e)if(0===(a.a&192))if("string"===
typeof e)h.textContent=e;else for(d=0,c=e.length;d<c;d++)w(a,e[d],null,b);else 0!==(a.a&64)?a.b.value=a.h:a.b.checked=a.h}else 0!==(f&4)&&(h=a.b,null!==a.g&&(0===(f&32768)?h.className=a.g:h.setAttribute("class",a.g)),x(a.u))}function y(a){if(0===(a.a&4)){if(a=a.h,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)y(a[b])}else z(a.u)}function A(a){if(0===(a.a&4)){if(a=a.h,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)A(a[b])}else a.u.detach()}
function B(a){if(0===(a.a&256))if(0!==(a.a&4)){a=a.u;a.f|=1;null!==a.w&&0===(a.f&65536)&&B(a.w);0!==(a.f&2)&&da(a);var b=a.s.V;null!==b&&b(a,a.props,a.state)}else{if(null!==a.h&&(a=a.h,"string"!==typeof a))for(b=0;b<a.length;b++)B(a[b])}else A(a)}function w(a,b,d,c){a=a.b;null===b.b?(ba(b,c),a.insertBefore(b.b,d),0!==(b.a&4)&&z(b.u),v(b,c)):(a.insertBefore(b.b,d),y(b),x(b.u,0===(b.a&512)?b.c:null))}
function ea(a,b,d,c){a=a.b;null===b.b?(ba(b,c),a.replaceChild(b.b,d.b),0!==(b.a&4)&&z(b.u),v(b,c)):(a.replaceChild(b.b,d.b),y(b),x(b.u,0===(b.a&512)?b.c:null));B(d)}function C(a,b){a.b.removeChild(b.b);B(b)}
function D(a,b,d){var c=a.b,e=a.a,g;b.b=a.b;if(0!==(e&1))a.c!==b.c&&(a.b.nodeValue=b.c);else if(0!==(e&10)){if(0===(e&262144)){if(a.c!==b.c){g=a.c;var f=b.c,h=Object.keys(g),k,n;for(n=0;n<h.length;n++){k=h[n];var l=f[k];g[k]!==l&&(c[k]=l)}}if(a.m!==b.m)if(0===(a.a&32))for(g=a.m,f=b.m,h=Object.keys(g),n=0;n<h.length;n++)k=h[n],l=f[k],g[k]!==l&&r(c,k,l);else if(g=a.m,f=b.m,null!==g)if(null===f)for(k=Object.keys(g),h=0;h<k.length;h++)c.removeAttribute(k[h]);else{k=Object.keys(g);for(h=0;h<k.length;h++)n=
k[h],f.hasOwnProperty(n)?(l=f[n],g[n]!==l&&r(c,n,l)):c.removeAttribute(n);k=Object.keys(f);for(h=0;h<k.length;h++)n=k[h],g.hasOwnProperty(n)||r(c,n,f[n])}else if(null!==f)for(k=Object.keys(f),h=0;h<k.length;h++)n=k[h],r(c,n,f[n]);a.o!==b.o&&(g=null===b.o?"":b.o,0===(e&32768)?c.style.cssText=g:c.setAttribute("style",g));a.g!==b.g&&(g=null===b.g?"":b.g,0===(e&32768)?c.className=g:c.setAttribute("class",g))}else a.c!==b.c&&(0===(e&8)?a.j.update(c,a.c,b.c):d.s.j.update(c,a.c,b.c));if(0===(a.a&192)){if(a.h!==
b.h)if(c=a.h,b=b.h,f=0,h=!1,"string"===typeof c)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)(d=a.b.firstChild)?d.nodeValue=b:a.b.textContent=b;else for(a.b.removeChild(a.b.firstChild);f<b.length;)w(a,b[f++],null,d);else if("string"===typeof b){if(null!==c)for(;f<c.length;)C(a,c[f++]);a.b.textContent=b}else if(null!==c&&0!==c.length)if(null===b||0===b.length)for(;f<c.length;)C(a,c[f++]);else if(1===c.length&&1===b.length)e=c[0],g=b[0],E(e,g)?D(e,g,d):ea(a,g,e,d);else if(1===
c.length){e=c[0];if(0===(a.a&16))for(;f<b.length;){g=b[f++];if(E(e,g)){D(e,g,d);h=!0;break}w(a,g,e.b,d)}else for(;f<b.length;){g=b[f++];if(e.i===g.i){D(e,g,d);h=!0;break}w(a,g,e.b,d)}if(h)for(;f<b.length;)w(a,b[f++],null,d);else C(a,e)}else if(1===b.length){g=b[0];if(0===(a.a&16))for(;f<c.length;){e=c[f++];if(E(e,g)){D(e,g,d);h=!0;break}C(a,e)}else for(;f<c.length;){e=c[f++];if(e.i===g.i){D(e,g,d);h=!0;break}C(a,e)}if(h)for(;f<c.length;)C(a,c[f++]);else w(a,g,null,d)}else if(0===(a.a&16)){e=f=0;h=
c.length-1;for(g=b.length-1;f<=h&&e<=g;){k=c[f];n=b[e];if(!E(k,n))break;f++;e++;D(k,n,d)}for(;f<=h&&e<=g;){k=c[h];n=b[g];if(!E(k,n))break;h--;g--;D(k,n,d)}for(;f<=h&&e<=g;)k=c[f++],n=b[e++],E(k,n)?D(k,n,d):ea(a,n,k,d);if(f<=h){do C(a,c[f++]);while(f<=h)}else if(e<=g){c=g+1;c=c<b.length?b[c].b:null;do w(a,b[e++],c,d);while(e<=g)}}else{var m=0,e=0,h=c.length-1;k=b.length-1;f=c[m];g=b[e];var l=c[h],p=b[k],J,L;n=0;var K;a:do{for(;f.i===g.i;){D(f,g,d);m++;e++;if(m>h||e>k)break a;f=c[m];g=b[e]}for(;l.i===
p.i;){D(l,p,d);h--;k--;if(m>h||e>k)break a;l=c[h];p=b[k]}if(f.i===p.i){D(f,p,d);f=k+1;f=f<b.length?b[f].b:null;a.b.insertBefore(p.b,f);m++;k--;if(m>h||e>k)break a;f=c[m];p=b[k];continue a}if(l.i===g.i){D(l,g,d);a.b.insertBefore(g.b,f.b);h--;e++;if(m>h||e>k)break a;l=c[h];g=b[e]}}while(0);if(m>h)for(f=k+1,f=f<b.length?b[f].b:null;e<=k;)w(a,b[e++],f,d);else if(e>k)for(;m<=h;)C(a,c[m++]);else{var ja=h-m+1,f=k-e+1;g=Array(f);for(l=0;l<f;l++)g[l]=-1;var Z=!1,aa=0;if(4>=f||16>=ja*f)for(J=0,l=m;l<=h;l++){K=
!0;p=c[l];if(J<f)for(m=e;m<=k;m++)if(L=b[m],p.i===L.i){g[m-e]=l;n>m?Z=!0:n=m;D(p,L,d);J++;K=!1;break}K&&(C(a,p),aa++)}else{var ka=new Map;J=0;for(l=e;l<=k;l++)p=b[l],ka.set(p.i,l);for(l=m;l<=h;l++)K=!0,p=c[l],J<f&&(m=ka.get(p.i),void 0!==m&&(L=b[m],g[m-e]=l,n>m?Z=!0:n=m,D(p,L,d),J++,K=!1)),K&&(C(a,p),aa++)}if(Z){h=g.slice(0);c=[];c.push(0);k=0;for(n=g.length;k<n;k++)if(-1!==g[k])if(l=c[c.length-1],g[l]<g[k])h[k]=l,c.push(k);else{l=0;for(m=c.length-1;l<m;)p=(l+m)/2|0,g[c[p]]<g[k]?l=p+1:m=p;g[k]<g[c[l]]&&
(0<l&&(h[k]=c[l-1]),c[l]=k)}l=c.length;for(m=c[l-1];0<l--;)c[l]=m,m=h[m];m=c.length-1;for(l=f-1;0<=l;l--)-1===g[l]?(f=l+e,p=b[f],f+=1,f=f<b.length?b[f].b:null,w(a,p,f,d)):0>m||l!==c[m]?(f=l+e,p=b[f],f+=1,f=f<b.length?b[f].b:null,a.b.insertBefore(p.b,f)):m--}else if(ja-aa!==f)for(l=f-1;0<=l;l--)-1===g[l]&&(f=l+e,p=b[f],f+=1,f=f<b.length?b[f].b:null,w(a,p,f,d))}}else if(null!==b&&0<b.length)for(f=0;f<b.length;f++)w(a,b[f],null,d)}else 0!==(e&64)?c.value!==b.h&&(c.value=b.h):c.checked!==b.h&&(c.checked=
b.h)}else d=b.u=a.u,a.g!==b.g&&(g=null===b.g?"":b.g,0===(e&32768)?c.className=g:c.setAttribute("class",g)),0!==(e&1024)&&a.c===b.c||x(d,0===(e&512)?b.c:void 0)}function E(a,b){return a.a===b.a&&a.j===b.j&&a.i===b.i}function F(){this.l=4;this.a=0;this.j="div";this.V=this.U=this.R=this.G=this.I=this.N=this.Z=null}q=F.prototype;q.tagName=function(a){this.j=a;return this};function G(a,b){a.l|=b.l;a.a|=b.l;a.j=b;return a}q.canvas=function(){this.l|=65536;this.a|=65536;this.j="canvas";return this};
q.init=function(a){this.G=a;return this};q.update=function(a){this.N=a;return this};q.P=function(a){return new t(4,this,void 0===a?null:a)};function H(a,b){return new t(1028,a,void 0===b?null:b)}function ca(a,b,d){var c;c=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.j):document.createElementNS("http://www.w3.org/2000/svg",a.j):a.j.createElement();b=new I(a.l,a,c,b,d);0!==(a.a&1)&&(c.ba=b);null!==a.I&&(b.state=a.I(b,b.props));null!==a.G&&a.G(b,b.props,b.state);return b}
function I(a,b,d,c,e){this.f=a;this.aa=0;this.s=b;this.element=d;this.depth=void 0===c?0:c.depth+1;this.props=void 0===e?null:e;this.state=null;this.w=0===(a&65536)?null:d.getContext("2d");this.M=this.K=null}I.prototype.v=function(){return 0===(this.f&131072)?new t(8,null,null):this.s.j.v()};I.prototype.update=function(a){x(this,a)};function M(a,b){null===a.w?(b.u=a,b.b=a.element,v(b,a)):D(a.w,b,a);a.w=b}function z(a){fa(a);null!==a.w&&0===(a.f&65536)&&y(a.w)}
I.prototype.detach=function(){null!==this.w&&0===(this.f&65536)&&A(this.w);da(this)};I.prototype.subscribe=function(a){return a.da(this)};
function x(a,b){var d=a.f;if(void 0!==b&&0===(d&1024)){var c=a.props,e=a.s.Z;null!==e?e(a,c,b):0===(a.f&4)&&(a.f|=4,ga(a));a.props=b}if(6===(a.f&6))if(0===(N&8)||0!==(N&32)||0!==(d&256)||0<ha())a.s.N(a,a.props,a.state),a.aa=O,a.f&=-133;else if(ia(),b=la,0===(a.f&128)){a.f|=128;d=a.depth;for(b.a|=1;d>=b.B.length;)b.B.push(null);c=b.B[d];null===c?b.B[d]=[a]:c.push(a)}}function fa(a){a.f|=2;var b=a.s.R;null!==b&&b(a,a.props,a.state)}
function da(a){0!==(a.f&512)&&(ma--,0===ma&&(N&=-9));a.f&=-531;for(var b=a.K;null!==b;)b.S(),b=b.T;a.K=null;ga(a);b=a.s.U;null!==b&&b(a,a.props,a.state)}function ga(a){for(var b=a.M;null!==b;)b.S(),b=b.T;a.M=null}function na(){var a=document.querySelector("#App"),b=ca(oa,void 0,null);a.appendChild(b.element);fa(b);x(b);return b}function P(){this.a=0;this.B=[];this.A=this.H=this.D=this.F=null}P.prototype.write=function(a){this.a|=2;null===this.F&&(this.F=[]);this.F.push(a)};
P.prototype.read=function(a){this.a|=4;null===this.D&&(this.D=[]);this.D.push(a)};P.prototype.focus=function(a){this.A=a};var N=0,O=0,Q=[],pa=[],qa=new P,la=new P,R=[],ra=[],S=[],sa=null,T=0,ta=document.createTextNode(""),ua="__kivi"+Math.random(),ma=0,U=10,va=60,V=0,wa=0;(new MutationObserver(xa)).observe(ta,{characterData:!0});window.addEventListener("message",ya);
function W(a){var b=N,d=sa;0===(b&448)?d.state=d.s.ca(d,a,d.props,d.state):0!==(b&64)?(b=ra[T++],T===ra.length&&(T=0,N&=-65),b(d,a,W)):0!==(b&128)?(b=d.s.C[T++],T===d.s.C.length&&(T=0,N&=-129),b(d,a,W)):0!==(b&256)&&(b=d.C[T++],T===d.C.length&&(N&=-257),b(d,a,W))}function ia(){0===(N&4)&&(N|=4,requestAnimationFrame(za))}function ya(a){if(a.source===window&&a.data===ua){N&=-3;a=pa;pa=[];for(var b=0;b<a.length;b++)a[b]();O++}}
function za(a){var b,d;N&=-21;0!==(N&8)&&(Aa(function(){va=Math.round((va+1/((window.performance.now()-a)/1E3))/2);V+=45>va?-1:1;5<V?(V=0,U+=.1):-5>V&&(V=0,U*=.66);12<U?U=12:2>U&&(U=2)}),wa=a+U);var c=la;la=qa;qa=c;for(d=0;d<R.length;d++)R[d].f|=4;do{for(;0!==(c.a&4);)for(c.a&=-5,b=c.D,c.D=null,d=0;d<b.length;d++)b[d]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var e=c.B;for(d=0;d<e.length;d++){var g=e[d];if(null!==g)for(e[d]=null,b=0;b<g.length;b++)x(g[b])}}if(0!==(c.a&2))for(c.a&=-3,b=c.F,c.F=
null,d=0;d<b.length;d++)b[d]()}d=0;for(b=R.length;d<b;)e=R[d++],0===(e.f&16)?(e.f&=-33,d===b?R.pop():R[--d]=R.pop()):x(e)}while(0!==(c.a&7));for(;0!==(c.a&8);)for(c.a&=-9,b=c.H,c.H=null,d=0;d<b.length;d++)b[d]();null!==c.A&&(c.A.constructor===t?c.A.b.focus():c.A.focus(),c.A=null);0<R.length&&ia();O++}
function xa(){do{for(;0<Q.length;){var a=Q;Q=[];for(var b=0;b<a.length;b++)a[b]();O++}if(0<S.length)for(a=S,S=[],b=0;b<a.length;b++){for(var d=a[b];0!==(d.a&2);){var c=d.W;d.W=[];d.a&=-3;for(var e=0;e<c.length;e++){var g=c[e];g.a|=4;sa=d;T=0;null!==ra&&(N|=64);null!==d.s.C&&(N|=128);null!==d.C&&(N|=256);W(g)}}d.a&=-2;O++}}while(0<Q.length&&0<S.length);N&=-2}function Aa(a){0===(N&2)&&(N|=2,window.postMessage(ua,"*"));pa.push(a)}
function ha(){if(0!==(N&16))return 0;var a=wa-performance.now();return 0>=a?(N|=16,0):a}function X(a){this.l=131072;this.a=0;this.L=a;this.J=this.O=this.g=this.o=this.m=this.c=null}q=X.prototype;q.props=function(a){this.c=a;return this};q.style=function(a){this.o=a;return this};q.className=function(a){this.g=a;return this};function Y(a){a.a|=1;return a}function Ba(a,b){a.l|=262144;a.O=b;return a}q.P=function(a){return new t(2|this.l,this,void 0===a?null:a)};
q.v=function(a){return new t(8|this.l,this,void 0===a?null:a)};
q.createElement=function(){var a,b,d,c=this.J;if(null===c){c=0===(this.a&32768)?document.createElement(this.L):document.createElementNS("http://www.w3.org/2000/svg",this.L);if(null!==this.c)for(b=Object.keys(this.c),a=0;a<b.length;a++)d=b[a],c[d]=this.c[d];if(null!==this.m)for(b=Object.keys(this.m),a=0;a<b.length;a++)d=b[a],r(c,d,this.m[d]);null!==this.o&&(0===(this.a&32768)?c.style.cssText=this.o:c.setAttribute("style",this.o));null!==this.g&&(0===(this.a&32768)?c.className=this.g:c.setAttribute("class",
this.g));return 0!==(this.a&1)?(this.J=c,c.cloneNode(!1)):c}return c.cloneNode(!1)};q.update=function(a,b,d){this.O(a,b,d)};function Ca(a){new Map;this.$=this.Y=this.X=0;this.name=a}Ca.prototype.create=function(a){return new Da(this,this.$++,a,this.X,this.Y)};function Da(a,b,d,c,e){this.a=c;this.l=e;this.id=b;this.group=a;this.name=d;new Map}Da.prototype.create=function(){return new Ea(this,this.l)};function Ea(a,b){this.a=b;this.s=a}(new Ca("system")).create("actorDisposed");
var Fa=G(function(){var a=new F;a.a|=1;return a}(),Y(new X("td")).className("TableCell")).update(function(a,b){M(a,a.v().children(b))}),Ga=function(a){return function(b){var d;a:{d=b.currentTarget;d=void 0===d?null:d;var c=b.target;do{if(c.matches(".TableCell")){d=c;break a}c=c.parentElement}while(c!==d);d=null}null!==d&&(c=d.ba,a(b,c,c.props,c.state,d))}}(function(a,b,d){console.log("Click",d);a.stopPropagation()}),Ha=G(new F,Ba(Y(new X("tr")),function(a,b,d){void 0===b?(a.className=d.active?"TableRow active":
"TableRow",a.setAttribute("data-id",""+d.id)):b.active!==d.active&&(a.className=d.active?"TableRow active":"TableRow")})).init(function(a){a.element.onclick=Ga}).update(function(a,b){for(var d=b.props,c=[Fa.P("#"+b.id)],e=0;e<d.length;e++)c.push(H(Fa,d[e]));M(a,a.v().data(b).children(c))}),Ia=G(new F,Y(new X("table")).className("Table")).update(function(a,b){b=b.items;for(var d=[],c=0;c<b.length;c++){var e=b[c];d.push(H(Ha,e).key(e.id))}M(a,a.v().children([u(new t(2,"tbody",null),d)]))}),Ja=G(new F,
Ba(Y(new X("div")).className("AnimBox"),function(a,b,d){var c=d.time;void 0===b?(a.setAttribute("data-id",""+d.id),a.style.cssText="border-radius:"+c%10+"px;background:rgba(0,0,0,"+(.5+c%10/10)+")"):b.time!==c&&(a.style.cssText="border-radius:"+c%10+"px;background:rgba(0,0,0,"+(.5+c%10/10)+")")})).update(function(a,b){M(a,a.v().data(b))}),Ka=G(new F,Y(new X("div")).className("Anim")).update(function(a,b){b=b.items;for(var d=[],c=0;c<b.length;c++){var e=b[c];d.push(H(Ja,e).key(e.id))}M(a,u(a.v(),d))}),
La=G(new F,Y(new X("li")).className("TreeLeaf")).update(function(a,b){M(a,a.v().children(""+b.id))}),Ma=G(new F,Y(new X("ul")).className("TreeNode")).update(function(a,b){for(var d=[],c=0;c<b.children.length;c++){var e=b.children[c];d.push((e.container?H(Ma,e):H(La,e)).key(e.id))}M(a,u(a.v(),d))}),Na=G(new F,Y(new X("div")).className("Tree")).update(function(a,b){M(a,a.v().children([H(Ma,b.root)]))}),oa=G(new F,(new X("div")).className("Main")).update(function(a,b){var d=b&&b.location,c=null;"table"===
d?c=[H(Ia,b.table)]:"anim"===d?c=[H(Ka,b.anim)]:"tree"===d&&(c=[H(Na,b.tree)]);M(a,a.v().children(c))});uibench.init("kivi[adv]","0.10.0");document.addEventListener("DOMContentLoaded",function(){var a=na();uibench.run(function(b){a.update(b)},function(b){document.body.innerHTML="<pre>"+JSON.stringify(b,null," ")+"</pre>";a=null})});}).call();
