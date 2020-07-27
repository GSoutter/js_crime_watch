<template lang="html">
  <div>
    <div id="chart-border">
      <GChart
        type="BarChart"
        :data="chartData"
        :options="chartOptions"
      />

    </div>

  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'crime-chart',
  data(){
    return {
      chartOptions: {
          'title': 'Crime Logs by Category',

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



#chart-border {
    border: solid;

}


</style>
