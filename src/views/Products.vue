<template>
    <div v-show="produtos.length === 0" class="w-full h-[50vw] flex justify-center items-center">
        <LoadingScreen />
    </div>
    <div v-show="produtos.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-10 mb-10">
        <div v-for="produto in produtos" :key="produto.id" class="shadow-lg rounded-lg border-2 flex">
            <div class="grid grid-cols-1 rounded-lg text-white">
                <div class="max-h-80 flex justify-center rounded-lg border-b-4 border-green-800">
                    <img class="max-h-80" :src="produto.thumbnail" :alt="produto.name">
                </div>
                <div class="flex justify-center flex-wrap text-green-800 mt-2 px-5">
                    <p class="font-bold text-sm text-center my-3">{{produto.title}}</p>
                    <p class="text-left text-sm">{{produto.description}}</p>
                    <h4 class="font-semibold my-5 w-full">DE: <span class="line-through text-gray-500 bg-red-200 p-2 rounded-lg mr-5">{{ formataMoeda(produto.price + produto.price * 0.2) }}</span>POR: <span class="text-black no-line-through bg-green-300 p-2 rounded-lg"> {{ formataMoeda(produto.price) }}</span></h4>
                    <div class="w-full grid grid-cols-2 justify-end mb-5">
                        <div class="flex justify-center">
                            <button class="bg-red-500 rounded-lg px-4" @click="diminuiUmNaQuantidade(produto.id)"><img class="w-full" src="@/assets/icon-minus.svg" alt="remover um item" /></button>
                            <span class="px-4 font-semibold self-center">{{ produto.quantidade }}</span>
                            <button class="bg-green-800 rounded-lg px-4" @click="adicionaUmNaQuantidade(produto.id)"><img class="w-full" src="@/assets/icon-plus.svg" alt="" /></button>
                        </div>
                        <div class="flex justify-center mb-5">
                            <button class="bg-green-800 font-bold text-sm text-white p-3 rounded-lg" @click="adicionaItemCarrinho(produto.id)">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoadingScreen from "../components/LoadingScreen.vue";
import { useProdutosStore } from '@/store';
import { storeToRefs } from 'pinia';

const store = useProdutosStore();
const { produtos } = storeToRefs(store);

// MÉTODOS DA STORE
const {
    carregaDados,
    adicionaUmNaQuantidade,
    diminuiUmNaQuantidade,
    adicionaItemCarrinho,
} = store;


let images = [];

carregaDados()
    .then(()=> {
        produtos.value.forEach(produto => {
            images.push(produto.thumbnail);
        });
    });
    
const formataMoeda = (valor) => {
    return Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(valor);
};
</script>