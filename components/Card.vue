<template>
  <v-card v-if="product" :loading="loading" class="card-section mx-auto my-2" max-width="360" elevation="0">
    <template slot="progress">
      <v-progress-linear color="yellow" height="6" indeterminate></v-progress-linear>
    </template>


    <nuxt-link :to="`/products/${product.id}`">
      <v-img height="400" :src="product.image"></v-img>
    </nuxt-link>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      
        <div class="rating">
          <v-rating :value="product.avg" color="amber" dense half-increments readonly size="14"></v-rating>

          <div class="grey--text">
            {{ product.avg }} ({{ product.count }})
          </div>
        </div>
      

      <div class="mt-4 text-subtitle-1">
        {{ product.text }}
      </div>
    </v-card-text>

    <v-divider class="mx-2"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        <v-icon color="white">
          mdi-cart
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Card',
  data: () => ({
    loading: false,
    selection: 1,
  }),

  
  

  props: {
    product: {

    }
  },

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

.card-section{
  background: rgb(87, 87, 87);
}
.rating{
  display: flex;
  align-items: center;
}
</style>