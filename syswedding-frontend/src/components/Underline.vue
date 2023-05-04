<script lang="ts">
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: '100%'
    }
  }
}
</script>

<template>
  <div class="underline" :style="`width:${width}`"></div>
</template>

<style lang="scss" scoped>
.underline {
  height: 3px;
  background-color: #d8c6ff;
}
</style>
