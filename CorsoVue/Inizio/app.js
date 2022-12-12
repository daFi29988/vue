const app = Vue.createApp({
    data() {
        return{
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'http://google.it/',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the course and Mastery Vue'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');