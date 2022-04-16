<template>
  <div id="app">
    <navbar />
    
    <sidebar />
    <router-view />
    
    <foote />
  </div>
</template>


<script>
import navbar from "./components/Navbar/Navbar.vue";
import sidebar from "./components/Sidebar/Sidebar.vue";
import foote from "./components/Footer/Footer.vue";

export default {
  components:{
    navbar,
    sidebar,
    foote,
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

</style>
