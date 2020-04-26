<template>
  <div class="container">
    <div class="index">#{{ index }}</div>
    <header>
      <slot name="header" :title="title">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <main>
      <slot name="content" :text="text">
        <p>{{ text }}</p>
      </slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: {
      type: String,
      default: 'Default title',
    },
    text: {
      type: String,
      default: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Hic corrupti cumque dignissimos natus, mollitia voluptates!
        Illo facere dolor laborum sit optio repellendus,
        excepturi reiciendis iste blanditiis! Beatae necessitatibus accusamus iure?
      `,
    },
  },
  computed: {
    index() {
      return this.$parent.$children.length - 1;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 20vw;
  min-width: 16rem;
  margin: 1rem;
  background-color: #fff;
  padding: 1rem;
}
header {
  border-bottom: 1px solid;
}
main {
  display: flex;
  flex-direction: column;
  max-height: 8rem;
  overflow: auto;
}
.index {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  color: grey;
}
</style>
