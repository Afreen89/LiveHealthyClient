<template>

    <b-modal id="change-password-modal" title="Forgot Password?" @ok="handle_password_retrieval">

        <div class="float-left">
            First Name
        </div>
        <b-input placeholder="Enter your first name here.." type="text" v-model="firstName">
        </b-input>

        <div class="float-left">
            Last Name
        </div>
        <b-input placeholder="Enter your last name here.." type="text" v-model="lastName">
        </b-input>

        <div class="float-left mt-2">
            Email
        </div>
        <b-input placeholder="Enter your email here.." type="email" v-model="email">
        </b-input>

        <span class="text-danger mt-3 ml-1 " v-if="showError">
            {{ errorMsg }}
        </span>


        <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="outline-danger" @click="cancel()">
                Close
            </b-button>

            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="outline-info" @click="ok()">
                Retrieve Password
            </b-button>
        </template>

    </b-modal>

</template>

<script>

const axios = require('axios')

const {EditUserProfileApi} = require("@/api/api")

export default {
    name: "ChangePasswordRequesT",

    data() {
        return {
            showError: false,
            errorMsg: "",
            firstName: "",
            lastName: "",
            email: ""
        }
    },

    methods: {
        handle_password_retrieval: async function (e) {
            e.preventDefault()
            let response = await this.handle_is_info_correct()
            
            if (response.data.error === 0){
                this.showError = true
                this.errorMsg = "You password is " + response.data.data.pPassword
            } else {
                this.showError = true
                this.errorMsg = response.data.message
            }

        },

        handle_is_info_correct : async function() {

            let request =  "&email=" + this.email + "&firstName=" + this.firstName + "&lastName=" + this.lastName
            let response = await axios({
                method: "get",
                url: EditUserProfileApi + request,
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