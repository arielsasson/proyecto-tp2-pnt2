import { defineStore } from 'pinia'
import axios from 'axios'

export const loginStore = defineStore('session', {
    state: () => {
        return {
            usuario: {},
            estaLogeado : false,
        }
    },
    actions: {
        async login(usuarioForm) {
            try {
                const data = await axios.post("http://localhost:3001/api/users/login", usuarioForm);
                if(data.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    console.log(data.data.token);
                    localStorage.setItem('usuario',JSON.stringify({ email:usuario.email, token:data.data.token }) )
                } else {
                    this.estaLogeado = false;
                }
            } catch(e) {
                console.log(e);
            }
        },
        async logout() {
            this.estaLogeado = false;
            // location.reload();
            localStorage.removeItem('usuario');
        }

    }
})
