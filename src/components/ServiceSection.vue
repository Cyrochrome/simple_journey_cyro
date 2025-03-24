<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

const services = [
  {
    title: 'Infrastructure Solution',
    description:
      'Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs.',
    imageSrc: 'https://static.wixstatic.com/media/c837a6_c4594337037c4fc7b7d9e0f7c9387179~mv2.jpg',
    color: '#ffffff',
  },
  {
    title: 'Digital Solution',
    description:
      'Drive innovation and efficiency with our digital transformation services. We provide custom software development, enterprise applications, automation, and AI-driven solutions to enhance productivity and customer experience in the digital era.',
    imageSrc: 'https://static.wixstatic.com/media/c837a6_fcee9c7c5d3d4521a0764f5c19b4bfe7~mv2.png',
    color: '#5cffff',
  },
  {
    title: 'Cross Industry Solution',
    description:
      'We deliver tailored technology solutions across industries, including finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready digital ecosystems that drive business growth.',
    imageSrc: 'https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png',
    color: '#E5E5E5',
  },
  {
    title: 'IT Operation Services',
    description:
      'We deliver tailored technology solutions across industries, including finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready digital ecosystems that drive business growth.',
    imageSrc: 'https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png',
    color: '#FFE9DF',
  },
]
</script>

<template>
  <section class="py-20 bg-gradient-to-r from-zinc-700 to-black">
    <div class="container mx-auto px-6 md:px-12 text-center">
      <h2 class="text-5xl font-[Fahkwang] text-white mb-6">Explore Our Services</h2>
      <p class="max-w-2xl mx-auto mb-12 text-white">
        Describe the service and how customers or clients can benefit from it. This is the place to
        add a short description with relevant details.
      </p>
      <div class="grid">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :imageSrc="service.imageSrc"
          :color="service.color"
        />
      </div>
    </div>
  </section>
</template>
