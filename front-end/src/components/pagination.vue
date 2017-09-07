<template>
  <div class="pagination">
      <div class="button-group">
            <md-button class="md-icon-button" @click="prev" :disabled="current == 1">
                <md-icon>chevron_left</md-icon>
            </md-button>
            <md-select v-model="current">
                <md-button class="md-icon-button md-raised" slot="icon" md-menu-trigger>
                    {{current}}
                </md-button>

                <md-option v-for="(row, index) in count" :key="row" :value="index+1">{{index+1}}</md-option>
            </md-select>
            <md-button class="md-icon-button" :disabled="current == count" @click="next">
                <md-icon>chevron_right</md-icon>
            </md-button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    count: Number
  },
  data () {
    return {
      current: this.currentPage
    }
  },
  methods: {
    prev: function () {
      this.current -= 1
      this.$emit('prev')
    },
    next: function () {
      this.current += 1
      this.$emit('next')
    }
  },
  created () {
    console.log(this.currentPage)
  },
  updated () {
    console.log(this.current)
    if (this.current !== this.currentPage) {
      this.$emit('update', this.current)
    }
  }

}
</script>

<style lang="stylus" scoped>
.pagination
    width : 100%
    padding: 20px 0
    .button-group
        list-style: none 
        padding: 0
        text-align: center

        .md-select
            display: inline-block
            width: auto
</style>
