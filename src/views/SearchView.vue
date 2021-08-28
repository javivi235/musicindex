<template>
    <div>

        <div id="searchContainer" class="container rounded">
            <div class="row">
               <button @click="click()">Press</button>
            </div>
        </div>

    </div>
</template>

<script>
    import { searchSong } from '../Utils/ITunesAPIUtil.js'
    export default {
        methods: {
            async click(){

                const result = await searchSong('lorde')
                console.log(result)

            }
        }
    }
</script>

<style scoped>

    #searchContainer {
        background-color: white;
        height: 85vh;
        margin-top: 4vh;
    }

</style>