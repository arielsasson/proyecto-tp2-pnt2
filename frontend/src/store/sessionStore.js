import { defineStore } from 'pinia'
import axios from 'axios'
import UserService from '../services/UserService'

// actualizar, logica extraida en UserService.js

export const sessionStore = defineStore('session', {
    state: () => {
        return {
            usuario: {},
            activeSession : false,
        }
    },
    actions: {
        async login(form) {
            if (this.activeSession) return
            try {
                const res = await UserService.login(form)
                if(res.status == 200) {
                    this.activeSession = true;

                    // extraer de los headers, no del body!
                    this.usuario.email = res.data.data.email;
                    this.usuario.token = res.data.data.token;

                    // asi se haria con el localstorage

                    // localStorage.setItem('user',JSON.stringify({
                    //     email : res.data.data.email,
                    //     token : res.data.data.token
                    // }))
                } else {
                    this.activeSession = false;
                }
            } catch(e) {
                console.log(e);
            }
        },
        async logout() {
            this.activeSession = false;
            this.usuario = {}
            const res = await UserService.logout()
            location.reload();

            // localStorage.removeItem('user');
        }
    }
})