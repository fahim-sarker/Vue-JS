<script setup>
import Container from "../components/shared/Container.vue";
</script>

<template>
  <div
    class="bg-black flex flex-col items-center justify-center px-4 text-center gap-6 lg:py-[270px] py-10"
  >
    <Container>
      <h1
        class="text-5xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center"
      >
        Welcome to Vue Js About Page
      </h1>

      <p class="text-gray-300 text-center py-5">
        This is the home page content. You can put any description or intro text
        here that explains your project or app.
      </p>

      <button
        class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 text-2xl font-semibold cursor-pointer rounded-md hover:opacity-90 transition"
      >
        Explore Vue Js
      </button>
    </Container>
  </div>
</template>

<style></style>
