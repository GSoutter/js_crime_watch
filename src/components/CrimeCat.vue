<template lang="html">
    <tr><td v-on:click="handleClick">{{crimeArray[0].category}}</td> <td>{{crimeArray.length}}</td></tr>
</template>

<script>
import {eventBus} from "../main.js"


export default {
  name: 'crime-cat',
  props: ['crimeArray'],
  methods: {
    handleClick(){
      eventBus.$emit('crime-array-selected', this.crimeArray)
    }
  },
  }
</script>

<style lang="css" scoped>
</style>
