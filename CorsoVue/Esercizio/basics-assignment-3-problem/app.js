const app = Vue.createApp({
    data() {
        return {
        counter: 0,
    };
    },

    watch:{
        /* counter (value) {
            if (value > 37)
            setTimeout(function() {
            }, 10);
        }  DA RIVEDERE
        */
          
    },


    methods: {
        addFive(num) {
           this.counter = this.counter + num;
        },
        addOne(num) {
            this.counter = this.counter + num;
         },
        monitor() {
            if (this.counter < 37) {
                return 'Non sei arrivato'
            }
            if (this.counter === 37) {
                return 'Finalmente sei arrivato!'
            }
            else {
                return 'Hai esagerato sei andato oltre'
            }
        }
    }
})

app.mount('#assignment')
console.log('Hey bello, sono collegato!')