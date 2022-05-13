<template>

    <div>
        <DashboardNavBar />
            
        <b-container>

            <b-row class="p-3">
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
            </b-row>

            <b-row class="p-3">
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
                <DashboardCardReport class="m-4" data="data" textBtn="textBtn" />
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
            textBtn : "Update Blood Pressure",
            data : []
        }
    },


}


</script>