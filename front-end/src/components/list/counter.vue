<template>
  <div class="counter">
      <md-button class="md-icon-button" @click="increment">
          <md-icon>add</md-icon>
      </md-button>
      {{counter}}
      <md-button class="md-icon-button" @click="decrement">
          <md-icon>sub</md-icon>
      </md-button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number
    }
  },
  methods: {
    increment: function () {
      this.$emit('increment')
    },
    decrement: function () {
      this.$$emit('decrement')
    }
  }
}
</script>

