<template>
  <div class="pagination">
      <div class="button-group">
            <md-button class="md-icon-button" :disabled="current == 1">
                <md-icon>chevron_left</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised">
                {{current}}
            </md-button>
            <md-button class="md-icon-button" :disabled="current == count">
                <md-icon>chevron_right</md-icon>
            </md-button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'current']
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
</style>
