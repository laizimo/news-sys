<template>
  <header class="nav">
      <div class="nav-left">
          <a href="/" class="title">媒资系统</a>
          <span class="subtitle">MediaResourceSystem</span>
      </div>
      <div class="nav-right">
        <div v-if="!isLogin" class="btn-group">
          <md-button class="dense" @click="loginEvt">登录</md-button>
          <md-button class="dense">注册</md-button> 
        </div>
        <div v-if="isLogin" class="user">
          <md-avatar>
            <img v-bind:src="avatar" alt="avatar">
          </md-avatar>
          <span class="username">{{username}}</span>
          <md-button class="dense logout" @click="logout">登出</md-button>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  props: ['isLogin'],
  data () {
    return {
      username: '',
      avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcBAwYCBP/EADcQAAEDAwEGBAIHCQAAAAAAAAEAAgMEBQYRBxIhMUFREyJhcTIzFIGCkaGisSNCU3KSwcLR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFB5XldoxSg+l3ipEbT8uJnmklPZrevvyX2ZBd6axWaruladIKaIvcBzPYD1J0CrfZ1i82TVzs5zCMVFTVHft9K8asgiB8rtOX8o+1xJ4BsiynaJlX7XGsfpbVb3a+HU3IkucOh0/00+6ycd2tObvnMLa2TTXcbC3d17a+F/ZWloAsoKqdlOf4f8AtcvtEF0tbPm1tu034x3I4DT3DfdWHYL5bsgt0dwtNSyop3/vDgWnqCOYPoVIuaHNIcAQeBB6qob5Qu2W5VDf7S1zMauUohuNI0atp3Hk9o6DmR9Y6jQLfReY3Nexr2ODmuGoI5EL0gIiICIiAiIgIiIK02uON4umNYhG4htyrPFqQ084o+h/E/ZVkRRsiibHE0NYwBrWgcAByCrmWIVe3uIy8fodk34x2JeR/mV19RepIsuo7IIWmOoopal0pPEFjmtAA+0gjtp2RVeLYjU3S3tidUtkjYzxW7zRvOAJI1HTVclmO0q5WzC8avttp4RLcnB07Ht3mgNHmaO2p149grNulsorvRSUVzpo6mlk034pBqDodR+K+Woxuy1Vtp7bU2ukloqbTwYJIg5kenYHkgkKSdtVSw1DB5JWNe3XsRqojN7Oy/YndLa9oc6and4evSQDVh/qAU21oaA0AADkB0XP4PdKq72aae4Pa+eKtqYCWtDRoyRzRwHoAgjNj92fd9n9skmJMtO11M8k6nyHQfl0XaKstgh0xu7Rt+Uy6yiM9xutVmoCIiAiIgIiICIiCucle2xbXLBd5vLS3Sjfbnv6NkDt5up9SWj6lJZnM2y5Pj2RTkMoYzLQ1kh5RNl3dx5PQbzQCfVS2a41T5VYZrbUO8OTUSU845wyj4XD9PYlchjuZwnxMQ2jRRUtzYzwnSVOngVzDwDt48NT9xPLjwAWY1wcNRyPI91lcXBiFytEbWYpktRSUg+XRVkYqoWjoGkkOA+tbTRZ9INx17sUTf4kdvkc77i/RBP3280VhtVRcrlM2KmgbvEk/EejR3J5ALl8cklxfZvPcry3wajcnrp4zwLXyOc8M9/M1vuvTsctlsmZfMzvjrjPTneimr3tiggd0LIx5Q714lcreq+r2tXCOy2Fs0OL08ofXXF7C3xyOTWA/wDa8TpoNQn9hdDJSbP6aWVpD6yeSc69QTug/c1WCtFFSwUNHBSUsbYoII2xxsbya0DQBb0BERAREQEREBERAUPkmM2jJaP6LeKKOoYPgceD4z3a4cQphEFYs2Z32zncxPNa+jpR8NNUs8Vrfbjp+VZOI7SagblVnkcbOWsNKA78A39VZqIK4oNkVtfUtrMmulwv1S06j6VKRHz1+HUnT010Vg0dJT0VNHTUcEUEEY3WRRMDWtHYALciAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k='
    }
  },
  computed: {
  },
  methods: {
    loginEvt: function () {
      this.$emit('loginEvt')
    },
    getUsername: function () {
      if (this.isLogin) {
        return window.localStorage.getItem('username')
      }
      return ''
    },
    logout: function () {
      this.$emit('loginout')
    }
  },
  mounted () {
    this.username = this.getUsername()
  },
  update () {
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


