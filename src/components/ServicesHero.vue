<template>
  <section class="relative w-full h-screen flex overflow-hidden">
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      :src="videoUrl"
    ></video>
  </section>
</template>

<script setup lang="ts">
const videoUrl =
  'https://video.wixstatic.com/video/11062b_e6232f830c204d1198b2d55d529b0f19/1080p/mp4/file.mp4'
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
