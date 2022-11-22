<script>

export default {
    name: "team",
    props: ['team'],
    data() {
        return {
            hover: false,
            position: null,
        };
    },
    methods: {
        getImgUrl(img) {
            return './src/assets/img/teams/' + img + '.gif'
        },
        select() {
            this.position = this.$parent.teamSelected(this.team.Name)
        },
        erase() {
            this.position = null
        }
    }
};


</script>

<template>
    <div class="">
            <img 
                class=" rounded-md ml-3 h-8 md:h-25 md:w-25 bg-white"
                :src="getImgUrl(team.Name)"/>
                <p
                @mouseenter="hover = true"
                @mouseleave="hover = false"
                class="div  cursor-pointer"
                :class="{'div-hover': hover}" 
                v-on:click="select"
                v-if="team.Name">
                {{ team.Name }}
                </p>
                <p v-if="position"> 
                    <span class="bg-green-500 rounded-full text-white px-3 py-1 text-xs uppercase font-medium"> {{ position }} </span>
                </p>
    </div>
</template>


<style>
.div {
    background-color: white;
    border-style: solid;


}

.div-hover {
    background-color: lightskyblue;
    opacity: 1;


}

/* p:hover {
    font-size: 115%;
    text-align: center;
    font-weight: 900;
    color: black;
} */
</style>