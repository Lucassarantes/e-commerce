<template>
    <div class="flex items-center h-24 px-5 shadow-lg">
        <div class="w-1/2 flex flex-wrap items-center">
            <img class="w-12 mr-10" src="../assets/logo.png" alt="">
            <nav class="flex space-x-6 text-base font-bold">
                <router-link
                    :to="{ name: 'Home' }"
                    exact-active-class="active"
                >
                    Inicio
                </router-link>
                <router-link
                    :to="{ name: 'About' }"
                    exact-active-class="active"
                >
                    Sobre
                </router-link>
                <router-link
                    :to="{ name: 'Products' }"
                    exact-active-class="active"
                >
                    Produtos
                </router-link>
            </nav>
        </div>
        <div class="w-1/2 flex justify-end absolute right-7">
            <img class="justify-end" src="../assets/icon-cart.svg" @click="abrirCarrinho()" alt="">
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
                exibir: false
            };
        },
        methods: {
            abrirCarrinho() {
                console.log("teste");
                if (this.exibir) {
                    this.exibir = false;
                } else {
                    this.exibir = true;
                }
            }
        }
    };
</script>