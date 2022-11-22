<script>
// https://dev.to/vcpablo/vuejs-recursive-components-2549 Revisar el tema de los :node para evitar el bucle infinito


import Team from '../components/Team.vue'

export default {
    name: 'playoff',
    components: { Team },
    setup() {
        
    },
    props: ['playoff', 'prediction', 'spacing'], // usar spacing para que queden a distinto nivel
    data() {
        return {
            teams: {
                first: {},
                second: {}
            },
            selected: ""
        }
    },
    mounted() {
        if (this.playoff.teams[0].keys().find(f => f === "order") === undefined) {
            // octavos
            const teamName1 = this.prediction.groups.find((g) => {
                g.Letter === playoff.teams[0].group
            }).Teams.find((t) => {
                t.Position === "first"
            }).Name
            const teamName2 = this.prediction.groups.find((g) => {
                g.Letter === playoff.teams[1].group
            }).Teams.find((t) => {
                t.Position === "second"
            }).Name
            this.teams.first.Name = teamName1
            this.teams.second.Name = teamName2
        }
    },
    methods: {
        eraseSelections() {
            const [team1] = this.$refs[`${this.playoff.order}-1`]
            team1.erase()
            const [team2] = this.$refs[`${this.playoff.order}-2`]
            team2.erase()
            if (this.playoff.teams[0].keys().find(f => f === "order")) {
                const [playoff1] = this.$refs[this.children.first]
                playoff1.eraseSelections()
                const [playoff2] = this.$refs[this.children.second]
                playoff2.eraseSelections()
            }
        },
        assignTeam(order, name) {
            if (this.children) {
                // asignar equipos para que puedan renderizarse
                // recibo de mis hijos los equipos seleccionados
                // si no tengo hijos ignoro
                if (order === this.children.first) {
                    this.teams.first.Name = name
                } else if (order === this.children.second) {
                    this.teams.second.Name = name
                }
            }
        },
        eraseTeam(name) {
            if (this.children) {
                if (this.teams.first.Name === name) {
                    this.teams.first = {}
                } else if (this.teams.second.Name === name) {
                    this.teams.second = {}
                }
                this.$parent.eraseTeam(name)
            }
        },
        teamSelected(name) {
            if (this.checkEmpty(this.selected)) {
                this.selected = name
                this.$parent.assignTeam(this.order, name) // si order es 15 va a llamar a PlayoffsView, hay que definirlo (campeon mundial)
                return "X"
            } else if (this.selected === name) {
                this.selected = ""
                this.$parent.eraseTeam(name)
                return null // redundante?
            }
            return null
        },
        checkEmpty(name) {
            return name === ""
        },
    }
}
</script>

<template>
    <!-- <Suspense> -->
        <p>
            {{ this.thisPlayoff.Date }}
        </p>
        <div v-if="this.teams.first.Name && this.teams.second.Name">
            <Team :team="this.teams.first" :ref="`${this.order}-1`" />
            <Team :team="this.teams.second" :ref="`${this.order}-2`" />
        </div>

        <div v-if="Object.keys(this.children).length === 0"
            class="w-72 h-100 bg-white shadow rounded border border-transparent hover:border-blue-500">
            <Playoff :playoff="this.playoff"
                :prediction="this.prediction"
                :ref="`${this.children.first}`"
                :spacing="spacing + 10"/>
            <Playoff :playoff="this.playoff"
                :prediction="this.prediction"
                :ref="`${this.children.second}`"
                :spacing="spacing + 10" />
        </div>
    <!-- </Suspense> -->
</template>