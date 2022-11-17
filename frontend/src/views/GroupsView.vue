<script>
import axios from 'axios'
import Group from '../components/Group.vue'

  export default {
    name: "TeamGroups",
    components: { Group },
    
    data() {
      return {
        groups: []
      };
    },

    async mounted() {
    const data = await axios.get('http://localhost:3000/api/groups')
    this.groups = data.data
    console.log(this.groups)
  }
  };
  </script>

<template>
  <div class="grid grid-cols-4 grid-row-2 place-items-center"> 
    <div v-for="group in groups" class="w-60 h-60 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
      <Group :data='group' > </Group>
     
      <!-- <h1>Todos los Grupos</h1>
      <div class="">
        <div v-for="group in groups" v-bind:key="group">
          <h2> {{group.Letter}} </h2>
          <h3 v-for="team in group.Teams" :key=team> {{team.Name}} </h3>
          <div><Group v-bind:name="products" /></div>
          </div>
          <div v-for="team in group" v-bind:key="team.name">
        </div> -->
    </div>


<div class="fixed bottom-96">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 rounded align-bottom">
  Confirmar selección
</button>
</div>
  </div>
      
   
  </template>
  
  