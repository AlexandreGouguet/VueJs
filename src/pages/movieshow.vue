<template>
    <div>
        <v-layout md8 mt-3 justify-center>
            <v-flex md8>
                <h1>{{ movie.title }} ({{movie.type}})</h1>
                <p>Réalisé en {{movie.year}}</p>
                <p>Langue disponible : {{movie.language}}</p>
                <v-expansion-panel md8>
                    <v-expansion-panel-content>
                        <div slot="header">Par {{movie.realisator.name}}</div>
                        <v-card>
                            <v-card-text>
                                Né(e) le {{movie.realisator.birthdate}}<br/>
                                Nationalité : {{movie.realisator.nationality}}
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
        <v-layout justify-center mt-4>
            <v-flex md8>
                <v-img v-bind:src="movie.imgUrl">
                </v-img>
            </v-flex>
        </v-layout>
        <v-layout md8 justify-center>
            <v-flex md8 mt-3>
                <v-rating v-model="movie.rating"></v-rating>
                <p>{{movie.synopsys}}</p>
                 <v-layout justify-end>
                    <v-btn offset-md2 v-on:click="editfilm">Editer</v-btn>
                    <v-btn color="secondary darken-1" v-on:click="removefilm">Supprimer</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>


</template>
<script>
export default {
    data: function() {
        return {
            movies: window.movies
        }
    },
    methods: {
        editfilm : function(){
            this.$router.push({ path: `/movie/${this.movie.id}/edit` })
        },
        removefilm : function(){
            this.movies.splice(this.movies.findIndex(movie => movie.id === this.movie.id), 1);
            this.$router.push({ path: `/` });
        }
    },
    computed: {
        movie: function(){
            return this.movies[this.$route.params.id];
        }
    }
}
</script>