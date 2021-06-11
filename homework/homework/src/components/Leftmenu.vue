<template>
  <div id="leftmenu">
      <p ><a class="leftmenu__link" href="/dashboard">Dashboard</a></p>
      <p ><a class="leftmenu__link" href="">Articles</a></p>
      <p ><a class="leftmenu__link" href="">Products</a></p>
     

  </div>
</template>

<script>
export default {
    name: 'Leftmenu',
    data: {
    }

}
</script>

<style >
    #leftmenu{
        background: royalblue;
        position: absolute;
        left: 0%;
        right: 85%;
        top: 4%;
        bottom: 0%;
        border: 1px solid #EBE9F1;
    }
    .leftmenu__link{
        text-decoration: none;
    }
</style>