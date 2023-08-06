<script lang="ts">
import Underline from '@/components/Underline.vue'
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import InputComponent from '@/components/InputComponent.vue'
import axios from 'axios'
import { baseUrl } from '../global'

export default {
  data() {
    return {
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      guestName: '',
      guestStatus: '',
      guestId: ''
    }
  },
  components: {
    ConfirmButton,
    Underline,
    InputComponent
  },
  methods: {
    confirmationButtonHandler() {
      if (this.guestStatus === 'inactive') {
        this.$router.push('/guest-confirm?id=' + this.guestId)
      } else {
        this.$router.push('/confirm-attendance')
      }
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
          this.guestName = res.data.name
          this.guestStatus = res.data.status
          this.guestId = res.data.id
          console.log(res.data)
          console.log(this.guestStatus)
        })
    }
  },
  mounted() {
    this.getGuest()
  }
}
</script>

<template>
  <div class="sign-up-confirm">
    <div>
      <h3>Olá {{ guestName }}, estavamos te esperando!</h3>
      <underline width="270px" />
    </div>
    <img src="../assets/images/check.svg" alt="" />
    <confirm-button
      label="Ir para a área de convidados"
      width="65%"
      @click="confirmationButtonHandler"
    ></confirm-button>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

.sign-up-confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 36px;

  div {
    margin-bottom: 15px;
  }

  h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color: #949494;
    font-size: 20px;
  }
}
</style>
