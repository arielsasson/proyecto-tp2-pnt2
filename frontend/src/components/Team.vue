<script>

export default {
    name: "team",
    props: ['team'],
    data() {
        return {
            hover: false,
            position: null,
            selected: false // esto se hace true 
        };
    },
    methods: {
        getImgUrl(img) {
            return './src/assets/img/teams/' + img + '.gif'
        },
        select() {
            console.log("Hola")
            this.$parent.teamSelected(team.Name)
        },
        toggleSelected() {
            this.selected = !this.selected
        }
    }
};


</script>

<template>
    <div class="">
            <img 
                class=" rounded-md ml-3 h-8 md:h-25 md:w-25 bg-white"
                :src="getImgUrl(team.Name)"/>
                <p @mouseenter="hover = true" @mouseleave="hover = false" class="div  cursor-pointer" :class="{'div-hover': hover}" 
                v-on:click="select">
                {{ team.Name }} </p>
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

p:hover {
    font-size: 115%;
    text-align: center;
    font-weight: 900;
    color: black;
}
</style>