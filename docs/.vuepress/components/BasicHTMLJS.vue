<template>
  <div id="vue-app">
    <p>{{ hello() }}</p>
    <p>{{ name }}</p>
    <p>{{ age + 1 }}</p>
    <p>{{ age < 18 ? "Youngster" : "Adult"}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Matej",
      age: 27,
      sleepy: true
    };
  },

  methods: {
    hello: function() {
      return "Hello";
    }
  }
};
</script>

<style>
</style>
