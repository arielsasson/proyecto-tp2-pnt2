<script setup lang="ts">
import Group from '../components/Group.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

onMounted(() => {
  axios
      .get('http://localhost:3000/api/groups')
      .then(response => (console.log(response)))
})

</script>

<template>
  <main>
    <h1>Grupos</h1>
    <Group :sarasa=grupo1></Group>
    <Group :sarasa=grupo2></Group>
    <Group :sarasa=grupo3></Group>
    <Group :sarasa=grupo4></Group>
  </main>
</template>
