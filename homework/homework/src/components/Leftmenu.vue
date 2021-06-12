<template>
  <div id="leftmenu">
      <router-link class="leftmenu__link" v-if="sucess" to="/dashboard">Dashboard</router-link>
      <router-link class="leftmenu__link" v-if="sucess" to="/articles">Articles</router-link>
      <router-link class="leftmenu__link" v-if="sucess" to="/products">Products</router-link>
  </div>
</template>

<script>
export default {
    name: 'Leftmenu',
    data () {
        return{
            sucess: true,
        }
    }

}
</script>

<style>
    #leftmenu{
        background: rgb(150, 151, 153);
        position: absolute;
        left: 0%;
        right: 85%;
        top: 4%;
        bottom: 0%;
        border: 1px solid #EBE9F1;
    }
    .leftmenu__link{
        display: flex;
        flex-wrap: wrap;
        text-decoration: none;
        margin: 10px;
    }
</style>