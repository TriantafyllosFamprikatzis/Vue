const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      // fullname: ""
    };
  },
  //Watcher is helpfull for watching and change a value when something happens
  watch: {
    counter(value) {//Get the latest value
      if(value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // }
  },
  //A cumputed property runs only if the value is changed
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;      
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    }
  }
});

app.mount('#events');
 