<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="hello">
      <!-- uppercase filter -->
      <h1>{{ msg | uppercase }}</h1>
      <p>
        <!-- capLength with 20 as arg -->
        {{ text | capLength(20) }}
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <p>
        <!-- capLength with 200 as arg -->
        {{ text | capLength(200) }}
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <!-- formatDate filter -->
      <p>Current date: {{ currentDate | formatDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'For a guide and recipes on how to configure / customize this project, check out the',
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
