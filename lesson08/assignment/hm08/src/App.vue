<template>
<b-container id="app">
  <b-row>
    <b-col>
      <Nav/>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <router-view/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: 'App',
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
