<script>
import Team from '../components/Team.vue'

export default {
    name: "group",
    components: { Team },
    props: ['group'],
    data() {
        return {
            selected: {
                1: "",
                2: ""
            }
        };
    },
    methods: {
        teamSelected(name) {
            if (checkEmpty(this.selected[1])) {
                this.selected[1] = name
            } else if (checkEmpty(this.selected[2])) {
                this.selected[2] = name
            } else if (this.selected[1] === name) {
                this.selected[1] = ""
            } else if (this.selected[2] === name) {
                this.selected[2] = ""
            }
        },
        checkEmpty(name) {
            return name === ""
        }
    }
}
</script>

<template>
    <div class="grid text-center  place-self-center gap-3">
        <div class="mb-1.5">
            {{ group.Letter }}
        </div>
        <div v-for="team in group.Teams" :key="team.Name"
            class="text-center p-1 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium ">
            <!-- <p @mouseenter="arriba = true" @mouseleave="arriba = false" class="div" :class="{'div-hover': arriba}"> {{team.Name}}</p> -->
            <Team :team="team"/>
        </div>
        <!-- <div v-for="team in data.Teams" :key="team"
        class="p-3 text-gray-500 bg-white shadow-xl border border-gray-100  rounded-2xl font-medium w-72"> -->

        <!-- <p>{{ team.Name }}</p> -->
        <!-- </div> -->
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