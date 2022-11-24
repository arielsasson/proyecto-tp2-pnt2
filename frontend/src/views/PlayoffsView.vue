<script>
import Playoff from '../components/Playoff.vue'
import { predictionStore } from "../store/predictionStore.js"
import { storeToRefs } from "pinia"
import axios from 'axios'

export default {
    name: 'playoffs-view',
    components: { Playoff },
    async setup() {
        const store = predictionStore();
        const { prediction } = storeToRefs(store);
        const { updatePlayoffs } = store;
        const res = await axios.get('http://localhost:3000/api/playoffs/defaults')
        let playoffs = res.data
        return {
            store,
            updatePlayoffs,
            prediction,
            playoffs
        }
    },
    data() {
        return {
        }
    },
    async mounted() {
        // usar el playoffService para las llamadas al backend
        // const res = await axios.get('http://localhost:3000/api/playoffs/defaults')
        // this.playoffs = res.data
    },
    methods: {
        save() {
            // obtener fecha de la prediccion para despues poder ordenarlas
            // post a la base de datos, con playoffservice
            // this.updatePlayoffs() para guardarlo en el store, OPCIONAL
        },
        eraseSelections() {
            const child = this.$refs[15]
            child.eraseSelections()
        },
        assignTeam(order, name) {
            console.log("El campeon mundial es: " + name)
        }
    }
}
</script>

<template>
    <div >
        <div class="playoffs-content">
            <Playoff :playoffs="this.playoffs" :order="15" :prediction="this.prediction" ref="15" />
        </div>
    </div>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 align-bottom"
        v-on:click="save">
        Guardar predicción
    </button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 align-bottom"
        v-on:click="eraseSelections">
        Borrar selecciones
    </button>
</template>