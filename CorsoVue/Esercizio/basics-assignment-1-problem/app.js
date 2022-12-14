const app = Vue.createApp({
    data() {
        return{
            name: 'Daniel',
            age: 24,
            five: 5,
            img:' https://www.shutterstock.com/image-illustration/hello-world-python-coding-illustration-260nw-2171149411.jpg',

        };
    },
    methods: {
        favoriteNumber() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
            return 1;
        } else {
            return 0;
        }
        },
        age_plus(){
            const age = this.age;
            if (age == age)
            return age + 5;
        }
    },
});

app.mount('#assignment');