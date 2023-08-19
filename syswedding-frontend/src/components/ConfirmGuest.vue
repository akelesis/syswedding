<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="confirm-guest">
    <span>{{ label }}</span>
    <font-awesome-icon :icon="['fas', 'qrcode']" />
  </div>
</template>
<style lang="scss" scoped>
.confirm-guest {
  display: flex;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #d8c6ff;
  border-radius: 10px;
  padding: 18px 22px 18px 10px;
  color: #989898;
  font-size: 21px;

  span {
    font-size: 16px;
  }
}
</style>