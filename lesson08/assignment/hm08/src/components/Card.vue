<template>
  <article class="toggle-cards">
    <b-card
      v-show="isShowing"
      :title="card.title | upper"
      :img-src="card.src"
      :img-alt="card.alt"
      :key="card.id"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="m-2"
    >
      <b-card-text>{{card.title| upper}}</b-card-text>
    </b-card>
    <!-- <b-button @click="toggleShow" href="#" variant="primary">Toggle Me!</b-button> -->
  </article>
</template>

<script>
import { toggle } from "@/mixins/toggle.js";
import { upper } from "@/filters/index.js";

export default {
  name: "Card",
  props: {
    card: {
      type: Object
    }
  },
  mixins: [toggle],
  filters: {
    upper
  },
  data() {
    return {
      isShowing: true
    };
  }
};
</script>

<style scoped alng="scss">
h3 {
  margin: 40px 0 0;
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

.toggle-cards {
  margin: 2em 0;
  padding: 2em;
  border: 2px dashed red;
}
</style>
