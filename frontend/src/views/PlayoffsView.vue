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
            // playoffs: []
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
            console.log(this.$refs[15])
            const child = this.$refs[15]
            child.eraseSelections()
        },
        assignTeam(order, name) {
            console.log("El campeon mundial es: " + name)
        },
        // metodo para renderizar lineas?
        drawLines() {
            let children = this.$children
            let lines = this.lines
            lines.splice(0, lines.length)

            let scheduleContainer = this.$refs.scheduleContainer
            let scheduleContainerRect = scheduleContainer.getBoundingClientRect();

            for (let i = 0; i < children.length; i++) {
                let child = children[i]

                if (child.$props.assignment) {
                    if (child.$props.assignment.assignmentRequestId != "00000000-0000-0000-0000-000000000000") {
                        for (let ii = 0; ii < children.length; ii++) {
                            let child2 = children[ii]
                            if (child2.$props.assignmentRequest) {
                                if (child2.$props.assignmentRequest.id == child.$props.assignment.assignmentRequestId) {
                                    let assignmentRect = child.$refs.theContainer.getBoundingClientRect()
                                    let requestRect = child2.$refs.theContainer.getBoundingClientRect()
                                    let x1 = ((assignmentRect.left - scheduleContainerRect.left) + 12.5) + 'px'
                                    let y1 = ((assignmentRect.top - scheduleContainerRect.top) + 12.5) + 'px'
                                    let x2 = ((requestRect.left - scheduleContainerRect.left) + 12.5) + 'px'
                                    let y2 = ((requestRect.top - scheduleContainerRect.top) + 12.5) + 'px'
                                    let line = { 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 }
                                    lines.push(line)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>

<template>
    <div class="flex justify-end  bg-white shadow rounded border border-transparent hover:border-blue-500">
        <Playoff
        :playoffs="this.playoffs"
        :order="15"
        :prediction="this.prediction"
        :spacing="-10" 
        ref="15"/>
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