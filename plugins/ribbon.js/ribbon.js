!function(){function e(e,t,n){return Number(e.getAttribute(t))||n}var t=document.getElementsByTagName("script"),n=t[t.length-1];config={z:e(n,"zIndex",-1),a:e(n,"alpha",.6),s:e(n,"size",90)};var o,c,i=document.createElement("canvas"),a=i.getContext("2d"),l=window.devicePixelRatio||1,d=window.innerWidth,r=window.innerHeight,g=config.s,h=Math,s=0,f=2*h.PI,u=h.cos,m=h.random;function x(){for(a.clearRect(0,0,d,r),o=[{x:0,y:.7*r+g},{x:0,y:.7*r-g}];o[1].x<d+g;)y(o[0],o[1])}function y(e,t){a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(t.x,t.y);var n=t.x+(2*m()-.25)*g,i=function e(t){c=t+(2*m()-1.1)*g;return r<c||c<0?e(t):c}(t.y);a.lineTo(n,i),a.closePath(),s-=f/-50,a.fillStyle="#"+(127*u(s)+128<<16|127*u(s+f/3)+128<<8|127*u(s+f/3*2)+128).toString(16),a.fill(),o[0]=o[1],o[1]={x:n,y:i}}i.width=d*l,i.height=r*l,a.scale(l,l),a.globalAlpha=config.a,i.style.cssText="opacity: "+config.a+";position:fixed;top:0;left:0;z-index: "+config.z+";width:100%;height:100%;pointer-events:none;",document.getElementsByTagName("body")[0].appendChild(i),document.onclick=x,(document.ontouchstart=x)()}();