<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        logout() {
            console.log("DESLOGUEANDO!")
        },
    }
};
</script>

<template>
    <div>
        <div class="bg-gray-100">
            <nav class="
            container
            px-4
            py-3
            mx-auto
            md:flex md:justify-between md:items-center">
                <div class="flex items-start justify-between">
                    <Router-link to="/" class="
                    text-xl
                    font-bold
                    text-gray-800
                    md:text-2xl
                    hover:text-blue-400">
                    <img 
                    class="rounded-xl ml-3 h-12 md:h-25 md:w-25 border-[1px] border-gray-500 bg-white"
                    src="../assets/img/logo.png"/>
                    </Router-link>
                    <!-- Mobile menu button -->
                    <div @click="showMenu = !showMenu" class="flex md:hidden">
                        <button type="button" class="
                        text-gray-800
                        hover:text-gray-400
                        focus:outline-none focus:text-gray-400">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>


                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <ul :class="showMenu ? 'flex' : 'hidden'" class="
                flex-col
                mt-8
                space-y-4
                md:flex
                md:space-y-0
                md:flex-row
                md:items-center
                md:space-x-10
                md:mt-0">
                    <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        <Router-link to="/groups">
                            <button
                                class="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-blue-800 font-medium border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 rounded-lg hover:bg-blue-600 disabled:opacity-50">
                                Nueva predicción
                            </button>
                        </Router-link>
                    </li>
                    <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        <Router-link to="/predictions">
                            <button
                                class="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-amber-800 font-medium border-gray-200 hover:text-white text-amber-600 hover:border-amber-700 rounded-lg hover:bg-amber-600 disabled:opacity-50">
                                Mis predicciones
                            </button>
                        </Router-link>
                    </li>
                    <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        <Router-link to="/register">
                            <button
                                class="py-1.5 px-4 transition-colors bg-green-600 border active:bg-green-800 font-medium border-green-700 text-white rounded-lg hover:bg-green-700 disabled:opacity-50">
                                Registrarse
                            </button>
                        </Router-link>
                    </li>
                    <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        <Router-link to="/login">
                            <button
                                class="py-1.5 px-4 transition-colors bg-gray-50 border text-green-600 active:bg-green-800 font-medium border-gray-200 hover:text-white hover:border-green-700 rounded-lg hover:bg-green-600 disabled:opacity-50">
                                Iniciar Sesión
                            </button>
                        </Router-link>
                    </li>
                    <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
                        <button v-on:click="logout"
                            class="py-1.5 px-4 transition-colors bg-gray-50 border active:bg-red-800 font-medium border-gray-200 hover:text-white text-red-600 hover:border-red-700 rounded-lg hover:bg-red-600 disabled:opacity-50">
                            Salir
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>