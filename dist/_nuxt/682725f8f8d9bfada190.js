(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("0f368651",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("1b7a092f",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("97ac14e2",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("c12aa136",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var o=n(179);n.n(o).a},184:function(t,e,n){(e=n(36)(!1)).push([t.i,".parraph{font-size:16px}",""]),t.exports=e},185:function(t,e,n){"use strict";var o=n(180);n.n(o).a},186:function(t,e,n){(e=n(36)(!1)).push([t.i,"h2{font-size:26px;margin-bottom:20px;text-transform:uppercase;letter-spacing:2px}",""]),t.exports=e},187:function(t,e,n){"use strict";var o=n(181);n.n(o).a},188:function(t,e,n){(e=n(36)(!1)).push([t.i,"img{width:100%}",""]),t.exports=e},189:function(t,e,n){"use strict";var o=n(182);n.n(o).a},190:function(t,e,n){(e=n(36)(!1)).push([t.i,'.home-module-component{height:85vh;width:100%;display:inline-block;position:relative;text-align:center;vertical-align:top;margin-bottom:100px}.home-module-component img{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0;transition:opacity .3s ease;position:absolute;top:0;left:0;width:100%;height:100%}.home-module-component img.loaded{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;opacity:1}.home-module-component p{position:absolute;width:100%;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0}.image-container{border:2px solid #eee;position:relative;content:"";display:block;position:absolute;bottom:0;height:100px;width:100%;left:0;z-index:0}@media(max-width:640px){.home-module-component{height:50vh}}',""]),t.exports=e},191:function(t,e,n){"use strict";var o={name:"Parraph",props:{text:{type:Array,required:!0}}},r=(n(183),n(11)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"parraph"},t._l(t.text,(function(e){return n("p",[t._v("\n          "+t._s(e.text)+"\n    ")])})),0)}),[],!1,null,null,null).exports,c={name:"SectionTitle",props:{text:{type:String,required:!0}}},h=(n(185),Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("h2",[this._v(this._s(this.text))])}),[],!1,null,null,null).exports),d={name:"ImageComponent",props:{source:{type:Object,required:!0}}},m=(n(187),Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:this.source.url,alt:this.source.alt}})])}),[],!1,null,null,null).exports),f=(n(88),n(15)),v={name:"HomeModuleComponent",data:function(){return{imageLoaded:!1}},props:{data:{type:Object,required:!0}},methods:{handleResize:function(){var t,e,n,o,r=this.$refs.imageContainer,l=r.parentNode,c=this.originalImageWidth/this.originalImageHeight,h=l.offsetWidth/l.offsetHeight,d="random-stuff"===this.data.type?10:f.a.home.moduleMargin;c>h?(t=l.offsetWidth-4*d,e=this.originalImageHeight*t/this.originalImageWidth):(e=l.offsetHeight-2*d,t=this.originalImageWidth*e/this.originalImageHeight),n=(l.offsetWidth-t)/2,o=(l.offsetHeight-e)/2,r.style.marginTop="".concat(o,"px"),r.style.marginLeft="".concat(n,"px"),r.style.width="".concat(t,"px"),r.style.height="".concat(e,"px")}},mounted:function(){var t=this;window.addEventListener("resize",this.handleResize),this.originalImageWidth=this.data.image.dimensions.width,this.originalImageHeight=this.data.image.dimensions.height,this.handleResize();var image=this.$refs.image,e=new Image;e.onload=function(){image.src=t.data.image.url,image.classList.add("loaded")},e.src=this.data.image.url},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},w=(n(189),Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"home-module-component"},[n("p",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{ref:"imageContainer",staticClass:"image-container"},["random-stuff"===t.data.type?n("a",{attrs:{href:t.data.link}},[n("img",{ref:"image"})]):t._e(),t._v(" "),"random-stuff"!==t.data.type?n("router-link",{attrs:{to:{path:t.data.link}}},[n("img",{ref:"image"})]):t._e()],1)])}),[],!1,null,null,null).exports);n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return w}))},199:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6759f5ab",content,!0,{sourceMap:!1})},210:function(t,e,n){"use strict";var o=n(199);n.n(o).a},211:function(t,e,n){(e=n(36)(!1)).push([t.i,".home-container{max-width:none;position:fixed;top:0;left:0;width:100%;box-sizing:border-box}@media (min-width:640px){padding-right:60px}@media (max-width:640px){.for-infinite{display:none}.home-container{position:static}}",""]),t.exports=e},218:function(t,e,n){"use strict";n.r(e);n(25);var o=n(2),r=n(15),l=n(6),c=n(191),h=n(107),d={components:{HomeModuleComponent:c.a},layout:"default",data:function(){return{title:r.a.title,scrollPosition:0,viewportHeight:0,contentHeight:0}},fetch:function(t){var e=t.store;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch({type:"fetchHome"});case 2:case"end":return t.stop()}}),t)})))()},computed:Object(l.c)(["home"]),head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:r.a.title}]}},mounted:function(){this.$store.dispatch({type:"fetchHome"}),this.shouldCreateInfiniteScroll()&&(window.addEventListener?(window.addEventListener("resize",this.setContentAndViewportProperties),window.addEventListener("mousewheel",this.handleWheel),window.addEventListener("DOMMouseScroll",this.handleWheel)):window.attachEvent("onmousewheel",this.handleWheel),this.setContentAndViewportProperties())},methods:{shouldCreateInfiniteScroll:function(){var t=window,e=document,n=e.documentElement,g=e.getElementsByTagName("body")[0];return(t.innerWidth||n.clientWidth||g.clientWidth)>=640},handleScroll:function(){var t=t()},handleWheel:function(t){var e=t.deltaY;0!==e&&(e>0&&this.scrollPosition<=0-this.contentHeight&&(this.scrollPosition=0),e<0&&this.scrollPosition>=0&&(this.scrollPosition=0-this.contentHeight),this.scrollPosition-=e)},setContentAndViewportProperties:function(){var t=this.$refs.container;this.contentHeight=t.offsetHeight/3,this.viewportHeight=Object(h.b)()}},beforeDestroy:function(){window.removeEventListener("resize",this.setContentAndViewportProperties)}},m=(n(210),n(11)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"home-container",style:{top:t.scrollPosition+"px"}},[n("div",t._l(t.home,(function(t){return n("HomeModuleComponent",{attrs:{data:t}})})),1),t._v(" "),n("div",{staticClass:"for-infinite"},[t._l(t.home,(function(t){return n("HomeModuleComponent",{attrs:{data:t}})})),t._v(" "),t._l(t.home,(function(t){return n("HomeModuleComponent",{attrs:{data:t}})}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);