<template>

    <div class="mt-5">

        <b-card title="Sign In" class="mb-2  card-custom-style">


            <b-card-body class="p-4">

                <div class="float-left">
                    Email
                </div>
                <b-input placeholder="Enter your email here.." type="email" v-model="email">
                </b-input>

                <div class="float-left mt-2">
                    Password
                </div>
                <b-input placeholder="Enter your password here.." type="password" v-model="password">
                </b-input>

                <span class="text-danger" v-if="showError">
                    {{ errorMsg }}
                </span>

                <a class="float-right mt-1 text-secondary ">
                    <span class="text-secondary">
                        Forgot password?
                    </span>
                </a>

                <b-button class="mt-5" block variant="outline-primary" @click="handle_user_signin">
                    <b-spinner v-if="showSpinner" label="Spinning"></b-spinner>
                    <span v-if="!showSpinner">
                        Sign Me In
                    </span>
                </b-button>

                <b-button class="mt-3" block variant="outline-info" @click="handle_user_signup">Sign Up</b-button>

            </b-card-body>

        </b-card>

    </div>

</template>


<script>


const axios = require('axios')

export default {
    name: "SignInComponent",
    data() {
        return {
            showSpinner : false,
            email: "",
            password: "",
            showError: false,
            errorMsg: "",

        }
    },

    methods: {
        handle_user_signin: async function () {
            this.showSpinner = true
            if (this.email !== "" && this.password !== "") {
                let response = await this.handle_sign_in_request();
                console.log("Sign In Response: ", response)
                if (response.data.error == 0) {
                    let data = response.data.data
                    this.$router.push({ 
                        name: "dashboard", //use name for router push
                        params: { data }
                     })
                } else {
                    this.showError = true;
                    this.errorMsg = response.data.message
                }
            }
            this.showSpinner = false
        },

        handle_user_signup: function () {
            this.$router.push({ path: "/signup" })
        },

        handle_sign_in_request: async function () {

            let signInApi = "https://livehealthyfunctions.azurewebsites.net/api/signinfunction?code=mufxVRh3gEVnXk1BaNnp5L5zi0Xiv3dKn46058LRoPvbAzFuf06ECA%3D%3D&email=" + this.email + "&password=" + this.password;
            let response = await axios({
                method: "get",
                url: signInApi,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json; charset=utf-8",
                },
            })

            return response

        }
    }
}


</script>

<style scoped>
.card-custom-style {
    max-width: 50%;
    margin: 0 auto;
    /* Added */
    float: none;
    /* Added */
    margin-bottom: 10px;
    /* Added */

}
</style>