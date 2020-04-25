
<template lang="html">
  <div>
    <h1>Crime Watch</h1>
    <developer-quote></developer-quote>

  </div>
</template>

<script>
import DeveloperQuote from './components/DeveloperQuote.vue'



export default {
  name: 'app',
  date() {
    return {
    crimeData: [],
    developerQuote: ""
    }
  },
  mounted (){

  },
  components: {
    'developer-quote': DeveloperQuote
  }
}
</script>

<style lang="css" scoped>
</style>
