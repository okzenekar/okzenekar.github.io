<template>
  <div class="inner index">
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <!-- <img-cycle 
          :images="galleryImages" 
          :index="0"
          loop ></img-cycle> -->
          <img class="members" src="/src/assets/img/cycle/p-1.jpg" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="small-12 medium-12 large-12 columns">
        <p>Minden a Ti kívánságotok szerint! Teljes mértékben ránk is bízhatjátok, de közösen is összeállíthatjuk az est zenei anyagát, hogy a nagyszülőktől a barátokig, mindenki a legjobban érezhesse magát.</p>
        <p>Lehetőségek:</p>
        <ul>
          <li>Egész estés élőhangszeres zeneszolgáltatás</li>
          <li>Egész estés Dj szolgáltatás</li>
          <li>Megosztva élőhangszeres-és Dj szolgáltatás</li>
          <li>Ajándék-szolgáltatásunk: a ceremóniamesteri tevékenység ellátása,a lakodalom helyszínén</li>
        </ul>
        <p>
          Mi, a zenekar tagjai gyermekkorunk óta zenélünk, tízen éves korunk óta játszunk tánczenét. Mind hárman igazi hangszeres zenészek vagyunk. Hangszereink: szintetizátor, harmonika,dob, szaxofon, klarinét. Hangszereink mellett énekhangunkkal is jól bánunk.
        </p>
        <p>Ha felkeltettük érdeklődéseteket, keressetek telefonon és <a href="mailto:okzenekar@gmail.com">emailen</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgCycle from 'root/components/img-cycle.vue';
export default {
  name: 'index',
  props: ['title'],
  data () {
    return  {
      galleryImages: [
        0, 1, 2
      ].map(x => `/src/assets/img/cycle/p-${x}.jpg`)
    }
  },
  components: {
    imgCycle
  }
}
</script>

<style lang="scss">
  @import '~root/components/scss/_variables';
  .index {
    .members {
      margin-bottom: 20px;
    }
    p{
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
      @media #{$mobile} {
        &:last-child{
          margin-bottom: 10px;
        }
      }
    }
    ul{
      margin-top: -10px;
      margin-bottom: 10px;
      li{
        position: relative;
        padding-left: 15px;
        &:before{
          position: absolute;
          left: 0;
          top: 4px;
          content: '●';
          line-height: 1;
        }
      }
    }
  }
</style>
