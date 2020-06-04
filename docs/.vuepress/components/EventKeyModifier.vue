<template>
<div>
<p>Focus on this input and press alt+enter</p>
    <input v-on:keyup.alt.enter="method1" />
</div>
</template>

<script>
export default {
methods: {
    method1(){
        alert('This event is fired when you press alt+enter !')
        console.log('This event is fired when you press alt+enter !')
    }
    
},
}
</script>

<style>

</style>
