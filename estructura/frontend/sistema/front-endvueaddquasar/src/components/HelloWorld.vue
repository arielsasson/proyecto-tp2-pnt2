<script>
import { RouterLink, RouterView } from 'vue-router'
import {storeToRefs} from "pinia"
import {loginStore} from '../stores/loginStore.js'
export default {
  name: 'HelloWorld',
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
  <q-page class="flex flex-center">
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/menu">Menu</RouterLink> |
        <button @click="logoutForm" v-if="estaLogeado" >Logout</button>
      </nav>
      <RouterView />
    </div>
  </q-page>


</template>

<style scoped>
</style>


