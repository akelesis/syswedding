<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
export default {
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/')
    }
  },
  components: {
    ConfirmButton,
    LayoutComponent
  }
}
</script>

<template>
  <div class="guest-area">
    <layout-component>
      <div class="guest-subtitle">
        Agora vamos para o que interessa! Podemos confirmar a sua presença e da sua familia?
      </div>
      <div class="button-container">
        <confirm-button label="Sim" @click="confirmationButtonHandler"></confirm-button>
        <confirm-button
          label="Não"
          type="decline"
          @click="confirmationButtonHandler"
        ></confirm-button>
      </div>
    </layout-component>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.guest-area {
  .guest-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
  }

  .button-container {
    width: 70%;
    display: flex;
    gap: 20px;
  }
}
</style>
