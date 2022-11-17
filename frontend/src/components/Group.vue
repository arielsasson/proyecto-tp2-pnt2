<script>
import Team from '../components/Team.vue'

export default {
    name: "group",
    components: { Team },
    props: ['group'],
    data() {
        return {

        };
    },
};
</script>

<template>
    <div class="grid text-center  place-self-center gap-4">
        <div class="mb-1.5">
            {{ group.Letter }}
        </div>
        <div v-for="team in group.Teams" :key="group.Name"
            class="text-center p-1 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium">
            <!-- <p @mouseenter="arriba = true" @mouseleave="arriba = false" class="div" :class="{'div-hover': arriba}"> {{team.Name}}</p> -->
            <Team :team="team"> </Team>
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