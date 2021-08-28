<template>

    <div class="card songCard" style="width: 18rem;">

        <img
        :src="image"
        class="card-img-top rounded"
        :alt="name"
        >

        <div class="card-body">

            <h5 class="card-title trackName">{{ name }}</h5>
            <p class="card-text trackInfo">{{ album }} - {{artist}}</p>
            <p class="card-text trackRelease">{{ time }}</p>
            <a
            class="btn buyButton"
            :href="link"
            role="button"
            target="_blank"
            >
            {{ price }} 
            </a>

        </div>

    </div>

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
            link: String

        },

    }

</script>

<style scoped>

    .songCard {

        align-items: center;
        margin: 30px;
        background-color: #444444;
        color: white;
        border-style: solid;
        border-width: 1px;
        border-color: black;

    }

    img {
        border-style: solid;
        border-width: 1px;
        margin-top: 20px;
        border-color: black;
        width: 98%;
        height: 60%;
        
    }

    .buyButton {
        background-color: #013220;
        color: white;
    }

</style>