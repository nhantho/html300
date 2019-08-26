<template>
  <div class="hello">

    <div class="d-flex justify-content-between">
      <Card v-for="card in cards" :card="card" :key="card.id" />
      <!-- :card is the same as v-bind:card -->
    </div>

  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Images",
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          src: require("@/assets/castle.jpg"),
          alt: "Castle on a hill",
          copy: 'Castle',
          id: 0
        },
        {
          src: require("@/assets/mountains.jpg"),
          alt: "Mountains covered by snow",
          copy: 'Mountains',
          id: 1
        },
        {
          src: require("@/assets/lake.jpg"),
          alt: "Lake at sunrise",
          copy: 'Lake',
          id: 2
        },
        {
          src: require("@/assets/road.jpg"),
          alt: "Long empty road",
          copy: 'Road',
          id: 3
        },
        {
          src: require("@/assets/sunset.jpg"),
          alt: "Sunset on a beach",
          copy: 'Sunset',
          id: 4
        },
        {
          src: require("@/assets/waterfall.jpg"),
          alt: "Waterfall over a mossy clift",
          copy: 'Waterfall',
          id: 5
        }
      ]
    }
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
