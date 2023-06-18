export const state = () => ({
    token: null,
    user: null,
    userName: '',
    cart: []
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        state.user = user
        state.userName = user.username
        state.user = localStorage.getItem('user')
    },
    addCard(state, product) {
        state.cart.push({ ...product, quantity: 1 });
        localStorage.setItem('prcart', JSON.stringify(state.cart))
    },
    rmCart(state, prId) {
        let index = state.cart.findIndex(pr => pr.id === prId);
        state.cart.splice(index, 1);
        localStorage.setItem('prcart', JSON.stringify(state.cart))
    },
    incQ(state, prId) {
        let index = state.cart.findIndex(pr => pr.id === prId);
        state.cart[index].quantity++;
        localStorage.setItem('prcart', JSON.stringify(state.cart))
    },
    decQ(state, prId) {
        let index = state.cart.findIndex(pr => pr.id === prId);
        if (state.cart[index].quantity === 1) {
            state.cart.splice(index, 1);
        } else {
            state.cart[index].quantity--;
        }
        localStorage.setItem('prcart', JSON.stringify(state.cart))
    },
    setAllCart(state, allcart) {
        state.cart = allcart;
    }
}

export const actions = {
    register({ commit }, formValue) {
        const { email, password, username } = formValue
        this.$axios.post('http://localhost:4000/api/register', {
            username: username,
            email: email,
            password: password
        })
            .then((respons) => {
                localStorage.setItem('user', JSON.stringify(respons.data.user))
                localStorage.setItem('token', respons.data.token)
                commit('setUser', respons.data.user)
                commit('setToken', respons.data.token)
                this.isAuth = true
                this.$router.push('/')
                console.log("register")
            })
    },

    login({ commit }, formValue) {
        const { email, password } = formValue
        this.$axios.post('http://localhost:4000/api/login', {
            email: email,
            password: password
        })
            .then((respons) => {
                localStorage.setItem('user', JSON.stringify(respons.data.user))
                localStorage.setItem('token', respons.data.token)
                commit('setUser', respons.data.user)
                commit('setToken', respons.data.token)
                this.$router.push('/')
                console.log("login succes")
            })
    },

    async getUser({ commit }) {
        const token = localStorage.getItem('token')
        console.log(token)
        const config = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        await this.$axios.$get('http://localhost:4000/api/user', config)
            .then((res) => {
                res
                console.log(res)
                commit('setUser', res)
            }).catch((e) => {
                return e
            })
    }


}

export const getters = {
    userName(state) {
        return state.userName
    },
    cart(state) {
        return state.cart
    }
}

