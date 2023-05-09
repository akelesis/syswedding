<script lang="ts">
import Underline from '@/components/Underline.vue'
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import InputComponent from '@/components/InputComponent.vue'
export default {
  data() {
    return {
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
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
  <div class="sign-up-error">
    <div>
      <h3>Desculpe, não estavamos te esperando!</h3>
      <underline width="270px" />
    </div>
    <img src="../assets/images/uncheck.svg" alt="" />
    <confirm-button
      label="Voltar"
      width="65%"
      @click="confirmationButtonHandler"
    ></confirm-button>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.sign-up-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 36px;

  div {
    margin-bottom: 15px;
  }

  h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color: #949494;
    font-size: 20px;
  }
}
</style>
