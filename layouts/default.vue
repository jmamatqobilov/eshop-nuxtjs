<template>
  <div class="section-1 dark">
    <!-- <v-app-bar dense :clipped-left="clipped" fixed app class="dark:bg-slate-300">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="haeder-link">E commerce</v-toolbar-title>
      <nuxt-link to="/">
        <v-toolbar-title class="haeder-link">
          <li>Home</li>
        </v-toolbar-title>
      </nuxt-link>
      <nuxt-link to="/users">
        <v-toolbar-title class="haeder-link">
          <li>Users</li>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-title @click.prevent="logout" class="haeder-link">
        <li>Logout</li>
      </v-toolbar-title>
      <nuxt-link to="/login">
        <v-toolbar-title class="haeder-link">
          <li>Login</li>
        </v-toolbar-title>
      </nuxt-link>
      <div class="account-user">
        c
      </div>
      <div class="">

      </div>
    </v-app-bar> -->
    <Navbar />
    <v-main class="dark:bg-gray-900">
      <Nuxt keep-alive />
    </v-main>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.$router.push("/");
            console.log("logout");
        },
        //     NO VUEX BASIC VUE LIFECYCLE
        // async getUser(){
        //   const token = localStorage.getItem('token')
        //   console.log(token)
        //   const config = {
        //             headers: { 'Authorization': `Bearer ${token}` }
        //         }
        //   await this.$axios.$get('http://localhost:4000/api/user',config)
        //   .then((res)=>{
        //     res
        //     console.log(res)
        //     this.$store.commit('setUser',res)
        //   })
        // }
        getUser() {
            this.$store.dispatch("getUser");
        }
    },
    mounted() {
        if (!this.userN) {
            this.getUser();
        }
        let cart = JSON.parse(localStorage.getItem('prcart'));
        if(cart) {
          this.$store.commit('setAllCart', cart)
        }
    }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

li:hover {
  color: white;
  transition: 0.6s ease;
}

a {
  text-decoration: none;
  padding: 0 20px;
  color: white;
}


.section-1 {
  background-color: #fff;
}

.haeder-link {
  color: #000;
  font-size: 16px;
  padding: 0 10px;
  cursor: pointer;
}

.navbar-items {
  margin: 0 auto;
  align-items: center;

}

.appbar-color {
  background-color: rgb(255, 175, 2);
}

.lists-driwer {
  margin-top: 20px;
}

.list-drawer-list {
  padding: 0 16px;
}

.options {
  width: 200px;
  margin-top: 40px;
  background-color: rgb(255, 255, 255);

}



.options-item {
  flex-direction: column;
  display: flex;
}

.title-user {
  color: #000;
  padding: 10px 20px;
  text-align: start;
  font-size: 16px;
}

.title-email {
  color: #727272;
  font-size: 12px;
}

.account-user {
  background-color: #000;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}



body {
  font-family: 'Montserrat', sans-serif;
}

body::-webkit-scrollbar-track {
  background: #e0cffa;

}

body::-webkit-scrollbar {
  width: 10px;

  padding: 0 1px;
  background-color: #c2f5d6;
}

body::-webkit-scrollbar-thumb {
  background-color: #1a86da;
  border-radius: 10px;
}</style>
