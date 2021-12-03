import Vue from "vue";
import Router from "vue-router";

//must import components used for routes
import StudentList from "./views/student-list.vue";
import StudentList2 from "./views/student-list2.vue";
import Student from "./views/student.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/students"
    },
    {
      path: "/students", //this will be the default path our app loads
      components: {
        default: StudentList,
        secondComp: StudentList2
      } //component to load
    },
    {
      path: "/students/:id", //this will be the specific student, notice the :id
      //A dynamic segment is denoted by a colon :
      //he value of the dynamic segments will be exposed as this.$route.params in every component.
      component: Student //component to load
    }
  ]
});
