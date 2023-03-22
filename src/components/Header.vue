<template>
    <div class="flex items-center h-16 md:h-24 px-5 shadow-lg">
        <div class="w-1/2 flex flex-wrap items-center">
            <img class="w-8 md:w-12 md:mr-10" src="../assets/logo.png" alt="">
            <nav class="flex space-x-6 hidden md:block md:text-base font-bold">
                <router-link
                    :to="{ name: 'Home' }"
                    exact-active-class="active"
                >
                    Inicio
                </router-link>
                <router-link
                    :to="{ name: 'Products' }"
                    exact-active-class="active"
                >
                    Produtos
                </router-link>
            </nav>
        </div>
        <div class="w-10/12 flex justify-end absolute right-7 items-center">
            <img class="justify-end absolute md:right-0 right-10" src="@/assets/icon-cart.svg" @click="abrirCarrinho()" alt="">
            <img class=" md:hidden w-4 h-fit absolute" src="@/assets/icon-menu.svg" alt="Menu hamburguer" @click="abrirMenu()">
            <div class="w-4/12">
                <nav class="z-30 bg-white relative py-2 top-20 left-5 flex flex-wrap md:text-base font-bold shadow-lg w-full" v-show="this.exibirMenu">
                <router-link
                    class="w-full"
                    :to="{ name: 'Home' }"
                    exact-active-class="active"
                >
                    Inicio
                </router-link>
                <router-link
                    class="w-full"
                    :to="{ name: 'Products' }"
                    exact-active-class="active"
                >
                    Produtos
                </router-link>
            </nav>
            </div>
        </div>
        <div v-show="this.exibir">
            <Carrinho />
        </div>
    </div>
</template>

<style>
    .active {
        border-bottom: 2px green solid;
    }
</style>

<script>
    import Carrinho from "../components/Carrinho.vue";
    
    export default {
        components: { Carrinho },
        data() {
            return {
                exibir: false,
                exibirMenu: false
            };
        },
        methods: {
            abrirCarrinho() {
                if (this.exibir) {
                    this.exibir = false;
                } else {
                    this.exibir = true;
                }
            },
            abrirMenu() {
                this.exibirMenu = this.exibirMenu === true ? false : true;
            }
        }
    };
</script>