<template>
  <div id="app">
    <ol>
      <li :v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
  <p>  werwewer  </p>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: "Изучить JavaScript" },
        { text: "Изучить Vue" },
        { text: "Создать что-нибудь классное" },
      ],
    };
  },
};
</script>

<style>
</style>