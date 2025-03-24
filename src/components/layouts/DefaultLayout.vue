<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import DefaultFooter from './DefaultFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderNav />
    <main class="">
      <slot></slot>
    </main>
    <DefaultFooter />
  </div>
</template>
