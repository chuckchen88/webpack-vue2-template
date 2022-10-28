<template>
  <div id="app">
    <!-- <Example /> -->
    <img :src="logo" />
  </div>
</template>
<script>
  import { filters } from './plugins'

  export default {
    name: "app",
    data(){
      return {
        logo: require('./assets/logo.png')
      }
    },
    components: {}
  };
</script>