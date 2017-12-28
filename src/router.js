var index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index');
var about = r => require.ensure([], () => r(require('./pages/about.vue')), 'rolunk');
var articleParty = r => require.ensure([], () => r(require('./pages/article-party.vue')), 'party-zenekar');
var articleEvent = r => require.ensure([], () => r(require('./pages/article-event.vue')), 'zenekar-rendezvenyre');
var articleWedding = r => require.ensure([], () => r(require('./pages/article-wedding.vue')), 'zenekar-eskuvore');
//var downloads = r => require.ensure([], () => r(require('./pages/downloads.vue')), 'letoltesek');
var gallery = r => require.ensure([], () => r(require('./pages/gallery.vue')), 'galeria');
var opinions = r => require.ensure([], () => r(require('./pages/opinions.vue')), 'video');
var partners = r => require.ensure([], () => r(require('./pages/partners.vue')), 'partnereink');
var repertoire = r => require.ensure([], () => r(require('./pages/repertoire.vue')), 'repertoar');
var video = r => require.ensure([], () => r(require('./pages/video.vue')), 'velemenyek');
var contact = r => require.ensure([], () => r(require('./pages/contact.vue')), 'kapcsolat');

var routes = [
  {
    path: '/',
    component: index,
    data: {
      linkName: 'Főoldal',
      metaDesc: 'Ok Zenekar lakodalom party bál eksüvő dj Zenei kínálat kompromisszum nélkül!'
    }
  },
  {
    path: '/rolunk',
    component: about,
    data: {
      linkName: 'Rólunk',
      metaDesc: 'Rólunk: Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind ketten igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.'
    }
  },
  {
    path: '/zenekar-eskuvore',
    component: articleWedding,
    data: {
      category: 'Szolgáltatások',
      linkName: 'Zenekar esküvőre',
      title: 'Profi Zenekar Esküvőre - Széles Dalválaszték, 100% Elégedettség',
      metaDesc: 'Az OK Zenekar a legjobb választás ha minőségű élőzenét szeretne esküvőjére. Profi hangtechnika és fergetes hangulat. Legyen tökéletes esküvője velünk!'
    }
  },
  {
    path: '/party-zenekar',
    component: articleParty,
    data: {
      category: 'Szolgáltatások',
      title: 'Party Zenekar Duo - Felhőtlen partyhangulat, Prémium minőség',
      linkName: 'Party Zenekar',
      metaDesc: 'Az OK Zenekar közel 30 éves tapasztalattal rendelkezik és számos rendezvényen vettek részt, mint party zenekar. Széles műfajválaszték és profi hangtechnika!'
    }
  },
  {
    path: '/rendezveny-zenekar',
    component: articleEvent,
    data: {
      category: 'Szolgáltatások',
      linkName: 'Rendezvény Zenekar',
      title: 'Profi Rendezvény Zenekar - Széles Repertoár, 100% Élőzene ',
      metaDesc: 'Az OK zenekar tökéletes választás céges rendezvények, bálok, születésnapok, partyk, esküvők zenei hangulatának biztosítására. Ízig-vérig élőzene!!'
    }
  },
  {
    path: '/galeria',
    component: gallery,
    data: {
      linkName: 'Galéria',
      metaDesc: 'Fótók a zenekar tagjairól, bulikról, rendezvényekről.'
    }
  },
  {
    path: '/video',
    component: video,
    data: {
      linkName: 'Videó',
      metaDesc: 'Videóink'
    }
  },
  {
    path: '/repertoar',
    component: repertoire,
    data: {
      linkName: 'Repertoár',
      metaDesc: 'Repertoárunk'
    }
  },
  {
    path: '/velemenyek',
    component: opinions,
    data: {
      linkName: 'Vélemények',
      metaDesc: 'Vélemények a zenekarról'
    }
  },
  {
    path: '/kapcsolat',
    component: contact,
    data: {
      linkName: 'Kapcsolat',
      metaDesc: 'lépjen Kapcsolatba velünk'
    }
  },
  /*{
    path: '/letoltesek',
    component: downloads,
    data: {
      skipMenu: true,
      linkName: 'Letöltések',
      metaDesc: 'Zenék letöltése'
    }
  },*/
  {
    path: '/partnereink',
    component: partners,
    data: {
      skipMenu: true,
      linkName: 'Partnereink',
      metaDesc: 'Partnereink'
    }
  },
]

//console.log(routes);

module.exports = routes;
