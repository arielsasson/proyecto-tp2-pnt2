import { defineStore } from 'pinia'
import axios from 'axios'

export const predictionStore = defineStore('prediction', {
    state: () => {
        return {
            prediction: {}
        }
    },
    actions: {

        // INPUT
        // [
        //     {
        //         selected: {
        //             1: "Arabia Saudita",
        //             2: "Argentina"
        //         }
        //         letter: "F"
        //     }, ...
        // ]


        // BD (entidad prediction) -> eventualmente meter el array en un objeto de dos elementos, groups y playoffs (un atributo mas)
        // [
        //     {
        //         letter: "F",
        //         teams: [
        //             {
        //                 name: "Argentina",
        //                 position: "first"
        //             },
        //             {
        //                 name: "Arabia Saudita",
        //                 position: "second"
        //             }
        //         ]
        //     }, ...
        // ]

        async updateGroups(groupsInfo) {
            const groups = []
            groupsInfo.forEach((g)=> {
                groups.push({
                    Letter: g.letter,
                    Teams: [
                        {
                            Name: g.selected.first,
                            Position: "first"
                        },
                        {
                            Name: g.selected.second,
                            Position: "second"
                        }
                    ]
                })
            })
            this.prediction.Groups = groups
        },
        async updatePlayoffs(playoffsInfo) {
            // hace falta?
        }

    }
})