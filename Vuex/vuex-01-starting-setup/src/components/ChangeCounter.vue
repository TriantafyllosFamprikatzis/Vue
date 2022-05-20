<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({value: 10})">increase</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    ...mapActions('numbers', ['increment', 'increase'])

    // ...mapActions({
    //   inc: 'increment',
    //   increase: 'increase'
    // })
  }
}
</script>