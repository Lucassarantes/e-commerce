<template>
    <div class="grid grid-cols-3 gap-10 justify-center">
        <div v-for="item in this.products" :key="item.id" class="shadow-lg rounded-lg border-2 w-10/12 flex">
            <div class="grid grid-cols-2 rounded-lg bg-green-700">
                <div>
                    <img :src="item.image" :alt="item.name">
                    <p class="font-bold">{{item.title}}</p>
                    <p class="font-bold">R${{item.price}}</p>
                </div>
                <div>
                    <p class="text-left">{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                products: null
            }
        },
        async created() {
            await this.fetch();
            console.log(this.products);
        },
        methods: {
            async fetch() {
                const response = await axios.get("https://fakestoreapi.com/products");
                this.products = response.data;
            }
        }
    }

</script>