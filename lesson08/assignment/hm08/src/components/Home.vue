<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <h2>{{ msgtwo }}</h2>



  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import Card from "@/components/Images.vue";

export default {
  name: 'Home',
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





</style>
