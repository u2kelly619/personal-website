<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;
}
:root{
    --main-color: darkblue;
    --main-color-hover: rgb(1, 1, 82);
}
</style>
