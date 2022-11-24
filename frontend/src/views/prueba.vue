<script>
    import Bracket from "vue-tournament-bracket";

    const rounds = [
        //Repechage 1 of 3
        {
            id: 1,
            next: 5, //Will be connected to game with id 5
            player1: { id: "4", name: "Competitor 4", winner: true },
            player2: { id: "5", name: "Competitor 5", winner: false },
        },
        {
            id: 2,
            next: 6,
            player1: { id: "7", name: "Competitor 7", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },

        //Repechage 2 of 3
        {
            id: 5,
            next: 7,
            player1: { id: "1", name: "Competitor 1", winner: false },
            player2: { id: "4", name: "Competitor 4", winner: true },
        },
        {
            id: 6,
            next: 7,
            player1: { id: "3", name: "Competitor 3", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },
        
        //Repechage 3 of 3 - 3rd place match
        {
            id: 7,
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },
    ];

    export default {
        components: {
            Bracket
        },
        data() {
            return {
                rounds: rounds
            }
        }
    }
</script>

<template>
    <bracket :flat-tree="rounds">
        <template slot="player" slot-scope="{{ player }}">
            {{ player.name }}
        </template>
    </bracket>
</template>