webpackJsonp([7],{120:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(161),l=i.n(a);e.default={name:"repertoire",data:function(){return{collection:l.a}},computed:{parts:function(){var t=this.collection.length;return[this.collection.slice(0,Math.round(t/2)),this.collection.slice(Math.round(t/2),t)]}},created:function(){}}},123:function(t,e,i){e=t.exports=i(9)(),e.push([t.i,'.repertoire h3{padding-left:.9375rem;margin-bottom:20px}.repertoire tr th{text-align:left;background:#cc333f;color:#f9f2e7;padding:5px}.repertoire tr td{border-bottom:1px solid #413e4a;padding:5px}.repertoire tr td:first-child{padding-right:20px}.repertoire tr[subCategory] td{color:#fff;background:#cc333f;font-weight:700;padding-left:5px}.repertoire tr[subCategory] td:before{display:none!important}.repertoire tr[subCategory] td:last-child{padding-bottom:0}.repertoire tr:last-child,.repertoire tr:last-child td{border-bottom:none}.repertoire table{width:100%}@media (max-width:767px){.repertoire table,.repertoire tbody,.repertoire td,.repertoire thead,.repertoire tr{display:block}.repertoire thead{display:none}.repertoire tr{border-bottom:1px solid #413e4a}.repertoire tr td{padding:5px 0;border-bottom:none}.repertoire tr td:first-child{padding-right:0}.repertoire tr td:first-child:before{content:"c\\EDm:";display:inline-block;background:#cc333f;color:#f9f2e7;width:65px;padding:0 5px;margin-right:10px}.repertoire tr td:last-child{padding-top:0}.repertoire tr td:last-child:before{content:"szerz\\151:";display:inline-block;background:#cc333f;color:#f9f2e7;width:65px;padding:0 5px;margin-right:10px}}@media (min-width:1025px){.repertoire table{width:100%}.repertoire tr:hover td{background:#efdcbe}}',"",{version:3,sources:["/./src/pages/repertoire.vue"],names:[],mappings:"AAEA,eACE,sBAAwB,AACxB,kBAAoB,CACrB,AACD,kBACE,gBAAiB,AACjB,mBAAoB,AACpB,cAAe,AACf,WAAa,CACd,AACD,kBACE,gCAAiC,AACjC,WAAa,CACd,AACD,8BACE,kBAAoB,CACrB,AACD,+BACE,WAAe,AACf,mBAAoB,AACpB,gBAAkB,AAClB,gBAAkB,CACnB,AACD,sCACE,sBAAyB,CAC1B,AACD,0CACE,gBAAkB,CACnB,AACD,uDACE,kBAAoB,CACrB,AACD,kBACE,UAAY,CACb,AACD,yBACA,oFACI,aAAe,CAClB,AACD,kBACI,YAAc,CACjB,AACD,eACI,+BAAiC,CACpC,AACD,kBACI,cAAe,AACf,kBAAoB,CACvB,AACD,8BACI,eAAiB,CACpB,AACD,qCACI,iBAAgB,AAChB,qBAAsB,AACtB,mBAAoB,AACpB,cAAe,AACf,WAAY,AACZ,cAAe,AACf,iBAAmB,CACtB,AACD,6BACI,aAAe,CAClB,AACD,oCACI,qBAAmB,AACnB,qBAAsB,AACtB,mBAAoB,AACpB,cAAe,AACf,WAAY,AACZ,cAAe,AACf,iBAAmB,CACtB,CACA,AACD,0BACA,kBACI,UAAY,CACf,AACD,wBACI,kBAAoB,CACvB,CACA",file:"repertoire.vue",sourcesContent:["\n@charset \"UTF-8\";\n.repertoire h3 {\n  padding-left: 0.9375rem;\n  margin-bottom: 20px;\n}\n.repertoire tr th {\n  text-align: left;\n  background: #CC333F;\n  color: #F9F2E7;\n  padding: 5px;\n}\n.repertoire tr td {\n  border-bottom: 1px solid #413E4A;\n  padding: 5px;\n}\n.repertoire tr td:first-child {\n  padding-right: 20px;\n}\n.repertoire tr[subCategory] td {\n  color: #ffffff;\n  background: #CC333F;\n  font-weight: bold;\n  padding-left: 5px;\n}\n.repertoire tr[subCategory] td:before {\n  display: none !important;\n}\n.repertoire tr[subCategory] td:last-child {\n  padding-bottom: 0;\n}\n.repertoire tr:last-child, .repertoire tr:last-child td {\n  border-bottom: none;\n}\n.repertoire table {\n  width: 100%;\n}\n@media (max-width: 767px) {\n.repertoire table, .repertoire tr, .repertoire td, .repertoire thead, .repertoire tbody {\n    display: block;\n}\n.repertoire thead {\n    display: none;\n}\n.repertoire tr {\n    border-bottom: 1px solid #413E4A;\n}\n.repertoire tr td {\n    padding: 5px 0;\n    border-bottom: none;\n}\n.repertoire tr td:first-child {\n    padding-right: 0;\n}\n.repertoire tr td:first-child:before {\n    content: 'cím:';\n    display: inline-block;\n    background: #CC333F;\n    color: #F9F2E7;\n    width: 65px;\n    padding: 0 5px;\n    margin-right: 10px;\n}\n.repertoire tr td:last-child {\n    padding-top: 0;\n}\n.repertoire tr td:last-child:before {\n    content: 'szerző:';\n    display: inline-block;\n    background: #CC333F;\n    color: #F9F2E7;\n    width: 65px;\n    padding: 0 5px;\n    margin-right: 10px;\n}\n}\n@media (min-width: 1025px) {\n.repertoire table {\n    width: 100%;\n}\n.repertoire tr:hover td {\n    background: #efdcbe;\n}\n}\n"],sourceRoot:"webpack://"}])},132:function(t,e,i){var a=i(123);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(10)("58271215",a,!0)},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inner repertoire"},[i("div",{staticClass:"row"},t._l(t.parts,function(e){return i("div",{staticClass:"small-12 medium-6 desktop-6 columns"},[i("table",[t._m(0,!0),t._v(" "),i("tbody",t._l(e,function(e){return i("tr",{attrs:{subCategory:e.type}},[i("td",[t._v(t._s(e.title))]),t._v(" "),i("td",[t._v(t._s(e.artist))])])}))])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[i("span",[t._v("C")]),t._v("ím")]),i("th",[i("span",[t._v("S")]),t._v("zerző/"),i("span",[t._v("E")]),t._v("lőadó")])])])}]}},161:function(t,e){t.exports=[{title:"8 ÓRA MUNKA",artist:"Beatriche"},{title:"A füredi Annabálon",artist:"Dupla Kávé"},{title:"A kicsi a nagy az Arthur és",artist:"Lgt"},{title:"A kör",artist:"Edda"},{title:"A legtöbb ember",artist:"Apostol"},{title:"A tied mindenem",artist:"Fiesta"},{title:"Adj helyet magad mellett",artist:"Bikini"},{title:"Afrika",artist:"KFT"},{title:"Ajándék",artist:"Piramis"},{title:"Ajjaj fekete vonat",artist:"Poór Péter "},{title:"Aki elmegy, ugye hazatér",artist:"Fiesta"},{title:"ALL OF ME"},{title:"Állj meg kislány !",artist:"Csonka András"},{title:"Amikor én nótákat lopok",artist:"Irigy hónaljmirigy"},{title:"Amit nem mondhattam el",artist:"Korál"},{title:"AMOR AMOR",artist:"Frank Sinatra"},{title:"Amor latino",artist:"fiesta"},{title:"Angelina",artist:"Fiesta"},{title:"Angyalföldi pálmafák",artist:"Fenyő Miklós"},{title:"ARANYESŐ",artist:"Fekete szemek"},{title:"ARE YOU LONSOME T.",artist:"Elvis Presley"},{title:"Arrivederci Amore",artist:"Dolly Roll"},{title:"Árva fiú",artist:"Cserháti Zsuzsa"},{title:"Az angyalok földjén",artist:"Fenyő Miklós"},{title:"Az Első szerelem",artist:"Máté Péter"},{title:"Az légy aki vagy ",artist:"Charlie"},{title:"AZÉRT VANNAK A JÓBARÁTOK",artist:"Máté Péter"},{title:"AZOK A BOLDOG SZÉP NAPOK",artist:"Beatrice"},{title:"Balatoni nyár",artist:"KFT"},{title:"Bicska Maxi",artist:"Lui Amstrong"},{title:"BLUE SHOEDS SHOES",artist:"Elvis Presley"},{title:"Bob herceg",artist:"Bob herceg"},{title:"Boldog születésnapot",artist:"Halász Judit"},{title:"Bolond aki sír",artist:"TNT"},{title:"BONA SERA",artist:"Louis Prima"},{title:"Bonita",artist:"Fiesta"},{title:"Börtön árnyékában",artist:"Mc haver"},{title:"Bubamara",artist:"Mc. Haver"},{title:"Bye bye lány",artist:"Zámbó Jimmy"},{title:"CAN'T HELP FALLING IN LOVE",artist:"Elvis Presley"},{title:"Casinó Twist",artist:"Hungária"},{title:"Cha cha cha",artist:"Hungária"},{title:"CIAO MARIA",artist:"Hungária"},{title:"Cigánylány"},{title:"csak egy vallomás"},{title:"CSAVARD FEL A SZŐNYEGET",artist:"Hungária"},{title:"Csengess be hozzám jó barát",artist:"Generál"},{title:"Csillag vagy nékem",artist:"Ihász Gábor"},{title:"Csillagdal",artist:"Megasztár"},{title:"Csillagokban járunk"},{title:"CSÓKKIRÁLY",artist:"Hungária"},{title:"Darabokra törted a szívem",artist:"Bergendy"},{title:"Dédapám",artist:"Skorpió"},{title:"Diana",artist:"Paul Anka"},{title:"Ding-dong",artist:"Csonka András"},{title:"Don Quijote",artist:"Neoton"},{title:"Dzsungel Rock",artist:"hungária"},{title:"Edda blues",artist:"Edda"},{title:"Édes kisfiam",artist:"Cserháti"},{title:"Egy bolond 100-at csinál",artist:"filmzene"},{title:"Egy darabot a szívemből",artist:"Máté Péter"},{title:"Egy pillanat itt maradt",artist:"Krisz Rudolf"},{title:"EGY SZÁL HARANGVIRÁG",artist:"Szécsi Pál"},{title:"Egyedül te segíthetsz rajtam",artist:"Márió"},{title:"Egyetlen szó",artist:"TNT"},{title:"Egyszer véget ér",artist:"Máté Péter"},{title:"Éjszakák és nappalok",artist:"Szécsi Pál"},{title:"El kell, hogy engedj",artist:"Auth Csilla"},{title:"El rey del /ay ay ay/"},{title:"ELADÓ-KIADÓ MOST A SZÍVEM",artist:"Apostol"},{title:"Elisabeth",artist:"KFT"},{title:"ELMEGYEK",artist:"Máté Péter"},{title:"Elsöpri a szél",artist:"Ihász Gábor"},{title:"Elszáll a gondom",artist:"Ihász Gábor"},{title:"Eltűnik a könnycsepp",artist:"TNT"},{title:"EMANUELL"},{title:"Embertelen dal",artist:"LGT"},{title:"ÉN ÉDES KATINKÁM",artist:"Szécsi Pál"},{title:"Én mindenkiben csalódttam"},{title:"ÉNEK AZ ESŐBEN",artist:"V-Tech"},{title:"Ennek így kellett lennie ",artist:"TNT"},{title:"Érzés ",artist:"Edda"},{title:"Esküvő",artist:"Üllői úti fák"},{title:"Eszelős szerelem",artist:"Hungária"},{title:"Ever forever",artist:"örökzöld"},{title:"ÉVSZAKOK",artist:"Balázs Feco"},{title:"Fagyi",artist:"Bikini"},{title:"FEKETE VONAT",artist:"Mc-Hawer&Tekknő"},{title:"FÉLTELEK",artist:"Auth Csilla & Szolnoki P."},{title:"FIAM",artist:"Komár László"},{title:"Fly me to the moon   ",artist:"Frank Sinatra"},{title:"Fogj egy sétapálcát",artist:"Koós János"},{title:"Forogj világ",artist:"Nox"},{title:"Fuoco nel fuoco",artist:"Ramazotti"},{title:"GEDEON BÁCSI",artist:"Szécsi Pál"},{title:"Gina",artist:"Dolly Roll"},{title:"GONDOLSZ-E MAJD RÁM",artist:"Echo"},{title:"GREASE Pomádé"},{title:"Griechisher wein"},{title:"Gyere gyere Juli",artist:"Hungária"},{title:"GYERE TÁNCOLJ CIGÁNYLÁNY",artist:"Mc haver"},{title:"Gyertyafény keringő"},{title:"GYÖNGYHAJÚ LÁNY",artist:"Omega"},{title:"GYÖNGYHALÁSZ "},{title:"Ha az életben nincs már",artist:"Kispál és a borz"},{title:"Ha itt lennél velem",artist:"Republik"},{title:"Halvány őszirózsa",artist:"3+2 együttes"},{title:"Halványkék szemek",artist:"Komár László"},{title:"Harmónikás",artist:"Expressz"},{title:"Hazafelé",artist:"Balázs Fecó"},{title:"Helló",artist:"Lionel"},{title:"HELLO MARY LOU",artist:"(Country)"},{title:"Hey Joe",artist:"Hobo Blues Band"},{title:"Híd a folyót",artist:"TNT"},{title:"Ho la mi amor",artist:"Fiesta"},{title:"HOLNAP HAJNALIG",artist:"Neoton"},{title:"Holnaptól",artist:"Bon-bon"},{title:"Homokóra",artist:"Záray Márta"},{title:"Honfoglalás",artist:"Demjén Ferenc"},{title:"HOTEL MENTHOL",artist:"Hungária"},{title:"Hova visz a hajó",artist:"TNT"},{title:"How deep is your love",artist:"Bee Gees"},{title:"Hull az elsárgult levél",artist:"Máté Péter"},{title:"Hulla Hully gully",artist:"Hungária"},{title:"Huncut karnevál",artist:"Irigy hónaljmirigy"},{title:"Húsz év múlva",artist:"Komár László"},{title:"I do I do I do",artist:"Abba"},{title:"I JUST CALLED",artist:"Stewie Wonder"},{title:"I love you baby (can't take my eyes)",artist:"Cserháti Zsuzsa & Charlie"},{title:"I want you  ",artist:"Elvis"},{title:"I will survive",artist:"Gloria Gaynor"},{title:"Igazi szerelem",artist:"Help"},{title:"Imádok útra kelni",artist:"Márió"},{title:"IMAGINE",artist:"John Lennon"},{title:"Immortality",artist:"Bee Gees"},{title:"Iskolatáska",artist:"Bergendy"},{title:"It's not unusual",artist:"Tom Jones"},{title:"Itt vagy a szívembe",artist:"TNT"},{title:"Járom az utam"},{title:"Játszom",artist:"Hooligans"},{title:"JÉG DUPLA WHISKYVEL",artist:"Charlie"},{title:"Jöjj kedvesem",artist:"Fonográf"},{title:"Jött veled a nyár",artist:"Fiesta"},{title:"Just help your self",artist:"Tom Jones"},{title:"Karnevál",artist:"Irigy hónaljmirigy"},{title:"Karolina",artist:"Szécsi Pál"},{title:"KÉK A SZEME"},{title:"KELL, HOGY VÁRJ",artist:"Neoton"},{title:"Késő üzenet",artist:"Dupla Kávé"},{title:"KI VISZ HAZA",artist:"Bikini"},{title:"Kicsi gesztenye",artist:"TNT"},{title:"Kicsit szomorkás",artist:"Örökzöld"},{title:"Kikötők ",artist:"Gáspár Laci"},{title:"Kingston Town",artist:"UB 40"},{title:"Királylány",artist:"Hooligans"},{title:"Kis csónakom leng a Duna vízén",artist:"3+2 együttes"},{title:"Koktél",artist:"United"},{title:"Könnyű álmot hozzon az éj",artist:"Charlie"},{title:"Köss egy sárga szallagot"},{title:"Közeli helyeken",artist:"Bikini"},{title:"KÜLÖNÖS ÉJSZAKA VOLT",artist:"Csinibaba"},{title:"Különös szilveszter",artist:"Auth Csilla"},{title:"LA BAMBA",artist:"Kaoma"},{title:"LAMBADA",artist:"Kaoma"},{title:"Latin szerenád",artist:"Neoton"},{title:"LAZÍTANI",artist:"Hofi Géza"},{title:"Légy ma éjjel a társam",artist:"Fenyő Miklós"},{title:"Lehetsz király ",artist:"Romeó és Júlia"},{title:"Lehoznám néked a csillagokat"},{title:"Létezem",artist:"R-go"},{title:"Levél a távolból",artist:"Fonográf"},{title:"Limbó hintó",artist:"Hungária"},{title:"Love is in the air"},{title:"LOVE ME TENDER",artist:"Elvis Presley"},{title:"LÖKD IDE A SÖRT",artist:"Fonográf"},{title:"MA ESTE FELMEGYEK MAJD",artist:"Apostol"},{title:"MACSKAJAJ",artist:"Mc Hawer"},{title:"Made in Hungária",artist:"Fenyő miklós"},{title:"Mama",artist:"emberek"},{title:"Mambó Italiano",artist:"Komár László"},{title:"Maradj velem ",artist:"Korál"},{title:"MÉG NEM VESZÍTHETEK",artist:"Zámbó Jinny"},{title:"Meg üssem vagy ne ",artist:"Bikini"},{title:"MEGHALOK HOGY HA HOZZÁM ÉRSZ",artist:"Ámokfutók"},{title:"Megyek a holdra",artist:"Bon Bon"},{title:"MESEAUTÓBAN"},{title:"Micimackó",artist:"Halász Judit"},{title:"Micsoda buli",artist:"Hungária"},{title:"Micsoda Nő ez a férfi",artist:"filmzene"},{title:"Mielött végleg elmegyek",artist:"Bikini"},{title:"Miénk ez a cirkusz",artist:"Lgt"},{title:"Miért hagytuk hogy így legyen",artist:"Koncz Zsuzsa"},{title:"MIKOR A VODKA A FEJEMBE…",artist:"Mc.Hawer&Tekknő"},{title:"Millió rózsaszál",artist:"Csongrádi Kata"},{title:"Minden jót Mónika",artist:"Payer András"},{title:"Minden sarkon álltam ",artist:"Edda"},{title:"Mindenkinek van egy álma"},{title:"MINDIG KELL EGY BARÁT",artist:"Zalatnai Sarolta"},{title:"MINT, A VIOLÁK",artist:"Szécsi Pál"},{title:"Miszter Alkohol",artist:"Koncz Zsuzsa"},{title:"Mond, hogy nem …",artist:"Fonográf"},{title:"Mondd mért szeretsz te mást ?",artist:"Máté Péter"},{title:"Most élsz",artist:"Máté Péter"},{title:"Most kell eldöntenem",artist:"Demjén Ferenc"},{title:"Most kell eldöntenem",artist:"Demjén"},{title:"Múlnak a gyermek évek",artist:"Ihász Gábor"},{title:"Multimilliomos jazzdobos",artist:"Hungária"},{title:"MY WAY",artist:"Frank Sinatra"},{title:"NA NE NAH",artist:"Vaya con dios"},{title:"NAGY UTAZÁS",artist:"Presse Gábor"},{title:"Napfény a jégen",artist:"Fenyő Miklós"},{title:"Ne Felejtsd El",artist:"Apostol"},{title:"NE GONDOLD",artist:"Illés"},{title:"Ne vágj ki minden fát !",artist:"Fonográf"},{title:"Nehéz a boldogságtól búcsut venni",artist:"Apostol"},{title:"NEM ADOM KÖLCSÖN A SZÍVEM",artist:"Balázs Pali"},{title:"NEM CSAK A 20 ÉVESEKÉ",artist:"Sandi"},{title:"Nem jön álom a szememre",artist:"TNT"},{title:"Nem találok szavakat",artist:"TNT"},{title:"Nem vagyok én apáca",artist:"Zalatnay Sarolta"},{title:"NEW YORK",artist:"Frank Sinatra"},{title:"Nézz az ég felé",artist:"Charlie"},{title:"Nika se perimeno",artist:"Delhusa Gjon"},{title:"Nincs arra szó",artist:"M7"},{title:"Nincs szerencsém",artist:"Apostol"},{title:"No Miss",artist:"Komár László"},{title:"Numerakirály",artist:"Irigy Hónaljmirígy"},{title:"Nyár van",artist:"Neoton Familia"},{title:"Oda vagyok magáért "},{title:"Oh Carol",artist:"Niel Seneca"},{title:"Oh Darling",artist:"Beatles"},{title:"Oh kisleány",artist:"Illés"},{title:"One",artist:"U2"},{title:"Ott állsz az út végén",artist:"Máté Péter"},{title:"Ő még csak 14",artist:"Lgt"},{title:"Örökké tart",artist:"Tankcsapda"},{title:"Őrült szerelem",artist:"Baby Gabi & Lányi Lala"},{title:"Pago Pago",artist:"Neoton Familia"},{title:"PÁRIZSBAN SZÉP A NYÁR",artist:"Keringő"},{title:"Part time a lover",artist:"Stewie Wonder"},{title:"Pedro kocsmájában",artist:"Vámosi János"},{title:"Pesti Gigoló",artist:"Komár László"},{title:"Petróleum lámpa",artist:"Omega"},{title:"PIROS BICIKLI",artist:"Mc.Hawer&Tekknő"},{title:"Piros lett a pipacs virága",artist:"Mc Hawer"},{title:"Pocsolyába léptem",artist:"Takáts Tamás DBB"},{title:"Pókháló van már az ablakon",artist:"Aradszky László"},{title:"QUANDO",artist:"(Samba)"},{title:"Rég várok valakire",artist:"R-go"},{title:"RENDES EMBER ÉN MÁR",artist:"3+2"},{title:"Reszket a hold a tó vizén",artist:"csinibaba"},{title:"Rock and roll party  ",artist:"Hungária"},{title:"ROCK AROUND THE CLOCK",artist:"Bill Haley"},{title:"Romantika",artist:"Zorán"},{title:"Sabadság vándorai",artist:"Demjén"},{title:"Sajtból van a hold",artist:"Bergendi"},{title:"Sárgul már a kukoricaszár",artist:"3+2 együttes"},{title:"Save the last dance"},{title:"SE VELED SEM NÉLKÜLED",artist:"Dupla Kávé"},{title:"Se veled, se nélküled",artist:"Balázs Pali"},{title:"Sej haj akácfa",artist:"Mc Hawer"},{title:"September",artist:"Eath wind and fire"},{title:"SEX BOMB",artist:"Tom Jones"},{title:"She's a Lady",artist:"Tom Jones"},{title:"Still got the blues",artist:"Gary Moore"},{title:"STRANGERS IN THE NIGHT",artist:"Frank Sinatra"},{title:"Stumbling' in "},{title:"Sunshine day"},{title:"Surda dala"},{title:"Szabad a gazdag",artist:"Bon Bon"},{title:"Száguldás, porsche szerelem",artist:"Cserháti Zsuzsa & Charlie"},{title:"Szájbergyerek",artist:"Kis tehén"},{title:"Szállj el kismadár",artist:"Republic"},{title:"Szállj szállj szállj fel magasra",artist:"Piramis"},{title:"Szerelem első vérig",artist:"Demjén Ferenc"},{title:"SZERELEMRE SZÜLETTEM",artist:"Zoltán Erika"},{title:"Szerelemvonat",artist:" Demjén Ferenc"},{title:"Szeress úgy is ha rossz vagyok",artist:"Zámbó Jimmy"},{title:"Szeressük egymást gyerekek",artist:"Poór Péter"},{title:"Szereted-e még?",artist:"Szécsi Pál"},{title:"Szeretlek én (Besame mucho)",artist:"Örökzöld"},{title:"SZERETLEK IS MEG NEM IS",artist:"Szikora Róbert"},{title:"Szeretlek is, meg nem is",artist:"R-go"},{title:"Szexbomba rumba",artist:"Hungária"},{title:"Szexepil",artist:"Bon Bon"},{title:"Szivárvány dal",artist:"TNT"},{title:"Szívből szeretni",artist:"Rómeó és Júlia"},{title:"Szívem eladó",artist:"Máté Péter"},{title:"Szólj rám ha hangosan énekelek",artist:"LGT"},{title:"SZÓLJON HANGOSAN ",artist:"Soltész"},{title:"Szülői ház",artist:"Demjén"},{title:"Tábortűz",artist:"Emberek"},{title:"Találd ki gyorsan a gondolatom",artist:"Korda György"},{title:"Táncolj cigánylány",artist:"Mc Hawer feat. Tekknő"},{title:"Táncoló fekete lakkcipők",artist:"Komár László"},{title:"Távollét",artist:"Szécsi Pál"},{title:"Te + én",artist:"Inflagranti"},{title:"Tears in heaven",artist:"Eric Clapton"},{title:"Tedd a szívedre a kezed",artist:"Flipper Öcsi"},{title:"THE GIRL FROM IPANEMA",artist:"(Bossa Nova)"},{title:"TICO TICO",artist:"(Rumba)"},{title:"TIE A YELLOW RIBBON",artist:"T. Orlando & Daw"},{title:"Tiéd mindenem",artist:"Fiesta"},{title:"Tiltott perc",artist:"TNT"},{title:"TITKOS ÜZENET",artist:"TNT"},{title:"Tölcsért csinálok a kezemből",artist:"Zalatnay Sarolta"},{title:"Trabant",artist:"Exotic"},{title:"TUTTI FRUTTI",artist:"(Rock&Roll)"},{title:"TWIST AGAIN",artist:"Chubby Checker"},{title:"Újra itt van",artist:"Illés"},{title:"Újra meg újra",artist:"Fiesta"},{title:"Unchain my heart",artist:"Joe Cooker"},{title:"Úri ember vagyok",artist:"Füstifecskék"},{title:"UTCABÁL",artist:"Hungária"},{title:"UTCÁN",artist:"Illés Együttes"},{title:"Utoljára küldöm neked",artist:"Lagzi Lajcsi"},{title:"Utolsó cigaretta",artist:"P-mobil"},{title:"Valaki mondja meg",artist:"Képzelt riport"},{title:"Valami Amerika",artist:"Bon-Bon"},{title:"Vándorének (Szép nyári nap)",artist:"Neoton Familia"},{title:"Várj, míg felkel majd a nap",artist:"V'Moto-Rock"},{title:"Várni rád",artist:"hungária"},{title:"Végső vallomás",artist:"United"},{title:"Vetkőzés",artist:"Valami Amerika"},{title:"VIVA E'SPANJA"},{title:"Vízparti Twist",artist:"Hungária"},{title:"Volare ",artist:"Gipsy King"},{title:"WHAT A WONDERFUL W.",artist:"Louis  Armstrong"},{title:"Who stop the rain",artist:"C.C.R."},{title:"Woman In Love"},{title:"Y.M.C.A"},{title:"You Are My Destiny",artist:"Paul Anka"},{title:"You drive me crazy",artist:"Shaken Stevens"},{title:"You got it",artist:"Roy Orbison"},{title:"You're the first, the last my",artist:"Berry White"},{title:"Záporeső",artist:"Liza"},{title:"Zenenélkül mit érek én?",artist:"Máté Péter"},{title:"Zenevonat",artist:"LGT"},{title:"Cigányzene",type:""},{title:"Zorba (A görög)"},{title:"Mulatós"},{title:"A babám budakeszi"},{title:"A dávodi dombtetőn"},{title:"A faluban nincs több"},{title:"A jányok anyalok"},{title:"A laktanya udvarán"},{title:"A rátóti legények"},{title:"A szegedi csikós"},{title:"A szeretőm dunántúli"},{title:"Ádámnak Éva kell"},{title:"Budapesten hagytam én a szivem"},{title:"Befogom a lovam"},{title:"Cigány cigány mért"},{title:"Csak csak az esik"},{title:"Csitt csak rózsám"},{title:"Csopaki bort iszogatok"},{title:"Csuka potyka kecsege"},{title:"Dunaparti csónakház"},{title:"Dunna dunna"},{title:"Édesanyám kedves anyám "},{title:"Ég a kunyhó"},{title:"Eger városa"},{title:"Egy asszonynak 9 a lánya"},{title:"Egy cica két cica"},{title:"Egy kicsi ház van a domb tetején"},{title:"Éjjel az omnibusz tetején"},{title:"Elmegyek én"},{title:"Elment a Lidinéni"},{title:"Én és a kisöcsém"},{title:"Én vagyok a falu rossza"},{title:"Ennek a kislánynak"},{title:"Erdő erdő erdő"},{title:"Eresz alatt"},{title:"Esteledik a faluban"},{title:"Ez a kislány megy a"},{title:"Ez a vonat most van"},{title:"Ezekkel a soförökkel baj van"},{title:"Favilla fakanál"},{title:"Fecskemadár rászállot a"},{title:"Fekete Péter"},{title:"Felszállott a vadgalamb"},{title:"Fodrozik a Tisza"},{title:"Gólya gólya hosszúlábú"},{title:"Gyere csókolj meg szaporán"},{title:"Gyere velem az erdőbe"},{title:"Hajlik a rózsafa"},{title:"Hajnalom csillagom"},{title:"Halkan pengesd"},{title:"Halljátok cigányok"},{title:"Haragszik az édes"},{title:"Hat nap óta szól a"},{title:"Házasodom nemsokára"},{title:"Hej de kutya jó kedvem van"},{title:"Hej de szép kis "},{title:"Hej mi mi mi mi mi mi"},{title:"Hétre ma várom"},{title:"Hideg szél fúj"},{title:"Hogyha nékem sok pénzem lesz"},{title:"Hosszú az éjszaka"},{title:"Huszonegy huszonkettő"},{title:"Húzzátok cigányok"},{title:"Indul a sváb hegyi"},{title:"Jaj Cica"},{title:"Jaj de magas ez a"},{title:"János legyen"},{title:"János legyen fenn"},{title:"Jegenyefán fészket rak a csóka"},{title:"Jó a lány szép"},{title:"Jó estét kívánok"},{title:"Jó estét kívánok"},{title:"Józska levelet hozott a posta"},{title:"Jöjjön ki Óbudára"},{title:"Julcsa ha kimegy a piacra"},{title:"Júlia Júlia jajj"},{title:"Kantinosné angyalom"},{title:"Káposzta káposzta"},{title:"Károg a holló"},{title:"Kecskebéka felmászott a"},{title:"Kék a búzavirág"},{title:"Kék a szemed mint az ég"},{title:"Kérges a tenyerem"},{title:"Kertek alatt faragnak"},{title:"Két út van előttem"},{title:"Kilenc kis gólya"},{title:"Kinek nincsen szeretője"},{title:"Kinn a faluvégén"},{title:"Kis kendő nagy "},{title:"Kis kút kerekes kút"},{title:"Kis kutya nagy"},{title:"Kisbecskerek, nagybegykerek"},{title:"Kislány vigyázz"},{title:"Kombiné"},{title:"Kukorékol a kiskakas"},{title:"Lakodalom van a mi utcánkban"},{title:"Lányok a legényt"},{title:"Leégett a juhász"},{title:"Légy az icipici"},{title:"Legyen a Horvát"},{title:"Legyen a Horváth kertben "},{title:"Lemegyek a lemegyek a "},{title:"Lenn a délibábos"},{title:"Lenn a dorozsmai"},{title:"Lőre Lőre"},{title:"Mához egy hétre már nem"},{title:"Majd ha nékem sok"},{title:"Már ezután úgy élem"},{title:"Már minálunk babám"},{title:"Megy a gőzős"},{title:"Messze van a nyíregyházi"},{title:"Minek a szőke"},{title:"Molnár legény"},{title:"Most kezdődik a"},{title:"Nád a házam teteje"},{title:"Nádfedeles kisházikó"},{title:"Nagy a feje búsuljon a ló"},{title:"Negyvenhatos sárga villamoson"},{title:"Nem fúj a szél"},{title:"Nem tagadtam sohasem"},{title:"Nem zörög a haraszt"},{title:"Nincsen pénzem de majd lesz"},{title:"országúton hosszú a jegenye sor"},{title:"Őrmester úr"},{title:"Paplak mellett"},{title:"Pattogatott kukorica"},{title:"Pénztárcámnak üres a"},{title:"piros volt a paradicsom nem"},{title:"Piszkáld ki"},{title:"Rámás cizmát visel a babám"},{title:"Régi mániám"},{title:"Repül a szán"},{title:"Repül a szán"},{title:"Réten réten"},{title:"Rózsabokorban jöttem a"},{title:"Sárga a csikó"},{title:"Sárgul már a kukorica"},{title:"Schneider Fáni"},{title:"Sej-haj Rozi"},{title:"Söprik a pápai utcát"},{title:"Sörös ember"},{title:"Sötét az utca"},{title:"Suszter legény"},{title:"Suttyó legény koromba"},{title:"Sürű csillag ritkán ragyog"},{title:"Száz forintnak"},{title:"Széles száju kismacska"},{title:"Szép a babám fekete"},{title:"Szép a rózsám"},{title:"Szép asszonynak"},{title:"Szépen úszik a vadkacsa"},{title:"Szőr a szitában"},{title:"Tagadom tagadom"},{title:"Tíz pár csókot"},{title:"Túl a Tiszán faragnak az ácsok"},{title:"Túl a tiszán van"},{title:"Túr a disznó"},{title:"Utcára nyílik a"},{title:"Váci utcán"},{title:"Van két lovam"},{title:"Van nekem szeretőm"},{title:"Vásárhelyi híres"},{title:"Vége már a dáridónak"},{title:"Vége vége vége már"},{title:"Vékony héjja de vékony"},{title:"Verpeléti akácos"},{title:"Vörös bort ittam"},{title:"Vörös bort ittam az este"},{title:"Zöld a petrezselyem"},{title:"Zöld erdőben"},{title:"Zölderőben terem a"},{title:"Zöldre van a rácsos"},{title:"Zsebkendőm négy sarka"},{title:"A Babám, Fekete Romalány"},{title:"A cigányok sátora"},{title:"A cigánysoron nem merek"},{title:"Eladom a lovamat"},{title:"Elment a Lidinéni"},{title:"Én is részeg te is"},{title:"Erdőszélén sátoroznak"},{title:"Fáj a szívem"},{title:"Fejik a fekete kecskét"},{title:"Fényes a cipőm"},{title:"Három deci köménymag"},{title:"Hosszú fekete haj"},{title:"Kislány vigyázz"},{title:"Megdöglött a bíró lova"},{title:"Piros volt a paradicsom"},{title:"Sej haj akácfa"},{title:"Sűrün esik az eső"},{title:"Úgy szeretem a rányimat"},{title:"Felmásztam az eperfára"},{title:"Vörös bor ittam az este"},{title:"Ladik ladik"},{title:"Van egy lovam"},{title:"Lám meg mondtam Sárközi"},{title:"Ne mozgasd a lábad szárát"},{title:"Börtárca"},{title:"Sárga rojtos"},{title:"Hej rigó rigó"},{title:"Elmentem én az erdőbe"},{title:"Piros bicigli"},{title:"Aranyeső"},{title:"Ürge van a határba"}]},62:function(t,e,i){i(132);var a=i(0)(i(120),i(150),null,null);t.exports=a.exports}});
//# sourceMappingURL=repertoar.chunk.js.map