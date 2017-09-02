<template>
  <form ref="base" class="contact-form">
    <div class="row">
      <div class="columns small-12 medium-12 desktop-12">
        <h2 v-if="title">Kapcsolat</h2>
        <p class="desc">
          Ajánlatkéréshez, és egyéb kérdésekhez kérjük töltsd ki a formot, vagy írj a <a href="mailto:okzenekar@gmail.com">okzenekar@gmail.com</a> címre.
        </p>
      </div>
    </div>
    <div class="flash" v-if="flash">Üzeneted elküldtük.</div>
    <div class="error" v-if="error">{{errorMsg}}</div>
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
        captchaId: null,
        errorMsg: '',
        model: {
          name: '',
          email: '',
          subject: '',
          message: '',
          captcha: '',
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
            console.log('success:', url);
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
        axios.post('https://floating-oasis-22438.herokuapp.com/mail', Object.assign(this.model, {
          captcha: window.grecaptcha.getResponse(this.captchaId)
        }))
        .then(response => {
          console.log('response', response);
          this.flashMsg();
          this.formReset(true);
        })
        .catch(error => {
          console.log('error', error);
          console.log(error.response);

          this.errorMsg = error.response.data;
          this.error = true;
          this.formReset();
        });
      },
      flashMsg () {
        window.scrollTo(0, (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0) + this.$refs.base.getBoundingClientRect().top);

        this.flash = true;
        setTimeout(() => {
          this.flash = false;
        },5000);
      },
      formReset (full) {
        //reset the form
        if (full) {
          Object.assign(this.model, {
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        }
        Object.assign(this.model, {
          captcha: '',
        })
        window.grecaptcha.reset()
      }
    },
    mounted () {
      window.asd = this.flashMsg;
      this.loadCaptcha('https://www.google.com/recaptcha/api.js?hl=hu&render=explicit').
        then(() => {
          this.captchaId = window.grecaptcha.render(this.$refs.captcha, {
            'sitekey' : '6LcIPyAUAAAAADiZaDMzPww9aNfDdRJPsyBqXpUb'
          })
        });
    }
  }
</script>
<style lang="scss">
  @import './scss/_variables';
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
        border: 1px solid $blue;
      }
    }
    textarea{
      min-height: 200px;
    }
    button{
      background: $blue;
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
