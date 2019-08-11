<template>
  <div id="app" class="list-group list-group-flush list-group-horizontal-sm">
    <router-link to="/" activeClass="active-link" class="list-group-item list-group-item-action">Home</router-link>
    <router-link to="/Images" activeClass="active-link" class="list-group-item list-group-item-action">Images</router-link>
    <router-link to="/Accordion" activeClass="active-link" class="list-group-item list-group-item-action">Accordion</router-link>
    <a href="form.html" class="list-group-item list-group-item-action">Form</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
