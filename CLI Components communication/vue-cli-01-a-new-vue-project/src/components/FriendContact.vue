<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // default: '0'
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    }
    // phoneNumber: String,
    // emailAddress: String
  },
  emits: ['toggle-favorite', 'delete'],
  //We can pass the parameter to point out what this emit is using
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('id is missing');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
      // friend: {
      //   id: props.id,
      //   name: props.name,
      //   email: props.email,
      //   phone: props.phone
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;

      // Pass props from child to parent app.vue
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>
