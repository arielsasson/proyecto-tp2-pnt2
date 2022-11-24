<script>
export default {
    data() {
        return {
            date: new Date().getFullYear()
        }
    }
}
</script>

<template>
    <footer class="w-full bottom-0 bg-gray-900 pb-6 fixed-bottom">
        <div class="container mx-auto px-4">
            <hr class="mb-6 border-b-1 border-gray-700" />
            <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4">
                    <div class="text-sm text-white font-semibold py-1">
                        Copyright © {{ date }}
                        <a href="https://www.ort.edu.ar/"
                            class="text-white hover:text-gray-400 text-sm font-semibold py-1">ORT Argentina</a>
                    </div>
                </div>
                <div class="w-full md:w-8/12 px-4">
                    <ul class="flex flex-wrap list-none md:justify-end  justify-center">
                        <li>
                            <a href="https://nodejs.org/en/"
                                target=”_blank”
                                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"> Node JS </a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/"
                                target=”_blank”
                                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"> Tailwind CSS</a>
                        </li>
                        <li>
                            <a href="https://vuejs.org/"
                                target=”_blank”
                                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"> Vue JS </a>
                        </li>
                        <li>
                            <Router-link to="/about"
                                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"> Sobre nosotros </Router-link>
                        </li>
                        <li>
                            <a href="https://github.com/arielsasson/proyecto-tp2-pnt2/"
                                target=”_blank”
                                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"> Repositorio </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
