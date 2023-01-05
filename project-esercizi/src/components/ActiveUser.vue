<template>
    <section>
        <h1>{{ username }}</h1>
        <h3>{{ userage }}</h3>
    </section>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        userage: {
            type: Number,
            required: true,
        }
    }
};
</script>