<script>
export default {
    name: "team",
    props: ['team'],
    data() {
        return {
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
    <div class="hover:bg-emerald-500 hover:bg-clip-border rounded-3xl cursor-pointer grid grid-cols-5 text-xl hover:text-black m-2"
        v-on:click="select">
        <div class="col-start-1 col-end-1">
            <img class=" rounded-md ml-3 h-9 md:h-25 md:w-25 " :src="getImgUrl(team.Name)" />
        </div>
        <div class="col-start-2 col-end-5 font-bold align-middle" v-if="team.Name">
            {{ team.Name }}
        </div>
        <div class="col-start-5 col-end-5">
            <div v-if="position"
                class="bg-emerald-500 rounded-3xl border-2 border-slate-700 text-white px-1 py-1 text-lg uppercase h-9 ">
                {{ position }}
            </div>
        </div>
    </div>
</template>


<style>
.div {
    background-color: white;
    border-style: solid;
}

/* 
.div-hover {
    background-color: lightskyblue;
    opacity: 1;


} */

/* p:hover {
    font-size: 115%;
    text-align: center;
    font-weight: 900;
    color: black;
} */
</style>