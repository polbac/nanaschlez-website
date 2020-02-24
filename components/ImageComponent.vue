<template>
    <div>
        <img v-bind:src='source.url' v-bind:alt='source.alt' />
    </div>
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

    img{
        width: 100%;
    }
</style>

