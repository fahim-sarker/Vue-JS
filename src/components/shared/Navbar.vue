<script setup>
import { ref } from "vue";
import Container from "./Container.vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav class="bg-black py-5 relative z-50 xl:px-0 px-4">
    <Container>
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <h2
          class="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
          Vue Js
        </h2>

        <!-- Hamburger Button: visible only below lg -->
        <button
          @click="toggleMenu"
          class="lg:hidden text-white focus:outline-none z-60 relative"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!menuOpen"
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Menu -->
        <ul
          :class="[
            'fixed top-0 right-0 h-full w-64 p-5 z-50 flex flex-col gap-y-6 transition-transform duration-500 ease-in-out',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
            'lg:static lg:flex lg:flex-row lg:items-center lg:h-auto lg:w-auto lg:bg-transparent lg:translate-x-0 lg:py-0 lg:gap-x-10',
            menuOpen
              ? 'bg-gradient-to-r from-gray-500 to-blue-500'
              : 'bg-black',
          ]"
        >
          <router-link to="/" @click="closeMenu" class="block">
            <li
              class="text-white font-medium capitalize text-lg cursor-pointer hover:text-gray-300 duration-300 ease-in-out px-4 sm:px-0"
            >
              Home
            </li>
          </router-link>
          <router-link to="/about" @click="closeMenu" class="block">
            <li
              class="text-white font-medium capitalize text-lg cursor-pointer hover:text-gray-300 duration-300 ease-in-out px-4 sm:px-0"
            >
              About
            </li>
          </router-link>
          <router-link to="/service" @click="closeMenu" class="block">
            <li
              class="text-white font-medium capitalize text-lg cursor-pointer hover:text-gray-300 duration-300 ease-in-out px-4 sm:px-0"
            >
              Service
            </li>
          </router-link>
          <router-link to="/blog" @click="closeMenu" class="block">
            <li
              class="text-white font-medium capitalize text-lg cursor-pointer hover:text-gray-300 duration-300 ease-in-out px-4 sm:px-0"
            >
              Blog
            </li>
          </router-link>
          <router-link to="/contact" @click="closeMenu" class="block">
            <li
              class="text-white font-medium capitalize text-lg cursor-pointer hover:text-gray-300 duration-300 ease-in-out px-4 sm:px-0"
            >
              Contact
            </li>
          </router-link>

          <!-- Mobile Buttons inside menu (only below lg) -->
          <div class="lg:hidden flex flex-col gap-3 px-4 mt-4">
            <button
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 cursor-pointer rounded-md hover:opacity-90 transition w-full"
            >
              Sign up
            </button>
            <button
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 cursor-pointer rounded-md hover:opacity-90 transition w-full"
            >
              Log In
            </button>
          </div>
        </ul>

        <!-- Desktop Buttons (visible lg and up) -->
        <div class="hidden lg:flex gap-x-5">
          <button
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 cursor-pointer rounded-md hover:opacity-90 transition"
          >
            Sign up
          </button>
          <button
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 cursor-pointer rounded-md hover:opacity-90 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </Container>

    <div
      v-if="menuOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black/10 bg-opacity-50 z-40 lg:hidden"
    ></div>
  </nav>
</template>

<style scoped></style>
