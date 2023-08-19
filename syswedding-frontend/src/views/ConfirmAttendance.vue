<script lang="ts">
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import InputGuest from '@/components/InputGuest.vue'
import ConfirmGuest from '@/components/ConfirmGuest.vue'
import axios from 'axios'
import { baseUrl } from '@/global'
import type { GuestProps } from '../models/GuestProps.model'
import type { InviteProps } from "../models/InviteProps.model"

export default {
  data() {
    return {
      confirmedGuests: [] as string[],
      guestsInput: [] as string[],
      guest: {} as GuestProps,
      total_invites: 0,
      invites: [] as Array<InviteProps>,
      usedInvites: 0
    }
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/guests?id=' + this.guest.id)
    },
    addGuest() {
      this.guestsInput.push('')
      this.total_invites--
    },
    removeGuest() {
      if (this.total_invites < this.guest.total_invites - this.usedInvites) {
        this.guestsInput.pop()
        this.total_invites++
      }
    },
    saveInvite(index: number) {
      axios
        .post(
          `${baseUrl}/invite`,
          {
            invite_name: this.guestsInput[index],
            guest_id: this.guest.id
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('guestToken')}`
            }
          }
        )
        .then(() => {
          this.usedInvites++
        })
      this.confirmedGuests.push(this.guestsInput[index])
      this.guestsInput.pop()
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
          this.invites = this.guest.invites
          this.total_invites = this.guest.total_invites - this.invites.length
          this.usedInvites = this.invites.length

          this.invites.forEach((element) => {
            this.confirmedGuests.push(element.invite_name)
          })
        })
    }
  },
  mounted() {
    this.getGuest()
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
    <layout-component :name="guest.name">
      <div class="confirm-subtitle">
        Que legal, confirma então as informações de quem vai estar lá (incluindo você, é claro)
      </div>
      <div class="guests-container">
        <confirm-guest v-for="guest in confirmedGuests" :label="guest" :key="guest" />
        <input-guest
          v-for="(guest, index) in guestsInput"
          type="text"
          placeholder="Nome completo"
          v-model="guestsInput[index]"
          @save-guest="saveInvite(index)"
          :key="index"
        />
      </div>
      <div class="guests-control">
        <button @click="removeGuest"><font-awesome-icon :icon="['fas', 'minus']" /></button>
        <span>{{ total_invites }}</span>
        <button :disabled="total_invites === 0 ? true : false" @click="addGuest">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
      <div class="button-container">
        <confirm-button label="Finalizar" @click="confirmationButtonHandler"></confirm-button>
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
    font-size: 18px;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    margin-top: 20px;
    color: #949494;
    padding: 30px 0 35px 0;
    @media(min-width: 500px) {
      font-size: 22px;
    }
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
