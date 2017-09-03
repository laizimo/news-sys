<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <div class="left-nav">
        <v-nav></v-nav>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header.vue'
import nav from './components/nav.vue'

export default {
  name: 'app',

  components: {
    'v-header': header,
    'v-nav': nav
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .container
    display: flex
    width : 100%
    padding: 20px 100px

    .left-nav
      flex: 0 0 200px
</style>
