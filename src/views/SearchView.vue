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