const app = Vue.createApp({
    data() {
        return {
        userInput: '',
        color: '',
        nascondi: true,
    }
    },

    methods: {
       nascondiOra (){
        if (this.nascondi === true) {
            this.nascondi = !this.nascondi;
        } else if (this.nascondi === false) 
            this.nascondi = !this.nascondi;
    }
    }
});
app.mount('#assignment')