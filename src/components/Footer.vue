<template>


    <footer class="text-center">
        <!-- Grid container -->
        <div class="container p-4">

            <h3>Contact</h3>

            <p>{{author}}</p>
            <p>{{phone}}</p>
            <p>{{mail}}</p>

        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3">
            <p>{{location}}</p>
        </div>
        <!-- Copyright -->
        </footer>

</template>

<script>
import { getAuthor, getPhone, getLocation, getMail } from '@/Utils/AboutUtils.js'

    export default {
        data() {
            return{

                author: 'Author',
                phone: 'Phone',
                mail: 'Mail',
                location: 'Location',


            }
        },
        created() {

            this.author = getAuthor()
            this.phone = getPhone()
            this.location = getLocation()
            this.mail = getMail()

        }
    }
</script>

<style scoped>

    footer {
        background-color: #444444;
        color: white;
        text-align: center;
        height: 300px;
        width: 100vw;
        display:flex;
        flex-direction:column;
        align-items:center;
    }

</style>