<template>
    <ul>
        <li v-for="goal in goals" :key='goal'>
            {{ goal }}
        </li>
    </ul>
</template>

<script>
export default {
data() {
    return {
        goals: ['Finish the course', 'Learn Vue']
    }
}
};
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

    }
</style>