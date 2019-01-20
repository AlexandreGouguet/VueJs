<template>
<div>
    <span id="msg">{{ $route.params.var }}</span>

    <p>Movie number : {{movies.length}}</p>
    <p>
        New movie<br />
        Title : <input type="text" v-model="movie_to_add.title" /><br />
        Year : <input type="text" v-model="movie_to_add.year" /><br />
        Synopsys : <textarea v-model="movie_to_add.synopsys"></textarea><br />
        <button v-on:click="newmovie">Add</button>
    </p>
    Search : <input type="text" v-model="search" />

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:remove="remove(index)"></movie-item>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello",
            movie_to_add: {},
            search: "",
            movies: window.movies
        }
    },

    methods: {
        newmovie: function() {
            this.movie_to_add.id = this.movies.length;
            this.movies.push(this.movie_to_add)
            this.movie_to_add = {}
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        }
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>