(function(){var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function m(a,b){if(b){var c=ca;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];f in c||(c[f]={});c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}m("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
m("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var f=b.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var d=b[c];if(d===a||Object.is(d,a))return!0}return!1}});m("Math.sign",function(a){return a?a:function(a){a=Number(a);return 0===a||isNaN(a)?a:0<a?1:-1}});function q(a,b){this.x=a;this.y=b}function r(a,b){a=a.touches[void 0===b?0:b];return new q(a.pageX,a.pageY)}
function t(a,b){return null!==b&&void 0!==b&&a.x===b.x&&a.y===b.y}function u(a,b){return new q(a.x-b.x,a.y-b.y)}q.prototype.add=function(a){return new q(this.x+a.x,this.y+a.y)};q.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};q.prototype.scale=function(a){return new q(this.x*a,this.y*a)};function v(a){return new q(a.x,a.y-1)}function x(a){return new q(a.x,a.y+1)}function z(a){return new q(a.x-1,a.y)}function A(a){return new q(a.x+1,a.y)};var B=["+","\u2012","\u2013","-","|"],C=[">","<","^","v"],da=B.concat(C),D=[new q(-1,0),new q(1,0),new q(0,-1),new q(0,1)];function E(a,b){this.a=Math.min(a.x,b.x);this.b=Math.min(a.y,b.y);this.c=Math.max(a.x,b.x);this.f=Math.max(a.y,b.y)}function F(a){return new q(a.a,a.b)}function G(a,b){return b.x>=a.a&&b.x<=a.c&&b.y>=a.b&&b.y<=a.f}function ea(){this.a=this.value=null}function H(a){return null===a.a?a.value:a.a}function I(a){return da.includes(H(a))}function J(a){return null===a.value&&null===a.a}function fa(a,b,c,e){this.a=a;this.b=b;this.f=c;this.c=e;this.i=this.g=this.u=this.h=!1}
function K(a){return a.a+a.b+a.f+a.c}function L(a,b){this.position=a;this.value=b}function ha(a,b){this.position=a;this.a=b};function ia(){this.a=Array(2E3);this.b=[];this.c=!0;this.g=[];this.f=[];for(var a=0;a<this.a.length;a++){this.a[a]=Array(600);for(var b=0;b<this.a[a].length;b++)this.a[a][b]=new ea}}function ja(a){for(var b=0;b<a.a.length;b++)for(var c=0;c<a.a[b].length;c++)null!==H(a.a[b][c])&&M(a,new q(b,c),"\u2009");N(a)}function O(a,b){a=a.a[b.x][b.y];if(void 0===a||null===a)throw Error("Cell not found");return a}function M(a,b,c){var e=O(a,b);a.b.push(new ha(b,e));e.a=c;a.c=!0}
function P(a,b,c){H(O(a,b))!==c&&M(a,b,c)}function Q(a){for(var b=k(a.b),c=b.next();!c.done;c=b.next())c.value.a.a=null;a.b.length=0}
function R(a,b){var c=H(O(a,b)),e=B.includes(c),f=C.includes(c);if(!e&&!f)return c;var d=S(a,b);if(e&&d.a&&d.b&&!d.f&&!d.c)return"-";if(e&&!d.a&&!d.b&&d.f&&d.c)return"|";if(4===K(d))return"-";if(f&&3===K(d)){if(!d.a)return"<";if(!d.f)return"^";if(!d.c)return"v";if(!d.b)return">"}if((e||f)&&3===K(d)){d.h=I(O(a,v(z(b))));d.u=I(O(a,v(A(b))));d.g=I(O(a,x(z(b))));d.i=I(O(a,x(A(b))));if(!d.b&&d.h&&d.g||!d.a&&d.u&&d.i)return"|";if(!d.c&&d.h&&d.u||!d.f&&d.i&&d.g)return"-";c=J(O(a,v(z(b))));e=J(O(a,v(A(b))));
if(d.f&&d.a&&d.b&&(!c||!e))return"-";c=J(O(a,x(z(b))));a=J(O(a,x(A(b))));return!(d.c&&d.a&&d.b)||c&&a?"+":"-"}if(f&&1===K(d)){if(d.a)return">";if(d.f)return"v";if(d.c)return"^";if(d.b)return"<"}return c}function S(a,b){var c=I(O(a,z(b))),e=I(O(a,A(b))),f=I(O(a,v(b)));a=I(O(a,x(b)));return new fa(c,e,f,a)}
function N(a,b){var c=[],e=a.b.map(function(a){return a.position.x.toString()+a.position.y.toString()}),f=a.b.filter(function(a,b){return e.indexOf(e[b])===b});a.b.length=0;f=k(f);for(var d=f.next();!d.done;d=f.next()){var h=d.value;d=h.position;h=h.a;c.push(new L(d,null===h.value?" ":h.value));var l=H(h);if("\u2009"===l||" "===l)l=null;I(h)&&(l=R(a,d));h.a=null;h.value=l}b=b?a.f:a.g;0<c.length&&(50<b.length&&b.shift(),b.push(c));a.c=!0}
function ka(a){if(0!==a.g.length){var b=a.g.pop();b=k(b);for(var c=b.next();!c.done;c=b.next())c=c.value,M(a,c.position,c.value);N(a,!0)}}function la(a){if(0!==a.f.length){var b=a.f.pop();b=k(b);for(var c=b.next();!c.done;c=b.next())c=c.value,M(a,c.position,c.value);N(a)}};function T(a,b,c,e,f){f=void 0===f?"+":f;var d=new E(b,c),h=d.c,l=d.f,n=e?c.x:b.x;e=e?b.y:c.y;for(var w=d.a;w<h;w++){var p=new q(w,e),y=S(a,new q(w,e));" "===f&&2===y.f+y.c||P(a,p,f)}for(d=d.b;d<l;d++)h=new q(n,d),w=S(a,new q(n,d))," "===f&&2===w.a+w.b||P(a,h,f);M(a,b,f);M(a,c,f);P(a,new q(n,e),f)};function U(a){this.a=a;this.b=null}g=U.prototype;g.start=function(a){this.b=a};g.j=function(a){Q(this.a);T(this.a,this.b,a,!0);T(this.a,this.b,a,!1)};g.m=function(){N(this.a)};g.o=function(){return"crosshair"};g.l=function(){};function V(a){this.c=a;this.a=this.b=null}g=V.prototype;g.start=function(a){this.b=a;this.j(a)};g.j=function(a){Q(this.c);this.a=a;a=Math.min(this.b.y,this.a.y);for(var b=Math.max(this.b.x,this.a.x),c=Math.max(this.b.y,this.a.y),e=Math.min(this.b.x,this.a.x);e<=b;e++)for(var f=a;f<=c;f++)M(this.c,new q(e,f),"\u2009")};g.m=function(){N(this.c)};g.o=function(){return"crosshair"};g.l=function(){};function ma(a){this.a=a;this.value="X";document.getElementById("freeform-tool-input").value="";document.getElementById("freeform-tool-input").style.display="none";setTimeout(function(){document.getElementById("freeform-tool-input").style.display="block";setTimeout(function(){document.getElementById("freeform-tool-input").focus()},0)},0)}g=ma.prototype;g.start=function(a){M(this.a,a,this.value)};g.j=function(a){M(this.a,a,this.value)};g.m=function(){N(this.a)};g.o=function(){return"crosshair"};
g.l=function(a){this.value=document.getElementById("freeform-tool-input").value.charAt(0);document.getElementById("freeform-tool-input").blur();document.getElementById("freeform-tool-input").style.display="none";1===a.length&&(this.value=a)};function W(a,b){this.a=a;this.c=b;this.b=null}g=W.prototype;g.start=function(a){this.b=a};g.j=function(a){Q(this.a);var b=S(this.a,this.b),c=S(this.a,a);T(this.a,this.b,a,b.f&&b.c||c.a&&c.b);this.c&&M(this.a,a,"^")};g.m=function(){N(this.a)};g.o=function(){return"crosshair"};g.l=function(){};function na(a){this.a=a;this.b=null;this.c=[]}g=na.prototype;
g.start=function(a){this.b=a;this.c=[];if(I(O(this.a,this.b))){for(var b=[],c=k(D),e=c.next();!e.done;e=c.next()){e=e.value;var f=oa(this,this.b,e);f=k(f);for(var d=f.next();!d.done;d=f.next()){d=d.value;var h=0!==e.x,l=-1!==C.indexOf(H(O(this.a,a))),n=-1!==C.indexOf(H(O(this.a,d)));if(1===K(S(this.a,d)))b.push({position:d,s:h,w:l,v:n});else for(var w=k(D),p=w.next();!p.done;p=w.next())if(p=p.value,0!==e.add(p).length()&&2!==e.add(p).length()&&(p=oa(this,d,p),0!==p.length)){p=k(p).next().value;var y=
-1!==C.indexOf(H(O(this.a,p)));b.push({position:p,s:h,w:l,A:n,v:y})}}}this.c=b;this.j(this.b)}};g.j=function(a){Q(this.a);for(var b=k(this.c),c=b.next();!c.done;c=b.next())c=c.value,T(this.a,this.b,c.position,c.s," ");b=k(this.c);for(c=b.next();!c.done;c=b.next())c=c.value,T(this.a,a,c.position,c.s);b=k(this.c);for(c=b.next();!c.done;c=b.next())c=c.value,c.w&&M(this.a,a,"^"),c.v&&M(this.a,c.position,"^"),c.A&&M(this.a,new q(c.s?c.position.x:a.x,c.s?a.y:c.position.y),"^")};g.m=function(){N(this.a)};
function oa(a,b,c){for(var e=new q(b.x,b.y),f=[];;){var d=e.add(c);if(!I(O(a.a,d)))return t(b,e)||f.push(e),f;e=d;3===K(S(a.a,e))&&f.push(e)}}g.o=function(a){return I(O(this.a,a))?"pointer":"default"};g.l=function(){};function pa(a){this.c=a;this.g=this.f=this.b=this.a=null;this.h=!0;this.i=[]}g=pa.prototype;g.start=function(a){null!==this.a&&null!==this.b&&G(new E(this.a,this.b),a)?(this.f=a,qa(this,this.a,this.b),ra(this,a,this.f)):(this.a=a,this.b=null,this.h=!1,this.j(a))};function qa(a,b,c){var e=a.c.b.filter(function(a){a=H(a.a);return null!==a&&"\u2009"!==a}),f=F(new E(b,c));a.i=e.map(function(a){return new L(u(a.position,f),H(a.a))})}
g.j=function(a){if(null!==this.f)ra(this,a,this.f);else if(!this.h){this.b=a;Q(this.c);a=new E(this.a,a);for(var b=a.a;b<=a.c;b++)for(var c=a.b;c<=a.f;c++){var e=new q(b,c),f=H(O(this.c,e));M(this.c,e,null===f?"\u2009":f)}}};function ra(a,b,c){a.g=b;Q(a.c);b=new V(a.c);b.start(a.a);b.j(a.b);c=u(a.g,c).add(F(new E(a.a,a.b)));sa(a,c)}function sa(a,b){for(var c=k(a.i),e=c.next();!e.done;e=c.next()){e=e.value;var f=e.value;M(a.c,e.position.add(b),f)}}
g.m=function(){null!==this.f&&(N(this.c),this.b=this.a=null);this.g=this.f=null;this.h=!0};g.o=function(a){return null!==this.a&&null!==this.b&&G(new E(this.a,this.b),a)?"pointer":"default"};g.l=function(a){if(null!==this.a&&null!==this.b&&("Copy"!==a&&"Cut"!==a||qa(this,this.a,this.b),"Cut"===a)){var b=new V(this.c);b.start(this.a);b.j(this.b);N(this.c)}"Paste"===a&&(sa(this,this.a),N(this.c))};function ta(a){this.b=a;this.c=this.a=null}g=ta.prototype;g.start=function(a){N(this.b);document.getElementById("text-tool-input").value="";this.a=a;a=H(O(this.b,this.a));M(this.b,this.a,null===a?"\u2009":a)};g.j=function(){};
g.m=function(){null!==this.a&&(this.c=this.a,this.a=null,document.getElementById("text-tool-widget").style.display="none",setTimeout(function(){document.getElementById("text-tool-widget").style.display="block";setTimeout(function(){document.getElementById("text-tool-input").focus()},0)},0))};g.o=function(){return"pointer"};
g.l=function(){var a=document.getElementById("text-tool-input").value;Q(this.b);var b=this.b,c=this.c,e=0,f=0;a=k(a);for(var d=a.next();!d.done;d=a.next())d=d.value,"\n"===d?(f+=1,e=0):(M(b,c.add(new q(e,f)),d),e+=1)};function ua(a){this.g=a;a=document.getElementById("ascii-canvas");if(null===a)throw Error('Element with id="ascii-canvas" not found');this.b=a;this.h=this.b.getContext("2d");this.c=1;this.a=new q(9E3,5100);this.f=!0;this.i=!1;va(this)}function va(a){a.b.width=document.documentElement.clientWidth;a.b.height=document.documentElement.clientHeight;a.f=!0}function wa(a){if(a.f||a.g.c)a.f=!1,a.g.c=!1,xa(a);window.requestAnimationFrame(function(){wa(a)})}
function xa(a){var b=a.h;b.setTransform(1,0,0,1,0,0);b.clearRect(0,0,a.b.width,a.b.height);b.scale(a.c,a.c);b.translate(a.b.width/2/a.c,a.b.height/2/a.c);var c=u(X(a,new q(0,0)),new q(3,3)),e=X(a,new q(a.b.width,a.b.height)).add(new q(3,3));c.x=Math.max(0,Math.min(c.x,2E3));e.x=Math.max(0,Math.min(e.x,2E3));c.y=Math.max(0,Math.min(c.y,600));e.y=Math.max(0,Math.min(e.y,600));b.lineWidth="1";b.strokeStyle="#EEEEEE";b.beginPath();for(var f=c.x;f<e.x;f++)b.moveTo(9*f-a.a.x,-a.a.y),b.lineTo(9*f-a.a.x,
17*a.g.a.length-a.a.y);for(f=c.y;f<e.y;f++)b.moveTo(0-a.a.x,17*f-a.a.y),b.lineTo(9*a.g.a.length-a.a.x,17*f-a.a.y);a.h.stroke();f=!a.i;b.font="15px Courier New";for(var d=c.x;d<e.x;d++)for(var h=c.y;h<e.y;h++){var l=O(a.g,new q(d,h));if(I(l)||null!==l.a&&" "!==H(l))a.h.fillStyle=null!==l.a?"#DEF":"#F5F5F5",b.fillRect(9*d-a.a.x,17*(h-1)-a.a.y,9,17);var n=R(a.g,new q(d,h));null===n||I(l)&&!f||(a.h.fillStyle="#000000",b.fillText(n,9*d-a.a.x,17*h-a.a.y-3))}if(a.i){b.lineWidth="1";b.strokeStyle="#000000";
b.beginPath();for(f=c.x;f<e.x;f++)for(d=!1,h=c.y;h<e.y;h++)l=O(a.g,new q(f,h)),I(l)&&h!==e.y-1||!d||(b.moveTo(9*f-a.a.x+4.5,17*d-a.a.y-8.5),b.lineTo(9*f-a.a.x+4.5,17*(h-1)-a.a.y-8.5),d=!1),I(l)&&!d&&(d=h);for(f=c.y;f<e.y;f++)for(d=!1,h=c.x;h<e.x;h++)l=O(a.g,new q(h,f)),I(l)&&h!==e.x-1||!d||(b.moveTo(9*d-a.a.x+4.5,17*f-a.a.y-8.5),b.lineTo(9*(h-1)-a.a.x+4.5,17*f-a.a.y-8.5),d=!1),I(l)&&!d&&(d=h);a.h.stroke()}}
function X(a,b){a=new q((b.x-a.b.width/2)/a.c+a.a.x,(b.y-a.b.height/2)/a.c+a.a.y);return new q(Math.min(Math.max(1,Math.round((a.x-4.5)/9)),1998),Math.min(Math.max(1,Math.round((a.y+8.5)/17)),598))};function ya(a,b){this.view=a;this.a=b;this.b=new U(b);this.mode=0;this.c=this.g=this.f=null;za(this)}function Y(){Array.prototype.forEach.call(document.getElementsByClassName("dialog"),function(a){return a.classList.remove("visible")})}function Aa(a,b){var c=X(a.view,b);null===a.c&&(a.c=c);t(c,a.c)||(a.view.b.style.cursor=a.b.o(c));2!==a.mode||t(c,a.c)||a.b.j(c);if(1===a.mode){var e=a.view;b=a.g.add(u(a.f,b).scale(1/a.view.c));e.a=b;e.f=!0}a.c=c}
function Z(a){2===a.mode&&a.b.m();a.mode=0;a.f=null;a.g=null;a.c=null}
function za(a){window.addEventListener("resize",function(){va(a.view)});Array.prototype.forEach.call(document.querySelectorAll("#draw-tools > button.tool"),function(b){return b.addEventListener("click",function(b){document.getElementById("text-tool-widget").style.display="none";Ba(a,b.target.id)})});Array.prototype.forEach.call(document.querySelectorAll("#file-tools > button.tool"),function(b){return b.addEventListener("click",function(b){b=b.target.id;Y();var c=document.getElementById(b+"-dialog");
c&&c.classList.toggle("visible");"import-button"===b&&(document.getElementById("import-area").value="",document.getElementById("import-area").focus());if("export-button"===b){c=document.getElementById("export-area");var f=a.a;for(var d=new q(Number.MAX_VALUE,Number.MAX_VALUE),h=new q(-1,-1),l=0;l<f.a.length;l++)for(var n=0;n<f.a[l].length;n++)null!==H(f.a[l][n])&&(l<d.x&&(d.x=l),n<d.y&&(d.y=n),l>h.x&&(h.x=l),n>h.y&&(h.y=n));if(0>h.x)f="";else{l="";for(n=d.y;n<=h.y;n++){for(var w="",p=d.x;p<=h.x;p++){var y=
R(f,new q(p,n));w+=null===y||"\u2009"===y?" ":y}l+=w.replace(/\s+$/,"");l+="\n"}f=l}c.value=f;document.getElementById("export-area").select()}"clear-button"===b&&ja(a.a);"undo-button"===b&&ka(a.a);"redo-button"===b&&la(a.a)})});Array.prototype.forEach.call(document.querySelectorAll("button.close-dialog-button"),function(a){return a.addEventListener("click",function(){Y()})});document.getElementById("import-submit-button").addEventListener("click",function(){ja(a.a);for(var b=a.a,c=X(a.view,new q(a.view.b.width/
2,a.view.b.height/2)),e=document.getElementById("import-area").value.split("\n"),f=new q(0,Math.round(e.length/2)),d=0;d<e.length;d++)f.x=Math.max(f.x,Math.round(e[d].length/2));for(d=0;d<e.length;d++)for(var h=e[d],l=0;l<h.length;l++){var n=h.charAt(l);B.includes(n)&&(n="+");M(b,u((new q(l,d)).add(c),f),n)}N(a.a);document.getElementById("import-area").value="";Y()});document.getElementById("use-lines-button").addEventListener("click",function(){Y();var b=a.view;b.i=!0;b.f=!0});document.getElementById("use-ascii-button").addEventListener("click",
function(){Y();var b=a.view;b.i=!1;b.f=!0});window.addEventListener("keydown",function(b){a:{var c=null;if((b.ctrlKey||b.metaKey)&&!b.altKey&&!b.shiftKey){"c"===b.key&&(c="Copy");"v"===b.key&&(c="Paste");if("z"===b.key){ka(a.a);break a}if("y"===b.key){la(a.a);break a}"x"===b.key&&(c="Cut")}a.b.l(null===c?b.key:c)}});document.getElementById("text-tool-input").addEventListener("keyup",function(){a.b.l("")});document.getElementById("freeform-tool-input").addEventListener("keyup",function(){a.b.l("")});
document.getElementById("text-tool-input").addEventListener("change",function(){a.b.l("")});document.getElementById("freeform-tool-input").addEventListener("change",function(){a.b.l("")});document.getElementById("text-tool-close").addEventListener("click",function(){document.getElementById("text-tool-widget").style.display="none";N(a.a)})}
function Ba(a,b){Array.prototype.forEach.call(document.querySelectorAll("#draw-tools > button.tool"),function(a){return a.classList.remove("active")});document.getElementById(b).classList.toggle("active");Y();"box-button"===b&&(a.b=new U(a.a));"line-button"===b&&(a.b=new W(a.a,!1));"arrow-button"===b&&(a.b=new W(a.a,!0));"freeform-button"===b&&(a.b=new ma(a.a));"erase-button"===b&&(a.b=new V(a.a));"move-button"===b&&(a.b=new na(a.a));"text-button"===b&&(a.b=new ta(a.a));"select-button"===b&&(a.b=
new pa(a.a));N(a.a);a.view.b.focus()};function Ca(a){this.a=a;Da(this)}
function Da(a){var b=a.a.view.b;b.addEventListener("wheel",function(b){b=a.a.view.c*Math.pow(.9,0===b.deltaMode?b.deltaY/120:Math.sign(b.deltaY));b=Math.max(Math.min(b,5.396595277354286),.18530201888518424);var c=a.a.view;c.c=b;c.f=!0});b.addEventListener("mousedown",function(b){if(b.ctrlKey||b.metaKey){var c=a.a;b=new q(b.clientX,b.clientY);c.mode=1;c.f=b;c.g=c.view.a}else c=a.a,b=new q(b.clientX,b.clientY),c.mode=2,c.b.start(X(c.view,b))});b.addEventListener("mouseup",function(){Z(a.a)});b.addEventListener("mouseleave",
function(){Z(a.a)});b.addEventListener("mousemove",function(b){Aa(a.a,new q(b.clientX,b.clientY))})}function Ea(a){this.a=a;this.c=null;this.i=this.g=NaN;this.h=0;this.f=this.b=!1;Fa(this)}function Ga(a,b){a.c=b;a.h=Date.now();a.b=!1;window.setTimeout(function(){if(!a.b&&!a.f&&null!==a.c){var c=a.a;c.mode=2;c.b.start(X(c.view,b))}},150)}
function Fa(a){var b=a.a.view.b;b.addEventListener("touchstart",function(b){b.preventDefault();if(1===b.touches.length)Ga(a,r(b));else if(1<b.touches.length){var c=r(b,0);b=r(b,1);Z(a.a);a.f=!0;a.b=!1;a.i=u(c,b).length();a.g=a.a.view.c}});b.addEventListener("touchmove",function(b){b.preventDefault();if(1===b.touches.length){b=r(b);if(!a.b&&150>Date.now()-a.h&&6<u(b,a.c||new q(0,0)).length()){a.b=!0;var c=a.a;c.mode=1;c.f=b;c.g=c.view.a}Aa(a.a,b)}else 1<b.touches.length&&a.f&&(b=a.g*u(r(b,0),r(b,1)).length()/
a.i,b=Math.max(Math.min(b,5),.5),c=a.a.view,c.c=b,c.f=!0)});b.addEventListener("touchend",function(b){b.preventDefault();a.b=!1;a.f=!1;a.c=null;Z(a.a)})};if(window.ASCIIFLOW2_LOADED)throw Error("Unexpected double initialization of JS.");else window.ASCIIFLOW2_LOADED=!0;(function(){var a=new ia,b=new ua(a);a=new ya(b,a);new Ea(a);new Ca(a);wa(b);window.setTimeout(function(){document.getElementById("logo-interstitial").style.display="none"},3E3)})();})();
//# sourceMappingURL=js-compiled.js.map
