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
                    <md-button @click="changeType">搜索</md-button>
              </div>
          </header>
          <div class="content">
            <v-source-table :items="data"></v-source-table>
          </div>
          <footer>
            <v-pagination :count="count" @update="updateFun" :currentPage="currentPage" @prev="prevFun" @next="nextFun"></v-pagination>
          </footer>
      </div>
  </div>
</template>

<script>

import SourceTable from './source-table.vue'
import Pagination from '../pagination.vue'
import axios from 'axios'
import base from '../../config/config'

export default {
  data () {
    return {
      type: 0,
      data: null,
      count: 0,
      currentPage: 1
    }
  },
  components: {
    'v-source-table': SourceTable,
    'v-pagination': Pagination
  },

  methods: {
    prevFun: function () {
      this.currentPage -= 1
      this.getData(this.type, this.currentPage)
    },
    nextFun: function () {
      this.currentPage += 1
      this.getData(this.type, this.currentPage)
    },
    updateFun: function (page) {
      this.currentPage = page
      this.getData(this.type, this.currentPage)
    },
    changeType: function () {
      this.getData(this.type, this.currentpage)
    },
    getUrl: function (type, page) {
      let url
      if (type) {
        url = base.url + '/source/type/' + type + '?page=' + page
      } else {
        url = base.url + '/source?page=' + page
      }
      return url
    },
    getData: function (type, page) {
      axios.get(this.getUrl(this.type, this.currentPage)).then(value => {
        if (value.data.success) {
          this.data = value.data.data
          this.count = value.data.count
          this.currentPage = value.data.currentpage
        } else {
          console.log(value.data.data)
        }
      }, err => {
        console.log(err)
      })
    }
  },

  created () {
    this.getData(this.type, this.currentPage)
  }
}
</script>

<style lang="stylus" scoped>
.source
    padding: 50px 50px

    .container
      border: 1px solid rgba(7, 17, 27, 0.1)
      width: 100%

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

