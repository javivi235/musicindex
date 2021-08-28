<template>

    <div style="margin-top: 20px;">

        <div class="row">

            <div :key="i" class="col" v-for="(song, i) in renderedSongs">

                <SongElement
                :image="song.artworkUrl100"
                :name="song.trackName"
                :artist="song.artistName"
                :album="song.collectionName"
                :time="getYear(song.releaseDate)"
                :price="getPrice(song.trackPrice, song.currency)"
                :link="song.trackViewUrl"
                />

            </div>

        </div>

        <div class="row">

            <div class="col">

                <button
                v-if = "isTherePrevPage"
                type="button"
                class="btn btn-outline-dark leftMost"
                id = "prevPageButton"
                @click = "page--"
                >
                Previous
                </button>

            </div>

            
            <div class="col" >

                <button
                v-if = "isThereNextPage"
                type="button"
                class="btn btn-outline-dark rightMost"
                id = "nextPageButton"
                @click = "page++"
                >
                Next
                </button>

            </div>

        </div>

    </div>

    
    
</template>

<script>

    import SongElement from './SongElement.vue'
    
    export default {
        
        name: 'SongsList',
        
        props: {

            songs : {

                type: Array,
                default: () => []

            }

        },

        components: {

            SongElement

        },

        methods: {

            getYear(date) {

                return date.substring(0,4)

            },

            getPrice(price, currency) {

                return price.toString() + ' ' + currency

            }

        },

        data() {

            return {

                page : 0
            
            }

        },

        computed: {

            renderedSongs() {

                if (this.songs === undefined || this.songs === null) {
                
                    return []
                
                } else {

                    let list = []

                    for (var i = 0; i < 3; i++) {

                        if (this.songs.length > (i + this.page*3)) {

                            list.push(this.songs[(i + this.page*3)])

                        }

                    }

                    return list

                }

                

            },

            isThereNextPage() {

                if (this.songs === undefined || this.songs === null) {
                
                    return false
                
                } else {

                    if ( Math.ceil(this.songs.length / 3) - 1 > this.page) {
                    
                    return true
                
                    } else {

                        return false

                    }

                }


            },

            isTherePrevPage() {
                if (this.songs === undefined || this.songs === null) {
                
                    return false
                
                } else {

                    if (this.page === 0) {
                    
                        return false

                    } else {

                        return true

                    }

                }

                if (this.page === 0) {
                    
                    return false

                } else {

                    return true

                }

            }

        },

        watch: {

            songs: function(val) {
                this.page = 0
            }

        }

    }

</script>

<style scoped>

    .leftMost {

       float: left;
       margin-left: 30px;
       margin-top: 10px;

    }

    .rightMost {
        float: right;
        margin-right: 30px;
        margin-top: 10px;
    }

    button {

        width: 100px;

    }

</style>