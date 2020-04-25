<template lang="html">
  <div>

    <p>Developer Quote:</p>
    <p>"{{developerQuote}}"</p>
    <p>{{author}}</p>
  </div>
</template>

<script>
export default {
  name: "developer-quote",
  data() {
    return {
      developerQuote: '',
      author: ''
    }
  },
  mounted() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      this.developerQuote = data.en
      this.author = data.author
    })

  }



}

</script>

<style lang="css" scoped>
div {
  float: right;
  width: 200px;
  border: solid;
  padding: 4px;
}

</style>
