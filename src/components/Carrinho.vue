<template>
    <div class="grid grid-cols-1 absolute top-[6rem] right-[0rem] shadow-lg w-8/12 md:w-3/12 bg-white pb-5">
        <p class="w-full font-bold border-2 border-b-green-800 text-left p-5">Carrinho</p>
        <div v-show="mostrar">
            <p class="text-center pt-5">Não há itens no carrinho.</p>
        </div>
    </div>
</template>

<script setup>
import { useProdutosStore } from '@/store';
import { storeToRefs } from "pinia";

let mostrar = true;
let produtosNoCarrinho = [];
const store = useProdutosStore();
const { produtos } = storeToRefs(store);
//console.log(produtos);
produtos.value.forEach(produto => {
    if (produto.quantidade > 0) {
        if (mostrar === true) {
            mostrar = false;
        }
        produtosNoCarrinho.push(produto);
        console.log(produtosNoCarrinho);
    }
});

</script>