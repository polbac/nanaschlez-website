<template>
    
    <picture>
        <img v-bind:src='source.url' v-bind:alt='source.alt' />
    </picture>
</template>

<script>
    export default {
        name: 'ImageComponent',
        props: {
            source: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style>
    
</style>

