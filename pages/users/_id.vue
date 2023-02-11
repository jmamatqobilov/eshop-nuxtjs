<template>
    <div class="detail">
        <h2>User {{ product.title }}</h2>
        <h2>Address {{ product.text }}</h2>
    </div>
</template>

<script>
export default { 

    async asyncData({$axios,params}){
        const product = await $axios.$get('http://localhost:4000/api/products/'+params.id)
        return {product}
    },
    data(){
        return{
            
        }
    },

    methods:{
        
    }
}
</script>

<style scoped>
h2{
    color: #000;
}

.detail{
    background: red;
}
</style>