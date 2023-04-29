<script lang="ts">
import router from '@/router';
import ConfirmButton from './ConfirmButton.vue';
export default {
  methods: {
    confirmationButtonHandler () {
      this.$router.push('/guest-confirm')
    }
  },
  components: {
    ConfirmButton
  }
}
</script>

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
      
      input {
        border: none;
        border-bottom: 1px solid #D9D9D9;
        margin: 10px 0;
        width: 100%;
      }
      ::placeholder {
        font-family: 'Cormorant Garamond', serif;
        font-size: 18px;
        color: #D0D0D0;
      }
      input:focus {
        border-bottom: 3px solid #D8C6FF;
        outline: none;
        transition: .2s;
      }
    }
  }
  .underline {
    width: 170px;
    height: 3px;
    background-color: #d8c6ff;
  }
  a {
    color: #CFBAFE;
    text-decoration: none;
    margin-top: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
  }
  .first-access-link {
    margin-top: 20px;
  }
}

</style>

<template>
  <section class="login-area">
    <div class="login-container">
      <div>
        <h3>Área do Convidado</h3>
        <div class="underline"></div>
      </div>
      <div class="login-subtitle">
        Olá, que bom te ver por aqui! Preparamos uma área especial pra você com muito carinho!
      </div>
      <div class="login-form">
        <input type="text" placeholder="Telefone">
        <input type="password" placeholder="Senha">
      </div>
      <div class="first-access-link">
        <router-link to='/firstaccess'>É o seu primeiro acesso? então clique aqui!</router-link>
      </div>
      <confirm-button label="Entrar" :handler="confirmationButtonHandler"></confirm-button>
    </div>
  </section>
</template>