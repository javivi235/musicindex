<template>
    <div>

        <div id="searchContainer" class="container rounded">
            <div class="row">
               <SearchBar @searchSong="searchSong"/>
            </div>
        </div>

    </div>
</template>

<script>
    import SearchBar from '@/components/SearchBar.vue'
    import { searchSong } from '../Utils/ITunesAPIUtil.js'

    export default {

        methods: {

            async searchSong(text) {

                const result = await searchSong(text)
                console.log(result)

            }

        },
        components: {

            SearchBar,
        
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