<template>
  <div>
    <h1>Loading text</h1>
    <div class="flex-row">
      <div v-for="t in [1, 2, 3, 4]" :key="t">
        <h4>Load for {{ t }} seconds</h4>
        <button @click="performAsyncTask(`${t} seconds loading`, t * 1000)">
          Start {{ t }}s loading
        </button>
      </div>
    </div>
    <div>
      <h3>Currently loading: {{ loading }}</h3>
      <ul>
        <li v-for="tag in activeLoading" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mixins',
  methods: {
    performAsyncTask(tag, time) {
      this.setLoading(tag);
      setTimeout(() => {
        this.finishedLoading(tag);
      }, time);
    },
  },
};
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
