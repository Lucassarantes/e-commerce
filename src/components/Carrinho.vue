<template>
    <div class="grid grid-cols-1 absolute top-[6rem] right-[0rem] shadow-lg w-8/12 md:w-3/12 bg-white pb-5">
        <p class="w-full font-bold border-2 border-b-green-800 text-left p-5">Carrinho</p>
        <div v-show="!produtosNoCarrinho.value">
            <p class="text-center pt-5">Não há itens no carrinho.</p>
        </div>
        <div v-show="produtosNoCarrinho.value">
            <div v-for="produto in produtosNoCarrinho.value" :key="produto.id">
                <img :src="produto.thumbnail" alt="">
                <p>Quantidade: {{ produto.quantidade }}</p>
                <p>Preço unitário: {{ formataMoeda(produto.price) }} Valor total: {{ formataMoeda(produto.price * produto.quantidade) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProdutosStore } from '@/store';
import { storeToRefs } from "pinia";
import { ref } from "vue";

let mostrar = true;
let produtosNoCarrinho = ref([]);
const store = useProdutosStore();
const { produtos } = storeToRefs(store);
//console.log(produtos);


produtos.value.forEach(produto => {
    if (produto.quantidade > 0) {
        if (mostrar === true) {
            mostrar = false;
        }
        produtosNoCarrinho.value.push(produto);
        console.log(produtosNoCarrinho.value);
    }
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