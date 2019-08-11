<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msgtwo }}</h2>

    <div v-if="Math.random() > 0.5">
      <button type="button" name="button" class="morning-button">Good Morning</button>
    </div>
    <div v-else>
      <button type="button" name="button" class="evening-button">Good Evening</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Home Page',
      msgtwo: 'Welcome!',
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


button {
  padding: 1em;
  border-radius: 25%;
  text-shadow: 1px 1px black;
  color: white;
  &.morning-button {
    background-image: linear-gradient(red, yellow);
  }
  &.evening-button {
    background-image: linear-gradient(purple, blue);
  }
}





</style>
