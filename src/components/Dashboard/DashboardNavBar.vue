<template>

    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#"> Live Healthy </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav>
                    <b-nav-item href="#" v-b-tooltip.hover title="Monitor your simulated health data here."> Health Data Reports </b-nav-item>
                    <b-nav-item href="#" disabled  v-b-tooltip.hover title="This feature is not currently available."> Live Data Reports </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item   disable>
                        Rachel Green
                    </b-nav-item>

                    <b-nav-item v-b-tooltip.hover title="Edit your profile.">
                        Profile
                    </b-nav-item>
                    <b-nav-item @click="$router.push({path : '/'})">
                        Sign Out
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

</template>


<script>

export default{
    name : "DashboardNavBar",

    data(){
        return {

        }
    }
}

</script>