<script>
import Team from '../components/Team.vue'

export default {
    name: "group",
    components: { Team },
    props: ['group'],
    data() {
        return {
            selected: {
                first: "",
                second: ""
            }
        };
    },
    methods: {
        teamSelected(name) {
            let result = 0
            
            if (this.checkEmpty(this.selected.first) && name !== this.selected.second) {
                this.selected.first = name
                result = 1
            } else if (this.checkEmpty(this.selected.second) && name !== this.selected.first) {
                this.selected.second = name
                result = 2
            } else if (this.selected.first === name) {
                this.selected.first = ""
                result = 0
            } else if (this.selected.second === name) {
                this.selected.second = ""
                result = 0
            }
            return result
        },
        checkEmpty(name) {
            return name === ""
        },
        getState() {
            if (this.selected.first === "" || this.selected.second === "" ) return null
            return { selected: this.selected, letter: this.group.Letter }
        },
        erase() {
            this.selected.first = ""
            this.selected.second = ""
            this.group.Teams.forEach((t) => {
                const [child] = this.$refs[t.Name]
                child.erase()
            })
        }
    }
}
</script>

<template>
    <div class="grid text-center  place-self-center gap-3 m-3">
        <div class="mb-1.5">
            Grupo {{ group.Letter }}
        </div>
        <div v-for="team in group.Teams" :key="team.Name"
            class="text-center p-1 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium ">
            <Team :team="team" :ref="`${team.Name}`" />
        </div>
    </div>
</template>

<!-- <style>
.div {
    background-color: blue;
    
}

.div-hover {
    background-color: yellow;
}
</style> -->