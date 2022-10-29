<script setup lang="ts">
import Group from '../components/Group.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const grupo1 = ref('1')
const grupo2 = ref('2')
const grupo3 = ref('3')
const grupo4 = ref('4')

onMounted(() => {
  axios
      .get('http://localhost:3000/')
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
