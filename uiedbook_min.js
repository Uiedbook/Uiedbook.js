export const u=(el,ifAll_OrNum)=>{const e=get(el,ifAll_OrNum);if(!e)throw new Error('element "'+String(el)+'" not found');const all=!(e instanceof HTMLElement);return{style(obj){for(const k in obj){const v=obj[k];if(!v){continue}if(!all){e.style[k]=v}else{e.forEach(_e=>_e.style[k]=v)}}},config(obj){if(obj instanceof HTMLElement){Object.assign(e,obj)}else{throw new Error(`the variable is not an object ${String(obj)}`)}},appendTo(type,attribute,number=1){const frag=new DocumentFragment;if(!all){for(let i=0;i<number;i++){const element=document.createElement(type);for(const k in attribute){const v=attribute[k];element.setAttribute(k,v)}frag.append(element)}e.append(frag)}else{for(let i=0;i<number;i++){const element=document.createElement(type);for(const k in attribute){const v=attribute[k];element.setAttribute(k,v)}frag.append(element)}e.forEach(el=>{el.append(frag)})}return},on(type,callback){function evft(e){e.preventDefault();return callback(e)}if(!all){return e.addEventListener(type,evft,false)}else{return e.forEach(element=>{element.addEventListener(type,evft,false)})}},attr(attribute_object){if(typeof attribute_object!=="object")return;if(!all){for(const prop in attribute_object){const attr=attribute_object[prop];if(prop===null){return e.getAttribute(prop)}else{e.setAttribute(prop,attr)}}}else{for(const prop in attribute_object){const attr=attribute_object[prop];if(prop===null){return e.getAttribute(prop)}else{e.forEach(el=>el.setAttribute(prop,attr))}}}},removeAttr(attr){if(attr===null){return}if(!all){e.removeAttribute(attr)}else{e.forEach(el=>el.removeAttribute(attr))}},html(code){if(!all){e.innerHTML=code}else{e.forEach(el=>el.innerHTML=code)}},text(text){if(!all){e.textContent=text}else{e.forEach(el=>el.textContent=text)}},addClass(clas){if(!all){e.classList.add(clas)}else{e.forEach(el=>el.classList.add(clas))}},removeClass(clas){if(!all){e.classList.remove(clas)}else{e.forEach(el=>el.classList.remove(clas))}},hide(){if(!all){e.style.display="none"}else{e.forEach(el=>el.style.display="none")}},toggleClass(){if(!all){if(e.style.display==="none"){e.style.display="block"}else{e.style.display="none"}}else{if(e[0].style.display==="none"){e.forEach(el=>el.style.display="block")}else{e.forEach(el=>el.style.display="none")}}},show(){if(!all){e.style.display="block"}else{e.forEach(el=>el.style.display="block")}},box(w,h,c="transparent"){if(!all){e.style.width=w;e.style.height=h;e.style.backgroundColor=c}else{e.forEach(el=>{el.style.width=w;el.style.height=h;el.style.backgroundColor=c})}},scrollTo(s=true){e.scrollIntoView(s)},add(nod){e.append(nod)},remove(ind){e.removeChild(e.childNodes[ind])},fullScreen(){return{toggle:()=>{if(!document.fullscreenElement){e.requestFullscreen().catch(err=>{alert(`Error! failure attempting to enable full-screen mode: ${err.message} (${err.name})`)})}else{document.exitFullscreen()}},set(){e.requestFullscreen().catch(err=>{alert(`Error! failure attempting to enable
 full-screen mode: ${err.message}
 (${err.name})`)})},exist(){document.exitFullscreen()}}},evft(e){e.preventDefault();return callback(e)}}};export const css=(name,sel,properties)=>{if(typeof sel==="object"){properties=sel;sel=""}const styS=""+name+sel+""+"{";const styE="}";let style="",totalStyle="";if(properties){for(const k in properties){const v=properties[k];style+=""+k+": "+v+";"}}let styleTag=document.querySelector("style");if(styleTag===null){styleTag=document.createElement("style")}totalStyle+=styleTag.innerHTML;totalStyle+=styS+style+styE;styleTag.innerHTML=totalStyle;document.head.append(styleTag)};export const media=(value,...properties)=>{const styS="@media only screen and ("+value+") "+"{",styE="}";let style="  ",aniSty=" ";const proplen=properties.length;let totalAnimation,Animation="  ";const animationStep=num=>{for(const k in properties[num][1]){const v=properties[num][1][k];style+=""+k+": "+v+";"}aniSty+=""+properties[num][0]+"{"+style+"}";return aniSty};for(let i=0;i<proplen;i++){Animation+=animationStep(i)}let aniStyleTag=document.querySelector("style");if(aniStyleTag===null){aniStyleTag=document.createElement("style")}aniStyleTag.media="screen";totalAnimation=aniStyleTag.innerHTML;totalAnimation+=styS+Animation+styE;aniStyleTag.innerHTML=totalAnimation;document.head.append(aniStyleTag)};export const animate=(name,...properties)=>{const styS="@keyframes "+name+" "+"{",styE="}",proplen=properties.length;let style=" ",aniSty=" ",Animation="  ",totalAnimation=null;const animationStep=num=>{for(const k in properties[num][1]){const v=properties[num][1][k];style+=""+k+": "+v+";"}aniSty+=""+properties[num][0]+"{"+style+"}";return aniSty};for(let i=0;i<proplen;i++){Animation+=animationStep(i)}let aniStyleTag=document.querySelector("style");if(aniStyleTag===null){aniStyleTag=document.createElement("style")}aniStyleTag.media="screen";totalAnimation=aniStyleTag.innerHTML;totalAnimation+=styS+Animation+styE;aniStyleTag.innerHTML=totalAnimation;document.head.append(aniStyleTag)};export const build=(...layouts)=>{function createElement(type="",op={},chil){const element=document.createElement(type);for(const k in op){const v=op[k];element.setAttribute(k,v)}if(chil){if(Array.isArray(chil)){const frag=new DocumentFragment;chil.forEach(ch=>{frag.append(ch)});element.append(frag)}else{element.append(chil)}}return element}let i=0;if(layouts.length>1){i=layouts.length;const frag=new DocumentFragment;while(i>0){const ele=createElement(layouts[i][0],layouts[i][1],layouts[i][2]);frag.append(ele);i--}return frag}else{if(typeof layouts[0]==="string"){const element=createElement(layouts[0][0],layouts[0][1],layouts[0][2]);return element}}return new DocumentFragment};export const buildTo=(child,parent)=>{if(typeof parent==="string"){document.querySelectorAll(parent).forEach(par=>par.appendChild(child))}else{parent.append(child)}};const routes={};export const route=function(path="/",templateId,controller){const link=document.createElement("a");link.href=window.location.href.replace(/#(.*)$/,"")+"#"+path;routes[path]={templateId:templateId,controller:controller};return link};const router=function(e){e.preventDefault();const url=window.location.hash.slice(1)||"/";const route=routes[url];if(route){route.controller()}};window.addEventListener("hashchange",router);window.addEventListener("load",router);export const xhr=function(type,url){const xhrRequest=new XMLHttpRequest;let result=null;xhrRequest.open(type,url,true);result=xhrRequest.onload=function(){return xhrRequest.response};xhrRequest.send();return result};export const isEmptyObject=function(obj){for(const name in obj){return false}return true};export const intersect=(target,opt,callback)=>{const{root,rootMargin,threshold}=opt,options={root:root,rootMargin:rootMargin,threshold:threshold},observer=new IntersectionObserver(callback,options),child=document.querySelector(target);if(child){observer.observe(child)}};export const error=msg=>{throw new Error(msg)};export const get=(el,ifAll_OrNum)=>{return typeof el==="string"?typeof ifAll_OrNum!=="undefined"?typeof ifAll_OrNum==="number"?document.querySelectorAll(el)[ifAll_OrNum]:document.querySelectorAll(el):document.querySelector(el):el};export const makeClass=(name,stylings)=>{const clas=document.createElement("style");const styling=""+name+"{"+stylings+"}";clas.innerHTML=styling;document.body.appendChild(clas)};export const create=(type="div",id="")=>{const element=document.createElement(type);element.setAttribute("id",id);document.body.appendChild(element);return element};export const download=function(type,source,name){const file=new Blob([source.buffer],{type:type});const fileURL=URL.createObjectURL(file);const linkElement=document.createElement("a");linkElement.setAttribute("href",fileURL);linkElement.setAttribute("download",name);return linkElement};export const debounce=(func,timeout=600)=>{let timer=null;if(timer!==null){clearTimeout(timer)}timer=setTimeout(()=>{func()},timeout)};const callStack=[];export const keep=function(id,time){const callObj=typeof id==="object"?id:null;let runtime=typeof time==="number"?time:1;if(typeof id==="string"&&typeof runtime==="number"){if(callStack.indexOf(id)>-1){return}for(;runtime>0;runtime--){callStack.push(id)}}else{if(callObj!==null){for(let k in callObj){let v=callObj[k];if(callStack.indexOf(k)>-1){callStack.splice(Number(id),1);return true}else{for(;v>0;v--){callStack.push(k)}}}}}};export const check=function(id){const ind=callStack.indexOf(id);if(ind>-1){callStack.filter(key=>!(id===key));return true}else{return false}};export const log=message=>{if(message){console.log(message)}else{if(callStack.length>0){console.log(callStack);return callStack}}};export const store=(name,value)=>{localStorage.setItem(name,JSON.stringify(value))};export const retrieve=name=>{return localStorage.getItem(name)};export const remove=name=>{localStorage.removeItem(name)};export const getKey=index=>{return window.localStorage.key(index)};export const clear=()=>{localStorage.clear()};const keyObject=function(keysArray,callBack){return{keysArray:keysArray,callBack:callBack}};const keysStack=[];const keepKeys=function(keys,callback){const call=keyObject(keys,callback);keysStack.push(call)};const checkKeys=function(keys,e,delay){function partOf(a,b){let matches=0;for(let i=0;i<a.length;i++){if(b.indexOf(a[i])===-1){matches++}}return matches===a.length}for(let i=0;i<keysStack.length;i++){if(!partOf(keysStack[i].keysArray,keys)){debounce(()=>keysStack[i].callBack(e),delay)}}};export const onKeys=(keys,callback,object=document,delay=0,lock=false)=>{if(!keys||!callback){throw new Error("no keys or callbacks given")}let temporaryKeys=[];keepKeys(keys,callback);object.addEventListener("keydown",e=>{if(lock){e.preventDefault()}if(temporaryKeys.indexOf(e.key)!==0){temporaryKeys.push(e.key)}},false);object.addEventListener("keyup",e=>{checkKeys(temporaryKeys,e,delay);temporaryKeys=[]},false)};export const continuesKeys=(keys,callback,delay=0,object=document,lock=true)=>{if(!keys||!callback){throw new Error("no keys or callbacks given")}let temporaryKeys=[];keepKeys(keys,callback);object.addEventListener("keydown",e=>{if(lock){e.preventDefault()}if(temporaryKeys.indexOf(e.key)!==0){temporaryKeys.push(e.key)}checkKeys(temporaryKeys,e,delay);temporaryKeys=[]},false)};export const swipe=item=>{const caller={};let startX=0,startY=0;if(typeof item==="object"){for(const k in item){const v=item[k];caller[k]=v}}else{throw new Error("no call given for the swipe handler")}function handleTouchStart(e){startX=e.changedTouches[0].screenX;startY=e.changedTouches[0].screenY}function handleTouchEnd(e){const diffX=e.changedTouches[0].screenX-startX;const diffY=e.changedTouches[0].screenY-startY;const ratioX=Math.abs(diffX/diffY);const ratioY=Math.abs(diffY/diffX);const absDiff=Math.abs(ratioX>ratioY?diffX:diffY);if(absDiff<10){if(caller.touch){callback.touch(caller.touch)}}if(ratioX>ratioY){if(diffX>=0){if(caller.right){callback.right(caller.right)}}else{if(caller.left){callback.left(caller.left)}}}else{if(diffY>=0){if(caller.down){callback.down(caller.down)}}else{if(caller.up){callback.up(caller.up)}}}}document.body.addEventListener("touchstart",handleTouchStart);document.body.addEventListener("touchend",handleTouchEnd);const callback={touch(callback){return callback()},right(callback){return callback()},left(callback){return callback()},down(callback){return callback()},up(callback){return callback()}}};export const buildCanvas=function(id,w=window.innerWidth,h=window.innerHeight){const canv=document.createElement("canvas"),context=canv.getContext("2d"),backingStores=["webkitBackingStorePixelRatio","mozBackingStorePixelRatio","msBackingStorePixelRatio","oBackingStorePixelRatio","backingStorePixelRatio"],deviceRatio=window.devicePixelRatio,backingRatio=backingStores.reduce(function(prev,curr){return context.hasOwnProperty(curr)?context[curr]:1}),ratio=deviceRatio/Number(backingRatio);canv.id=typeof id==="undefined"?"canvas":id;canv.width=Math.round(w*ratio);canv.height=Math.round(h*ratio);canv.style.width=w+"px";canv.style.height=h+"px";canv.style.backgroundColor="black";context.setTransform(ratio,0,0,ratio,0,0);return canv};export const appendCanvas=(id,h,w,parent)=>{const cv=buildCanvas(id,h,w);let par;if(typeof parent!=="string"&&typeof parent!=="undefined"){par=parent}else{if(typeof parent==="string"){par=document.querySelector(parent)??undefined}else{if(typeof parent==="undefined"){par=document.body}}}par.style.boxSizing="border-box";par.append(cv);return cv};export const re=function(){const games=[];function build(viewID){const frame=document.createElement("div");if(viewID){frame.setAttribute("id",viewID)}u(frame).style({height:"100vh",width:"100vw",backgroundColor:"black"});return frame}function mount(template,callback){u("body").appendTo("div",{id:"RE_gameframe"});if(games.length===1){return}else{games.push(template)}if(!callback)return;return callback()}function flow(fram){fram.append(games[0])}const start=()=>{if(games.length<1||games.length>1){throw new Error("RE: re.mount() should be called and given a built game world")}u(document.body).style({margin:"0px",padding:"0px",boxSizing:"border-box",border:"none"});u("#RE_gameframe").style({width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",bottom:"0px",right:"0px",zIndex:"0",backgroundColor:"black",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px",padding:"0px",boxSizing:"border-box"});const gameframe=get("#RE_gameframe");flow(gameframe)};const cancel=()=>{const fram=get("#RE_gameframe");fram.innerHTML="";renderer.toggleRendering()};const widget=function(name){this.wig=document.createElement("div");this.wig.className=name;this.wig.id=name;document.body.append(this.wig);return this.wig};const imagesArray=[],audioArray=[];function loadImage(img,id){if(typeof img==="object"&&!id){for(let i=0;i<img.length;i++){const p=new Image;p.src=img[i][0];p.id=img[i][1];imagesArray.push(p)}}else{if(typeof img==="string"&&id){const i=new Image;i.src=img;i.id=id;imagesArray.push(i)}else{throw new Error("cannot load image(s)")}}}function loadAudio(aud,id){if(typeof aud==="object"&&!id){for(let i=0;i<aud.length;i++){const p=new Audio;p.src=aud[i][0];p.id=aud[i][1];audioArray.push(p)}}else{if(typeof aud==="string"&&id){const i=new Image;i.src=aud;i.id=id;imagesArray.push(i)}else{throw new Error("cannot load image(s)")}}}function getAud(id){let p;for(let i=0;i<audioArray.length;i++){if(audioArray[i].id===id){p=audioArray[i];break}}if(p){return p}else{throw new Error('RE: audio id "'+id+'" not found')}}function getImg(id){let p;for(let i=0;i<imagesArray.length;i++){if(imagesArray[i].id===id){p=imagesArray[i];break}}if(p){return p}else{throw new Error('RE: image of id "'+id+'" not found')}}return{build:build,makeWidget:widget,mount:mount,start:start,loadImage:loadImage,loadAudio:loadAudio,getImg:getImg,getAud:getAud,cancel:cancel}}();export const entity=function(name,painter,behaviors){this.name=name||"none";this.painter=painter||{};this.width=0;this.height=0;this.top=0;this.left=0;this.visible=true;this.behaviors=behaviors;this.delete=false;this.border=true;this.isHit=false};entity.prototype={update(context,lastDeltalTime){if(typeof this.painter.update!=="undefined"&&this.visible){this.painter.update(this,context,lastDeltalTime)}else{}},paint(context,lastDeltalTime){if(typeof this.painter.paint!=="undefined"&&this.visible){this.painter.paint(this,context,lastDeltalTime)}else{throw new Error(`RE: entity with name of ${this.name} has no paint function`)}},observeBorder(w,h){if(this.top<=0){this.top*=0}else{if(h&&this.top+this.height>=h){this.top=h-this.height}}if(this.left<=0){this.left*=0}else{if(w&&this.left+this.width>=w){this.left=w-this.width}}},run(context,lastDeltalTime){if(typeof this.behaviors!=="undefined"){this.behaviors(this,context,lastDeltalTime)}}};export const imgPainter=function(img,delay=1){this.image=img;this.delay=delay;this.range=0};imgPainter.prototype={paint(entity,context){this.range++;if(this.range%this.delay===0){context.drawImage(this.image,entity.left,entity.top,entity.width,entity.height)}if(this.range>100){this.range=1}}};export const spriteSheetPainter=function(img,horizontal=1,vertical=1,delay=1){this.image=img;this.framesWidth=Math.round(this.image.width/horizontal);this.framesHeight=Math.round(this.image.height/vertical);this.horizontalPictures=horizontal;this.verticalPictures=vertical;this.frameHeightCount=0;this.frameWidthCount=0;this.range=0;this.delay=delay;this.isLastImage=false;this.animateAllFrames=true;this.animate=true;this.changeSheet=function(img,horizontal=0,vertical=0,delay=1){this.image=img;this.framesWidth=Math.round(this.image.width/horizontal);this.framesHeight=Math.round(this.image.height/vertical);this.horizontalPictures=horizontal;this.verticalPictures=vertical;this.delay=delay};this.animateFrameOf=function(frameY=0){this.frameHeightCount=frameY;if(this.frameWidthCount<=this.horizontalPictures-2){this.frameWidthCount++}else{this.frameWidthCount=0}}};spriteSheetPainter.prototype={update(){this.range++;if(this.range%this.delay===0&&this.animate){if(this.animateAllFrames){if(this.frameHeightCount<this.verticalPictures-1){if(this.frameWidthCount<=this.horizontalPictures-2){this.frameWidthCount++}else{this.isLastImage=true;this.frameWidthCount=0;this.frameHeightCount++}}else{this.frameHeightCount=0}if(this.frameHeightCount===this.verticalPictures){this.frameHeightCount++}}}if(this.range>100){this.range=1}},paint(entity,context){context.drawImage(this.image,this.framesWidth*this.frameWidthCount,this.framesHeight*this.frameHeightCount,this.framesWidth,this.framesHeight,entity.left,entity.top,entity.width,entity.height)}};export const speaker=function(text,language="",volume=1,rate=1,pitch=1){const utterance=new SpeechSynthesisUtterance(text);utterance.lang=language;utterance.volume=volume*.3*3;utterance.rate=rate;utterance.pitch=pitch;speechSynthesis.speak(utterance)};export const speakerStop=()=>speechSynthesis&&speechSynthesis.cancel();export const audio=function(audio,loop=0,volumeScale=1){this.audio=audio;this.audio.loop=loop!==0;this.audio.volume=volumeScale*.3;return this.audio};audio.prototype={play(){return this.audio.play()},pause(){this.audio.pause()},toggle(){if(this.audio.paused){return this.audio.play()}else{this.audio.pause()}}};export const bgPainter=function(img,speed=10,up,left){this.image=img;this.range=0;this.speed=speed;this.top=0;this.left=0;this.width=this.image.width;this.height=this.image.height;this.GoesUp=up;this.GoesLeft=left};bgPainter.prototype={update(){if(this.GoesLeft){if(this.left<=-this.width){this.left=0}this.left=this.left-this.speed}if(this.GoesUp){if(this.top>=this.height){this.top=0}this.top+=this.speed}},paint(canvas){const context=canvas.getContext("2d");context.drawImage(this.image,this.left,this.top,canvas.width,this.height);if(this.GoesLeft){context.drawImage(this.image,this.left+this.width,this.top,canvas.width,canvas.height)}else{context.drawImage(this.image,this.left,this.top-this.height,canvas.width,this.height)}}};export const physics=function(){function detectCollision(ent,name,reduce=0){for(let j=0;j<name.length;j++){if(ent.left+reduce>name[j].left+name[j].width||ent.left+ent.width<name[j].left+reduce||ent.top>name[j].top+name[j].height||ent.top+ent.height<name[j].top+reduce){continue}else{name[j].isHit=true}}}return{detectCollision:detectCollision}}();
