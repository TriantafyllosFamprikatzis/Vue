const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      showList: true,
      // buttonCaption: "Hide List"
    }
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.showList = !this.showList;
      // this.buttonCaption = this.showList ? 'Hide List' : 'Show List';
    }
  }
});

app.mount("#assignment");