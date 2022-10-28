<template>
  <div id="app">
    <Example />
    <img :src="logo" />
  </div>
</template>
<script>

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