<template>

    <div>

        <b-card class="mb-2" style="width: 35rem;">

            <b-card-header header-class="bg-white border border-0 m-0 p-0">
                <div>
                    <h5>
                        {{ headerTitle }}
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
                        <apexchart  type="line" :options="options" :series="series"></apexchart>
                    </div>
                </div>

                <div v-if="!showGraph">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>

                </div>



            </b-card-body>


        </b-card>


    </div>

</template>


<script>


export default {
    name: "DashboardCardReport",

    props: {
        data: {
            type: Array
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
        }
    },

    data() {
        return {
            showGraph: true,
            options: {
                noData : {text : "No data is found"},
                chart: {
                    id: 'vuechart-example',
                    height : "auto",
                    width : "auto"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        }
    },

}


</script>

