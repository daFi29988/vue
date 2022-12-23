<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '012 34567 89',
                    email: 'manuel@localhost.com'
            },
        };
    },
    methods: {
        toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    }
}
};
</script>