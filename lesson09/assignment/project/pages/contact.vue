<template>

  <div class="row">
    <article class="col-12 p-5">
      <h1 class="heading">Contact</h1>
      <form>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" class="form-control" id="name" placeholder="Larry Brown">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="location">Full Name</label>
          <input type="text" class="form-control" id="location" placeholder="New Mexico">
        </div>
        <div class="form-group">
          <label for="notes">Notes</label>
          <textarea class="form-control" id="notes" rows="3" placeholder="What are your thoughts?"></textarea>
        </div>
      </form>
      <button type="button" name="button">Submit</button>
    </article>
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
}


.row {
    min-height: 100%;
}

button {
  background-color: #ffc107;
  padding: 1em;
  margin: 1em;
  width: 8em;
  border-radius: 25%;
  border: none;
}
</style>
