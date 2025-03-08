<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<nav>
		<router-link to="/">Home</router-link>
		|
		<router-link to="/home">home</router-link>
		|
		<router-link to="/other">other</router-link>
	</nav>
	<a-config-provider>
		<router-view></router-view>
	</a-config-provider>
	<!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
