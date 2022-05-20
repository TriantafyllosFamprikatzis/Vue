const app = Vue.createApp({
  data() {
    return {
      userInput: "OUTPUT",
      confirmedInput: "OUTPUT",
    }
  },
  methods: {
    showAlert() {
      alert('Button is pressed');
    },
    changeUserInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    }
  },
});

app.mount("#assignment")