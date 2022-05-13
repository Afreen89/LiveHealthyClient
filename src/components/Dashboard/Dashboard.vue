<template>

    <div>
        <!-- <DashboardNavBar  :userName="'username'" /> -->
        <DashboardNavBar  :userName="userProfile.pFirstName + ' ' + userProfile.pLastName " />
            
        <b-container fluid>

            <b-row class="p-3">
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" :headerTitle="'Heart Rate'" />
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" :headerTitle="'Blood Pressure'" />
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" :headerTitle="'Weight'" />
            </b-row>

            <!-- <b-row class="p-3">
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" />
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" />
                <DashboardCardReport class="m-4" :data="data" :textBtn="textBtn" />
            </b-row> -->

        </b-container>
        
    </div>


</template>


<script>

import DashboardNavBar from "@/components/Dashboard/DashboardNavBar.vue"
import DashboardCardReport from "@/components/Dashboard/DashboardCardReport.vue"


export default {
    name: "Dashboard",

    components: {
        DashboardNavBar,
        DashboardCardReport
    },

    data() {
        return {
            textBtn : "Update Blood Pressure",
            data : [],
            userProfile : {}
        }
    },

    mounted(){
        this.userProfile = this.$route.params.data;
    }


}


</script>