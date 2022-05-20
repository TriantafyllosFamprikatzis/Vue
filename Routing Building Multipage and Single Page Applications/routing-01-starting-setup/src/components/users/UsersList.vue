<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      //Push to another router page with programmatic navigation
      this.$router.push("/teams");

      //There are also back() and forward() methods
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("Users list component before enter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList before route leave");

    if (this.changesSaved) {
      next();
    } else {
      // alert("Please press enter to save changes before leaving");

      const userWantsToLeave = confirm("Are you sure want to leave? Tou got unsaved changes!");
      next(userWantsToLeave);
    }
  },
  unmounted() {
    // This is executed when we leave the component page
    console.log("Unmounted");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>