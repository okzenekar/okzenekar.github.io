<template>
  <div class="inner index">
    <div class="row">
      <div class="small-12 medium-6 large-6 columns">
        <p>Örökzöld, retro, mulatós élőben, és igény szerint napjaink zenéi DJ-szolgáltatással.</p>
        <p>Minden a Ti kívánságotok szerint! Teljes mértékben ránk is bízhatjátok, de közösen is összeállíthatjuk az est zenei anyagát, hogy a nagyszülőktől a barátokig, mindenki a legjobban érezhesse magát.</p>
        <p>Ajándék-szolgáltatásaink:</p>
        <ul>
          <li>a ceremóniamesteri tevékenység ellátása</li>
          <li>a lakodalom helyszínen a esküvői szertartás kihangosítása</li>
        </ul>
        <p>Ha felkeltettük érdeklődéseteket, keressetek telefonon és <a href="mailto:okzenekar@gmail.com">emailen</a>.</p>
      </div>
      <div class="small-12 medium-6 large-6 columns">
        <img-cycle 
          :images="galleryImages" 
          :index="0"
          loop ></img-cycle>
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
        '52', '49', '00', '02', '37', '18', '39', '01' 
      ].map(x => `/src/assets/img/cycle/gallery_${x}.jpg`)
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
