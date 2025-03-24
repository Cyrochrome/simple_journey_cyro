<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import LogoTitle from './LogoTitle.vue'
import IconMenu from '../icons/IconMenu.vue'
import IconCloseMenu from '../icons/IconCloseMenu.vue'

const router = useRouter()
const route = useRoute()
const menuOpen = ref(false)
const isScrolled = ref(false)
const lastScrollY = ref(0)
const isHidden = ref(false)

const menuItems = computed(() => {
  return router
    .getRoutes()
    .filter((route) => route.meta?.showInNav !== false)
    .map((route) => ({
      text: route.name || route.path,
      link: route.path,
    }))
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isHidden.value = currentScrollY > lastScrollY.value && currentScrollY > 50
  lastScrollY.value = currentScrollY
  isScrolled.value = currentScrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed w-full top-0 left-0 z-50 transition-transform duration-300',
      isScrolled ? 'bg-black/70 backdrop-blur-md shadow-lg' : 'bg-transparent',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <div class="header-title flex-shrink-0"><LogoTitle class="text-white" /></div>
      <nav class="nav-menu hidden md:flex items-center rounded-full shadow-md px-5 py-3 space-x-4">
        <RouterLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="nav-link"
          :class="{ active: route.fullPath === item.link }"
        >
          {{ item.text }}
        </RouterLink>
      </nav>

      <button @click="toggleMenu" class="md:hidden text-2xl focus:outline-none text-white">
        <IconMenu />
      </button>
    </div>

    <transition name="fade">
      <div v-if="menuOpen" class="fixed inset-0 bg-black/90 z-50 flex flex-col items-center p-6">
        <!-- Close button at the top right -->
        <button @click="toggleMenu" class="absolute top-6 right-6 text-white text-3xl">
          <IconCloseMenu />
        </button>
        <nav class="flex flex-col space-y-4 mt-16">
          <RouterLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.link"
            class="nav-link text-white text-2xl font-semibold transition"
            :class="{ active: route.path === item.link }"
            @click="menuOpen = false"
          >
            {{ item.text }}
          </RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-menu {
  background: #a9a7aa;
}

.nav-link {
  padding: 0.7rem 2rem;
  border-radius: 999px;
  background: #a9a7aa;
  color: #4a4a4a;
  font-weight: 600;
  transition:
    background 0.3s,
    color 0.3s;
}

.nav-link:hover {
  background: #ffffff;
}

.nav-link.active {
  background: #ffffff;
}
</style>
