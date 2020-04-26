<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Filters</router-link> |
      <router-link to="/directives">Directives</router-link> |
      <router-link to="/mixins">Mixins</router-link> |
      <router-link to="/slots">Slots</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
