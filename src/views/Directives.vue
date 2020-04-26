<template>
  <div>
    <h1>Test out directives</h1>
    <div>
      <h3>Without debounce</h3>
      <input v-focus type="text" @input="updateText">
    </div>
    <div>
      <h3>This input will use debounce</h3>
      <input v-debounce type="text" @change="updateText">
    </div>
    <div v-random-location>
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

</style>
