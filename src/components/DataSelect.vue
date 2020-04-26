<template lang="html">
  <div>

    <form v-on:submit.prevent="emitSelection">

      <label for="time-from">Time From</label>
       <input type="month" name="time-from" v-model="dataSelect.date">
      <label for="search-lat">Latitude</label>
       <input type="number" step='any' name="search-late" v-model="dataSelect.lat">
      <label for="search-lon">Longitude</label>
       <input type="number" step='any' name="search-late" v-model="dataSelect.lon">
      <button type="submit" name="button">Find</button>

    </form>

  </div>

</template>

<script>
import {eventBus} from "../main.js"


export default {
  name: 'data-select',
  props: ['searchDate', 'searchLat', 'searchLon'],
  data () {
    return{
      dataSelect: {
        date: '2019-12',
        lat: '51.5415305',
        lon: '-0.1457874'
      }

    }
  },
  methods: {
    emitSelection: function(){
      eventBus.$emit('data-selection', this.dataSelect)

    }
  }

}
</script>

<style lang="css" scoped>

label {
  margin: 2px
}
</style>
