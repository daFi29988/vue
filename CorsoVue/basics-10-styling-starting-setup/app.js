const app = Vue.createApp({
    data() {
        return {
            boxASelezionato: false,
            boxBSelezionato: false,
            boxCSelezionato: false,
        };
},
    computed: {
        boxAClasses() {
            return {active: boxASelezionato}
        }
    },
    methods: {
        boxSelezionato(box) {
            if (box === 'A') {
            this.boxASelezionato = !this.boxASelezionato;
            } else if (box === 'B') {
                this.boxBSelezionato = !this.boxBSelezionato;
            } else if (box === 'C') {
                this.boxCSelezionato = !this.boxCSelezionato;
            }
        }
    }
});

app.mount('#styling')