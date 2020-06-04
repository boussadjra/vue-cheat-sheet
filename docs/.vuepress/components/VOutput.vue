<template>
  <div class="output">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-output"
};
</script>

<style>
.output {
  padding: 27px;
  box-shadow: inset 0px 2px 11px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border: thin solid #aaa;
  border-radius: 10px;
}

.inner {
  padding: 10px;
  border: thin solid #aaa;
  border-radius: 10px;
}
</style>
