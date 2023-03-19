<template>
    <section id="destaques" class="grid grid-cols-3">
        <div class="w-full h-96 shadow-lg">
            <!-- <img :src="this.imagem()" alt=""> -->
        </div>
        <div class="w-full">
            
        </div>
        <div class="w-full">
            
        </div>
    </section>
</template>

<script>
    // import axios from 'axios';
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            //this.getProducts();
        },
        methods: {
            // getProducts() {
            //     axios.get('https://fakestoreapi.com/products/1').then(response => {
            //         this.products = response.data;
            //         console.log(this.products[0].imagem);
            //     });
            // },
            // imagem() {
            //     return require(`this.products[0].image`);
            // }
        }
    }
</script>
