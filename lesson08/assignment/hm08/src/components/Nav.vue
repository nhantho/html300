<template>
  <div id="nav">
    <nav class="list-group list-group-horizontal-sm">
      <router-link to="/" activeClass="active-link" class="list-group-item list-group-item-action">Home</router-link>
      <router-link to="/Images" activeClass="active-link" class="list-group-item list-group-item-action">Images</router-link>
      <router-link to="/Accordion" activeClass="active-link" class="list-group-item list-group-item-action">Accordion</router-link>
      <a href="#" class="list-group-item list-group-item-action">Contact</a>
      <router-view/>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
</style>
