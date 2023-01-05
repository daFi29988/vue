<template>
    
        <h2>Menage Goals</h2>
        <input type="text" ref='goal'/>
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input non valido</h2>
            <p>Perfavore inserisci dei caratteri validi</p>
            <button @click="confirmError">Ho capito</button>
        </error-alert>
        </teleport>
    
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    components: {
        ErrorAlert,
    },
    data() {
        return {
        inputIsInvalid: false
    };
},
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>