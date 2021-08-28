<template>
    <div class="input-group rounded searchContainer">
        <input
        v-model="text"
        id="searchInput"
        type="search"
        class="form-control rounded"
        placeholder="Write the name of a son or an artist here!"
        aria-label="Search"
        aria-describedby="search-addon" />
        <span
        class="input-group-text border-0"
        id="searchSpan">
            <i
            id="searchButton"
            class="fas fa-search"
            @click="search"
            >
            </i>
        </span>
    </div>
</template>

<script>
    
    export default {
        name: 'searchBar',

        data() {
        
            return {
            
                text: ''
            
            }
        
        },
        
        methods: {
            search(){

                this.$emit('searchSong', this.text)
                this.text = ''

            }
        }
    }

</script>

<style scoped>

    div {
        align-items: center;
        margin-top: 20px;
    }

    #searchSpan {

        height: 40px;
        width: 40px;

    }

</style>