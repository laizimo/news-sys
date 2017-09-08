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

<style lang="stylus" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1

  .container
    display: flex
    width : 100%
    height: 100%
    position: relative

    .left-nav
      flex: 0 0 200px
      border-right: 1px solid rgba(7, 17, 27 , 0.1)

    .content
      flex: 1
</style>
