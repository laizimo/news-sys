<template>
  <div class="source">
      <div class="container">
          <header>
              <md-button class="md-raised" @click="insertShow">新建</md-button>
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
          <div class="insert" v-show="insert">
            <div class="insert-content">
              <form novalidate>
                <md-input-container>
                  <label>ID:</label>
                  <md-input v-model="source.id"></md-input>
                </md-input-container>
                <md-input-container>
                  <label>名称：</label>
                  <md-input v-model="source.name"></md-input>
                </md-input-container>
                <md-input-container>
                  <label for="type">类型</label>
                  <md-select name="type" v-model="source.type">
                    <md-option value=1>
                      类型1
                    </md-option>
                    <md-option value=2>
                      类型2
                    </md-option>
                  </md-select>
                </md-input-container>
              </form>
              <div class="btn-group">
                <md-button class="md-raised" @click="submitInsert">确认</md-button>
                <md-button class="md-raised" @click="insertHide">取消</md-button>
              </div>
            </div>
          </div>
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
      currentPage: 1,
      insert: false,
      source: {
        id: '',
        name: '',
        type: 0
      }
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
    },
    reduce: function () {
      this.source.id = ''
      this.source.name = ''
      this.source.type = 0
    },
    insertShow: function () {
      this.insert = true
    },
    insertHide: function () {
      this.insert = false
      this.reduce()
    },
    submitInsert: function () {
      const url = base.url + '/source/insert'
      axios.post(url, this.source).then((val) => {
        if (val.data.success) {
          this.insert = false
          this.reduce()
          console.log('success')
        } else {
          console.log('fail')
        }
      }, (err) => {
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

      .insert
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        background: rgba(0, 0, 0, 0.5)
        z-index: 2

        .insert-content
          width: 400px
          height 300px
          position: absolute
          left: 50%
          top: 50%
          margin-left: -200px
          margin-top: -150px
          background: #f3f5f7
          padding: 20px 50px
          box-sizing: border-box  
</style>

