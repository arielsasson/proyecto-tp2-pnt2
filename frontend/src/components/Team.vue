<script>

export default {
  name: "",
  props: ['team'],
  data() {
    return {
      arriba: false,
      position: null
    };
  },

};


</script>

<template> 
<div>
    <p @mouseenter="arriba = true" @mouseleave="arriba = false" class="div" :class="{'div-hover': arriba}"> {{team.Name}}</p>
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

p:hover{
  font-size: 115%;
  text-align: center;
  font-weight: 900;
  color: black;
}

</style>