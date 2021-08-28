<template>

    <div class="card text-center songCard" style="height: 65vh; width: 100%;">

        <img
        :src="image"
        class="card-img-top rounded"
        :alt="name"
        >

        <div class="card-body" >

            <div class="row" style="overflow-y: scroll; height: 150px;">

                <h5 class="card-title trackName">{{ name }}</h5>
                <p class="card-text trackInfo">{{ album }} - {{artist}}</p>
                <p class="card-text trackRelease">{{ time }}</p>

            </div>


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
        margin: 20px;
        background-color: #444444;
        color: white;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        max-width: 88%;
        height: 100%;

    }

    img {
        border-style: solid;
        border-width: 1px;
        margin-top: 20px;
        border-color: black;
        width: 95%;
        min-height: 60%;
        max-height: 60%;
        
    }

    .buyButton {
        background-color: #013220;
        color: white;
        width: 40%;
        margin-top: 5px;
    }

</style>