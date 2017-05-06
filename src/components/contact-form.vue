<template>
  <form class="contact-form">
    <div class="row">
      <div class="columns small-12 medium-12 desktop-12">
        <h2 v-if="title">Kapcsolat</h2>
        <p class="desc">
          Ajánlatkéréshez, és egyéb kérdésekhez kérjük töltsd ki a formot, vagy írj a <a href="mailto:okzenekar@gmail.com">okzenekar@gmail.com</a> címre.
        </p>
      </div>
    </div>
    <div class="flash" v-if="flash">Üzeneted elküldtük.</div>
    <div class="error" v-if="error">A mezők kiteöltése kötelező.</div>
    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">
        <label for="name">Név</label>
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <input type="text" name="name" id="name" v-model="model.name" />
      </div>
    </div>
    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">
        <label for="email">Email</label>
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <input type="text" name="email" id="email" v-model="model.email" />
      </div>
    </div>
    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">
        <label for="subject">tárgy</label>
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <input type="text" name="subject" id="subject" v-model="model.subject" />
      </div>
    </div>
    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">
        <label for="message">Üzenet</label>
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <textarea v-model="model.message" name="message" id="message"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">
        &nbsp;
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <div ref="captcha"></div>
      </div>
    </div>

    <div class="row">
      <div class="columns small-12 medium-2 desktop-2">&nbsp;
      </div>
      <div class="columns small-12 medium-10 desktop-10">
        <button @click.prevent="handleSubmit" type="submit" name="submitButton">Küldés</button>
      </div>
    </div>
  </form>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'contact-form',
    props: {
      title: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        flash: false,
        error: false,
        model: {
          name: '',
          email: '',
          subject: '',
          message: '',
          grecaptcha: '',
        }
      }
    },
    methods: {
      loadCaptcha (url) {
        return new Promise((resolve, reject) => {
          if (window.grecaptcha && window.grecaptcha.reset){
            resolve()
            return;
          }
          var script = document.createElement('script');

          script.src = url;

          script.addEventListener('load', function() {
            console.log('error:', url, 'load failed');
          }, false);

          script.addEventListener('error', function() {
            reject();
            console.log('error:', url, 'load failed');
          }, false);

          document.body.appendChild(script);

          var loop = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.reset){
              resolve();
              clearInterval(loop);
            }
          },100);
        })
      },
      handleSubmit () {
        console.log('submit');
        this.error = false;
        axios.post('http://vbox:4000/mail', Object.assign(this.model, {
          grecaptcha: window.grecaptcha.getResponse()
        }))
        .then(response => {
          console.log('response', response);
          window.scrollTo(0, 0);
          this.flash = true;
          setTimeout(() => {
            this.flash = false;
          },5000);
        })
        .catch(error => {
          this.error = true;
          console.log('error', error);
        });
      }
    },
    mounted () {
      this.loadCaptcha('https://www.google.com/recaptcha/api.js?hl=hu&render=explicit').
        then(() => window.grecaptcha.render(this.$refs.captcha, {
          'sitekey' : '6LcIPyAUAAAAADiZaDMzPww9aNfDdRJPsyBqXpUb'
        }));
    }
  }
</script>
<style lang="scss">
  .contact-form{
    .row{
      [class*=column]{
        &:first-child{
          min-width: 100px;
        }
        &:last-child{
          float: left;
          margin-bottom: 20px;
        }
      }
    }
    label{
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }
    input, textarea {
      border: 1px solid #000;
      width: 100%;
      font-size: 16px;
      line-height: 20px;
      padding: 5px 10px;
      &:focus{
        border: 1px solid #00A0B0;
      }
    }
    textarea{
      min-height: 200px;
    }
    button{
      background: #00A0B0;
      color: #fff;
      font-size: 16px;
      line-height: 20px;
      padding: 10px 20px;
      text-transform: uppercase;
    }

    p{
      margin-bottom: 0;
    }

    .error,
    .flash{
      background: rgba(255, 0, 0, 0.70);
      color: white;
      padding: 20px;
      margin: 0 0.9375rem 20px;
      font-size: 16px;
      line-height: 20px;
      &.flash{
        background: rgba(0, 128, 0, 0.7);;
      }
    }
  }
</style>
