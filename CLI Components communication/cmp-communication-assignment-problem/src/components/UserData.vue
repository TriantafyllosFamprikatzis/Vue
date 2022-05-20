<template>
  <section>
    <form @submit.prevent="submitData">
      <input v-model="enteredName" type="text" placeholder="Your NAme" />
      <input v-model="enteredAge" type="text" placeholder="Your Age" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      enteredName: "",
      enteredAge: ""
    };
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.enteredName, this.enteredAge);
    }
  }
};
</script>