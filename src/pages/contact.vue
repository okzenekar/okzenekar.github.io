<template>
  <div class="inner contact">
    <div class="row">
      <div class="columns small-12 medium-12 desktop-12">
        <h1>Kapcsolat</h1>
        <p class="desc">
          Ajánlatkéréshez, és egyéb kérdésekhez kérjük töltsd ki a formot, vagy írj a <a href="mailto:okzenekar@gmail.com">okzenekar@gmail.com</a> címre.
        </p>
      </div>
    </div>
    <contact-form></contact-form>
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
  p.desc{
    margin-bottom: 20px;
  }
}
</style>
