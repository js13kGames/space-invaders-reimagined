(function(){function gb(){if(0!=Wa.length){var a=Wa.shift(),b=a[1];D.getElementById("text").textContent=a[0];Xa+=b;D.getElementById("pbar-in").style.width=2*Xa+"px";a[2]();setTimeout(gb,0)}}function hb(a){var b=fa(3.5,(a-Ya)/32);Ya=a;a=(sa/3|0)%ta;var c=T[32]?1.65:.6;T[37]||T[65]||T[83]?d.b.x=ca(-10,d.b.x-c):T[39]||T[68]||T[70]?d.b.x=fa(10,d.b.x+c):d.ba=d.g>ga/2||d.g<-ga/2;!d.P&&d.aa&&(d.b.x+=ib(1.5,d.b.x,.02));ha.h=!d.N&&T[32];c=d.a.y<A;d.b.scale(c?.99:.76);d.b.y=Y(-10,20,d.b.y+(ha.h?-.25:d.P?.8:
.5));d.a.add(Za(d.b,b));d.a.y>A&&(c&&(u[u.length*(1-k/2/k)|0].f=22*d.b.y,console.log("wave "+22*d.b.y),K.h=!0,K.position.x=d.a.x,K.position.y=d.a.y+f-8,K.speed=.75*d.b.y,K.n=20*y(d.b.y)),d.a.y>A+.5*l&&(d.a.y=0));d.a.x>ia+k&&(d.a.x=-k);d.a.x<-k&&(d.a.x=ia+k);a:{var c=Z(d.a.x/e|0,(d.a.y-.4*f)/e|0),m=!1,n=!1,v=!1,h=0,s=0;d.aa=c==$||c==Ha||1==c;0<d.b.x&&(h=f/4,s=-d.a.x%e);0>d.b.x&&(h=f/-4,s=-d.a.x%e+e);ja(Z((d.a.x+h)/e|0,(d.a.y-.8*f)/e|0))&&(n=!0,ja(Z((d.a.x+h)/e|0,(d.a.y-.6*f)/e|0))&&(m=!0));ja(Z((d.a.x+
h)/e|0,(d.a.y+2*e)/e|0))&&(v=!0,ja(Z((d.a.x+h)/e|0,d.a.y/e|0))&&(m=!0));if(v||n)if(m&&(d.b.x*=-.3,d.a.x+=s),.2>y(d.b.y)?d.b.y=0:d.b.y*=0<d.b.y&&v||0>d.b.y&&n?-.3:.3,n&&(d.a.y+=e-d.a.y%e,m||(d.a.y+=e),d.b.x*=.2),v){d.a.y-=d.a.y%e;m&&(d.a.y-=e);d.P=!0;jb=0;break a}6<jb++&&(d.P=!1)}d.P?.3>y(d.b.x)?d.b.x=0:d.b.x*=.8:d.a.y<-20*e&&(d.N=20);0<d.N&&d.N--;d.g=Math.atan2(L+kb-d.a.y+.72*f,N+lb-d.a.x);ua&&0>=d.r&&(Ia.g=360*d.g/x,Ia.l(d.a.x,d.a.y-.72*f),d.r+=b);d.r=0<d.r&&300>d.r?d.r+b:-20;c=d.a.y<Lb;L=d.a.y-
l/2|0;N=d.a.x-k/2|0;t.setTransform(1,0,0,1,-N,-L);w.setTransform(1,0,0,1,-N,-L);c&&(Ja.setTransform(1,0,0,1,-N,-L),$a.position.x=d.a.x-30*e);ha.position.x=d.a.x-(d.ba?5:15);ha.position.y=d.a.y-25;Mb(b);ha.update(b);Ia.update(b);K.update(b);va.update(b);c&&($a.update(b),M.update(b));w.clearRect(N,L,k,l);Ja.clearRect(N,L,k,l);t.clearRect(N,L,k,l);t.save();t.globalCompositeOperation="lighter";ha.B(t);t.restore();t.beginPath();Ia.B(t);t.strokeStyle="rgba(220, 40, 40, .5)";t.lineWidth=7;t.stroke();t.lineWidth=
2;t.strokeStyle="rgba(255,225,225,.8)";t.stroke();va.B(t);c&&($a.B(Ja),M.B(Ja));Ka&&(c=d.a,m=d.g,n=Ka,t.save(),t.translate(c.x-f/2,c.y-f),d.ba&&(t.translate(f,0),t.scale(-1,1),m=ga-m),t.drawImage(n,0,0,f,f,0,0,f,f),t.translate(f/3+f/9,f/3),t.rotate(m),t.drawImage(n,f,0,f,f,-f/3,-f/3,f,f),t.restore());w.save();K.B(w);w.restore();d.a.y>A-l&&(mb!=a&&(w.fillStyle=wa[a],mb=a),Nb());A-=.01*b;A<La-1E3&&(A=La-10);1E7>U&&(xa[da].clearRect(U-ka,aa-la,ya-U-2,za-aa-2),ma(xa[da],U,aa,U-ka-1,aa-la-1,ya-U,za-aa),
U=aa=1E7,ya=za=-1E7);var n=d.a.x,p=d.a.y,n=n-O/2,p=p-P/2,v=xa[da],b=n-ka;a=p-la;c=y(b);m=y(a);if(c||m){if(c>O||m>P)ka=n,la=p,ma(v,n,p,0,0,O,P);else if(200<c||200<m){ka=n;la=p;var g,H,Q,ab,v=0;0>b?(g=c,H=0):(g=0,H=c);0>a?(Q=m,ab=0):(ab=m,Q=0);var q=O-c,r=P-m,h=1-da,s=xa[h];s.clearRect(0,0,O,P);s.drawImage(bb[da],H,ab,q,r,g,Q,q,r);0>a?(ma(s,n,p,0,0,O,m),v=m,p+=m):ma(s,n,p+P-m,0,P-m,O,m);0>b?ma(s,n,p,0,v,c,P-m):(n+=O-c,ma(s,n,p,O-c,v,c,P-m));da=h;b=a=0}E.clearRect(0,0,k,l);E.drawImage(bb[da],200+b,200+
a,k,l,0,0,k,l)}Ma(hb);sa++;E.fillText("Wind: 1.5",k/2,50);d.N&&E.fillText("Engine FROZEN!",k/2,l/2-100)}function nb(a){var b=a.position.x;va.l(b,a.position.y);if(a=u[u.length*(1-(b-N)/k)|0+(q(-1,2)|0)])a.f+=1}function ib(a,b,c){a-=b;return Y(-10,10,y(a)*a*c)}function Na(){return 1.5}function Ob(a){return Oa(k,l,function(b){var c=new Int8Array(k*l),m=new Int8Array(k*l),n=0;ba(k,l,function(b,h){c[n]=na(5*(b-k/2)/(3*h/l+.6)+5*B(a+x*(b+2*h)/k)+3*B(a+2*x*(b+h)/k));m[n]=na(5*(2*h/l+.6)*B(a+4*x*(b+h/2)/
k)*B(a+3.5*x*(b+h)/k));n++});Pb(c,m,R,b,k,l)})}function oa(){if(!R){R=[];for(var a=0,b=0;b<l;b++)for(var c=q(5,25)|0,m=q(10,35)|0,n=q(20,40)|0,d=0;d<k;d++){var h=q(25,50)|0,s=q(30,65)|0,p=q(70,120)|0;R[a++]=20+(h+c>>1)+na(5*B(b*x/10));R[a++]=25+(s+m>>1)+na(5*B(b*x/12));R[a++]=30+(p+n>>1)+na(8*B(b*x/13));R[a++]=255;c=h;m=s;n=p}a=[];ob({data:R,width:k,height:l},a,[.1,.1,.1,.1,.2,.1,.1,.1,.1]);R=a}wa.push(w.createPattern(Ob(wa.length*x/ta),"repeat"))}function Nb(){if(!(L+2*l<A)){w.translate(N,0);w.beginPath();
w.moveTo(k,L+l);w.lineTo(0,L+l);var a=0;Aa(u,function(b){w.lineTo(a,b.height+3*B((a-5.25*sa)/322*x+4*B((a-3*sa)/511*x)+4*B((a-1.5*sa)/733*x)));a+=pb});w.closePath();w.fill();w.stroke()}}function Mb(a){var b=0;Aa(u,function(m){m.f+=a*(-.04*(m.height-A)-.025*m.f);m.height+=m.f*a;b=ca(b,y(m.f))});if(1<b){var c=[],m=[];C(qb,function(){for(var a=0;a<u.length;a++)0<a&&(c[a]=.25*(u[a].height-u[a-1].height),u[a-1].f+=c[a]),a<u.length-1&&(m[a]=.25*(u[a].height-u[a+1].height),u[a+1].f+=m[a]);for(a=0;a<u.length;a++)0<
a&&(u[a-1].height+=c[a]),a<u.length-1&&(u[a+1].height+=m[a])})}}function ja(a){return a==Pa||a==rb||a==pa}function sb(a,b){var c=tb[Z(a,b)];return void 0===c?Qb:c}function Z(a,b){return 0>b?$:0>a?b>=1E3-.4*a?Pa:$:2048<=a?b>=1E3+.4*(a-2048)?Pa:$:1E3<=b?Pa:Qa[2048*b+a]}function Ra(a,b,c){Qa[2048*b+a]=c;a*=e;b*=e;U=fa(U,a-2*e);aa=fa(aa,b-2*e);ya=ca(ya,a+2*e);za=ca(za,b+2*e)}function ma(a,b,c,m,d,v,h){var s=v/e|0,p=h/e|0,k=b/e|0;b=c/e|0;var H=ka;c=la;a.save();a.translate(-H,-c);a.rect(H+m,c+d,v,h);a.clip();
m-=e;m-=m%e;d-=e;d-=d%e;for(var s=s+4,p=p+2,H=H+m,Q=c+d,g=b;g<b+p;g++){var f=sb(k,g),l=0;C(s,function(b){var m=sb(k+b,g);if(m!=f||b>=s-1){if(f){a.fillStyle=f;a.beginPath();a.moveTo(H+l*e+V[y(11*l+3*g)%80],Q+V[y(9*l+7*g)%80]);for(var c=l+1;c<=b;c++)a.lineTo(H+c*e+V[y(11*c+3*g)%80],Q+V[y(9*c+7*g)%80]);c--;for(a.lineTo(H+c*e+V[y(11*c+3*(g+1))%80],1+Q+e+V[y(9*c+7*(g+1))%80]);c>=l;c--)a.lineTo(H+c*e+V[y(11*c+3*(g+1))%80],1+Q+e+V[y(9*c+7*(g+1))%80]);a.closePath();a.fill()}l=b}f=m});Q+=e}a.restore()}function Ba(a,
b,c){return Oa(g,g,function(m){var d=0;ba(g,g,function(v,h){m[d++]=a(v,h);m[d++]=b(v,h);m[d++]=c(v,h);m[d++]=255})})}function Rb(){return function(a){var b=fa(a.w,.4);return Ca((b+.08)/2,(a.C+.31)/2,(a.b+.16)/2)}}function ub(a){T[a.keyCode]="keydown"==a.type;(32==a.keyCode||37<=a.keyCode&&40>=a.la)&&a.preventDefault()}function qa(a,b){var c={I:0,S:0,v:0,m:.3,G:function(){},U:function(a,b){var c=b.size,h=c>>1,d=b.position.x|0,p=b.position.y|0,h=a.createRadialGradient(d+h,p+h,b.V,d+h,p+h,h);h.addColorStop(0,
b.X);h.addColorStop(1,b.Y);a.fillStyle=h;a.fillRect(d,p,c,c)},ha:function(a,b){this.da({O:a,A:[],Z:[],h:!0,t:r(0,0),o:r(0,.3),elapsedTime:0,duration:-1,n:0,p:0,T:0,H:0,u:0,F:0,D:0,p:0});this.da(b||{})},da:function(a){for(var b in a)this[b]=a[b];this.i||(this.i=this.size);this.n||(this.n=this.O/this.s)},l:function(a,b){if(this.A.length>=this.O)return null;var c=this.Z.shift()||{position:r(0,0),color:[],j:[]};this.ia(c,a||this.position.x,b||this.position.y);this.A.push(c);return c},ia:function(a,b,
c){a.position.x=b+this.t.x*q(-1,1);a.position.y=c+this.t.y*q(-1,1);b=(this.g+this.H*q(-1,1))*(ga/180);b=r(Math.cos(b),B(b));c=this.speed+this.F*q(-1,1);a.direction=Za(b,c);a.size=this.size+this.u*q(-1,1);a.size=1>=a.size?1:a.size|0;a.i=this.i+this.u*q(-1,1);a.c=this.s+this.T*q(-1,1);a.d=this.d+this.D*q(-1,1);a.d=100<a.d?100:0>a.d?0:a.d;a.V=a.size/200*a.d|0;var h=[this.e[0],this.e[1],this.e[2],this.e[3]];if(this.J){var d=this;C(4,function(a){h[a]+=d.J[a]*q(-1,1)})}this.k&&(b=[this.k[0]+this.q[0]*q(-1,
1),this.k[1]+this.q[1]*q(-1,1),this.k[2]+this.q[2]*q(-1,1),this.k[3]+this.q[3]*q(-1,1)],a.j[0]=(b[0]-h[0])/a.c,a.j[1]=(b[1]-h[1])/a.c,a.j[2]=(b[2]-h[2])/a.c,a.j[3]=(b[3]-h[3])/a.c);a.color=h;a.W=(a.i-a.size)/a.c},update:function(a){a/=31;if(this.h&&0<this.n){var b=1/this.n;for(this.p+=a;this.A.length<this.O&&this.p>b;)this.l(),this.p-=b;-1!=this.duration&&(this.elapsedTime+=a,this.duration<this.elapsedTime&&this.ka())}var c=this;Aa(this.A,function(b,d){if(0<b.c){c.o&&(b.direction=vb(b.direction,c.o));
c.v&&(b.direction.x+=ib(c.v(b),b.direction.x,c.m));if(c.S)for(var n=0;n<c.S.length;n++){var e=c.S[n];b.direction=vb(b.direction,Za(wb(b.position,e[1]),e[0]))}b.position.add(b.direction);b.c-=a;c.G(b,d)}0<b.c?(b.size+=b.W*a,b.V=b.size/200*b.d|0,b.j.length&&(b.color[0]+=b.j[0]*a,b.color[1]+=b.j[1]*a,b.color[2]+=b.j[2]*a,b.color[3]+=b.j[3]*a),n="rgba("+[Y(0,255,b.color[0]|0),Y(0,255,b.color[1]|0),Y(0,255,b.color[2]|0)].join(),b.Y=c.I||n+",0)",b.X=n+","+Y(0,1,b.color[3].toFixed(2))+")"):(c.A.splice(d,
1),c.Z.push(b))})},ka:function(){this.h=!1;this.p=this.elapsedTime=0},B:function(a){var b=this;Aa(this.A,function(c){b.U(a,c)})}};c.ha(a,b);return c}function wb(a,b){return r(a.x-b.x,a.y-b.y)}function vb(a,b){return r(a.x+b.x,a.y+b.y)}function Za(a,b){return r(a.x*b,a.y*b)}function r(a,b){return{x:a||0,y:b||0,scale:function(a){this.x*=a;this.y*=a},add:function(a){this.x+=a.x;this.y+=a.y},sub:function(a){this.x-=a.x;this.y-=a.y}}}function xb(a){var b=a.canvas.width,c=a.canvas.height,d=W(b,c);cb(a,
F(d),[-1,0,0,0,0,0,-2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0]);var n=cb(a,0,[0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,-2,0,0,0,0,0,-1]),v=0,h=n.data;C(b*c,function(){C(3,function(){h[v]=255-h[v];v++});v++});var s=W(b,c);F(s).putImageData(n,0,0);a.globalCompositeOperation="darken";a.drawImage(s,0,0,b,c);a.globalCompositeOperation="lighter";a.drawImage(d,0,0,b,c)}function cb(a,b,c){var d=db(a);a=(b||a).createImageData(d.width,d.height);ob(d,a.data,c);if(!b)return a;b.putImageData(a,0,0)}function ob(a,b,c){var d=
na(Sb(c.length)),n=d/2|0,v=a.data,h=a.width,s=a.height,e=0;ba(h,s,function(a,g){var k=0,f=0,l=0;ba(d,d,function(b,e){var p=g+e-n,q=a+b-n,p=p+10*s,p=p%s,q=q+10*h,q=q%h,p=4*(p*h+q),q=c[e*d+b];k+=v[p]*q;f+=v[p+1]*q;l+=v[p+2]*q});b[e++]=k;b[e++]=f;b[e++]=l;b[e++]=255})}function Pb(a,b,c,d,n,e){var h=0,s=0,p=20*n,g=20*e;ba(n,e,function(k,f){var l=a[s],q=b[s];s++;l=4*((k-l+p)%n+(f-q+g)%e*n);d[h++]=c[l++];d[h++]=c[l++];d[h++]=c[l++];d[h++]=c[l]})}function Da(a,b){var c=db(a),d=c.data,n=0;C(c.width*c.height,
function(){var a=d[n],c=d[n+1],e=d[n+2],a=a/255,c=c/255,e=e/255,p,g,k,f=Math.max(a,c,e),l=f-Math.min(a,c,e);0==l?a=k=0:(k=l/f,p=(f-a)/6/l+.5,g=(f-c)/6/l+.5,e=(f-e)/6/l+.5,a=a===f?e-g:c===f?1/3+p-e:2/3+g-p,0>a?a++:1<a&&a--);k=b({w:a,C:k,b:f});d[n++]=k.ja;d[n++]=k.ga;d[n++]=k.fa;n++});a.putImageData(c,0,0)}function Ca(a,b,c){void 0===b&&(b=a.C,c=a.b,a=a.w);var d=6*a|0,e=6*a-d;a=c*(1-b);var g=c*(1-e*b);b=c*(1-(1-e)*b);var h,f,p;switch(d%6){case 0:h=c;f=b;p=a;break;case 1:h=g;f=c;p=a;break;case 2:h=a;
f=c;p=b;break;case 3:h=a;f=g;p=c;break;case 4:h=b;f=a;p=c;break;case 5:h=c,f=a,p=g}return{ja:255*h|0,ga:255*f|0,fa:255*p|0}}function z(a,b,c,d,e,f,h,g,p,k){function l(t,u){var w=u*a+t;try{return r[w]?r[w]:r[w]=X(k)|0?Y(0,255,(X(p)|0)+l((a+t-(q(e,f)|0))%a,(b+u-(q(h,g)|0))%b)):q(c,d)|0}catch(x){return r[w]=q(c,d)|0}}var r=[];return l}function S(a,b,c){Wa.push([a,b,c])}function Oa(a,b,c){a=W(a,b);b=F(a);var d=db(b);c(d.data,b,a);b.putImageData(d,0,0);return a}function db(a){return a.getImageData(0,0,
a.canvas.width,a.canvas.height)}function q(a,b){return a+X(b-a)}function X(a){return ea()*a}function eb(a){return a*a}function F(a){return a.getContext("2d")}function W(a,b){var c=D.createElement("canvas");c.width=a||k;c.height=b||l;return c}function ba(a,b,c){for(var d=0;d<b;d++)for(var e=0;e<a;e++)c(e,d)}function Y(a,b,c){return fa(b,ca(a,c))}function Aa(a,b){for(var c=a.length-1;0<=c&&!b(a[c],c);c--);}function C(a,b){for(var c=0;c<a;c++)b(c)}function ea(){var a=2091639*G.Q+G.K*G.L;G.Q=G.R;G.R=
G.M;G.K=a|0;G.M=a-G.K;return G.M}var Ea=250,yb=400,ta=10,qb=8,e=7,k=1E7,l=0,I=1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(Ea=200,yb=300,ta=5,qb=4);for(;(l>innerHeight||k>innerWidth)&&3<e;)e--,I=e/7,k=1715*I|0,l=1400*I|0;var ia=2048*e,La=1E3*e,A=La-150,wa=[],N=0,L=0,G={ea:function(a){a=1>a?1/a:a;this.Q=(a>>>0)*this.L;a=69069*a+1>>>0;this.R=a*this.L;this.M=(69069*a+1>>>0)*this.L;this.K=1;return this},Q:0,R:0,M:0,K:0,L:2.3283064365386963E-10};G.ea(5);
var zb=[],ra=[],D=document;D.getElementById("overlay").style.width=k+"px";D.getElementById("overlay").style.left=(-k>>1)+"px";var Tb=D.getElementById("canvas_cont");C(5,function(){var a=W();a.style.left=(-k>>1)+"px";Tb.appendChild(a);zb.push(a);ra.push(F(a))});var fb=ra[0],Ja=ra[1],E=ra[2],t=ra[3],w=ra[4],y=Math.abs,fa=Math.min,ca=Math.max,B=Math.sin,na=Math.round,Sb=Math.sqrt,ga=Math.PI,x=2*ga,Ma=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame;if(!Ma)var Ab=
0,Ma=function(a){var b=Date.now(),c=ca(0,16-(b-Ab));window.setTimeout(function(){a(b+c)},c);Ab=b+c};var Wa=[],d={a:r(50*e,900*e),b:r(),r:0},Ub=function(a,b,c){return Oa(b,c,function(d){for(var e=0,f=0;f<c;f++)for(var h=0;h<b;){for(var g=a[e++],p=f*b+h,k=0;16>k;k++){var l=255*(g&3)/3|0,q=4*(p+15-k),g=g>>2;d[q++]=l;d[q++]=l;d[q++]=l;d[q++]=0==l?0:255}h+=16}})}([0,0,0,44016,0,0,176124,0,0,152917,0,0,177556,0,0,174826,0,1024,174680,5119,-2096,174752,1365,1431655764,175088,5467,-445688492,437244,86,-50380800,
437247,6,-1124253696,1747967,1,-1359396864,437247,0,1788870656,1485823,0,444596224,1485823,0,83886080,1485567,0,0,1747711,0,0,1485804,0,0,48175,0,0,15407,0,0,11307,0,0,11304,0,0,11307,0,0,11051,0,0],48,24),Ka=0,f=64*I|0,Vb=W(2*f,f),Bb=F(Vb);Bb.drawImage(Ub,0,0,2*f,f);var Ka=W(2*f,f),Cb=F(Ka),Sa=Bb.getImageData(0,0,2*f,f).data,Db=Cb.createImageData(2*f,f),Ta=Db.data,J=0;ba(2*f,f,function(){Ta[J]=Sa[J];J++;Ta[J]=Sa[J];J++;Ta[J]=Sa[J]/2;J++;Ta[J]=Sa[J];J++});Cb.putImageData(Db,0,0);var jb=0,T={};D.onkeydown=
ub;D.onkeyup=ub;D.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);var lb=0,kb=0,ua=0;D.onmousemove=function(a){var b=zb[1].getBoundingClientRect();lb=a.clientX-b.left;kb=a.clientY-b.top};D.onmousedown=function(a){ua|=1<<a.button};D.onmouseup=function(a){ua&=~(1<<a.button)};var Eb;S("Painting Sky",5,function(){Eb=Oa(Ea,l,function(a){var b=0;C(Ea,function(){a[b++]=40;a[b++]=50;a[b++]=80;a[b++]=255});var c=210/l,d=4*Ea;ba(Ea,l-1,function(){a[b]=(a[b-4]+a[b-d]+(X(2)|0)>>1)+(ea()<
c?X(2)|0:0);b++;a[b]=(a[b-4]+a[b-d]+(X(2)|0)>>1)+(ea()<c?X(2)|0:0);b++;a[b]=(a[b-4]+a[b-d]+(X(2)|0)>>1)+(ea()<c?X(2)|0:0);b++;a[b++]=255})});fb.fillStyle=fb.createPattern(Eb,"repeat-x");fb.fillRect(0,0,k,l);oa()});var g=yb,Ua,Fb,Gb,Fa,Va,Hb,Ib,Jb,Kb,Ga;S("Chiseling rocks",10,function(){function a(a,b){return function(c,d){return ca(b,a(c,d))}}Ua=Ba(z(g,g,120,180,-3,3,-3,3,-1,200),z(g,g,70,130,-3,3,-3,3,-1,100),z(g,g,40,80,-3,3,-3,3,-2,100));var b=Ba(z(g,g,60,180,-1,2,1,3,-2,100),z(g,g,70,220,-1,2,
1,3,-1,200),z(g,g,70,100,-1,2,1,3,-3,100)),c=Ba(a(z(g,g,60,110,1,3,-3,0,-4,100),20),a(z(g,g,80,160,1,3,-3,0,-2,500),30),a(z(g,g,20,40,1,3,-3,0,4,1E3),80));Fb=E.createPattern(b,"repeat");Da(F(b),function(a){return Ca(a.w,a.C/4,.4*a.b)});Gb=E.createPattern(b,"repeat");Da(F(c),function(a){return Ca(a.w,.1*a.C,Y(.75,1,1.1*a.b))});Ib=E.createPattern(c,"repeat");oa()});S("Chiseling rocks",10,function(){Va=Ba(z(g+7,g+7,80,140,-2,4,-2,4,2,300),z(g+7,g+7,80,140,-2,4,-2,4,-1,300),z(g+7,g+7,40,80,-2,4,-2,4,
-2,300));var a=Ba(z(g,g,30,50,1,4,1,4,5,100),z(g,g,120,180,1,4,1,4,-2,200),z(g,g,150,220,1,4,1,4,-2,200));Fa=F(Va);Ga=F(Ua);var b=F(a);Da(b,function(a){return Ca(a.w,.3*a.C,.5*a.b)});Aa([Fa,Ga,b],function(a){cb(a,a,[.1,.1,.1,.1,.2,.1,.1,.1,.1])});Jb=E.createPattern(a,"repeat");oa()});S("Chiseling rocks",10,function(){xb(Fa);Da(Fa,function(a){return Ca(a.w,.3*a.C,.5*a.b)});xb(Ga);Da(Ga,Rb());Kb=E.createPattern(Ua,"repeat");Hb=E.createPattern(Va,"repeat");Ua=Va=Fa=Ga=0;oa()});var Qa,O=k+400,P=l+400,
V=[],da=0,bb=[],xa=[];S("Digging Caves",10,function(){G.ea(1);var a=W(2048,1E3),b=F(a);b.fillStyle="rgba(0,0,0,0)";b.fillRect(0,0,2048,1E3);b.shadowColor="#400000";b.shadowBlur=0;b.shadowOffsetX=0;b.shadowOffsetY=-14;b.fillStyle="#600000";var c=[];c[2048]=0;(function(a,b,c){var d=a.length-1;c=Math.pow(2,-c);b*=c;var e=d/2;for(a[0]=a[d]=0;e;){for(var f=e;f<d;f+=2*e)a[f]=b*q(.2,1)+(a[f-e]+a[f+e])/2;b*=c;e>>=1}})(c,1500,.7);b.beginPath();b.lineTo(0,1E3);C(2048,function(a){c[a]+=400*eb(B(2*x*a/2048))*
eb(B(ga+3*x*a/2048));c[a]*=1/(1+eb(.001*(a-1024)));b.lineTo(a,1E3-c[a])});b.lineTo(2049,1E3);b.closePath();b.fill();b.clip();b.shadowOffsetY=3;b.lineWidth=22;b.shadowColor="#800000";b.beginPath();b.strokeStyle="#a00000";b.moveTo(0,600);b.lineTo(2048,900);b.moveTo(0,900);b.lineTo(2048,600);b.moveTo(204.8,0);b.lineTo(1433.6,810);b.moveTo(1843.2,0);b.lineTo(614.4,810);b.stroke();b.beginPath();b.fillStyle="#a00000";b.arc(204.8,750,30,0,x);b.arc(1843.2,750,30,0,x);b.fill();Qa=new Uint8Array(2048E3);var d=
b.getImageData(0,0,2048,1E3).data,e=0,f=0;ba(2048,1E3,function(a,b){var g=d[e+=4]>>5,k=b/1E3;.4>k&&(g==Ha||g==rb)&&b<1E3-c[a]+100*(.4-k)&&(g=pa);Qa[f++]=g})});C(2,function(){var a=W(O,P);bb.push(a);xa.push(a.getContext("2d"))});C(80,function(){V.push(q(-(e>>1),1+(e>>1))|0)});var tb={},U=1E7,aa=1E7,ya=-1E7,za=-1E7,$=0,Ha=2,rb=3,Qb=4,Pa=6,pa=7;S("Digging Caves",10,function(){tb=[0,Gb,Fb,Hb,Jb,Kb,"#333",Ib];oa()});var ka=1E7,la=0,R;C(ta-wa.length,function(){S("Waving waves",3,function(){wa.length<ta&&
oa()})});S("Waving waves",1,function(){R=null});w.strokeStyle="rgba(200,200,250,0.3)";w.lineWidth=3;var pb=10,u=[];C(k/pb+1,function(){u.push({height:A,f:0})});w.globalAlpha=.9;var sa=0,mb,ha=qa(350,{position:r(),g:90,H:10,duration:-1,k:[200,45,10,0],q:[40,40,40,0],o:r(0,.03),s:1,t:r(4,6),d:12,D:12,size:30*I|0,i:75*I|0,I:"rgba(40,20,10,0)",u:4,speed:4,F:1,n:140,e:[220,188,88,1],J:[32,35,38,0],G:function(a){if(a.position.y>A)a.c=0,nb(a);else{var b=(a.position.x/e|0)+1,c=(a.position.y/e|0)+1,d=Z(b,
c);d==Ha||d==pa?(a.c=0,va.l(a.position.x,a.position.y),d==pa?(K.speed=3,K.l(a.position.x,a.position.y),Ra(b,c,$)):Ra(b,c,.8>ea()?1:$)):ja(d)&&(a.position.sub(a.direction),a.direction.y*=-1)}},v:function(){return d.aa?1.5:0},m:.1}),Ia=qa(100,{h:!1,o:0,position:r(),e:[200,50,50,.8],speed:e,s:3,U:function(a,b){a.moveTo(b.ca.x,b.ca.y);a.lineTo(b.position.x,b.position.y)},G:function(a){if(!(0>a.c)){a.ca=wb(a.position,a.direction);for(var b=0;6>b&&a.c;b++){a.position.y>A&&(a.c*=.8,nb(a));var c=(a.position.x/
e|0)+1,d=(a.position.y/e|0)+1,f=Z(c,d);f==Ha||f==pa?(va.l(a.position.x,a.position.y),f==pa?(K.speed=3,K.l(a.position.x,a.position.y),Ra(c,d,$)):(a.c=0,Ra(c,d,.8>ea()?1:$))):ja(f)&&(a.c=0);a.position.add(a.direction)}a.c||(a.position.sub(a.direction),a.c=1E-5)}}}),$a=qa(450,{h:!0,position:r(d.a.x,-60*e),g:90,H:180,duration:-1,k:[240,240,250,.1],q:[10,10,10,0],o:r(0,.02),s:25,t:r(.7*k,5*e),d:12,D:12,size:20*I|0,i:10*I|0,u:2,I:"rgba(40,40,40,0)",speed:.2,F:.1,e:[220,220,230,1],J:[22,22,22,0],v:Na,G:function(a,
b){a.position.x+=B(x*b/50+.001*Ya)},m:.4}),M=qa(350,{h:!1,position:r(ia/2,-125*e),g:0,duration:-1,k:0,o:0,s:10,n:-1,t:r(ia/2,10*e),d:60,D:6,size:240*I|0,i:240*I|0,u:30,speed:.2,F:.1,e:[150,150,150,1],v:Na,m:.2,G:function(a){a.c=1E3;a.position.x+=ia;a.position.x%=ia},U:function(a,b){var c=b.size|0,d=b.position.x|0,e=b.position.y|0;if(!b.$){var f=c>>1,h=W(2*c,c),g=F(h),f=g.createRadialGradient(f,f,b.V,f,f,f);f.addColorStop(0,b.X);f.addColorStop(1,b.Y);g.scale(2,1);g.fillStyle=f;g.fillRect(0,0,c,c);
b.$=h}a.drawImage(b.$,d,e,2*c,c)}}),va=qa(250,{h:!1,position:r(),g:-90,H:20,duration:10,k:[40,40,40,0],q:[10,10,10,0],o:r(0,-.25),s:.8,T:.2,t:r(2,2),d:12,D:12,size:45*I|0,i:60*I|0,u:6,I:"transparent",speed:1.2,F:.1,e:[220,220,220,1],J:[22,22,22,0],v:Na,m:.8}),K=qa(250,{h:!1,position:r(),g:-90,H:80,duration:.15,k:[40,70,140,.2],q:[10,10,10,0],o:r(0,.5),s:1.2,T:.2,t:r(16,4),d:72,D:12,size:14,i:8,u:1,n:100,speed:2,I:"rgba(140,140,255,0)",F:.5,e:[60,80,120,.9],J:[12,12,12,0],G:function(a){a.position.y>
A&&0<a.direction.y&&(a.c=0)},v:Na,m:.05}),Ya=0,Lb=.4*La,Xa=0;S("Almost Ready...",10,function(){C(M.O,function(){.22>ea()&&(M.position.y+=2,M.e[0]--,M.e[1]--,M.e[2]--,M.m*=.98);var a=M.l();a.i=a.size;a.W=0});E.font="20px Verdana";E.textAlign="center";E.fillStyle="#fff"});S("Ready!",1,function(){D.getElementById("overlay").style.display="none";Ma(hb)});gb()})();
