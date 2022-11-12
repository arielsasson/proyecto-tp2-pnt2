import { defineStore } from 'pinia'
import axios from 'axios'

//copiado textual del profe!!

export const sessionStore = defineStore('session', {
    state: () => {
        return {
            usuario: {},
            estaLogeado : false,
        }
    },
    actions: {
        async login(usuarioForm) {
            try {
                const data = await axios.post("http://localhost:3000/api/users/login", usuarioForm);
                console.log(data)
                if(data.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuarioForm.Username;
                    console.log(data.data.data.token)
                    this.usuario.token = data.data.data.token;
                    localStorage.setItem('usuario',JSON.stringify({email:this.usuario.email,token:data.data.token}) )
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