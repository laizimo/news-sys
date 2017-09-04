<template>
  <div class="source">
      <div class="container">
          <header>
              <md-button class="md-raised">新建</md-button>
              <div class="header-right">
                    <md-input-container>
                        <label>keywords</label>
                        <md-input placeholder="keywords"></md-input>
                    </md-input-container>
                    <md-button>搜索</md-button>
                    <md-input-container>
                        <label for="type">类型</label>
                        <md-select name="type" id="type" v-model="type">
                            <md-option value="0">全部</md-option>
                            <md-option value="1">类型1</md-option>
                        </md-select>
                    </md-input-container>
                    <md-button>搜索</md-button>
              </div>
          </header>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.source
    padding: 50px 50px

    .container
      border: 1px solid rgba(7, 17, 27, 0.1)
      width: 100%
      height: 800px

      header
        text-align: left
        border-bottom: 1px solid rgba(7, 17, 27, 0.3)
        display: flex
        justify-content: space-around
        align-items: center

        .md-button
          margin-left: 20px
          border: 1px solid rgba(7, 17, 27, 0.1)

        .header-right
          display : flex
          align-items: center
          justify-content: space-around

          .md-input-container
            display: inline-flex
            width: 200px
        
</style>

