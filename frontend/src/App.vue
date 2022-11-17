<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from "pinia"
import { sessionStore } from './store/sessionStore.js'
import Navbar from './components/Navbar.vue'

</script>

<template>
<!-- aca iria un navbar, botones con vue-if para registrarse logearse y deslogearse, hacer una nueva prediccion (GroupsView), ver predicciones mias y de otros, etc -->
    <Navbar />
    <RouterView />
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
