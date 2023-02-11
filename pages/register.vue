
<template>
    <div class="login-form">
        <h2>Register</h2>
        <v-form method="post" id="nativeForm" v-model="valid" ref="form">

            <v-row>
                <v-col cols="12">
                    <v-text-field label="Name" v-model="username" :rules="nameRules" required
                        name="message"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required
                        name="mail"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Password" v-model="password" :rules="passwordRules" required name="password"></v-text-field>
                </v-col>
                <v-col cols="12" class="submit-auth">
                    <v-btn @click.prevent="sendData" color="green">submit</v-btn>
                    <nuxt-link to="/login">
                        <div class="">Login</div>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script >

export default {
    layout: 'empty',

    data() {
        return {
            isLoading: false,
            valid: true,
            username: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 15 || 'Name must be less than 10 characters'
            ],
            email: '',
            password: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            passwordRules:[
                (v) => !!v|| 'Password is required'
            ]
        }
    },

    methods: {
        sendData() {
            const formValue = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            this.$store.dispatch("register", formValue)
            this.$refs.form.validate()
        }
    }
}   
</script>

<style>
h2 {
    color: rgb(121, 121, 121);
}

.login-form {

    align-items: center;
    justify-content: center;
    margin-top: 80px;
    border-radius: 10px;
    padding: 50px 40px;
    background-color: rgb(255, 213, 0);
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.login-btn {
    width: 500px;
}

.submit-auth {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>