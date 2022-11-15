<script>
import axios from 'axios'
import Group from '../components/Group.vue'

  export default {
    name: "TeamGroups",
    // components: { Groups },
    
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
    <div>
      <Group :data='groups[0]'> </Group>
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
      
   
  </template>
  
  