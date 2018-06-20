<template>
  <div :class="negative ? 'negative' : 'possitive'" class="button">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    negative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  padding: 12px;
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 1px;
  transition: 0.25s;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
}
.button:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.32);
}
.negative {
  background: #3c3c3c;
}
.possitive {
  background: #008ffe;
}
</style>
