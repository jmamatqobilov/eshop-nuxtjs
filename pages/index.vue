<template>
  <div>
    <Slider />
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4" lg="3" v-for="product of products" :key="product.id">
        <Card :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script >
import Card from '../components/Card.vue';
import Slider from "../components/Slider.vue"

export default {
  components: {
    Card, Slider
  },

  async asyncData({ $axios }) {
    const products = await $axios.$get('http://localhost:4000/api/products')
    console.log(products)
    return { products }
  },
}
</script>

<style scoped>
.title {
  color: #000;
}
</style>
