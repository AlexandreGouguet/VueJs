<template>
    <header>
    <v-layout justify-center>
        <v-flex md8>
            <v-toolbar class="primary" dark>
                <v-toolbar-title>UberFilm</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                <v-btn flat>Link One</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-flex>
    </v-layout>

    </header>
</template>
<script>
export default {
    props: ["movie"],
    data: function() {
        return {
            //data
        }
    },
    methods: {
        editfilm : function(){
            this.$router.push({ path: `/edit/${this.movie.id}` })
        },showdetails : function(){
            this.$router.push({ path: `/show/${this.movie.id}` })
        },removefilm : function(){
            this.$emit('remove')
        }
    }
}
</script>
<style>
</style>
