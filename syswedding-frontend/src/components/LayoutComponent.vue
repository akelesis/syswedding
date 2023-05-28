<script lang="ts">
import router from '@/router'
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent
  }
}
</script>

<template>
  <div class="layout-component">
    <header-component />
    <div class="layout-title">
      <h3>Olá Valber!</h3>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.layout-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  .layout-title {
    margin-top: 13px;
    width: 100%;

    h3 {
      text-align: start;
      font-family: 'Cormorant Garamond', serif;
      color: #949494;
      font-size: 20px;
      margin-left: 15px;
    }
  }
}
</style>
