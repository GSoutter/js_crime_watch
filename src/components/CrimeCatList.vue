<template lang="html">

<div>
  <table>
    <tr><th>Crime Category</th> <th>Count</th></tr>
    <crime-cat v-for= "(crimeArray) in crimeData" :crimeArray="crimeArray" ></crime-cat>
  </table>
</div>

</template>

<script>
import CrimeCat from './CrimeCat.vue'



export default {
  name: 'crime-cat-list',
  data(){
    return {

    }
  },
  props: ['crimeData'],
  components: {
    'crime-cat': CrimeCat
  }

}


</script>

<style lang="css" scoped>

div {
  float: left;
  /* width: 200px; */
  border: solid;
  padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px;

  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
}

</style>
