<template>
  <div class="accordion">

    <h1>{{ msg }}</h1>

    <div :key="index" v-for="(item,index) in details" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0 text-white" role="tab">
          <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info" class="text-white">{{item.title}}</b-button>
        </b-card-header>
        <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
          <b-card-body class="p-3">
          <b-card-text>{{ item.content }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data: function(){
    return{
      details:[
        { title: 'Aenean Pharetra Consequat', content: 'Aenean pharetra consequat sociosqu neque hendrerit turpis natoque eros, ullamcorper gravida mauris odio suscipit felis. Quisque egestas semper sollicitudin felis aenean ultrices rhoncus, tellus per gravida in blandit inceptos nec, diam risus imperdiet fringilla integer fermentum. Senectus vel faucibus ac nulla ultrices massa placerat fermentum et, aenean parturient per phasellus facilisis feugiat vestibulum dignissim, praesent netus ut condimentum a rhoncus cubilia tellus'},
        { title: 'Fusce Consequat Litora', content: 'Fusce consequat litora sem dictumst phasellus imperdiet mattis habitasse, rhoncus quisque tempor libero ac dignissim ad luctus, molestie proin tellus ornare parturient vel vivamus. Aliquam fames suscipit vel primis potenti, tellus tempus mollis quis pretium mus, rhoncus leo quisque gravida. Sed egestas semper faucibus lacus bibendum purus ornare, mi metus himenaeos eu tristique fermentum.'},
        { title: 'Curae Suspendisse Id', content: 'Curae suspendisse id malesuada erat consequat neque primis metus sollicitudin eu, quis senectus sem purus fames conubia vel aliquet. Vestibulum ultricies metus purus posuere tristique integer morbi aliquam, <mark>rhoncus quis ut pellentesque et augue malesuada, scelerisque suscipit accumsan</mark> dictum feugiat dignissim. Malesuada donec taciti fusce accumsan mattis quisque mi, cursus tellus ac consequat tempor justo purus, aenean gravida luctus aliquet ligula sociosqu.'},
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
