<script>

export default {
  name: "TeamGroups",
  props: ['data'],
  data() {
    return {
      group: {}
    };
  },

};
</script>

<template>
  <div class="w-96 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
    <div
      class="grid grid-row-4 grid-flow-row gap-4 h-72 w-full checker-bg flex items-center justify-center p-4 text-blue-500 text-center">
      {{data}}
      <!-- <div v-for="team in data.Teams" :key="team"
        class="p-3 text-gray-500 bg-white shadow-xl border border-gray-100  rounded-2xl font-medium w-72"> -->
        
        <!-- <p>{{ team.Name }}</p> -->
      <!-- </div> -->

    </div>
  </div>


</template>