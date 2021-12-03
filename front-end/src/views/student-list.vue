<template>
  <div>
    <h2>{{ theTitle }}</h2>
    <ul>
      <li v-for="student in students" v-bind:key="student.id">
        <p>name: {{ student.fname + " " + student.lname }}</p>
        <p>email: {{ student.email }}</p>
        <p>
          <router-link :to="`/students/${student._id}`"
            >More student info</router-link
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "student-list",
  props: ["theTitle", "students"]
};
</script>
