<template>
    <div>
        Navigation
    </div>
</template>

<script>
    export default {
        name: 'Navigation',

        fetch: ({store}) => store.dispatch('fetchCategories'),
    }
</script>

<style>

</style>
