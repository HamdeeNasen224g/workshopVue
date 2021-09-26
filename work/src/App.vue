<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Hamdee.WU.ac.th" msg_name="Hamdee Naseng"/>

  <button @click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>

<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>


</template> 


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },  data() {
      return {
        counter: 0
        
      }
      return {
      message: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
