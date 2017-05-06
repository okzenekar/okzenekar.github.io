<template>
  <div class="inner contact">
    <contact-form :title="false"></contact-form>
  </div>
</template>

<script>
import contactForm from 'root/components/contact-form.vue';
export default {
  name: 'contact',
  components: {
    contactForm
  }
}
</script>

<style lang="scss">
@import '~root/components/scss/_variables';
.inner.contact{

}
</style>
