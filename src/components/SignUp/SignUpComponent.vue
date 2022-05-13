<template>

    <div class="mt-5">

        <b-card title="Sign Up" class="mb-2  card-custom-style">
            <b-card-body class="p-4">

                <div class="float-left mt-2">
                    First Name*
                </div>
                <b-input placeholder="Enter your first name here.." type="text" v-model="firstName">
                </b-input>

                <div class="float-left mt-2">
                    Last Name*
                </div>
                <b-input placeholder="Enter your last name here.." type="text" v-model="lastName">
                </b-input>

                <div class="float-left mt-2">
                    Age*
                </div>
                <b-input placeholder="Enter your age here.." type="number" v-model="age">
                </b-input>

                <div class="float-left mt-2">
                    Gender*
                </div>
                <b-form-select v-model="gender" :options="genderOptions" size="sm" class="mt-3"
                    value-field="value" text-field="text"
                ></b-form-select>


                <div class="float-left mt-2">
                    Email*
                </div>
                <b-input placeholder="Enter your email here.." type="email" v-model="email">
                </b-input>

                <div class="float-left mt-2">
                    Comfirm Email*
                </div>
                <b-input placeholder="Enter your email here again.." type="email" v-model="emailConfirm">
                </b-input>

                <div class="float-left mt-2">
                    Password*
                </div>
                <b-input placeholder="Enter your password here.." type="password" v-model="password">
                </b-input>

                <div class="float-left mt-2">
                    Confirm Password*
                </div>
                <b-input placeholder="Enter your password here again.." type="password" v-model="passwordConfirm">
                </b-input>

                <b-button class="mt-5" block variant="outline-primary" @click="handle_user_signup">Sign Me Up</b-button>

                <b-button class="mt-3" block variant="outline-danger" @click="handle_go_back">Go Back</b-button>

            </b-card-body>

        </b-card>

    </div>

</template>

<script>

export default{
    name : "SignUpComponent",
    data(){
        return{
            firstName : "",
            lastName : "",
            age : null,
            email : "",
            emailConfirm : "",
            password : "",
            passwordConfirm : "",
            gender : null,

            genderOptions : [
                { key : 0, value : null, text : "Please select an option." },
                { key : 1, value : "Male", text : "Male"  },
                { key : 2, value : "Female",text : "Female"  },
                { key : 3, value : "Other", text : "Other" },
            ]
        }
    },

    methods : {
        handle_go_back : function(){
            this.$router.push({path : "/"})
        },

        handle_user_signup : function(){
            this.$router.push({path : "/"})
        }
    }
}

</script>