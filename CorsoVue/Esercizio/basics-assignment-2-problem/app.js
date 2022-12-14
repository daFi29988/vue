const app = Vue.createApp ({
data(){
    return {
        name: '',
        confermName: '',
        confermName_Enter: '',
    };
},
methods: {
    alertConf () {
        alert('Benvenuto nella pagina');
    },
    confermaInput(){
        this.confermName = this.name;
    },
    salvaName(event){
        this.name = event.target.value;
    },
    confermaInput_Enter(){
        this.confermName_Enter = this.name;
    },
    salvaName_Enter(event){
        this.name = event.target.value;
    },
}
});
app.mount('#assignment');