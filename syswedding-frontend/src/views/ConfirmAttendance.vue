<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import InputGuest from '@/components/InputGuest.vue'
import ConfirmGuest from '@/components/ConfirmGuest.vue'

export default {
  data() {
    return {
      confirmedGuests: ['Valber Francisco dos Santos'],
      guestsInput: [],
      guestsCount: 5,
      guest: ''
    }
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/')
    },
    addGuest() {
      this.guestsCount--
    },
    removeGuest() {
      this.guestsCount++
    }
  },
  components: {
    ConfirmButton,
    LayoutComponent,
    InputGuest,
    ConfirmGuest
  }
}
</script>

<template>
  <div class="confirm-area">
    <layout-component>
      <div class="confirm-subtitle">
        Que legal, confirma então as informações de quem vai estar lá (incluindo você, é claro)
      </div>
      <div class="guests-container">
        <confirm-guest v-for="guest in confirmedGuests" :label="guest" />
        <input-guest placeholder="Nome completo" v-model="guest" />
      </div>
      <div class="guests-control">
        <button @click="removeGuest"><font-awesome-icon :icon="['fas', 'minus']" /></button>
        <span>{{ guestsCount }}</span>
        <button :disabled="guestsCount === 0 ? true : false" @click="addGuest">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
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

.confirm-area {
  .confirm-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
    padding: 30px 0 35px 0;
  }

  .guests-container {
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 80%;
  }

  .guests-control {
    display: flex;
    align-items: center;
    gap: 25px;

    margin-top: 32px;

    button {
      background: #ffffff;
      border: 1px solid #d8c6ff;
      width: 20px;
      height: 20px;
      font-family: 'Roboto Condensed', sans-serif;
      color: #d8c6ff;
      font-size: 14px;
      font-weight: bold;
    }

    span {
      font-size: 14px;
      background: #f5f5f5;
      font-family: 'Roboto Condensed', sans-serif;
      color: #d8c6ff;
      border-radius: 10px;
      width: 27px;
      text-align: center;
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