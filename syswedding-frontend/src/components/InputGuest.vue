<script lang="ts">
export default {
  emits: ['saveGuest', 'update:modelValue'],
  props: {
    type: {
      type: String,
      required: true,
      default: 'text'
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
  <div class="input-guest">
    <input
      :value="modelValue"
      :type="type"
      required
      :placeholder="placeholder"
      @input="updateValue"
    />
    <button @click="$emit('saveGuest')">Salvar</button>
  </div>
</template>
<style lang="scss" scoped>
.input-guest {
  display: flex;
  gap: 18px;
  align-items: center;
  border: 2px solid #d8c6ff;
  border-radius: 10px;
  padding: 10px;

  input {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    margin: 10px 0;
    width: 70%;
  }
  ::placeholder {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    color: #d0d0d0;
  }
  input:focus {
    border-bottom: 1px solid #d8c6ff;
    outline: none;
    transition: 0.2s;
  }

  button {
    height: 20px;
    width: 20%;

    background-color: #fff;
    color: #d8c6ff;
    font-family: 'Roboto Condensed', sans-serif;
    border: none;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
    font-size: 12px;
  }
}
</style>