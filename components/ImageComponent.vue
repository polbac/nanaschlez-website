<template>
    
    <div>
        <img v-bind:src='source.url' v-bind:alt='source.alt' />
    </div>
</template>

<script>
import { Parraph } from './Parraph';

export default {
    name: 'ImageComponent',
    component: [ Parraph ],
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

