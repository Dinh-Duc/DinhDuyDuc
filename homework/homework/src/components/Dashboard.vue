<template>
  <div class="dashboard">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'dashbroad',
  data () {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style >
  .dashboard{
  position: absolute;
  width: 1092px;
  height: 1166px;
  left: 15%;
  top: 4%;
    }
</style>