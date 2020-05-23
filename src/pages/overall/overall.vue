<template>
  <div class="all">
    <attendence></attendence>
  </div>
</template>

<script>
import attendence from './components/attendence'
export default {
  name: 'overall-log',
  data () {
    return {}
  },
  components: {
    attendence
  }
}
</script>

<style scoped>
.all{
  background-image: url("/api/sece.png");
}
</style>
