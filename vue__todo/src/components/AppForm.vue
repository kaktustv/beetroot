<template>
  <div class="form">
    <input
      :v-model="inputValue"
      type="text"
      class="input"
      placeholder="Enter ToDo..."
    />
    <button class="btn" @click="addTodo">Add ToDo</button>
    <p>{{inputValue}}</p>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  date(){
      return{
      }
  }
};
</script>