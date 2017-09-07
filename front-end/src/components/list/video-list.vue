<template>
  <div class="vide-list">
      <v-counter :counter="count" @increment="incrementFun" @decrement="decrementFun"></v-counter>
  </div>
</template>


<script>

import VCounter from './counter.vue'

export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incrementFun: function () {
      this.count += 1
    },
    decrementFun: function () {
      this.count -= 1
    }
  },
  components: {
    'v-counter': VCounter
  }
}
</script>
