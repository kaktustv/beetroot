<template>
  <p class="control has-icons-left">
    <input class="input" type="text" :placeholder="placeholder" />
    <span class="icon is-left">
      <i class="fas fa-search" aria-hidden="true"></i>
    </span>
  </p>
</template>

<script>
export default {
  name: "AppTodoAdd",
  props: {
    placeholder: String,
  },
};
</script>

<style>
.input{
    min-width: 500px;
}
</style>