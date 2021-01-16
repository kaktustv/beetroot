<template>
  <div id="app">
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <ol>
      <app-li
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></app-li>
      <span :style="color: red;">adfsdf</span>
    </ol>
    <p>{{Number(msg.toString().split('').reverse().join(''))}}</p>
  </div>
</template>

<script>
import AppLi from './components/AppLi';

export default {
  name: 'App',
  components: {
    AppLi,
  },
  data() {
    return {
      msg:121214,
      todos: [{ text: 'One' }, { text: 'Two' }, { text: 'Three' }],
      groceryList: [
        { id: 0, text: 'Овощи' },
        { id: 1, text: 'Сыр' },
        { id: 2, text: 'Что там ещё люди едят?' },
      ],
    };
  },
};
</script>

<style></style>
