<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import Underline from '@/components/Underline.vue'
import axios from 'axios'
import { baseUrl } from '@/global'
import type { GuestProps } from '../models/GuestProps.model'
import type { InviteProps } from '../models/InviteProps.model'

export default {
  data() {
    return {
      guest: {} as GuestProps,
      confirmedGuests: [] as InviteProps[]
    }
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/')
    },
    getGuest() {
      const guestToken = localStorage.getItem('guestToken')

      axios
        .get(`${baseUrl}/guest/${this.$route.query.id}`, {
          headers: {
            Authorization: `Bearer ${guestToken}`
          }
        })
        .then((res) => {
          this.guest = res.data
          this.guest.invites.forEach((element) => {
            this.confirmedGuests.push(element)
          })
        })
    },
    scanInvite(guestId: string) {
      this.$router.push('/scan-guest?id=' + guestId)
    },
    giftList() {
      alert('Em breve!')
    },
    editInvite() {
      this.$router.push('/confirm-attendance?id=' + this.guest.id)
    }
  },
  mounted() {
    this.getGuest()
  },
  components: {
    ConfirmButton,
    LayoutComponent,
    Underline
  }
}
</script>

<template>
  <div class="guests-area">
    <layout-component :name="guest.name">
      <div>
        <h3>Convidados confirmados</h3>
        <Underline width="200px" />
      </div>
      <div class="guests-container">
        <div v-for="guest in confirmedGuests" class="confirm-guest">
          <span>{{ guest.invite_name }}</span>
          <font-awesome-icon :icon="['fas', 'qrcode']" @click="scanInvite(guest.id)" />
        </div>
      </div>
      <p><b>Presente: </b>Não existe presente definido</p>
      <div class="guests-options">
        <div>
          <button @click="giftList"><font-awesome-icon :icon="['fas', 'gift']" /></button>
          <span>Lista de presentes</span>
        </div>
        <div>
          <button @click="editInvite">
            <font-awesome-icon :icon="['fas', 'pen-to-square']" />
          </button>
          <span>Editar convites</span>
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

.guests-area {
  h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color: #949494;
    font-size: 20px;
    margin-top: 30px;
  }

  .guests-container {
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 50%;
    margin-top: 14px;

    .confirm-guest {
      display: flex;
      gap: 18px;
      justify-content: space-between;
      align-items: center;
      color: #989898;
      font-size: 21px;

      span {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 10px;
      }
    }
  }

  b {
    font-weight: 600;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 10px;
    color: #989898;
    margin-top: 70px;
  }

  .guests-options {
    display: flex;
    align-items: center;
    gap: 45px;

    margin-top: 28px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        background: #ffffff;
        border: 2px solid #d8c6ff;
        width: 40px;
        height: 40px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #d8c6ff;
        font-size: 20px;
        font-weight: bold;
      }

      span {
        font-family: 'Cormorant Garamond', serif;
        font-size: 10px;
        color: #949494;
        margin-top: 5px;
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
