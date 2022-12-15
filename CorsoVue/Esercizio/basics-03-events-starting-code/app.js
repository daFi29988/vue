const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedInput: '',
      /* fullname: '' */
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function (){
          this.counter = 0;
        }, 2000)
        that.counter = 0;
      }
    }
   /*  name(value) {
      if (value === '') {
        this.fullname == '';
      } else {
         this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    } */
  },
  computed: {
    fullname() {
      console.log('Hey bello, sto funzionando!')
       if (this.name === '' || this.lastName === '') {
        return '';
      } else {
      return this.name + ' ' + this.lastName;
      }
    }
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
