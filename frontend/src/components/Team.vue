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
    <div class="hover:bg-sky-300 hover:bg-clip-border rounded-xl cursor-pointer grid grid-cols-5 text-center  hover:text-black" v-on:click="select">
        <div class="col-start-1 col-end-1">
            <img class=" rounded-md ml-3 h-8 md:h-25 md:w-25 hover:bg-sky-300" :src="getImgUrl(team.Name)" />
        </div>
        <div class="col-start-2 col-end-5">
            <div>
                <div v-if="team.Name">
                {{ team.Name }}
            </div>
            </div>

        </div>
        <div class="col-start-5 col-end-5   ">
            <p v-if="position">
                <span class="bg-green-500 rounded-full text-white px-3 py-1 text-xs uppercase font-medium "> {{ position
                }}
                </span>
            </p>
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