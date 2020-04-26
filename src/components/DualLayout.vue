<template>
  <div class="dual-layout">
    <slot name="left" :text="leftText">
      <p>{{ leftText }}</p>
    </slot>
    <slot name="right" :text="rightText">
      <p>{{ rightText }}</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'DualLayout',
  props: {
    leftText: {
      type: String,
      default: 'Default left slot text',
    },
    rightText: {
      type: String,
      default: 'Default right slot text',
    },
  },
};
</script>

<style scoped>
.dual-layout {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
}
.dual-layout > p {
  flex-basis: 0;
  flex-grow: 1;
  padding-right: 0.5rem;
}
</style>
