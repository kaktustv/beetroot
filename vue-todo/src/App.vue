<template>
  <div id="app">
    <div id="TodoAdd" class="todo__add"><AppTodoAdd  placeholder="Добавить"/><AppButton msg="Добавить"/></div>
    <div id="TodoFilte"><AppTodo /></div>
  </div>
</template>

<script>
import AppTodo from "./components/AppTodo.vue";
import AppButton from "./components/AppButton.vue";
import AppTodoAdd from "./components/AppTodoAdd.vue";

export default {
  name: "App",
  components: {
    AppTodo,
    AppButton,
    AppTodoAdd,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.todo__add{
  display: flex;

}
</style>
