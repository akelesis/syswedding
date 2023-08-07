<script lang="ts">
import router from '@/router'
import ConfirmButton from '../components/ConfirmButton.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import Underline from '@/components/Underline.vue'
import QrcodeVue from 'qrcode.vue'

export default {
  data() {
    return {}
  },
  methods: {
    confirmationButtonHandler() {
      this.$router.push('/guests?id=' + localStorage.getItem('guestId'))
    },
  },
  computed: {
    qrCode() {
      return `https://invitez.com.br?invite=${this.$route.query.id}`
    }
  },
  components: {
    ConfirmButton,
    LayoutComponent,
    Underline,
    QrcodeVue
  }
}
</script>

<template>
  <div class="gifts-area">
    <layout-component name="Marquinho">
      <div class="title">Apresente esta tela na entrada do casamento</div>

      <div class="qrcode-container">
        <QrcodeVue :size="200" :value="qrCode" />
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
    width: 85%;
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    color: #949494;
    padding: 13px 0 31px 0;
    font-size: 20px;
  }

  .qrcode-container {
    border: 2px solid #d8c6ff;
    padding: 5px 10px;
  }
  .button-container {
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }
}
</style>
