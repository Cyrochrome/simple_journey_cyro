<script setup lang="ts">
defineProps<{
  title: string
  description: string
  imageSrc: string
  color: string
}>()
</script>

<template>
  <div
    class="relative flex flex-col md:flex-row items-end gap-6 p-6 md:p-8 max-h-[595px]"
    :style="{ backgroundColor: color }"
  >
    <div class="w-full md:w-1/2">
      <h3 class="text-3xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>

    <div class="w-full md:w-1/2 flex justify-end">
      <img
        :src="imageSrc"
        :alt="title"
        class="w-full max-w-[300px] h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</template>

<style scoped></style>
