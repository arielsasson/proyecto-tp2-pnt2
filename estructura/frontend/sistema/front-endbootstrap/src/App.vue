<script>
import { RouterLink, RouterView } from 'vue-router'
import {storeToRefs} from "pinia"
import {loginStore} from './stores/loginStore.js'
export default {
        setup() {
            const store = loginStore();
            const { usuario, estaLogeado } = storeToRefs(store);
            const {logout} = store;
            return {store,logout,usuario,estaLogeado}
        },
        methods: {
          logoutForm() {
            this.logout();
            this.$route.push('/');
          }
        }
}  
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/login">Login</RouterLink> |
      <RouterLink v-if="estaLogeado" to="/menu">Menu</RouterLink> |
      <button @click="logoutForm" v-if="estaLogeado" >Logout</button>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
