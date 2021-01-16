<template>
  <li class="todo__item">{{ todo.text }}</li>
</template>

<script>
export default {
  name: 'AppLi',
  props: ['todo'],
};
</script>
<style lang="scss">
.todo {
  &__item {
    background-color: coral;
    list-style-type: square;
  }
}
</style>
