<template>
    <div>
    <input v-model="name" type="text" />
    <p>My name is: {{name}}</p>
    </div>
</template>

<script>
export default {
data(){
	return{
    name: ""
  }
}
}
</script>

