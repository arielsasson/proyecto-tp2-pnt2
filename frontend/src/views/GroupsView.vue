<script>
import axios from 'axios'
import Group from '../components/Group.vue'
import GroupService from '../services/GroupService.js'
import { predictionStore } from "../store/predictionStore.js"
import { storeToRefs } from "pinia"

export default {
    name: "groups-view",
    components: { Group },
    setup() {
        const store = predictionStore();
        const { prediction } = storeToRefs(store);
        const { updateGroups } = store;
        return {
            store,
            updateGroups,
            prediction
        }
    },
    data() {
        return {
            groups: []
        }
    },
    async mounted() {
        // usar el groupService para las llamadas al backend
        const res = await axios.get('http://localhost:3000/api/groups')
        this.groups = res.data
    },
    methods: {
        async confirm() {
            let groupsStates = []
            let completed = true
            this.groups.forEach((g) => {
                const [child] = this.$refs[g.Letter]
                let state = child.getState()
                if (state === null) {
                    completed = false
                    return
                }
                groupsStates.push(state)
            })
            if (!completed) {
                // mostrar un modal que pida completar la data
                return
            }
            this.updateGroups(groupsStates)
            this.$router.push('/playoffs')
        },
        async eraseSelections() {
            this.groups.forEach((e) => {
                const [child] = this.$refs[e.Letter]
                child.erase()
            })
        }
    }
};
</script>

<template>
    <div class="grid grid-cols-4 grid-row-2 place-items-center">
        <!-- <Group :group="this.groups[0]"
        :ref="`${this.groups[0].Letter}`" /> -->
        <div v-for="group in groups"
            :key="group.Name"
            class="w-72 h-100 bg-white shadow rounded border border-transparent hover:border-blue-500">
            <div class="gap-3">
                <Group :group='group' 
                :ref="`${group.Letter}`"/>
            </div>
        </div>
        <div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 align-bottom"
                v-on:click="confirm">
                Confirmar selección
            </button>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 align-bottom"
                v-on:click="eraseSelections">
                Borrar selecciones
            </button>
        </div>
    </div>
</template>