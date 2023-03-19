<template>
    <div v-show="isLoading" class="w-full h-[50vw] flex justify-center items-center">
        <LoadingScreen />
    </div>
    <div v-show="!this.isLoading" class="grid grid-cols-1 md:grid-cols-3  gap-2 mt-10">
        <div v-for="item in this.products" :key="item.id" class="shadow-lg rounded-lg border-2 flex">
            <div class="grid grid-cols-1 rounded-lg text-white">
                <img class="w-fit max-h-40 rounded-lg shadow-lg" :src="item.images[0]" :alt="item.name">
                <div class="text-left text-green-700 mt-2">
                    <p class="font-bold">{{item.title}}</p>
                    <p class="font-bold text-left mb-5">{{this.formatMoney(item.price, "BRL")}}</p>
                    <p class="text-left">{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import LoadingScreen from "../components/LoadingScreen.vue";

    export default {
        data() {
            return {
                products: null,
                isLoading: true,
            }
        },
        components: {
            LoadingScreen
        },
        async created() {
            await this.fetch();
        },
        methods: {
            async fetch() {
                    await axios.get("https://dummyjson.com/products")
                        .then(response => {
                            this.products = response.data.products;
                            this.isLoading = false;
                        }).catch(error => {
                            alert("Erro, tente novamente mais tarde!");
                            console.log(error);
                        })
                
            },
            formatMoney(value, currency) {
                return new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: currency
                }).format(value);
            }
        }
    }

</script>