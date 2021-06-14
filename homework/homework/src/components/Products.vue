<template>
  <div class="products">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 44, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 45, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style>
.products{
  position: absolute;
  width: 1092px;
  height: 1166px;
  left: 15%;
  top: 4%;
    }
</style>