<script setup lang="ts">
import LogoTitle from './LogoTitle.vue'
</script>

<template>
  <footer class="footer-bg">
    <div class="container mx-auto p-15">
      <div class="flex md:flex-row flex-col">
        <div class="footer-title basis-9/10">
          <LogoTitle class="text-black" />
        </div>
        <hr class="md:hidden" />
        <div class="flex">
          <div class="basis-1/2">
            <p>Office 8</p>
            <p>Jl. Senopati No. 8B Level 18A Senayan, Kebayoran Baru, Jakarta Selatan 12190</p>
          </div>
          <div class="basis-1/2 text-right">
            <p>info@mysite.com<br />Tel: 123-456-7890</p>
          </div>
        </div>
      </div>
      <hr class="md:block hidden" />
      <div class="flex md:flex-row flex-col-reverse gap-10 md:gap-0 pt-4">
        <div class="flex basis-3/5">
          <div class="basis-1/3"><a href="">LinkedIn</a></div>
          <div class="basis-1/3"><a href="">Facebook</a></div>
          <div class="text-right md:text-left basis-1/3"><a href="">Instagram</a></div>
        </div>
        <div class="flex basis-2/5">
          <div class="md:text-right basis-1/2"><a href="">Accessiblity Statement</a></div>
          <div class="text-right basis-1/2"><a href="">Privacy Policy</a></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg {
  background-color: #5cffff;
}
.icon {
  fill: black;
}
</style>
