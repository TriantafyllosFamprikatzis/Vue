const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    addName(event, lastname) {
      this.name = event.target.value + '' + lastname;
    }
  }
});

app.mount('#events');
