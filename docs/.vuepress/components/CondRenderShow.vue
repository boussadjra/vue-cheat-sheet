<template>
    <div>
      <button class="btn" v-on:click="toggle=!toggle">
      Toggle
      </button>
      <h4 v-show="toggle">Content rendered conditionally</h4>
    </div>
</template>

<script>
export default {
data() {
    return {
        toggle:false
    }
},
}
</script>

<style>
.btn{
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
}
</style>
