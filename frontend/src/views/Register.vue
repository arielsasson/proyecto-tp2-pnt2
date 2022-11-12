<script>
import axios from 'axios'

export default {
    setup() {
        // ??
    },
    data() {
        return {
            registerForm: {},
            mensajeError: ""
        }
    },
    methods: {
        async registerButton() {

            try {
                if (this.registerForm.Password === this.registerForm.ConfirmPassword) {
                    this.mensajeError = "Las contraseñas deben coincidir para poder registrarse."
                    return
                }
                const data = await axios.post("http://localhost:3000/api/users", registerForm)
                if (data.status == 200) {
                    // logear al usuario automaticamente (volver a llamar al server? o hacerlo automatico desde el back?)
                    this.$router.push('/login') // la otra es redirigir al usuario a que se loguee. Debiera haber un feedback de si el registro fue correcto.
                } else {
                    this.mensajeError = "Registro rechazado." // continuar.. usuario repetido? dar mejor feedback.
                }
            } catch(e) {
                console.log(e);
            }
        }
    }
}

</script>

<template>
    <div class="bg-gray-800">
        <div class="p-8 lg:w-1/2 mx-auto">
            <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p class="text-center text-sm text-gray-500 font-light"> Complete sus datos para registrarse</p>
                <form @submit.prevent="registerButton" class="mt-6">
                    <div class="relative mt-3">
                        <input v-model="registerForm.Username"
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Email" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mt-3">
                        <input v-model="registerForm.Password"
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Contraseña" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative mt-3">
                        <input v-model="registerForm.ConfirmPassword"
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Repita contraseña" />
                        <div class="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-8"> <button
                            class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Crear cuenta </button> </div>
                </form>
            </div>
        </div>
    </div>
</template>
