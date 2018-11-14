<template>
    <article>
        {{text}}
    </article>
</template>

<script>
    export default {
        name: 'Parraph',
        props: {
            text: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style>
    h2 {
        font-size: 16px;
    }
</style>

