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
        font-size: 26px;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    @media (max-width: 600px){
        h2{
            text-align: center;
        }
    }
</style>

