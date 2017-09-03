<template>
  <header class="nav">
      <div class="nav-left">
          <a href="/" class="title">媒资系统</a>
          <span class="subtitle">MediaResourceSystem</span>
      </div>
      <div class="nav-right">
        <div v-if="!isLogin" class="btn-group">
          <md-button class="dense">登录</md-button>
          <md-button class="dense">注册</md-button> 
        </div>
        <div v-if="isLogin" class="user">
          <md-avatar>
            <img v-bind:src="avatar" alt="avatar">
          </md-avatar>
          <span class="username">{{username}}</span>
          <md-button class="dense logout">登出</md-button>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
      username: '',
      avatar: ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.nav
  color: #ffffff
  background: #000000
  width: 100%
  display: flex
  justify-content: space-between

  .nav-left
    width: 200px
    height: 100%
    text-align: center

    .title
      font-size: 20px
      font-weight: 700
      text-decoration: none
      color: #ffffff
      display : block
      margin: 5px 0;

      &:hover
        text-decoration : none
    .subtitle
      font-size: 16px
</style>


