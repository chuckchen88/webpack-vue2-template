<template>
  <div id="app">
    <Menus />
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