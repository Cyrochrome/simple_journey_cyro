<script setup lang="ts"></script>

<template>
  <section id="contact" class="py-20 bg-zinc-500">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-5xl font-[Fahkwang] text-white mb-6">
        Ready to power your future <br />
        with sustainable energy?
      </h2>
      <p class="max-w-2xl mb-12 text-white">
        Fill out the form below and let SimpleJourney's experts help
      </p>
      <form class="justify-center">
        <div class="grid grid-cols-3 gap-4 text-white mb-12">
          <div class="flex flex-col gap-2">
            <label>First Name *</label>
            <input type="text" name="first-name" required />
            <hr />
          </div>
          <div class="flex flex-col gap-2">
            <label>Last Name *</label>
            <input type="text" name="last-name" required />
            <hr />
          </div>
          <div class="flex flex-col gap-2">
            <label>Email *</label>
            <input type="text" name="email" required />
            <hr />
          </div>
          <div class="flex flex-col gap-2">
            <label>Phone</label>
            <input type="text" name="phone" />
            <hr />
          </div>
          <div class="flex flex-col gap-2">
            <label>Company / Organization name</label>
            <input type="text" name="company" />
            <hr />
          </div>
          <div class="flex flex-col gap-2">
            <label>Location</label>
            <input type="text" name="location" />
            <hr />
          </div>
          <div class="col-span-3 flex flex-col gap-2">
            <label>How can we help</label>
            <input type="text" name="problem" />
            <hr />
          </div>
          <button
            class="col-start-2 rounded-full mt-6 inline-block px-20 py-1 bg-[#5cffff] hover:bg-black hover:text-white transition"
            type="submit"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
