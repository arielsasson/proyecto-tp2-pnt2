  
<script>
export default {
    name: "modalRegister",
    setup() {
        const feedbackExitoso = "El registro de usuario fue exitoso, procediendo a iniciar sesión."
        const feedbackFallido = "El registro de usuario no fue satisfactorio. Inténtelo de nuevo."
        var feedbackMessage = ""
    },
    data() {
        return {
            showModal: false,
            ok: false
        }
    },
    methods: {
        openModal: (success) => {
            success ? feedbackMessage = feedbackExitoso : feedbackMessage = feedbackFallido
            this.showModal = true
        },
        closeModal: () => {
            this.showModal = false
            this.$parent.tryLogin()
            
        }
    },
    // props: defineProps({
    //     registroExitoso: Boolean
    // })
    // props: {
    //     success: Boolean
    // }
}
</script>

<template>
    <div>
        <div v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto max-w-sm">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div
                        class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 class="text-3xl font-semibold">
                            Registro de usuario
                        </h3>
                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="closeModal()">
                            <span
                                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6 flex-auto">
                        <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                            {{ feedbackMessage }}
                        </p>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" v-on:click="closeModal()">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>
