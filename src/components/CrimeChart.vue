<template lang="html">
  <div>
    <GChart
      type="BarChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'crime-chart',
  data(){
    return {
      chartOptions: {
          'title': 'Crime',

          'width': 750,
          'height': 450,
      }
    }
  },
  props: ['crimeDataArr'],
  components: {
    GChart
  },
  computed: {
    chartData: function() {
      //checks if the crime data array is present.
      if (this.crimeDataArr) {
        //formats data for display with google charts show crime type and entry count.
        const chartData = [['Crime', 'Counts']]
        for (let array of this.crimeDataArr) {
          chartData.push([array[0].category, array.length])
        }
        return chartData
      }
    }
  }
  }
</script>

<style lang="css" scoped>
div {
  float: left;
  /* width: 200px; */
  border: solid;
  /* padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px; */

  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
}
</style>
