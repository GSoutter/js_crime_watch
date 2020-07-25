
<template lang="html">
  <div>
    <h1>Crime Watch</h1>
    <developer-quote></developer-quote>

    <p>Please enter you desired location to search, default is camden market. <a href="https://gridreferencefinder.com/">Grid Reference Finder</a> can be used to find this</p>
    <p>Data uses police data api, note crime data for scotland is limited as only the transport police feed into the database.</p>
    <p>Click on a catgory to see a list of the crimes and their locations</p>
    <data-select
    :searchDate="this.searchDate"
    :searchLat="this.searchLat"
    :searchLon="this.searchLon"
    ></data-select>


    <crime-chart
    :crimeDataArr="this.crimeDataArr"
    ></crime-chart>

    <crime-map-cat
    v-if="this.selectedCrimesArray"
    :selectedCrimesArray="this.selectedCrimesArray"
    ></crime-map-cat>


    <br>
    <crime-cat-list
    :crimeData="this.crimeDataArr"
    ></crime-cat-list>

    <crime-cat-detail
    v-if="this.selectedCrimesArray"
    :selectedCrimesArray="this.selectedCrimesArray"
    ></crime-cat-detail>

  </div>
</template>

<script>
import DeveloperQuote from './components/DeveloperQuote.vue'
import CrimeCatList from './components/CrimeCatList.vue'
import CrimeCatDetail from './components/CrimeCatDetail.vue'
import DataSelect from './components/DataSelect.vue'
import CrimeChart from './components/CrimeChart.vue'
import CrimeMapCat from './components/CrimeMapCat.vue'
import {eventBus} from "./main.js"




export default {
  name: 'app',
  data() {
    return {
    crimeDataArr: null,
    crimeDataObj: null,
    selectedCrimesArray: null,
    searchDate: '2019-12',
    searchLat: '51.5415305',
    searchLon: '-0.1457874'
    }
  },
  mounted (){
    this.fetchData()

    eventBus.$on('crime-array-selected', (array)=> {
      this.selectedCrimesArray = array;
    })

    eventBus.$on('data-selection', (dataSelect)=> {
      this.searchDate = dataSelect.date;
      this.searchLat = dataSelect.lat;
      this.searchLon = dataSelect.lon;
      this.fetchData()
    })
  },

  methods: {
    fetchData: function(){
      //fetching data from police data API
      fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${this.searchLat}&lng=${this.searchLon}&date=${this.searchDate}`)
      .then(res => res.json())
      .then(data => {

        //creating an object from the data to sort into groups
        const crimeDataObject = {}
        for (let entry of data) {
          // check if category is within object, if not new array created
          if (crimeDataObject[`${entry.category}`] === undefined){
            crimeDataObject[`${entry.category}`] = []
          }
          crimeDataObject[`${entry.category}`].push(entry)
        }
        this.crimeDataObj = crimeDataObject

        //creating array of crimes. To allow for easy sorting of most crimes.
        const crimeDataArray = []
        for (let key in crimeDataObject) {
          crimeDataArray.push(crimeDataObject[`${key}`])
        }
        // sorting and reversion array to get most crimes first.
        this.crimeDataArr = crimeDataArray.sort().reverse()
      })
    }
  },

  components: {
    'developer-quote': DeveloperQuote,
    'crime-cat-list': CrimeCatList,
    'crime-cat-detail': CrimeCatDetail,
    'data-select': DataSelect,
    'crime-chart': CrimeChart,
    'crime-map-cat': CrimeMapCat,
  }
}
</script>

<style lang="css" scoped>
</style>
