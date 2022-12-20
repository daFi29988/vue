const app = Vue.createApp ({
    data() {
    return {
        listaTask: [],
        taskValue: '',
        nascondi: true,
        buttonState: 'Nascondi lista'
        
    }
    },
    methods: {
        addTask(){
            this.listaTask.push(this.taskValue)
            this.taskValue = '';
        },
        mostraNascondi() {
            if (this.nascondi === true) {
                this.nascondi = !this.nascondi;
                this.buttonState = 'Mostra lista'
            } else if (this.nascondi === false) {
                this.nascondi = !this.nascondi;
                this.buttonState = 'Nascondi lista'
            }
        },
        stateButton(){}
    }
});
app.mount('#assignment')
console.log('sono collegato a js')

if (true) {

}