<template>
  <div class="wrapper">
    <h1 class="heading">Libations</h1>

    <div class="button-container">
        <button v-for="(entry, index) in filterList" :item="entry" :key="index" @click="filter = entry; active = index;" :class="{ active: entry == filter }" > {{ entry }} </button>
    </div>

    <section class="container" v-if="countries">
      <!-- Whenever I tried to change "countries" to ANYTHING else it wouldn't show up. I spent HOURS on this. So I'm sticking with countries. -->
      <card
        v-for="country of countries"
        :key="country.id"
        :country="country"
      />

    </section>
  </div>


</template>

<script>
import Card from '~/components/Card.vue'
import axios from 'axios'

export default {
  components: {
    Card
  },
  data() {
    return {
      loading: true,
      countries: null,
      errored: false,
      fkey: "mainCountry",
      filterList: ["Rum", "Whiskey", "Vodka", "Tequila"],
      filter: "All",
      users: []
    };
  },
  mounted () {
  axios
    .get('https://nhantho.github.io/api/drinks.json')  // I know this isn't ideal, but I'm struggling with the other APIs //
    .then(response => (this.countries = response.data))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  }

}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}

img {
  max-width: 150px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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

.button-container {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
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
