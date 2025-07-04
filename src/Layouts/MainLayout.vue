<script setup>
import Footer from "../components/shared/Footer.vue";
import Navbar from "../components/shared/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
