const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  watch: {
    counter(value) {
      that = this;
      if (that.counter > 37) {
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    } else if (that.counter === 37) {
        return that.counter
    }
    },
  },

  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    },
    monitor() {
      if (this.counter < 37) {
        return "Non sei arrivato";
      }
      if (this.counter === 37) {
        return "Finalmente sei arrivato!";
      } else {
        return "Hai esagerato sei andato oltre";
      }
    },
  },
});

app.mount("#assignment");
console.log("Hey bello, sono collegato!");
