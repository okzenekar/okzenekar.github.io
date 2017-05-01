<template>
  <div id="content">
    <div class="inner" v-show="articleCheck">
      <h2>{{subTitle}}</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'page-content',
    props: ['subTitle'],
    data () {
      return {
        message: 'Welcome to Your Vue.js App',
        articleCheck: false,
      }
    },
    methods: {
      checkRoute (x) {
        this.articleCheck = x.data.category ? false : true;
      }
    },
    created () {
      this.eb.$on('route-change', this.checkRoute);
    },
    destroyed () {
      this.eb.$off('route-change', this.checkRoute);
    }
  }
</script>

<style lang="scss">
  #content {
    margin-bottom: 15px;
  }
</style>
