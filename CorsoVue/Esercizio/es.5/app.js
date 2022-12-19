const app = Vue.createApp ({
    data() {
    return {
        listaTask: [],
        taskValue: '',
        task: '',
        nascondi: true,
        stato1: 'Mostra lista',
        stato2: 'Nascondi lista'
    }
    },
    methods: {
        addTask(){
            this.listaTask.push(this.taskValue)
        },
        mostraNascondi() {
            if (this.nascondi === true) {
                this.nascondi = !this.nascondi;
            } else if (this.nascondi === false) {
                this.nascondi = !this.nascondi;
            }
        },
    }
});
app.mount('#assignment')
console.log('sono collegato a js')