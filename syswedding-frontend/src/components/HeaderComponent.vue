<script setup lang="ts"></script>

<template>
  <section class="homepage-cover">
    <div>
      <h1>Marcus e Carina</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');

.homepage-cover {
  background-image: url('../assets/images/cover.png');
  background-size: cover;
  background-position: bottom;
  width: 100vw;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      text-align: center;
      font-family: 'Tangerine', cursive;
      font-size: 25px;
      line-height: 85%;
      color: #bb6503;
    }
  }
}
</style>
