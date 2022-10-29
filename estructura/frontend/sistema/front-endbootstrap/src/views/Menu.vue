<template>
  <div>
    <h2>Menu</h2>
    {{ productos }}
    <button @click="ver">Ver</button>
  </div>
</template>

<script>
import ProductoService from '../services/ProductoService.js'
 export default {
  data() {
    return {
      productos: []
    }
  },
  methods: {
    async ver() {
      const datos = await ProductoService.getProductos();
      this.productos = datos.data;
    }    
  },
 }
</script>

<style>
</style>
  