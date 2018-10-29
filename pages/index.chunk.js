webpackJsonp([6],{115:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"img-cycle",props:["images","index","loop"],data:function(){return{innerIndex:0}},computed:{imagesLength:function(){return this.images.length}},methods:{loopImages:function(){this.innerIndex=this.innerIndex<this.imagesLength-1?this.innerIndex+1:0}},watch:{index:function(e){this.innerIndex=e},innerIndex:function(){this.$emit("index",this.index)}},created:function(){"string"==typeof this.loop&&setInterval(this.loopImages,5e3)}}},121:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(148),a=t.n(i);n.default={name:"index",props:["title"],data:function(){return{galleryImages:[0,1,2].map(function(e){return"/src/assets/img/cycle/p-"+e+".jpg"})}},components:{imgCycle:a.a}}},130:function(e,n,t){n=e.exports=t(10)(),n.push([e.i,".fade-enter-active,.fade-leave-active{transition:opacity 5s}.fade-enter,.fade-leave-to{opacity:0}.img-cycle{position:relative;padding-top:48.64865%;margin-bottom:10px}.img-cycle img{position:absolute;top:0;left:0;width:100%;height:auto}","",{version:3,sources:["/./src/components/img-cycle.vue"],names:[],mappings:"AACA,sCACE,qBAAuB,CACxB,AACD,2BACE,SAAW,CACZ,AACD,WACE,kBAAmB,AACnB,sBAAuB,AACvB,kBAAoB,CACrB,AACD,eACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,WAAa,CACd",file:"img-cycle.vue",sourcesContent:["\n.fade-enter-active, .fade-leave-active {\n  transition: opacity 5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n.img-cycle {\n  position: relative;\n  padding-top: 48.64865%;\n  margin-bottom: 10px;\n}\n.img-cycle img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n"],sourceRoot:"webpack://"}])},133:function(e,n,t){n=e.exports=t(10)(),n.push([e.i,'.index p{margin-bottom:10px}.index p:last-child{margin-bottom:0}@media (max-width:767px){.index p:last-child{margin-bottom:10px}}.index ul{margin-top:-10px;margin-bottom:10px}.index ul li{position:relative;padding-left:15px}.index ul li:before{position:absolute;left:0;top:4px;content:"\\25CF";line-height:1}',"",{version:3,sources:["/./src/pages/index.vue"],names:[],mappings:"AAEA,SACE,kBAAoB,CACrB,AACD,oBACE,eAAiB,CAClB,AACD,yBACA,oBACI,kBAAoB,CACvB,CACA,AACD,UACE,iBAAkB,AAClB,kBAAoB,CACrB,AACD,aACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,oBACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,gBAAa,AACb,aAAe,CAChB",file:"index.vue",sourcesContent:["\n@charset \"UTF-8\";\n.index p {\n  margin-bottom: 10px;\n}\n.index p:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 767px) {\n.index p:last-child {\n    margin-bottom: 10px;\n}\n}\n.index ul {\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n.index ul li {\n  position: relative;\n  padding-left: 15px;\n}\n.index ul li:before {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  content: '●';\n  line-height: 1;\n}\n"],sourceRoot:"webpack://"}])},138:function(e,n,t){var i=t(130);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(11)("15320703",i,!0)},141:function(e,n,t){var i=t(133);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(11)("03cecd80",i,!0)},148:function(e,n,t){t(138);var i=t(0)(t(115),t(155),null,null);e.exports=i.exports},155:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"img-cycle"},[t("transition",{attrs:{name:"fade"}},[t("img",{key:e.innerIndex,attrs:{src:e.images[e.innerIndex],alt:""}})])],1)},staticRenderFns:[]}},159:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"inner index"},[t("div",{staticClass:"row"},[t("div",{staticClass:"small-12 medium-12 large-12 columns"},[t("img-cycle",{attrs:{images:e.galleryImages,index:0,loop:""}})],1)]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row"},[t("div",{staticClass:"small-12 medium-12 large-12 columns"},[t("p",[e._v("Minden a Ti kívánságotok szerint! Teljes mértékben ránk is bízhatjátok, de közösen is összeállíthatjuk az est zenei anyagát, hogy a nagyszülőktől a barátokig, mindenki a legjobban érezhesse magát.")]),e._v(" "),t("p",[e._v("Lehetőségek:")]),e._v(" "),t("ul",[t("li",[e._v("Egész estés élőhangszeres zeneszolgáltatás")]),e._v(" "),t("li",[e._v("Egész estés Dj szolgáltatás")]),e._v(" "),t("li",[e._v("Megosztva élőhangszeres-és Dj szolgáltatás")]),e._v(" "),t("li",[e._v("Ajándék-szolgáltatásunk: a ceremóniamesteri tevékenység ellátása,a lakodalom helyszínén")])]),e._v(" "),t("p",[e._v("\n        Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind hárman igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika,dob, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.\n      ")]),e._v(" "),t("p",[e._v("Ha felkeltettük érdeklődéseteket, keressetek telefonon és "),t("a",{attrs:{href:"mailto:okzenekar@gmail.com"}},[e._v("emailen")]),e._v(".")])])])}]}},64:function(e,n,t){t(141);var i=t(0)(t(121),t(159),null,null);e.exports=i.exports}});
//# sourceMappingURL=index.chunk.js.map