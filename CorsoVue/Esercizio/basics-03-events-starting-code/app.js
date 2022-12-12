const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(e){
      this.name = e.target.value;
    },
    addOne(num) {
      this.counter = this.counter + num;
    },
    reduceOne(num) {
      this.counter = this.counter - num;
    },
    resetResult(num) {
      this.counter = num;
    },
    multiplyByTwo(num) {
      this.counter = this.counter * num;
    }
    
  }
});

app.mount('#events');
