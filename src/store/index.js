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
                    this.produtos = response.data.products;
                })
                .catch(err => {
                    return "Erro ao carregar produtos da API"+err;
                });
        }
    },
})