<script>
// https://dev.to/vcpablo/vuejs-recursive-components-2549


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
            selected: "",
            isParent: null
        }
    },
    mounted() {

        this.thisPlayoff = this.playoffs.find(p => {
            return p.Order == this.order
        })
        if (this.order >= 9 && this.order <= 15) {
            this.children.first = this.thisPlayoff.Teams[0].order
            this.children.second = this.thisPlayoff.Teams[1].order
            this.isParent = true
        }
        if (this.order >= 1 && this.order <= 8) {
            const teamName1 = this.prediction.Groups.find((g) => {
                return g.Letter === this.thisPlayoff.Teams[0].group
            }).Teams.find((t) => {
                return t.Position === "first"
            }).Name
            const teamName2 = this.prediction.Groups.find((g) => {
                return g.Letter === this.thisPlayoff.Teams[1].group
            }).Teams.find((t) => {
                return t.Position === "second"
            }).Name
            this.teams.first.Name = teamName1
            this.teams.second.Name = teamName2
            this.isParent = false
        }

    },
    methods: {
        getResults(unArray) {
            if (this.isParent) {
                const playoff1 = this.$refs[this.children.first]
                playoff1.getResults(unArray)
                const playoff2 = this.$refs[this.children.second]
                playoff2.getResults(unArray)
            }
            unArray.push({
                Order: this.order,
                Winner: { Name: this.selected },
                Loser: { Name: this.teams.first.Name === this.selected ? this.teams.second.Name : this.teams.first.Name }
            })
        },
        eraseSelections() {

            const team1 = this.$refs[`${this.order}-1`]
            team1.erase()
            const team2 = this.$refs[`${this.order}-2`]
            team2.erase()

            // if (Object.keys(this.$refs).includes(`${this.order}-1`)) {
            //     const team1 = this.$refs[`${this.order}-1`]
            //     team1.erase()
            // }
            // if (Object.keys(this.$refs).includes(`${this.order}-2`)) {
            //     const team2 = this.$refs[`${this.order}-2`]
            //     team2.erase()
            // }
            if (this.isParent) {
                const playoff1 = this.$refs[this.children.first]
                playoff1.eraseSelections()
                const playoff2 = this.$refs[this.children.second]
                playoff2.eraseSelections()
                this.teams.first = {}
                this.teams.second = {}
            }
            this.selected = ""
        },
        assignTeam(order, name) {
            if (this.isParent) {
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
            if (this.isParent) {
                if (this.teams.first.Name === name) {
                    this.teams.first = {}
                } else if (this.teams.second.Name === name) {
                    this.teams.second = {}
                }
                if (this.order < 15) {
                    this.$parent.eraseTeam(name)
                }
            }
        },
        teamSelected(name) {
            if (this.checkEmpty(this.selected)) {
                this.selected = name
                this.$parent.assignTeam(this.order, name) // si order es 15 va a llamar a PlayoffsView, hay que definirlo (campeon mundial)
                return "🗸"
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
    <div class="playoff bg-slate-300 shadow-2xl rounded border-stone-800 text-center place-self-center m-0">
        <div :class="{ 'playoff-parent': this.isParent }">
            <div class="w-72 h-40 border rounded-lg border-amber-800">
                <p class="font-black tracking-wide underline decoration-2 decoration-cyan-700 underline-offset-4 ">
                    {{ this.thisPlayoff.Date }}
                </p>
                <div v-show="this.teams.first.Name && this.teams.second.Name">
                    <div
                        class="text-center text-gray-800 bg-slate-200 shadow-xl border border-slate-500 rounded-2xl m-2 ">
                        <Team :team="this.teams.first" :ref="`${this.order}-1`" />
                    </div>
                    <div
                        class="text-center text-gray-800 bg-slate-200 shadow-xl border border-slate-500 rounded-2xl m-2 ">
                        <Team :team="this.teams.second" :ref="`${this.order}-2`" />
                    </div>


                </div>
            </div>
        </div>

        <div v-if="this.isParent">
            <div class="playoff-children">
                <div class="playoff-child">
                    <Playoff :playoffs="this.playoffs" :order="this.children.first" :prediction="this.prediction"
                        :ref="`${this.children.first}`" />
                </div>
                <div class="playoff-child">
                    <Playoff :playoffs="this.playoffs" :order="this.children.second" :prediction="this.prediction"
                        :ref="`${this.children.second}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* body {
    height: 100%;
} */

.playoffs-content {
    display: flex;
    justify-content: center;
}

.playoff {
    display: flex;
    flex-direction: row-reverse;
}

.playoff-parent {
    position: relative;
    margin-left: 50px;
    display: flex;
    align-items: center;
}

.playoff-parent:after {
    position: absolute;
    content: '';
    width: 25px;
    height: 2px;
    left: 0;
    top: 50%;
    background-color: rgb(0, 0, 0);
    transform: translateX(-100%);
}

.playoff-childrens {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.playoff-child {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 25px;
    position: relative;
}

.playoff-child:before {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    right: 0;
    top: 50%;
    transform: translateX(100%);
    width: 25px;
    height: 2px;
}

.playoff-child:after {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    right: -25px;
    height: calc(50% + 22px);
    width: 2px;
    top: 50%;
}

.playoff-child:last-child:after {
    transform: translateY(-100%);
}

.playoff-child:only-child:after {
    display: none;
}
</style>