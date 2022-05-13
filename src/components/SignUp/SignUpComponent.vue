<template>

    <div class="mt-5">

        <b-card title="Sign Up" class="mb-2  card-custom-style">
            <b-card-body class="p-4">

                <!-- <b-form @submit="handle_user_signup" @reset="handle_go_back"> -->

                <div class="float-left mt-2">
                    First Name*
                </div>
                <b-input placeholder="Enter your first name here.." type="text" required v-model="firstName">
                </b-input>

                <div class="float-left mt-2">
                    Last Name*
                </div>
                <b-input placeholder="Enter your last name here.." type="text" required v-model="lastName">
                </b-input>

                <div class="float-left mt-2">
                    Age*
                </div>
                <b-input placeholder="Enter your age here.." type="number" required v-model="age">
                </b-input>

                <div class="float-left mt-2">
                    Gender*
                </div>
                <b-form-select v-model="gender" :options="genderOptions" required size="sm" class="mt-3" type="text"
                    value-field="value" text-field="text"></b-form-select>


                <div class="float-left mt-2">
                    Email*
                </div>
                <b-input placeholder="Enter your email here.." required type="email" v-model="email">
                </b-input>

                <div class="float-left mt-2">
                    Comfirm Email*
                </div>
                <b-input placeholder="Enter your email here again.." required type="email" v-model="emailConfirm">
                </b-input>

                <div class="float-left mt-2">
                    Password*
                </div>
                <b-input placeholder="Enter your password here.." required type="password" v-model="password">
                </b-input>

                <div class="float-left mt-2">
                    Confirm Password*
                </div>
                <b-input placeholder="Enter your password here again.." required type="password"
                    v-model="passwordConfirm">
                </b-input>

                <span class="text-danger mt-2 pt-2" v-if="showError">
                    {{ errorMsg }}
                </span>

                <b-button class="mt-5" block variant="outline-primary" required @click="handle_user_signup">
                    <b-spinner v-if="showSpinner" label="Spinning"></b-spinner>
                    <span v-if="!showSpinner">
                        Sign Me Up
                    </span>
                </b-button>

                <b-button class="mt-3" block variant="outline-danger" required @click="handle_go_back">Go Back
                </b-button>


                <!-- </b-form> -->

            </b-card-body>

        </b-card>

    </div>

</template>

<script>

const axios = require('axios')

export default {
    name: "SignUpComponent",
    data() {
        return {
            showSpinner: false,
            showError: true,
            errorMsg: "Error",
            firstName: "",
            lastName: "K",
            age: 30,
            email: "arshad@gmail.com",
            emailConfirm: "arshad@gmail.com",
            password: "123",
            passwordConfirm: "123",
            gender: "Male",

            genderOptions: [
                { key: 0, value: null, text: "Please select an option." },
                { key: 1, value: "Male", text: "Male" },
                { key: 2, value: "Female", text: "Female" },
                { key: 3, value: "Other", text: "Other" },
            ]
        }
    },

    methods: {

        handle_go_back: function () {
            this.$router.push({ path: "/" })
        },

        handle_user_signup: async function () {

            if (this.email == this.emailConfirm) {
                if (this.password == this.passwordConfirm) {
                    this.showSpinner = true
                    let response = await this.handle_user_signup_request()
                    console.log("Respoinse: ", response)
                    if (response.data.error === 0) {
                        this.$router.push({ path: "/" })
                    } else {
                        console.error("Error: ", response.data)
                        this.showError = true;
                        this.errorMsg = response.data.message
                    }
                } else {
                    this.showError = true;
                    this.errorMsg = "Password do not match!"
                }
            } else {
                this.showError = true;
                this.errorMsg = "Email do not match!"
            }


            this.showSpinner = false
        },

        handle_user_signup_request: async function () {

            let signInApi = "https://livehealthyfunctions.azurewebsites.net/api/signupfunction?code=k8A0fs1VcrY_tCFDqtbZ0Kmdqb-GMFpBlIfy0jjPJrHkAzFu_wrdgQ%3D%3D" + "&firstName=" + this.firstName + "&lastName=" + this.lastName + "&email=" + this.email + "&password=" + this.password + "&age=" + this.age + "&gender=" + this.gender
            let response = await axios({
                method: "post",
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