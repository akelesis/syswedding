<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import Underline from '@/components/Underline.vue'

export default {
  data() {
    return {
      gifts: [
        'Kit de cama casal',
        'Kit de sobremesa',
        'Lorem ipsum',
        'Sit amet dolor',
        'Kit de talheres'
      ],
      chosenGift: ''
    }
  },
  methods: {
    confirmationButtonHandler() {
      console.log(this.chosenGift)
      this.$router.push('/guests')
    }
  },
  components: {
    ConfirmButton,
    LayoutComponent,
    Underline
  }
}
</script>

<template>
  <div class="gifts-area">
    <layout-component name="Marquito">
      <div class="title">
        <h3>Lista de presentes:</h3>
        <Underline width="145px" />
      </div>
      <div class="gifts-container">
        <div v-for="(gift, index) in gifts" :key="index">
          <label :for="gift">{{ gift }}</label>
          <input type="radio" :id="gift" v-model="chosenGift" name="gift" :value="gift" />
        </div>
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

.gifts-area {
  .title {
    width: 100%;
    padding-left: 15px;

    h3 {
      text-align: start;
      font-family: 'Cormorant Garamond', serif;
      color: #949494;
      font-size: 20px;
      margin-top: 30px;
    }
  }

  .gifts-container {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 15%;

    width: 100%;
    padding: 22px 40px 0 40px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 18px;

      input[type='radio'] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid #ccc;
        outline: none;
        cursor: pointer;
        position: relative;
      }

      input[type='radio']::before {
        content: '';
        width: 6px;
        height: 6px;
        background-color: #d8c6ff;
        border-radius: 50%;
        display: none;
      }

      input[type='radio']:checked::before {
        display: block;
      }

      label {
        font-size: 10px;
        color: #949494;
        font-family: 'Roboto Condensed', sans-serif;
      }
    }
  }
  .button-container {
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }
}
</style>
