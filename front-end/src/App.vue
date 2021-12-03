<template>
  <!-- kinda like a generic component that will change based on what the address is -->
  <main id="container">
    <h1>Student Progress Application2</h1>
    <router-view v-bind:students="theStudents" the-title="Class List">
    </router-view>
    <router-view name="secondComp"></router-view>
  </main>
</template>

<script>
import axios from "axios";
//what objects, methods, etc, we want available when this component is used
export default {
  name: "app",
  data() {
    return { theStudents: [] };
  },
  //All lifecycle hooks are called with their this context pointing to the Vue instance invoking it.
  created: function() {
    var vm = this;
    axios.get("http://localhost:"+process.env.VUE_APP_API_PORT+"/api/students").then(function(response) {
      console.log(response);
      vm.theStudents = response.data;
    });
  }
};
</script>

<style lang="scss">
//can set up global styles here or in static folder
</style>
