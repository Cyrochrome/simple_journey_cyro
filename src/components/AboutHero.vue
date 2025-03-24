<template>
  <section class="relative w-full h-screen flex overflow-hidden">
    <img
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      :src="imgUrl"
    />
  </section>
</template>

<script setup lang="ts">
const imgUrl =
  'https://static.wixstatic.com/media/c837a6_6482a7a208a540d78e3cc6c24cba0123~mv2.jpg/v1/fill/w_1501,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_6482a7a208a540d78e3cc6c24cba0123~mv2.jpg'
</script>

<style scoped>
.bg-black\/70 {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  padding: 2rem;
}

h1 {
  font-size: 4vw;
}

p {
  font-size: 1.5vw;
}

@media (max-width: 768px) {
  .bg-black\/70 {
    width: 100%;
    height: auto;
    bottom: 0;
    top: auto;
    padding: 2rem;
  }

  h1 {
    font-size: 7vw;
  }

  p {
    font-size: 3vw;
  }
}
</style>
