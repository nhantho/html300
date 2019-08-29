<template>

  <div class="row">
    <div class="main col-sm-8 h-100 d-inline-block">
      <h1 class="text-warning">WELCOME</h1>
      <p><em>Duis ut lacus non justo laoreet <mark>varius euismod</mark> faucibus ante.</em></p>
      <p>Ut congue sem eu mattis efficitur. Nunc sed feugiat eros. Vivamus commodo nisl ornare tellus pulvinar, at aliquam odio gravida.</p>
      <h4 class="text-info">Quisque ac est neque.</h4>
      <p>Vivamus elementum ante elit. Ut vulputate vitae risus at euismod. Morbi elementum sem massa, a volutpat lacus accumsan non.</p>
      <h4 class="text-info">Cras a aliquet quam, ut rutrum risus.</h4>
      </p>Aliquam in sem ornare nunc eleifend bibendum ac ut neque. Nam molestie est commodo, rutrum leo quis, viverra est. Suspendisse nisl mauris, facilisis sed ipsum in, fringilla interdum lorem.</p>
      <p>Aenean porttitor imperdiet tellus. Duis tellus arcu, condimentum non nisl quis, placerat consequat nulla. Nunc suscipit at eros eget aliquet. In non nunc ut quam feugiat porta.</p>
    </div>

    <div class="sidebar col-sm-4 bg-secondary h-100 d-inline-block">
      <h2 class="text-warning">Viverra Sed Nibt</h2>
      <p class="text-light">Cras ac ex nec purus luctus iaculis.</p>
      <p class="text-light">Integer varius odio leo, eu efficitur tortor vulputate in. Suspendisse tristique magna sem, ac tincidunt ex posuere non. In non nibh enim.</p>
      <h5 class="text-warning">Sed in mi tincidunt, cursus felis sit amet, luctus nisi. </h5>
      <p class="text-light">Praesent ac lorem viverra erat viverra laoreet. Integer ante urna, placerat id justo ut, lacinia tempor libero. Fusce at finibus metus. </p>
      <h5 class="text-warning">Nulla ut tellus et dui tincidunt vestibulum.</h5>
      <p class="text-light">Cras a urna quis nibh egestas semper. Nam bibendum quam mauris, sed pulvinar justo blandit eget.</p>
    </div>
  </div>

</template>

<script>
//
// import Accordion from '~/components/Accordion.vue';
//
// export default {
//   components: {
//     Accordion
//   }
// }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

html, body {
  height: 100%;
}

.main {
  padding: 2em;
  padding-right: 4em;
}

.row {
    min-height: 100%;
}

.sidebar {
  padding: 2em;
}
</style>
