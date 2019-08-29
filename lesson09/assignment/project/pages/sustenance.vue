<template>

  <div class="row container">
      <h1 class="heading">Sustenance</h1>
      <Accordion />
  </div>

</template>

<script>

import Accordion from '~/components/Accordion.vue';

export default {
  components: {
    Accordion
  }
}
</script>

<style lang="scss">
.container {
  padding-top: 4em;
  padding-left: 3em;
}


html, body {
  height: 100%;
}

.row {
    min-height: 100%;
}
</style>
