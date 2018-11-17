<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './views/Nav.vue'
export default {
	name: 'App',
	components: {
		Nav
	}
}
</script>

<style lang="scss">
@import './style/reset.css';
#app {
  height: 100%;
  max-width: 1264px;
  margin: auto;
  padding-top: 40px;
}
</style>
