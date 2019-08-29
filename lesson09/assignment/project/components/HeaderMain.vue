<template>
  <div class="banner">
    <video autoplay="autoplay" muted="muted" loop="loop"><source src="~assets/cocktails.mp4" type="video/mp4"></video>
  </div>
</template>

<style>
.banner {
  position: relative;
  overflow: hidden;
  height: 20em;
}

.banner__video {
  position: absolute;
  width: auto;
  min-width: 100%;
  height: auto;
}
</style>
