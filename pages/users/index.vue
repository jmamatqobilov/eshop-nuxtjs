
<template>
    <div>
      <v-card>
        <ul>
          <li v-for="(product,index) of products" :key="index">
            <a @click.prevent="openUser(product)">{{ product.title }}</a>
          </li>
        </ul>
      </v-card>
    </div>
  </template>
  
  
  <script>
  
  
  
  export default {
    
    async asyncData({$axios}){
        const products = await $axios.$get('http://localhost:4000/api/products')
        return {products}
    },
    data() {
      return {
        
      }
    },
  
    methods: {
      openUser(product){
        this.$router.push('/users/'+product.id)
      }
    },
  
  
  
    
  }
  </script>
  