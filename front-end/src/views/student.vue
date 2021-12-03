<template>
  <div>
    <h2>Student Info</h2>
    <p>Name: {{ student.fname + " " + student.lname }}</p>
    <p>Program: {{ student.program }}</p>
    <ul>
      <li v-for="course in student.courses" v-bind:key="course.name">
        <p>Course Number: {{ course.number }}</p>
        <p>Course Title: {{ course.title }}</p>
      </li>
    </ul>
    <router-link to="/students">Back to students</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "student",
  data() {
    return {
      student: {}
    };
  },
  created() {
    //we can grab id from url, then use it to make a call to the API to grab planet information
    var vm = this;
    let id = this.$route.params.id;
    axios
      .get(`http://localhost:3000/api/student/${id}`)
      .then(function(response) {
        vm.student = response.data;
        console.log(vm.student);
      });
  }
};

//use to get id from route this.$route.params.id
</script>
<style scoped>
p {
  color: #333;
  font-size: 18px;
}
</style>
