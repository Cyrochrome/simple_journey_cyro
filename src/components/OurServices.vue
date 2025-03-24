<script setup lang="ts">
const services = [
  {
    serviceName: 'Infrastructure Solution',
    imageSrc:
      'https://static.wixstatic.com/media/11062b_00dfbdf43bf443eaae6e0156ee6caae8~mv2.jpg/v1/fill/w_310,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Server.jpg',
  },
  {
    serviceName: 'Digital Solution',
    imageSrc:
      'https://static.wixstatic.com/media/11062b_f6efc53ab8464a6691e4dd67114c117d~mv2.jpg/v1/fill/w_310,h_322,fp_0.54_0.66,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Music%20Apps.jpg',
  },
  {
    serviceName: 'Cross Industry Solution',
    imageSrc:
      'https://static.wixstatic.com/media/7dc84b77162ccfe71a7c62d062d405e6.jpg/v1/fill/w_310,h_322,fp_0.35_0.48,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Industrial%20Worker.jpg',
  },
  {
    serviceName: 'IT Operation Service',
    imageSrc:
      'https://static.wixstatic.com/media/11062b_7d8bcf52c72e489784a9ba08fa2ccbb0~mv2.jpg/v1/fill/w_310,h_322,fp_0.52_0.28,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shared%20Office.jpg',
  },
]
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6 md:px-12 text-center">
      <h2 class="text-5xl font-[Fahkwang] font-bold mb-6">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div
          class="flex flex-col items-center text-center"
          v-for="(service, index) in services"
          :key="index"
        >
          <img :src="service.imageSrc" class="w-full" />
          <h5 class="mt-10 text-lg font-medium font-[Fahkwang]">{{ service.serviceName }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>
