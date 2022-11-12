<script lang="ts">
import axios from 'axios'

export default {
  setup() {
    const groups: any[] = []

    return {
      groups
    }
  },

  async mounted() {
    const data = await axios.get('http://localhost:3000/api/groups')
    this.groups = data.data
    console.log(this.groups)
  }
}
// onMounted(async () => {
//   // axios
//   //     .get('http://localhost:3000/api/groups')
//   //     .then(response => groups = response.data)

//   const data = await axios.get('http://localhost:3000/api/groups')
//   groups = data.data
//   console.log(groups)
// })

</script>

<template>
  <main>
    <h1>Grupos</h1>
    {{groups}}
    <!-- <div v-for="group in groups">
      
      <Group :group=group.Letter></Group>
    </div> -->
  </main>
</template>
