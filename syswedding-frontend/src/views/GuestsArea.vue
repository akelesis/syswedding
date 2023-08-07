<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import { baseUrl } from '@/global'
import axios from 'axios'
import type { GuestProps } from '../models/GuestProps.model'

export default {
  data() {
    return {
      guest: {} as GuestProps
    }
  },
  methods: {
    confirmationButtonHandler() {
      axios
        .patch(`${baseUrl}/guest/${this.guest.phone}`, {
          status: 'active',
          email: this.guest.email,
          password: this.guest.password,
          confirm_password: this.guest.password,
          gift_item_id: ''
        })
        .then(() => {
          this.$router.push('/confirm-attendance?id=' + this.guest.id)
        })
    },
    declineButtonHandler() {
      axios
        .patch(`${baseUrl}/guest/${this.guest.phone}`, {
          status: 'cancelled',
          email: this.guest.email,
          password: this.guest.password,
          confirm_password: this.guest.password,
          gift_item_id: ''
        })
        .then(() => {
          this.$router.push('/decline')
        })
    },
    getGuest() {
      axios
        .get(`${baseUrl}/guest/${this.$route.query.id}`, {
          headers: {
            Authorization: `Bearer ${this.guestToken}`
          }
        })
        .then((res) => {
          this.guest = res.data
        })
    }
  },
  mounted() {
    this.getGuest()
  },
  components: {
    ConfirmButton,
    LayoutComponent
  },
  computed: {
    guestToken() {
      return localStorage.getItem('guestToken')
    }
  }
}
</script>

<template>
  <div class="guest-area">
    <layout-component :name="guest.name">
      <div class="guest-subtitle">
        Agora vamos para o que interessa! Podemos confirmar a sua presença e da sua familia?
      </div>
      <div class="button-container">
        <confirm-button label="Sim" @click="confirmationButtonHandler"></confirm-button>
        <confirm-button label="Não" type="decline" @click="declineButtonHandler"></confirm-button>
      </div>
    </layout-component>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.guest-area {
  .guest-subtitle {
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
  }

  .button-container {
    width: 70%;
    display: flex;
    gap: 20px;
  }
}
</style>
