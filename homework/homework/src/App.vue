<template>
  <div id="app">
    <div class="nav-bar">
      <div id="nav-bar__link">
      <span>Trang chủ</span>
      </div>
    <router-link v-if="authenticated" to="/login">Login</router-link>
    </div>
    <div class="leftmenu">
          <Leftmenu />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Leftmenu from './components/Leftmenu.vue';
export default {
  
  components: { Leftmenu},
  name: 'App',
  data(){
    return{
      authenticated: true,
    }
  }
}
</script>

<style>
#app{
position: relative;
width: 100%;
height: 1890px;
background: #F8F8F8;
}
.nav-bar {
height: 75px;
border-radius: 6px;
background: rgb(15, 230, 97);
display: flex;
justify-content: space-between;
}
.nav-bar span {
  font-size: 25px;
  margin-right: 5px;
}
#nav-bar__admin{
  display: flex;
  justify-content: right;
}
</style>