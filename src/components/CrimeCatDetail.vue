<template lang="html">
  <div>
    <h3>{{selectedCrimesArray[0].category}}</h3>
    <table>

      <tr><th>Location</th><th>Outcome</th><th>Date</th></tr>
      <tr v-for= "crime in selectedCrimesArray">
        <td>{{crime.location.street.name}}</td>
        <td v-if='(crime.outcome_status !== null)'>{{crime.outcome_status.category}}</td>
        <td v-if='(crime.outcome_status === null)'>null</td>
        <td v-if='(crime.outcome_status !== null)'>{{crime.outcome_status.date}}</td>
        <td v-if='(crime.outcome_status == null)'>null</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'crime-cat-detail',
  props: ['selectedCrimesArray']
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
