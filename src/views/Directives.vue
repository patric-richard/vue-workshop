<template>
  <div>
    <h1>Test out directives</h1>
    <div class="flex-layout">
      <div>
        <h3>Without debounce</h3>
        <!-- focus directive -->
        <input v-focus type="text" @input="updateText">
      </div>
      <div>
        <h3>This input will use debounce</h3>
        <!-- debounce directive -->
        <input v-debounce type="text" @change="updateText">
      </div>
    </div>
    <!-- random-location directive -->
    <div v-random-location class="moving-div">
      <h3>Text prop in component</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Directives',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    updateText(e) {
      if (!e || !e.target) return;
      this.text = e.target.value;
    },
  },
};
</script>

<style scoped>
.flex-layout {
  display: flex;
  justify-content: space-evenly;
}
.moving-div {
  margin: 1rem auto;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  width: 200px;
  height: 150px;
}
</style>
