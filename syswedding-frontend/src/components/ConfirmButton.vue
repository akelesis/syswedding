<script lang="ts">
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: '55%'
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'confirm'
    }
  }
}
</script>

<template>
  <button
    :class="type == 'confirm' ? 'confirm-button' : 'decline-button'"
    :style="`width:${width}`"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
.confirm-button,
.decline-button {
  height: 40px;
  border: none;
  margin-top: 30px;
  font-size: 20px;
  border-radius: 2px;
  font-family: 'Roboto Condensed', sans-serif;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
}

.confirm-button {
  background-color: #d8c6ff;
  color: #fff;
}

.decline-button {
  background-color: #fff;
  color: #d8c6ff;
}

.confirm-button:hover {
  background-color: #ba9aff;
}
</style>
