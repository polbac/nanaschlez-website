<template>
    <h2>{{text}}</h2>
</template>

<script>
    export default {
        name: 'SectionTitle',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style>
    h2 {
        font-size: 46px;
        margin-bottom: 50px;
    }
</style>

