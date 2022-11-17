<script>
import axios from 'axios'
import Group from '../components/Group.vue'
import GroupService from '../services/GroupService.js'

export default {
    name: "groups-view",
    components: { Group },

    data() {
        return {
            groups: []
        };
    },

    async mounted() {
        // groupService
        const data = await axios.get('http://localhost:3000/api/groups')
        this.groups = data.data
    }
};
</script>

<template>
    <div class="grid grid-cols-4 grid-row-2 place-items-center">
        <div v-for="group in groups"
            :key="group"
            class="w-60 h-60 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
            <Group :group='group'> </Group>
        </div>


        <div class="fixed bottom-96">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 align-bottom">
                Confirmar selección
            </button>
        </div>
    </div>


</template>
  
  