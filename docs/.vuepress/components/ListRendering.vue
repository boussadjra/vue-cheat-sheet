<template>
  <div>
    <h5>Foos :</h5>
    <ul>
      <li v-for="(bar,index) in bars" :key="bar">{{bar}} - {{index}}</li>
    </ul>
    <h5>user details</h5>
    <ul>
      <li v-for="(val,key, index) in user" :key="index">{{key}} : {{val}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: ["foo", "bar", "test"],
      user: {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        email: "john_doe@gmail.com"
      }
    };
  },

  methods: {}
};
</script>

<style>
</style>
