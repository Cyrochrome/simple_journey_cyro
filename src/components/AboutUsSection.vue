<script setup lang="ts">
import IconAsterisk from './icons/IconAsterisk.vue'
</script>

<template>
  <section
    id="about-us"
    class="relative flex md:flex-row flex-col items-center justify-end w-full h-[750px] bg-gray-100 bg-cover bg-center"
    style="
      background-image: url('https://static.wixstatic.com/media/11062b_148abf6124504b8cbe6fa264a5249028~mv2.jpg/v1/fill/w_1351,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Server%20Room.jpg');
    "
  >
    <div class="w-full bg-zinc-800 md:bg-transparent md:w-1/2 p-6 md:p-12 text-white">
      <div class="flex gap-2">
        <div id="about-us-title" class="md:hidden">
          <IconAsterisk />
        </div>
        <h2 class="text-5xl font-[Fahkwang] mb-4">About Us</h2>
      </div>
      <div class="flex gap-5">
        <div class="md:block hidden">
          <IconAsterisk />
        </div>
        <div>
          <p class="text-lg mb-4">
            PT Simple Journey Indonesia is an IT consulting company and a provider of Infrastructure
            Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.
          </p>
          <p class="text-lg">
            We deliver IT solutions to businesses on a global scale by providing IT experts with
            flexible arrangements to help our clients adapt to the digital world.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
