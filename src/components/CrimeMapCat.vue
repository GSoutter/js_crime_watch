<template lang="html">
  <div id="map">
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'crime-map-cat',

  props: ['selectedCrimesArray'],

  components: {
    L
  },
  data() {
    return {
      zoom: 13,
      // center: [55.86279, -4.25424],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },

  watch: {
    selectedCrimesArray: function(){
      this.map.remove();
      this.reDraw(this.selectedCrimesArray)
    }
  },

  mounted() {
      this.reDraw(this.selectedCrimesArray)
    },

  methods: {
    addMarker(coords, message){
      L.marker(coords).addTo(this.map)
      .bindPopup(message)
    },
    reDraw(crimeArray){
      this.map = null
      this.map = L.map('map');

      this.map.setView(
        [crimeArray[0].location.latitude,
        crimeArray[0].location.longitude],
        this.zoom);

      L.tileLayer(this.url, {attribution: this.attribution}).addTo(this.map);

      for (let crime of crimeArray) {
        this.addMarker([crime.location.latitude,
           crime.location.longitude],
           crime.outcome_status);
      }
    },
  }
}
</script>

<style lang="css" scoped>
#map {
	width:50vw;
	height:40vh;
}
@import "~leaflet/dist/leaflet.css";
</style>
