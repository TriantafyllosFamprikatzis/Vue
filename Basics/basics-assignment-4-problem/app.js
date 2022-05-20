const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphShown: true,
      inputColor: '',
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        vissible: this.paragraphShown,
        hidden: !this.paragraphShown  
      }
    }
  },
  methods: {
    toggle() {
      this.paragraphShown = !this.paragraphShown;
    }
  }
});

app.mount("#assignment");