const app = Vue.createApp({
  data() {
    return {
      // friends: [
      //   { id: 'Manuel', name: 'Manuel Florenz', phone: '01234 576 768', email: 'manuel@local.com' },
      //   { id: 'Julie', name: 'Julie Florenz', phone: '01234 576 768', email: 'julie@local.com' },
      // ],
    }
  },
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show'}}</button>
      <ul v-show="showDetails">
        <li><strong>Phone: </strong>{{ friend.phone }}</li>
        <li><strong>Email: </strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: { id: 'Manuel', name: 'Manuel Florenz', phone: '01234 576 768', email: 'manuel@local.com' },
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
});

app.mount('#app');