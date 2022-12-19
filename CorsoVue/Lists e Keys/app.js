const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
