<template>
  <div class="inner">
    <footer>
      <div class="row text-center">
        <div class="columns small-12 medium-12 desktop-12">
          <router-link class="fullWidth" to="/zenekar-eskuvore" exact>Zenekar Esküvőre</router-link> <span>/</span>
          <router-link class="fullWidth" to="/party-zenekar" exact>Party zenekar</router-link> <span>/</span>
          <router-link class="fullWidth" to="/rendezveny-zenekar" exact>Rendezvény Zenekar</router-link>
        </div>
      </div>
      <div class="row text-center">
        <div class="columns small-12 medium-12 desktop-12">
          <router-link class="fullWidth" to="/partnereink" exact>Partnereink </router-link>
        </div>
      </div>
      <div class="row text-center">
        <div class="columns small-12 medium-12 desktop-12">
          <a class="facebook" href="http://hu-hu.facebook.com/pages/OK-Zenekar/267446909949427" target="_blank" title="okzenekar">kövess minket Facebookon</a> <span>/</span>
          <a class="youtube" href="http://www.youtube.com/user/OkzenekarDuo" target="_blank" title="okzenekar">Youtube csatornánk</a> <span>/</span>
          <a class="email" href="mailto:okzenekar@gmail.com" title="okzenekar@gmail.com">okzenekar@gmail.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'page-footer'
}
</script>

<style lang="scss">
@import '../components/scss/_variables';
footer{
  display: block;
  padding: 20px;
  border: 1px solid black;
  margin: 20px 0.9375rem;
  background: #fff;
  span{
    display: none;
  }
  a{
    line-height: 25px;
    display: block;
    text-align: left;
  }
  @media #{$tablet} {
    a, span{
      display: inline;
    }
  }
}
</style>
