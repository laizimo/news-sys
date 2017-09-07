<template>
  <div class="container">
      <md-table>
          <md-table-header>
              <md-table-row>
                  <md-table-head md-numeric>序号</md-table-head>
                  <md-table-head md-numeric>ID</md-table-head>
                  <md-table-head md-numeric>名称</md-table-head>
                  <md-table-head width="100px" md-numeric>操作</md-table-head>
              </md-table-row>
          </md-table-header>
          <md-table-body>
              <md-table-row v-for="(item, index) in items" :key="item.id">
                  <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
                  <md-table-cell md-numeric>{{item.id}}</md-table-cell>
                  <md-table-cell md-numeric>{{item.name}}</md-table-cell>
                  <md-table-cell md-numeric width="100px">
                      <md-button class="md-icon-button">
                          <md-icon>edit</md-icon>
                      </md-button>
                      <md-button class="md-icon-button">
                          <md-icon>delete</md-icon>
                      </md-button>
                  </md-table-cell>
              </md-table-row>
          </md-table-body>
      </md-table>
  </div>
</template>


<script>
export default {
  props: ['items']
}
</script>

<style lang="stylus" scoped>
.container
    padding: 20px 40px
    box-sizing: border-box

    .md-table

        .md-numeric
            text-align: center
</style>
