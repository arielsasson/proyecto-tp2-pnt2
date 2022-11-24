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
            let thisDate = Date.now()
            this.prediction.Date = thisDate
            let playoffsResults = []
            this.$refs[15].getResults(playoffsResults)
            this.prediction.Playoffs = playoffsResults
            console.log(this.prediction)
            // const res = await axios.post('http://localhost:3000/api/playoffs/defaults')

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
    <div class="grid grid-cols-8">
        <div class="col-start-1 col-end-8">
            <div class="playoffs-content">
                <Playoff :playoffs="this.playoffs" :order="15" :prediction="this.prediction" ref="15" />
            </div>
        </div>
        <div class="col-start-8 col-end-8">
            <div class="grid grid-rows-5 h-full">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-bottom row-start-2 m-10 h-20"
                    v-on:click="save">
                    Guardar predicción
                </button>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-bottom row-start-4  m-10 h-20"
                    v-on:click="eraseSelections">
                    Borrar selecciones
                </button>
            </div>
        </div>
    </div>


</template>