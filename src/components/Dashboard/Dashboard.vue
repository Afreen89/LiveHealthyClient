<template>

    <div>
        <!-- <DashboardNavBar  :userName="'username'" /> -->
        <DashboardNavBar :userName="userProfile.pFirstName + ' ' + userProfile.pLastName" />

        <b-container fluid>

            <b-row class="m-4">
                <DashboardCardReport class="mr-2" :userProfile="userProfile" :textBtn="textBtn" :headerTitle="'Heart Rate'" :units="'BPM'" :dataKey="'pHeartRate'" />
                <DashboardCardReport class="mr-2" :userProfile="userProfile"  :textBtn="textBtn" :headerTitle="'Blood Pressure'"  :units="'mmHg'" :dataKey="'pBloodPressure'" />
                <DashboardCardReport class="mr-2" :userProfile="userProfile"  :textBtn="textBtn" :headerTitle="'Temperature'"  :units="'C'" :dataKey="'pTemperature'" />
                <DashboardCardReport class="mr-0" :userProfile="userProfile" :textBtn="textBtn" :headerTitle="'Weight'" :units="'Kg'" :dataKey="'pWeight'" />
            </b-row>

            <b-row class="p-3">
            </b-row>

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
            textBtn: "Update Blood Pressure",
            userData: [],
            userProfile: {}
        }
    },

    created() {
        this.userProfile = this.$route.params.data;
    },

    methods: {


    }


}


</script>