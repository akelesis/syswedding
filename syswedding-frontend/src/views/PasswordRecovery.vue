<script lang="ts">
import Underline from '@/components/Underline.vue'
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import InputComponent from '@/components/InputComponent.vue'
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/')
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
  <div class="password-recovery">
    <div>
      <h3>Recuperação de senha</h3>
      <underline width="270px" />
    </div>
    <div class="password-recovery-subtitle">
      Insira o seu email abaixo e caso ele esteja cadastrado no nosso banco de dados enviaremos um
      link com as instruções para a recuperação da senha.
    </div>
    <div class="password-recovery-form">
      <input-component type="email" v-model="email" placeholder="E-mail" />
    </div>
    <confirm-button label="Enviar" @click="confirmationButtonHandler"></confirm-button>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.password-recovery {
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

  .password-recovery-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
  }

  .password-recovery-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 60%;
  }
}
</style>
