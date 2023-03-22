import { useMainStore } from '@/store';
<template>
    <div class="mt-16 w-full h-max flex justify-center align-center" v-show="produtos.length === 0">
        <LoadingScreen />
    </div>
    <section id="bem-vindo" v-show="produtos.length > 0">
        <h1 class="text-xl font-semibold md:text-6xl mt-10">SEJA BEM VINDO(A) A VITÓRIA!</h1>
        <p class="text-sm md:text-xl mt-5 px-5 md:px-0">A Vitória é sua loja online de produtos diversificados, aqui oferecemos produtos de grande qualidade e pelo menor preço!</p>
    </section>
    <h2 class="mt-10 font-bold text-lg bg-green-700 text-white" v-show="produtos.length > 0">PROMOÇÃO 20% OFF</h2>
    <div class="w-full flex justify-center" v-show="produtos.length > 0">
        <section id="destaques" class="grid grid-cols-1 md:grid-cols-3 md:gap-5 mt-10 w-11/12">
            <div class="w-full h-fit shadow-lg flex flex-wrap justify-center rounded-lg" v-for="produto in produtos" :key="produto.id">
                <h3 class="font-semibold my-5 w-full">{{ limitarPalavras(produto.title) }}</h3>
                <img class="max-h-48 self-start" :src="produto.thumbnail" alt="">
                <h4 class="font-semibold my-5 w-full">DE: <span class="line-through text-gray-500 bg-red-200 p-2 rounded-lg mr-5">{{ formataModeda(produto.price + produto.price * 0.2) }}</span>POR: <span class="text-black no-line-through bg-green-300 p-2 rounded-lg"> {{ formataModeda(produto.price) }}</span></h4>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useProdutosStore } from "@/store";
import { storeToRefs } from "pinia";
import LoadingScreen from "@/components/LoadingScreen.vue";

    const store = useProdutosStore();
    const { produtos } = storeToRefs(store);
    const { carregaDados } = store;

    let images = [];

    carregaDados()
        .then(()=> {
            produtos.value.forEach(produto => {
                images.push(produto.thumbnail);
            });
        });
    
    const limitarPalavras = (palavras) => {
        let textoFinal = "";
        let texto = palavras.split(" ");
        if (texto.length > 4) {
            for (let i = 0; i < 4; i++) {
                textoFinal = textoFinal + texto[i] + " "
            }
        } else {
            for (let i = 0; i < texto.length; i++) {
                textoFinal = textoFinal + texto[i] + " "
            }
        }
        
        return textoFinal;
    }

    const formataModeda = (valor) => {
        return Intl.NumberFormat(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        ).format(valor);
    };
</script>
