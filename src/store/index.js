import { defineStore } from "pinia";
import axios from "axios";

export const useProdutosStore = defineStore("produtosStore", {
    state: () => ({ 
        produtos: []
    }),
    actions: {
        async carregaDados() {
            await axios.get("https://dummyjson.com/products/category/automotive")
                .then(response => {
                    let preProdutos = response.data.products;
                    this.produtos = preProdutos.map(produto => ({
                        ...produto,
                        quantidade: 0,
                    }));
                    console.log(this.produtos);
                })
                .catch(err => {
                    return "Erro ao carregar produtos da API"+err;
                });
        },
        adicionaUmNaQuantidade(idProduto, quantidade) {
            const produto = this.produtos.findIndex(produto => produto.id === idProduto);
            console.log(this.produtos[produto]);
            this.produtos[produto].quantidade = quantidade;
            console.log(this.produtos[produto]);
        },
        removeItemCarrinho(produtoRemovido){
            const produto = this.produtos.findIndex(produto => produto.id === produtoRemovido);
            this.produtos[produto].quantidade = 0;
        }

    },
})