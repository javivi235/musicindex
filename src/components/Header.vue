<template>
    <nav id="navbar" class="navbar">
        <div class="container-fluid">
            <router-link id="appName" class="navbar-brand" to="/">{{title}}</router-link>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'Header',

        props: {

            title: String,

        }

    }

</script>

<style scoped>

#navbar {
    background-color: #444444;
    align-content: center;
}
div {
    display: flex;
    justify-content: space-around;
    align-content: center;
}
#appName {
    color: white;
    width: 50%;
    margin: 0 auto;
}

</style>