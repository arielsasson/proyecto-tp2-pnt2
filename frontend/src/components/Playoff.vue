<script>
// https://dev.to/vcpablo/vuejs-recursive-components-2549
import Team from '../components/Team.vue'

export default {
    name: 'playoff',
    components: { Team },
    setup() {
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
            this.thisPlayoff.teams[0].Name = teamName1
            this.thisPlayoff.teams[1].Name = teamName2
        }
    },
    props: ['playoffs', 'order', 'prediction'],
    data() {
        return {
            children: {},
            thisPlayoff: {},
            selected: ""
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
                playoff1.erase()
                const [playoff2] = this.$refs[this.children.second]
                playoff2.erase()
            }
        },
        teamSelected(name) {
            if (this.checkEmpty(this.selected)) {
                this.selected = name
                return "X"
            } else if (this.selected === name) {
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
    <Team
    :team="this.thisPlayoff.teams[0]"
    :ref="`${this.order}-1`" />
    <Team 
    :team="this.thisPlayoff.teams[1]"
    :ref="`${this.order}-2`" />
    <div v-if="this.children"
    class="w-72 h-100 bg-white shadow rounded border border-transparent hover:border-blue-500">
        <Playoff
        :playoffs="this.playoffs"
        :order="this.children.first"
        :prediction="this.prediction"
        :ref="`${this.children.first}`"/>
        <Playoff
        :playoffs="this.playoffs"
        :order="this.children.second"
        :prediction="this.prediction"
        :ref="`${this.children.second}`"/>
    </div>
</template>