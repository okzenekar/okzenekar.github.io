webpackJsonp([4],{105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"modal-layer",props:["modal-id"],data:function(){return{show:!1}},methods:{openEvent:function(){this.eb.$emit("modal-open",{modalId:this.modalId})},closeEvent:function(){this.eb.$emit("modal-close",{modalId:this.modalId})},removeListeners:function(){this.eb.$off("modal-open"),this.eb.$off("modal-close")},addListeners:function(){var e=this;this.eb.$on("modal-open",function(t){t.modalId===e.modalId&&(e.eb.$emit("modal-open-before",{modalId:e.modalId}),e.show=!0,e.eb.$emit("modal-open-after",{modalId:e.modalId}))}),this.eb.$on("modal-close",function(t){t.modalId===e.modalId&&(e.eb.$emit("modal-close-before",{modalId:e.modalId}),e.show=!1,e.eb.$emit("modal-close-after",{modalId:e.modalId}))})}},mounted:function(){this.addListeners(),this.$root.$el.appendChild(this.$el)},destroyed:function(){this.removeListeners(),this.$el.parentNode.removeChild(this.$el)}}},106:function(e,t,n){t=e.exports=n(9)(),t.push([e.i,'.modalLayer{position:relative;width:0;height:0;overflow:hidden}.modalLayer .bg{z-index:1000;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.8);transition:opacity .3s,visibility .3s}.modalLayer .bg,.modalLayer .layerContent{position:fixed;visibility:hidden;opacity:0}.modalLayer .layerContent{left:50%;top:50%;z-index:1001;background:#fff;margin:0;padding:20px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%) scale(.5);transition:opacity .3s,visibility .3s,transform .3s;filter:none;-webkit-filter:blur(0);-moz-filter:blur(0);-ms-filter:blur(0)}.modalLayer .layerContent h2{font-size:30px;line-height:1;margin-bottom:25px}.modalLayer .layerContent p{margin-bottom:25px}.modalLayer .layerContent img{max-width:none}.modalLayer .layerContent .close{position:absolute;top:-40px;right:0;width:30px;height:30px}.modalLayer .layerContent .close:after,.modalLayer .layerContent .close:before{content:"";position:absolute;height:4px;width:100%;top:50%;left:0;margin-top:-1px;background:#f9f2e7}.modalLayer .layerContent .close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.modalLayer .layerContent .close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.modalLayer .layerContent .close.hairline:after,.modalLayer .layerContent .close.hairline:before{height:1px}@media (max-width:767px){.modalLayer .layerContent{padding:10px}}@media (min-width:768px){.modalLayer .layerContent{width:auto}}.modalLayer[show]{width:auto;height:auto}.modalLayer[show] .bg{opacity:1;visibility:visible}.modalLayer[show] .layerContent{opacity:1;visibility:visible;transform:translate(-50%,-50%) scale(1)}',"",{version:3,sources:["/./src/components/modal-layer.vue"],names:[],mappings:"AACA,YACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,eAAiB,CAClB,AACD,gBAEE,aAAc,AACd,WAAY,AACZ,YAAa,AACb,OAAQ,AACR,MAAO,AAEP,0BAA+B,AAI/B,qCAA0C,CAC3C,AACD,0CAbE,eAAgB,AAMhB,kBAAmB,AAEnB,SAAW,CA2BZ,AAtBD,0BAEE,SAAU,AACV,QAAS,AACT,aAAc,AACd,gBAAoB,AAEpB,SAAU,AACV,aAAc,AAId,uCAAyC,AAEzC,yCAAiD,AAGjD,oDAA0D,AAC1D,YAAa,AACb,uBAA0B,AAC1B,oBAAuB,AACvB,kBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,cAAe,AACf,kBAAoB,CACrB,AACD,4BACE,kBAAoB,CACrB,AACD,8BACE,cAAgB,CACjB,AACD,iCACE,kBAAmB,AACnB,UAAW,AACX,QAAW,AACX,WAAY,AACZ,WAAa,CACd,AACD,+EACE,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,QAAS,AACT,OAAQ,AACR,gBAAiB,AACjB,kBAAoB,CACrB,AACD,wCAIE,gCAAiC,AACjC,uBAAyB,CAC1B,AACD,uCAIE,iCAAkC,AAClC,wBAA0B,CAC3B,AACD,iGACE,UAAY,CACb,AACD,yBACA,0BACI,YAAc,CACjB,CACA,AACD,yBACA,0BACI,UAAY,CACf,CACA,AACD,kBACE,WAAY,AACZ,WAAa,CACd,AACD,sBACE,UAAW,AACX,kBAAoB,CACrB,AACD,gCACE,UAAW,AACX,mBAAoB,AACpB,uCAA6C,CAC9C",file:"modal-layer.vue",sourcesContent:["\n.modalLayer {\n  position: relative;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.modalLayer .bg {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  visibility: hidden;\n  background: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  -ms-transition: opacity 0.3s, visibility 0.3s;\n  -webkit-transition: opacity 0.3s, visibility 0.3s;\n  transition: opacity 0.3s, visibility 0.3s;\n}\n.modalLayer .layerContent {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 1001;\n  background: #ffffff;\n  opacity: 0;\n  margin: 0;\n  padding: 20px;\n  visibility: hidden;\n  -ms-transform: translate(-50%, -50%);\n  /* IE 9 */\n  -webkit-transform: translate(-50%, -50%);\n  /* Safari */\n  transform: translate(-50%, -50%) scale(0.5, 0.5);\n  -ms-transition: opacity 0.3s, visibility 0.3s, -ms-transform 0.3s;\n  -webkit-transition: opacity 0.3s, visibility 0.3s, -webkit-transform 0.3s;\n  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;\n  filter: none;\n  -webkit-filter: blur(0px);\n  -moz-filter: blur(0px);\n  -ms-filter: blur(0px);\n}\n.modalLayer .layerContent h2 {\n  font-size: 30px;\n  line-height: 1;\n  margin-bottom: 25px;\n}\n.modalLayer .layerContent p {\n  margin-bottom: 25px;\n}\n.modalLayer .layerContent img {\n  max-width: none;\n}\n.modalLayer .layerContent .close {\n  position: absolute;\n  top: -40px;\n  right: 0px;\n  width: 30px;\n  height: 30px;\n}\n.modalLayer .layerContent .close:before, .modalLayer .layerContent .close:after {\n  content: '';\n  position: absolute;\n  height: 4px;\n  width: 100%;\n  top: 50%;\n  left: 0;\n  margin-top: -1px;\n  background: #F9F2E7;\n}\n.modalLayer .layerContent .close:before {\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.modalLayer .layerContent .close:after {\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.modalLayer .layerContent .close.hairline:before, .modalLayer .layerContent .close.hairline:after {\n  height: 1px;\n}\n@media (max-width: 767px) {\n.modalLayer .layerContent {\n    padding: 10px;\n}\n}\n@media (min-width: 768px) {\n.modalLayer .layerContent {\n    width: auto;\n}\n}\n.modalLayer[show] {\n  width: auto;\n  height: auto;\n}\n.modalLayer[show] .bg {\n  opacity: 1;\n  visibility: visible;\n}\n.modalLayer[show] .layerContent {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -50%) scale(1, 1);\n}\n\n/* layer end*/\n"],sourceRoot:"webpack://"}])},107:function(e,t,n){var o=n(106);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(10)("06116614",o,!0)},108:function(e,t,n){n(107);var o=n(0)(n(105),n(109),null,null);e.exports=o.exports},109:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modalLayer",attrs:{show:e.show,"modal-id":e.modalId}},[n("div",{staticClass:"layerContent"},[n("button",{staticClass:"close",on:{click:e.closeEvent}}),e._v(" "),e._t("default")],2),e._v(" "),n("div",{staticClass:"bg",on:{click:e.closeEvent}})])},staticRenderFns:[]}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(108),i=n.n(o),a=n(90),r=n.n(a);t.default={name:"video",data:function(){return{initedVideos:{},currentVideo:"",youtubeList:["NICuQWTwGzY","wvv5pSmR9js","5lpjGYn1ZiQ","X0IqiCkKgZU","4trrt0mNYII","6BNHjraWWaU","IXwr8llcvbI","K79YLgI5nEU","GgGKv9fnKAE"]}},methods:{afterClose:function(){var e=this;Object.keys(this.initedVideos).forEach(function(t){e.initedVideos[t].pauseVideo()})},openModal:function(e){var t=this;e.preventDefault(),this.currentVideo="A"===e.target.nodeName?e.target.getAttribute("data-video-id"):e.target.parentElement.getAttribute("data-video-id"),r.a.loadApi().then(function(){r.a.initVideo(t.currentVideo,t.initedVideos)}),this.eb.$emit("modal-open",{modalId:"video",afterClose:this.afterClose})}},mounted:function(){this.eb.$on("modal-close-after",this.afterClose)},destroyed:function(){this.eb.$off("modal-close-after")},components:{modalLayer:i.a}}},121:function(e,t,n){t=e.exports=n(9)(),t.push([e.i,'.video .row{margin-bottom:-15px}.video .columns{float:left!important}.video .columns a{position:relative;display:block;margin-bottom:1.875rem}.video .columns a img{width:100%;height:auto}.video .columns a:after{content:"";display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:54.4px;height:38.4px;background:transparent url(/src/assets/img/ico-youtube-small.png) no-repeat 0 0;background-size:cover}@media (min-width:768px){.video .columns a:after{width:68px;height:48px}}@media (min-width:1025px){.video .columns a:hover:after{background-position:0 100%}}',"",{version:3,sources:["/./src/pages/video.vue"],names:[],mappings:"AACA,YACE,mBAAqB,CACtB,AACD,gBACE,oBAAuB,CACxB,AACD,kBACE,kBAAmB,AACnB,cAAe,AACf,sBAAwB,CACzB,AACD,sBACE,WAAY,AACZ,WAAa,CACd,AACD,wBACE,WAAY,AACZ,cAAe,AAEf,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,+BAAiC,AACjC,aAAc,AACd,cAAe,AACf,gFAAiF,AACjF,qBAAuB,CACxB,AACD,yBACA,wBACI,WAAY,AACZ,WAAa,CAChB,CACA,AACD,0BACA,8BACI,0BAA4B,CAC/B,CACA",file:"video.vue",sourcesContent:["\n.video .row {\n  margin-bottom: -15px;\n}\n.video .columns {\n  float: left !important;\n}\n.video .columns a {\n  position: relative;\n  display: block;\n  margin-bottom: 1.875rem;\n}\n.video .columns a img {\n  width: 100%;\n  height: auto;\n}\n.video .columns a:after {\n  content: '';\n  display: block;\n  position: absolute;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 54.4px;\n  height: 38.4px;\n  background: transparent url(/src/assets/img/ico-youtube-small.png) no-repeat 0 0;\n  background-size: cover;\n}\n@media (min-width: 768px) {\n.video .columns a:after {\n    width: 68px;\n    height: 48px;\n}\n}\n@media (min-width: 1025px) {\n.video .columns a:hover:after {\n    background-position: 0 100%;\n}\n}\n"],sourceRoot:"webpack://"}])},129:function(e,t,n){var o=n(121);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(10)("56fc5d9a",o,!0)},146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inner video"},[n("div",{staticClass:"row"},[e._l(e.youtubeList,function(t,o){return n("div",{key:o,staticClass:"small-6 medium-4 large-4 columns"},[n("a",{attrs:{"data-video-id":t,href:"https://youtu.be/"+t,target:"_blank",rel:"noopener"},on:{click:e.openModal}},[n("img",{attrs:{alt:"",src:"http://img.youtube.com/vi/"+t+"/mqdefault.jpg"}})])])}),e._v(" "),n("modal-layer",{key:"video",attrs:{"modal-id":"video"}},e._l(e.youtubeList,function(t,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentVideo===t,expression:"currentVideo === video"}],key:o,attrs:{"video-id":t}},[n("div",{staticClass:"insertPoint"})])}))],2)])},staticRenderFns:[]}},63:function(e,t,n){n(129);var o=n(0)(n(120),n(146),null,null);e.exports=o.exports},90:function(e,t){var n=!1,o=function(){return new Promise(function(e){if(console.log("in promise",n),!n){var t=setInterval(function(){window.YT&&(clearInterval(t),setTimeout(function(){n=!0,e(window.YT)},100))},100),o=document.createElement("script"),i=document.getElementsByTagName("script")[0];o.src="https://www.youtube.com/iframe_api",i.parentNode.insertBefore(o,i)}n&&e(window.YT)})},i=function(e,t){var n=document.querySelector('[video-id="'+e+'"] .insertPoint');t[e]||(t[e]=new window.YT.Player(n,{videoId:e,events:{onReady:function(){}}}))};e.exports={loadApi:o,initVideo:i}}});
//# sourceMappingURL=velemenyek.chunk.js.map