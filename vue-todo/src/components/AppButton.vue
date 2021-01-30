<template>
  <button class="button is-link is-outlined is-fullwidth">{{ msg }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    msg: String,
  },
  date() {
    return {};
  },
};
</script>

<style>
    .button{
        max-width: 200px;
    }
</style>