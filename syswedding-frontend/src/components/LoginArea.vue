<script lang="ts">
import router from '@/router'
import ConfirmButton from './ConfirmButton.vue'
import InputComponent from './InputComponent.vue'
import Underline from './Underline.vue'
import axios from 'axios'
import { baseUrl } from '@/global'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    guestLogin() {
      axios
        .post(`${baseUrl}/login`, { email: this.email, password: this.password })
        .then((res) => {
          localStorage.setItem('guestToken', res.data.token)
        })
        .then(() => {
          axios
            .get(`${baseUrl}/guest/find/${this.email}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('guestToken')}`
              }
            })
            .then((res) => {
              localStorage.setItem('guestId', res.data.id)

              if (res.data.status === 'inactive') {
                this.$router.push('/guest-confirm?id=' + res.data.id)
              } else if (res.data.status === 'cancelled') {
                alert('Usuário declinou o convite!')
                window.location.href = 'https://www.parperfeito.com.br'
              } else {
                this.$router.push('/confirm-attendance?id=' + res.data.id)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        })
    }
  },
  components: {
    ConfirmButton,
    Underline,
    InputComponent
  }
}
</script>

<template>
  <section class="login-area">
    <div class="login-container">
      <div>
        <h3>Área do Convidado</h3>
        <Underline width="170px" />
      </div>
      <div class="login-subtitle">
        Olá, que bom te ver por aqui! Preparamos uma área especial pra você com muito carinho!
      </div>
      <div class="login-form">
        <input-component type="text" v-model="email" placeholder="Email" />
        <input-component type="password" v-model="password" placeholder="Senha" />
      </div>
      <div class="first-access-link">
        <router-link to="/first-access">É o seu primeiro acesso? então clique aqui!</router-link>
      </div>
      <confirm-button label="Entrar" @click="guestLogin"></confirm-button>
      <div class="password-recovery">
        <router-link to="/password-recovery">Esqueceu a senha? Clique aqui!</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.login-area {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color: #949494;
    font-size: 20px;
  }
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-subtitle {
      width: 85%;
      font-family: 'Cormorant Garamond', serif;
      text-align: center;
      margin-top: 20px;
      color: #949494;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      width: 60%;
    }
  }
  a {
    color: #cfbafe;
    text-decoration: none;
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
  }

  .first-access-link,
  .password-recovery {
    margin-top: 20px;
  }
}
</style>
