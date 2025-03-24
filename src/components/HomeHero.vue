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
    <div
      class="relative z-10 bg-black/70 text-white p-8 w-full lg:w-2/5 flex flex-col justify-center h-full"
    >
      <div class="max-w-2xl">
        <h1 class="font-semibold leading-tight">Your IT Transformation Partner</h1>
        <p class="mt-4">Empowering Businesses with Smart IT Solutions for a Digital Future</p>
        <a
          :href="solutionsUrl"
          class="rounded-full mt-6 inline-block px-6 py-3 font-semibold transition bg-[#5CFFFF] text-black hover:bg-white"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoUrl =
  'https://video.wixstatic.com/video/11062b_3de8fc4100e6414ab42592cd0d6fe4cb/1080p/mp4/file.mp4'
const solutionsUrl = '/services'
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
