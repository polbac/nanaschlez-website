(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("45664f55",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("f255459a",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("cc18b0da",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("145ea72e",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";var o=n(177);n.n(o).a},182:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".parraph{font-size:16px}",""])},183:function(t,e,n){"use strict";var o=n(178);n.n(o).a},184:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,"h2{font-size:26px;margin-bottom:20px;text-transform:uppercase;letter-spacing:2px}",""])},185:function(t,e,n){"use strict";var o=n(179);n.n(o).a},186:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,"img{width:100%}",""])},187:function(t,e,n){"use strict";var o=n(180);n.n(o).a},188:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,'.home-module-component{height:85vh;width:100%;display:inline-block;position:relative;text-align:center;vertical-align:top;margin-bottom:100px}.home-module-component img{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;transition:opacity .3s ease;position:absolute;top:0;left:0;width:100%;height:100%}.home-module-component img.loaded{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opacity:1}.home-module-component p{position:absolute;width:100%;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0}.image-container{border:2px solid #eee;position:relative;content:"";display:block;position:absolute;bottom:0;height:100px;width:100%;left:0;background:linear-gradient(180deg,rgba(255,255,0,0) 0,#ff0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffff00",endColorstr="#ffff00",GradientType=0);z-index:0}',""])},189:function(t,e,n){"use strict";var o={name:"Parraph",props:{text:{type:Array,required:!0}}},r=(n(181),n(12)),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"parraph"},t._l(t.text,function(e){return n("p",[t._v("\n          "+t._s(e.text)+"\n    ")])}),0)},[],!1,null,null,null).exports,c={name:"SectionTitle",props:{text:{type:String,required:!0}}},d=(n(183),Object(r.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("h2",[this._v(this._s(this.text))])},[],!1,null,null,null).exports),h={name:"ImageComponent",component:[void 0],props:{source:{type:Object,required:!0}}},f=(n(185),Object(r.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:this.source.url,alt:this.source.alt}})])},[],!1,null,null,null).exports),m=(n(82),n(16)),v={name:"HomeModuleComponent",data:function(){return{imageLoaded:!1}},props:{data:{type:Object,required:!0}},methods:{handleResize:function(){var t,e,n,o,r=this.$refs.imageContainer,l=r.parentNode,c=this.originalImageWidth/this.originalImageHeight,d=l.offsetWidth/l.offsetHeight,h="random-stuff"===this.data.type?10:m.a.home.moduleMargin;c>d?(t=l.offsetWidth-4*h,e=this.originalImageHeight*t/this.originalImageWidth):(e=l.offsetHeight-2*h,t=this.originalImageWidth*e/this.originalImageHeight),n=(l.offsetWidth-t)/2,o=(l.offsetHeight-e)/2,r.style.marginTop="".concat(o,"px"),r.style.marginLeft="".concat(n,"px"),r.style.width="".concat(t,"px"),r.style.height="".concat(e,"px")}},mounted:function(){var t=this;window.addEventListener("resize",this.handleResize),this.originalImageWidth=this.data.image.dimensions.width,this.originalImageHeight=this.data.image.dimensions.height,this.handleResize();var image=this.$refs.image,e=new Image;e.onload=function(){image.src=t.data.image.url,image.classList.add("loaded")},e.src=this.data.image.url},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},w=(n(187),Object(r.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"home-module-component"},[n("p",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{ref:"imageContainer",staticClass:"image-container"},["random-stuff"===t.data.type?n("a",{attrs:{href:t.data.link}},[n("img",{ref:"image"})]):t._e(),t._v(" "),"random-stuff"!==t.data.type?n("router-link",{attrs:{to:{path:t.data.link}}},[n("img",{ref:"image"})]):t._e()],1)])},[],!1,null,null,null).exports);n.d(e,"d",function(){return d}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return f}),n.d(e,"a",function(){return w})},195:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("36873827",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";var o=n(195);n.n(o).a},203:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".home-container{max-width:none;position:fixed;top:0;left:0;width:100%;box-sizing:border-box}@media (min-width:640px){padding-right:60px}@media (max-width:640px){.for-infinite{display:none}.home-container{position:static}}",""])},204:function(t,e,n){"use strict";n.r(e);n(34);var o=n(2),r=n(16),l=n(6),c=n(189),d=n(55),h={components:{HomeModuleComponent:c.a},layout:"default",data:function(){return{title:r.a.title,scrollPosition:0,viewportHeight:0,contentHeight:0}},fetch:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,n.dispatch({type:"fetchHome"});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),computed:Object(l.c)(["home"]),head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:r.a.title}]}},mounted:function(){this.$store.dispatch({type:"fetchHome"}),this.shouldCreateInfiniteScroll()&&(window.addEventListener?(window.addEventListener("resize",this.setContentAndViewportProperties),window.addEventListener("mousewheel",this.handleWheel),window.addEventListener("DOMMouseScroll",this.handleWheel)):window.attachEvent("onmousewheel",this.handleWheel),this.setContentAndViewportProperties())},methods:{shouldCreateInfiniteScroll:function(){var t=window,e=document,n=e.documentElement,g=e.getElementsByTagName("body")[0];return(t.innerWidth||n.clientWidth||g.clientWidth)>=640},handleScroll:function(){var t=t()},handleWheel:function(t){var e=t.deltaY;0!==e&&(e>0&&this.scrollPosition<=0-this.contentHeight&&(this.scrollPosition=0),e<0&&this.scrollPosition>=0&&(this.scrollPosition=0-this.contentHeight),this.scrollPosition-=e)},setContentAndViewportProperties:function(){var t=this.$refs.container;this.contentHeight=t.offsetHeight/3,this.viewportHeight=Object(d.c)()}},beforeDestroy:function(){window.removeEventListener("resize",this.setContentAndViewportProperties)}},f=(n(202),n(12)),component=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"home-container",style:{top:t.scrollPosition+"px"}},[n("div",t._l(t.home,function(t){return n("HomeModuleComponent",{attrs:{data:t}})}),1),t._v(" "),n("div",{staticClass:"for-infinite"},[t._l(t.home,function(t){return n("HomeModuleComponent",{attrs:{data:t}})}),t._v(" "),t._l(t.home,function(t){return n("HomeModuleComponent",{attrs:{data:t}})})],2)])},[],!1,null,null,null);e.default=component.exports}}]);