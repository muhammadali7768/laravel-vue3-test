<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
</template>
<style>
</style>  
<script>
export default {
    setup: () => ({
        title: 'App Page'
    })
}
</script>