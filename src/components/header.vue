<template>
    <header>
    <v-layout justify-center>
        <v-flex md8>
            <v-toolbar height="80px" class="primary" dark>
                <v-toolbar-title>UberFilm</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                <v-btn v-on:click="accueil" flat>Accueil</v-btn>
                <v-btn v-on:click="movienew" flat>Créer Film</v-btn>
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
        accueil : function(){
            this.$router.push({ path: `/` })
        },movienew : function(){
            this.$router.push({ path: `/new/` })
        }
    }
}
</script>
<style>
</style>
