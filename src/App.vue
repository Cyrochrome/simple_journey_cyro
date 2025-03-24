<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, defineAsyncComponent } from 'vue'

// Get current route
const route = useRoute()

// Compute the layout dynamically
const layoutComponent = computed(() => {
  const layoutName = route.meta.layout || 'DefaultLayout'
  return defineAsyncComponent(() => import(`@/components/layouts/${layoutName}.vue`))
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
