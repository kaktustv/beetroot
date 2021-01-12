<template>
  <div id="app">
      <p>Count: {{count}}</p>
      <button @click="count += 1">plus</button>
      <button @click="count -= 1">minus</button>
      <button @click="count = 0">reset</button>
  </div>
</template>

<script>
export default {
    name:"Counter",
    data(){
        return{
         count: 0
        }
    }
}
</script>
<style lang="scss">

</style>