<template>
    <h1>Card</h1>
</template>

<script>
    
    export default {
        
        name: 'SongCard',
        
        props: {

            image: String,
            name: String,
            artist: String,
            album: String,
            time: String,
            price: String,

        },

    }

</script>

<style scoped>

</style>