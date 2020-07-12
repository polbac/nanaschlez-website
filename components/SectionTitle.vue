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
        position: fixed;
        bottom: 20px;
        right: 20px;
        transform: translatey(0px);
	    animation: float 6s ease-in-out infinite;
        max-width: 240px;
        text-align: right;
        z-index: 99;
    }

    @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
        opacity: 0.5;
	}
	100% {
		transform: translatey(0px);
	}
}

    @media (max-width: 600px){
        h2{
            text-align: center;
            position: static;
            animation: none;
            max-width: auto;
        }
    }
</style>

