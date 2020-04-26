<template lang="html">
  <div>

    <p>Developer Quote:</p>
    <p>"{{developerQuote}}"</p>
    <p id= "author-quote">{{author}}</p>
  </div>
</template>

<script>
export default {
  name: "developer-quote",
  data() {
    return {
      developerQuote: '',
      author: '',

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
  padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px;

  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
}

p {
  padding: -10px 0px 0px 0px;
  margin: 2px 0px 0px 0px;
  margin: 4px 4px 4px 4px;


}

#author-quote {
  text-align: right
}
</style>
