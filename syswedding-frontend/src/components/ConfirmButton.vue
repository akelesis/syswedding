<script setup lang="ts">
const props = defineProps(['label', 'handler'])
</script>

<template>
  <button class="confirm-button" @click.native="props.handler">{{ props.label }}</button>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
.confirm-button {
  background-color: #d8c6ff;
  color: #fff;
  height: 40px;
  width: 55%;
  border: none;
  margin-top: 30px;
  font-size: 20px;
  border-radius: 2px;
  font-family: 'Roboto Condensed', sans-serif;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
}

.confirm-button:hover {
  background-color: #ba9aff;
}
</style>
