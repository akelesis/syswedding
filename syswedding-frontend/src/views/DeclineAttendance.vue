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
  <div class="decline-area">
    <layout-component>
      <div class="decline-subtitle">
        Ah, que pena! Sentiremos sua falta :’(
      </div>
      <div class="button-container">
        <confirm-button label="Sair" @click="confirmationButtonHandler"></confirm-button>
      </div>
    </layout-component>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.decline-area {
  .decline-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
    padding: 75px 0;
  }

  .button-container {
    width: 80%;
    display: flex;
    justify-content: center;
  }
}
</style>
