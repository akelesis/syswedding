<script setup lang="ts">
const props = defineProps(['label', 'handler'])
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
.confirm-button {
    background-color: #D8C6FF;
    color: #FFF;
    height: 40px;
    width: 55%;
    border: none;
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
}

.confirm-button:hover {
    background-color: #ba9aff;
}

</style>

<template>
  <button class="confirm-button" @click.native="props.handler">{{props.label}}</button>
</template>
