<template>

    <div>

        <b-card class="mb-2" style="width: 27rem; ">

            <b-card-header header-class="bg-white border border-0 m-0 p-0">
                <div>
                    <h5>
                        {{ headerTitle }}
                        <span v-if="units.length > 0">

                            ({{ units }})
                        </span>
                        <div class="float-right" v-b-tooltip.hover title="Show tabular form">
                            <b-icon class="float-right" v-if="showGraph" icon="bar-chart-line"
                                @click="showGraph = !showGraph" />
                        </div>
                        <div class="float-right" v-b-tooltip.hover title="Show graphical form">
                            <b-icon class="float-right" v-if="!showGraph" icon="bar-chart-steps"
                                @click="showGraph = !showGraph" />
                        </div>
                    </h5>
                </div>
            </b-card-header>

            <b-card-body body-class="m-0 p-0">

                <div>
                    <div>
                        <apexchart :ref="'chart-' + headerTitle" type="line" :options="options" :series="series">
                        </apexchart>
                    </div>
                </div>

                <div v-if="!showGraph">

                    <b-table striped hover :items="this.series[0].data" :fields="tableFields" responsive="sm"
                        sticky-header borderless small>

                        <template #cell(x)="data">
                            <span>  {{data.item.x.toLocaleDateString("en-US") }}</span>
                        </template>
                    </b-table>

                </div>



            </b-card-body>


        </b-card>


    </div>

</template>


<script>


const axios = require('axios')

export default {
    name: "DashboardCardReport",

    props: {
        userProfile: {
            type: Object,
            default: function () { return {} },
        },

        textBtn: {
            type: String,
            default: "",
            required: true,
        },

        headerTitle: {
            type: String,
            default: "",
            required: true
        },

        units: {
            type: String,
            default: ""
        },
        dataKey: {
            type: String,
            required: false,
            default: 'pBloodPressure'

        }
    },

    data() {
        return {
            userData: [],
            tableFields: [
                { key: 'x', text: "Date/Time", sortable: true },
                { key: 'y', text: "Value", sortable: true },
            ],

            showGraph: false,
            options: {
                chart: {
                    id: 'vuechart-example',
                    height: "auto",
                    width: "auto"
                },
                labbel: {

                },
                xaxis: {
                    type: 'datetime',
                    tickPlacement: 'between',
                    labels: {
                        format: 'm:ss',
                    }
                }
            },
            series: [{
                name: this.headerTitle,
                data: []
            }]
        }
    },

    mounted() {
        this.handle_initial_task()
    },

    methods: {
        handle_data_formatting: function () {
            let _now = new Date().getTime()
            this.userData.forEach((item, count) => {
                this.series[0].data.push({ x: new Date(count * 1000 + _now), y: item[this.dataKey].toFixed(1) })
            })

            this.$refs['chart-' + this.headerTitle].updateSeries(this.series)
        },

        handle_initial_task: async function () {

            if (this.userProfile !== {}) {
                let response = await this.handle_retrieve_user_data(this.userProfile.pEmail, this.userProfile.pPassword);
                if (response.data.error === 0) {
                    this.userData = response.data.data;
                    this.handle_data_formatting()
                }
            }
        },

        handle_retrieve_user_data: async function (email, password) {

            let dataApi = "https://livehealthyfunctions.azurewebsites.net/api/getuserdata?code=KXC8gCm7QJcqG4GYlfwzdC63YhIgnn52nYh_XCN4P47IAzFuo9pkrQ%3D%3D&email=" + email + "&password=" + password;
            let response = await axios({
                method: "get",
                url: dataApi,
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

