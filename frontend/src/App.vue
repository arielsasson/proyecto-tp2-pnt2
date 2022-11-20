
<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from "pinia"
import { sessionStore } from './store/sessionStore.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref, onErrorCaptured } from 'vue'

// const error = ref(null);
// onErrorCaptured((e) => {
//     error.value = e;
//     return false;
// })

</script>

<template>
    <Navbar />
    <!-- <div class="flex items-center justify-center h-100" v-if="error">
        <div class="f2 montserrat gray mr2">!</div>
        <div class="f6 gray">{{ error }}</div>
    </div> -->
    <Suspense>
        <RouterView />
    </Suspense>
    <Footer />
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
