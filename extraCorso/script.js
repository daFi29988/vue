const app = Vue.createApp({
data() {
    return {
    result: 0
}
},
methods: {
    add(num) {
        this.result = this.result + num;
        if (num > 11 || num == 12) {
            return 'cazzo guardi'
        }
    }
}
})
app.mount('#assignment')