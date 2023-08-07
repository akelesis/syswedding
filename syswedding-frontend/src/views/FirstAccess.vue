<script lang="ts">
import Underline from '@/components/Underline.vue'
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import InputComponent from '@/components/InputComponent.vue'
import axios from 'axios'
import { baseUrl } from '../global'
import GiftsList from './GiftsList.vue'

export default {
  data() {
    return {
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      giftItem: '',
      guestId: '',
    }
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/')
    },
    activateGuest() {
      if (this.password === this.confirmPassword) {
        axios
          .patch(`${baseUrl}/guest/${this.phone}`, {
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword,
            gift_item_id: this.giftItem
          })
          .then((res) => {
            if (res.data.status != 404) {
              this.guestId = res.data.id

              axios
                .post(`${baseUrl}/login`, { email: this.email, password: this.password })
                .then((res) => {
                  localStorage.setItem('guestToken', res.data.token)
                  this.$router.push('/sign-up-confirm?id=' + this.guestId)
                })
            } else {
              this.$router.push('/sign-up-error')
            }
          })
          .catch((err) => {
            this.$router.push('/sign-up-error')
          })
      } else {
        alert('Confirmação de senha não confere!')
      }
    }
  },
  // computed: {
  //   ...mapState(useStore, ['guestToken'])
  // },
  components: {
    ConfirmButton,
    Underline,
    InputComponent
  }
}
</script>

<template>
  <div class="first-access">
    <div>
      <h3>Olá, estavamos te esperando!</h3>
      <underline width="270px" />
    </div>
    <div class="register-subtitle">
      Confirme seu telefone e crie uma senha para que você possa acessar a área dos convidados!
    </div>
    <div class="register-form">
      <input-component type="text" v-model="phone" placeholder="Telefone" />
      <input-component type="email" v-model="email" placeholder="E-mail" />
      <input-component type="password" v-model="password" placeholder="Senha" />
      <input-component
        type="password"
        v-model="confirmPassword"
        placeholder="Confirmação de senha"
      />
    </div>
    <confirm-button label="Entrar" @click="activateGuest"></confirm-button>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.first-access {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 36px;

  h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color: #949494;
    font-size: 20px;
  }

  .register-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 60%;
  }
}
</style>
