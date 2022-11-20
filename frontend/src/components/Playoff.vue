<script>
// https://dev.to/vcpablo/vuejs-recursive-components-2549 Revisar el tema de los :node para evitar el bucle infinito


import Team from '../components/Team.vue'

export default {
    name: 'playoff',
    components: { Team },
    setup() {
        
    },
    props: ['playoffs', 'order', 'prediction'],
    data() {
        return {
            children: {},
            thisPlayoff: {},
            teams: {
                first: {},
                second: {}
            },
            selected: ""
        }
    },
    mounted() {
        this.thisPlayoff = this.playoffs.find((p) => {
            p.order === this.order
        })
        if (this.order >= 9 && this.order <= 15) {
            this.children.first = thisPlayoff.teams[0].order
            this.children.second = thisPlayoff.teams[1].order
        }
        if (this.order >= 0 && this.order <= 8) {
            const teamName1 = this.prediction.groups.find((g) => {
                g.Letter === thisPlayoff.teams[0].group
            }).Teams.find((t) => {
                t.Position === "first"
            }).Name
            const teamName2 = this.prediction.groups.find((g) => {
                g.Letter === thisPlayoff.teams[1].group
            }).Teams.find((t) => {
                t.Position === "second"
            }).Name
            this.teams.first.Name = teamName1
            this.teams.second.Name = teamName2
        }
    },
    methods: {
        eraseSelections() {
            const [team1] = this.$refs[`${this.order}-1`]
            team1.erase()
            const [team2] = this.$refs[`${this.order}-2`]
            team2.erase()
            if (this.children) {
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
                return null
            }
            return null // redundante?
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

        <div
            class="w-72 h-100 bg-white shadow rounded border border-transparent hover:border-blue-500">
            <Playoff :playoffs="this.playoffs" :order="this.children.first" :prediction="this.prediction"
                :ref="`${this.children.first}`"
                :node="this.children.first"
                v-if="this.children" />
            <Playoff :playoffs="this.playoffs" :order="this.children.second" :prediction="this.prediction"
                :ref="`${this.children.second}`"
                :node="this.children.second"
                v-if="this.children" />
        </div>
    <!-- </Suspense> -->
</template>