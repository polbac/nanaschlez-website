<template>
    <article class='parraph'>
          <p v-for="parraph in text">
              {{parraph.text}}
        </p>
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
        },
    }
</script>

<style>
    .parraph {
        font-size: 16px;
    }
</style>

