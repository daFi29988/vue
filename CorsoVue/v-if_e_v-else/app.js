const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalValue)
    }
  }
});

app.mount('#user-goals');
