<template>
    <div>

        <div id="searchContainer" class="container rounded">
            <div class="row">
               <SearchBar @searchSong="searchSong"/>
            </div>
            <div class="row">
                <SongElement
                image = "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/2b/99/68/2b996877-2fbe-391a-07f1-886df7d304c8/source/100x100bb.jpg"
                name = "Boss's Daugther"
                artist = "Pop Evil"
                album = "War of Angels"
                time = "2011"
                price = "7.99 USD"
                link = "https://music.apple.com/us/album/bosss-daughter/483220906?i=483221313&uo=4"
                />
            </div>
        </div>

    </div>
</template>

<script>
    import SearchBar from '@/components/SearchBar.vue'
    import SongElement from '@/components/SongElement.vue'
    import { searchSong } from '../Utils/ITunesAPIUtil.js'

    export default {

        name: 'SearchView',

        data() {

            return{

                results: []

            }

        },

        methods: {

            async searchSong(text) {

                this.results = await searchSong(text)

                if (this.results.length === 0)
                    alert("No results found")

            }

        },
        components: {

            SearchBar,
            SongElement,
        
        },
    
    }
</script>

<style scoped>

    #searchContainer {
        background-color: white;
        height: 85vh;
        margin-top: 4vh;
    }

</style>