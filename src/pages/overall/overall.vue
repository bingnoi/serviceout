<template>
  <div>
    <attendence></attendence>
  </div>
</template>

<script>
import attendence from "./components/attendence";
export default {
  name: "overall-log",
  data() {
    return {};
  },
  components: {
    attendence
  }
};
</script>

<style scoped>
.attendence {
  padding-left: 5%;
  padding-top: 5%;
}
.safety {
  padding-left: 5%;
  padding-top: 5%;
}
</style>
