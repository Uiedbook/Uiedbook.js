"use strict";let css=(e,t,i)=>{"object"==typeof t&&(i=t,t="");const n=""+e+t+"{";let o="",r="";for(const[e,t]of Object.entries(i))o+=e+": "+t+";";let a=document.querySelector("style");null===a&&(a=document.createElement("style")),r+=a.innerHTML,r+=n+o+"}",a.innerHTML=r,document.head.append(a)},media=(e,...t)=>{const i="@media only screen and ("+e+") {";let n="  ",o=" ";const r=t.length;let a,s="  ";const l=e=>{for(const[i,o]of Object.entries(t[e][1]))n+=i+": "+o+";";return o+=t[e][0]+"{"+n+"}"};for(let e=0;e<r;e++)s+=l(e);let h=document.querySelector("style");null===h&&(h=document.createElement("style")),h.media="screen",a=h.innerHTML,a+=i+s+"}",h.innerHTML=a,document.head.append(h)},animate=(e,...t)=>{let i,n="@keyframes "+e+" {",o=" ",r=" ",a=t.length,s="  ";const l=e=>{for(const[i,n]of Object.entries(t[e][1]))o+=i+": "+n+";";return r+=t[e][0]+"{"+o+"}"};for(let e=0;e<a;e++)s+=l(e);let h=document.querySelector("style");null===h&&(h=document.createElement("style")),h.media="screen",i=h.innerHTML,i+=n+s+"}",h.innerHTML=i,document.head.append(h)};const build=(...e)=>{let t=e.lenght;for(;t>0;){document.createElement(e[t].type);t--}},xhr=function(e,t){let i=new XMLHttpRequest,n=null;return i.open(e,t,!0),n=i.onload=function(){return response},i.send(),n},u=(...e)=>{const t=e.length,[i,n]=e;let o,r=!1;if(1===t&&"string"==typeof i?o=document.querySelector(i):1===t&&"string"!=typeof i?o=i:2===t&&"number"!=typeof n?(r=!0,o=document.querySelectorAll(i)):"number"==typeof n&&(o=document.querySelectorAll(i)[n]),!o)throw new Error('element "'+i+'" not found');return{style(e){for(const[t,i]of Object.entries(e))r?o.forEach(e=>{e.style[t]=i}):o.style[t]=i},config(e){if(!e)throw new Error(`the variable is not an object ${e}`);for(const[t,i]of Object.entries(e))o[t]=i},appendTo(e,t,i=1){if(void 0===t||void 0===e)throw new Error("type or attribute not given | not enough parameters to work with");let n=new DocumentFragment;if(r){for(let o=0;o<i;o++){const i=document.createElement(e);for(const[e,n]of Object.entries(t))i[e]=n;n.append(i)}o.forEach(e=>{e.append(n)})}else{for(let o=0;o<i;o++){const i=document.createElement(e);for(const[e,n]of Object.entries(t))i[e]=n;n.append(i)}o.append(n)}},on(e,t){function i(e){return e.preventDefault(),t(e)}return r?o.forEach(t=>{t.addEventListener(e,i,!1)}):o.addEventListener(e,i,!1)},attr(e){if("object"==typeof e)if(r)for(const[t,i]of Object.entries(e)){if(null==t)return o.getAttribute(t);o.forEach(e=>e.setAttribute(t,i))}else for(const[t,i]of Object.entries(e)){if(null==t)return o.getAttribute(t);o.setAttribute(t,i)}},removeAttr(e){null!=e&&(r?o.forEach(e=>e.removeAttribute(atr)):o.removeAttribute(atr))},html(e){r?o.forEach(t=>t.innerHTML=e):o.innerHTML=e},text(e){r?o.forEach(t=>t.textContent=e):o.textContent=e},addClass(e){r?o.forEach(t=>t.classList.add(e)):o.classList.add(e)},removeClass(e){r?o.forEach(t=>t.classList.remove(e)):o.classList.remove(e)},hide(){r?o.forEach(e=>e.style.display="none"):o.style.display="none"},toggleClass(){r?(o[0].style.display="none")?o.forEach(e=>e.style.display="block"):o.forEach(e=>e.style.display="none"):(o.style.display="none")?o.style.display="block":o.style.display="none"},show(){r?o.forEach(e=>e.style.display="block"):o.style.display="block"},box(e,t,i="transparent"){r?o.forEach(n=>{n.style.width=e,n.style.height=t,n.style.backgroundColor=i}):(o.style.width=e,o.style.height=t,o.style.backgroundColor=i)},scrollTo(e=!0){o.scrollIntoView(e)},add(e){o.append(e)},remove(e){o.removeChild(o.childNodes[e])},fullScreen:()=>({toggle:()=>{document.fullscreenElement?document.exitFullscreen():o.requestFullscreen().catch(e=>{alert(`Error! failure attempting to enable full-screen mode: ${e.message} (${e.name})`)})},set(){o.requestFullscreen().catch(e=>{alert(`Error! failure attempting to enable\n full-screen mode: ${e.message}\n (${e.name})`)})},exist(){document.exitFullscreen()}})}},isEmptyObject=function(e){for(let t in e)return!1;return!0};function isArray(e){for(let t in e)return(t*=1)+1===1}const each=function(e,t){let i,n=0;if("object"==typeof e){for(i=e.length;n<i;n++)if(!1===t.call(e[n],n,e[n])){console.log(e[n]);break}}else for(n in e)if(!1===t.call(e[n]))break;return e};function intersect(e,t,i){const{root:n,rootMargin:o,threshold:r}=t,a=new IntersectionObserver(i,{root:n,rootMargin:o,threshold:r}),s=document.querySelector(e);a.observe(s)}const error=e=>{throw new Error(e)},get=(...e)=>{const[t,i]=e;let n;return 1===e.length?n=document.querySelector(t):2===e.length&&"number"!=typeof i?n=document.querySelectorAll(t):"number"==typeof i&&(n=document.querySelectorAll(t)[i]),n};let cacheBox=[];const cache=e=>{cacheBox.push(e)},startCache=e=>(e?window.addEventListener("load",()=>{cacheBox.forEach(e=>{e()})}):window.addEventListener("loadeddata",void cacheBox.forEach(e=>{e()})),!0),rad=e=>Math.floor(Math.random()*Math.floor(e)),timer=(fuc,ti=1)=>{let code="()=>{"+fuc+"}";setTimeout(eval(code),1e3*ti)},makeClass=(e,t)=>{let i=document.createElement("style"),n=e+"{"+t+"}";i.innerHTML=n,document.body.appendChild(i)},create=(e="div",t="")=>{const i=document.createElement(e);return i.setAttribute("id",t),document.body.appendChild(i),i},download=function(e,t,i){const n=new Blob([t.buffer],{type:e}),o=URL.createObjectURL(n),r=document.createElement("a");return r.setAttribute("href",o),r.setAttribute("download",i),r},debounce=(e,t=600)=>{let i;clearTimeout(i),i=setTimeout(()=>{e()},t)};let callStack=[];const keep=function(e,t){const i="object"==typeof e?e:null;let n="number"==typeof t?t:1;if("string"==typeof e&&"number"==typeof n){if(callStack.indexOf(e)>-1)return;for(;n>0;n--)callStack.push(e)}else if(null!==i)for(let[e,t]of Object.entries(callOjb)){if(callStack.indexOf(e)>-1)return void callStack.splice(ind,1);for(;t>0;t--)callStack.push(e)}},check=function(e){return callStack.indexOf(e)>-1&&(callStack.filter(t=>!(e===t)),!0)};let log=e=>{if(e)console.log(e);else if(callStack.length>0)return console.log(callStack),callStack},store=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},retrieve=e=>{localStorage.getItem(e)},remove=e=>{localStorage.removeItem(e)},getKey=e=>{window.localStorage.key(e)},clear=()=>{localStorage.clear()};const onKeys=(e,t,i=document,n=!0)=>{if(!e||!callStack)throw new Error("no keys or callbacks given");const o=[...e];i.addEventListener("keydown",e=>{n&&e.preventDefault(),keep(e.key,1)},!1),i.addEventListener("keyup",e=>{let i=0;for(let e=0;e<o.length&&check(o[e]);e++)++i,i=0,callStack=[];if(i!==o.length)return!1;e.preventDefault(),t.call(e),i=0,callStack=[]},!1)},continuesKeys=(e,t,i=0,n=document,o=!0)=>{if(!e||!callStack)throw new Error("no keys or callbacks given");const r=[...e];n.addEventListener("keydown",e=>{keep(e.key,1),callStack.length===r.length&&function(e){let n=0;for(let e=0;e<r.length;e++){if(!check(r[e])){n=0,callStack=[];break}++n}if(n!==r.length)return!1;o&&e.preventDefault(),console.log(i),debounce(()=>t.call(e),i),n=0,callStack=[]}(e)})};function swipe(e){let t={},i=0,n=0;if("object"!=typeof e)throw new Error("no call given for the swipe handler");for(const[i,n]of Object.entries(e))t[i]=n;document.body.addEventListener("touchstart",function(e){i=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY}),document.body.addEventListener("touchend",function(e){const r=e.changedTouches[0].screenX-i,a=e.changedTouches[0].screenY-n,s=Math.abs(r/a),l=Math.abs(a/r);Math.abs(s>l?r:a)<10&&t.touch&&o.touch(t.touch),s>l?r>=0?t.right&&o.right(t.right):t.left&&o.left(t.left):a>=0?t.down&&o.down(t.down):t.up&&o.up(t.up)});let o={touch:e=>e(),right:e=>e(),left:e=>e(),down:e=>e(),up:e=>e()}}const buildCanvas=function(e,t=window.innerWidth,i=window.innerHeight){let n=document.createElement("canvas"),o=n.getContext("2d"),r=window.devicePixelRatio/["webkitBackingStorePixelRatio","mozBackingStorePixelRatio","msBackingStorePixelRatio","oBackingStorePixelRatio","backingStorePixelRatio"].reduce(function(e,t){return o.hasOwnProperty(t)?o[t]:1});return n.id=void 0===e?"canvas":e,n.width=Math.round(t*r),n.height=Math.round(i*r),n.style.width=t+"px",n.style.height=i+"px",n.style.backgroundColor="black",o.setTransform(r,0,0,r,0,0),n},appendCanvas=(e,t,i,n)=>{let o,r=buildCanvas(e,t,i);return"string"!=typeof n&&void 0!==n?o=n:"string"==typeof n?o=document.querySelector(n):void 0===n&&(o=document.body),o.style.boxSizing="border-box",o.append(r),r},re=function(){let e=[];let t=[],i=[];return{build:function(e){let t=document.createElement("div");return e&&t.setAttribute("id",e),u(t).style({height:"100vh",width:"100vw",backgroundColor:"black"}),t},makeWidget:function(e,t){return this.wig=document.createElement("div"),this.wig.className=e,this.wig.id=e,document.body.append(this.wig),this.wig},mount:function(t,i){if(u("body").appendTo("div",{id:"RE_gameframe"}),1!==e.length&&(e.push(t),i))return i()},start:()=>{if(e.length<1||e.length>1)throw new Error("RE: re.mount() should be called and given a built game world");u(document.body).style({margin:"0px",padding:"0px",boxSizing:"border-box",border:"none"}),u("#RE_gameframe").style({width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",bottom:"0px",right:"0px",zIndex:"0",backgroundColor:"black",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px",padding:"0px",boxSizing:"border-box"}),function(t){t.append(e[0])}(get("#RE_gameframe"))},loadImage:function(e,i){if("object"!=typeof e||i){if(!e||!i)throw new Error("cannot load image(s)");{let n=new Image;n.src=e,n.id=i,t.push(n)}}else for(let i=0;i<e.length;i++){let n=new Image;n.src=e[i][0],n.id=e[i][1],t.push(n)}},loadAudio:function(e,n){if("object"!=typeof e||n){if(!e||!n)throw new Error("cannot load image(s)");{let i=new Image;i.src=e,i.id=n,t.push(i)}}else for(let t=0;t<e.length;t++){let n=new Audio;n.src=e[t][0],n.id=e[t][1],i.push(n)}},getImg:function(e){let i;for(let n=0;n<t.length;n++)if(t[n].id===e){i=t[n];break}if(i)return i;throw new Error('RE: image of id "'+e+'" not found')},getAud:function(e){let t;for(let n=0;n<i.length;n++)if(i[n].id===e){t=i[n];break}if(t)return t;throw new Error('RE: audio id "'+e+'" not found')},cancel:()=>{get("#RE_gameframe").innerHTML="",renderer.toggleRendering()}}}(),entity=function(e,t,i){this.name=e||"none",this.painter=t||{},this.width=0,this.height=0,this.top=0,this.left=0,this.visible=!0,this.behaviors=i,this.delete=!1,this.border=!0,this.isHit=!1};entity.prototype={update(e,t){void 0!==this.painter.update&&this.visible&&this.painter.update(this,e,t)},paint(e,t){if(void 0===this.painter.paint||!this.visible)throw new Error(`RE: entity with name of ${this.name} has no paint function`);this.painter.paint(this,e,t)},observeBorder(e,t){this.top<=0?this.top*=0:t&&this.top+this.height>=t&&(this.top=t-this.height),this.left<=0?this.left*=0:e&&this.left+this.width>=e&&(this.left=e-this.width)},run(e,t){void 0!==this.behaviors&&this.behaviors(this,e,t)}};const imgPainter=function(e,t=1){this.image=e,this.delay=t,this.range=0};imgPainter.prototype={paint(e,t){this.range++,this.range%this.delay==0&&t.drawImage(this.image,e.left,e.top,e.width,e.height),this.range>100&&(this.range=1)}};const spriteSheetPainter=function(e,t=1,i=1,n=1){this.image=e,this.framesWidth=Math.round(this.image.width/t),this.framesHeight=Math.round(this.image.height/i),this.horizontalPictures=t,this.verticalPictures=i,this.frameHeightCount=0,this.frameWidthCount=0,this.range=0,this.delay=n,this.isLastImage=!1,this.animateAllFrames=!0,this.animate=!0,this.changeSheet=function(e,t=0,i=0,n=1){this.image=e,this.framesWidth=Math.round(this.image.width/t),this.framesHeight=Math.round(this.image.height/i),this.horizontalPictures=t,this.verticalPictures=i,this.delay=n},this.animateFrameOf=function(e=0){this.frameHeightCount=e,this.frameWidthCount<=this.horizontalPictures-2?this.frameWidthCount++:this.frameWidthCount=0}};spriteSheetPainter.prototype={update(){this.range++,this.range%this.delay==0&&this.animate&&this.animateAllFrames&&(this.frameHeightCount<this.verticalPictures-1?this.frameWidthCount<=this.horizontalPictures-2?this.frameWidthCount++:(this.isLastImage=!0,this.frameWidthCount=0,this.frameHeightCount++):this.frameHeightCount=0,this.frameHeightCount===this.verticalPictures&&this.frameHeightCount++),this.range>100&&(this.range=1)},paint(e,t){t.drawImage(this.image,this.framesWidth*this.frameWidthCount,this.framesHeight*this.frameHeightCount,this.framesWidth,this.framesHeight,e.left,e.top,e.width,e.height)}};const audio=function(e){this.audio=e};audio.prototype={play(){this.audio.play()},pause(){this.audio.pause()},toggle(){this.audio.pause?this.audio.play():this.audio.pause()},continuesPlay(){}};const bgPainter=function(e,t=10,i,n){this.image=e,this.range=0,this.speed=t,this.top=0,this.left=0,this.width=this.image.width,this.height=this.image.height,this.GoesUp=i,this.GoesLeft=n};bgPainter.prototype={update(){this.GoesLeft&&(this.left<=-this.width&&(this.left=0),this.left=this.left-this.speed),this.GoesUp&&(this.top>=this.height&&(this.top=0),this.top+=this.speed)},paint(e){const t=e.getContext("2d");t.drawImage(this.image,this.left,this.top,e.width,this.height),this.GoesLeft?t.drawImage(this.image,this.left+this.width,this.top,e.width,e.height):t.drawImage(this.image,this.left,this.top-this.height,e.width,this.height)}};const physics=function(){return{detectCollision:function(e,t,i=0){for(let n=0;n<t.length;n++)e.left+i>t[n].left+t[n].width||e.left+e.width<t[n].left+i||e.top>t[n].top+t[n].height||e.top+e.height<t[n].top+i||(t[n].isHit=!0)}}}(),renderer=function(){let e,t,i,n,o,r=[],a=!1,s=0,l=0,h=[];function c(a){if(t=window.requestAnimationFrame(c),o=a-s,s=a,(l+=Math.round(o))>n)try{i.clearRect(0,0,e.width,e.height),function(e){if(r===[])return!1;r.forEach(t=>{t.paint(e),t.update()})}(e),h.forEach((t,n)=>{t.delete&&(h.splice(n,1),--n),t.border&&t.observeBorder(e.width,e.height),t.update(i,a),t.run(i,a),t.paint(i,a)})}catch(e){throw new Error(`RE: the canvas cannot be animated due to some errors > ${e}`)}l=0}return{render:function(t,o=0){if(!t)throw new Error("RE: game needs to be rendered EXP: renderer.render(canvas)");i=(e=t).getContext("2d"),n=o,c(0)},assemble:function(...e){if(!e)throw new Error("RE: No players assembled");return e.forEach(e=>{h.push(e)}),h},toggleRendering:function(){return a?(window.requestAnimationFrame(c),a=!1):(window.cancelAnimationFrame(t),a=!0)},backgroundImage:function(e,t,i,n){let o=new bgPainter(e,t,i,n);return r.push(o),o},copyCanvasTo:function(t,i,n){return t.getContext("2d").drawImage(e,0,0,t.width,t.height),t.style.opacity=i,t.style.borderRadius=n,t}}}();if("undefined"!=typeof module){const e=module.exports={css:css,media:media,animate:animate,build:build,xhr:xhr,u:u,isEmptyObject:isEmptyObject,isArray:isArray,each:each,intersect:intersect,error:error,get:get,cache:cache,rad:rad,timer:timer,makeClass:makeClass,create:create,download:download,debounce:debounce,keep:keep,check:check,log:log,store:store,retrieve:retrieve,remove:remove,getKey:getKey,clear:clear,onKeys:onKeys,continuesKeys:continuesKeys,swipe:swipe,buildCanvas:buildCanvas,appendCanvas:appendCanvas,re:re,entity:entity,imgPainter:imgPainter,spriteSheetPainter:spriteSheetPainter,audio:audio,bgPainter:bgPainter,renderer:renderer}}