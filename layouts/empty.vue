<template>
    <v-app class="empty-layout">
        <nuxt/>
    </v-app>
</template>
<script>

export default {  
  name: 'Empty',
  data() {
    return {
      
    }
  }
}
</script>


<style scoped>
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  
}






.empty-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 100vh;
}
</style>