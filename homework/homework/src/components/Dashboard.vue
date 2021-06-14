<template>
  <div class="dashboard">
     <div class="title">
      <p class="title__title">
        Advanced Vue.js Component Composition With Container Components
      </p>
      <p class="title__sub-title">
        Demo application to show how to separate Vue.js components into
        Container components and Presentational Components.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashbroad',
  data () {
    return {
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
  .title__title{
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03rem;
    text-align: center;
    max-width: 620px;
    margin: 0 auto;
    margin-bottom: 0.6rem;
  }
  .title__sub-title{
    font-size: 1.05rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    line-height: normal;
    text-align: center;
    margin-bottom: 2rem;
    max-width: 590px;
    margin: 0 auto;
  }
</style>