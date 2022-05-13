<template>

    <div class="mt-5">

        <b-card title="Sign In" class="mb-2  card-custom-style" 
        >


            <b-card-body class="p-4">

                <div class="float-left">
                    Email
                </div>
                <b-input
                    placeholder="Enter your email here.."
                    type="email"
                    v-model="email"
                >
                </b-input>

                <div class="float-left mt-2">
                    Password
                </div>
                <b-input

                    placeholder="Enter your password here.."
                    type="password"
                    v-model="password"
                >
                </b-input>

                <a class="float-right mt-1 text-danger ">
                    <span class="text-danger">
                        Forgot password?
                    </span>
                </a>


                <b-button class="mt-5" block variant="outline-primary"
                    @click="handle_user_signin"
                >Sign In</b-button>
    
                <b-button class="mt-3" block variant="outline-info"
                    @click="handle_user_signup"
                >Sign Up</b-button>
    
        </b-card-body>

        </b-card>

    </div>

</template>


<script>

export default{
    name : "SignInComponent",
    data(){
        return {
            email : "",
            password : "",

        }
    },

    methods : {
        handle_user_signin : function(){
            this.$router.push({path : "/dashboard"})
        },

        handle_user_signup : function(){
            this.$router.push({path : "/signup"})

        }
    }
}


</script>

<style>

.card-custom-style {
    max-width: 50%;
     margin: 0 auto; /* Added */
    float: none; /* Added */
    margin-bottom: 10px; /* Added */

}

</style>