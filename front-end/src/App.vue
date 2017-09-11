<template>
  <div id="app">
    <v-header @loginEvt="loginShow" @loginout="logoutFun" :isLogin="isLogin"></v-header>
    <div class="container">
      <div class="left-nav">
        <v-nav></v-nav>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div class="login" v-show="loginState">
      <form novalidate class="content" @submit.stop.prevent="submit">
        <md-input-container :class="usernameError? 'md-input-invalid' : ''">
          <label>用户名</label>
          <md-input required name="username" v-model="user.username"></md-input>
          <span class="md-error">{{usernameError}}</span>
        </md-input-container>
        <md-input-container :class="passwordError? 'md-input-invalid' : ''">
          <label>密码</label>
          <md-input required name="password" type="password" v-model="user.password"></md-input>
          <span class="md-error">{{passwordError}}</span>
        </md-input-container>
        <div class="btn-group">
          <md-button class="md-raised" @click="login">登录</md-button>
          <md-button class="md-raised" @click="reset">取消</md-button>
        </div>
      </form>
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
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLogin: false,
      loginState: false,
      usernameError: '',
      passwordError: ''
    }
  },
  methods: {
    login: function () {
      const user = this.user
      if (user.username.length === 0) {
        this.usernameError = '用户名不能为空'
      } else if (user.password.length === 0) {
        this.passwordError = '密码不能为空'
      } else {
        window.localStorage.setItem('username', user.username)
        this.loginState = false
        this.isLogin = true
        this.user = {
          username: '',
          password: ''
        }
      }
    },
    logoutFun: function () {
      window.localStorage.removeItem('username')
      this.isLogin = false
    },
    reset: function () {
      this.loginState = false
      this.user = {
        username: '',
        passwird: ''
      }
    },
    loginShow: function () {
      this.loginState = true
    },
    hasLogin: function () {
      if (window.localStorage.getItem('username')) {
        return true
      }
      return false
    }
  },
  beforeMount () {
    this.isLogin = this.hasLogin()
  },
  updated () {
    if (this.user.username) {
      this.usernameError = ''
    }
    if (this.user.password) {
      this.passwordError = ''
    }
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
  .login
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: rgba(0, 0, 0, 0.7);
    z-index: 2

    .content
      width: 400px
      height: 200px
      background: #f3f5f7
      position: absolute;
      left: 50%
      top: 50vh
      transform: translateX(-50%) translateY(-50%)
      padding: 0 40px
      box-sizing: border-box
</style>
