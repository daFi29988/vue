const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedInput: '',
    };
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      } else {
      return this.name + ' ' + 'Birbillone'
    }
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value ;
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
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
