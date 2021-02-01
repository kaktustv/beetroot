<template>
  <div id="App">
    <app-form></app-form>
    <app-todo>
      <li v-for="todo in todos" :key="todo.id">
        <span class="id">{{todo.id}}</span>
        <span class="id">{{todo.title}}</span>
        <span class="id">{{todo.status}}</span>
      </li>
    </app-todo>
    <p>{{inputValue}}</p>
  </div>
</template>

<script>
import AppForm from "./components/AppForm.vue";
import AppTodo from "./components/AppTodo.vue";

export default {
  name: "App",
  components: {
    AppForm,
    AppTodo,
  },
  date() {
    return {
      todos: [
        {
          id:1,
          title: 'Some text',
          status: true,
        }
      ],
    };
  },

  methods: {
    addTodo() {
      this.todos.push(
        {
          id: Date.now,
          title: this.inputValue,
          status: false,
        }
      );
    },
  },
};
</script>

<style lang="scss">
</style>
