<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
    <img v-for="image in images" :src="image.url"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Images',
  data () {
    return {
      images: [
        { url: 'https://picsum.photos/200?random=1', class: 'p-3' },
        { url: 'https://picsum.photos/200?random=2' },
        { url: 'https://picsum.photos/200?random=3' },
        { url: 'https://picsum.photos/200?random=4' }
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
