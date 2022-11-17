<script>

export default {
    name: "team",
    props: ['team'],
    data() {
        return {
            hover: false,
            position: null
        };
    },
};


</script>

<template>
    <div>
        <p @mouseenter="hover = true" @mouseleave="hover = false" class="div" :class="{'div-hover': hover}">
            {{ team.Name }}</p>
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