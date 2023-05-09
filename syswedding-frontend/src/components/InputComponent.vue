<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    }
  }
}
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    required
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>
<style lang="scss" scoped>
input {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  margin: 10px 0;
  width: 100%;
}
::placeholder {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: #d0d0d0;
}
input:focus {
  border-bottom: 3px solid #d8c6ff;
  outline: none;
  transition: 0.2s;
}
</style>
